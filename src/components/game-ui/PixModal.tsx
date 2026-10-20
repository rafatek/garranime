"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { EVENT_DATA } from "@/content/eventData";
import { X, Copy, Check, MessageCircle, Ticket, QrCode } from "lucide-react";

interface PixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PixModal({
  isOpen,
  onClose,
}: PixModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const pricePerTicket = 10;
  const totalPrice = quantity * pricePerTicket;

  const handleCopy = () => {
    sound.playConfirm();
    navigator.clipboard.writeText(EVENT_DATA.pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    sound.playSelect();
    const text = encodeURIComponent(
      `Olá, equipe Garranime! Acabei de realizar a transferência Pix no valor de R$ ${totalPrice},00 referente a ${quantity} ingresso(s) antecipado(s). Segue o comprovante para emissão da(s) pulseira(s) oficial(is)!`
    );
    window.open(`https://wa.me/${EVENT_DATA.whatsappContact}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full sm:max-w-lg bg-[#0F173D] border-t-4 sm:border-4 border-[#FF7A00] p-6 sm:p-8 shonen-shadow-orange rounded-t-2xl sm:rounded-none max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1E2C6A] mb-6">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-[#FF7A00] text-[#070B28] font-black text-xs">PIX</span>
            <h3 className="text-xl font-black uppercase text-white font-sans">
              Checkout de Ingressos Antecipados
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

        {/* Quantity */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono font-bold uppercase text-gray-300">
              1. Quantidade de Ingressos:
            </label>
            <span className="text-xs font-mono text-[#FFE600] font-bold">
              R$ 10,00 cada
            </span>
          </div>

          <div className="flex items-center gap-4 bg-[#070B28] border border-[#1E2C6A] p-2.5 max-w-[200px]">
            <button
              onClick={() => {
                sound.playSelect();
                setQuantity(Math.max(1, quantity - 1));
              }}
              className="w-8 h-8 bg-[#0F173D] text-white font-black text-lg border border-[#1E2C6A] flex items-center justify-center active:scale-95"
            >
              -
            </button>
            <span className="font-mono font-black text-xl text-[#FFE600] flex-1 text-center">
              {quantity}
            </span>
            <button
              onClick={() => {
                sound.playSelect();
                setQuantity(Math.min(10, quantity + 1));
              }}
              className="w-8 h-8 bg-[#0F173D] text-white font-black text-lg border border-[#1E2C6A] flex items-center justify-center active:scale-95"
            >
              +
            </button>
          </div>
        </div>

        {/* Total Price */}
        <div className="bg-[#070B28] border-2 border-[#FFE600] p-4 flex items-center justify-between mb-6">
          <span className="text-xs font-mono font-bold uppercase text-gray-300">
            Total a Transferir:
          </span>
          <span className="text-2xl sm:text-3xl font-black text-[#FFE600] font-mono">
            R$ {totalPrice},00
          </span>
        </div>

        {/* Pix Key Box */}
        <div className="space-y-2 mb-6">
          <label className="block text-xs font-mono font-bold uppercase text-gray-300">
            2. Chave Pix Oficial do Evento:
          </label>
          <div className="flex items-center justify-between gap-2 bg-[#070B28] border border-[#FF7A00] p-3 text-xs font-mono text-white">
            <span className="truncate">{EVENT_DATA.pixKey}</span>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-[#FF7A00] text-[#070B28] font-bold uppercase flex items-center gap-1 shrink-0 active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copiado!" : "Copiar"}</span>
            </button>
          </div>
          <p className="text-[11px] text-gray-400">
            Favorecido: <strong>{EVENT_DATA.pixRecipient}</strong>
          </p>
        </div>

        {/* WhatsApp Send Confirmation Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#070B28] font-black text-sm uppercase tracking-wider border-2 border-white shonen-shadow flex items-center justify-center gap-2 active:scale-95 transition-all mb-3"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Enviar Comprovante via WhatsApp</span>
        </button>

        <p className="text-[11px] text-center text-gray-400 font-mono">
          Após o envio, a equipe registrará o número da sua pulseira oficial de acesso!
        </p>
      </div>
    </div>
  );
}
