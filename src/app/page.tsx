"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { EVENT_DATA } from "@/content/eventData";

// Components
import BootScreen from "@/components/game-ui/BootScreen";
import TitleScreen from "@/components/game-ui/TitleScreen";
import Header from "@/components/game-ui/Header";
import MobileDock from "@/components/game-ui/MobileDock";
import VersusSection from "@/components/game-ui/VersusSection";
import StoryTimeline from "@/components/game-ui/StoryTimeline";
import CharacterSelect from "@/components/game-ui/CharacterSelect";
import StoreTickets from "@/components/game-ui/StoreTickets";
import LojasPartners from "@/components/game-ui/LojasPartners";
import ArenaMap from "@/components/game-ui/ArenaMap";
import TutorialFAQ from "@/components/game-ui/TutorialFAQ";
import CreditsRoll from "@/components/game-ui/CreditsRoll";
import GamificationHUD from "@/components/game-ui/GamificationHUD";

// Modals
import PixModal from "@/components/game-ui/PixModal";
import CosplayModal from "@/components/game-ui/CosplayModal";
import TournamentModal from "@/components/game-ui/TournamentModal";
import OptionsModal from "@/components/game-ui/OptionsModal";
import EventHubModal, { HubView } from "@/components/game-ui/EventHubModal";
import GamerButton from "@/components/game-ui/GamerButton";

import { Sparkles, Ticket, Swords, Clock } from "lucide-react";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState("topo");
  const [scanlines, setScanlines] = useState(true);

  // Modal States
  const [pixModalOpen, setPixModalOpen] = useState(false);
  const [cosplayModalOpen, setCosplayModalOpen] = useState(false);
  const [tournamentModalOpen, setTournamentModalOpen] = useState(false);
  const [activeTournament, setActiveTournament] = useState("naruto");
  const [optionsModalOpen, setOptionsModalOpen] = useState(false);
  const [hubModalOpen, setHubModalOpen] = useState(false);
  const [hubInitialView, setHubInitialView] = useState<HubView>("menu");

  const handleOpenHub = (view: HubView = "menu") => {
    setHubInitialView(view);
    setHubModalOpen(true);
  };

  // Countdown timer for Hero
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(EVENT_DATA.targetDateISO).getTime();
    const tick = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["topo", "versus", "historia", "atracoes", "ingressos", "lojas", "arena", "manual"];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 1. Console Boot Sequence (Estilo PS2 com transição direta)
  if (!booted) {
    return (
      <BootScreen
        onComplete={() => {
          setBooted(true);
          setStarted(true);
        }}
      />
    );
  }

  // 2. Title Screen ("PRESS START" - fallback se ativado)
  if (!started) {
    return (
      <TitleScreen
        onStart={() => {
          setStarted(true);
        }}
      />
    );
  }

  // 3. Full Main Site Experience
  return (
    <div className="min-h-screen bg-[#070B28] text-white flex flex-col relative selection:bg-[#FF7A00] selection:text-[#070B28]">
      {/* Optional CRT Scanlines Layer */}
      {scanlines && (
        <div className="scanlines-overlay fixed inset-0 pointer-events-none z-30 opacity-25" />
      )}

      {/* Main Gaming Header */}
      <Header
        onOpenTickets={() => setPixModalOpen(true)}
        onOpenOptions={() => setOptionsModalOpen(true)}
        onOpenHub={handleOpenHub}
      />

      {/* HERO SECTION */}
      <section
        id="topo"
        className="relative pt-8 pb-16 sm:py-24 px-4 sm:px-6 overflow-hidden flex flex-col items-center justify-center text-center"
      >
        {/* Dynamic Backgrounds */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: "url('/assets/background-laranja-mobile.webp')" }}
        />
        <div className="speed-lines-bg absolute inset-0 pointer-events-none opacity-20" />
        <div className="manga-dots absolute inset-0 pointer-events-none opacity-15" />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0F173D] border-2 border-[#FFE600] px-3.5 py-1.5 mb-6 shonen-shadow-yellow animate-bounce">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00] animate-ping" />
            <span className="text-xs sm:text-sm font-black uppercase text-[#FFE600] tracking-widest font-mono">
              22 DE NOVEMBRO • GARRAFÃO DO NORTE - PA
            </span>
          </div>

          {/* Official Logo (Prominent with Orange Glow) */}
          <div className="relative w-72 h-44 sm:w-96 sm:h-64 lg:w-[480px] lg:h-72 mb-4 drop-shadow-[0_0_35px_rgba(255,122,0,0.7)] transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo-gnime.png"
              alt="Logo Garranime 2026"
              fill
              priority
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 480px"
              className="object-contain"
            />
          </div>

          <h1 className="text-xl sm:text-3xl font-black uppercase tracking-wider text-white max-w-2xl font-sans drop-shadow-md mb-2">
            O PRIMEIRO EVENTO GEEK DA CIDADE DE GARRAFÃO DO NORTE
          </h1>

          <p className="text-xs sm:text-base text-gray-300 max-w-xl mb-8 leading-relaxed">
            Prepare seu Cosplay e sua energia para as competições, gincanas e muito mais que teremos no evento. Aqui você ficará por dentro de tudo o que vai acontecer no evento e detalhes, garanta seu ingresso, te esperamos lá!
          </p>

          {/* Dual CTAs (Using reference design matching Image 2) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-10 pt-2">
            <div className="w-full sm:w-auto max-w-sm">
              <GamerButton
                size="lg"
                fullWidth
                showPacman
                ghost="orange"
                onClick={() => {
                  sound.playCoin();
                  setPixModalOpen(true);
                }}
                icon={<Ticket className="w-5 h-5 fill-current" />}
              >
                GARANTIR PULSEIRA ANTECIPADA
              </GamerButton>
            </div>

            <div className="w-full sm:w-auto max-w-sm">
              <GamerButton
                size="lg"
                fullWidth
                onClick={() => {
                  sound.playSelect();
                  handleOpenHub("menu");
                }}
                icon={<Sparkles className="w-5 h-5" />}
              >
                CENTRAL DO EVENTO
              </GamerButton>
            </div>
          </div>

            {/* Live Flip Countdown Bar */}
            <div className="w-full max-w-md bg-[#0F173D]/90 border-2 border-[#FF7A00] p-4 shonen-shadow">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-300 mb-2">
                <span className="flex items-center gap-1.5 text-[#FFE600]">
                  <Clock className="w-4 h-4" /> CONTAGEM OFICIAL:
                </span>
                <span className="text-[#00D2FF]">22/NOV/2026</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-[#070B28] p-2 border border-[#1E2C6A]">
                  <span className="block text-2xl sm:text-3xl font-black text-[#FF7A00] font-mono">
                    {String(countdown.days).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-gray-400">Dias</span>
                </div>
                <div className="bg-[#070B28] p-2 border border-[#1E2C6A]">
                  <span className="block text-2xl sm:text-3xl font-black text-[#00D2FF] font-mono">
                    {String(countdown.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-gray-400">Horas</span>
                </div>
                <div className="bg-[#070B28] p-2 border border-[#1E2C6A]">
                  <span className="block text-2xl sm:text-3xl font-black text-[#FFE600] font-mono">
                    {String(countdown.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-gray-400">Min</span>
                </div>
                <div className="bg-[#070B28] p-2 border border-[#1E2C6A]">
                  <span className="block text-2xl sm:text-3xl font-black text-white font-mono">
                    {String(countdown.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-gray-400">Seg</span>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* SECTION: Central de Informações do Projeto (Exact Image 1 layout) */}
      <section
        id="central-menu"
        className="py-12 px-4 sm:px-6 relative flex flex-col items-center justify-center bg-[#070B28] border-b-4 border-[#1E2C6A]"
      >
        <div className="w-full max-w-md bg-[#070B28] border-4 border-[#FF7A00] p-6 sm:p-8 shadow-[0_0_35px_rgba(255,122,0,0.5)] flex flex-col items-center space-y-4 relative">
          <div className="text-center mb-2">
            <span className="text-[10px] font-mono font-black uppercase text-[#FFE600] tracking-widest bg-[#0A1138] px-3 py-1 border border-[#FF7A00]">
              GUIA DO PARTICIPANTE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-sans mt-2">
              INFORMAÇÕES DO GARRANIME
            </h2>
            <p className="text-xs text-gray-300 mt-1 max-w-xs">
              Toque nos botões para abrir os detalhes, editais e regras do evento:
            </p>
          </div>

          <div className="w-full max-w-xs">
            <GamerButton fullWidth size="md" onClick={() => handleOpenHub("resumo")}>
              RESUMO EVENTO
            </GamerButton>
          </div>

          <div className="w-full max-w-xs">
            <GamerButton fullWidth size="md" onClick={() => handleOpenHub("cronograma")}>
              CRONOGRAMA DO EVENTO
            </GamerButton>
          </div>

          <div className="w-full max-w-xs">
            <GamerButton fullWidth size="md" onClick={() => handleOpenHub("competicoes")}>
              COMPETIÇÕES
            </GamerButton>
          </div>

          <div className="w-full max-w-xs">
            <GamerButton fullWidth size="md" onClick={() => handleOpenHub("salas")}>
              SALAS CONFIRMADAS
            </GamerButton>
          </div>

          <div className="w-full max-w-xs">
            <GamerButton fullWidth size="md" onClick={() => handleOpenHub("lojas")}>
              LOJAS CONFIRMADAS
            </GamerButton>
          </div>

          <div className="w-full max-w-xs">
            <GamerButton fullWidth size="md" onClick={() => handleOpenHub("apoiadores")}>
              APOIADORES & PATROCÍNIO
            </GamerButton>
          </div>

          <div className="w-full max-w-xs">
            <GamerButton fullWidth size="md" onClick={() => handleOpenHub("organizacao")}>
              ORGANIZAÇÃO
            </GamerButton>
          </div>
        </div>
      </section>

      {/* SECTION: Versus (Cosplay & Torneios Gamers) */}
      <VersusSection
        onOpenCosplay={() => handleOpenHub("cosplay")}
        onOpenTournament={() => handleOpenHub("jogos")}
        onOpenDanceEdital={() => handleOpenHub("danca")}
        onOpenSwordEdital={() => handleOpenHub("espadas")}
      />

      {/* SECTION: Modo História (Cronograma do Dia) */}
      <StoryTimeline onOpenTimeline={() => handleOpenHub("cronograma")} />

      {/* SECTION: Seleção de Personagens & Salas Confirmadas */}
      <CharacterSelect onOpenSalas={() => handleOpenHub("salas")} />

      {/* SECTION: Loja & Ingressos (R$ 10 Antecipado / R$ 15 Na Hora) */}
      <StoreTickets
        onOpenPixModal={() => setPixModalOpen(true)}
      />

      {/* SECTION: Lojas Parceiras & Sorteio Instagram */}
      <LojasPartners />

      {/* SECTION: Localização & Arena */}
      <ArenaMap />

      {/* SECTION: Manual / FAQ */}
      <TutorialFAQ />

      {/* Footer & Créditos */}
      <CreditsRoll />

      {/* Handheld Mobile Navigation Dock */}
      <MobileDock
        currentSection={currentSection}
        onOpenTickets={() => setPixModalOpen(true)}
        onOpenHub={handleOpenHub}
      />

      {/* Gamification HUD (Scouter Power Level + Mobile D-Pad Konami Code) */}
      <GamificationHUD />

      {/* Modals & Drawers */}
      <EventHubModal
        isOpen={hubModalOpen}
        onClose={() => setHubModalOpen(false)}
        initialView={hubInitialView}
        onOpenPixModal={() => setPixModalOpen(true)}
      />

      <PixModal
        isOpen={pixModalOpen}
        onClose={() => setPixModalOpen(false)}
      />

      <CosplayModal
        isOpen={cosplayModalOpen}
        onClose={() => setCosplayModalOpen(false)}
      />

      <TournamentModal
        isOpen={tournamentModalOpen}
        onClose={() => setTournamentModalOpen(false)}
        defaultTournamentId={activeTournament}
      />

      <OptionsModal
        isOpen={optionsModalOpen}
        onClose={() => setOptionsModalOpen(false)}
        scanlines={scanlines}
        onToggleScanlines={() => setScanlines(!scanlines)}
      />
    </div>
  );
}
