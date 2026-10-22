"use client";

import { sound } from "@/lib/sound";
import { Flame, Clock } from "lucide-react";
import GamerButton from "./GamerButton";

interface StoryTimelineProps {
  onOpenTimeline?: () => void;
}

export default function StoryTimeline({ onOpenTimeline }: StoryTimelineProps) {
  return (
    <section id="historia" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#070B28] border-b-4 border-[#1E2C6A] relative overflow-hidden">
      {/* Background Halftone */}
      <div className="absolute inset-0 opacity-10 pointer-events-none manga-dots" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0F173D] border border-[#FF7A00] px-4 py-1.5 mb-3 clip-chamfer">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#FF7A00] tracking-widest font-mono">
              22 DE NOVEMBRO • A PARTIR DAS 08H
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-sans">
            MODO HISTÓRIA: <span className="text-[#FFE600]">MAPA DE FASES</span>
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-xs sm:text-sm text-gray-300">
            Acompanhe cada etapa do evento na Escola Mário Brasil, das primeiras horas da manhã até o grande Boss Final.
          </p>
        </div>

        {/* Compact Timeline Access Box */}
        <div className="max-w-lg mx-auto bg-[#0A1138] border-4 border-[#FF7A00] p-6 sm:p-8 text-center shonen-shadow-orange">
          <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#FFE600] px-3.5 py-1 mb-3 clip-chamfer">
            <Clock className="w-4 h-4 text-[#FFE600]" />
            <span className="text-xs font-black uppercase text-[#FFE600] tracking-widest font-mono">
              CRONOGRAMA EM BREVE
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans mb-2">
            CRONOGRAMA <span className="text-[#FFE600]">EM BREVE</span>
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto mb-6 leading-relaxed">
            Abertura oficial a partir das <strong>08h00</strong> na Escola Mário Brasil! A organização está finalizando os horários exatos de cada atração.
          </p>

          <div className="w-full max-w-xs mx-auto">
            <GamerButton
              size="md"
              fullWidth
              ghost="orange"
              showPacman
              onClick={() => {
                sound.playConfirm();
                if (onOpenTimeline) onOpenTimeline();
              }}
              icon={<Clock className="w-4 h-4" />}
            >
              VER CRONOGRAMA (EM BREVE)
            </GamerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
