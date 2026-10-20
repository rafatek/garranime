"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { EVENT_DATA, TOURNAMENTS } from "@/content/eventData";
import { X, Gamepad2, MessageCircle } from "lucide-react";

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playConfirm();

    const game = TOURNAMENTS.find((t) => t.id === selectedGame)?.name || selectedGame;
    const text = encodeURIComponent(
      `Olá, equipe Garranime! Quero me inscrever no campeonato gamer:\n\nJogo: ${game}\nNick de Jogador: ${nick}\nNome Real: ${name}\n\nAguardo as instruções para pagamento da taxa de inscrição e confirmação da vaga na chave!`
    );

    window.open(`https://wa.me/${EVENT_DATA.whatsappContact}?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full sm:max-w-lg bg-[#0F173D] border-t-4 sm:border-4 border-[#00D2FF] p-6 sm:p-8 shonen-shadow-cyan rounded-t-2xl sm:rounded-none max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#1E2C6A] mb-6">
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

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-gray-300 font-bold uppercase mb-1">
              Escolha a Modalidade do Torneio:
            </label>
            <div className="space-y-2">
              {TOURNAMENTS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedGame(t.id)}
                  className={`w-full p-3 border text-left flex items-center justify-between font-bold uppercase ${
                    selectedGame === t.id
                      ? "bg-[#00D2FF] text-[#070B28] border-white"
                      : "bg-[#070B28] text-gray-300 border-[#1E2C6A]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{t.icon}</span>
                    <span>{t.name}</span>
                  </span>
                  <span className="text-[10px] bg-[#070B28] text-white px-2 py-0.5 border border-[#1E2C6A]">
                    {t.category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-300 font-bold uppercase mb-1">
              Nick / Gamertag:
            </label>
            <input
              type="text"
              required
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              placeholder="Ex: NinjaStorm99"
              className="w-full p-3 bg-[#070B28] border border-[#1E2C6A] text-white focus:border-[#00D2FF] outline-none"
            />
          </div>

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

          <div className="p-3 bg-[#070B28] border border-[#1E2C6A] text-gray-400">
            A lista de participantes e tabelas de chaves serão impressas e publicadas antes do início das rodadas no dia do evento!
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#00D2FF] hover:bg-white text-[#070B28] font-black text-sm uppercase tracking-wider border-2 border-white shonen-shadow flex items-center justify-center gap-2 active:scale-95 transition-all mt-6"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Enviar Ficha de Inscrição</span>
          </button>
        </form>
      </div>
    </div>
  );
}
