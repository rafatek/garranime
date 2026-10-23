"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { TOURNAMENTS, COSPLAY_DATA, STAGE_COMPETITIONS, EVENT_DATA } from "@/content/eventData";
import { Swords, Sparkles, Gamepad2, Award, Music, ShieldCheck, ChevronRight, MessageCircle } from "lucide-react";
import GamerButton from "./GamerButton";

interface VersusSectionProps {
  onOpenCosplay: () => void;
  onOpenTournament: (tournamentId: string) => void;
  onOpenDanceEdital?: () => void;
  onOpenSwordEdital?: () => void;
}

export default function VersusSection({
  onOpenCosplay,
  onOpenTournament,
  onOpenDanceEdital,
  onOpenSwordEdital,
}: VersusSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"cosplay" | "games" | "torneios">("cosplay");

  const handleStageTournamentRegister = (comp: (typeof STAGE_COMPETITIONS)[number]) => {
    sound.playConfirm();
    let text = "";
    if (comp.id === "espadas") {
      text = encodeURIComponent(
        `Olá, equipe Garranime! Gostaria de me inscrever no Torneio de Batalha de Espadas do evento (Taxa Antecipada: R$ 7,00)!\n\nNome Completo:\nNick / Apelido:\nConfirmo que possuo a pulseira de entrada do evento.`
      );
    } else {
      text = encodeURIComponent(
        `Olá, equipe Garranime! Gostaria de inscrever minha apresentação na Competição de Dança Geek (Valores Antecipados: Solo R$ 7,00 / Dupla R$ 14,00 / Grupos R$ 20,00):\n\nNome do Dançarino / Grupo:\nModalidade (Solo, Dupla ou Grupo de 3 a 5):\nEstilo de Dança:\nQuantidade de Integrantes:`
      );
    }
    window.open(`https://wa.me/${EVENT_DATA.whatsappContact}?text=${text}`, "_blank");
  };

  return (
    <section id="versus" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0F173D] border-y-4 border-[#1E2C6A] relative overflow-hidden">
      {/* Background Halftone */}
      <div className="absolute inset-0 opacity-10 pointer-events-none manga-dots-blue" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#00D2FF] px-4 py-1.5 mb-3 clip-chamfer">
            <Swords className="w-4 h-4 text-[#00D2FF]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#00D2FF] tracking-widest font-mono">
              ARENA DE COMPETIÇÕES & CONCURSOS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-sans">
            MODO VERSUS: <span className="text-[#FF7A00]">COSPLAY</span> / <span className="text-[#00D2FF]">GAMES</span> & <span className="text-[#FFE600]">COMPETIÇÕES</span>
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-xs sm:text-sm text-gray-300">
            Concursos de palco, campeonatos gamers e torneios especiais valendo troféus, dinheiro e prêmios oficiais!
          </p>

          {/* Category Toggle Tabs (3 Abas) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-6">
            <button
              onClick={() => {
                sound.playSelect();
                setActiveCategory("cosplay");
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 font-black text-xs sm:text-sm uppercase tracking-wider border-2 transition-all ${
                activeCategory === "cosplay"
                  ? "bg-[#FF7A00] text-[#070B28] border-white shonen-shadow-cyan"
                  : "bg-[#070B28] text-gray-300 border-[#1E2C6A] hover:border-[#FF7A00]"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Concurso Cosplay (Gratuito)</span>
            </button>

            <button
              onClick={() => {
                sound.playSelect();
                setActiveCategory("games");
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 font-black text-xs sm:text-sm uppercase tracking-wider border-2 transition-all ${
                activeCategory === "games"
                  ? "bg-[#00D2FF] text-[#070B28] border-white shonen-shadow-orange"
                  : "bg-[#070B28] text-gray-300 border-[#1E2C6A] hover:border-[#00D2FF]"
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Torneios Gamers (Inscrições Pagas)</span>
            </button>

            <button
              onClick={() => {
                sound.playSelect();
                setActiveCategory("torneios");
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 font-black text-xs sm:text-sm uppercase tracking-wider border-2 transition-all ${
                activeCategory === "torneios"
                  ? "bg-[#FFE600] text-[#070B28] border-white shonen-shadow-orange"
                  : "bg-[#070B28] text-gray-300 border-[#1E2C6A] hover:border-[#FFE600]"
              }`}
            >
              <Swords className="w-4 h-4" />
              <span>Palco & Arena (Dança e Espadas)</span>
            </button>
          </div>
        </div>

        {/* ========================================================== */}
        {/* ABA 1: CONCURSO DE COSPLAY                                 */}
        {/* ========================================================== */}
        {activeCategory === "cosplay" && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            {/* Banner Destaque */}
            <div className="bg-[#070B28] border-2 border-[#FFE600] p-6 sm:p-8 shonen-shadow-yellow flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-[#FFE600] text-[#070B28] text-xs font-black uppercase px-2.5 py-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>INSCRIÇÃO TOTALMENTE GRATUITA</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-sans">
                  Concurso Oficial de Cosplay
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
                  Mostre sua criatividade no palco principal! <strong>Regra de Acesso:</strong> O único pré-requisito é possuir a pulseira de entrada do evento. O participante deverá preencher os dados (música, apresentação, etc.) para concluir o cadastro.
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <GamerButton
                  size="md"
                  ghost="pink"
                  showPacman
                  onClick={() => {
                    sound.playConfirm();
                    onOpenCosplay();
                  }}
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  Inscrever Meu Cosplay (Gratuito)
                </GamerButton>
              </div>
            </div>

            {/* Categorias Grid: 3 Colunas (Kids, Cospobre e Tradicional Adulto) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COSPLAY_DATA.categories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-[#070B28] border-2 border-[#1E2C6A] hover:border-[#FF7A00] p-5 sm:p-6 shonen-shadow transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#FFE600]" />
                        <h4 className="text-lg sm:text-xl font-black uppercase text-white font-sans">
                          {cat.name}
                        </h4>
                      </div>
                      <span className="text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded bg-[#FF7A00]/20 text-[#FF7A00] border border-[#FF7A00]/40 shrink-0">
                        {cat.badge || "OFICIAL"}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">{cat.desc}</p>
                  </div>

                  <div className="bg-[#0F173D] border border-[#1E2C6A] p-3 text-xs text-orange-200 flex items-start gap-2 mt-2">
                    <Music className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                    <span>
                      <strong>Requisito:</strong> {cat.requirements}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* ABA 2: TORNEIOS GAMERS (3 JOGOS - INSCRIÇÕES PAGAS)        */}
        {/* ========================================================== */}
        {activeCategory === "games" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Aviso Obrigatório: Inscrições Pagas */}
            <div className="p-4 bg-[#070B28] border-2 border-[#00D2FF] text-white flex flex-col sm:flex-row items-center justify-between gap-3 shonen-shadow-cyan">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#00D2FF] text-[#070B28] shrink-0">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#00D2FF]">
                    AVISO OFICIAL: INSCRIÇÕES DOS TORNEIOS GAMER SÃO PAGAS
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-300">
                    Valores antecipados para formação do chaveamento: <strong>R$ 7,00 individual</strong> (Naruto e Clash Royale) e <strong>R$ 14,00 por dupla</strong> no Free Fire (equivale a R$ 7,00/pessoa).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TOURNAMENTS.map((tourn) => (
                <div
                  key={tourn.id}
                  className="bg-[#070B28] border-2 border-[#00D2FF] p-6 shonen-shadow-cyan flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{tourn.icon}</span>
                      <span className="bg-[#00D2FF] text-[#070B28] text-[10px] font-black uppercase px-2 py-0.5 font-mono">
                        {tourn.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-black uppercase text-white mb-2 leading-tight">
                      {tourn.name}
                    </h4>

                    {/* Badge Destaque de Valor */}
                    <div className="my-2 p-2 bg-[#0A1138] border border-[#FFE600] text-center">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">
                        TAXA ANTECIPADA:
                      </span>
                      <span className="text-sm font-black text-[#FFE600] font-mono">
                        {tourn.feeBadge}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-gray-300 mb-4 mt-3">
                      <p>
                        <strong className="text-[#00D2FF]">Plataforma:</strong> {tourn.platform}
                      </p>
                      <p>
                        <strong className="text-[#00D2FF]">Regulamento:</strong> {tourn.rules}
                      </p>
                      <p>
                        <strong className="text-green-400">Premiação:</strong> {tourn.reward}
                      </p>
                    </div>
                  </div>

                  <div className="w-full mt-4">
                    <GamerButton
                      fullWidth
                      size="sm"
                      ghost="blue"
                      tilt="right"
                      onClick={() => {
                        sound.playSelect();
                        onOpenTournament(tourn.id);
                      }}
                      icon={<Gamepad2 className="w-4 h-4" />}
                    >
                      {tourn.isDuo
                        ? "Inscrever Dupla (R$ 14,00)"
                        : "Inscrever-se (R$ 7,00)"}
                    </GamerButton>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#070B28] border border-[#1E2C6A] text-center text-xs text-gray-300 font-mono">
              📋 Vagas limitadas por chaveamento. As tabelas oficiais de confrontos serão impressas e afixadas no mural da Arena Gamer!
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* ABA 3: TORNEIOS DE PALCO & ARENA (DANÇA & BATALHA ESPADAS)  */}
        {/* ========================================================== */}
        {activeCategory === "torneios" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {STAGE_COMPETITIONS.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-[#070B28] border-2 border-[#FFE600] p-6 sm:p-7 shonen-shadow-yellow flex flex-col justify-between"
                >
                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{comp.icon}</span>
                      <span className="bg-[#FFE600] text-[#070B28] text-[10px] font-black uppercase px-2.5 py-0.5 font-mono">
                        {comp.badge}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-black uppercase text-white font-sans mb-1">
                      {comp.name}
                    </h4>
                    <span className="text-xs font-mono text-[#00D2FF] block mb-3">
                      {comp.category}
                    </span>

                    {/* Destaque de Valores Antecipados */}
                    <div className="my-3 p-3 bg-[#0A1138] border-l-4 border-[#FFE600] space-y-1">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">
                        VALORES ANTECIPADOS DE INSCRIÇÃO:
                      </span>
                      {comp.id === "danca" ? (
                        <div className="text-xs font-mono text-gray-200 space-y-0.5">
                          <p>• <strong>Solo (Individual):</strong> <span className="text-[#FFE600]">R$ 7,00</span></p>
                          <p>• <strong>Dupla:</strong> <span className="text-[#FFE600]">R$ 14,00</span></p>
                          <p>• <strong>Grupos (Trio, Quarteto, Quinteto):</strong> <span className="text-[#FFE600]">R$ 20,00 no total</span></p>
                        </div>
                      ) : (
                        <p className="text-sm font-black text-[#FFE600] font-mono">
                          Inscrição Antecipada: R$ 7,00
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 text-xs text-gray-300 mb-6 leading-relaxed">
                      <p>
                        <strong className="text-[#FFE600]">Local:</strong> {comp.platform}
                      </p>
                      <p>
                        <strong className="text-white">Regulamento:</strong> {comp.rules}
                      </p>
                      <p>
                        <strong className="text-green-400">Premiação Oficial:</strong>{" "}
                        <span className="text-green-300 font-bold">{comp.reward}</span>
                      </p>
                    </div>
                  </div>

                  <div className="w-full pt-2 space-y-2">
                    {comp.id === "danca" && onOpenDanceEdital && (
                      <GamerButton
                        fullWidth
                        size="sm"
                        ghost="pink"
                        onClick={() => {
                          sound.playSelect();
                          onOpenDanceEdital();
                        }}
                        icon={<Music className="w-4 h-4" />}
                      >
                        VER EDITAL DE DANÇA (11 PONTOS)
                      </GamerButton>
                    )}

                    {comp.id === "espadas" && onOpenSwordEdital && (
                      <GamerButton
                        fullWidth
                        size="sm"
                        ghost="orange"
                        onClick={() => {
                          sound.playSelect();
                          onOpenSwordEdital();
                        }}
                        icon={<ShieldCheck className="w-4 h-4" />}
                      >
                        VER REGRAS BÁSICAS DO COMBATE
                      </GamerButton>
                    )}

                    <GamerButton
                      fullWidth
                      size="md"
                      onClick={() => handleStageTournamentRegister(comp)}
                      icon={<MessageCircle className="w-5 h-5 text-[#25D366]" />}
                    >
                      {comp.id === "espadas"
                        ? "Inscrever-se no WhatsApp (R$ 7,00)"
                        : "Inscrever Dança no WhatsApp"}
                    </GamerButton>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#070B28] border border-[#1E2C6A] text-center text-xs text-gray-300 font-mono">
              ⚔️ Equipamentos de proteção fornecidos pela organização do evento. Vagas limitadas por chaveamento!
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
