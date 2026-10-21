"use client";

import React from "react";
import Image from "next/image";

export interface GamerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  showPacman?: boolean;
  ghost?: "orange" | "red" | "pink" | "blue" | "all" | "none";
  tilt?: "left" | "right" | "none";
  href?: string;
  target?: string;
  rel?: string;
}

export default function GamerButton({
  children,
  icon,
  size = "md",
  fullWidth = false,
  showPacman = false,
  ghost = "none",
  tilt = "left",
  className = "",
  onClick,
  disabled,
  type = "button",
  href,
  target,
  rel,
  ...props
}: GamerButtonProps) {
  // Size classes for front plate padding & font size
  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm min-h-[38px]",
    md: "px-6 py-3 text-sm sm:text-base min-h-[46px]",
    lg: "px-8 py-3.5 sm:py-4 text-base sm:text-lg min-h-[52px]",
  };

  const content = (
    <span className="relative w-full block">
      {/* 1. COMIC ORANGE FRAME (Exatamente conforme referência do cliente em Image 1 e 2) */}
      {/* Linha superior */}
      <span
        aria-hidden="true"
        className="absolute -top-[3px] left-0 right-0 h-[3.5px] bg-[#FF7A00] pointer-events-none group-hover:bg-[#FFA033] transition-colors -rotate-[0.3deg]"
      />
      {/* Linha inferior com abas comic estendidas para fora */}
      <span
        aria-hidden="true"
        className="absolute -bottom-[3px] -left-2 -right-2 h-[4px] bg-[#FF7A00] pointer-events-none group-hover:bg-[#FFA033] transition-colors rotate-[0.3deg]"
      />
      {/* Linha lateral esquerda */}
      <span
        aria-hidden="true"
        className="absolute -top-1 -bottom-1 -left-[3px] w-[3.5px] bg-[#FF7A00] pointer-events-none group-hover:bg-[#FFA033] transition-colors"
      />
      {/* Linha lateral direita */}
      <span
        aria-hidden="true"
        className="absolute -top-1 -bottom-1 -right-[3px] w-[3.5px] bg-[#FF7A00] pointer-events-none group-hover:bg-[#FFA033] transition-colors"
      />

      {/* 2. OPTIONAL PAC-MAN SPRITE (Top left edge eating forward, como na imagem 2) */}
      {showPacman && (
        <div
          aria-hidden="true"
          className="absolute -top-5 left-3 sm:left-4 z-20 pointer-events-none animate-bounce drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          <div className="relative w-6 h-6 sm:w-7 sm:h-7">
            <Image
              src="/assets/pack-man/trimmed/pacman.png"
              alt=""
              fill
              sizes="28px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* 3. OPTIONAL GHOST SPRITES (Peeking from corners, como na imagem 2) */}
      {(ghost === "orange" || ghost === "all") && (
        <div
          aria-hidden="true"
          className="absolute -top-4 right-3 sm:right-4 z-20 pointer-events-none animate-ghost-peek drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6">
            <Image
              src="/assets/pack-man/trimmed/laranja.png"
              alt=""
              fill
              sizes="24px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {(ghost === "red" || ghost === "all") && (
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -right-2 z-20 pointer-events-none animate-ghost-wiggle drop-shadow-md"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6">
            <Image
              src="/assets/pack-man/trimmed/vermelho.png"
              alt=""
              fill
              sizes="24px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {(ghost === "pink" || ghost === "all") && (
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -left-2 z-20 pointer-events-none animate-ghost-wiggle drop-shadow-md"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6">
            <Image
              src="/assets/pack-man/trimmed/rosa.png"
              alt=""
              fill
              sizes="24px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {ghost === "blue" && (
        <div
          aria-hidden="true"
          className="absolute -top-4 left-4 z-20 pointer-events-none animate-ghost-peek drop-shadow-md"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6">
            <Image
              src="/assets/pack-man/trimmed/azul.png"
              alt=""
              fill
              sizes="24px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* 4. SOLID BRAND NAVY BLUE FRONTPLATE (Chapado azul da marca) */}
      <span
        className={`relative z-10 w-full h-full bg-[#0A1138] group-hover:bg-[#0D184E] transition-all duration-150 flex items-center justify-center gap-2.5 ${sizeStyles[size]}`}
      >
        {icon && (
          <span className="text-[#FFE600] group-hover:scale-110 transition-transform shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {icon}
          </span>
        )}

        {/* 5. CRISP PURE WHITE BOLD TEXT (Exatamente como o cliente desenhou) */}
        <span className="font-sans font-black uppercase tracking-wider text-white select-none leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center">
          {children}
        </span>
      </span>
    </span>
  );

  const containerClasses = `group relative inline-flex items-center justify-center cursor-pointer select-none transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:drop-shadow-[0_0_12px_rgba(255,122,0,0.6)] disabled:opacity-50 disabled:cursor-not-allowed ${
    fullWidth ? "w-full" : "w-auto"
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick as any}
        className={containerClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={containerClasses}
      {...props}
    >
      {content}
    </button>
  );
}
