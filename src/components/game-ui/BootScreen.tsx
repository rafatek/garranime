"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    "INITIALIZING GARRANIME CONSOLE BIOS v2.0...",
  ]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLogs((prev) => [...prev, "CHECKING VIDEO BUFFER: 1080p 60FPS SHONEN MODE OK"]);
      setProgress(25);
    }, 400);

    const timer2 = setTimeout(() => {
      setLogs((prev) => [...prev, "LOADING TEAMS: BLUE SQUAD (250) vs ORANGE SQUAD (250) OK"]);
      setProgress(55);
    }, 900);

    const timer3 = setTimeout(() => {
      setLogs((prev) => [...prev, "AUDIO SYNTHESIZER: WEB AUDIO CHIP DETECTED OK"]);
      setProgress(85);
    }, 1400);

    const timer4 = setTimeout(() => {
      setLogs((prev) => [...prev, "ALL SYSTEMS READY! PRESS START TO FIGHT!"]);
      setProgress(100);
    }, 2000);

    const timer5 = setTimeout(() => {
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sound.playSelect();
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#070B28] p-6 text-white overflow-hidden">
      {/* Retro Scanlines */}
      <div className="scanlines-overlay absolute inset-0 pointer-events-none opacity-40" />

      {/* Top BIOS bar */}
      <div className="w-full max-w-2xl flex items-center justify-between text-xs font-mono text-[#00D2FF] tracking-wider z-10 border-b border-[#1E2C6A] pb-2">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
          SYSTEM BOOT // GARRAFÃO DO NORTE - PA
        </span>
        <button
          onClick={handleSkip}
          className="text-[#FFE600] hover:underline font-bold px-3 py-1 bg-[#0F173D] border border-[#FFE600] active:scale-95 transition-transform"
        >
          PULAR BOOT ⏭️
        </button>
      </div>

      {/* Center Logo with Pulse */}
      <div className="my-auto flex flex-col items-center text-center z-10 max-w-md w-full px-4">
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 mb-6 drop-shadow-[0_0_35px_rgba(255,122,0,0.6)]">
          <Image
            src="/logo-gnime.png"
            alt="Logo Garranime"
            fill
            priority
            sizes="(max-width: 640px) 192px, 240px"
            className="object-contain animate-pulse"
          />
        </div>

        {/* Loading Bar (HP / Chakra Bar) */}
        <div className="w-full bg-[#0F173D] border-2 border-[#FF7A00] p-1 shonen-shadow-orange mb-3">
          <div
            className="h-4 bg-gradient-to-r from-[#FF7A00] via-[#FFE600] to-[#00D2FF] transition-all duration-300 ease-out flex items-center justify-end pr-1"
            style={{ width: `${progress}%` }}
          >
            <span className="text-[10px] font-black text-[#070B28]">{progress}%</span>
          </div>
        </div>

        {/* Console Boot Logs */}
        <div className="w-full bg-[#070B28]/90 border border-[#1E2C6A] p-3 text-left font-mono text-[11px] text-[#00D2FF] space-y-1 min-h-[90px]">
          {logs.map((log, index) => (
            <p key={index} className="truncate">
              {">"} {log}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Tip */}
      <div className="w-full max-w-2xl text-center z-10 py-2 border-t border-[#1E2C6A]">
        <p className="text-xs text-[#FFE600] font-sans">
          💡 <span className="font-bold">Dica Geek:</span> Garanta seu ingresso antecipado por R$ 10 e escolha entre Time Azul e Time Laranja!
        </p>
      </div>
    </div>
  );
}
