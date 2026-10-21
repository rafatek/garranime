"use client";

import { CONFIRMED_STORES, CONFIRMED_SPONSORS, EVENT_DATA } from "@/content/eventData";
import { Store, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export default function LojasPartners() {
  // Duplicando a lista (2 sets completos) para loop contínuo e perfeitamente fluido de 0% a -50%
  const loopedStores = [...CONFIRMED_STORES, ...CONFIRMED_STORES];

  return (
    <section id="lojas" className="py-10 sm:py-16 bg-[#0F173D] border-y-4 border-[#1E2C6A] relative overflow-hidden">
      {/* Background Halftone Sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none manga-dots-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ======================================================== */}
        {/* HEADER: LOJAS CONFIRMADAS                                */}
        {/* ======================================================== */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#00D2FF] px-3.5 py-1 mb-2.5 clip-chamfer">
            <Store className="w-4 h-4 text-[#00D2FF]" />
            <span className="text-xs font-black uppercase text-[#00D2FF] tracking-widest font-mono">
              ESTANDES & FEIRA GEEK
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-sans">
            LOJAS <span className="text-[#FF7A00]">CONFIRMADAS</span>
          </h2>
          <p className="max-w-xl mx-auto mt-1.5 text-xs sm:text-sm text-gray-300">
            Conheça as marcas que estarão com estandes repletos de produtos, colecionáveis e novidades:
          </p>
        </div>

        {/* ======================================================== */}
        {/* CARROSSEL LATERAL INFINITO COM FADE GRADIENT NAS BORDAS   */}
        {/* ======================================================== */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Estilos diretos de animação para garantir execução a 60fps no iOS, Android e Desktop */}
          <style>{`
            @keyframes marqueeInfiniteLoop {
              0% {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
              }
              100% {
                -webkit-transform: translate3d(-50%, 0, 0);
                transform: translate3d(-50%, 0, 0);
              }
            }
            @-webkit-keyframes marqueeInfiniteLoop {
              0% {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
              }
              100% {
                -webkit-transform: translate3d(-50%, 0, 0);
                transform: translate3d(-50%, 0, 0);
              }
            }
            .track-marquee-running {
              display: flex !important;
              width: max-content !important;
              -webkit-animation: marqueeInfiniteLoop 22s linear infinite !important;
              animation: marqueeInfiniteLoop 22s linear infinite !important;
              will-change: transform;
            }
            @media (hover: hover) and (pointer: fine) {
              .track-marquee-running:hover {
                -webkit-animation-play-state: paused !important;
                animation-play-state: paused !important;
              }
            }
          `}</style>

          {/* Efeito de Fade Esquerda (Desaparecer suavemente na borda) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#0F173D] via-[#0F173D]/80 to-transparent z-20"
          />

          {/* Efeito de Fade Direita (Desaparecer suavemente na borda) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#0F173D] via-[#0F173D]/80 to-transparent z-20"
          />

          {/* Trilha do Carrossel em Movimento Loop */}
          <div className="flex gap-4 sm:gap-6 track-marquee-running items-stretch">
            {loopedStores.map((store, i) => (
              <div
                key={i}
                className="w-[270px] sm:w-[320px] shrink-0 bg-[#070B28] border-2 border-[#1E2C6A] hover:border-[#FF7A00] p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-[4px_4px_0px_#070B28] group"
              >
                <div>
                  {/* Top: Avatar Inicial + Nome da Loja + Categoria */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-mono font-black text-xs text-white shrink-0 shadow-md border border-white/20"
                      style={{ backgroundColor: store.color || "#FF7A00" }}
                    >
                      {store.initials || store.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm sm:text-base font-black uppercase text-white font-sans group-hover:text-[#FF7A00] transition-colors truncate">
                        {store.name}
                      </h4>
                      <span className="text-[11px] font-mono text-[#00D2FF] block truncate">
                        {store.type}
                      </span>
                    </div>
                  </div>

                  {/* Descrição Compacta e Objetiva */}
                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                    {store.desc}
                  </p>
                </div>

                {/* Footer do Card */}
                <div className="pt-3 mt-3 border-t border-[#1E2C6A] flex items-center justify-between text-[10px] font-mono">
                  <span className="bg-[#FFE600] text-[#070B28] font-black px-2 py-0.5 uppercase tracking-wider">
                    {store.badge}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Estande VIP
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SEÇÃO: PATROCINADORES OFICIAIS (LOGO GRANDE)             */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-16 pt-10 border-t-2 border-[#1E2C6A]/70">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#FFE600] px-3.5 py-1 mb-2.5 clip-chamfer">
              <Sparkles className="w-4 h-4 text-[#FFE600]" />
              <span className="text-xs font-black uppercase text-[#FFE600] tracking-widest font-mono">
                APOIO & INCENTIVO
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
              PATROCINADORES <span className="text-[#00D2FF]">OFICIAIS</span>
            </h3>
            <p className="max-w-xl mx-auto mt-1.5 text-xs sm:text-sm text-gray-300">
              Marcas e apoiadores que fortalecem a cultura jovem e geek em Garrafão do Norte:
            </p>
          </div>

          {/* Grid de Patrocinadores com Destaque para Logos Grandes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {CONFIRMED_SPONSORS.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-[#070B28] border-2 border-[#1E2C6A] hover:border-[#00D2FF] p-4 sm:p-5 flex flex-col items-center justify-between transition-all duration-200 hover:-translate-y-1 shadow-[4px_4px_0px_#070B28] group text-center"
              >
                {/* Header do Card com Cota e Badge */}
                <div className="w-full flex items-center justify-between mb-3 text-[10px] font-mono">
                  <span className="text-gray-400 uppercase tracking-wider">{sponsor.tier}</span>
                  <span
                    className="px-1.5 py-0.5 font-bold uppercase text-[9px]"
                    style={{ backgroundColor: `${sponsor.color}20`, color: sponsor.color, border: `1px solid ${sponsor.color}50` }}
                  >
                    {sponsor.badge}
                  </span>
                </div>

                {/* Área da Logo Grande */}
                <div className="w-full h-24 sm:h-28 rounded-lg bg-[#0F173D] border border-[#1E2C6A] flex flex-col items-center justify-center p-3 my-1.5 group-hover:border-[#00D2FF]/60 transition-colors">
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-mono font-black text-sm text-white shadow-md border border-white/20"
                        style={{ backgroundColor: sponsor.color }}
                      >
                        {sponsor.initials}
                      </div>
                      <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                        LOGO OFICIAL
                      </span>
                    </div>
                  )}
                </div>

                {/* Nome & Detalhe */}
                <div className="w-full mt-2">
                  <h4 className="text-xs sm:text-sm font-black uppercase text-white font-sans group-hover:text-[#00D2FF] transition-colors truncate">
                    {sponsor.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-mono mt-0.5 line-clamp-1">
                    {sponsor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
