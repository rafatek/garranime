"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { EVENT_DATA } from "@/content/eventData";
import { X, Sparkles, MessageCircle, Music } from "lucide-react";
import GamerButton from "./GamerButton";

interface CosplayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CosplayModal({ isOpen, onClose }: CosplayModalProps) {
  const [name, setName] = useState("");
  const [character, setCharacter] = useState("");
  const [category, setCategory] = useState<"adulto" | "kids">("adulto");
  const [hasAudio, setHasAudio] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playConfirm();

    const categoryText = category === "adulto" ? "Cosplay Adulto" : "Cosplay Kids";
    const text = encodeURIComponent(
      `Olá, equipe Garranime! Gostaria de me inscrever no Concurso de Cosplay:\n\nNome: ${name}\nPersonagem: ${character}\nCategoria: ${categoryText}\nÁudio de apresentação preparado: ${
        hasAudio ? "Sim (pelo menos 1 min)" : "A definir"
      }\n\nJá garanti meu ingresso e aguardo a confirmação da ficha!`
    );

    window.open(`https://wa.me/${EVENT_DATA.whatsappContact}?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full sm:max-w-lg bg-[#0F173D] border-t-4 sm:border-4 border-[#FFE600] p-6 sm:p-8 shonen-shadow-yellow rounded-t-2xl sm:rounded-none max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#1E2C6A] mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FFE600]" />
            <h3 className="text-xl font-black uppercase text-white font-sans">
              Inscrição no Concurso Cosplay
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
              Nome do Cosplayer (ou Responsável se Kids):
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Rafael Lima"
              className="w-full p-3 bg-[#070B28] border border-[#1E2C6A] text-white focus:border-[#FFE600] outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-bold uppercase mb-1">
              Personagem & Obra do Anime/Game:
            </label>
            <input
              type="text"
              required
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              placeholder="Ex: Naruto Uzumaki (Naruto Shippuden)"
              className="w-full p-3 bg-[#070B28] border border-[#1E2C6A] text-white focus:border-[#FFE600] outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-bold uppercase mb-1">
              Categoria:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setCategory("adulto")}
                className={`p-3 border text-center font-bold uppercase ${
                  category === "adulto"
                    ? "bg-[#FFE600] text-[#070B28] border-white"
                    : "bg-[#070B28] text-gray-300 border-[#1E2C6A]"
                }`}
              >
                Adulto (a partir de 14 anos)
              </button>
              <button
                type="button"
                onClick={() => setCategory("kids")}
                className={`p-3 border text-center font-bold uppercase ${
                  category === "kids"
                    ? "bg-[#FFE600] text-[#070B28] border-white"
                    : "bg-[#070B28] text-gray-300 border-[#1E2C6A]"
                }`}
              >
                Kids (Crianças)
              </button>
            </div>
          </div>

          <div className="p-3 bg-[#070B28] border border-[#1E2C6A] text-gray-300 flex items-start gap-2">
            <Music className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
            <span>
              <strong>Atenção ao Áudio:</strong> Para a apresentação é necessário o envio de uma trilha de pelo menos 1 minuto via WhatsApp ou pendrive no dia.
            </span>
          </div>

          <div className="w-full mt-6">
            <GamerButton
              type="submit"
              fullWidth
              size="md"
              ghost="pink"
              showPacman
              icon={<MessageCircle className="w-5 h-5 fill-current" />}
            >
              Confirmar Inscrição Gratuita
            </GamerButton>
          </div>
        </form>
      </div>
    </div>
  );
}
