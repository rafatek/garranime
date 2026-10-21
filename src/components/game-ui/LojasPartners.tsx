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

          {/* Grid de Patrocinadores com Destaque para Cards Quadrados e Logos Grandes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
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
 * Card Quadrado com Destaque Neon Laranja e Foco 100% na Logo Oficial
 */
/**
 * Card Quadrado com Destaque Neon Personalizado (Cor da Marca) e Foco 100% na Logo Oficial
 */
function SponsorCard({ sponsor }: { sponsor: (typeof CONFIRMED_SPONSORS)[0] }) {
  const [imgError, setImgError] = useState(false);
  const accentColor = sponsor.color || "#FF7A00";

  return (
    <div
      className="relative group bg-[#070B28] rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-between aspect-square transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
      style={{
        border: `2px solid ${accentColor}`,
        boxShadow: `0 0 20px ${accentColor}40`,
      }}
    >
      {/* Glow de Fundo Sutil no Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${accentColor}25 0%, transparent 70%)`,
        }}
      />

      {/* Cantos Tecnológicos Estilo Gamer */}
      <div
        className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 pointer-events-none"
        style={{ borderColor: accentColor }}
      />
      <div
        className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 pointer-events-none"
        style={{ borderColor: accentColor }}
      />
      <div
        className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 pointer-events-none"
        style={{ borderColor: accentColor }}
      />
      <div
        className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 pointer-events-none"
        style={{ borderColor: accentColor }}
      />

      {/* Topo do Card: Cota / Tag */}
      <div
        className="w-full flex items-center justify-between text-[10px] font-mono z-10 pb-1.5 border-b"
        style={{ borderColor: `${accentColor}30` }}
      >
        <span
          className="font-black uppercase tracking-wider text-[9px] sm:text-[11px] truncate"
          style={{ color: accentColor }}
        >
          {sponsor.tier}
        </span>
        <span
          className="px-1.5 py-0.5 font-black uppercase text-[8px] sm:text-[9px] rounded font-mono tracking-wider"
          style={{
            backgroundColor: `${accentColor}25`,
            color: accentColor,
            border: `1px solid ${accentColor}60`,
          }}
        >
          {sponsor.badge}
        </span>
      </div>

      {/* Área Central: Logo Gigante em Destaque */}
      <div className="w-full flex-1 flex items-center justify-center p-1.5 my-1 z-10 overflow-hidden">
        {sponsor.logo && !imgError ? (
          <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-black/50 border border-white/10 group-hover:border-white/25 transition-all">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div
            className="w-full h-full rounded-xl bg-[#0F173D]/80 border-2 border-dashed flex flex-col items-center justify-center p-2 transition-all duration-300"
            style={{ borderColor: `${accentColor}50` }}
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-mono font-black text-lg sm:text-2xl text-white shadow-lg border border-white/20 transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 0 20px ${accentColor}70`,
              }}
            >
              {sponsor.initials}
            </div>
            <span
              className="mt-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-black"
              style={{ color: accentColor }}
            >
              LOGO OFICIAL
            </span>
          </div>
        )}
      </div>

      {/* Rodapé: Nome do Patrocinador (Limpo, sem texto corrido) */}
      <div
        className="w-full text-center z-10 pt-1.5 border-t"
        style={{ borderColor: `${accentColor}30` }}
      >
        <h4 className="text-xs sm:text-sm font-black uppercase text-white font-sans truncate group-hover:text-white transition-colors">
          {sponsor.name}
        </h4>
      </div>
    </div>
  );
}
