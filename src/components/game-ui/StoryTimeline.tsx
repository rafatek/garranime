"use client";

import { sound } from "@/lib/sound";
import { Flame, Clock, Sparkles, Trophy, Gamepad2 } from "lucide-react";
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
              22 DE NOVEMBRO • DAS 08H ÀS 20H • ESCOLA MÁRIO BRASIL
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
              PROGRAMAÇÃO OFICIAL CONFIRMADA
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans mb-2">
            CRONOGRAMA <span className="text-[#FFE600]">DO EVENTO</span>
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto mb-4 leading-relaxed">
            Confira a programação completa com as <strong>19 fases</strong> do Garranime: Torneios Gamers, Batalhas de Espadas, Gincanas, Dança Geek, Cosplay e o grande Boss Final!
          </p>

          {/* Mini Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6 text-[10px] font-mono">
            <span className="bg-[#070B28] text-[#00D2FF] px-2 py-0.5 border border-[#1E2C6A]">
              🎮 3 Torneios Gamers
            </span>
            <span className="bg-[#070B28] text-[#EC4899] px-2 py-0.5 border border-[#1E2C6A]">
              💃 Dança Geek
            </span>
            <span className="bg-[#070B28] text-[#FFE600] px-2 py-0.5 border border-[#1E2C6A]">
              🎭 3 Categorias Cosplay
            </span>
            <span className="bg-[#070B28] text-[#FF7A00] px-2 py-0.5 border border-[#1E2C6A]">
              🏆 Boss Final às 18h30
            </span>
          </div>

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
              VER CRONOGRAMA
            </GamerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
