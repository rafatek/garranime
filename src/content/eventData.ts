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
  pixKey: string;
  pixRecipient: string;
}

export const EVENT_DATA: EventData = {
  title: "GARRANIME",
  subtitle: "O Maior Evento de Anime e Cultura Geek de Garrafão do Norte",
  edition: "1º Evento Geek de Garrafão do Norte",
  dateText: "22 de Novembro",
  city: "Garrafão do Norte",
  state: "PA",
  venueName: "Escola Mário Brasil",
  venueStatus: "[A DEFINIR confirmação entre Escola Mário Brasil ou Ginásio Municipal]",
  targetDateISO: "2026-11-22T10:00:00-03:00",
  instagram: "@garranime",
  whatsappContact: "5591999999999", // Placeholder seguro documentado em PENDENCIAS.md
  pixKey: "pix@garranime.com.br", // Placeholder seguro documentado em PENDENCIAS.md
  pixRecipient: "Organização Garranime",
};

export const TICKET_PLANS = [
  {
    id: "antecipado",
    title: "Ingresso Antecipado",
    badge: "MAIS POPULAR",
    badgeColor: "#FFE600",
    price: 10,
    priceFormatted: "R$ 10,00",
    tagline: "Economize e garanta sua cor de equipe!",
    features: [
      "Acesso completo a todas as áreas e salas",
      "Pulseira oficial numerada (1 a 500)",
      "Escolha entre Time Azul ou Time Laranja",
      "Direito de competir nas gincanas interativas",
      "Participação no sorteio exclusivo para a equipe vencedora",
      "Inscrição gratuita no Concurso Cosplay (Adulto ou Kids)",
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
    tagline: "Venda no local sujeito ao limite de pulseiras",
    features: [
      "Acesso a todas as áreas do evento",
      "Pulseira da equipe conforme disponibilidade restante",
      "Participação nas gincanas e torneios",
      "Sujeito à lotação máxima das 500 pulseiras",
    ],
    ctaText: "Ver Instruções de Pagamento",
    featured: false,
  },
];

export const TEAM_BATTLE = {
  totalLimit: 500,
  teams: {
    blue: {
      id: "blue",
      name: "Time Azul",
      badge: "TROPA KONOHA",
      colorHex: "#00D2FF",
      borderHex: "#0099FF",
      totalSlots: 250,
      numberRange: "001 a 250",
      description: "Equipe focada em agilidade, estratégia e espírito ninja. Concorra ao sorteio final se sua equipe somar mais pontos!",
      motto: "A Vontade do Fogo em Tom Azul!",
    },
    orange: {
      id: "orange",
      name: "Time Laranja",
      badge: "TROPA SHONEN",
      colorHex: "#FF7A00",
      borderHex: "#E65100",
      totalSlots: 250,
      numberRange: "251 a 500",
      description: "Equipe de pura energia shonen, força de vontade e intensidade gamer. Desafie o Time Azul em gincanas épicas!",
      motto: "Poder Infinito & Determinação Inabalável!",
    },
  },
};

export const TOURNAMENTS = [
  {
    id: "naruto",
    name: "Naruto Shippuden Ultimate Ninja Storm",
    category: "Luta Gamer",
    platform: "Console / Joystick",
    rules: "Chaveamento mata-mata, melhor de 3 rounds. Proibido pause sem consentimento.",
    fee: "Taxa por participante [A DEFINIR]",
    reward: "Troféu Oficial + Brindes Geek [A DEFINIR]",
    icon: "🎮",
  },
  {
    id: "freefire",
    name: "Free Fire (Mobile Battle)",
    category: "Mobile Gamer",
    platform: "Smartphones",
    rules: "Salas personalizadas, pontuação por abates e colocação final. Proibido emulador.",
    fee: "Taxa por participante [A DEFINIR]",
    reward: "Medalhas + Brindes dos Patrocinadores [A DEFINIR]",
    icon: "🔥",
  },
  {
    id: "clash",
    name: "Clash Royale (Duelo de Reis)",
    category: "Mobile Gamer",
    platform: "Smartphones",
    rules: "Torneio em formato suíço / mata-mata rápido com nível de cartas padronizado.",
    fee: "Taxa por participante [A DEFINIR]",
    reward: "Brindes Exclusivos + Certificado [A DEFINIR]",
    icon: "👑",
  },
];

export const COSPLAY_DATA = {
  title: "Concurso Oficial de Cosplay",
  fee: "Inscrição Gratuita (basta ter o ingresso do evento)",
  categories: [
    {
      id: "adulto",
      name: "Categoria Adulto",
      desc: "Para cosplayers a partir de 14 anos. Apresentação individual ou em dupla com tempo livre para encenação.",
      requirements: "Necessário envio prévio de áudio/música de pelo menos 1 minuto via formulário ou WhatsApp oficial.",
    },
    {
      id: "kids",
      name: "Categoria Kids",
      desc: "Para as crianças e mini-heróis brilharem no palco com a família!",
      requirements: "Inscrição realizada pelos pais ou responsáveis.",
    },
  ],
};

export const THEMED_ROOMS = [
  {
    id: "karaoke",
    title: "Sala de Karaokê Geek",
    badge: "ABERTO A TODOS",
    icon: "🎤",
    desc: "Cante as aberturas inesquecíveis dos seus animes favoritos: Pegasus Fantasy, We Are, Blue Bird, Cha-La Head-Cha-La e muito mais!",
    stats: { Energia: 98, Nostalgia: 100, Diversao: 95 },
  },
  {
    id: "games",
    title: "Arena Gamer & Retrô",
    badge: "TORNEIOS OFICIAIS",
    icon: "🕹️",
    desc: "Fliperamas, consoles retrô e torneios oficiais de Naruto Storm, Free Fire e Clash Royale com narração ao vivo.",
    stats: { Competicao: 100, Habilidade: 92, Adrenalina: 99 },
  },
  {
    id: "cosplay-stage",
    title: "Palco Principal & Cosplay",
    badge: "DESFILES & APRESENTAÇÕES",
    icon: "🎭",
    desc: "Onde os maiores guerreiros, vilões e criaturas mágicas ganham vida com júri especializado e prêmios.",
    stats: { Criatividade: 100, Espetaculo: 98, Carisma: 96 },
  },
  {
    id: "food",
    title: "Praça de Alimentação Geek",
    badge: "LANCHES TEMÁTICOS",
    icon: "🍜",
    desc: "Lámen quente, pastéis, hambúrgueres artesanais, doces temáticos e bebidas energéticas para repor suas barras de HP.",
    stats: { Sabor: 99, RestauracaoHP: 100, Energia: 90 },
  },
];

export const CONFIRMED_STORES = [
  {
    name: "Bankai Studio",
    type: "Estúdio & Artes Geek",
    badge: "CONFIRMADA",
    desc: "Quadros, posters, colecionáveis e artes exclusivas dos animes mais marcantes.",
  },
  {
    name: "Pixangaa",
    type: "Moda & Acessórios",
    badge: "CONFIRMADA",
    desc: "Vestuário, bonés, moletons e estampas de alta qualidade para o seu dia a dia geek.",
  },
  {
    name: "Botinha Store",
    type: "Vestuário & Calçados",
    badge: "CONFIRMADA",
    desc: "Calçados personalizados, meias temáticas e itens de vestuário inspirados na cultura pop.",
  },
  {
    name: "Makako Cards & Games",
    type: "Card Games & Colecionismo",
    badge: "CONFIRMADA",
    desc: "Boosters, decks, sleeves protetores e acessórios para torneios de TCG.",
  },
  {
    name: "Otaku's Mix",
    type: "Colecionáveis & Action Figures",
    badge: "CONFIRMADA",
    desc: "Action figures, chaveiros, bottons, katanas de colecionador e pelúcias.",
  },
];

export const TIMELINE_STAGES = [
  {
    stage: "FASE 01",
    time: "10:00",
    title: "Portões Abertos & Check-in das Pulseiras",
    desc: "Abertura oficial, entrega das pulseiras do Time Azul e Time Laranja, ativação das salas temáticas e feira geek.",
    status: "Liberado",
    icon: "⛩️",
  },
  {
    stage: "FASE 02",
    time: "11:30",
    title: "Batalha de Abertura: Desafio das Equipes",
    desc: "Primeira gincana interativa valendo pontos para a disputa de equipes (Time Azul vs Time Laranja).",
    status: "Em Breve",
    icon: "⚔️",
  },
  {
    stage: "FASE 03",
    time: "13:00",
    title: "Início dos Torneios Gamer",
    desc: "Disputas simultâneas de Naruto Ultimate Ninja Storm, Free Fire e Clash Royale com transmissão e narração.",
    status: "Em Breve",
    icon: "🎮",
  },
  {
    stage: "FASE 04",
    time: "15:30",
    title: "Desfile & Concurso de Cosplay (Kids e Adulto)",
    desc: "Apresentações no palco principal, desfiles individuais e avaliação do júri com torcida vibrante.",
    status: "Em Breve",
    icon: "🎭",
  },
  {
    stage: "FASE 05",
    time: "17:30",
    title: "Karaokê Livre & Gincanas Finais de Equipes",
    desc: "Batalha musical de aberturas de anime e contagem decisiva dos pontos da equipe campeã.",
    status: "Em Breve",
    icon: "🎤",
  },
  {
    stage: "BOSS FINAL",
    time: "19:00",
    title: "Cerimônia de Premiação & Sorteio Exclusivo",
    desc: "Entrega de troféus aos campeões e sorteio de brindes exclusivo para os membros da equipe vencedora!",
    status: "Boss Final",
    icon: "🏆",
  },
];

export const FAQ_LIST = [
  {
    q: "Como funciona a compra do ingresso pelo Pix?",
    a: "Você copia a chave Pix do evento exibida aqui no site (ou escaneia o QR Code), transfere o valor de R$ 10,00 (antecipado) e envia o comprovante para o nosso WhatsApp ou Instagram oficial. Nossa equipe confirma o pagamento e registra o número da sua pulseira!",
  },
  {
    q: "O que é a disputa entre Time Azul e Time Laranja?",
    a: "Para tornar o evento super interativo, limitamos a 500 pulseiras: 250 azuis (001 a 250) e 250 laranjas (251 a 500). Ao garantir o ingresso, você escolhe seu time para participar das gincanas integrativas. A equipe com mais vitórias no final ganha o direito exclusivo de participar do sorteio de brindes especiais!",
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
