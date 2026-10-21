"use client";

import Image from "next/image";
import { sound } from "@/lib/sound";
import { Home, Swords, Sparkles, Map, Ticket } from "lucide-react";
import { HubView } from "./EventHubModal";

interface MobileDockProps {
  currentSection: string;
  onOpenTickets: () => void;
  onOpenHub: (view?: HubView) => void;
}

export default function MobileDock({
  currentSection,
  onOpenTickets,
  onOpenHub,
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
        {/* 1. INÍCIO */}
        <button
          onClick={() => handleScroll("topo")}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 transition-all active:scale-90 ${
            currentSection === "topo" ? "text-[#FF7A00]" : "text-gray-400 hover:text-white"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Início</span>
        </button>

        {/* 2. COMPETIÇÕES (Abre pop-up direto de Competições) */}
        <button
          onClick={() => {
            sound.playSelect();
            onOpenHub("competicoes");
          }}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 transition-all active:scale-90 ${
            currentSection === "versus" ? "text-[#FF7A00]" : "text-gray-400 hover:text-white"
          }`}
        >
          <Swords className="w-5 h-5" />
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Competições</span>
        </button>

        {/* 3. CRONOGRAMA */}
        <button
          onClick={() => handleScroll("historia")}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 transition-all active:scale-90 ${
            currentSection === "historia" ? "text-[#FFE600]" : "text-gray-400 hover:text-white"
          }`}
        >
          <Sparkles className="w-5 h-5 text-[#FFE600]" />
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Cronograma</span>
        </button>

        {/* 4. EVENTO (Abre a central de informações / menu da imagem 1) */}
        <button
          onClick={() => {
            sound.playSelect();
            onOpenHub("menu");
          }}
          className="flex flex-col items-center gap-0.5 py-1 px-2 transition-all active:scale-90 text-gray-300 hover:text-[#00D2FF]"
        >
          <Map className="w-5 h-5 text-[#00D2FF]" />
          <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Evento</span>
        </button>

        {/* 5. PULSEIRAS (Garantir pulseira antecipada / Pix) */}
        <button
          onClick={() => {
            sound.playCoin();
            onOpenTickets();
          }}
          className="group relative -top-3 flex flex-col items-center justify-center p-1.5 active:scale-95 transition-transform"
        >
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

          {/* Orange comic button frame */}
          <span className="relative z-10 flex flex-col items-center justify-center bg-[#0A1138] border-2 border-[#FF7A00] p-1.5 px-3 shadow-[0_0_10px_rgba(255,122,0,0.5)]">
            <span className="absolute -top-2 bg-[#FF7A00] text-white text-[7px] font-black uppercase px-1 border border-[#070B28]">
              R$ 10
            </span>
            <Ticket className="w-4 h-4 text-[#FFE600] fill-current" />
            <span className="text-[9px] font-black uppercase tracking-wider text-white">
              Pulseiras
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
}
