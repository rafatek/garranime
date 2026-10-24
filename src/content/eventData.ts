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

export interface EditalSection {
  num: string;
  title: string;
  text: string;
  bullets?: string[];
}

export interface Tournament {
  id: string;
  name: string;
  category: string;
  platform: string;
  rules: string;
  fee: string;
  feeValue: number;
  feeBadge: string;
  isPaid: boolean;
  isDuo: boolean;
  reward: string;
  icon: string;
  editalSections: EditalSection[];
}

export const TOURNAMENTS: Tournament[] = [
  {
    id: "naruto",
    name: "Naruto Shippuden Ultimate Ninja Storm",
    category: "Luta Gamer (Console)",
    platform: "Console / Joystick",
    rules: "Disputas individuais 1v1 eliminatórias em partida única; Grande Final em Melhor de Três partidas (MD3). Escolha livre de personagens.",
    fee: "R$ 7,00 (Inscrição Individual Antecipada)",
    feeValue: 7,
    feeBadge: "R$ 7,00 INDIVIDUAL",
    isPaid: true,
    isDuo: false,
    reward: "1º Lugar: 100,00$ + Troféu",
    icon: "🎮",
    editalSections: [
      {
        num: "01",
        title: "Inscrição Oficial",
        text: "Cada jogador deverá fazer sua inscrição antecipada no site oficial / WhatsApp do evento. A participação estará sujeita à confirmação da inscrição e ao cumprimento dos requisitos divulgados.",
      },
      {
        num: "02",
        title: "Formato da Competição (1v1)",
        text: "Disputas individuais no formato um contra um (1v1). Formato de eliminação simples em partida única: quem vencer avança para a próxima fase, quem perder será eliminado. A Grande Final será disputada em Melhor de Três partidas (MD3), sagrando-se campeão quem vencer 2 partidas primeiro.",
      },
      {
        num: "03",
        title: "Personagens e Mapas",
        text: "Cada jogador terá livre escolha de personagem para sua partida, selecionando o lutador de sua preferência. Os mapas serão sorteados aleatoriamente pela organização. Na rodada final, a escolha de personagem é livre, porém NÃO será permitida a repetição do mesmo personagem para a partida seguinte.",
      },
      {
        num: "04",
        title: "Credenciamento e Regras de Partida",
        text: "Os participantes deverão comparecer ao ambiente da competição no horário estabelecido. O nome de cada competidor será chamado antes da disputa; tolerância máxima de 10 minutos. Caso não compareça após o tempo de tolerância, será eliminado por WO. Proibido o uso de programas externos ou recursos de vantagem injusta.",
      },
      {
        num: "05",
        title: "Conduta e Fair Play",
        text: "Todos os participantes deverão manter comportamento respeitoso durante o torneio. Não serão tolerados assédio, discriminação, ameaças, ofensas graves ou atitudes que prejudiquem a integridade da competição. Descumprimentos resultarão em advertência ou desclassificação imediata.",
      },
      {
        num: "06",
        title: "PREMIAÇÃO E DISPOSIÇÕES FINAIS",
        text: "Diretrizes oficiais de encerramento e premiação do torneio:",
        bullets: [
          "A premiação será: 1 lugar : 100,00$ + troféu",
          "A entrega ocorrerá no palco do evento.",
          "Todos os participantes deverão conhecer e cumprir as disposições deste regulamento.",
          "Situações não previstas serão analisadas pela coordenação, respeitando os princípios de transparência, igualdade e integridade competitiva.",
          "A inscrição no campeonato implica ciência e aceitação das regras aplicáveis.",
        ],
      },
    ],
  },
  {
    id: "freefire",
    name: "Free Fire (Mobile Battle)",
    category: "Mobile Gamer (Em Duplas)",
    platform: "Smartphones",
    rules: "Salas personalizadas em DUPLAS (Duo) estilo clássico, rodada simples eliminatória em 13 rounds. Proibido emulador e sem habilidades de personagens.",
    fee: "R$ 14,00 por Dupla Antecipado (R$ 7,00 por pessoa)",
    feeValue: 14,
    feeBadge: "R$ 14,00 POR DUPLA (R$ 7/pessoa)",
    isPaid: true,
    isDuo: true,
    reward: "1º Lugar: 100,00$ + Troféu",
    icon: "🔥",
    editalSections: [
      {
        num: "01",
        title: "Inscrição e Credenciamento",
        text: "Cada competidor deverá utilizar sua própria conta de jogo e informar nome e ID de jogador após a inscrição no site oficial do evento. Os participantes deverão comparecer no horário marcado. O nome será anunciado antes da disputa, com tolerância máxima de 10 minutos. O não comparecimento resulta em eliminação por WO.",
      },
      {
        num: "02",
        title: "Formato do Torneio Clássico (13 Rounds)",
        text: "Competição disputada em DUPLAS (Duo), por rodada simples de eliminação em partida única de definição com 13 rounds (a dupla vencedora avança de fase e a derrotada é eliminada). Não poderá subir em construções (casas). Não será permitido utilizar habilidades de personagens. Proibido uso de hacks, macros ou bugs exploráveis.",
      },
      {
        num: "03",
        title: "Armas e Equipamentos Permitidos",
        text: "Armas disponíveis no estilo clássico: Águia do Deserto, MP5, AK, UMP, M1014, Thompson, M1887 e MP40 (armas atuais desbalanceadas são proibidas). Equipamentos liberados: Parede de gel, colete nv 3, capacete nv 3, Kit de reparo e Cogumelo nv 3.",
      },
      {
        num: "04",
        title: "Interrupções e Problemas Técnicos",
        text: "Em caso de desconexão, travamento do aplicativo ou falha de conexão, serão tomadas as providências no momento da disputa pela coordenação, visando preservar a igualdade de condições entre os competidores.",
      },
      {
        num: "05",
        title: "Conduta e Fair Play",
        text: "Todos os participantes deverão manter comportamento respeitoso. Não serão tolerados assédio, discriminação, ameaças, ofensas ou terceiros jogando no lugar do inscrito. Infrações resultam em advertência, perda de partida ou desclassificação.",
      },
      {
        num: "06",
        title: "PREMIAÇÃO E DISPOSIÇÕES FINAIS",
        text: "Diretrizes oficiais de encerramento e premiação do torneio:",
        bullets: [
          "A premiação será: 1 lugar : 100,00$ + troféu",
          "A entrega ocorrerá no palco do evento.",
          "Todos os participantes deverão conhecer e cumprir as disposições deste regulamento.",
          "Situações não previstas serão analisadas pela coordenação, respeitando os princípios de transparência, igualdade e integridade competitiva.",
          "A inscrição no campeonato implica ciência e aceitação das regras aplicáveis.",
        ],
      },
    ],
  },
  {
    id: "clash",
    name: "Clash Royale (Duelo de Reis)",
    category: "Mobile Gamer (Individual)",
    platform: "Smartphones",
    rules: "Torneio individual 1v1 eliminatório em Melhor de 3 partidas (MD3) com o Sistema de Três Decks sem repetição de cartas.",
    fee: "R$ 7,00 (Inscrição Individual Antecipada)",
    feeValue: 7,
    feeBadge: "R$ 7,00 INDIVIDUAL",
    isPaid: true,
    isDuo: false,
    reward: "1º Lugar: 100,00$ + Troféu",
    icon: "👑",
    editalSections: [
      {
        num: "01",
        title: "Inscrição e Identificação",
        text: "Cada competidor deverá utilizar sua própria conta de jogo e informar nome e ID de jogador após sua inscrição no site oficial do evento. A participação estará sujeita à confirmação da inscrição.",
      },
      {
        num: "02",
        title: "Formato do Torneio (1v1 em MD3)",
        text: "Campeonato disputado individualmente em confrontos diretos 1v1, seguindo o sistema de eliminação simples. Cada confronto será disputado em melhor de três partidas (MD3). O primeiro a conquistar duas vitórias avança para a fase seguinte; o derrotado é eliminado.",
      },
      {
        num: "03",
        title: "Sistema Exclusivo de Três Decks",
        text: "Cada participante deverá preparar três decks completos antes do início. Nenhuma carta poderá aparecer em mais de um dos três decks (ex: se usar Pekka no deck 1, ela não poderá estar no deck 2 nem no 3). A regra vale para todas as cartas e evoluções. Cada partida do confronto exige um deck diferente (o sistema reinicia ao passar de fase).",
      },
      {
        num: "04",
        title: "Credenciamento e Tolerância de WO",
        text: "Os participantes deverão comparecer ao ambiente no horário estabelecido. O nome de cada competidor será chamado antes da disputa; tolerância máxima de 10 minutos. O não comparecimento após o prazo resulta em eliminação por WO.",
      },
      {
        num: "05",
        title: "Conduta e Fair Play",
        text: "Comportamento respeitoso obrigatório. Proibidos assédio, discriminação, ofensas graves ou intimidação. Não será permitido que terceiros joguem no lugar do inscrito. O descumprimento resulta em advertência, perda de partida ou desclassificação.",
      },
      {
        num: "06",
        title: "Interrupções e Problemas Técnicos",
        text: "Em caso de desconexão, travamento do aplicativo ou falha de conexão, as providências serão tomadas na hora da disputa pelos juízes para manter a igualdade técnica.",
      },
      {
        num: "07",
        title: "PREMIAÇÃO E DISPOSIÇÕES FINAIS",
        text: "Diretrizes oficiais de encerramento e premiação do torneio:",
        bullets: [
          "A premiação será: 1 lugar : 100,00$ + troféu",
          "A entrega ocorrerá no palco do evento.",
          "Todos os participantes deverão conhecer e cumprir as disposições deste regulamento.",
          "Situações não previstas serão analisadas pela coordenação, respeitando os princípios de transparência, igualdade e integridade competitiva.",
          "A inscrição no campeonato implica ciência e aceitação das regras aplicáveis.",
        ],
      },
    ],
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
      name: "CosKids (Cosplay Infantil)",
      badge: "INFANTIL • 100% GRATUITO",
      color: "#00D2FF",
      desc: "Incentiva a criatividade, diversão e expressão artística das crianças através de personagens geek, animes, desenhos, filmes e cultura pop! Inscrição feita ou autorizada pelos pais ou responsáveis legais.",
      requirements: "Desfile no palco com tempo máximo de 1:30 min. Trilha musical opcional do anime/desenho preferido enviada no credenciamento ou WhatsApp.",
      reward: "1º Lugar: Troféu + Brinde Oficial (Palco)",
      editalSections: [
        {
          num: "01",
          title: "Inscrições",
          text: "As inscrições serão realizadas dentro do prazo divulgado pela organização. A inscrição deverá ser realizada ou autorizada pelo responsável legal da criança. No ato da inscrição, deverão ser informados o nome do participante, sua idade, o personagem escolhido e os dados de contato do responsável.",
        },
        {
          num: "02",
          title: "Regras de Participação",
          text: "Poderão participar crianças dentro da faixa etária estabelecida neste edital. Serão permitidos figurinos, fantasias, acessórios e caracterizações inspirados em personagens da cultura geek e pop. A apresentação poderá incluir desfile, poses, interpretação ou pequenas performances, respeitando o tempo máximo de 1:30 minutos por participante. A participação deverá ocorrer em ambiente respeitoso, acolhedor e adequado ao público infantil. O responsável legal deverá acompanhar a criança ao local da competição no horário estabelecido. O nome de cada participante será mencionado antes da disputa; tolerância máxima de 10 minutos antes de eliminação.",
        },
        {
          num: "03",
          title: "Das Regras de Segurança",
          text: "Não serão tolerados constrangimentos, discriminação, intimidação ou atitudes que prejudiquem o bem-estar dos participantes. Acessórios cenográficos deverão ser seguros, leves e adequados à idade. Não serão permitidos efeitos com fogo, fumaça, substâncias perigosas, objetos arremessados ou quaisquer itens que ofereçam risco à criança ou ao público. A organização poderá impedir o uso de qualquer acessório considerado inadequado ou inseguro.",
        },
        {
          num: "04",
          title: "Avaliação da Banca",
          text: "A avaliação será realizada por uma banca julgadora escolhida pela organização. A avaliação deverá respeitar a idade dos participantes, valorizando a diversão, o esforço e a criatividade, sem exigir padrões profissionais de confecção ou apresentação.",
        },
        {
          num: "05",
          title: "PREMIAÇÃO E DISPOSIÇÕES FINAIS",
          text: "Diretrizes oficiais de premiação e disposições da Competição CosKids:",
          bullets: [
            "A premiação será: troféu + brinde",
            "A entrega ocorrerá no palco do evento.",
            "Os participantes e responsáveis deverão respeitar as regras deste edital e as orientações da organização.",
            "A inscrição no campeonato implica ciência e aceitação das regras aplicáveis.",
            "Mais dúvidas, entre em contato com a organização do evento.",
            "Situações não previstas serão analisadas pela coordenação, priorizando a segurança, o respeito e o bem-estar infantil.",
            "A organização comunicará previamente eventuais alterações relevantes.",
          ],
        },
      ],
    },
    {
      id: "cospobre",
      name: "Cospobre",
      badge: "CRIATIVIDADE & BAIXO CUSTO",
      color: "#FFE600",
      desc: "A competição mais divertida e amistosa do Garranime! Para quem improvisa com papelão, fita adesiva, materiais recicláveis e muita imaginação sem gastar quase nada.",
      requirements: "Foco total na criatividade, carisma e originalidade. Materiais caseiros e baixo custo são o grande diferencial!",
      reward: "1º Lugar: Troféu Especial Campeão Cospobre + Brinde Geek",
      editalSections: [
        { num: "01", title: "Inscrições", text: "Inscrições gratuitas realizadas no site oficial do evento ou WhatsApp. Informar nome e personagem/ideia que pretende representar." },
        { num: "02", title: "Conceito & Improvisação", text: "Fantasias seguem a essência do Cospobre: improvisação, criatividade e humor! Permitidos materiais simples, recicláveis, papelão, fitas e soluções caseiras. Quanto mais criativa e divertida, melhor!" },
        { num: "03", title: "Credenciamento & Tolerância", text: "Comparecer no horário estabelecido. Chamada antes da disputa com tolerância máxima de 10 minutos antes de eliminação." },
        { num: "04", title: "Avaliação do Público", text: "Capacidade de divertir e encantar a plateia. O público decidirá a melhor fantasia por aclamação!" },
        { num: "05", title: "Segurança e Conduta", text: "Proibidos objetos cortantes, materiais inflamáveis ou tóxicos. Respeito total aos participantes, organização e público." },
        {
          num: "06",
          title: "PREMIAÇÃO E DISPOSIÇÕES FINAIS",
          text: "Premiação oficial e disposições do edital:",
          bullets: [
            "A premiação será: 1 lugar : troféu + brinde",
            "A entrega das premiações será realizada no dia do evento no horário informado no anúncio oficial.",
            "Todos os participantes deverão conhecer e cumprir as disposições deste regulamento.",
            "Os casos omissos serão analisados pela coordenação, respeitando os princípios de segurança, igualdade, transparência e respeito.",
          ],
        },
      ],
    },
    {
      id: "adulto",
      name: "Cosplay Tradicional (Adulto)",
      badge: "A PARTIR DE 14 ANOS",
      color: "#FF7A00",
      desc: "Para cosplayers a partir de 14 anos com trajes completos. Apresentação individual ou em dupla com tempo livre para encenação no palco.",
      requirements: "Necessário envio prévio de áudio/música de pelo menos 1 minuto via formulário ou WhatsApp oficial.",
      reward: "1º Lugar: 400,00$ + Troféu | 2º: 200,00$ + Troféu | 3º: Troféu + Brinde",
      editalSections: [
        { num: "01", title: "Inscrição e Credenciamento", text: "Informar dados, personagem representado e obra de origem. Credenciamento com antecedência mínima de 10 minutos. O participante deve possuir a pulseira de acesso do evento." },
        { num: "02", title: "Regras de Caracterização e Acessórios", text: "Figurinos, armaduras cenográficas e adereços aprovados na inspeção de segurança. Proibido utilizar itens cortantes de metal, pontas afiadas reais ou materiais inflamáveis/pirotecnia." },
        { num: "03", title: "Conduta e Fair Play", text: "Comportamento respeitoso obrigatório. Proibidos assédio, discriminação, ofensas graves ou atitudes antidesportivas." },
        { num: "04", title: "Apresentação e Tempo Limite", text: "Tempo máximo de 2 minutos por apresentação. Envio prévio de trilha sonora/áudio de pelo menos 1 minuto. Tolerância de 10 minutos após a chamada no palco antes da eliminação." },
        { num: "05", title: "Avaliação do Júri & Público", text: "Banca julgadora oficial e voto popular. Avaliação de fidelidade do figurino, acabamento dos adereços, interpretação e presença de palco." },
        {
          num: "06",
          title: "PREMIAÇÃO OFICIAL EM DINHEIRO",
          text: "Premiação em dinheiro e troféu oficial do Garranime 2026:",
          bullets: [
            "1º Lugar: 400,00$ + Troféu Oficial",
            "2º Lugar: 200,00$ + Troféu Oficial",
            "3º Lugar: Troféu Oficial + Brinde das Lojas Parceiras",
            "A entrega ocorrerá no palco principal do evento.",
          ],
        },
        {
          num: "07",
          title: "DISPOSIÇÕES FINAIS",
          text: "Todos os participantes deverão cumprir este regulamento. A inscrição confirmada aceita o uso de imagem e áudio para registros do evento. Casos omissos serão analisados pela coordenação com transparência e respeito.",
        },
      ],
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
    reward: "1º Lugar: 100,00$ + Troféu",
    icon: "💃",
    badge: "PALCO PRINCIPAL",
    color: "#EC4899",
    editalSections: [
      { num: "01", title: "Valores & Inscrição Antecipada", text: "Inscrições antecipadas obrigatórias: Solo R$ 7,00 | Dupla R$ 14,00 | Grupos (Trio, Quarteto e Quinteto / de 3 a 5 integrantes) R$ 20,00 no total. Informar os nomes dos dançarinos e o estilo de dança." },
      { num: "02", title: "Número de Participantes", text: "Apresentações individuais, em dupla ou em grupo com no máximo 5 integrantes por apresentação." },
      { num: "03", title: "Tempo de Apresentação", text: "Cada apresentação terá duração máxima de 5 minutos, devendo ser rigorosamente respeitada por todos." },
      { num: "04", title: "Músicas & Conteúdo", text: "Envio prévio para avaliação da organização. Proibidas músicas com palavrões, conteúdo sexual explícito, mensagens ofensivas, preconceituosas ou incitação à violência." },
      { num: "05", title: "Coreografias e Figurinos", text: "Adequados ao público livre de todas as idades, sem gestos obscenos. Figurinos e acessórios permitidos desde que não ofereçam riscos." },
      { num: "06", title: "Faixa Etária & Acompanhamento", text: "Aberta a participantes de todas as idades. Menores de 18 anos deverão estar acompanhados por responsável legal durante todo o evento, inclusive na apresentação. O responsável deverá permanecer no local até o término da participação do menor." },
      { num: "07", title: "Organização & Tolerância", text: "Comparecer com antecedência e respeitar a ordem das apresentações. Após a chamada no palco, tolerância máxima de 10 minutos. Caso o participante ou a equipe não apareçam após o tempo de tolerância, serão eliminados." },
      { num: "08", title: "Avaliação do Júri", text: "Os jurados avaliarão criatividade, ritmo, sincronia, execução dos movimentos e presença de palco." },
      { num: "09", title: "Respeito e Fair Play", text: "Todos deverão respeitar os jurados, organizadores e demais competidores. Não serão toleradas ofensas, discriminação, provocações ou atitudes antidesportivas." },
      { num: "10", title: "Penalidades", text: "O descumprimento das regras poderá resultar em advertência ou desclassificação imediata, conforme a gravidade." },
      {
        num: "11",
        title: "PREMIAÇÃO E DISPOSIÇÕES FINAIS",
        text: "Premiação oficial e disposições do edital:",
        bullets: [
          "A premiação será: 1 lugar : 100,00$ + Troféu",
          "A entrega ocorrerá no palco do evento.",
          "Todos os participantes deverão conhecer e cumprir as disposições deste regulamento.",
          "Situações não previstas serão analisadas pela coordenação, respeitando os princípios de transparência, igualdade e integridade competitiva.",
          "A inscrição no campeonato implica ciência e aceitação das regras aplicáveis.",
        ],
      },
    ],
  },
  {
    id: "espadas",
    name: "Torneio de Batalha de Espadas",
    category: "Soft Combat & Duelo Medieval",
    platform: "Arena de Combate",
    rules: "Duelos individuais 1 vs 1 de soft combat com espadas de espuma acolchoada. Regras diretas e seguras, com equipamentos de proteção obrigatórios fornecidos pela organização.",
    fee: "Inscrição Antecipada: R$ 7,00",
    reward: "1º Lugar: Brinde Especial Oficial (Palco)",
    icon: "⚔️",
    badge: "ARENA DE COMBATE",
    color: "#FFE600",
    editalSections: [
      { num: "01", title: "Inscrição & Taxa Antecipada", text: "Inscrição antecipada no valor de R$ 7,00 por participante. O participante deve possuir a pulseira oficial de entrada do evento. Vagas limitadas por chaveamento." },
      { num: "02", title: "Formato dos Duelos", text: "Combates individuais 1 contra 1 (1 vs 1) em chaveamento eliminatório (mata-mata), disputados em melhor de 3 rounds." },
      { num: "03", title: "Equipamento & Segurança", text: "Espadas acolchoadas de espuma próprias para soft combat e equipamentos de proteção individual fornecidos pela organização do evento." },
      { num: "04", title: "Pontuação & Golpes Válidos", text: "São válidos toques limpos no tronco, braços e pernas. Cada acerto válido computa 1 ponto." },
      { num: "05", title: "Golpes Proibidos & Penalidades", text: "Terminantemente proibidos golpes na cabeça, pescoço e virilha, estocadas perigosas ou agarrar o adversário. Infrações resultam em advertência ou desclassificação imediata." },
      {
        num: "06",
        title: "PREMIAÇÃO E DISPOSIÇÕES FINAIS",
        text: "Premiação oficial e disposições do edital:",
        bullets: [
          "A premiação será: 1 lugar : brinde especial",
          "A entrega ocorrerá no palco do evento.",
          "Todos os participantes deverão conhecer e cumprir as disposições deste regulamento.",
          "Situações não previstas serão analisadas pela coordenação, respeitando os princípios de transparência, igualdade e integridade competitiva.",
          "A inscrição no campeonato implica ciência e aceitação das regras aplicáveis.",
        ],
      },
    ],
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
