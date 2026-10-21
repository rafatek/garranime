"use client";

import { useState } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { EVENT_DATA, TOURNAMENTS, COSPLAY_DATA, CONFIRMED_STORES } from "@/content/eventData";
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
} from "lucide-react";
import GamerButton from "./GamerButton";

export type HubView =
  | "menu"
  | "resumo"
  | "competicoes"
  | "cosplay"
  | "cosplay_kids"
  | "cosplay_adulto"
  | "jogos"
  | "jogo_detalhe"
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

              {/* 2. COMPETIÇÕES */}
              <div className="w-full max-w-xs">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() => navigateTo("competicoes")}
                >
                  COMPETIÇÕES
                </GamerButton>
              </div>

              {/* 3. LOJAS PARCEIRAS */}
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

              {/* Sub-footer with WhatsApp shortcut */}
              <div className="pt-4 text-center">
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Olá, equipe Garranime! Gostaria de tirar algumas dúvidas sobre o evento."
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-300 hover:text-[#00D2FF] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp de Suporte: <strong>{EVENT_DATA.whatsappDisplay}</strong></span>
                </button>
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
                    <span className="text-gray-300">22 de Novembro de 2026, a partir das 10h00</span>
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
                  Selecione para ver o edital, regulamento e inscrições:
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {/* 1. Concurso de Cosplay */}
                <div
                  onClick={() => navigateTo("cosplay")}
                  className="group bg-[#0A1138] border-2 border-[#FFE600] p-4 cursor-pointer hover:bg-[#0D184E] transition-all relative overflow-hidden"
                >
                  <span className="absolute top-2 right-2 text-[9px] bg-[#FFE600] text-black font-mono font-black px-1.5 py-0.5 uppercase">
                    INSCRIÇÃO GRÁTIS
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
                        Categorias Kids e Adulto. Apresentação no palco oficial!
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Torneios Gamers */}
                <div
                  onClick={() => navigateTo("jogos")}
                  className="group bg-[#0A1138] border-2 border-[#00D2FF] p-4 cursor-pointer hover:bg-[#0D184E] transition-all relative overflow-hidden"
                >
                  <span className="absolute top-2 right-2 text-[9px] bg-[#00D2FF] text-black font-mono font-black px-1.5 py-0.5 uppercase">
                    3 JOGOS
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
                        Free Fire, Clash Royale e Naruto Shippuden Storm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: COSPLAY OVERVIEW (ESCOLHA KIDS OU ADULTO)             */}
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
                  Inscrição 100% gratuita com o seu ingresso! Escolha a categoria:
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
                    onClick={() => navigateTo("cosplay_adulto")}
                  >
                    COSPLAY ADULTO (A PARTIR DE 14 ANOS)
                  </GamerButton>
                </div>
              </div>

              <div className="bg-[#0A1138] p-3 border border-[#1E2C6A] text-xs text-gray-300 font-mono space-y-1 mt-4">
                <span className="text-[#FFE600] font-bold block uppercase">
                  ⭐ Regra Geral de Inscrição:
                </span>
                <p>
                  Para participar do concurso cosplay você só precisa ter adquirido seu ingresso oficial (pulseira) do Garranime.
                </p>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* VIEW: EDITAL COSPLAY KIDS                                  */}
          {/* ========================================================== */}
          {view === "cosplay_kids" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#FFE600] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#FFE600]/40">
                  CATEGORIA INFANTIL
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  COSPLAY KIDS
                </h3>
                <p className="text-xs text-gray-300">
                  Para crianças até 13 anos brilharem no palco com a família!
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FFE600]">
                  <strong className="text-white block uppercase">Faixa Etária:</strong>
                  Crianças de 0 a 13 anos. A inscrição deve ser realizada pelo pai, mãe ou responsável legal.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#00D2FF]">
                  <strong className="text-white block uppercase">Formato da Apresentação:</strong>
                  Desfile no palco principal com apresentação do personagem, poses heróicas e muita torcida da plateia!
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FF7A00]">
                  <strong className="text-white block uppercase">Trilha de Áudio:</strong>
                  O responsável pode enviar uma música do anime/desenho preferido no WhatsApp oficial ou levar em pendrive.
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
                      `Olá, equipe Garranime! Quero inscrever meu filho(a) no Concurso de Cosplay Kids:\n\nNome da Criança:\nIdade:\nPersonagem/Anime:\nNome do Responsável:`
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
          {/* VIEW: EDITAL COSPLAY ADULTO                                */}
          {/* ========================================================== */}
          {view === "cosplay_adulto" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#FF7A00] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#FF7A00]/40">
                  EDITAL OFICIAL ADULTO
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  COSPLAY ADULTO
                </h3>
                <p className="text-xs text-gray-300">
                  A partir de 14 anos — Apresentação individual ou em dupla
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FF7A00]">
                  <strong className="text-white block uppercase">Critérios de Avaliação do Júri:</strong>
                  Fidelidade e acabamento do traje/adereços, interpretação e presença de palco.
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FFE600] flex items-start gap-2">
                  <Music className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase">Envio Obrigatório de Áudio:</strong>
                    É necessário o envio prévio de trilha musical de <strong>pelo menos 1 minuto</strong> via WhatsApp oficial ou entrega em pendrive no início do evento.
                  </div>
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#00D2FF]">
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
                      `Olá, equipe Garranime! Quero me inscrever no Concurso de Cosplay Adulto:\n\nNome Completo:\nPersonagem:\nObra/Anime/Game:\nÁudio de apresentação preparado: Sim`
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
          {/* VIEW: JOGOS (CARTÕES ESTILIZADOS IGUAL AO BOTÃO)           */}
          {/* ========================================================== */}
          {view === "jogos" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center pb-2 border-b border-[#1E2C6A]">
                <span className="text-[10px] font-mono font-black uppercase text-[#00D2FF] tracking-widest bg-[#0A1138] px-2.5 py-0.5 border border-[#00D2FF]/40">
                  ARENA GAMER
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans mt-2">
                  TORNEIOS DISPONÍVEIS
                </h3>
                <p className="text-xs text-gray-300">
                  Toque no cartão para abrir o pop-up com as regras e edital:
                </p>
              </div>

              {/* Game Cards Stack */}
              <div className="space-y-3 pt-2">
                {/* 1. Free Fire */}
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
                    FREE FIRE (MOBILE BATTLE)
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
                    CLASH ROYALE (DUELO DE REIS)
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
                    NARUTO STORM (CONSOLE)
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

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="bg-[#0A1138] p-3 border-l-4 border-[#00D2FF]">
                  <strong className="text-white block uppercase">Regulamento da Partida:</strong>
                  {selectedGame.rules}
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FFE600]">
                  <strong className="text-white block uppercase">Taxa de Inscrição:</strong>
                  {selectedGame.fee} (Coordenação e tabela pelo WhatsApp oficial).
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-[#FF7A00]">
                  <strong className="text-white block uppercase">Premiação Oficial:</strong>
                  {selectedGame.reward}
                </div>

                <div className="bg-[#070B28] p-3 border border-[#1E2C6A] text-[11px]">
                  📌 <strong>Atenção:</strong> Vagas limitadas por chaveamento. A lista de inscritos será fixada no mural da Arena Gamer.
                </div>
              </div>

              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  ghost="blue"
                  showPacman
                  onClick={() =>
                    openWhatsApp(
                      `Olá, equipe Garranime! Quero me inscrever no campeonato gamer de ${selectedGame.name}:\n\nNick no Jogo:\nNome Completo:\nNúmero do WhatsApp:`
                    )
                  }
                  icon={<MessageCircle className="w-5 h-5 fill-current" />}
                >
                  GARANTIR VAGA NO TORNEIO VIA WHATSAPP
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

              <div className="space-y-2.5 max-h-[45vh] overflow-y-auto pr-1">
                {CONFIRMED_STORES.map((store, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0A1138] p-3 border-l-4 border-pink-500 flex items-start justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <Store className="w-4 h-4 text-pink-400 shrink-0" />
                        <strong className="text-white text-sm uppercase font-sans">
                          {store.name}
                        </strong>
                      </div>
                      <span className="text-[10px] text-pink-300 font-mono block mt-0.5">
                        {store.type}
                      </span>
                      <p className="text-xs text-gray-300 mt-1">{store.desc}</p>
                    </div>
                    <span className="text-[9px] bg-pink-500/20 text-pink-300 border border-pink-500 px-1.5 py-0.5 font-mono uppercase shrink-0">
                      CONFIRMADA
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <GamerButton
                  fullWidth
                  size="md"
                  onClick={() =>
                    openWhatsApp(
                      `Olá, equipe Garranime! Tenho uma loja/marca geek e gostaria de expor no evento. Como funciona o estande de parceiro?`
                    )
                  }
                  icon={<Store className="w-5 h-5" />}
                >
                  QUERO LEVAR MINHA LOJA (WHATSAPP)
                </GamerButton>
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
                  Incentive o lazer saudável, a tecnologia e a cultura jovem no município!
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
                  <strong className="text-white block uppercase">Canais Oficiais de Atendimento:</strong>
                  <ul className="mt-1 space-y-1 text-gray-200">
                    <li>📱 <strong>WhatsApp Oficial:</strong> {EVENT_DATA.whatsappDisplay}</li>
                    <li>📸 <strong>Instagram:</strong> {EVENT_DATA.instagram}</li>
                    <li>📍 <strong>Cidade:</strong> Garrafão do Norte - PA</li>
                  </ul>
                </div>

                <div className="bg-[#0A1138] p-3 border-l-4 border-green-400">
                  <strong className="text-white block uppercase">Compromisso com Segurança:</strong>
                  Ambiente seguro, monitorado, com regras claras para todas as idades.
                </div>
              </div>

              <div className="pt-2">
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
                  icon={<MessageCircle className="w-5 h-5 fill-current" />}
                >
                  FALAR COM A ORGANIZAÇÃO NO WHATSAPP
                </GamerButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
