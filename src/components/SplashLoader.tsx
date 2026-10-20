"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function SplashLoader({ onComplete }: { onComplete: () => void }) {
  const [isClosing, setIsClosing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useI18n();

  const handleComplete = useCallback(() => {
    setIsClosing((prev) => {
      if (!prev) {
        setTimeout(onComplete, 600);
        return true;
      }
      return prev;
    });
  }, [onComplete]);

  useEffect(() => {
    // Fallback timer (auto complete if video ends or takes long)
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 11000);

    return () => clearTimeout(fallbackTimer);
  }, [handleComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-600 ${
        isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top Left Branding */}
      <div className="absolute top-5 left-5 z-[10001] md:top-8 md:left-8 flex items-center gap-3">
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-amber-500/40 p-1 bg-black/50 backdrop-blur-md">
          <Image
            src="/logo-santay.png"
            alt={SITE.name}
            fill
            className="object-contain p-0.5"
            priority
          />
        </div>
        <div className="hidden sm:block">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
            {SITE.name}
          </p>
          <p className="text-[10px] text-zinc-400 tracking-wider">Round Rock, TX</p>
        </div>
      </div>

      {/* Main Video presentation responsive */}
      <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center p-2 sm:p-4">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onEnded={handleComplete}
          className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.2)]"
        >
          <source src="/intro-santay.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Skip Button (Bottom right) */}
      <button
        type="button"
        onClick={handleComplete}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-[10001] px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wider text-amber-200 hover:text-white bg-black/60 hover:bg-black/90 border border-amber-500/30 hover:border-amber-400 backdrop-blur-md rounded-full transition-all cursor-pointer shadow-xl flex items-center gap-2 group"
      >
        <span>{t.splash.skip}</span>
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </button>
    </div>
  );
}
