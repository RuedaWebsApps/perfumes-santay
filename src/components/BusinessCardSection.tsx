"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { SITE, telLink, waLink, mapsUrl } from "@/lib/site";
import { Phone, MessageCircle, MapPin, Sparkles, User, ExternalLink, RefreshCw } from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function BusinessCardSection() {
  const { t } = useI18n();
  const [activeSide, setActiveSide] = useState<"front" | "back">("front");

  return (
    <section id="card-info" className="py-20 bg-gradient-to-b from-[#090a0f] via-zinc-950 to-[#090a0f] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.cardInfo.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.cardInfo.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.cardInfo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Physical Card Viewer */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Flip control tabs */}
            <div className="flex items-center gap-2 mb-4 bg-zinc-900/80 p-1 rounded-full border border-zinc-800">
              <button
                type="button"
                onClick={() => setActiveSide("front")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeSide === "front"
                    ? "bg-amber-500 text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {t.cardInfo.flipFront}
              </button>
              <button
                type="button"
                onClick={() => setActiveSide("back")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeSide === "back"
                    ? "bg-amber-500 text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {t.cardInfo.flipBack}
              </button>
            </div>

            {/* Business Card Display Container */}
            <div className="relative w-full max-w-lg aspect-[1.66/1] rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 bg-black group">
              {activeSide === "front" ? (
                <Image
                  src="/card-perfumes-front.jpg"
                  alt="Perfumery Santay Business Card Front"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  priority
                />
              ) : (
                <Image
                  src="/card-perfumes-back.jpg"
                  alt="Perfumery Santay Business Card Back"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  priority
                />
              )}

              {/* Toggle floating indicator */}
              <button
                type="button"
                onClick={() => setActiveSide(activeSide === "front" ? "back" : "front")}
                className="absolute bottom-3 right-3 p-2 bg-black/70 hover:bg-black/90 backdrop-blur-md rounded-full border border-amber-500/40 text-amber-300 hover:text-white text-xs flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
                title="Voltear tarjeta"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="text-[11px] font-medium hidden sm:inline">
                  {activeSide === "front" ? t.cardInfo.flipBack : t.cardInfo.flipFront}
                </span>
              </button>
            </div>
            <p className="mt-3 text-xs text-zinc-500 text-center">
              Tarjeta física original &bull; Toca para alternar frente y reverso
            </p>
          </div>

          {/* Right Column: Direct Info Cards & Quick Action Buttons */}
          <div className="lg:col-span-6 space-y-4">
            {/* Person In Charge Card */}
            <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                  {t.cardInfo.ownerLabel}
                </p>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {SITE.owner}
                </h3>
                <p className="text-xs text-amber-400/90 font-medium">
                  Perfumery Santay &bull; Round Rock, TX
                </p>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-4 hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                    {t.cardInfo.phoneLabel}
                  </p>
                  <a
                    href={telLink}
                    className="text-lg font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {SITE.phoneDisplay}
                  </a>
                  <p className="text-xs text-zinc-500">Llamadas directas y consultas inmediatas</p>
                </div>
              </div>
              <a
                href={telLink}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-black text-amber-300 font-bold text-xs uppercase tracking-wider transition-all"
              >
                {t.cardInfo.ctaCall}
              </a>
            </div>

            {/* Store Location Card */}
            <div className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-4 hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                    {t.cardInfo.locationLabel}
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {SITE.fullAddress}
                  </p>
                  <p className="text-xs text-zinc-500">Fácil acceso sobre I-35 Frontage Rd</p>
                </div>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-black text-amber-300 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <span>GPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Instagram Profile Card */}
            <div className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-4 hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600/20 via-pink-600/20 to-purple-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                    {t.cardInfo.instagramLabel}
                  </p>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    @{SITE.instagramHandle}
                  </a>
                  <p className="text-xs text-zinc-500">Nuevas llegadas, videos y reseñas</p>
                </div>
              </div>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Seguir
              </a>
            </div>

            {/* Master Action Button */}
            <div className="pt-2">
              <a
                href={waLink("Hola Angel Santay, vi su tarjeta de presentación y me gustaría solicitar información sobre los perfumes disponibles.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-emerald-900/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.cardInfo.ctaWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
