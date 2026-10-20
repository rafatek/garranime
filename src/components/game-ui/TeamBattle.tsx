"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { TEAM_BATTLE } from "@/content/eventData";
import { Shield, Flame, Zap, Trophy, Users, CheckCircle2 } from "lucide-react";

interface TeamBattleProps {
  onChooseTeam: (team: "blue" | "orange") => void;
}

export default function TeamBattle({ onChooseTeam }: TeamBattleProps) {
  const [activeTab, setActiveTab] = useState<"both" | "blue" | "orange">("both");
  const [hoveredTeam, setHoveredTeam] = useState<"blue" | "orange" | null>(null);

  const handleSelect = (team: "blue" | "orange") => {
    sound.playConfirm();
    onChooseTeam(team);
  };

  return (
    <section id="equipes" className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-[#070B28]">
      {/* Background Halftone textures */}
      <div className="absolute inset-0 opacity-15 pointer-events-none manga-dots" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0F173D] border-2 border-[#FFE600] px-4 py-1.5 mb-3 shonen-shadow-yellow">
            <Trophy className="w-4 h-4 text-[#FFE600]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#FFE600] tracking-widest font-mono">
              SISTEMA DE PULSEIRAS • 500 VAGAS TOTAIS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] font-sans">
            ESCOLHA SEU LADO:{" "}
            <span className="text-[#00D2FF]">TIME AZUL</span>{" "}
            <span className="text-[#FFE600]">VS</span>{" "}
            <span className="text-[#FF7A00]">TIME LARANJA</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base text-gray-300">
            No momento da compra do seu ingresso, você escolhe sua equipe. As gincanas do evento somarão pontos e apenas o time vencedor participará do <strong className="text-[#FFE600]">sorteio final de brindes exclusivos</strong>!
          </p>

          {/* Mobile Filter Tabs */}
          <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
            <button
              onClick={() => {
                sound.playHover();
                setActiveTab("both");
              }}
              className={`text-xs font-bold uppercase px-3 py-1.5 border ${
                activeTab === "both" ? "bg-white text-[#070B28] border-white" : "bg-[#0F173D] text-gray-300 border-[#1E2C6A]"
              }`}
            >
              Ver Ambos
            </button>
            <button
              onClick={() => {
                sound.playHover();
                setActiveTab("blue");
              }}
              className={`text-xs font-bold uppercase px-3 py-1.5 border ${
                activeTab === "blue" ? "bg-[#00D2FF] text-[#070B28] border-white" : "bg-[#0F173D] text-[#00D2FF] border-[#00D2FF]"
              }`}
            >
              Time Azul
            </button>
            <button
              onClick={() => {
                sound.playHover();
                setActiveTab("orange");
              }}
              className={`text-xs font-bold uppercase px-3 py-1.5 border ${
                activeTab === "orange" ? "bg-[#FF7A00] text-[#070B28] border-white" : "bg-[#0F173D] text-[#FF7A00] border-[#FF7A00]"
              }`}
            >
              Time Laranja
            </button>
          </div>
        </div>

        {/* Battle Arena Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch relative">
          {/* Central VS Badge (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-[#070B28] border-4 border-[#FFE600] items-center justify-center shonen-shadow-yellow animate-pulse">
            <span className="text-xl font-black text-[#FFE600] font-mono">VS</span>
          </div>

          {/* TIME AZUL CARD */}
          {(activeTab === "both" || activeTab === "blue") && (
            <div
              onMouseEnter={() => setHoveredTeam("blue")}
              onMouseLeave={() => setHoveredTeam(null)}
              className="group relative flex flex-col justify-between bg-gradient-to-b from-[#0F173D] to-[#070B28] border-4 border-[#00D2FF] p-6 sm:p-8 shonen-shadow-cyan transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#00D2FF] text-[#070B28] font-black text-xs uppercase px-3 py-1 tracking-wider">
                  {TEAM_BATTLE.teams.blue.badge}
                </span>
                <span className="text-xs font-mono font-bold text-[#00D2FF] bg-[#070B28] px-2.5 py-1 border border-[#00D2FF]">
                  PULSEIRAS: #{TEAM_BATTLE.teams.blue.numberRange}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-[#00D2FF] flex-shrink-0" />
                  <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-sans tracking-wide">
                    {TEAM_BATTLE.teams.blue.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-cyan-200 font-mono italic mb-4">
                  "{TEAM_BATTLE.teams.blue.motto}"
                </p>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {TEAM_BATTLE.teams.blue.description}
                </p>

                {/* Team Perks */}
                <div className="space-y-2 mb-6 text-xs sm:text-sm text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
                    <span>250 vagas exclusivas com pulseira azul numerada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
                    <span>Liderança e pontuação em todas as gincanas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#FFE600] flex-shrink-0" />
                    <span>Acesso ao sorteio especial se o time vencer</span>
                  </div>
                </div>

                {/* Mock Capacity Meter */}
                <div className="bg-[#070B28] border border-[#1E2C6A] p-2.5 mb-6">
                  <div className="flex justify-between text-xs font-mono mb-1 text-gray-300">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#00D2FF]" /> Limite da Equipe
                    </span>
                    <span className="text-[#00D2FF] font-bold">250 Vagas</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2.5 overflow-hidden">
                    <div className="bg-[#00D2FF] h-full w-[65%] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelect("blue")}
                className="w-full py-4 bg-[#00D2FF] hover:bg-white text-[#070B28] font-black text-sm sm:text-base uppercase tracking-wider border-2 border-white shonen-shadow active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Shield className="w-5 h-5 fill-current" />
                <span>ESCOLHER TIME AZUL (R$ 10)</span>
              </button>
            </div>
          )}

          {/* TIME LARANJA CARD */}
          {(activeTab === "both" || activeTab === "orange") && (
            <div
              onMouseEnter={() => setHoveredTeam("orange")}
              onMouseLeave={() => setHoveredTeam(null)}
              className="group relative flex flex-col justify-between bg-gradient-to-b from-[#0F173D] to-[#070B28] border-4 border-[#FF7A00] p-6 sm:p-8 shonen-shadow-orange transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#FF7A00] text-[#070B28] font-black text-xs uppercase px-3 py-1 tracking-wider">
                  {TEAM_BATTLE.teams.orange.badge}
                </span>
                <span className="text-xs font-mono font-bold text-[#FF7A00] bg-[#070B28] px-2.5 py-1 border border-[#FF7A00]">
                  PULSEIRAS: #{TEAM_BATTLE.teams.orange.numberRange}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Flame className="w-8 h-8 text-[#FF7A00] flex-shrink-0" />
                  <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-sans tracking-wide">
                    {TEAM_BATTLE.teams.orange.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-orange-200 font-mono italic mb-4">
                  "{TEAM_BATTLE.teams.orange.motto}"
                </p>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {TEAM_BATTLE.teams.orange.description}
                </p>

                {/* Team Perks */}
                <div className="space-y-2 mb-6 text-xs sm:text-sm text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] flex-shrink-0" />
                    <span>250 vagas exclusivas com pulseira laranja numerada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#FF7A00] flex-shrink-0" />
                    <span>Energia Shonen nas provas de torcida e desafios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#FFE600] flex-shrink-0" />
                    <span>Acesso ao sorteio especial se o time vencer</span>
                  </div>
                </div>

                {/* Mock Capacity Meter */}
                <div className="bg-[#070B28] border border-[#1E2C6A] p-2.5 mb-6">
                  <div className="flex justify-between text-xs font-mono mb-1 text-gray-300">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#FF7A00]" /> Limite da Equipe
                    </span>
                    <span className="text-[#FF7A00] font-bold">250 Vagas</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2.5 overflow-hidden">
                    <div className="bg-[#FF7A00] h-full w-[72%] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelect("orange")}
                className="w-full py-4 bg-[#FF7A00] hover:bg-[#FFE600] text-[#070B28] font-black text-sm sm:text-base uppercase tracking-wider border-2 border-white shonen-shadow-cyan active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Flame className="w-5 h-5 fill-current" />
                <span>ESCOLHER TIME LARANJA (R$ 10)</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
