"use client";

import { CONFIRMED_STORES, EVENT_DATA } from "@/content/eventData";
import { Store, Gift, CheckCircle2, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
import GamerButton from "./GamerButton";
import { sound } from "@/lib/sound";

export default function LojasPartners() {
  // Duplicando a lista (2 sets completos) para loop contínuo e perfeitamente fluido de 0% a -50%
  const loopedStores = [...CONFIRMED_STORES, ...CONFIRMED_STORES];

  const handleWhatsAppStore = () => {
    sound.playConfirm();
    const text = encodeURIComponent(
      "Olá, equipe Garranime! Tenho interesse em expor e levar minha loja/marca para o evento. Como funciona o estande de parceiro?"
    );
    window.open(`https://wa.me/${EVENT_DATA.whatsappContact}?text=${text}`, "_blank");
  };

  return (
    <section id="lojas" className="py-10 sm:py-16 bg-[#0F173D] border-y-4 border-[#1E2C6A] relative overflow-hidden">
      {/* Background Halftone Sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none manga-dots-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Compacto */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-[#070B28] border border-[#00D2FF] px-3.5 py-1 mb-2.5 clip-chamfer">
            <Store className="w-4 h-4 text-[#00D2FF]" />
            <span className="text-xs font-black uppercase text-[#00D2FF] tracking-widest font-mono">
              ESTANDES & FEIRA GEEK
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-sans">
            LOJAS & PARCEIROS <span className="text-[#FF7A00]">CONFIRMADOS</span>
          </h2>
          <p className="max-w-xl mx-auto mt-1.5 text-xs sm:text-sm text-gray-300">
            Conheça as marcas que estarão com estandes repletos de produtos, colecionáveis e novidades:
          </p>
        </div>

        {/* ======================================================== */}
        {/* CARROSSEL LATERAL INFINITO COM FADE GRADIENT NAS BORDAS   */}
        {/* ======================================================== */}
        <div className="relative w-full overflow-hidden py-3">
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
          <div className="flex gap-4 sm:gap-6 animate-marquee-loop items-stretch">
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
        {/* ÁREA INFERIOR COMPACTA: CTA WHATSAPP & SORTEIO INSTAGRAM */}
        {/* ======================================================== */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <GamerButton
            size="md"
            onClick={handleWhatsAppStore}
            icon={<Store className="w-5 h-5" />}
          >
            Quero Levar Minha Loja (WhatsApp)
          </GamerButton>

          <a
            href={`https://instagram.com/${EVENT_DATA.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#070B28] border border-[#1E2C6A] hover:border-[#FFE600] text-gray-200 hover:text-white font-mono text-xs uppercase transition-all"
          >
            <Gift className="w-4 h-4 text-[#FFE600]" />
            <span>Sorteio de Ingressos no <strong>{EVENT_DATA.instagram}</strong></span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
