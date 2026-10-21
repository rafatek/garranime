"use client";

import { CONFIRMED_STORES, EVENT_DATA } from "@/content/eventData";
import { Store, Gift, Sparkles, ExternalLink } from "lucide-react";
import GamerButton from "./GamerButton";

function InstagramIcon({ className = "w-5 h-5 text-pink-500" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function LojasPartners() {
  return (
    <section id="lojas" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0F173D] border-y-4 border-[#1E2C6A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#00D2FF] px-4 py-1.5 mb-3 clip-chamfer">
            <Store className="w-4 h-4 text-[#00D2FF]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#00D2FF] tracking-widest font-mono">
              ESTANDES & APOIADORES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans">
            LOJAS & PARCEIROS <span className="text-[#FF7A00]">CONFIRMADOS</span>
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-sm text-gray-300">
            Conheça as marcas que estarão com estandes repletos de produtos, colecionáveis e novidades no Garranime!
          </p>
        </div>

        {/* Promo Instagram Sorteio Banner */}
        <div className="bg-gradient-to-r from-[#FF7A00] via-[#E65100] to-[#070B28] border-2 border-white p-6 sm:p-8 shonen-shadow-cyan mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FFE600] text-[#070B28] text-xs font-black uppercase px-2.5 py-0.5">
              <Gift className="w-4 h-4" />
              <span>PROMOÇÃO OFICIAL NO INSTAGRAM</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-sans">
              CONCORRA A 3 ENTRADAS GRÁTIS!
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl">
              Participe do sorteio oficial no perfil <strong className="text-[#FFE600]">{EVENT_DATA.instagram}</strong>. Siga as instruções do post fixado para garantir sua chance de entrar de graça!
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <GamerButton
              href={`https://instagram.com/${EVENT_DATA.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              ghost="pink"
              icon={<InstagramIcon className="w-5 h-5 text-pink-400" />}
            >
              Participar no Instagram
            </GamerButton>
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIRMED_STORES.map((store, i) => (
            <div
              key={i}
              className="bg-[#070B28] border-2 border-[#FF7A00] p-6 shonen-shadow-orange flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#FFE600] text-[#070B28] font-mono">
                    {store.badge}
                  </span>
                  <span className="text-xs font-mono text-[#00D2FF]">
                    {store.type}
                  </span>
                </div>

                <div className="w-full aspect-video bg-[#0F173D] border border-[#1E2C6A] mb-4 flex items-center justify-center relative overflow-hidden">
                  <span className="text-2xl font-black uppercase text-[#FF7A00] font-sans tracking-wider">
                    {store.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B28] via-transparent to-transparent opacity-60" />
                </div>

                <h4 className="text-xl font-bold uppercase text-white mb-2">
                  {store.name}
                </h4>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {store.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1E2C6A] flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>Estande Oficial</span>
                <span className="text-[#FFE600] font-bold">Presença VIP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
