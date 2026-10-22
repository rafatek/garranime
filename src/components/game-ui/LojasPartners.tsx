"use client";

import { useState } from "react";
import { CONFIRMED_STORES, CONFIRMED_SPONSORS, EVENT_DATA } from "@/content/eventData";
import { Store, CheckCircle2, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

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
        {/* SEÇÃO: PATROCINADORES OFICIAIS (CARDS QUADRADOS NEON)    */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-16 pt-10 border-t-2 border-[#1E2C6A]/70">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#FF7A00] px-3.5 py-1 mb-2.5 clip-chamfer shadow-[0_0_15px_rgba(255,122,0,0.3)]">
              <Sparkles className="w-4 h-4 text-[#FF7A00]" />
              <span className="text-xs font-black uppercase text-[#FF7A00] tracking-widest font-mono">
                APOIO & INCENTIVO
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
              PATROCINADORES <span className="text-[#FF7A00] drop-shadow-[0_0_15px_rgba(255,122,0,0.6)]">OFICIAIS</span>
            </h3>
            <p className="max-w-xl mx-auto mt-1.5 text-xs sm:text-sm text-gray-300">
              Marcas e apoiadores que fortalecem a cultura jovem e geek em Garrafão do Norte:
            </p>
          </div>

          {/* Grid de Patrocinadores: Responsivo no Celular (2 colunas) e no Computador (5 colunas) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {CONFIRMED_SPONSORS.map((sponsor, idx) => (
              <SponsorCard key={idx} sponsor={sponsor} />
            ))}
          </div>

          {/* CTA para Novos Patrocinadores */}
          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/5591985119031?text=${encodeURIComponent(
                "Olá, equipe Garranime! Gostaria de ser um Apoiador / Patrocinador oficial do evento. Quais são as cotas de apoio disponíveis?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#070B28] border border-[#FF7A00]/60 hover:border-[#FF7A00] text-gray-300 hover:text-white px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,122,0,0.4)] hover:scale-105"
            >
              <HeartHandshake className="w-4 h-4 text-[#FF7A00]" />
              <span>Quer ser um Patrocinador Oficial? Fale Conosco</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Card Quadrado com FOTO PREENCHENDO 100% DO QUADRADO e NOME BEM EMBAIXO
 */
function SponsorCard({ sponsor }: { sponsor: (typeof CONFIRMED_SPONSORS)[0] }) {
  const [imgError, setImgError] = useState(false);
  const accentColor = sponsor.color || "#FF7A00";

  return (
    <div className="group flex flex-col items-center w-full">
      {/* 1. O QUADRADO PREENCHIDO 100% PELA FOTO / LOGO */}
      <div
        className="relative w-full aspect-square rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.03] bg-[#070B28]"
        style={{
          border: `2px solid ${accentColor}`,
          boxShadow: `0 0 25px ${accentColor}40`,
        }}
      >
        {/* Glow Sutil de Fundo no Hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at center, ${accentColor}25 0%, transparent 70%)`,
          }}
        />

        {/* Cantos Tecnológicos Estilo Gamer */}
        <div
          className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 pointer-events-none z-20"
          style={{ borderColor: accentColor }}
        />
        <div
          className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 pointer-events-none z-20"
          style={{ borderColor: accentColor }}
        />
        <div
          className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 pointer-events-none z-20"
          style={{ borderColor: accentColor }}
        />
        <div
          className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 pointer-events-none z-20"
          style={{ borderColor: accentColor }}
        />

        {/* Badges Flutuantes no Topo do Quadrado */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono z-20 pointer-events-none">
          <span
            className="px-2 py-0.5 font-black uppercase text-[8px] sm:text-[9px] rounded backdrop-blur-md bg-black/70 shadow"
            style={{ color: accentColor, border: `1px solid ${accentColor}50` }}
          >
            {sponsor.tier}
          </span>
          <span
            className="px-1.5 py-0.5 font-black uppercase text-[8px] sm:text-[9px] rounded backdrop-blur-md bg-black/70 shadow"
            style={{ color: accentColor, border: `1px solid ${accentColor}50` }}
          >
            {sponsor.badge}
          </span>
        </div>

        {/* Imagem que preenche 100% do quadrado */}
        {sponsor.logo && !imgError ? (
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full bg-[#0F173D] border-2 border-dashed flex flex-col items-center justify-center p-3 transition-all"
            style={{ borderColor: `${accentColor}50` }}
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-mono font-black text-xl sm:text-3xl text-white shadow-lg border border-white/20 transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 0 25px ${accentColor}80`,
              }}
            >
              {sponsor.initials}
            </div>
            <span
              className="mt-2.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-black"
              style={{ color: accentColor }}
            >
              LOGO OFICIAL
            </span>
          </div>
        )}
      </div>

      {/* 2. BEM EMBAIXO DO QUADRADO: NOME DO PATROCINADOR */}
      <div className="mt-2 text-center w-full px-1">
        <h4 className="text-xs sm:text-sm font-black uppercase text-white font-sans tracking-wide truncate group-hover:text-[#FFE600] transition-colors">
          {sponsor.name}
        </h4>
        <span
          className="text-[10px] sm:text-[11px] font-mono block mt-0.5 truncate font-bold"
          style={{ color: accentColor }}
        >
          {sponsor.tier}
        </span>
      </div>
    </div>
  );
}
