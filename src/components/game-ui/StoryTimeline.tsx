"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { TIMELINE_STAGES } from "@/content/eventData";
import { MapPin, Clock, Trophy, CheckCircle, Flame } from "lucide-react";

export default function StoryTimeline() {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const handleStageClick = (index: number) => {
    sound.playSelect();
    setSelectedStage(index);
  };

  return (
    <section id="historia" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#070B28] relative overflow-hidden">
      {/* Background Halftone */}
      <div className="absolute inset-0 opacity-10 pointer-events-none manga-dots" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0F173D] border border-[#FF7A00] px-4 py-1.5 mb-3 clip-chamfer">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#FF7A00] tracking-widest font-mono">
              CRONOGRAMA DO DIA 22 DE NOVEMBRO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans">
            MODO HISTÓRIA: <span className="text-[#FFE600]">MAPA DE FASES</span>
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-sm text-gray-300">
            Acompanhe cada etapa do evento como uma missão de aventura de RPG, das primeiras horas até o grande Boss Final.
          </p>
        </div>

        {/* Timeline Path / Boss Rush Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {TIMELINE_STAGES.map((stage, idx) => {
            const isSelected = selectedStage === idx;
            const isBoss = stage.stage === "BOSS FINAL";

            return (
              <div
                key={idx}
                onClick={() => handleStageClick(idx)}
                className={`relative cursor-pointer p-5 sm:p-6 transition-all duration-200 border-2 ${
                  isBoss
                    ? isSelected
                      ? "bg-[#0F173D] border-[#FFE600] shonen-shadow-yellow scale-[1.02]"
                      : "bg-[#0F173D]/90 border-[#FF7A00] hover:border-[#FFE600]"
                    : isSelected
                    ? "bg-[#0F173D] border-[#00D2FF] shonen-shadow-cyan scale-[1.02]"
                    : "bg-[#0F173D]/70 border-[#1E2C6A] hover:border-[#00D2FF]"
                }`}
              >
                {/* Stage Badge & Time */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-black uppercase px-2 py-0.5 font-mono ${
                      isBoss
                        ? "bg-[#FFE600] text-[#070B28]"
                        : "bg-[#FF7A00] text-[#070B28]"
                    }`}
                  >
                    {stage.stage}
                  </span>

                  <span className="flex items-center gap-1 text-xs font-mono font-bold text-[#00D2FF] bg-[#070B28] px-2 py-0.5 border border-[#1E2C6A]">
                    <Clock className="w-3.5 h-3.5" />
                    {stage.time}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">{stage.icon}</span>
                  <h3 className="text-base sm:text-lg font-black uppercase text-white leading-tight">
                    {stage.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2">
                  {stage.desc}
                </p>

                {/* Status indicator */}
                <div className="mt-4 pt-3 border-t border-[#1E2C6A] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-400">Status da Missão:</span>
                  <span
                    className={`font-bold ${
                      isBoss
                        ? "text-[#FFE600] animate-pulse"
                        : "text-[#00D2FF]"
                    }`}
                  >
                    {stage.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
