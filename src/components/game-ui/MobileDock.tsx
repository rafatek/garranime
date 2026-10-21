"use client";

import Image from "next/image";
import { sound } from "@/lib/sound";
import { Home, Swords, Sparkles, Map, Ticket } from "lucide-react";

interface MobileDockProps {
  currentSection: string;
  onOpenTickets: () => void;
}

export default function MobileDock({
  currentSection,
  onOpenTickets,
}: MobileDockProps) {
  const handleScroll = (id: string) => {
    sound.playSelect();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Navegação Portátil de Jogo"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F173D]/95 backdrop-blur-lg border-t-2 border-[#FF7A00] px-2 py-1.5 safe-bottom-dock shonen-shadow"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <button
          onClick={() => handleScroll("topo")}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-all active:scale-90 ${
            currentSection === "topo" ? "text-[#FF7A00]" : "text-gray-400 hover:text-white"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Início</span>
        </button>

        {/* Versus / Torneios */}
        <button
          onClick={() => handleScroll("versus")}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-all active:scale-90 ${
            currentSection === "versus" ? "text-[#FF7A00]" : "text-gray-400 hover:text-white"
          }`}
        >
          <Swords className="w-5 h-5" />
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Versus</span>
        </button>

        {/* Atrações / Salas */}
        <button
          onClick={() => handleScroll("atracoes")}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-all active:scale-90 relative ${
            currentSection === "atracoes" ? "text-[#00D2FF]" : "text-gray-400 hover:text-white"
          }`}
        >
          <Sparkles className="w-5 h-5 text-[#FFE600]" />
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Atrações</span>
        </button>

        {/* Story / Fases */}
        <button
          onClick={() => handleScroll("historia")}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-all active:scale-90 ${
            currentSection === "historia" ? "text-[#FF7A00]" : "text-gray-400 hover:text-white"
          }`}
        >
          <Map className="w-5 h-5" />
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Fases</span>
        </button>

        {/* Ingressos R$ 10 (High Priority Arcade CTA with angled orange backplate and navy plate) */}
        <button
          onClick={() => {
            sound.playCoin();
            onOpenTickets();
          }}
          className="group relative -top-3 flex flex-col items-center justify-center p-1.5 active:scale-95 transition-transform"
        >
          {/* Diagonal orange backplate */}
          <span className="absolute inset-0 bg-[#FF7A00] -rotate-3 group-hover:-rotate-6 transition-transform shadow-[2px_2px_0px_#070B28]" />

          {/* Peeking Clyde Ghost on top */}
          <div className="absolute -top-3 right-0.5 z-20 pointer-events-none animate-ghost-peek">
            <div className="relative w-4 h-4">
              <Image
                src="/assets/pack-man/trimmed/laranja.png"
                alt=""
                fill
                sizes="16px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Navy frontplate */}
          <span className="relative z-10 flex flex-col items-center justify-center bg-[#0A1138] border border-[#FF7A00] p-1.5 px-2.5">
            <span className="absolute -top-2 bg-[#FF7A00] text-white text-[7px] font-black uppercase px-1 border border-[#070B28]">
              R$ 10
            </span>
            <Ticket className="w-4 h-4 text-[#FFE600] fill-current" />
            <span className="text-[9px] font-black uppercase tracking-wider text-white garranime-btn-text-sm">
              PIX
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
}
