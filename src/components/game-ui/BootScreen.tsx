"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  // Animation phases: 'towers' -> 'reveal' -> 'dissolve' -> 'done'
  const [phase, setPhase] = useState<"towers" | "reveal" | "dissolve">("towers");
  const [audioStarted, setAudioStarted] = useState(false);
  const completedRef = useRef(false);

  const finishBoot = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  };

  const startAudioIfPossible = () => {
    if (!audioStarted) {
      sound.playPS2Boot();
      setAudioStarted(true);
    }
  };

  useEffect(() => {
    // Attempt automatic playback (works if browser allows or user already interacted)
    startAudioIfPossible();

    // Timeline of the PS2 boot sequence:
    // 0s to 1.8s: 3D Crystal Towers rising in the dark ocean mist
    // 1.8s: Logo reveals with bright sheen and PS2 chime
    const revealTimer = setTimeout(() => {
      setPhase("reveal");
    }, 1800);

    // 3.8s: Logo dissolves with light burst / fade
    const dissolveTimer = setTimeout(() => {
      setPhase("dissolve");
    }, 3800);

    // 4.6s: Complete and enter site!
    const finishTimer = setTimeout(() => {
      finishBoot();
    }, 4600);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(dissolveTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  const handleUserInteract = () => {
    startAudioIfPossible();
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playSelect();
    finishBoot();
  };

  // 7 Iconic PS2 Memory Monolith Towers with varied heights and positions
  const monoliths = [
    { height: "220px", left: "12%", delay: "0s", depth: "-120px" },
    { height: "340px", left: "24%", delay: "0.2s", depth: "-60px" },
    { height: "180px", left: "36%", delay: "0.1s", depth: "-180px" },
    { height: "390px", left: "48%", delay: "0.3s", depth: "-20px" },
    { height: "270px", left: "62%", delay: "0.15s", depth: "-90px" },
    { height: "320px", left: "76%", delay: "0.25s", depth: "-50px" },
    { height: "210px", left: "88%", delay: "0.05s", depth: "-140px" },
  ];

  return (
    <div
      onClick={handleUserInteract}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020412] text-white overflow-hidden cursor-pointer select-none"
    >
      {/* Deep Atmospheric Ocean Mist Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020410] via-[#050b2c] to-[#020517]" />
      
      {/* Subtle Scanlines & Vignette */}
      <div className="scanlines-overlay absolute inset-0 pointer-events-none opacity-20" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80 pointer-events-none" />

      {/* Floating Save Game Light Orbs / Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00D2FF] rounded-sm shadow-[0_0_15px_#00D2FF] animate-pulse opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-[#FF7A00] rounded-sm shadow-[0_0_15px_#FF7A00] animate-pulse opacity-80" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#FFE600] rounded-sm shadow-[0_0_12px_#FFE600] opacity-60" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00D2FF] rounded-sm shadow-[0_0_10px_#00D2FF] opacity-75" />
      </div>

      {/* 3D PS2 Crystal Towers Perspective Field */}
      <div
        className={`absolute inset-0 flex items-end justify-center pointer-events-none transition-all duration-1000 ease-out ${
          phase === "towers"
            ? "opacity-90 scale-100 translate-y-0"
            : "opacity-25 scale-125 -translate-y-12 blur-sm"
        }`}
        style={{ perspective: "1000px" }}
      >
        {/* Ground Fog Reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#00D2FF]/10 via-[#070B28]/40 to-transparent blur-md" />

        {/* Monolith Towers */}
        <div className="relative w-full max-w-5xl h-full flex items-end justify-between px-4 pb-12">
          {monoliths.map((tower, idx) => (
            <div
              key={idx}
              className="relative transition-transform duration-1000 ease-out"
              style={{
                height: tower.height,
                width: "48px",
                transform: `translateZ(${tower.depth})`,
                animationDelay: tower.delay,
              }}
            >
              {/* Glass Monolith Body with glowing cyan edge */}
              <div className="w-full h-full bg-gradient-to-t from-[#00D2FF]/30 via-[#0F173D]/60 to-[#00D2FF]/20 border-t-2 border-x border-[#00D2FF]/50 shadow-[0_0_20px_rgba(0,210,255,0.25)] rounded-t-sm backdrop-blur-xs flex flex-col justify-between p-1">
                <div className="w-full h-1 bg-[#00D2FF]/60 rounded-full" />
                <div className="w-full h-1 bg-[#FF7A00]/40 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Stage: Event Logo with PS2 Reveal & Dissolve */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-lg w-full px-6">
        {/* Logo Container */}
        <div
          className={`relative w-72 h-44 sm:w-96 sm:h-60 transition-all duration-700 ease-out ${
            phase === "towers"
              ? "opacity-0 scale-75 blur-md"
              : phase === "reveal"
              ? "opacity-100 scale-100 blur-0 drop-shadow-[0_0_50px_rgba(255,122,0,0.8)]"
              : "opacity-0 scale-125 blur-lg brightness-200"
          }`}
        >
          <Image
            src="/logo-gnime.png"
            alt="Garranime 2026"
            fill
            priority
            sizes="(max-width: 640px) 288px, 384px"
            className="object-contain"
          />

          {/* Shimmer Light Beam Effect across Logo */}
          {phase === "reveal" && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shimmer pointer-events-none" />
          )}
        </div>

        {/* Subtitle with PS2 font vibe */}
        <div
          className={`mt-4 transition-all duration-500 ease-out ${
            phase === "reveal" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-[#00D2FF] text-center drop-shadow-[0_0_10px_#00D2FF]">
            1º EVENTO GEEK • GARRAFÃO DO NORTE
          </p>
        </div>
      </div>

      {/* Top Controls / Skip Button */}
      <div className="absolute top-6 right-6 z-30">
        <button
          onClick={handleSkip}
          className="text-xs font-mono font-bold text-gray-400 hover:text-[#FFE600] px-3 py-1.5 bg-[#0F173D]/80 border border-[#1E2C6A] hover:border-[#FFE600] transition-colors"
        >
          PULAR ⏭️
        </button>
      </div>

      {/* Audio hint if not yet interacted */}
      {!audioStarted && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <p className="text-[11px] font-mono text-[#FFE600]/80 tracking-wider animate-pulse">
            🔊 TOQUE NA TELA PARA ATIVAR O SOM DO PS2
          </p>
        </div>
      )}
    </div>
  );
}
