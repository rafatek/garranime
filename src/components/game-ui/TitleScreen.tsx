"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { Play, Sparkles, Volume2 } from "lucide-react";

interface TitleScreenProps {
  onStart: () => void;
}

export default function TitleScreen({ onStart }: TitleScreenProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Event date: Nov 22, 2026 10:00 AM
    const target = new Date("2026-11-22T10:00:00-03:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    sound.playStart();
    onStart();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        handleStart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      onClick={handleStart}
      className="relative min-h-screen w-full flex flex-col items-center justify-between p-4 sm:p-8 bg-[#070B28] overflow-hidden cursor-pointer select-none"
    >
      {/* Dynamic Background: Halftone + Speedlines */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/assets/background-laranja.webp')" }}
      />
      <div className="speed-lines-bg absolute inset-0 pointer-events-none opacity-25" />
      <div className="scanlines-overlay absolute inset-0 pointer-events-none opacity-30" />

      {/* Top Banner & Sound Hint */}
      <header className="w-full max-w-4xl flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 bg-[#0F173D]/90 border border-[#1E2C6A] px-3 py-1.5 clip-chamfer">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00] animate-ping" />
          <span className="text-xs font-bold text-white tracking-widest uppercase">
            1º Evento Geek de Garrafão do Norte
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#00D2FF] bg-[#0F173D]/80 px-3 py-1 border border-[#00D2FF]/30">
          <Volume2 className="w-4 h-4 text-[#FFE600] animate-bounce" />
          <span>ÁUDIO RETRÔ ATIVADO NO START</span>
        </div>
      </header>

      {/* Main Title & Pulsating Logo */}
      <main className="flex flex-col items-center text-center z-10 max-w-2xl my-auto py-6">
        {/* Official LOGO-GNIME with Double Glow */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mb-2 transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_40px_rgba(255,122,0,0.7)]">
          <Image
            src="/logo-gnime.png"
            alt="Garranime Logo Oficial"
            fill
            priority
            sizes="(max-width: 640px) 288px, 384px"
            className="object-contain"
          />
        </div>

        <h1 className="sr-only">GARRANIME — 1º Evento Geek de Garrafão do Norte</h1>

        <div className="inline-block bg-[#FF7A00] text-[#070B28] font-black uppercase text-sm sm:text-base px-4 py-1 mb-6 border-2 border-white shonen-shadow-cyan font-mono tracking-wider">
          22 DE NOVEMBRO DE 2026 • GARRAFÃO DO NORTE - PA
        </div>

        {/* Pulsating PRESS START Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleStart();
          }}
          className="group relative inline-flex items-center gap-3 bg-[#FF7A00] hover:bg-[#FFE600] text-[#070B28] font-black text-xl sm:text-2xl uppercase tracking-wider px-8 sm:px-12 py-4 border-4 border-white shonen-shadow-cyan active:translate-x-1 active:translate-y-1 transition-all duration-150 animate-bounce mb-8"
        >
          <Play className="w-6 h-6 fill-current text-[#070B28]" />
          <span>TOQUE PARA COMEÇAR</span>
          <Sparkles className="w-5 h-5 text-white" />
        </button>

        {/* Live Countdown Display */}
        <div className="w-full max-w-md bg-[#0F173D]/95 border-2 border-[#FF7A00] p-3 sm:p-4 shonen-shadow">
          <p className="text-[11px] font-bold text-[#FFE600] uppercase tracking-widest mb-2 font-mono">
            ⏱️ CONTAGEM REGRESSIVA PARA O GARRANIME:
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-[#070B28] border border-[#1E2C6A] p-1.5 sm:p-2">
              <span className="block text-xl sm:text-3xl font-black text-[#FF7A00] font-mono">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[9px] uppercase font-bold text-gray-300">Dias</span>
            </div>
            <div className="bg-[#070B28] border border-[#1E2C6A] p-1.5 sm:p-2">
              <span className="block text-xl sm:text-3xl font-black text-[#00D2FF] font-mono">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[9px] uppercase font-bold text-gray-300">Horas</span>
            </div>
            <div className="bg-[#070B28] border border-[#1E2C6A] p-1.5 sm:p-2">
              <span className="block text-xl sm:text-3xl font-black text-[#FFE600] font-mono">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[9px] uppercase font-bold text-gray-300">Min</span>
            </div>
            <div className="bg-[#070B28] border border-[#1E2C6A] p-1.5 sm:p-2">
              <span className="block text-xl sm:text-3xl font-black text-white font-mono">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[9px] uppercase font-bold text-gray-300">Seg</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 border-t border-[#1E2C6A] pt-3 z-10 text-center sm:text-left gap-2">
        <p className="font-mono">
          PRESS START ou pressione <kbd className="px-1.5 py-0.5 bg-[#0F173D] border border-gray-600 text-white rounded text-[10px]">ENTER</kbd>
        </p>
        <p className="text-[#FFE600] font-semibold">
          Ingressos Antecipados: R$ 10,00 | Na Hora: R$ 15,00
        </p>
      </footer>
    </div>
  );
}
