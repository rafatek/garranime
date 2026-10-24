"use client";

import { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";
import { VoteCounts } from "@/lib/voteStorage";
import { X, Sparkles, CheckCircle2, AlertCircle, Coffee, Trophy, Swords } from "lucide-react";
import GamerButton from "./GamerButton";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface CharacterVoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  hero: {
    id: string;
    name: string;
    title: string;
    image: string;
    archetype: string;
  };
  onVoteSuccess: (updatedVotes: VoteCounts, heroId: string, handle: string) => void;
}

export default function CharacterVoteModal({
  isOpen,
  onClose,
  hero,
  onVoteSuccess,
}: CharacterVoteModalProps) {
  const [handle, setHandle] = useState("");
  const [followedInstagram, setFollowedInstagram] = useState(false);
  const [acceptedRule, setAcceptedRule] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successData, setSuccessData] = useState<{ handle: string } | null>(null);

  if (!isOpen) return null;

  const handleOpenInstagram = () => {
    sound.playSelect();
    setFollowedInstagram(true);
    window.open("https://www.instagram.com/garranime/", "_blank");
  };

  const handleVoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const clean = handle.trim().replace(/^@/, "").toLowerCase();
    if (!clean || clean.length < 2) {
      setErrorMsg("Por favor, digite o seu @ de usuário do Instagram.");
      return;
    }

    if (!acceptedRule) {
      setErrorMsg("Você deve confirmar que segue o perfil @garranime para validar o voto.");
      return;
    }

    try {
      setLoading(true);
      sound.playSelect();

      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ heroId: hero.id, instagramHandle: clean }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Erro ao computar voto. Tente novamente.");
        sound.playSelect();
        return;
      }

      // Sucesso!
      sound.playCoin();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FF7A00", "#FFE600", "#00D2FF", "#EC4899", "#22C55E"],
      });

      // Salva no localStorage para reconhecer o usuário no navegador
      try {
        localStorage.setItem(
          "garranime_user_vote",
          JSON.stringify({
            heroId: hero.id,
            handle: clean,
            votedAt: new Date().toISOString(),
          })
        );
      } catch (err) {
        console.warn("LocalStorage indisponível:", err);
      }

      setSuccessData({ handle: clean });
      if (data.votes) {
        onVoteSuccess(data.votes, hero.id, clean);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Falha na conexão com o servidor. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full sm:max-w-lg bg-[#070B28] border-t-4 sm:border-4 border-[#FF7A00] p-6 sm:p-7 shonen-shadow-orange rounded-t-2xl sm:rounded-none max-h-[92vh] overflow-y-auto relative">
        {/* Halftone texture */}
        <div className="absolute inset-0 manga-dots opacity-10 pointer-events-none" />

        {/* Modal Header */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b-2 border-[#FF7A00]/50 mb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#FFE600]" />
            <h3 className="text-lg sm:text-xl font-black uppercase text-white font-sans tracking-wide">
              Votação da Arena Geek
            </h3>
          </div>
          <button
            onClick={() => {
              sound.playSelect();
              onClose();
            }}
            aria-label="Fechar"
            className="p-1 text-gray-400 hover:text-white bg-[#0A1138] border border-[#1E2C6A] hover:border-[#FF7A00]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Aviso Destacado de Prazo da Votação */}
        <div className="relative z-10 mb-3 px-3 py-2 bg-red-950/60 border border-red-500/80 flex items-center justify-between gap-2 text-xs font-mono text-red-200">
          <span className="flex items-center gap-1.5 font-bold">
            ⏰ <strong>PRAZO:</strong> Votação encerra dia 18 de Novembro!
          </span>
          <span className="text-[10px] text-gray-300 hidden sm:inline">
            Resultado no palco (22/Nov)
          </span>
        </div>

        {/* ========================================================== */}
        {/* TELA DE SUCESSO                                            */}
        {/* ========================================================== */}
        {successData ? (
          <div className="relative z-10 space-y-4 text-center py-4 animate-fadeIn">
            <div className="w-16 h-16 mx-auto bg-green-500/20 border-2 border-green-400 rounded-full flex items-center justify-center text-green-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#FFE600] bg-[#0A1138] px-2.5 py-0.5 border border-[#FFE600]/40">
                VOTO REGISTRADO COM SUCESSO!
              </span>
              <h4 className="text-2xl font-black uppercase text-white font-sans mt-2">
                Você escolheu {hero.name}!
              </h4>
              <p className="text-xs text-gray-300 font-mono">
                Registrado para o perfil <strong>@{successData.handle}</strong>
              </p>
            </div>

            {/* Banner do Brinde da Caneca */}
            <div className="p-4 bg-[#0A1138] border-2 border-[#FFE600] text-left space-y-2 shonen-shadow-yellow">
              <div className="flex items-center gap-2 text-[#FFE600] font-black uppercase text-xs font-mono">
                <Coffee className="w-4 h-4 shrink-0 text-[#FF7A00]" />
                <span>☕ CANECA PERSONALIZADA OFICIAL:</span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-sans">
                Se o <strong>{hero.name}</strong> for o grande vencedor, a arte dele será a estampa da <strong>Caneca Oficial do Garranime 2026</strong> + brindes especiais distribuídos e revelados no palco do evento!
              </p>
              <div className="text-[11px] text-orange-200 font-mono pt-1 border-t border-[#1E2C6A]">
                📌 <strong>Lembre-se:</strong> Mantenha o follow no <strong>@garranime</strong> para validar seu brinde na apuração ao vivo!
              </div>
            </div>

            <div className="pt-2">
              <GamerButton
                fullWidth
                size="md"
                ghost="orange"
                onClick={() => {
                  sound.playConfirm();
                  onClose();
                }}
              >
                VER PLACAR AO VIVO
              </GamerButton>
            </div>
          </div>
        ) : (
          /* ========================================================== */
          /* FORMULÁRIO DE VOTO                                         */
          /* ========================================================== */
          <div className="relative z-10 space-y-4">
            {/* Hero Quick Preview Card */}
            <div className="p-3 bg-[#0A1138] border-2 border-[#FFE600] flex items-center gap-3">
              <div className="relative w-14 h-16 shrink-0 bg-[#070B28] border border-[#1E2C6A]">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono text-[#FFE600] font-bold uppercase block truncate">
                  Seu Voto:
                </span>
                <h4 className="text-lg font-black uppercase text-white font-sans truncate">
                  {hero.name}
                </h4>
                <p className="text-[11px] font-mono text-[#00D2FF] truncate">
                  {hero.archetype}
                </p>
              </div>
            </div>

            {/* Explicação da Caneca e Brinde */}
            <div className="p-3 bg-[#0F173D] border border-[#FF7A00]/40 flex items-start gap-2.5 text-xs text-gray-200">
              <Coffee className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
              <div className="space-y-0.5 leading-relaxed">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <strong className="text-[#FFE600] uppercase font-mono block">
                    VALENDO CANECA TEMÁTICA & BRINDES:
                  </strong>
                  <span className="text-[10px] font-mono bg-red-600/90 text-white font-black px-1.5 py-0.5 uppercase">
                    ⏰ VOTAÇÃO ATÉ 18/NOV
                  </span>
                </div>
                <span>
                  O guerreiro mais votado virará uma <strong>caneca personalizada oficial</strong> + brindes secretos entregues no dia do evento (22/Nov)! Votações válidas somente até dia <strong>18 de Novembro</strong>.
                </span>
              </div>
            </div>

            <form onSubmit={handleVoteSubmit} className="space-y-3.5 text-xs font-mono">
              {/* PASSO 1: Seguir no Instagram */}
              <div className="space-y-1.5">
                <label className="block text-gray-300 font-bold uppercase text-[11px] flex items-center justify-between">
                  <span>1. Pré-Requisito de Validação:</span>
                  {followedInstagram && (
                    <span className="text-green-400 font-bold inline-flex items-center gap-1 text-[10px]">
                      <CheckCircle2 className="w-3 h-3" /> Perfil Aberto
                    </span>
                  )}
                </label>

                <button
                  type="button"
                  onClick={handleOpenInstagram}
                  className="w-full py-2.5 px-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-white transition-all shadow-[0_0_15px_rgba(253,29,29,0.3)]"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>SEGUIR @GARRANIME NO INSTAGRAM ↗</span>
                </button>
              </div>

              {/* PASSO 2: Digitar seu @ */}
              <div className="space-y-1">
                <label className="block text-gray-300 font-bold uppercase text-[11px]">
                  2. Digite seu @ de Usuário do Instagram:
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-gray-400 font-black font-mono text-sm">
                    @
                  </span>
                  <input
                    type="text"
                    required
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="seu_usuario_aqui"
                    className="w-full pl-8 pr-3 py-2.5 bg-[#0A1138] border-2 border-[#1E2C6A] text-white focus:border-[#FFE600] outline-none text-xs font-mono font-bold lowercase transition-colors"
                  />
                </div>
                <span className="text-[10px] text-gray-400 block">
                  *Apenas 1 voto por perfil. Votação válida até dia 18 de Novembro. Seu @ será checado no sorteio/entrega do brinde.
                </span>
              </div>

              {/* Checkbox de Aceite da Regra */}
              <div className="p-2.5 bg-[#0A1138] border border-[#1E2C6A] flex items-start gap-2">
                <input
                  type="checkbox"
                  id="ruleAccept"
                  checked={acceptedRule}
                  onChange={(e) => setAcceptedRule(e.target.checked)}
                  className="mt-0.5 accent-[#FF7A00]"
                />
                <label htmlFor="ruleAccept" className="text-[11px] text-gray-300 cursor-pointer select-none leading-tight">
                  Confirmo que sigo o perfil oficial <strong>@garranime</strong> para validar meu voto até dia <strong>18/Nov</strong> e concorrer à caneca e brindes no dia do evento.
                </label>
              </div>

              {/* Erro */}
              {errorMsg && (
                <div className="p-2.5 bg-red-950/80 border-2 border-red-500 text-red-200 text-xs flex items-start gap-2 animate-shake">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Botão de Envio */}
              <div className="w-full pt-1">
                <GamerButton
                  type="submit"
                  fullWidth
                  size="md"
                  ghost="orange"
                  showPacman
                  disabled={loading}
                  icon={<Swords className="w-4 h-4" />}
                >
                  {loading ? "COMPUTANDO VOTO..." : `CONFIRMAR VOTO NO ${hero.name.toUpperCase()}`}
                </GamerButton>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
