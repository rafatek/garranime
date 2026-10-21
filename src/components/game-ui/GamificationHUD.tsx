"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";
import { Zap, Gamepad2, Trophy, X, Sparkles } from "lucide-react";

export default function GamificationHUD() {
  const [powerLevel, setPowerLevel] = useState(8500);
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);
  const [showDpad, setShowDpad] = useState(false);
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [collectedSpheres, setCollectedSpheres] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const konamiTarget = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  // Trigger celebration
  const triggerSuperShonen = () => {
    sound.playSecret();
    setKonamiUnlocked(true);
    setPowerLevel(9999);
    setShowDpad(false);

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#FF7A00", "#FFE600", "#00D2FF", "#FFFFFF"],
    });

    setToastMessage("🔥 MODO SUPER SHONEN DESBLOQUEADO! KI ACIMA DE 9000! 🔥");
    setTimeout(() => setToastMessage(null), 5000);
  };

  // Keyboard Konami Code listener
  useEffect(() => {
    let keyIndex = 0;
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase() === "b" ? "b" : e.key.toLowerCase() === "a" ? "a" : e.key;
      if (key === konamiTarget[keyIndex]) {
        keyIndex++;
        if (keyIndex === konamiTarget.length) {
          triggerSuperShonen();
          keyIndex = 0;
        }
      } else {
        keyIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Global power level increment on interaction
  useEffect(() => {
    const handleClick = () => {
      setPowerLevel((prev) => {
        if (prev >= 9001 && !konamiUnlocked) {
          return 9001;
        }
        return prev + 15;
      });
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [konamiUnlocked]);

  // Mobile virtual D-Pad handler
  const handleVirtualPress = (key: string) => {
    sound.playHover();
    const newSeq = [...inputSequence, key];

    if (newSeq.length > konamiTarget.length) {
      newSeq.shift();
    }
    setInputSequence(newSeq);

    const matches = newSeq.every((k, idx) => k === konamiTarget[idx]);
    if (matches && newSeq.length === konamiTarget.length) {
      triggerSuperShonen();
      setInputSequence([]);
    } else if (!konamiTarget[newSeq.length - 1] || newSeq[newSeq.length - 1] !== konamiTarget[newSeq.length - 1]) {
      setInputSequence([key]);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#FFE600] text-[#070B28] px-6 py-3 font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white shonen-shadow animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Floating HUD elements (posicionado de forma discreta para não cobrir botões no mobile) */}
      <div className="fixed bottom-16 sm:bottom-20 lg:bottom-6 right-2 sm:right-6 z-30 flex flex-col items-end gap-1.5 pointer-events-auto">
        {/* Scouter Power Level Box */}
        <div className="bg-[#0F173D]/90 border border-[#00D2FF] px-2 sm:px-3 py-1 sm:py-1.5 shadow-[2px_2px_0px_#00D2FF] flex items-center gap-1.5 font-mono text-[10px] sm:text-xs backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5 text-[#FFE600] animate-pulse" />
          <span className="text-gray-300 hidden xs:inline">KI:</span>
          <span
            className={`font-black ${
              powerLevel >= 9000
                ? "text-[#FF7A00] animate-pulse font-bold"
                : "text-[#00D2FF]"
            }`}
          >
            {powerLevel >= 9001 ? "OVER 9000!" : powerLevel}
          </span>
        </div>

        {/* Mobile Virtual D-Pad Launcher */}
        <button
          onClick={() => {
            sound.playSelect();
            setShowDpad(!showDpad);
          }}
          className="group relative p-0.5 active:scale-95 transition-transform"
          title="Ativar D-Pad para Código Secreto"
        >
          <span className="relative z-10 flex items-center gap-1 bg-[#0A1138] border border-[#FF7A00] px-2 py-1 text-white font-mono uppercase tracking-wider text-[10px] sm:text-xs">
            <Gamepad2 className="w-3.5 h-3.5 text-[#FFE600]" />
            <span className="hidden sm:inline">CÓDIGO SECRETO</span>
          </span>
        </button>
      </div>

      {/* Mobile Virtual D-Pad Modal */}
      {showDpad && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#0F173D] border-4 border-[#FF7A00] p-6 max-w-xs w-full text-center shonen-shadow-orange">
            <div className="flex items-center justify-between pb-3 border-b border-[#1E2C6A] mb-4">
              <span className="text-xs font-mono font-bold text-[#FFE600] uppercase">
                Arcade D-Pad (Código Konami)
              </span>
              <button
                onClick={() => setShowDpad(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-gray-300 font-mono mb-4">
              Dica: ↑ ↑ ↓ ↓ ← → ← → B A
            </p>

            {/* D-Pad Buttons */}
            <div className="flex flex-col items-center gap-2 mb-4">
              <button
                onClick={() => handleVirtualPress("ArrowUp")}
                className="w-12 h-12 bg-[#070B28] border-2 border-[#00D2FF] text-[#00D2FF] font-black text-lg active:bg-[#00D2FF] active:text-[#070B28]"
              >
                ▲
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleVirtualPress("ArrowLeft")}
                  className="w-12 h-12 bg-[#070B28] border-2 border-[#00D2FF] text-[#00D2FF] font-black text-lg active:bg-[#00D2FF] active:text-[#070B28]"
                >
                  ◀
                </button>
                <div className="w-12 h-12 bg-[#070B28] border border-[#1E2C6A]" />
                <button
                  onClick={() => handleVirtualPress("ArrowRight")}
                  className="w-12 h-12 bg-[#070B28] border-2 border-[#00D2FF] text-[#00D2FF] font-black text-lg active:bg-[#00D2FF] active:text-[#070B28]"
                >
                  ▶
                </button>
              </div>
              <button
                onClick={() => handleVirtualPress("ArrowDown")}
                className="w-12 h-12 bg-[#070B28] border-2 border-[#00D2FF] text-[#00D2FF] font-black text-lg active:bg-[#00D2FF] active:text-[#070B28]"
              >
                ▼
              </button>
            </div>

            {/* B and A Action Buttons */}
            <div className="flex items-center justify-center gap-4 pt-2 border-t border-[#1E2C6A]">
              <button
                onClick={() => handleVirtualPress("b")}
                className="w-12 h-12 rounded-full bg-[#E65100] text-white font-black text-sm border-2 border-white shonen-shadow active:scale-90"
              >
                B
              </button>
              <button
                onClick={() => handleVirtualPress("a")}
                className="w-12 h-12 rounded-full bg-[#25D366] text-[#070B28] font-black text-sm border-2 border-white shonen-shadow active:scale-90"
              >
                A
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
