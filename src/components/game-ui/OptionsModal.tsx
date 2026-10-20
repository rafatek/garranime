"use client";

import { useState, useEffect } from "react";
import { sound } from "@/lib/sound";
import { X, Volume2, VolumeX, Eye, Sparkles, RefreshCw, Sliders } from "lucide-react";

interface OptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  scanlines: boolean;
  onToggleScanlines: () => void;
}

export default function OptionsModal({
  isOpen,
  onClose,
  scanlines,
  onToggleScanlines,
}: OptionsModalProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMuted(sound.isMuted());
    const savedMotion = localStorage.getItem("garranime_reduced_motion") === "true";
    setReducedMotion(savedMotion);
  }, []);

  if (!isOpen) return null;

  const handleToggleSound = () => {
    const newState = sound.toggleMute();
    setIsMuted(newState);
  };

  const handleToggleMotion = () => {
    sound.playSelect();
    const next = !reducedMotion;
    setReducedMotion(next);
    localStorage.setItem("garranime_reduced_motion", String(next));
    if (next) {
      document.documentElement.classList.add("motion-reduce");
    } else {
      document.documentElement.classList.remove("motion-reduce");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#0F173D] border-4 border-[#00D2FF] p-6 sm:p-8 shonen-shadow-cyan">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1E2C6A] mb-6">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#00D2FF]" />
            <h3 className="text-xl font-black uppercase text-white font-sans">
              Opções & Acessibilidade
            </h3>
          </div>
          <button
            onClick={() => {
              sound.playSelect();
              onClose();
            }}
            className="p-1.5 text-gray-400 hover:text-white bg-[#070B28] border border-[#1E2C6A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options List */}
        <div className="space-y-4 text-xs font-mono">
          {/* Sound FX */}
          <div className="flex items-center justify-between p-3 bg-[#070B28] border border-[#1E2C6A]">
            <div className="flex items-center gap-3">
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-gray-400" />
              ) : (
                <Volume2 className="w-5 h-5 text-[#FFE600]" />
              )}
              <div>
                <p className="font-bold text-white uppercase">Efeitos Sonoros (SFX)</p>
                <p className="text-[10px] text-gray-400">Síntese Web Audio API</p>
              </div>
            </div>
            <button
              onClick={handleToggleSound}
              className={`px-3 py-1 font-bold uppercase text-[11px] border ${
                !isMuted
                  ? "bg-[#FFE600] text-[#070B28] border-white"
                  : "bg-gray-800 text-gray-400 border-gray-600"
              }`}
            >
              {!isMuted ? "LIGADO" : "MUDO"}
            </button>
          </div>

          {/* CRT Scanlines */}
          <div className="flex items-center justify-between p-3 bg-[#070B28] border border-[#1E2C6A]">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-[#00D2FF]" />
              <div>
                <p className="font-bold text-white uppercase">Filtro CRT Scanlines</p>
                <p className="text-[10px] text-gray-400">Textura de tela retrô</p>
              </div>
            </div>
            <button
              onClick={() => {
                sound.playSelect();
                onToggleScanlines();
              }}
              className={`px-3 py-1 font-bold uppercase text-[11px] border ${
                scanlines
                  ? "bg-[#00D2FF] text-[#070B28] border-white"
                  : "bg-gray-800 text-gray-400 border-gray-600"
              }`}
            >
              {scanlines ? "ATIVO" : "DESLIGADO"}
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between p-3 bg-[#070B28] border border-[#1E2C6A]">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#FF7A00]" />
              <div>
                <p className="font-bold text-white uppercase">Reduzir Animações</p>
                <p className="text-[10px] text-gray-400">Acessibilidade / Bateria</p>
              </div>
            </div>
            <button
              onClick={handleToggleMotion}
              className={`px-3 py-1 font-bold uppercase text-[11px] border ${
                reducedMotion
                  ? "bg-[#FF7A00] text-[#070B28] border-white"
                  : "bg-gray-800 text-gray-400 border-gray-600"
              }`}
            >
              {reducedMotion ? "REDUZIDO" : "NORMAL"}
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#1E2C6A] text-[10px] font-mono text-gray-500 text-center">
          GARRANIME OS v1.0 • OTIMIZADO PARA MOBILE & DESKTOP
        </div>
      </div>
    </div>
  );
}
