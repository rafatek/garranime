"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { EVENT_DATA, TOURNAMENTS } from "@/content/eventData";
import { X, Gamepad2, MessageCircle } from "lucide-react";
import GamerButton from "./GamerButton";

interface TournamentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTournamentId?: string;
}

export default function TournamentModal({
  isOpen,
  onClose,
  defaultTournamentId = "naruto",
}: TournamentModalProps) {
  const [selectedGame, setSelectedGame] = useState(defaultTournamentId);
  const [nick, setNick] = useState("");
  const [name, setName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [partnerNick, setPartnerNick] = useState("");
  const [partnerName, setPartnerName] = useState("");

  if (!isOpen) return null;

  const currentGame = TOURNAMENTS.find((t) => t.id === selectedGame) || TOURNAMENTS[0];
  const isDuo = currentGame.isDuo;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playConfirm();

    let message = "";
    if (isDuo) {
      message = `Olá, equipe Garranime! Gostaria de inscrever minha DUPLA no campeonato de ${currentGame.name} (Taxa Antecipada: R$ 14,00 por dupla):\n\nNome da Dupla / Time: ${teamName || "A definir"}\n\nJogador 1 (Capitão): ${name}\nNick Jogador 1: ${nick}\n\nJogador 2: ${partnerName}\nNick Jogador 2: ${partnerNick}\n\nEstamos cientes do valor antecipado de R$ 14,00 e aguardamos a chave e instruções de pagamento!`;
    } else {
      message = `Olá, equipe Garranime! Gostaria de me inscrever no campeonato de ${currentGame.name} (Taxa Antecipada: R$ 7,00 individual):\n\nNome Completo: ${name}\nNick / Gamertag: ${nick}\n\nEstou ciente da taxa antecipada de R$ 7,00 e aguardo a confirmação da vaga na chave!`;
    }

    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${EVENT_DATA.whatsappContact}?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full sm:max-w-lg bg-[#0F173D] border-t-4 sm:border-4 border-[#00D2FF] p-6 sm:p-8 shonen-shadow-cyan rounded-t-2xl sm:rounded-none max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#1E2C6A] mb-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-[#00D2FF]" />
            <h3 className="text-xl font-black uppercase text-white font-sans">
              Inscrição em Torneios Gamers
            </h3>
          </div>
          <button
            onClick={() => {
              sound.playSelect();
              onClose();
            }}
            className="p-1.5 text-gray-400 hover:text-white bg-[#070B28] border border-[#1E2C6A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Banner de Inscrições Pagas */}
        <div className="mb-4 p-3 bg-[#070B28] border-l-4 border-[#FFE600] text-xs font-mono text-gray-200 space-y-1">
          <div className="flex items-center gap-1.5 text-[#FFE600] font-black uppercase">
            <span>⚠️ INSCRIÇÕES PAGAS (VALORES ANTECIPADOS)</span>
          </div>
          <p className="text-[11px] text-gray-300">
            Para garantir a organização e premiação, os torneios gamer possuem taxa antecipada: <strong>R$ 7,00 individual</strong> (Naruto e Clash) e <strong>R$ 14,00 por dupla</strong> (Free Fire).
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-gray-300 font-bold uppercase mb-1">
              Escolha o Jogo:
            </label>
            <div className="space-y-2">
              {TOURNAMENTS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedGame(t.id)}
                  className={`w-full p-2.5 border text-left flex items-center justify-between font-bold uppercase transition-all ${
                    selectedGame === t.id
                      ? "bg-[#00D2FF] text-[#070B28] border-white shonen-shadow-cyan"
                      : "bg-[#070B28] text-gray-300 border-[#1E2C6A] hover:border-[#00D2FF]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{t.icon}</span>
                    <span className="text-xs">{t.name}</span>
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 border ${
                    selectedGame === t.id
                      ? "bg-[#070B28] text-[#FFE600] border-[#FFE600]"
                      : "bg-[#0A1138] text-[#FFE600] border-[#1E2C6A]"
                  }`}>
                    {t.id === "freefire" ? "R$ 14 DUPLA" : "R$ 7 SOLO"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Destaque do valor do jogo selecionado */}
          <div className="p-3 bg-[#070B28] border border-[#00D2FF]/40 flex items-center justify-between">
            <span className="text-gray-300 font-bold uppercase">Taxa Antecipada:</span>
            <span className="text-sm font-black text-[#FFE600] font-mono">
              {isDuo ? "R$ 14,00 por Dupla (R$ 7/pessoa)" : "R$ 7,00 Individual"}
            </span>
          </div>

          {isDuo ? (
            /* Campos específicos para Dupla (Free Fire) */
            <div className="space-y-3 p-3 bg-[#070B28] border border-[#1E2C6A]">
              <div>
                <label className="block text-gray-300 font-bold uppercase mb-1">
                  Nome da Dupla / Time:
                </label>
                <input
                  type="text"
                  required
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Ex: Tropa Garrafão"
                  className="w-full p-2.5 bg-[#0F173D] border border-[#1E2C6A] text-white focus:border-[#00D2FF] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-[#1E2C6A]">
                <div>
                  <label className="block text-[#00D2FF] font-bold uppercase mb-1">
                    Jogador 1 (Capitão) - Nome:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome completo"
                    className="w-full p-2 bg-[#0F173D] border border-[#1E2C6A] text-white focus:border-[#00D2FF] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#00D2FF] font-bold uppercase mb-1">
                    Jogador 1 - Nick / ID:
                  </label>
                  <input
                    type="text"
                    required
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
                    placeholder="Ex: ProPlayer_FF"
                    className="w-full p-2 bg-[#0F173D] border border-[#1E2C6A] text-white focus:border-[#00D2FF] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-[#1E2C6A]">
                <div>
                  <label className="block text-[#FFE600] font-bold uppercase mb-1">
                    Jogador 2 (Dupla) - Nome:
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    placeholder="Nome completo parceiro"
                    className="w-full p-2 bg-[#0F173D] border border-[#1E2C6A] text-white focus:border-[#FFE600] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#FFE600] font-bold uppercase mb-1">
                    Jogador 2 - Nick / ID:
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerNick}
                    onChange={(e) => setPartnerNick(e.target.value)}
                    placeholder="Ex: Sniper_Garrão"
                    className="w-full p-2 bg-[#0F173D] border border-[#1E2C6A] text-white focus:border-[#FFE600] outline-none"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Campos para torneio individual (Naruto ou Clash) */
            <div className="space-y-3">
              <div>
                <label className="block text-gray-300 font-bold uppercase mb-1">
                  Nome Completo do Jogador:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Lucas Gabriel da Silva"
                  className="w-full p-3 bg-[#070B28] border border-[#1E2C6A] text-white focus:border-[#00D2FF] outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold uppercase mb-1">
                  Nick / Gamertag no Jogo:
                </label>
                <input
                  type="text"
                  required
                  value={nick}
                  onChange={(e) => setNick(e.target.value)}
                  placeholder={selectedGame === "naruto" ? "Ex: NinjaStorm99" : "Ex: ReiClash_BR"}
                  className="w-full p-3 bg-[#070B28] border border-[#1E2C6A] text-white focus:border-[#00D2FF] outline-none"
                />
              </div>
            </div>
          )}

          <div className="p-2.5 bg-[#070B28] border border-[#1E2C6A] text-gray-400 text-[11px]">
            📋 As chaves e a lista pública de inscritos serão impressas e publicadas antes do início das rodadas no dia do evento!
          </div>

          <div className="w-full mt-6">
            <GamerButton
              type="submit"
              fullWidth
              size="md"
              ghost="blue"
              showPacman
              icon={<MessageCircle className="w-5 h-5 fill-current" />}
            >
              {isDuo
                ? "Confirmar Inscrição da Dupla (R$ 14,00) via WhatsApp"
                : "Confirmar Inscrição (R$ 7,00) via WhatsApp"}
            </GamerButton>
          </div>
        </form>
      </div>
    </div>
  );
}
