"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { FAQ_LIST } from "@/content/eventData";
import { HelpCircle, ChevronDown, BookOpen } from "lucide-react";

export default function TutorialFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    sound.playSelect();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const gamepadIcons = ["△", "O", "X", "□", "L1", "R1"];

  return (
    <section id="manual" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0F173D] border-b-4 border-[#1E2C6A] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#FFE600] px-4 py-1.5 mb-3 clip-chamfer">
            <BookOpen className="w-4 h-4 text-[#FFE600]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#FFE600] tracking-widest font-mono">
              MANUAL DE JOGO & TUTORIAL DO EVENTO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans">
            PERGUNTAS <span className="text-[#FF7A00]">FREQUENTES</span>
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Tudo o que você precisa saber para aproveitar o 1º Garranime com segurança e diversão máxima.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonSymbol = gamepadIcons[idx % gamepadIcons.length];

            return (
              <div
                key={idx}
                className="bg-[#070B28] border-2 border-[#1E2C6A] hover:border-[#FF7A00] transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded bg-[#0F173D] border border-[#00D2FF] text-[#00D2FF] font-black text-xs flex items-center justify-center shrink-0 font-mono">
                      {buttonSymbol}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-white font-sans">
                      {item.q}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-[#FF7A00] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 text-xs sm:text-sm text-gray-300 border-t border-[#1E2C6A] leading-relaxed bg-[#0F173D]/50">
                    <p className="pl-10">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
