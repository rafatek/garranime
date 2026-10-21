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
    sm: "px-4 py-2 text-xs sm:text-sm",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
  };

  const textShadowClass = size === "sm" ? "garranime-btn-text-sm" : "garranime-btn-text";

  // Tilt orientation for the solid orange backplate (matching the reference image)
  const tiltClass =
    tilt === "left"
      ? "-rotate-2 group-hover:-rotate-3 group-hover:scale-[1.02]"
      : tilt === "right"
      ? "rotate-2 group-hover:rotate-3 group-hover:scale-[1.02]"
      : "rotate-0 group-hover:scale-[1.02]";

  const content = (
    <>
      {/* 1. SOLID ORANGE DIAGONAL BACKPLATE (Chapado alaranjado diagonal) */}
      <span
        aria-hidden="true"
        className={`absolute -inset-1 sm:-inset-1.5 bg-[#FF7A00] transition-transform duration-200 pointer-events-none ${tiltClass} shadow-[3px_3px_0px_#070B28]`}
      />

      {/* 2. OPTIONAL PAC-MAN PATROL SPRITE (Walking back and forth on top border) */}
      {showPacman && (
        <div
          aria-hidden="true"
          className="absolute -top-5 z-20 pointer-events-none animate-pacman-patrol drop-shadow-md"
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

      {/* 3. OPTIONAL GHOST SPRITES (Peeking from corners matching reference image) */}
      {(ghost === "orange" || ghost === "all") && (
        <div
          aria-hidden="true"
          className="absolute -top-3.5 right-3 z-20 pointer-events-none animate-ghost-peek drop-shadow-md"
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
          className="absolute -bottom-2.5 -right-2 z-20 pointer-events-none animate-ghost-wiggle drop-shadow-md"
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
          className="absolute -bottom-2.5 -left-2 z-20 pointer-events-none animate-ghost-wiggle drop-shadow-md"
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
          className="absolute -top-3.5 left-4 z-20 pointer-events-none animate-ghost-peek drop-shadow-md"
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
        className={`relative z-10 w-full h-full bg-[#0A1138] group-hover:bg-[#0D1647] border border-[#FF7A00]/40 group-hover:border-[#FF7A00] transition-all duration-150 flex items-center justify-center gap-2.5 ${sizeStyles[size]} active:translate-x-0.5 active:translate-y-0.5`}
      >
        {icon && (
          <span className="text-[#FFE600] group-hover:scale-110 transition-transform shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {icon}
          </span>
        )}

        {/* 5. 3D WHITE TEXT WITH HARD ORANGE DIAGONAL EXTENSION SHADOW */}
        <span
          className={`font-gamer uppercase tracking-wider text-white select-none leading-none ${textShadowClass}`}
        >
          {children}
        </span>
      </span>
    </>
  );

  const containerClasses = `group relative inline-flex items-center justify-center cursor-pointer select-none transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
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
