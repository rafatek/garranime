"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { VoteCounts } from "@/lib/voteStorage";
import { Users, Sparkles, Trophy, Coffee, CheckCircle2, Swords, Flame, Crown } from "lucide-react";
import GamerButton from "./GamerButton";
import CharacterVoteModal from "./CharacterVoteModal";

export const GEEK_HEROES = [
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    title: "Herói de Konoha & Espírito Shonen",
    image: "/assets/personagens/naruto.webp",
    quote: "Meu jeito ninja de ser no 1º Garranime!",
    archetype: "Ninja Shonen",
    color: "#FF7A00",
    energyName: "Chakra",
    stats: {
      Chakra: 99,
      Determinação: 100,
      Apetite: 95,
      Poder: 92,
    },
  },
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    title: "Capitão do Chapéu de Palha",
    image: "/assets/personagens/luffy.webp",
    quote: "Vou ser o Rei dos Cosplayers e comer toda a praça de alimentação!",
    archetype: "Pirata dos Chapéus de Palha",
    color: "#EF4444",
    energyName: "Haki",
    stats: {
      Chakra: 94,
      Determinação: 100,
      Apetite: 100,
      Poder: 96,
    },
  },
  {
    id: "goku",
    name: "Son Goku",
    title: "Guerreiro Saiyajin Lendário",
    image: "/assets/personagens/goku.webp",
    quote: "Ouvi dizer que tem guerreiros fortes em Garrafão do Norte!",
    archetype: "Guerreiro Z Lendário",
    color: "#00D2FF",
    energyName: "Ki",
    stats: {
      Chakra: 100,
      Determinação: 98,
      Apetite: 100,
      Poder: 100,
    },
  },
];

interface CharacterSelectProps {
  onOpenSalas?: () => void;
}

export default function CharacterSelect({ onOpenSalas }: CharacterSelectProps) {
  const [selectedHero, setSelectedHero] = useState(0);
  const [voteModalOpen, setVoteModalOpen] = useState(false);
  const [userVote, setUserVote] = useState<{ heroId: string; handle: string } | null>(null);

  // Placar inicial zerado
  const [votes, setVotes] = useState<VoteCounts>({
    naruto: 0,
    luffy: 0,
    goku: 0,
    total: 0,
  });

  // Busca votos e verifica voto prévio no localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("garranime_user_vote");
      if (stored) {
        setUserVote(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("LocalStorage indisponível:", e);
    }

    const fetchVotes = async () => {
      try {
        const res = await fetch("/api/vote");
        const data = await res.json();
        if (data.success && data.votes) {
          setVotes(data.votes);
        }
      } catch (err) {
        console.warn("Usando contagem padrão de votos:", err);
      }
    };

    fetchVotes();
  }, []);

  const handleHeroSelect = (index: number) => {
    sound.playSelect();
    setSelectedHero(index);
  };

  const handleOpenVoteModal = () => {
    sound.playConfirm();
    setVoteModalOpen(true);
  };

  const handleVoteSuccess = (updatedVotes: VoteCounts, heroId: string, handle: string) => {
    setVotes(updatedVotes);
    setUserVote({ heroId, handle });
  };

  const current = GEEK_HEROES[selectedHero];
  const totalVotes = votes.total;

  // Percentuais de cada guerreiro (0% se ainda não houver votos)
  const narutoPct = totalVotes > 0 ? Math.round((votes.naruto / totalVotes) * 100) : 0;
  const luffyPct = totalVotes > 0 ? Math.round((votes.luffy / totalVotes) * 100) : 0;
  const gokuPct = totalVotes > 0 ? Math.round((votes.goku / totalVotes) * 100) : 0;

  const leaderboard = [
    {
      hero: GEEK_HEROES[0],
      count: votes.naruto,
      pct: narutoPct,
      color: "#FF7A00",
      bgGradient: "from-[#FF7A00] to-[#FFE600]",
      badge: "LÍDER DA VILA",
    },
    {
      hero: GEEK_HEROES[1],
      count: votes.luffy,
      pct: luffyPct,
      color: "#EF4444",
      bgGradient: "from-[#EF4444] to-[#F59E0B]",
      badge: "CAPITÃO",
    },
    {
      hero: GEEK_HEROES[2],
      count: votes.goku,
      pct: gokuPct,
      color: "#00D2FF",
      bgGradient: "from-[#00D2FF] to-[#3B82F6]",
      badge: "SAIYAJIN",
    },
  ].sort((a, b) => b.count - a.count);

  return (
    <section id="atracoes" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0F173D] border-b-4 border-[#1E2C6A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#FFE600] px-4 py-1.5 mb-3 clip-chamfer">
            <Trophy className="w-4 h-4 text-[#FFE600]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#FFE600] tracking-widest font-mono">
              VOTAÇÃO DA ARENA GEEK • BRINDE OFICIAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans">
            ESCOLHA SEU <span className="text-[#00D2FF]">GUERREIRO</span> & <span className="text-[#FF7A00]">VOTE</span>
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-xs sm:text-sm text-gray-300">
            Conheça os guerreiros, vote no seu herói favorito e ajude a escolher o brinde oficial do evento!
          </p>

          {/* Banner de Destaque da Caneca Temática */}
          <div className="mt-5 max-w-2xl mx-auto bg-[#070B28] border-2 border-[#FFE600] p-4 shonen-shadow-yellow text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FFE600] text-[#070B28] font-black shrink-0">
                <Coffee className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-black uppercase text-[#FFE600] tracking-wider block">
                  ☕ CANECA PERSONALIZADA OFICIAL
                </span>
                <p className="text-xs sm:text-sm text-white font-bold leading-snug">
                  O guerreiro mais votado virará uma caneca exclusiva + brindes secretos revelados no palco!
                </p>
                <p className="text-[11px] text-gray-400 font-mono">
                  Siga o <strong>@garranime</strong> no Instagram e confirme seu voto para concorrer.
                </p>
              </div>
            </div>

            <button
              onClick={handleOpenVoteModal}
              className="w-full sm:w-auto shrink-0 px-4 py-2 bg-[#FF7A00] hover:bg-[#ff8c1a] text-[#070B28] font-mono font-black text-xs uppercase tracking-wider border-2 border-white shonen-shadow-cyan transition-all"
            >
              VOTAR AGORA
            </button>
          </div>
        </div>

        {/* Character Select Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070B28] border-4 border-[#FF7A00] p-6 sm:p-8 shonen-shadow-orange mb-10">
          
          {/* Hero Roster Grid (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#00D2FF] font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFE600]" /> SELECIONE SEU PERSONAGEM:
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {GEEK_HEROES.map((hero, idx) => (
                <button
                  key={hero.id}
                  onClick={() => handleHeroSelect(idx)}
                  className={`relative p-2 border-2 transition-all duration-150 flex flex-col items-center ${
                    selectedHero === idx
                      ? "bg-[#0F173D] border-[#FFE600] shonen-shadow-yellow scale-105"
                      : "bg-[#070B28] border-[#1E2C6A] hover:border-[#FF7A00] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="relative w-16 h-20 sm:w-20 sm:h-24">
                    <Image
                      src={hero.image}
                      alt={hero.name}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black uppercase text-white truncate max-w-full mt-1">
                    {hero.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Hero Stats Card */}
            <div className="bg-[#0F173D] border border-[#1E2C6A] p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-[#1E2C6A] pb-2">
                <span className="text-xs font-mono font-bold text-[#FFE600]">
                  CLASSE: {current.archetype}
                </span>
                <span className="text-[10px] font-mono bg-[#FF7A00] text-[#070B28] font-black px-2 py-0.5">
                  RANK S
                </span>
              </div>

              {Object.entries(current.stats).map(([stat, val]) => (
                <div key={stat} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-gray-300">
                    <span>{stat}</span>
                    <span className="text-[#00D2FF] font-bold">{val} / 100</span>
                  </div>
                  <div className="w-full bg-[#070B28] h-2 border border-[#1E2C6A]">
                    <div
                      className="bg-gradient-to-r from-[#FF7A00] to-[#FFE600] h-full transition-all duration-300"
                      style={{ width: `${val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Big Portrait & Vote CTA (Right) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center text-center relative py-4">
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 drop-shadow-[0_0_35px_rgba(255,122,0,0.5)]">
              <Image
                src={current.image}
                alt={current.name}
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-contain"
              />
            </div>

            <div className="mt-4 max-w-md w-full space-y-3">
              <div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-sans tracking-wide">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#00D2FF] mt-1">
                  {current.title}
                </p>
                <blockquote className="mt-2 text-xs sm:text-sm italic text-gray-300 bg-[#0F173D] border-l-4 border-[#FF7A00] px-4 py-2 mx-auto">
                  "{current.quote}"
                </blockquote>
              </div>

              {/* Botão de Votação Direta do Guerreiro Selecionado */}
              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  ghost="orange"
                  showPacman
                  onClick={handleOpenVoteModal}
                  icon={<Trophy className="w-5 h-5 text-[#FFE600]" />}
                >
                  {userVote?.heroId === current.id
                    ? `SEU VOTO ESTÁ NO ${current.name.toUpperCase()} (CONFIRMADO)`
                    : `VOTAR NO ${current.name.toUpperCase()} (VALENDO CANECA)`}
                </GamerButton>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* PLACAR AO VIVO DA ARENA (LEADERBOARD EM TEMPO REAL)        */}
        {/* ========================================================== */}
        <div className="bg-[#070B28] border-4 border-[#00D2FF] p-6 sm:p-8 shonen-shadow-cyan mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-[#1E2C6A] mb-6 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#00D2FF] font-mono font-black text-xs uppercase tracking-wider mb-1">
                <Trophy className="w-4 h-4 text-[#FFE600]" />
                <span>PLACAR AO VIVO DA ARENA</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black uppercase text-white font-sans">
                DISPUTA PELO BRINDE OFICIAL
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
              <span className="text-xs font-mono font-bold text-gray-300">
                Total de Votos: <strong className="text-[#FFE600] text-sm">{votes.total}</strong>
              </span>
            </div>
          </div>

          {/* Ranking dos 3 Heróis com Barras de Energia */}
          <div className="space-y-4">
            {leaderboard.map((item, rankIdx) => {
              const isSelected = item.hero.id === current.id;
              const isUserChoice = userVote?.heroId === item.hero.id;

              return (
                <div
                  key={item.hero.id}
                  className={`p-4 border-2 transition-all ${
                    isUserChoice
                      ? "bg-[#0F173D] border-[#FFE600] shonen-shadow-yellow"
                      : isSelected
                      ? "bg-[#0A1138] border-[#00D2FF]"
                      : "bg-[#070B28] border-[#1E2C6A]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-black px-2 py-0.5 ${
                          rankIdx === 0
                            ? "bg-[#FFE600] text-[#070B28]"
                            : rankIdx === 1
                            ? "bg-gray-300 text-[#070B28]"
                            : "bg-[#CD7F32] text-white"
                        }`}
                      >
                        #{rankIdx + 1}
                      </span>
                      <strong className="text-sm sm:text-base font-black uppercase text-white font-sans">
                        {item.hero.name}
                      </strong>
                      <span className="text-[10px] font-mono text-gray-400 uppercase hidden sm:inline">
                        • {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 font-mono">
                      {isUserChoice && (
                        <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 border border-green-400/40 font-bold uppercase hidden sm:inline">
                          SEU VOTO
                        </span>
                      )}
                      <span className="text-xs text-gray-400">
                        {item.count} votos
                      </span>
                      <span className="text-base sm:text-lg font-black text-[#FFE600]">
                        {item.pct}%
                      </span>
                    </div>
                  </div>

                  {/* Barra de Energia */}
                  <div className="w-full bg-[#070B28] h-3.5 border border-[#1E2C6A] overflow-hidden p-0.5">
                    <div
                      className={`h-full bg-gradient-to-r ${item.bgGradient} transition-all duration-700`}
                      style={{ width: `${item.pct > 0 ? Math.max(item.pct, 4) : 0}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback se o usuário já votou */}
          {userVote && (
            <div className="mt-4 p-3 bg-[#0A1138] border border-green-400/50 flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-green-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Voto computado para <strong>@{userVote.handle}</strong>!
              </span>
              <span className="text-gray-300">
                Resultado oficial revelado no palco do Garranime (22/Nov)!
              </span>
            </div>
          )}
        </div>

        {/* Themed Rooms Compact Access Box (Salas Confirmadas) */}
        <div className="bg-[#070B28] border-4 border-[#FF7A00] p-6 sm:p-8 max-w-lg mx-auto text-center shonen-shadow-orange">
          <div className="inline-flex items-center gap-2 bg-[#0F173D] border border-[#FFE600] px-3.5 py-1 mb-3 clip-chamfer">
            <span className="text-base">⛩️</span>
            <span className="text-xs font-black uppercase text-[#FFE600] tracking-widest font-mono">
              AMBIENTES CONFIRMADOS
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans mb-2">
            SALAS <span className="text-[#00D2FF]">CONFIRMADAS</span>
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto mb-6 leading-relaxed">
            Karaokê, Sala RPG, Sala de Jogos, Just Dance, Sala para Cosplays, Fotos e Guarda Volumes.
          </p>

          <div className="w-full max-w-xs mx-auto">
            <GamerButton
              size="md"
              fullWidth
              onClick={() => {
                sound.playConfirm();
                if (onOpenSalas) onOpenSalas();
              }}
              icon={<Sparkles className="w-4 h-4" />}
            >
              VER SALAS CONFIRMADAS
            </GamerButton>
          </div>
        </div>

      </div>

      {/* Modal de Votação com Validação do Instagram */}
      <CharacterVoteModal
        isOpen={voteModalOpen}
        onClose={() => setVoteModalOpen(false)}
        hero={current}
        onVoteSuccess={handleVoteSuccess}
      />
    </section>
  );
}
