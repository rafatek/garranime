"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { Volume2, VolumeX, Settings, Ticket, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenTickets: () => void;
  onOpenOptions: () => void;
}

export default function Header({ onOpenTickets, onOpenOptions }: HeaderProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMuted(sound.isMuted());
  }, []);

  const toggleSound = () => {
    const newState = sound.toggleMute();
    setIsMuted(newState);
  };

  const handleNavClick = (id: string) => {
    sound.playSelect();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F173D]/95 backdrop-blur-md border-b-2 border-[#1E2C6A] shonen-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Official Logo Brand */}
        <a
          href="#topo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("topo");
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-28 sm:w-36 h-10 sm:h-12 transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,122,0,0.5)]">
            <Image
              src="/logo-gnime.png"
              alt="Garranime 2026"
              fill
              sizes="144px"
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden xl:inline-block text-[10px] font-black tracking-widest text-[#FFE600] bg-[#070B28] px-2 py-0.5 border border-[#1E2C6A] clip-tag-skew">
            22 NOVEMBRO • GARRAFÃO DO NORTE
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs font-bold uppercase tracking-wider text-gray-200">
          <button
            onClick={() => handleNavClick("equipes")}
            className="hover:text-[#FF7A00] transition-colors flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            Time Azul x Laranja
          </button>
          <button
            onClick={() => handleNavClick("versus")}
            className="hover:text-[#FF7A00] transition-colors"
          >
            Torneios & Cosplay
          </button>
          <button
            onClick={() => handleNavClick("historia")}
            className="hover:text-[#FF7A00] transition-colors"
          >
            Modo História
          </button>
          <button
            onClick={() => handleNavClick("atracoes")}
            className="hover:text-[#FF7A00] transition-colors"
          >
            Atrações
          </button>
          <button
            onClick={() => handleNavClick("lojas")}
            className="hover:text-[#FF7A00] transition-colors"
          >
            Lojas Parceiras
          </button>
          <button
            onClick={() => handleNavClick("arena")}
            className="hover:text-[#FF7A00] transition-colors"
          >
            Localização
          </button>
          <button
            onClick={() => handleNavClick("manual")}
            className="hover:text-[#FF7A00] transition-colors"
          >
            Manual / FAQ
          </button>
        </nav>

        {/* Action Controls & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
            className="p-2 sm:p-2.5 bg-[#070B28] border border-[#1E2C6A] hover:border-[#FF7A00] text-[#00D2FF] active:scale-90 transition-transform"
            title={isMuted ? "Ativar efeitos sonoros" : "Mutar áudio"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-gray-400" />
            ) : (
              <Volume2 className="w-5 h-5 text-[#FFE600] animate-pulse" />
            )}
          </button>

          {/* Settings Modal Toggle */}
          <button
            onClick={() => {
              sound.playSelect();
              onOpenOptions();
            }}
            aria-label="Opções e Acessibilidade"
            className="p-2 sm:p-2.5 bg-[#070B28] border border-[#1E2C6A] hover:border-[#00D2FF] text-gray-300 active:scale-90 transition-transform"
            title="Opções de Acessibilidade"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* CTA Ingressos Button */}
          <button
            onClick={() => {
              sound.playCoin();
              onOpenTickets();
            }}
            className="hidden sm:inline-flex items-center gap-2 bg-[#FF7A00] hover:bg-[#FFE600] text-[#070B28] font-black text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-5 py-2.5 border-2 border-white shonen-shadow-cyan active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <Ticket className="w-4 h-4 fill-current" />
            <span>Ingresso R$ 10</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sound.playSelect();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Abrir menu"
            className="lg:hidden p-2 bg-[#070B28] border border-[#1E2C6A] text-[#FF7A00]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070B28] border-b-2 border-[#FF7A00] p-4 flex flex-col gap-3 font-mono text-sm uppercase tracking-wider">
          <button
            onClick={() => handleNavClick("equipes")}
            className="text-left py-2 px-3 bg-[#0F173D] border-l-4 border-[#00D2FF] text-white flex items-center justify-between"
          >
            <span>Time Azul x Time Laranja</span>
            <span className="text-xs text-[#00D2FF]">500 Pulseiras</span>
          </button>
          <button
            onClick={() => handleNavClick("versus")}
            className="text-left py-2 px-3 bg-[#0F173D] border-l-4 border-[#FF7A00] text-white flex items-center justify-between"
          >
            <span>Torneios & Cosplay</span>
            <span className="text-xs text-[#FFE600]">Inscrições</span>
          </button>
          <button
            onClick={() => handleNavClick("historia")}
            className="text-left py-2 px-3 bg-[#0F173D] border-l-4 border-[#FFE600] text-white"
          >
            Modo História (Cronograma)
          </button>
          <button
            onClick={() => handleNavClick("atracoes")}
            className="text-left py-2 px-3 bg-[#0F173D] border-l-4 border-purple-500 text-white"
          >
            Salas & Atrações
          </button>
          <button
            onClick={() => handleNavClick("lojas")}
            className="text-left py-2 px-3 bg-[#0F173D] border-l-4 border-pink-500 text-white"
          >
            Lojas Parceiras Confirmadas
          </button>
          <button
            onClick={() => handleNavClick("arena")}
            className="text-left py-2 px-3 bg-[#0F173D] border-l-4 border-green-500 text-white"
          >
            Localização & Rota
          </button>
          <button
            onClick={() => handleNavClick("manual")}
            className="text-left py-2 px-3 bg-[#0F173D] border-l-4 border-gray-400 text-white"
          >
            Manual do Evento / FAQ
          </button>

          <button
            onClick={() => {
              sound.playCoin();
              setMobileMenuOpen(false);
              onOpenTickets();
            }}
            className="w-full mt-2 py-3 bg-[#FF7A00] text-[#070B28] font-black text-center text-sm uppercase border-2 border-white shonen-shadow-cyan"
          >
            🎟️ Comprar Ingresso Antecipado (R$ 10)
          </button>
        </div>
      )}
    </header>
  );
}
