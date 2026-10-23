"use client";

import Image from "next/image";
import { EVENT_DATA } from "@/content/eventData";
import { Heart, MessageCircle, ShieldCheck } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4 text-pink-400" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function CreditsRoll() {
  return (
    <footer className="bg-[#070B28] border-t-4 border-[#FF7A00] pt-12 pb-24 sm:pb-16 px-4 sm:px-6 relative overflow-hidden text-center text-xs font-mono text-gray-400">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Official Logo */}
        <div className="relative w-40 sm:w-48 h-14 sm:h-16 mx-auto drop-shadow-[0_0_15px_rgba(255,122,0,0.6)]">
          <Image
            src="/logo-gnime.png"
            alt="Garranime Logo"
            fill
            sizes="192px"
            className="object-contain"
          />
        </div>

        <div className="space-y-2">
          <p className="text-white font-sans font-black uppercase text-sm sm:text-base tracking-widest text-[#FFE600]">
            {EVENT_DATA.edition}
          </p>
          <p className="text-gray-300">
            22 de Novembro • Garrafão do Norte - Pará
          </p>
        </div>

        {/* Credits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left bg-[#0F173D] border border-[#1E2C6A] p-6 max-w-2xl mx-auto">
          <div>
            <h5 className="font-bold text-[#FF7A00] uppercase mb-2">Realização</h5>
            <p className="text-gray-300">Organização Garranime</p>
            <p className="text-gray-400">Comunidade Geek de Garrafão</p>
          </div>

          <div>
            <h5 className="font-bold text-[#00D2FF] uppercase mb-2">Lojas Parceiras</h5>
            <p className="text-gray-300">Bankai Studio • Pixangaa</p>
            <p className="text-gray-300">Botinha Store • Otaku's Mix</p>
            <p className="text-gray-300">Makako Cards & Games</p>
          </div>

          <div>
            <h5 className="font-bold text-[#FFE600] uppercase mb-2">Apoio Comunitário</h5>
            <p className="text-gray-300">Escola Mário Brasil</p>
            <p className="text-gray-300">Prefeitura de Garrafão do Norte</p>
            <p className="text-gray-300">José Henrique</p>
            <p className="text-gray-300">Rafael Turbo Digital</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={`https://instagram.com/${EVENT_DATA.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#0F173D] hover:bg-pink-700 text-white border border-[#1E2C6A] transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-pink-400" />
            <span>{EVENT_DATA.instagram}</span>
          </a>

          <a
            href={`https://wa.me/${EVENT_DATA.whatsappContact}?text=Olá,%20equipe%20Garranime!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#0F173D] hover:bg-green-700 text-white border border-[#1E2C6A] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span>WhatsApp: {EVENT_DATA.whatsappDisplay}</span>
          </a>

          {EVENT_DATA.whatsappContact2 && (
            <a
              href={`https://wa.me/${EVENT_DATA.whatsappContact2}?text=Olá,%20equipe%20Garranime!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#0F173D] hover:bg-green-700 text-white border border-[#1E2C6A] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>WhatsApp: {EVENT_DATA.whatsappDisplay2}</span>
            </a>
          )}
        </div>

        <p className="text-gray-500 text-[11px] pt-4 border-t border-[#1E2C6A]">
          © 2026 GARRANIME — Todos os direitos reservados. Feito com amor pela cultura geek e anime shonen.
        </p>
      </div>
    </footer>
  );
}
