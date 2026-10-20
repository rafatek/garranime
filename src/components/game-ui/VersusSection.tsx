"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { TOURNAMENTS, COSPLAY_DATA } from "@/content/eventData";
import { Swords, Sparkles, Gamepad2, Award, Music, ShieldCheck, ChevronRight } from "lucide-react";

interface VersusSectionProps {
  onOpenCosplay: () => void;
  onOpenTournament: (tournamentId: string) => void;
}

export default function VersusSection({
  onOpenCosplay,
  onOpenTournament,
}: VersusSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"cosplay" | "games">("cosplay");

  return (
    <section id="versus" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0F173D] border-y-4 border-[#1E2C6A] relative overflow-hidden">
      {/* Background Halftone */}
      <div className="absolute inset-0 opacity-10 pointer-events-none manga-dots-blue" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#00D2FF] px-4 py-1.5 mb-3 clip-chamfer">
            <Swords className="w-4 h-4 text-[#00D2FF]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#00D2FF] tracking-widest font-mono">
              ARENA DE COMPETIÇÕES & CONCURSOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans">
            MODO VERSUS: <span className="text-[#FF7A00]">COSPLAY</span> & <span className="text-[#00D2FF]">GAMES</span>
          </h2>

          {/* Category Toggle Tabs */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => {
                sound.playSelect();
                setActiveCategory("cosplay");
              }}
              className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs sm:text-sm uppercase tracking-wider border-2 transition-all ${
                activeCategory === "cosplay"
                  ? "bg-[#FF7A00] text-[#070B28] border-white shonen-shadow-cyan"
                  : "bg-[#070B28] text-gray-300 border-[#1E2C6A] hover:border-[#FF7A00]"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Concurso de Cosplay (Grátis)</span>
            </button>

            <button
              onClick={() => {
                sound.playSelect();
                setActiveCategory("games");
              }}
              className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs sm:text-sm uppercase tracking-wider border-2 transition-all ${
                activeCategory === "games"
                  ? "bg-[#00D2FF] text-[#070B28] border-white shonen-shadow-orange"
                  : "bg-[#070B28] text-gray-300 border-[#1E2C6A] hover:border-[#00D2FF]"
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Torneios Gamers (3 Jogos)</span>
            </button>
          </div>
        </div>

        {/* COSPLAY TAB CONTENT */}
        {activeCategory === "cosplay" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Banner Destaque */}
            <div className="bg-[#070B28] border-2 border-[#FFE600] p-6 sm:p-8 shonen-shadow-yellow flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="bg-[#FFE600] text-[#070B28] text-xs font-black uppercase px-2.5 py-1">
                  INSCRIÇÃO TOTALMENTE GRATUITA
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                  Desfile e Apresentação de Cosplay
                </h3>
                <p className="text-sm text-gray-300 max-w-xl">
                  Mostre sua criatividade no palco principal! Você só precisa do seu ingresso de entrada para competir pelas melhores pontuações e troféus.
                </p>
              </div>

              <button
                onClick={() => {
                  sound.playConfirm();
                  onOpenCosplay();
                }}
                className="w-full md:w-auto px-8 py-4 bg-[#FF7A00] hover:bg-[#FFE600] text-[#070B28] font-black uppercase tracking-wider border-2 border-white shonen-shadow flex items-center justify-center gap-2 shrink-0 active:scale-95 transition-transform"
              >
                <span>Inscrever Meu Cosplay</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Categorias Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COSPLAY_DATA.categories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-[#070B28] border-2 border-[#1E2C6A] hover:border-[#FF7A00] p-6 shonen-shadow transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-[#FFE600]" />
                    <h4 className="text-xl font-black uppercase text-white font-sans">
                      {cat.name}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{cat.desc}</p>

                  <div className="bg-[#0F173D] border border-[#1E2C6A] p-3 text-xs text-orange-200 flex items-start gap-2">
                    <Music className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                    <span>
                      <strong>Regra de Áudio:</strong> {cat.requirements}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GAMES TAB CONTENT */}
        {activeCategory === "games" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TOURNAMENTS.map((tourn) => (
                <div
                  key={tourn.id}
                  className="bg-[#070B28] border-2 border-[#00D2FF] p-6 shonen-shadow-cyan flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{tourn.icon}</span>
                      <span className="bg-[#00D2FF] text-[#070B28] text-[10px] font-black uppercase px-2 py-0.5">
                        {tourn.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-black uppercase text-white mb-2 leading-tight">
                      {tourn.name}
                    </h4>

                    <div className="space-y-2 text-xs text-gray-300 mb-4">
                      <p>
                        <strong className="text-[#00D2FF]">Plataforma:</strong> {tourn.platform}
                      </p>
                      <p>
                        <strong className="text-[#00D2FF]">Regulamento:</strong> {tourn.rules}
                      </p>
                      <p className="text-[#FFE600] font-mono">
                        {tourn.fee}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      sound.playSelect();
                      onOpenTournament(tourn.id);
                    }}
                    className="w-full mt-4 py-2.5 bg-[#00D2FF] hover:bg-white text-[#070B28] font-black text-xs uppercase tracking-wider border border-white shonen-shadow active:scale-95 transition-all"
                  >
                    Inscrever-se no Torneio
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#070B28] border border-[#1E2C6A] text-center text-xs text-gray-400 font-mono">
              📋 As chaves de cada jogo e a lista pública de jogadores inscritos serão impressas e publicadas antes do evento!
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
