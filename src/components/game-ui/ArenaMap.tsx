"use client";

import { EVENT_DATA } from "@/content/eventData";
import { MapPin, Navigation, Compass, Calendar, Clock, AlertCircle } from "lucide-react";
import GamerButton from "./GamerButton";

export default function ArenaMap() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${EVENT_DATA.venueName}, ${EVENT_DATA.city} - ${EVENT_DATA.state}`
  )}`;

  return (
    <section id="arena" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#070B28] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0F173D] border border-[#FFE600] px-4 py-1.5 mb-3 clip-chamfer">
            <MapPin className="w-4 h-4 text-[#FFE600]" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#FFE600] tracking-widest font-mono">
              MAPA DA ARENA & LOCALIZAÇÃO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans">
            COMO CHEGAR NA <span className="text-[#00D2FF]">ARENA</span> GARRANIME
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-sm text-gray-300">
            Confira as informações de endereço e trace sua rota para o 1º Evento Geek de Garrafão do Norte.
          </p>
        </div>

        {/* Map & Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F173D] border-4 border-[#00D2FF] p-6 sm:p-10 shonen-shadow-cyan">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="bg-[#00D2FF] text-[#070B28] text-xs font-black uppercase px-3 py-1 font-mono">
                PONTO DE ENCONTRO GEEK
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-sans">
                {EVENT_DATA.venueName}
              </h3>
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span>{EVENT_DATA.city} - {EVENT_DATA.state}</span>
              </p>
            </div>

            <div className="bg-[#070B28] border-l-4 border-[#FFE600] p-4 text-xs text-gray-300 space-y-1">
              <p className="font-bold text-[#FFE600] flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Observação de Localização:
              </p>
              <p>
                {EVENT_DATA.venueStatus}. Fique atento às nossas redes sociais para avisos de transportes parceiros e pontos de van.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-[#070B28] p-3 border border-[#1E2C6A]">
                <span className="text-gray-400 block mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FF7A00]" /> Data Oficial
                </span>
                <span className="text-sm font-bold text-white">22 de Novembro</span>
              </div>

              <div className="bg-[#070B28] p-3 border border-[#1E2C6A]">
                <span className="text-gray-400 block mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#00D2FF]" /> Abertura dos Portões
                </span>
                <span className="text-sm font-bold text-white">10:00 da manhã</span>
              </div>
            </div>

            <div className="w-full">
              <GamerButton
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                size="md"
                ghost="orange"
                icon={<Navigation className="w-5 h-5 fill-current" />}
              >
                Traçar Rota no Google Maps
              </GamerButton>
            </div>
          </div>

          {/* Right Stylized Arena Illustration / Map Visual */}
          <div className="lg:col-span-6 bg-[#070B28] border-2 border-[#1E2C6A] p-6 relative overflow-hidden min-h-[280px] flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-[#00D2FF]">
              <span className="flex items-center gap-1">
                <Compass className="w-4 h-4 text-[#FFE600] animate-spin" /> GPS RADAR ATIVO
              </span>
              <span>SETOR GEEK 01</span>
            </div>

            <div className="my-auto py-8 text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#0F173D] border-4 border-[#FF7A00] flex items-center justify-center shonen-shadow-orange animate-bounce">
                <MapPin className="w-10 h-10 text-[#FF7A00]" />
              </div>
              <h4 className="text-xl font-black uppercase text-white font-sans">
                GARRAFÃO DO NORTE - PARÁ
              </h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto font-mono">
                Coordenadas da Arena Geek configuradas para o maior dia do ano!
              </p>
            </div>

            <div className="pt-3 border-t border-[#1E2C6A] text-[11px] text-gray-500 font-mono text-center">
              Dica: Desembarque próximo ao centro e siga as placas do evento!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
