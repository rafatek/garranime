"use client";

import { useState } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { THEMED_ROOMS } from "@/content/eventData";
import { Users, Zap, Heart, Star, Sparkles } from "lucide-react";
import GamerButton from "./GamerButton";

const GEEK_HEROES = [
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    title: "Herói de Konoha & Espírito Shonen",
    image: "/assets/personagens/naruto.webp",
    quote: "Meu jeito ninja de ser no 1º Garranime!",
    archetype: "Ninja Shonen",
    stats: {
      Chakra: 99,
      Determinação: 100,
      Apetite: 95,
      Poder: 92,
    },
  },
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    title: "Capitão do Chapéu de Palha",
    image: "/assets/personagens/luffy.webp",
    quote: "Vou ser o Rei dos Cosplayers e comer toda a praça de alimentação!",
    archetype: "Pirata dos Chapéus de Palha",
    stats: {
      Chakra: 94,
      Determinação: 100,
      Apetite: 100,
      Poder: 96,
    },
  },
  {
    id: "goku",
    name: "Son Goku",
    title: "Guerreiro Saiyajin Lendário",
    image: "/assets/personagens/goku.webp",
    quote: "Ouvi dizer que tem guerreiros fortes em Garrafão do Norte!",
    archetype: "Guerreiro Z Lendário",
    stats: {
      Chakra: 100,
      Determinação: 98,
      Apetite: 100,
      Poder: 100,
    },
  },
];

interface CharacterSelectProps {
  onOpenSalas?: () => void;
}

export default function CharacterSelect({ onOpenSalas }: CharacterSelectProps) {
  const [selectedHero, setSelectedHero] = useState(0);

  const handleHeroSelect = (index: number) => {
    sound.playSelect();
    setSelectedHero(index);
  };

  const current = GEEK_HEROES[selectedHero];

  return (
    <section id="atracoes" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0F173D] border-b-4 border-[#1E2C6A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#FFE600] px-4 py-1.5 mb-3 clip-chamfer">
            <Users className="w-4 h-4 text-[#FFE600]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#FFE600] tracking-widest font-mono">
              SALAS CONFIRMADAS & SELEÇÃO DE HEROIS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans">
            ESCOLHA SEU <span className="text-[#00D2FF]">GUERREIRO</span> & <span className="text-[#FF7A00]">ATRAÇÃO</span>
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-sm text-gray-300">
            Conheça as salas confirmadas do Garranime e veja as estatísticas dos maiores ícones dos animes!
          </p>
        </div>

        {/* Character Select Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070B28] border-4 border-[#FF7A00] p-6 sm:p-8 shonen-shadow-orange mb-12">
          {/* Hero Roster Grid (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#00D2FF] font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFE600]" /> SELECIONE SEU PERSONAGEM:
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {GEEK_HEROES.map((hero, idx) => (
                <button
                  key={hero.id}
                  onClick={() => handleHeroSelect(idx)}
                  className={`relative p-2 border-2 transition-all duration-150 flex flex-col items-center ${
                    selectedHero === idx
                      ? "bg-[#0F173D] border-[#FFE600] shonen-shadow-yellow scale-105"
                      : "bg-[#070B28] border-[#1E2C6A] hover:border-[#FF7A00] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="relative w-16 h-20 sm:w-20 sm:h-24">
                    <Image
                      src={hero.image}
                      alt={hero.name}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black uppercase text-white truncate max-w-full mt-1">
                    {hero.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Hero Stats Card */}
            <div className="bg-[#0F173D] border border-[#1E2C6A] p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-[#1E2C6A] pb-2">
                <span className="text-xs font-mono font-bold text-[#FFE600]">
                  CLASSE: {current.archetype}
                </span>
                <span className="text-[10px] font-mono bg-[#FF7A00] text-[#070B28] font-black px-2 py-0.5">
                  RANK S
                </span>
              </div>

              {Object.entries(current.stats).map(([stat, val]) => (
                <div key={stat} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-gray-300">
                    <span>{stat}</span>
                    <span className="text-[#00D2FF] font-bold">{val} / 100</span>
                  </div>
                  <div className="w-full bg-[#070B28] h-2 border border-[#1E2C6A]">
                    <div
                      className="bg-gradient-to-r from-[#FF7A00] to-[#FFE600] h-full transition-all duration-300"
                      style={{ width: `${val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Big Portrait (Right) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center text-center relative py-4">
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 drop-shadow-[0_0_35px_rgba(255,122,0,0.5)]">
              <Image
                src={current.image}
                alt={current.name}
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-contain"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-sans tracking-wide">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#00D2FF] mt-1">
                {current.title}
              </p>
              <blockquote className="mt-2 text-xs sm:text-sm italic text-gray-300 bg-[#0F173D] border-l-4 border-[#FF7A00] px-4 py-2 max-w-md">
                "{current.quote}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Themed Rooms Compact Access Box */}
        <div className="mt-8 bg-[#070B28] border-4 border-[#FF7A00] p-6 sm:p-8 max-w-lg mx-auto text-center shonen-shadow-orange">
          <div className="inline-flex items-center gap-2 bg-[#0F173D] border border-[#FFE600] px-3.5 py-1 mb-3 clip-chamfer">
            <span className="text-base">⛩️</span>
            <span className="text-xs font-black uppercase text-[#FFE600] tracking-widest font-mono">
              AMBIENTES CONFIRMADOS
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans mb-2">
            SALAS <span className="text-[#00D2FF]">CONFIRMADAS</span>
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto mb-6 leading-relaxed">
            Karaokê, Sala RPG, Sala de Jogos, Just Dance, Sala para Cosplays, Fotos e Guarda Volumes.
          </p>

          <div className="w-full max-w-xs mx-auto">
            <GamerButton
              size="md"
              fullWidth
              onClick={() => {
                sound.playConfirm();
                if (onOpenSalas) onOpenSalas();
              }}
              icon={<Sparkles className="w-4 h-4" />}
            >
              VER SALAS CONFIRMADAS
            </GamerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
