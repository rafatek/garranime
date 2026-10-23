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
  const [category, setCategory] = useState<"kids" | "cospobre" | "adulto">("adulto");
  const [presentationDetails, setPresentationDetails] = useState("");
  const [hasAudio, setHasAudio] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playConfirm();

    const categoryText =
      category === "kids"
        ? "Cosplay Kids (Infantil)"
        : category === "cospobre"
        ? "Cospobre (Criatividade & Baixo Custo)"
        : "Cosplay Tradicional (Adulto)";

    const text = encodeURIComponent(
      `Olá, equipe Garranime! Gostaria de me inscrever no Concurso de Cosplay (Inscrição Gratuita):\n\nNome do Participante: ${name}\nPersonagem & Obra: ${character}\nCategoria: ${categoryText}\nDetalhes da Apresentação: ${presentationDetails || "Desfile no palco"}\nÁudio / Música de Apresentação: ${
        hasAudio ? "Sim (enviarei áudio de pelo menos 1 min)" : "A definir com a organização"
      }\n\nConfirmo que já possuo a pulseira de entrada do evento!`
    );

    window.open(`https://wa.me/${EVENT_DATA.whatsappContact}?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full sm:max-w-lg bg-[#0F173D] border-t-4 sm:border-4 border-[#FFE600] p-6 sm:p-8 shonen-shadow-yellow rounded-t-2xl sm:rounded-none max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#1E2C6A] mb-4">
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

        {/* Banner de Acesso Gratuito com Pulseira */}
        <div className="mb-4 p-3 bg-[#070B28] border-l-4 border-[#FFE600] text-xs font-mono text-gray-200 space-y-1">
          <div className="flex items-center gap-1.5 text-[#FFE600] font-black uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSCRIÇÃO TOTALMENTE GRATUITA</span>
          </div>
          <p className="text-[11px] text-gray-300">
            <strong>Regra de Acesso:</strong> O único pré-requisito é possuir a pulseira de entrada do evento. Preencha seus dados de apresentação e música para concluir o cadastro.
          </p>
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
              className="w-full p-2.5 bg-[#070B28] border border-[#1E2C6A] text-white focus:border-[#FFE600] outline-none"
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
              className="w-full p-2.5 bg-[#070B28] border border-[#1E2C6A] text-white focus:border-[#FFE600] outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-bold uppercase mb-1">
              Categoria:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setCategory("kids")}
                className={`p-2.5 border text-center font-bold uppercase text-[11px] transition-all ${
                  category === "kids"
                    ? "bg-[#00D2FF] text-[#070B28] border-white font-black"
                    : "bg-[#070B28] text-gray-300 border-[#1E2C6A] hover:border-[#00D2FF]"
                }`}
              >
                Cosplay Kids
              </button>
              <button
                type="button"
                onClick={() => setCategory("cospobre")}
                className={`p-2.5 border text-center font-bold uppercase text-[11px] transition-all ${
                  category === "cospobre"
                    ? "bg-[#FFE600] text-[#070B28] border-white font-black"
                    : "bg-[#070B28] text-gray-300 border-[#1E2C6A] hover:border-[#FFE600]"
                }`}
              >
                Cospobre
              </button>
              <button
                type="button"
                onClick={() => setCategory("adulto")}
                className={`p-2.5 border text-center font-bold uppercase text-[11px] transition-all ${
                  category === "adulto"
                    ? "bg-[#FF7A00] text-[#070B28] border-white font-black"
                    : "bg-[#070B28] text-gray-300 border-[#1E2C6A] hover:border-[#FF7A00]"
                }`}
              >
                Cosplay Tradicional (Adulto)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-300 font-bold uppercase mb-1">
              Dados da Apresentação (Performance, Pose, Falas):
            </label>
            <textarea
              rows={2}
              value={presentationDetails}
              onChange={(e) => setPresentationDetails(e.target.value)}
              placeholder="Ex: Desfile com encenação do golpe Rasengan e pose heróica."
              className="w-full p-2.5 bg-[#070B28] border border-[#1E2C6A] text-white focus:border-[#FFE600] outline-none resize-none"
            />
          </div>

          <div className="p-3 bg-[#070B28] border border-[#1E2C6A] text-gray-300 flex items-start gap-2">
            <Music className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span>
                <strong>Áudio e Trilha Sonora:</strong> Para a apresentação no palco, o participante deverá enviar a trilha sonora (mínimo de 1 minuto) via WhatsApp oficial ou levar em pendrive no dia.
              </span>
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="hasAudioCheck"
                  checked={hasAudio}
                  onChange={(e) => setHasAudio(e.target.checked)}
                  className="accent-[#FF7A00]"
                />
                <label htmlFor="hasAudioCheck" className="text-[11px] text-gray-300 cursor-pointer">
                  Já preparei minha trilha musical de apresentação
                </label>
              </div>
            </div>
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
              Confirmar Inscrição Gratuita no WhatsApp
            </GamerButton>
          </div>
        </form>
      </div>
    </div>
  );
}
