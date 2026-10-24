import fs from "fs";
import path from "path";
import { Redis } from "@upstash/redis";

export interface VoteCounts {
  naruto: number;
  luffy: number;
  goku: number;
  total: number;
}

export interface VoterRecord {
  handle: string;
  heroId: string;
  timestamp: string;
}

export interface DatabaseSchema {
  votes: {
    naruto: number;
    luffy: number;
    goku: number;
  };
  voters: VoterRecord[];
}

export interface VoteResult {
  success: boolean;
  message?: string;
  error?: string;
  votes?: VoteCounts;
  userVotedHero?: string;
}

// Prazo final para encerramento das votações dos personagens: 18 de Novembro de 2026 às 23:59:59 (Horário de Brasília, UTC-3)
export const VOTING_DEADLINE = new Date("2026-11-18T23:59:59-03:00");

export function isVotingClosed(): boolean {
  return new Date() > VOTING_DEADLINE;
}

// Valores iniciais zerados para contagem real da comunidade
const BASELINE_VOTES = {
  naruto: 0,
  luffy: 0,
  goku: 0,
} as const;

// Caminho do arquivo JSON de banco de dados nativo
// Na Vercel (serverless), o filesystem do projeto é read-only (/var/task). Usamos /tmp que é gravável.
const DB_FILE_PATH = process.env.VERCEL
  ? path.join("/tmp", "votes.json")
  : path.join(process.cwd(), "data", "votes.json");

// Cache em memória para casos de filesystem somente-leitura ou reinício rápido
let memoryCache: DatabaseSchema = {
  votes: {
    naruto: BASELINE_VOTES.naruto,
    luffy: BASELINE_VOTES.luffy,
    goku: BASELINE_VOTES.goku,
  },
  voters: [],
};

/**
 * Inicializa o arquivo local em /tmp na Vercel a partir do template em data/votes.json
 */
function initLocalDatabaseFile(): void {
  try {
    if (process.env.VERCEL) {
      const sourceTemplate = path.join(process.cwd(), "data", "votes.json");
      if (!fs.existsSync(DB_FILE_PATH) && fs.existsSync(sourceTemplate)) {
        fs.copyFileSync(sourceTemplate, DB_FILE_PATH);
      }
    }
  } catch (err) {
    console.warn("Aviso ao inicializar DB_FILE_PATH:", err);
  }
}

/**
 * Lê o banco de dados local nativo (JSON)
 */
function loadLocalDatabase(): DatabaseSchema {
  try {
    initLocalDatabaseFile();
    if (fs.existsSync(DB_FILE_PATH)) {
      const raw = fs.readFileSync(DB_FILE_PATH, "utf-8");
      const parsed = JSON.parse(raw);
      if (parsed && parsed.votes && Array.isArray(parsed.voters)) {
        // Se a memória já possui mais votos que o disco (caso a escrita tenha falhado), mantém a memória
        const diskTotal =
          Number(parsed.votes.naruto || 0) +
          Number(parsed.votes.luffy || 0) +
          Number(parsed.votes.goku || 0);
        const memTotal =
          Number(memoryCache.votes.naruto || 0) +
          Number(memoryCache.votes.luffy || 0) +
          Number(memoryCache.votes.goku || 0);

        if (diskTotal >= memTotal) {
          memoryCache = parsed;
          return parsed;
        }
      }
    }
  } catch (err) {
    console.warn("Aviso ao ler banco local, usando cache em memória:", err);
  }
  return memoryCache;
}

/**
 * Salva os dados no banco de dados local nativo (JSON)
 */
function saveLocalDatabase(data: DatabaseSchema): void {
  memoryCache = data;
  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.warn("Aviso ao gravar no banco local:", err);
  }
}

/**
 * Verifica se o Redis na nuvem (Vercel KV ou Upstash) está configurado
 */
export function isRedisAvailable(): boolean {
  return !!(
    (process.env.KV_REST_API_URL ||
      process.env.UPSTASH_REDIS_REST_URL ||
      process.env.REDIS_URL) &&
    (process.env.KV_REST_API_TOKEN ||
      process.env.UPSTASH_REDIS_REST_TOKEN ||
      process.env.REDIS_TOKEN)
  );
}

/**
 * Tenta inicializar o cliente Redis caso as variáveis da Vercel ou Upstash estejam presentes.
 */
function getRedisClient(): Redis | null {
  const url =
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.REDIS_URL;
  const token =
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.REDIS_TOKEN;

  if (url && token) {
    try {
      return new Redis({ url, token });
    } catch (err) {
      console.warn("Falha ao inicializar Redis com credenciais explícitas:", err);
    }
  }

  try {
    return Redis.fromEnv();
  } catch {
    return null;
  }
}

/**
 * Normaliza e limpa o @ do Instagram
 */
export function sanitizeInstagramHandle(raw: string): string {
  let clean = raw.trim().toLowerCase();
  if (clean.startsWith("@")) {
    clean = clean.slice(1);
  }
  // Permite apenas caracteres válidos no Instagram (letras, números, pontos e underlines)
  clean = clean.replace(/[^a-z0-9._]/g, "");
  return clean;
}

/**
 * Obtém a contagem atual dos votos de cada guerreiro
 */
export async function getVoteCounts(): Promise<VoteCounts> {
  const redis = getRedisClient();

  if (redis) {
    try {
      const data = await redis.hgetall<Record<string, number | string>>("garranime:hero_votes");
      const naruto = Number(data?.naruto ?? BASELINE_VOTES.naruto);
      const luffy = Number(data?.luffy ?? BASELINE_VOTES.luffy);
      const goku = Number(data?.goku ?? BASELINE_VOTES.goku);
      const total = naruto + luffy + goku;
      return { naruto, luffy, goku, total };
    } catch (e) {
      console.warn("Erro ao buscar votos no Redis, usando fallback local:", e);
    }
  }

  // Fallback nativo: lê do banco local JSON
  const db = loadLocalDatabase();
  const naruto = Number(db.votes.naruto ?? BASELINE_VOTES.naruto);
  const luffy = Number(db.votes.luffy ?? BASELINE_VOTES.luffy);
  const goku = Number(db.votes.goku ?? BASELINE_VOTES.goku);
  const total = naruto + luffy + goku;

  return { naruto, luffy, goku, total };
}

/**
 * Registra um novo voto com trava de unicidade pelo @ do Instagram
 */
export async function registerVote(heroId: string, rawInstagram: string): Promise<VoteResult> {
  // Trava de prazo: votação encerra dia 18 de Novembro de 2026
  if (isVotingClosed()) {
    const votes = await getVoteCounts();
    return {
      success: false,
      error: "VOTING_CLOSED",
      message: "A votação dos personagens foi encerrada no dia 18 de Novembro! O resultado oficial será anunciado no palco do evento (22/Nov).",
      votes,
    };
  }

  const validHeroes = ["naruto", "luffy", "goku"];
  if (!validHeroes.includes(heroId)) {
    return { success: false, error: "INVALID_HERO", message: "Guerreiro inválido selecionado." };
  }

  const cleanHandle = sanitizeInstagramHandle(rawInstagram);
  if (!cleanHandle || cleanHandle.length < 2) {
    return {
      success: false,
      error: "INVALID_INSTAGRAM",
      message: "Por favor, digite um @ de Instagram válido.",
    };
  }

  const redis = getRedisClient();

  if (redis) {
    try {
      // Verifica se o usuário já votou
      const alreadyVoted = await redis.sismember("garranime:voters", cleanHandle);
      if (alreadyVoted) {
        const votes = await getVoteCounts();
        return {
          success: false,
          error: "ALREADY_VOTED",
          message: `O perfil @${cleanHandle} já registrou um voto nesta disputa! Cada perfil tem direito a 1 voto.`,
          votes,
        };
      }

      // Registra o votante no conjunto de unicidade
      await redis.sadd("garranime:voters", cleanHandle);

      // Incrementa o voto do personagem
      await redis.hincrby("garranime:hero_votes", heroId, 1);

      // Salva qual foi o herói votado pelo usuário para consulta
      await redis.hset("garranime:voter_choice", { [cleanHandle]: heroId });

      const updatedVotes = await getVoteCounts();
      return {
        success: true,
        message: `Voto confirmado no guerreiro com sucesso! Seu @${cleanHandle} está concorrendo ao brinde especial!`,
        votes: updatedVotes,
        userVotedHero: heroId,
      };
    } catch (err) {
      console.error("Erro ao gravar no Redis, tentando banco local:", err);
    }
  }

  // Fallback nativo: banco local JSON
  const db = loadLocalDatabase();
  const alreadyVoted = db.voters.some((v) => v.handle === cleanHandle);

  const currentVotes: VoteCounts = {
    naruto: db.votes.naruto,
    luffy: db.votes.luffy,
    goku: db.votes.goku,
    total: db.votes.naruto + db.votes.luffy + db.votes.goku,
  };

  if (alreadyVoted) {
    return {
      success: false,
      error: "ALREADY_VOTED",
      message: `O perfil @${cleanHandle} já registrou um voto nesta disputa! Cada perfil tem direito a 1 voto.`,
      votes: currentVotes,
    };
  }

  // Incrementa contagem do herói
  db.votes[heroId as keyof typeof db.votes] = (db.votes[heroId as keyof typeof db.votes] || 0) + 1;
  db.voters.push({
    handle: cleanHandle,
    heroId,
    timestamp: new Date().toISOString(),
  });

  saveLocalDatabase(db);

  const updatedTotal = db.votes.naruto + db.votes.luffy + db.votes.goku;
  return {
    success: true,
    message: `Voto confirmado com sucesso! Seu @${cleanHandle} está registrado para a premiação da caneca no dia do evento!`,
    votes: {
      naruto: db.votes.naruto,
      luffy: db.votes.luffy,
      goku: db.votes.goku,
      total: updatedTotal,
    },
    userVotedHero: heroId,
  };
}

/**
 * Retorna a lista de todos os votantes (para sorteio da organização)
 */
export async function getVotersList(): Promise<VoterRecord[]> {
  const redis = getRedisClient();
  if (redis) {
    try {
      const choices = await redis.hgetall<Record<string, string>>("garranime:voter_choice");
      if (choices) {
        return Object.entries(choices).map(([handle, heroId]) => ({
          handle,
          heroId: String(heroId),
          timestamp: new Date().toISOString(),
        }));
      }
    } catch (e) {
      console.warn("Erro ao buscar votantes no Redis:", e);
    }
  }

  const db = loadLocalDatabase();
  return db.voters;
}
