// Fonte da verdade: planejamento-evento-animes.md e design_system_identidade_visual_garranime.md

export interface EventData {
  title: string;
  subtitle: string;
  edition: string;
  dateText: string;
  city: string;
  state: string;
  venueName: string;
  venueStatus: string;
  targetDateISO: string;
  instagram: string;
  whatsappContact: string;
  whatsappDisplay?: string;
  whatsappContact2?: string;
  whatsappDisplay2?: string;
  pixKey: string;
  pixRecipient: string;
  pixBank?: string;
}

export const EVENT_DATA: EventData = {
  title: "GARRANIME",
  subtitle: "O Maior Evento de Anime e Cultura Geek de Garrafão do Norte",
  edition: "1º Evento Geek de Garrafão do Norte",
  dateText: "22 de Novembro",
  city: "Garrafão do Norte",
  state: "PA",
  venueName: "Escola Mário Brasil",
  venueStatus: "Confirmado na Escola Mário Brasil (A partir das 08h)",
  targetDateISO: "2026-11-22T08:00:00-03:00",
  instagram: "@garranime",
  whatsappContact: "5591985119031", // WhatsApp Oficial 1: +55 91 98511-9031
  whatsappDisplay: "+55 (91) 98511-9031",
  whatsappContact2: "559185367542", // WhatsApp Organizador 2: +55 91 8536-7542
  whatsappDisplay2: "+55 (91) 8536-7542",
  pixKey: "91985119031",
  pixRecipient: "Arlindo Costa da Silva",
  pixBank: "Nubank",
};

export const TICKET_PLANS = [
  {
    id: "antecipado",
    title: "Ingresso Antecipado",
    badge: "VÁLIDO ATÉ 15/NOV",
    badgeColor: "#FFE600",
    price: 10,
    priceFormatted: "R$ 10,00",
    tagline: "Válido até 15 de Novembro — Garanta sua vaga com desconto!",
    features: [
      "Valor promocional de R$ 10,00 válido apenas até 15/Nov",
      "Acesso completo a todas as áreas e salas temáticas",
      "Pulseira oficial do evento para identificação",
      "Direito de participar de gincanas e desafios interativos",
      "Participação no grande sorteio final de brindes geek",
    ],
    ctaText: "Comprar Antecipado (R$ 10)",
    featured: true,
  },
  {
    id: "na-hora",
    title: "Ingresso na Portaria",
    badge: "NO DIA DO EVENTO",
    badgeColor: "#00D2FF",
    price: 15,
    priceFormatted: "R$ 15,00",
    tagline: "Venda no local sujeito à lotação",
    features: [
      "Acesso a todas as áreas do evento",
      "Pulseira oficial conforme disponibilidade",
      "Participação nas gincanas e torneios",
      "Sujeito à capacidade do espaço",
    ],
    ctaText: "Ver Instruções de Pagamento",
    featured: false,
  },
];

export const EVENT_CAPACITY = {
  description: "Pulseiras oficiais de acesso para garantir o conforto e a segurança de todos os participantes.",
};

export const TOURNAMENTS = [
  {
    id: "naruto",
    name: "Naruto Shippuden Ultimate Ninja Storm",
    category: "Luta Gamer (Console)",
    platform: "Console / Joystick",
    rules: "Chaveamento mata-mata individual, melhor de 3 rounds. Proibido pause sem consentimento.",
    fee: "R$ 7,00 (Inscrição Individual Antecipada)",
    feeValue: 7,
    feeBadge: "R$ 7,00 INDIVIDUAL",
    isPaid: true,
    isDuo: false,
    reward: "Troféu Oficial + Brindes Geek",
    icon: "🎮",
  },
  {
    id: "freefire",
    name: "Free Fire (Mobile Battle)",
    category: "Mobile Gamer (Em Duplas)",
    platform: "Smartphones",
    rules: "Salas personalizadas em DUPLAS (Duo), pontuação por abates e colocação final. Proibido emulador.",
    fee: "R$ 14,00 por Dupla Antecipado (R$ 7,00 por pessoa)",
    feeValue: 14,
    feeBadge: "R$ 14,00 POR DUPLA (R$ 7/pessoa)",
    isPaid: true,
    isDuo: true,
    reward: "Medalhas + Brindes dos Patrocinadores",
    icon: "🔥",
  },
  {
    id: "clash",
    name: "Clash Royale (Duelo de Reis)",
    category: "Mobile Gamer (Individual)",
    platform: "Smartphones",
    rules: "Torneio individual em formato mata-mata / suíço rápido com nível de cartas padronizado.",
    fee: "R$ 7,00 (Inscrição Individual Antecipada)",
    feeValue: 7,
    feeBadge: "R$ 7,00 INDIVIDUAL",
    isPaid: true,
    isDuo: false,
    reward: "Brindes Exclusivos + Certificado Oficial",
    icon: "👑",
  },
];

export const COSPLAY_DATA = {
  title: "Concurso Oficial de Cosplay",
  fee: "Inscrição Totalmente Gratuita",
  accessRule:
    "O único pré-requisito é possuir a pulseira de entrada do evento. O participante deverá preencher os dados (música, apresentação, etc.) para concluir o cadastro.",
  categories: [
    {
      id: "kids",
      name: "Cosplay Kids",
      badge: "INFANTIL (0 A 13 ANOS)",
      color: "#00D2FF",
      desc: "Para as crianças e mini-heróis brilharem no palco com a família! Inscrição feita pelos pais ou responsáveis legais.",
      requirements: "Trilha musical opcional do anime/desenho preferido para o desfile no palco.",
    },
    {
      id: "cospobre",
      name: "Cospobre",
      badge: "CRIATIVIDADE & BAIXO CUSTO",
      color: "#FFE600",
      desc: "A competição mais divertida e amistosa do Garranime! Para quem improvisa com papelão, fita adesiva, materiais recicláveis e muita imaginação sem gastar quase nada.",
      requirements: "Foco total na criatividade, carisma e originalidade. Materiais caseiros e baixo custo são o grande diferencial!",
    },
    {
      id: "adulto",
      name: "Cosplay Tradicional (Adulto)",
      badge: "A PARTIR DE 14 ANOS",
      color: "#FF7A00",
      desc: "Para cosplayers a partir de 14 anos com trajes completos. Apresentação individual ou em dupla com tempo livre para encenação no palco.",
      requirements: "Necessário envio prévio de áudio/música de pelo menos 1 minuto via formulário ou WhatsApp oficial.",
    },
  ],
};

export const STAGE_COMPETITIONS = [
  {
    id: "danca",
    name: "Competição de Dança Geek",
    category: "K-Pop, Anime & Freestyle",
    platform: "Palco Principal",
    rules: "Apresentações solo, em dupla ou grupos de 3 a 5 integrantes (Trio, Quarteto e Quinteto). Duração máxima de 5 minutos por apresentação. Envio prévio da música sem conteúdos ofensivos.",
    fee: "Solo: R$ 7,00 | Dupla: R$ 14,00 | Grupos (3 a 5 integrantes): R$ 20,00 no total (Valores Antecipados)",
    feePrices: {
      solo: "R$ 7,00",
      dupla: "R$ 14,00",
      grupo: "R$ 20,00 (total do grupo de 3 a 5 integrantes)",
    },
    reward: "Troféu Oficial + Brindes Exclusivos",
    icon: "💃",
    badge: "PALCO PRINCIPAL",
    color: "#EC4899",
    editalSections: [
      { num: "01", title: "Valores & Inscrição Antecipada", text: "Inscrições antecipadas obrigatórias: Solo R$ 7,00 | Dupla R$ 14,00 | Grupos (Trio, Quarteto e Quinteto / de 3 a 5 integrantes) R$ 20,00 no total. Informar os nomes dos dançarinos e o estilo de dança." },
      { num: "02", title: "Número de Participantes", text: "Apresentações individuais, em dupla ou em grupo com no máximo 5 integrantes por apresentação." },
      { num: "03", title: "Tempo de Apresentação", text: "Cada apresentação terá duração máxima de 5 minutos, devendo ser rigorosamente respeitada por todos." },
      { num: "04", title: "Músicas & Conteúdo", text: "Envio prévio para avaliação da organização. Proibidas músicas com palavrões, conteúdo sexual explícito, mensagens ofensivas, preconceituosas ou incitação à violência." },
      { num: "05", title: "Coreografias e Figurinos", text: "Adequados ao público livre de todas as idades, sem gestos obscenos. Figurinos e acessórios permitidos desde que não ofereçam riscos." },
      { num: "06", title: "Faixa Etária & Acompanhamento", text: "Aberta a participantes de todas as idades. Menores de 18 anos deverão estar acompanhados por responsável legal durante todo o evento, inclusive na apresentação." },
      { num: "07", title: "Organização & Tolerância", text: "Comparecer com antecedência. Após a chamada no palco, tolerância máxima de 10 minutos antes da desclassificação." },
      { num: "08", title: "Avaliação do Júri", text: "Os jurados avaliarão criatividade, ritmo, sincronia, execução dos movimentos e presença de palco." },
      { num: "09", title: "Respeito e Fair Play", text: "Respeito mútuo a jurados, organização e competidores. Não serão toleradas ofensas, discriminação ou atitudes antidesportivas." },
      { num: "10", title: "Penalidades", text: "O descumprimento das regras poderá resultar em advertência ou desclassificação imediata, conforme a gravidade." },
      { num: "11", title: "Premiação Oficial", text: "Troféu oficial Garranime + brindes exclusivos divulgados pela organização do evento." }
    ]
  },
  {
    id: "espadas",
    name: "Torneio de Batalha de Espadas",
    category: "Soft Combat & Duelo Medieval",
    platform: "Arena de Combate",
    rules: "Duelos individuais 1 vs 1 de soft combat com espadas de espuma acolchoada. Regras diretas e seguras, com equipamentos de proteção obrigatórios fornecidos pela organização.",
    fee: "Inscrição Antecipada: R$ 7,00",
    reward: "R$ 100,00 em Dinheiro + Brinde Oficial Garranime",
    icon: "⚔️",
    badge: "ARENA DE COMBATE",
    color: "#FFE600",
    editalSections: [
      { num: "01", title: "Inscrição & Taxa Antecipada", text: "Inscrição antecipada no valor de R$ 7,00 por participante. Vagas limitadas por ordem de confirmação no chaveamento." },
      { num: "02", title: "Formato dos Duelos", text: "Combates individuais 1 contra 1 (1 vs 1) em chaveamento eliminatório (mata-mata), disputados em melhor de 3 rounds." },
      { num: "03", title: "Equipamento & Segurança", text: "Espadas acolchoadas de espuma próprias para soft combat e equipamentos de proteção individual fornecidos pela organização do evento." },
      { num: "04", title: "Pontuação & Golpes Válidos", text: "São válidos toques limpos no tronco, braços e pernas. Cada acerto válido computa 1 ponto." },
      { num: "05", title: "Golpes Proibidos & Penalidades", text: "Terminantemente proibidos golpes na cabeça, pescoço e virilha, estocadas perigosas ou agarrar o adversário. Infrações resultam em advertência ou desclassificação imediata." },
      { num: "06", title: "Premiação do Campeão", text: "O grande vencedor da Arena de Combate recebe a premiação de R$ 100,00 em dinheiro + Brinde Oficial Garranime!" }
    ]
  },
];

export interface ConfirmedRoom {
  id: string;
  title: string;
  badge: string;
  icon: string;
  desc: string;
  stats: Record<string, number>;
}

export const CONFIRMED_ROOMS: ConfirmedRoom[] = [
  {
    id: "karaoke",
    title: "SALA KARAOKE",
    badge: "MÚSICA & ANISONG",
    icon: "🎤",
    desc: "Divirta-se cantando suas músicas favoritas na sala de karaokê do Garranime!",
    stats: { Musica: 100, Diversao: 99, Voz: 95 },
  },
  {
    id: "rpg",
    title: "SALA RPG",
    badge: "VORTEX CAP RPG",
    icon: "🎲",
    desc: "Com Vortex cap RPG você vai ter a melhor experiência, com uma aventura incrível de RPG!",
    stats: { Aventura: 100, Estrategia: 98, Imersao: 96 },
  },
  {
    id: "jogos",
    title: "SALA DE JOGOS",
    badge: "ARENA GAMER",
    icon: "🎮",
    desc: "Games, consoles para bater aquela gameplay com parceiro.",
    stats: { Gameplay: 100, Competicao: 95, Duelo: 98 },
  },
  {
    id: "just-dance",
    title: "SALA JUST DANCE",
    badge: "RITMO & DANÇA",
    icon: "💃",
    desc: "Dance, sala de dança espera você para testar suas coreografias e sua habilidade.",
    stats: { Ritmo: 100, Energia: 98, Habilidade: 95 },
  },
  {
    id: "cosplays",
    title: "SALA PARA COSPLAYS",
    badge: "EXCLUSIVA COSPLAY",
    icon: "🎭",
    desc: "Sala exclusiva para você Cosplay, para você preparar seu Cosplay da melhor forma.",
    stats: { Preparo: 100, Espelho: 95, Conforto: 98 },
  },
  {
    id: "fotos",
    title: "SALA TEMÁTICA PARA FOTOS",
    badge: "REGISTRO ÚNICO",
    icon: "📸",
    desc: "Registre, guarde toda essa experiência na sala de fotos do evento com aquele registro único.",
    stats: { Cenarios: 100, Memoria: 100, Estilo: 98 },
  },
  {
    id: "guarda-volumes",
    title: "SALA GUARDA VOLUMES",
    badge: "CONFORTO & PRATICIDADE",
    icon: "🎒",
    desc: "Fique mais leve para curtir o evento. Sala de guarda volumes para você guardar mochilas e coisas para que você possa curtir e ficar mais à vontade no evento.",
    stats: { Seguranca: 100, Praticidade: 100, Conforto: 100 },
  },
];

export const THEMED_ROOMS = CONFIRMED_ROOMS;

export interface ConfirmedStore {
  name: string;
  type: string;
  badge: string;
  initials: string;
  color: string;
  desc: string;
  logo?: string;
  instagram?: string;
  instagramUrl?: string;
}

export const CONFIRMED_STORES: ConfirmedStore[] = [
  {
    name: "Bankai Studio",
    type: "Impressão 3D, Figures & Miniaturas",
    badge: "CONFIRMADA",
    initials: "BS",
    color: "#FF7A00",
    logo: "/assets/lojas/bankai-studio.png",
    instagram: "@bankaistudio3d",
    instagramUrl: "https://instagram.com/bankaistudio3d",
    desc: "O melhor da impressão 3D, action figures, miniaturas e colecionáveis exclusivos para você levar seu anime favorito pra casa!",
  },
  {
    name: "Pixangaa",
    type: "Acessórios Geek, Chaveiros & Artesanato",
    badge: "CONFIRMADA",
    initials: "PX",
    color: "#8A2BE2",
    logo: "/assets/lojas/pixangaa.png",
    instagram: "@pixangaa",
    instagramUrl: "https://instagram.com/pixangaa",
    desc: "Os melhores chaveiros, broches, pulseiras, cordões e acessórios geek feitos artesanalmente com muito estilo para o Garranime!",
  },
  {
    name: "Botinha Store",
    type: "Produtos Infantis, Geek & Acessórios",
    badge: "CONFIRMADA",
    initials: "BT",
    color: "#FFE600",
    logo: "/assets/lojas/botinha-store.png",
    instagram: "@botinha_store",
    instagramUrl: "https://instagram.com/botinha_store",
    desc: "Grande variedade de produtos infantis, itens geek, fofuras e colecionáveis para todas as idades curtirem o evento!",
  },
  {
    name: "Makako Cards & Games",
    type: "Card Games, TCG & Colecionismo",
    badge: "CONFIRMADA",
    initials: "MC",
    color: "#22C55E",
    logo: "/assets/lojas/makako-cards.png",
    desc: "O paraíso dos Card Games: boosters, decks, sleeves protetores e acessórios para você duelar e colecionar no Garranime!",
  },
  {
    name: "Otaku's Mix",
    type: "Action Figures, Photocards & Buquês",
    badge: "CONFIRMADA",
    initials: "OM",
    color: "#EC4899",
    logo: "/assets/lojas/otakus-mix.png",
    instagram: "@vanessauzumakii",
    instagramUrl: "https://instagram.com/vanessauzumakii",
    desc: "Action figures, photocards, buquês artesanais geek, chaveiros personalizados e presentes incríveis para encantar qualquer fã!",
  },
];

/**
 * ============================================================================
 * 📢 PATROCINADORES OFICIAIS & LOGOS
 * ============================================================================
 * 📁 ONDE COLOCAR AS IMAGENS:
 *    Coloque os arquivos de logo na pasta: public/assets/patrocinadores/
 * 
 * 🖼️ FORMATOS: .png (fundo transparente), .webp, .svg ou .jpg
 * 
 * 📝 COMO ATUALIZAR:
 *    Altere o campo `logo` abaixo para o caminho do arquivo:
 *    Exemplo: logo: "/assets/patrocinadores/minha-empresa.png"
 *    Se ainda não tiver o arquivo de imagem, deixe `logo: null` que o site
 *    exibirá o quadrado neon estilizado com as iniciais do patrocinador!
 * ============================================================================
 */
export const CONFIRMED_SPONSORS = [
  {
    name: "Rafael Turbo Digital",
    tier: "Cota Diamante",
    badge: "OFICIAL",
    logo: "/assets/patrocinadores/rafael_turbo_digital.png",
    initials: "TD",
    color: "#E50914",
    desc: "Marketing Digital, Tráfego Pago & Soluções Web",
  },
  {
    name: "José Henrique",
    tier: "Apoio Cultural",
    badge: "OFICIAL",
    logo: "/assets/patrocinadores/José_Henrique.jpeg",
    initials: "JH",
    color: "#00D2FF",
    desc: "Incentivo à cultura e juventude de Garrafão do Norte",
  },
  {
    name: "Prefeitura de Garrafão do Norte",
    tier: "Apoio Institucional",
    badge: "OFICIAL",
    logo: "/assets/patrocinadores/perfetura_de_garrafao_do_norte.jpeg",
    initials: "PGN",
    color: "#22C55E",
    desc: "Incentivo e realização cultural no município",
  },
];

export interface TimelineStage {
  stage: string;
  time: string;
  title: string;
  desc: string;
  status: string;
  icon: string;
  period: "manha" | "tarde" | "noite";
  category?: string;
  highlight?: boolean;
}

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    stage: "FASE 01",
    time: "08:00",
    title: "Abertura Oficial dos Portões",
    desc: "Início oficial do Garranime na Escola Mário Brasil! Recepção do público, entrega das pulseiras oficiais e liberação das salas confirmadas.",
    status: "Liberado",
    icon: "⛩️",
    period: "manha",
    category: "Abertura",
  },
  {
    stage: "FASE 02",
    time: "09:00 - 09:40",
    title: "Inscrições Presenciais pros Jogos",
    desc: "Período exclusivo para quem não conseguiu se inscrever online garantir sua vaga presencial nas chaves dos torneios gamers.",
    status: "Confirmado",
    icon: "📝",
    period: "manha",
    category: "Inscrições",
  },
  {
    stage: "FASE 03",
    time: "10:00",
    title: "Torneio de Jogo: Naruto Shippuden Storm",
    desc: "Primeiro grande confronto gamer no console! Batalhas mata-mata na Arena Gamer com transmissão e torcida.",
    status: "Confirmado",
    icon: "🎮",
    period: "manha",
    category: "Torneio Gamer",
    highlight: true,
  },
  {
    stage: "FASE 04",
    time: "10:40",
    title: "Torneio de Batalha de Espadas (1º Round)",
    desc: "Primeira rodada eliminatória dos duelos 1 vs 1 de soft combat com espadas acolchoadas seguras na Arena de Combate.",
    status: "Confirmado",
    icon: "⚔️",
    period: "manha",
    category: "Arena de Combate",
  },
  {
    stage: "FASE 05",
    time: "11:20",
    title: "Torneio de Jogo: Clash Royale",
    desc: "Duelos estratégicos na arena mobile de Clash Royale. Quem destruirá mais torres e subirá no pódio?",
    status: "Confirmado",
    icon: "👑",
    period: "manha",
    category: "Torneio Gamer",
    highlight: true,
  },
  {
    stage: "FASE 06",
    time: "12:00",
    title: "Torta na Cara com Perguntas (1º Round)",
    desc: "Quiz e gincana rápida de perguntas e respostas sobre animes e games no palco! Errou, leva torta na cara!",
    status: "Confirmado",
    icon: "🥧",
    period: "manha",
    category: "Gincana & Quiz",
  },
  {
    stage: "FASE 07",
    time: "13:00",
    title: "Torneio de Jogo: Free Fire",
    desc: "Quedas eletrizantes no Battle Royale mobile em salas personalizadas. Disputa intensa por abates e colocações!",
    status: "Confirmado",
    icon: "🔥",
    period: "tarde",
    category: "Torneio Gamer",
    highlight: true,
  },
  {
    stage: "FASE 08",
    time: "13:40",
    title: "Torneio de Batalha de Espadas (2º Round)",
    desc: "Segunda rodada eliminatória dos confrontos de espadas de espuma acolchoada. Quem vai para a grande final?",
    status: "Confirmado",
    icon: "⚔️",
    period: "tarde",
    category: "Arena de Combate",
  },
  {
    stage: "FASE 09",
    time: "14:00",
    title: "Caça ao Tesouro Geek",
    desc: "Enigmas e pistas misteriosas espalhadas pelas dependências do evento para desvendar e resgatar o tesouro secreto do Garranime.",
    status: "Confirmado",
    icon: "🗺️",
    period: "tarde",
    category: "Atividade Interativa",
  },
  {
    stage: "FASE 10",
    time: "14:20",
    title: "Sorteio de 2 Números para Mímica (Aleatório)",
    desc: "Sorteio aleatório de 2 participantes para um divertido desafio de mímica com personagens icônicos de animes no palco.",
    status: "Confirmado",
    icon: "🎭",
    period: "tarde",
    category: "Gincana Interativa",
  },
  {
    stage: "FASE 11",
    time: "14:40",
    title: "Dinâmica no Palco",
    desc: "Brincadeiras e desafios rápidos no palco para interagir com a plateia e distribuir brindes exclusivos.",
    status: "Confirmado",
    icon: "⚡",
    period: "tarde",
    category: "Palco Principal",
  },
  {
    stage: "FASE 12",
    time: "14:50",
    title: "Torta na Cara com Perguntas (2º Round)",
    desc: "A rodada decisiva do quiz mais melequento do evento! Conhecimentos geek colocados à prova ao vivo.",
    status: "Confirmado",
    icon: "🥧",
    period: "tarde",
    category: "Gincana & Quiz",
  },
  {
    stage: "FASE 13",
    time: "15:20",
    title: "Torneio de Dança Geek",
    desc: "Apresentações solo, em duplas ou grupos de K-Pop, Anime Songs e Freestyle no Palco Principal com avaliação do júri.",
    status: "Confirmado",
    icon: "💃",
    period: "tarde",
    category: "Palco Principal",
    highlight: true,
  },
  {
    stage: "FASE 14",
    time: "16:20",
    title: "Concurso de Cosplay Kids",
    desc: "Desfile dos pequenos heróis de até 13 anos mostrando seus trajes e encantando o público e os jurados no palco.",
    status: "Confirmado",
    icon: "⭐",
    period: "tarde",
    category: "Cosplay",
    highlight: true,
  },
  {
    stage: "FASE 15",
    time: "16:50",
    title: "Concurso Cospobre",
    desc: "A competição mais hilária do evento! Papelão, criatividade, fita adesiva, baixo custo e o maior carisma do Garranime.",
    status: "Confirmado",
    icon: "📦",
    period: "tarde",
    category: "Cosplay",
    highlight: true,
  },
  {
    stage: "FASE 16",
    time: "17:30",
    title: "Concurso de Cosplay (Tradicional / Adulto)",
    desc: "O grande momento do cosplay! Apresentações com trilha musical de pelo menos 1 minuto, encenação e avaliação técnica.",
    status: "Confirmado",
    icon: "🎭",
    period: "tarde",
    category: "Cosplay",
    highlight: true,
  },
  {
    stage: "BOSS FINAL",
    time: "18:30",
    title: "Anúncios Oficiais & Premiações",
    desc: "Entrega solene dos troféus oficiais do Garranime, medalhas de campeões e grande sorteio final de brindes para quem tem pulseira!",
    status: "Boss Final",
    icon: "🏆",
    period: "noite",
    category: "Premiação",
    highlight: true,
  },
  {
    stage: "VITÓRIA",
    time: "19:00",
    title: "Encerramento das Atividades",
    desc: "Cerimônia de agradecimento da organização a todos os participantes, apoiadores, lojistas e patrocinadores.",
    status: "Vitória",
    icon: "🎆",
    period: "noite",
    category: "Encerramento",
  },
  {
    stage: "THE END",
    time: "20:00",
    title: "The End (Fechamento dos Portões)",
    desc: "Fechamento dos portões na Escola Mário Brasil. Missão cumprida com sucesso na 1ª edição histórica do Garranime!",
    status: "Fim de Jogo",
    icon: "🌟",
    period: "noite",
    category: "The End",
  },
];

export const FAQ_LIST = [
  {
    q: "Como funciona a compra do ingresso pelo Pix?",
    a: "Você copia a chave Pix do evento exibida aqui no site (ou escaneia o QR Code), transfere o valor de R$ 10,00 (antecipado) e envia o comprovante para o nosso WhatsApp ou Instagram oficial. Nossa equipe confirma o pagamento e registra o número da sua pulseira!",
  },
  {
    q: "Como funcionam as pulseiras oficiais de acesso?",
    a: "Ao garantir seu ingresso antecipado, você assegura sua pulseira oficial com valor promocional de R$ 10,00 e garante participação em todas as salas, gincanas e no grande sorteio final de brindes do evento!",
  },
  {
    q: "Quanto custa para participar do Concurso de Cosplay?",
    a: "A inscrição no concurso de cosplay (tanto Adulto quanto Kids) é 100% gratuita! Você só precisa ter adquirido seu ingresso de entrada no Garranime.",
  },
  {
    q: "Como me inscrevo nos Torneios Gamers?",
    a: "Os campeonatos de Naruto, Free Fire e Clash Royale possuem taxas individuais por modalidade. Você pode se pré-inscrever através do nosso site e enviar o comprovante via WhatsApp para garantir sua vaga na tabela.",
  },
  {
    q: "Posso levar acessórios e réplicas de cosplay?",
    a: "Sim! Adereços feitos de EVA, espuma, plástico leve, papelão ou madeira sem pontas cortantes são permitidos. Por segurança de todos, armas de metal afiadas ou projéteis reais são estritamente proibidos.",
  },
  {
    q: "Crianças precisam pagar ingresso?",
    a: "Todas as regras oficiais de faixa etária e meia-entrada/isenção são coordenadas pela equipe organizadora através do nosso canal de suporte no WhatsApp.",
  },
];
