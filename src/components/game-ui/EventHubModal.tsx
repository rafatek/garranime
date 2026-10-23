"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { EVENT_DATA, TOURNAMENTS, COSPLAY_DATA, CONFIRMED_STORES, THEMED_ROOMS, CONFIRMED_ROOMS, CONFIRMED_SPONSORS, TIMELINE_STAGES, STAGE_COMPETITIONS } from "@/content/eventData";
import {
  X,
  ArrowLeft,
  Calendar,
  MapPin,
  Ticket,
  Sparkles,
  Gamepad2,
  Store,
  HeartHandshake,
  Users,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Music,
  Trophy,
  Flame,
  Crown,
  Swords,
  CheckCircle2,
  DoorOpen,
  Clock,
  Laugh,
  Palette,
} from "lucide-react";
import GamerButton from "./GamerButton";

export type HubView =
  | "menu"
  | "resumo"
  | "cronograma"
  | "competicoes"
  | "cosplay"
  | "cosplay_kids"
  | "cosplay_adulto"
  | "cosplay_cospobre"
  | "danca"
  | "espadas"
  | "jogos"
  | "jogo_detalhe"
  | "salas"
  | "lojas"
  | "apoiadores"
  | "organizacao";

interface EventHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: HubView;
  onOpenPixModal: () => void;
}

export default function EventHubModal({
  isOpen,
  onClose,
  initialView = "menu",
  onOpenPixModal,
}: EventHubModalProps) {
  const [view, setView] = useState<HubView>(initialView);
  const [history, setHistory] = useState<HubView[]>([]);
  const [selectedGameId, setSelectedGameId] = useState<string>("freefire");
  const [timelineFilter, setTimelineFilter] = useState<"todos" | "manha" | "tarde" | "noite">("todos");

  // Sincroniza a visualização sempre que o modal for aberto com uma rota específica
  useEffect(() => {
    if (isOpen) {
      setView(initialView);
      setHistory([]);
    }
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  const navigateTo = (newView: HubView) => {
    sound.playSelect();
    setHistory((prev) => [...prev, view]);
    setView(newView);
  };

  const goBack = () => {
    sound.playSelect();
    if (history.length > 0) {
      const prevView = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setView(prevView);
    } else {
      setView("menu");
    }
  };

  const openWhatsApp = (customMessage: string) => {
    sound.playConfirm();
    const encoded = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${EVENT_DATA.whatsappContact}?text=${encoded}`, "_blank");
  };

  const selectedGame = TOURNAMENTS.find((t) => t.id === selectedGameId) || TOURNAMENTS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Outer Mobile Frame Container matching Image 1: Deep Navy with vibrant orange border */}
      <div className="relative w-full max-w-md bg-[#070B28] border-4 border-[#FF7A00] rounded-none shadow-[0_0_35px_rgba(255,122,0,0.5)] flex flex-col max-h-[92vh] sm:max-h-[85vh] overflow-hidden">
        
        {/* Halftone Manga Overlay */}
        <div className="absolute inset-0 manga-dots opacity-15 pointer-events-none" />

        {/* Top App Header */}
        <div className="relative z-20 flex items-center justify-between px-4 py-3 bg-[#0A1138] border-b-2 border-[#FF7A00]/60 shrink-0">
          <div className="flex items-center gap-2">
            {view !== "menu" ? (
              <button
                onClick={goBack}
                className="flex items-center gap-1 text-xs font-mono font-bold text-[#FFE600] hover:text-white uppercase transition-colors px-2 py-1 bg-[#070B28] border border-[#FF7A00]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00] animate-ping" />
                <span className="text-xs font-mono font-black uppercase text-[#FFE600] tracking-wider">
                  CENTRAL GARRANIME
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              sound.playSelect();
              onClose();
            }}
            aria-label="Fechar"
            className="p-1 text-gray-400 hover:text-white bg-[#070B28] border border-[#1E2C6A] hover:border-[#FF7A00] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="relative z-10 p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col">
          {/* ========================================================== */}
          {/* VIEW: MAIN MENU (EXATAMENTE COMO NA IMAGEM 1)              */}
          {/* ========================================================== */}
          {view === "menu" && (
            <div className="flex-1 flex flex-col items-center justify-center py-4 space-y-4 sm:space-y-5 animate-fadeIn">
              
              {/* Optional Small Brand Pill */}
              <div className="text-center mb-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00D2FF] bg-[#0A1138] px-3 py-1 border border-[#1E2C6A]">
                  22/NOV • GARRAFÃO DO NORTE
                </span>
              </div>

              {/* 1. RESUMO EVENTO */}
              <div className="w-full max-w-xs">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() => navigateTo("resumo")}
                >
                  RESUMO EVENTO
                </GamerButton>
              </div>

              {/* 2. CRONOGRAMA DO EVENTO */}
              <div className="w-full max-w-xs">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() => navigateTo("cronograma")}
                >
                  CRONOGRAMA DO EVENTO
                </GamerButton>
              </div>

              {/* 3. COMPETIÇÕES */}
              <div className="w-full max-w-xs">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() => navigateTo("competicoes")}
                >
                  COMPETIÇÕES
                </GamerButton>
              </div>

              {/* 3. SALAS CONFIRMADAS */}
              <div className="w-full max-w-xs">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() => navigateTo("salas")}
                >
                  SALAS CONFIRMADAS
                </GamerButton>
              </div>

              {/* 4. LOJAS PARCEIRAS */}
              <div className="w-full max-w-xs">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() => navigateTo("lojas")}
                >
                  LOJAS PARCEIRAS
                </GamerButton>
              </div>

              {/* 4. APOIADORES */}
              <div className="w-full max-w-xs">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() => navigateTo("apoiadores")}
                >
                  APOIADORES
                </GamerButton>
              </div>

              {/* 5. ORGANIZAÇÃO */}
              <div className="w-full max-w-xs">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() => navigateTo("organizacao")}
                >
                  ORGANIZAÇÃO
                </GamerButton>
              </div>

              {/* Sub-footer with WhatsApp shortcuts */}
              <div className="pt-4 text-center space-y-1">
                <div className="text-[11px] font-mono text-gray-300 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                  <a
                    href={`https://wa.me/${EVENT_DATA.whatsappContact}?text=Olá,%20equipe%20Garranime!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#00D2FF] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Contato 1: <strong>{EVENT_DATA.whatsappDisplay}</strong></span>
                  </a>
                  {EVENT_DATA.whatsappContact2 && (
                    <a
                      href={`https://wa.me/${EVENT_DATA.whatsappContact2}?text=Olá,%20equipe%20Garranime!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#00D2FF] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Contato 2: <strong>{EVENT_DATA.whatsappDisplay2}</strong></span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: RESUMO DO EVENTO                                     */}
          {/* ========================================================== */}
          {view === "resumo" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#FF7A00] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#FF7A00]/40">
                  GUIA OFICIAL
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  RESUMO DO EVENTO
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  1º Grande Encontro Geek de Garrafão do Norte - PA
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FF7A00] flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase">Data & Horário:</strong>
                    <span className="text-gray-300">22 de Novembro de 2026, a partir das 08h00</span>
                  </div>
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#00D2FF] flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase">Local Oficial:</strong>
                    <span className="text-gray-300">Escola Mário Brasil — Garrafão do Norte - PA</span>
                  </div>
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FFE600] flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase">Pulseiras & Ingressos:</strong>
                    <span className="text-gray-300">
                      Pulseira oficial com acesso a todas as áreas do evento.
                      <br />
                      <strong>R$ 10,00</strong> Antecipado / <strong>R$ 15,00</strong> No dia (Portaria).
                    </span>
                  </div>
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-purple-400 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase">Principais Atrações:</strong>
                    <span className="text-gray-300">
                      Concurso Cosplay (Kids e Adulto), Torneios Gamer (Free Fire, Clash Royale, Naruto),
                      Karaokê Geek, Praça de Alimentação, Lojas Parceiras e Grande Sorteio Final!
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 space-y-3">
                <GamerButton
                  fullWidth
                  size="md"
                  showPacman
                  ghost="orange"
                  onClick={() => {
                    onClose();
                    onOpenPixModal();
                  }}
                  icon={<Ticket className="w-4 h-4 fill-current" />}
                >
                  Garantir Pulseira Antecipada (R$ 10)
                </GamerButton>

                <button
                  onClick={() =>
                    openWhatsApp(
                      "Olá, equipe Garranime! Gostaria de mais informações sobre o resumo do evento."
                    )
                  }
                  className="w-full py-2.5 px-4 bg-[#0A1138] border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Dúvidas no WhatsApp ({EVENT_DATA.whatsappDisplay})</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: CRONOGRAMA OFICIAL (MODO HISTÓRIA)                   */}
          {/* ========================================================== */}
          {view === "cronograma" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#FFE600] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#FFE600]/40">
                  PROGRAMAÇÃO OFICIAL CONFIRMADA
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  CRONOGRAMA <span className="text-[#FFE600]">DO EVENTO</span>
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Escola Mário Brasil • 22 de Novembro de 2026 • Das 08h às 20h
                </p>
              </div>

              {/* Tabs de Filtro de Período */}
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                {(
                  [
                    { id: "todos", label: "Todas (19)" },
                    { id: "manha", label: "Manhã" },
                    { id: "tarde", label: "Tarde" },
                    { id: "noite", label: "Noite" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      sound.playSelect();
                      setTimelineFilter(tab.id);
                    }}
                    className={`px-2.5 py-1 text-[11px] font-mono font-bold uppercase transition-all border ${
                      timelineFilter === tab.id
                        ? "bg-[#FF7A00] text-black border-[#FF7A00]"
                        : "bg-[#0A1138] text-gray-300 border-[#1E2C6A] hover:border-[#FF7A00]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Lista dos 19 estágios com scroll suave */}
              <div className="space-y-3 max-h-[52vh] overflow-y-auto pr-1">
                {TIMELINE_STAGES.filter(
                  (s) => timelineFilter === "todos" || s.period === timelineFilter
                ).map((stage, idx) => {
                  const isBoss = stage.stage === "BOSS FINAL";
                  const isEnd = stage.stage === "THE END" || stage.stage === "VITÓRIA";
                  const isHighlighted = stage.highlight;

                  return (
                    <div
                      key={idx}
                      className={`p-3 border-l-4 border-y border-r transition-all ${
                        isBoss
                          ? "bg-[#0A1138] border-l-[#FFE600] border-[#FFE600]/40"
                          : isHighlighted
                          ? "bg-[#0A1138] border-l-[#FF7A00] border-[#FF7A00]/40"
                          : "bg-[#0A1138] border-l-[#00D2FF] border-[#1E2C6A]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 ${
                              isBoss
                                ? "bg-[#FFE600] text-[#070B28]"
                                : isEnd
                                ? "bg-[#22C55E] text-[#070B28]"
                                : isHighlighted
                                ? "bg-[#FF7A00] text-[#070B28]"
                                : "bg-[#070B28] text-[#00D2FF] border border-[#00D2FF]/40"
                            }`}
                          >
                            {stage.stage}
                          </span>
                          {stage.category && (
                            <span className="text-[9px] font-mono uppercase text-gray-400">
                              • {stage.category}
                            </span>
                          )}
                        </div>

                        <span className="flex items-center gap-1 text-xs font-mono font-bold text-[#FFE600]">
                          <Clock className="w-3.5 h-3.5" />
                          {stage.time}
                        </span>
                      </div>

                      <div className="flex items-start gap-2 mb-1">
                        <span className="text-xl shrink-0">{stage.icon}</span>
                        <h4 className="text-sm font-black uppercase text-white font-sans leading-tight">
                          {stage.title}
                        </h4>
                      </div>

                      <p className="text-xs text-gray-300 leading-relaxed font-sans">
                        {stage.desc}
                      </p>

                      <div className="mt-2 pt-1.5 border-t border-[#1E2C6A] flex items-center justify-between text-[10px] font-mono">
                        <span className="text-gray-400">Status:</span>
                        <span className={`font-bold ${isBoss ? "text-[#FFE600] animate-pulse" : "text-[#00D2FF]"}`}>
                          {stage.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() =>
                    openWhatsApp(
                      "Olá, equipe Garranime! Gostaria de tirar dúvidas sobre o cronograma oficial do evento."
                    )
                  }
                  icon={<MessageCircle className="w-5 h-5 text-[#25D366]" />}
                >
                  TIRAR DÚVIDAS NO WHATSAPP
                </GamerButton>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: COMPETIÇÕES (SELETOR DE MODALIDADES)                  */}
          {/* ========================================================== */}
          {view === "competicoes" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#00D2FF] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#00D2FF]/40">
                  MODO VERSUS
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  COMPETIÇÕES DO EVENTO
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Selecione para ver o edital, regulamento, valores e inscrições:
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* 1. Concurso de Cosplay (100% Gratuito com Pulseira) */}
                <div
                  onClick={() => navigateTo("cosplay")}
                  className="group bg-[#0A1138] border-2 border-[#FFE600] p-4 cursor-pointer hover:bg-[#0D184E] transition-all relative overflow-hidden"
                >
                  <span className="absolute top-2 right-2 text-[9px] bg-[#FFE600] text-black font-mono font-black px-1.5 py-0.5 uppercase">
                    100% GRATUITO
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#070B28] border border-[#FFE600] text-[#FFE600]">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase text-white font-sans group-hover:text-[#FFE600] transition-colors">
                        CONCURSO DE COSPLAY
                      </h4>
                      <p className="text-xs text-gray-300">
                        Cosplay Kids, Cospobre e Cosplay Tradicional (Adulto). Pré-requisito: pulseira do evento.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Competição de Dança Geek (Valores Antecipados) */}
                <div
                  onClick={() => navigateTo("danca")}
                  className="group bg-[#0A1138] border-2 border-[#EC4899] p-4 cursor-pointer hover:bg-[#0D184E] transition-all relative overflow-hidden"
                >
                  <span className="absolute top-2 right-2 text-[9px] bg-[#EC4899] text-white font-mono font-black px-1.5 py-0.5 uppercase">
                    A PARTIR DE R$ 7,00
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#070B28] border border-[#EC4899] text-[#EC4899]">
                      <Music className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase text-white font-sans group-hover:text-[#EC4899] transition-colors">
                        COMPETIÇÃO DE DANÇA GEEK
                      </h4>
                      <p className="text-xs text-gray-300">
                        Solo R$ 7 | Dupla R$ 14 | Grupos R$ 20. Confira os 11 pontos do edital oficial!
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Torneios Gamers (Inscrições Pagas) */}
                <div
                  onClick={() => navigateTo("jogos")}
                  className="group bg-[#0A1138] border-2 border-[#00D2FF] p-4 cursor-pointer hover:bg-[#0D184E] transition-all relative overflow-hidden"
                >
                  <span className="absolute top-2 right-2 text-[9px] bg-[#00D2FF] text-black font-mono font-black px-1.5 py-0.5 uppercase">
                    INSCRIÇÕES PAGAS
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#070B28] border border-[#00D2FF] text-[#00D2FF]">
                      <Gamepad2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase text-white font-sans group-hover:text-[#00D2FF] transition-colors">
                        TORNEIOS DE JOGOS (GAMES)
                      </h4>
                      <p className="text-xs text-gray-300">
                        Naruto (R$ 7) | Clash Royale (R$ 7) | Free Fire (R$ 14 por dupla). Vagas limitadas!
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Torneio de Batalha de Espadas (R$ 7,00 / Prêmio R$ 100 + Brinde) */}
                <div
                  onClick={() => navigateTo("espadas")}
                  className="group bg-[#0A1138] border-2 border-[#FF7A00] p-4 cursor-pointer hover:bg-[#0D184E] transition-all relative overflow-hidden"
                >
                  <span className="absolute top-2 right-2 text-[9px] bg-[#FF7A00] text-black font-mono font-black px-1.5 py-0.5 uppercase">
                    PRÊMIO: R$ 100 + BRINDE
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#070B28] border border-[#FF7A00] text-[#FF7A00]">
                      <Swords className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase text-white font-sans group-hover:text-[#FF7A00] transition-colors">
                        BATALHA DE ESPADAS (SOFT COMBAT)
                      </h4>
                      <p className="text-xs text-gray-300">
                        Duelos 1 vs 1 na Arena. Inscrição Antecipada: R$ 7,00. Veja as regras básicas!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: COSPLAY OVERVIEW (ESCOLHA KIDS, COSPOBRE OU ADULTO)  */}
          {/* ========================================================== */}
          {view === "cosplay" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#FFE600] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#FFE600]/40">
                  EDITAL OFICIAL
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  CONCURSO COSPLAY
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Inscrição totalmente gratuita! Escolha a categoria:
                </p>
              </div>

              {/* Banner de Regra de Acesso */}
              <div className="bg-[#0A1138] p-3.5 border-l-4 border-[#FFE600] text-xs text-gray-300 font-mono space-y-1">
                <span className="text-[#FFE600] font-black block uppercase">
                  ⭐ Regra de Acesso ao Concurso:
                </span>
                <p className="leading-relaxed">
                  O único pré-requisito é possuir a pulseira de entrada do evento. O participante deverá preencher os dados (música, apresentação, etc.) para concluir o cadastro.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="w-full">
                  <GamerButton
                    fullWidth
                    size="md"
                    ghost="pink"
                    onClick={() => navigateTo("cosplay_kids")}
                  >
                    COSPLAY KIDS (0 A 13 ANOS)
                  </GamerButton>
                </div>

                <div className="w-full">
                  <GamerButton
                    fullWidth
                    size="md"
                    ghost="orange"
                    onClick={() => navigateTo("cosplay_cospobre")}
                  >
                    COSPOBRE (CRIATIVIDADE & BAIXO CUSTO)
                  </GamerButton>
                </div>

                <div className="w-full">
                  <GamerButton
                    fullWidth
                    size="md"
                    ghost="orange"
                    onClick={() => navigateTo("cosplay_adulto")}
                  >
                    COSPLAY TRADICIONAL (ADULTO - A PARTIR DE 14 ANOS)
                  </GamerButton>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: EDITAL COSPLAY KIDS                                  */}
          {/* ========================================================== */}
          {view === "cosplay_kids" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#00D2FF] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#00D2FF]/40">
                  CATEGORIA INFANTIL • INSCRIÇÃO GRATUITA
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  COSPLAY KIDS
                </h3>
                <p className="text-xs text-gray-300">
                  Para crianças até 13 anos brilharem no palco com a família!
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#00D2FF]">
                  <strong className="text-white block uppercase">Faixa Etária & Acesso:</strong>
                  Crianças de 0 a 13 anos. Inscrição gratuita para quem possui a pulseira oficial de entrada. Feita pelos pais ou responsáveis legais.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FFE600]">
                  <strong className="text-white block uppercase">Formato da Apresentação:</strong>
                  Desfile no palco principal com apresentação do personagem, poses heróicas e muita torcida da plateia!
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FF7A00]">
                  <strong className="text-white block uppercase">Trilha de Áudio & Dados:</strong>
                  O responsável informará os dados da criança, personagem e pode enviar a trilha musical do anime/desenho preferido no WhatsApp ou pendrive.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-green-400">
                  <strong className="text-white block uppercase">Premiação:</strong>
                  Medalhas comemorativas para os pequenos heróis e brindes geek infantis!
                </div>
              </div>

              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  ghost="pink"
                  showPacman
                  onClick={() =>
                    openWhatsApp(
                      `Olá, equipe Garranime! Quero inscrever meu filho(a) no Concurso de Cosplay Kids (Inscrição Gratuita):\n\nNome da Criança:\nIdade:\nPersonagem / Anime:\nNome do Responsável:\nConfirmo que possuímos a pulseira de entrada do evento!`
                    )
                  }
                  icon={<MessageCircle className="w-5 h-5 fill-current" />}
                >
                  INSCREVER COSPLAY KIDS NO WHATSAPP
                </GamerButton>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: EDITAL COSPLAY TRADICIONAL (ADULTO)                  */}
          {/* ========================================================== */}
          {view === "cosplay_adulto" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#FF7A00] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#FF7A00]/40">
                  A PARTIR DE 14 ANOS • INSCRIÇÃO GRATUITA
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  COSPLAY TRADICIONAL (ADULTO)
                </h3>
                <p className="text-xs text-gray-300">
                  Apresentação individual ou em dupla no palco principal
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FFE600]">
                  <strong className="text-white block uppercase">Regra de Acesso:</strong>
                  Inscrição totalmente gratuita! O único pré-requisito é possuir a pulseira oficial de entrada do evento.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FF7A00]">
                  <strong className="text-white block uppercase">Critérios de Avaliação do Júri:</strong>
                  Fidelidade e acabamento do traje/adereços, interpretação, performance e presença de palco.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#00D2FF] flex items-start gap-2">
                  <Music className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase">Envio Obrigatório de Áudio:</strong>
                    É necessário o envio prévio de trilha musical de <strong>pelo menos 1 minuto</strong> via WhatsApp oficial ou entrega em pendrive no início do evento.
                  </div>
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-green-400">
                  <strong className="text-white block uppercase">Premiação Oficial:</strong>
                  Troféu oficial Garranime 2026 + Kits de brindes das Lojas Parceiras!
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-red-500">
                  <strong className="text-white block uppercase">Regras de Segurança:</strong>
                  Proibido porte de armas com lâmina de metal cortante, pontas afiadas reais ou materiais inflamáveis/pirotecnia.
                </div>
              </div>

              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  ghost="orange"
                  showPacman
                  onClick={() =>
                    openWhatsApp(
                      `Olá, equipe Garranime! Quero me inscrever no Concurso de Cosplay Tradicional (Adulto - Inscrição Gratuita):\n\nNome Completo:\nPersonagem:\nObra / Anime / Game:\nDetalhes da Apresentação:\nÁudio de apresentação preparado: Sim\n\nConfirmo que possuo a pulseira de entrada do evento!`
                    )
                  }
                  icon={<MessageCircle className="w-5 h-5 fill-current" />}
                >
                  INSCREVER COSPLAY ADULTO NO WHATSAPP
                </GamerButton>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: EDITAL COSPLAY COSPOBRE                              */}
          {/* ========================================================== */}
          {view === "cosplay_cospobre" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#FFE600] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#FFE600]/40">
                  CRIATIVIDADE & BAIXO CUSTO • INSCRIÇÃO GRATUITA
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  CONCURSO COSPOBRE
                </h3>
                <p className="text-xs text-gray-300">
                  A competição mais amistosa e divertida! Menos custo, muito mais imaginação!
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FFE600]">
                  <strong className="text-white block uppercase">O Conceito:</strong>
                  Criado para quem quer se divertir sem gastar muito! Vale usar papelão, caixas, fita crepe, baldes, vassouras, toalhas, garrafas PET e utensílios do dia a dia.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FF7A00]">
                  <strong className="text-white block uppercase">Regra de Acesso:</strong>
                  Inscrição 100% gratuita para quem possui a pulseira oficial de entrada do evento.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#00D2FF]">
                  <strong className="text-white block uppercase">Critérios de Avaliação do Júri:</strong>
                  Criatividade na gambiarra, semelhança cômica com o personagem original, carisma no palco e resposta da torcida!
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-green-400">
                  <strong className="text-white block uppercase">Premiação & Troféu:</strong>
                  Troféu especial de Mestre da Gambiarra / Campeão Cospobre Garranime 2026 + brindes geek divertidos!
                </div>
              </div>

              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  ghost="orange"
                  showPacman
                  onClick={() =>
                    openWhatsApp(
                      `Olá, equipe Garranime! Quero me inscrever no Concurso de Cospobre (Inscrição Gratuita):\n\nNome / Dupla:\nPersonagem Improvisado:\nAnime / Game de Referência:\nMateriais Utilizados (ex: papelão, fita):\n\nConfirmo que possuo a pulseira de entrada do evento!`
                    )
                  }
                  icon={<MessageCircle className="w-5 h-5 fill-current" />}
                >
                  INSCREVER COSPOBRE NO WHATSAPP
                </GamerButton>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: EDITAL OFICIAL DE DANÇA (11 PONTOS DO REGULAMENTO)   */}
          {/* ========================================================== */}
          {view === "danca" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <div className="inline-flex items-center gap-1.5 bg-[#0A1138] px-2.5 py-0.5 border border-[#EC4899]/50 mb-1">
                  <Music className="w-3.5 h-3.5 text-[#EC4899]" />
                  <span className="text-[10px] font-mono font-black uppercase text-[#EC4899] tracking-widest">
                    REGULAMENTO OFICIAL
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white font-sans">
                  COMPETIÇÃO DE DANÇA GEEK
                </h3>
                <p className="text-xs text-gray-300 mt-1 max-w-md mx-auto">
                  Normas gerais para participação no Palco Principal do Garranime 2026:
                </p>
              </div>

              {/* Tabela de Valores Antecipados Destacada */}
              <div className="bg-[#0A1138] p-3.5 border-2 border-[#EC4899] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-black uppercase text-[#EC4899]">
                    💰 TABELA DE VALORES ANTECIPADOS:
                  </span>
                  <span className="text-[9px] bg-[#EC4899] text-white px-2 py-0.5 font-mono font-bold uppercase">
                    ANTECIPADO
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-2 bg-[#070B28] border border-[#1E2C6A]">
                    <span className="text-[10px] text-gray-400 block uppercase">Solo</span>
                    <strong className="text-sm text-[#FFE600]">R$ 7,00</strong>
                  </div>
                  <div className="p-2 bg-[#070B28] border border-[#1E2C6A]">
                    <span className="text-[10px] text-gray-400 block uppercase">Dupla</span>
                    <strong className="text-sm text-[#FFE600]">R$ 14,00</strong>
                  </div>
                  <div className="p-2 bg-[#070B28] border border-[#1E2C6A]">
                    <span className="text-[10px] text-gray-400 block uppercase">Grupos (3-5)</span>
                    <strong className="text-sm text-[#FFE600]">R$ 20,00</strong>
                  </div>
                </div>
                <p className="text-[10px] text-gray-300 font-mono text-center">
                  *Grupos de 3 a 5 integrantes (Trio, Quarteto e Quinteto) pagam taxa única de R$ 20,00 no total.
                </p>
              </div>

              {/* Grid dos 11 Pontos Oficiais do Edital */}
              <div className="space-y-2.5 max-h-[44vh] overflow-y-auto pr-1">
                {[
                  { num: "01", title: "Valores & Inscrição Antecipada", desc: "Inscrições antecipadas obrigatórias: Solo R$ 7,00 | Dupla R$ 14,00 | Grupos (Trio, Quarteto e Quinteto / de 3 a 5 integrantes) R$ 20,00 no total. Informar os nomes dos dançarinos e o estilo de dança." },
                  { num: "02", title: "Número de Participantes", desc: "Apresentações individuais, em dupla ou em grupo, com no máximo 5 integrantes por apresentação." },
                  { num: "03", title: "Tempo de Apresentação", desc: "Cada apresentação terá duração máxima de 5 minutos. O tempo deverá ser rigorosamente respeitado por todos." },
                  { num: "04", title: "Músicas & Conteúdo", desc: "Envio prévio para avaliação da organização. Proibidas músicas com palavrões, conteúdo sexual explícito, mensagens ofensivas, preconceituosas ou incitação à violência." },
                  { num: "05", title: "Coreografias e Figurinos", desc: "Apresentações adequadas ao público livre de todas as idades, sem gestos obscenos. Figurinos e acessórios permitidos desde que não ofereçam riscos." },
                  { num: "06", title: "Faixa Etária & Acompanhamento", desc: "Aberta a participantes de todas as idades. Menores de 18 anos deverão estar acompanhados por responsável legal durante todo o evento, inclusive na apresentação." },
                  { num: "07", title: "Organização & Tolerância", desc: "Comparecer com antecedência. Após a chamada no palco, tolerância máxima de 10 minutos. O não comparecimento resulta em eliminação." },
                  { num: "08", title: "Avaliação do Júri", desc: "Os jurados avaliarão criatividade, ritmo, sincronia, execução dos movimentos e presença de palco." },
                  { num: "09", title: "Respeito e Fair Play", desc: "Respeito mútuo a jurados, organização e demais competidores. Não serão toleradas ofensas, discriminação ou atitudes antidesportivas." },
                  { num: "10", title: "Penalidades", desc: "O descumprimento das regras poderá resultar em advertência ou desclassificação imediata, conforme a gravidade." },
                  { num: "11", title: "Premiação & Disposições Gerais", desc: "Premiação oficial divulgada pela organização. Em caso de empate, aplicação do critério técnico de desempate. Implica na aceitação plena do regulamento." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0A1138] border border-[#1E2C6A] hover:border-[#EC4899] p-2.5 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[#EC4899] text-white font-mono font-black text-[10px] px-1.5 py-0.2 rounded">
                        {item.num}
                      </span>
                      <strong className="text-white text-xs font-sans uppercase">
                        {item.title}
                      </strong>
                    </div>
                    <p className="text-[11px] text-gray-300 font-mono leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Botão de Inscrição Oficial da Dança */}
              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  ghost="pink"
                  showPacman
                  onClick={() =>
                    openWhatsApp(
                      `Olá, equipe Garranime! Li o edital e gostaria de inscrever minha apresentação na Competição de Dança Geek (Valores Antecipados: Solo R$ 7,00 / Dupla R$ 14,00 / Grupos R$ 20,00):\n\nNome do Dançarino / Grupo:\nModalidade (Solo / Dupla / Grupo):\nEstilo da Dança:\nQuantidade de Integrantes (máx 5):\nNome do Responsável:`
                    )
                  }
                  icon={<MessageCircle className="w-5 h-5 fill-current" />}
                >
                  INSCREVER DANÇA NO WHATSAPP (A PARTIR DE R$ 7,00)
                </GamerButton>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: EDITAL BATALHA DE ESPADAS (SOFT COMBAT - NOVO)       */}
          {/* ========================================================== */}
          {view === "espadas" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <div className="inline-flex items-center gap-1.5 bg-[#0A1138] px-2.5 py-0.5 border border-[#FFE600]/50 mb-1">
                  <Swords className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span className="text-[10px] font-mono font-black uppercase text-[#FFE600] tracking-widest">
                    ARENA DE COMBATE • REGRAS BÁSICAS
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white font-sans">
                  TORNEIO DE BATALHA DE ESPADAS
                </h3>
                <p className="text-xs text-gray-300 mt-1 max-w-md mx-auto">
                  Duelos 1 vs 1 de Soft Combat com espadas de espuma acolchoada:
                </p>
              </div>

              {/* Destaque de Premiação e Taxa Antecipada */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0A1138] p-3 border-2 border-green-400 text-center">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">
                    PREMIAÇÃO DO CAMPEÃO:
                  </span>
                  <span className="text-sm sm:text-base font-black text-green-400 font-mono block mt-0.5">
                    R$ 100,00 + BRINDE
                  </span>
                </div>

                <div className="bg-[#0A1138] p-3 border-2 border-[#FFE600] text-center">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">
                    TAXA ANTECIPADA:
                  </span>
                  <span className="text-sm sm:text-base font-black text-[#FFE600] font-mono block mt-0.5">
                    R$ 7,00 INDIVIDUAL
                  </span>
                </div>
              </div>

              {/* Regras Básicas e Diretas (6 pontos) */}
              <div className="space-y-2.5 max-h-[46vh] overflow-y-auto pr-1">
                {[
                  {
                    num: "01",
                    title: "Inscrição & Taxa Antecipada",
                    desc: "Inscrição antecipada a R$ 7,00 por participante. O participante deve possuir a pulseira oficial de entrada do evento. Vagas limitadas por chaveamento.",
                  },
                  {
                    num: "02",
                    title: "Formato dos Duelos",
                    desc: "Combates individuais 1 contra 1 (1 vs 1) em chave eliminatória (mata-mata). Disputas em melhor de 3 rounds rápidos.",
                  },
                  {
                    num: "03",
                    title: "Equipamentos Fornecidos",
                    desc: "Espadas seguras acolchoadas de espuma própria para soft combat e equipamentos de proteção individual fornecidos pela organização do evento.",
                  },
                  {
                    num: "04",
                    title: "Pontuação & Golpes Válidos",
                    desc: "Toques limpos no tronco, braços e pernas contam 1 ponto. Quem somar mais pontos ou atingir o limite no round vence o confronto.",
                  },
                  {
                    num: "05",
                    title: "Golpes Proibidos & Penalidades",
                    desc: "Terminantemente proibidos golpes na cabeça, pescoço e virilha, estocadas perigosas ou agarramento corpo a corpo. Descumprimento gera advertência ou desclassificação imediata.",
                  },
                  {
                    num: "06",
                    title: "Premiação Oficial",
                    desc: "O grande vencedor da Arena de Combate recebe o troféu/título de Campeão + R$ 100,00 em dinheiro + Brinde Oficial Garranime!",
                  },
                ].map((rule, idx) => (
                  <div key={idx} className="bg-[#0A1138] border border-[#1E2C6A] hover:border-[#FFE600] p-2.5 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[#FFE600] text-[#070B28] font-mono font-black text-[10px] px-1.5 py-0.2 rounded">
                        {rule.num}
                      </span>
                      <strong className="text-white text-xs font-sans uppercase">
                        {rule.title}
                      </strong>
                    </div>
                    <p className="text-[11px] text-gray-300 font-mono leading-relaxed pl-6">
                      {rule.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Botão de Inscrição na Batalha de Espadas */}
              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  ghost="orange"
                  showPacman
                  onClick={() =>
                    openWhatsApp(
                      `Olá, equipe Garranime! Gostaria de me inscrever no Torneio de Batalha de Espadas (Taxa Antecipada: R$ 7,00):\n\nNome Completo:\nNick / Apelido:\n\nConfirmo que possuo a pulseira de entrada do evento e estou ciente da taxa antecipada de R$ 7,00 para disputar o prêmio de R$ 100,00 + brinde!`
                    )
                  }
                  icon={<MessageCircle className="w-5 h-5 fill-current" />}
                >
                  GARANTIR VAGA NA BATALHA DE ESPADAS (R$ 7,00) VIA WHATSAPP
                </GamerButton>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: JOGOS (CARTÕES ESTILIZADOS IGUAL AO BOTÃO)           */}
          {/* ========================================================== */}
          {view === "jogos" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#00D2FF] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#00D2FF]/40">
                  ARENA GAMER • INSCRIÇÕES PAGAS
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  TORNEIOS GAMERS
                </h3>
                <p className="text-xs text-gray-300">
                  Toque no jogo para conferir regulamento e garantir sua vaga:
                </p>
              </div>

              {/* Aviso Obrigatório de Inscrições Pagas */}
              <div className="p-3 bg-[#0A1138] border-l-4 border-[#00D2FF] text-[11px] font-mono text-gray-300 space-y-1">
                <span className="text-[#00D2FF] font-black uppercase block">
                  ⚠️ INSCRIÇÕES ANTECIPADAS PAGAS:
                </span>
                <p>
                  As inscrições dos torneios gamer são pagas para composição da premiação e chaves: <strong>R$ 7,00 individual</strong> (Naruto e Clash) e <strong>R$ 14,00 por dupla</strong> (Free Fire).
                </p>
              </div>

              {/* Game Cards Stack */}
              <div className="space-y-3 pt-1">
                {/* 1. Free Fire (Duplas) */}
                <div className="w-full">
                  <GamerButton
                    fullWidth
                    size="md"
                    onClick={() => {
                      setSelectedGameId("freefire");
                      navigateTo("jogo_detalhe");
                    }}
                    icon={<Flame className="w-5 h-5 text-[#FF7A00]" />}
                  >
                    FREE FIRE (R$ 14,00 POR DUPLA)
                  </GamerButton>
                </div>

                {/* 2. Clash Royale */}
                <div className="w-full">
                  <GamerButton
                    fullWidth
                    size="md"
                    onClick={() => {
                      setSelectedGameId("clash");
                      navigateTo("jogo_detalhe");
                    }}
                    icon={<Crown className="w-5 h-5 text-[#FFE600]" />}
                  >
                    CLASH ROYALE (R$ 7,00 INDIVIDUAL)
                  </GamerButton>
                </div>

                {/* 3. Naruto Shippuden */}
                <div className="w-full">
                  <GamerButton
                    fullWidth
                    size="md"
                    onClick={() => {
                      setSelectedGameId("naruto");
                      navigateTo("jogo_detalhe");
                    }}
                    icon={<Gamepad2 className="w-5 h-5 text-[#00D2FF]" />}
                  >
                    NARUTO STORM (R$ 7,00 INDIVIDUAL)
                  </GamerButton>
                </div>
              </div>

              <div className="p-3 bg-[#0A1138] border border-[#1E2C6A] text-center text-[11px] text-gray-400 font-mono">
                📋 As tabelas de chaves e listas oficiais de jogadores serão impressas e divulgadas no dia do evento!
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: DETALHE DO JOGO (POP-UP SOBRE O JOGO SELECIONADO)    */}
          {/* ========================================================== */}
          {view === "jogo_detalhe" && selectedGame && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#00D2FF] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#00D2FF]/40">
                  {selectedGame.category}
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  {selectedGame.name}
                </h3>
                <p className="text-xs text-gray-300 font-mono">
                  Plataforma: <strong className="text-[#FFE600]">{selectedGame.platform}</strong>
                </p>
              </div>

              {/* Caixa Destaque de Valor Antecipado */}
              <div className="bg-[#0A1138] p-3 border-2 border-[#FFE600] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">
                    TAXA DE INSCRIÇÃO ANTECIPADA:
                  </span>
                  <span className="text-sm font-black text-[#FFE600] font-mono">
                    {selectedGame.feeBadge || selectedGame.fee}
                  </span>
                </div>
                <span className="text-[10px] bg-[#070B28] text-white px-2 py-1 border border-[#1E2C6A] font-mono font-bold uppercase">
                  {selectedGame.isDuo ? "TORNEIO EM DUPLAS" : "INDIVIDUAL"}
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#00D2FF]">
                  <strong className="text-white block uppercase">Regulamento da Partida:</strong>
                  {selectedGame.rules}
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-green-400">
                  <strong className="text-white block uppercase">Premiação Oficial:</strong>
                  {selectedGame.reward}
                </div>

                <div className="bg-[#070B28] p-3 border border-[#1E2C6A] text-[11px]">
                  📌 <strong>Atenção:</strong> Vagas limitadas por chaveamento. A inscrição antecipada garante seu lugar na tabela oficial impressa no mural da Arena Gamer.
                </div>
              </div>

              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  ghost="blue"
                  showPacman
                  onClick={() => {
                    const message = selectedGame.isDuo
                      ? `Olá, equipe Garranime! Quero inscrever minha DUPLA no campeonato de ${selectedGame.name} (Taxa Antecipada: R$ 14,00 por dupla):\n\nNome da Dupla / Time:\nCapitão:\nNick Jogador 1:\nJogador 2:\nNick Jogador 2:\n\nEstamos cientes da taxa de R$ 14,00 e aguardamos as instruções para confirmação da vaga!`
                      : `Olá, equipe Garranime! Quero me inscrever no campeonato gamer de ${selectedGame.name} (Taxa Antecipada: R$ 7,00):\n\nNome Completo:\nNick no Jogo:\n\nEstou ciente da taxa antecipada de R$ 7,00 e aguardo as instruções para confirmação da vaga!`;
                    openWhatsApp(message);
                  }}
                  icon={<MessageCircle className="w-5 h-5 fill-current" />}
                >
                  {selectedGame.isDuo
                    ? "GARANTIR VAGA DA DUPLA (R$ 14,00) VIA WHATSAPP"
                    : "GARANTIR VAGA INDIVIDUAL (R$ 7,00) VIA WHATSAPP"}
                </GamerButton>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: LOJAS PARCEIRAS                                      */}
          {/* ========================================================== */}
          {view === "lojas" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-pink-400 tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-pink-400/40">
                  FEIRA GEEK
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  LOJAS PARCEIRAS
                </h3>
                <p className="text-xs text-gray-300">
                  Estandes confirmados com produtos e sorteios no Garranime:
                </p>
              </div>

              <div className="space-y-3 max-h-[48vh] overflow-y-auto pr-1">
                {CONFIRMED_STORES.map((store, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0A1138] p-3.5 border-l-4 border-pink-500 border-y border-r border-[#1E2C6A] flex flex-col gap-2 hover:border-[#FF7A00] transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-xs text-white shrink-0 shadow-md border overflow-hidden p-1 bg-[#070B28]"
                          style={{ borderColor: `${store.color || "#EC4899"}70` }}
                        >
                          {store.logo ? (
                            <img
                              src={store.logo}
                              alt={store.name}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div
                              className="w-full h-full rounded-lg flex items-center justify-center font-bold"
                              style={{ backgroundColor: store.color || "#EC4899" }}
                            >
                              {store.initials}
                            </div>
                          )}
                        </div>

                        <div>
                          <strong className="text-white text-sm uppercase font-sans block leading-tight">
                            {store.name}
                          </strong>
                          <span className="text-[10px] text-[#00D2FF] font-mono block mt-0.5">
                            {store.type}
                          </span>
                          {store.instagram && (
                            <a
                              href={store.instagramUrl || `https://instagram.com/${store.instagram.replace("@", "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-pink-400 font-mono hover:underline inline-block mt-0.5"
                            >
                              {store.instagram}
                            </a>
                          )}
                        </div>
                      </div>

                      <span className="text-[9px] bg-pink-500/20 text-pink-300 border border-pink-500 px-2 py-0.5 font-mono uppercase shrink-0">
                        CONFIRMADA
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-sans pl-1">
                      {store.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: APOIADORES                                           */}
          {/* ========================================================== */}
          {view === "apoiadores" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#FFE600] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#FFE600]/40">
                  PARCERIAS LOCAIS
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  APOIADORES & PATROCÍNIO
                </h3>
                <p className="text-xs text-gray-300">
                  Marcas e pessoas que tornam a cultura geek realidade na cidade!
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FFE600]">
                  <strong className="text-white block uppercase">Por que apoiar o Garranime?</strong>
                  O Garranime é o 1º evento geek de Garrafão do Norte, reunindo centenas de jovens, famílias e entusiastas de animes e games de toda a região!
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#00D2FF]">
                  <strong className="text-white block uppercase">Vantagens para Patrocinadores:</strong>
                  Divulgação da sua marca no banner oficial de entrada, menções no palco principal, publicação no Instagram oficial e distribuição de brindes da sua empresa.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FF7A00]">
                  <strong className="text-white block uppercase">Apoio Comunitário:</strong>
                  Prefeitura de Garrafão do Norte, José Henrique, Rafael Turbo Digital e Escola Mário Brasil!
                </div>
              </div>

              {/* Lista Rápida de Patrocinadores / Apoio */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-[#00D2FF] uppercase font-bold block mb-2">
                  Marcas Apoiadoras Confirmadas:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs font-mono">
                  {CONFIRMED_SPONSORS.map((s, idx) => (
                    <div key={idx} className="bg-[#0A1138] border border-[#1E2C6A] p-2">
                      <span className="text-[9px] uppercase block font-bold" style={{ color: s.color || "#FFE600" }}>
                        {s.tier}
                      </span>
                      <strong className="text-white text-xs truncate block">{s.name}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  ghost="orange"
                  onClick={() =>
                    openWhatsApp(
                      `Olá, equipe Garranime! Gostaria de ser um Apoiador / Patrocinador oficial do evento. Quais são as cotas de apoio disponíveis?`
                    )
                  }
                  icon={<HeartHandshake className="w-5 h-5" />}
                >
                  SEJA UM APOIADOR / PATROCINADOR
                </GamerButton>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: ORGANIZAÇÃO                                          */}
          {/* ========================================================== */}
          {view === "organizacao" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#00D2FF] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#00D2FF]/40">
                  QUEM FAZ ACONTECER
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  ORGANIZAÇÃO GARRANIME
                </h3>
                <p className="text-xs text-gray-300">
                  Dedicação e paixão pela comunidade geek em Garrafão do Norte
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FF7A00]">
                  <strong className="text-white block uppercase">Nossa Missão:</strong>
                  Trazer pela primeira vez para Garrafão do Norte um evento completo de anime, cosplay e eSports com estrutura, respeito e muita diversão em família.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FFE600]">
                  <strong className="text-white block uppercase mb-1">Canais Oficiais de Atendimento:</strong>
                  <ul className="mt-1 space-y-1.5 text-gray-200">
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#25D366]">📱</span>
                      <span><strong>Organizador 01:</strong> <a href={`https://wa.me/${EVENT_DATA.whatsappContact}?text=Olá,%20equipe%20Garranime!`} target="_blank" rel="noopener noreferrer" className="text-[#00D2FF] hover:underline font-bold">{EVENT_DATA.whatsappDisplay}</a></span>
                    </li>
                    {EVENT_DATA.whatsappContact2 && (
                      <li className="flex items-center gap-1.5">
                        <span className="text-[#25D366]">📱</span>
                        <span><strong>Organizador 02:</strong> <a href={`https://wa.me/${EVENT_DATA.whatsappContact2}?text=Olá,%20equipe%20Garranime!`} target="_blank" rel="noopener noreferrer" className="text-[#00D2FF] hover:underline font-bold">{EVENT_DATA.whatsappDisplay2}</a></span>
                      </li>
                    )}
                    <li className="flex items-center gap-1.5">
                      <span>📸</span>
                      <span><strong>Instagram Oficial:</strong> <a href="https://instagram.com/garranime" target="_blank" rel="noopener noreferrer" className="text-[#EC4899] hover:underline font-bold">{EVENT_DATA.instagram}</a></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span>📍</span>
                      <span><strong>Local:</strong> {EVENT_DATA.venueName} — {EVENT_DATA.city} - {EVENT_DATA.state}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-green-400">
                  <strong className="text-white block uppercase">Compromisso com Segurança:</strong>
                  Ambiente seguro, monitorado, com regras claras para todas as idades.
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <GamerButton
                  fullWidth
                  size="md"
                  showPacman
                  ghost="all"
                  onClick={() =>
                    openWhatsApp(
                      `Olá, equipe Garranime! Gostaria de falar diretamente com a organização do evento.`
                    )
                  }
                  icon={<MessageCircle className="w-5 h-5 fill-current text-[#25D366]" />}
                >
                  FALAR COM ORGANIZAÇÃO 01 ({EVENT_DATA.whatsappDisplay})
                </GamerButton>

                {EVENT_DATA.whatsappContact2 && (
                  <button
                    onClick={() => {
                      sound.playConfirm();
                      const encoded = encodeURIComponent("Olá! Gostaria de falar com a organização do Garranime.");
                      window.open(`https://wa.me/${EVENT_DATA.whatsappContact2}?text=${encoded}`, "_blank");
                    }}
                    className="w-full py-2.5 px-4 bg-[#0A1138] border-2 border-[#00D2FF] text-[#00D2FF] hover:bg-[#00D2FF] hover:text-black font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>FALAR COM ORGANIZAÇÃO 02 ({EVENT_DATA.whatsappDisplay2})</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: SALAS CONFIRMADAS                                   */}
          {/* ========================================================== */}
          {view === "salas" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#00D2FF] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#00D2FF]/40">
                  AMBIENTES CONFIRMADOS
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  SALAS CONFIRMADAS
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Ambientes climatizados, estruturados e interativos confirmados para você curtir:
                </p>
              </div>

              <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
                {CONFIRMED_ROOMS.map((room) => (
                  <div
                    key={room.id}
                    className="bg-[#0A1138] p-3.5 border-l-4 border-[#FF7A00] border-y border-r border-[#1E2C6A] space-y-2.5 transition-all hover:border-l-[#FFE600]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl shrink-0">{room.icon}</span>
                        <h4 className="text-sm font-black uppercase text-white font-sans leading-tight">
                          {room.title}
                        </h4>
                      </div>
                      <span className="text-[9px] font-mono font-black uppercase px-2 py-0.5 bg-[#FFE600] text-[#070B28] shrink-0">
                        {room.badge}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      {room.desc}
                    </p>

                    <div className="pt-2 border-t border-[#1E2C6A] grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
                      {Object.entries(room.stats).map(([label, score]) => (
                        <div key={label} className="bg-[#070B28] p-1 border border-[#1E2C6A]/60">
                          <span className="text-gray-400 block truncate">{label}</span>
                          <span className="text-[#00D2FF] font-bold">{score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() =>
                    openWhatsApp(
                      "Olá, equipe Garranime! Gostaria de mais detalhes sobre as Salas Confirmadas do evento!"
                    )
                  }
                  icon={<MessageCircle className="w-5 h-5 text-[#25D366]" />}
                >
                  TIRAR DÚVIDAS NO WHATSAPP
                </GamerButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
