"use client";

import { sound } from "@/lib/sound";
import { Home, Swords, Users, Map, Ticket } from "lucide-react";

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

        {/* Teams / Equipes */}
        <button
          onClick={() => handleScroll("equipes")}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-all active:scale-90 relative ${
            currentSection === "equipes" ? "text-[#00D2FF]" : "text-gray-400 hover:text-white"
          }`}
        >
          <span className="absolute -top-1 right-1 w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
          <Users className="w-5 h-5" />
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Equipes</span>
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

        {/* Ingressos R$ 10 (High Priority Arcade CTA) */}
        <button
          onClick={() => {
            sound.playCoin();
            onOpenTickets();
          }}
          className="relative -top-2 flex flex-col items-center justify-center bg-gradient-to-t from-[#FF7A00] to-[#FFE600] text-[#070B28] p-2 px-3 border-2 border-white shonen-shadow-cyan active:scale-95 transition-transform"
        >
          <span className="absolute -top-2.5 bg-[#070B28] text-[#FFE600] text-[8px] font-black uppercase px-1.5 py-0.2 border border-[#FFE600]">
            R$ 10
          </span>
          <Ticket className="w-5 h-5 fill-current" />
          <span className="text-[9px] font-black uppercase tracking-wider">PIX</span>
        </button>
      </div>
    </nav>
  );
}
