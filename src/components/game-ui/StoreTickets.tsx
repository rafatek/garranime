"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { TICKET_PLANS, EVENT_DATA } from "@/content/eventData";
import { Ticket, CheckCircle2, Shield, QrCode, Copy, Check, ExternalLink } from "lucide-react";

interface StoreTicketsProps {
  onOpenPixModal: (planId?: string) => void;
}

export default function StoreTickets({ onOpenPixModal }: StoreTicketsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyPix = () => {
    sound.playConfirm();
    navigator.clipboard.writeText(EVENT_DATA.pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="ingressos" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#070B28] relative overflow-hidden">
      {/* Background Halftone */}
      <div className="absolute inset-0 opacity-15 pointer-events-none manga-dots" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0F173D] border border-[#FF7A00] px-4 py-1.5 mb-3 clip-chamfer">
            <Ticket className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#FF7A00] tracking-widest font-mono">
              LOJA DE INGRESSOS & PULSEIRAS OFICIAIS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans">
            GARANTA SEU <span className="text-[#FFE600]">INGRESSO</span> <span className="text-[#00D2FF]">ANTECIPADO</span>
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-sm text-gray-300">
            Apenas 500 pulseiras disponíveis! Compre antecipado por R$ 10,00 e garanta seu acesso a todas as atrações, torneios e sorteios.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {TICKET_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between p-6 sm:p-8 border-4 transition-all ${
                plan.featured
                  ? "bg-[#0F173D] border-[#FF7A00] shonen-shadow-orange scale-[1.02]"
                  : "bg-[#0F173D]/80 border-[#1E2C6A] hover:border-[#00D2FF]"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-black uppercase px-3 py-1 font-mono"
                  style={{
                    backgroundColor: plan.badgeColor,
                    color: "#070B28",
                  }}
                >
                  {plan.badge}
                </span>

                {plan.featured && (
                  <span className="text-xs font-mono font-bold text-[#FFE600] animate-pulse">
                    ⚡ VAGAS LIMITADAS
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-black uppercase text-white font-sans mb-1">
                  {plan.title}
                </h3>
                <p className="text-xs text-gray-300 mb-6">{plan.tagline}</p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 bg-[#070B28] p-4 border border-[#1E2C6A]">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                    {plan.priceFormatted}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">/ pulseira</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-gray-200">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  sound.playCoin();
                  onOpenPixModal(plan.id);
                }}
                className={`w-full py-4 font-black text-sm sm:text-base uppercase tracking-wider border-2 border-white shonen-shadow active:scale-95 transition-all flex items-center justify-center gap-2 ${
                  plan.featured
                    ? "bg-[#FF7A00] hover:bg-[#FFE600] text-[#070B28]"
                    : "bg-[#00D2FF] hover:bg-white text-[#070B28]"
                }`}
              >
                <Ticket className="w-5 h-5 fill-current" />
                <span>{plan.ctaText}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Fast Pix Instructions Box */}
        <div className="max-w-4xl mx-auto bg-[#0F173D] border-2 border-[#FFE600] p-6 sm:p-8 shonen-shadow-yellow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-[#FFE600] text-[#070B28] text-xs font-black uppercase px-2.5 py-1">
                PAGAMENTO INSTANTÂNEO PIX
              </span>
              <h4 className="text-xl sm:text-2xl font-black uppercase text-white font-sans">
                Como pagar e retirar sua pulseira:
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                1. Transfira o valor pelo Pix. <br />
                2. Envie o comprovante via WhatsApp para confirmação do pagamento. <br />
                3. Receba a confirmação e número da sua pulseira para retirada rápida na entrada do evento!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleCopyPix}
                className="px-5 py-3 bg-[#070B28] hover:bg-gray-900 border border-[#FFE600] text-[#FFE600] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Chave Copiada!" : "Copiar Chave Pix"}</span>
              </button>

              <button
                onClick={() => onOpenPixModal()}
                className="px-6 py-3 bg-[#FF7A00] hover:bg-[#FFE600] text-[#070B28] font-black text-xs uppercase tracking-wider border border-white shonen-shadow flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <QrCode className="w-4 h-4" />
                <span>Abrir Checkout Pix</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
