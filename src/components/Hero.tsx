"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { SITE, waLink } from "@/lib/site";
import { Sparkles, MessageCircle, ShieldCheck, ChevronDown, Award, MapPin } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background radial glow & patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-[#090a0f] to-[#090a0f] pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Floating subtle particles styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t.hero.titleLine1}{" "}
              <span className="gold-gradient-text drop-shadow-[0_2px_15px_rgba(212,175,55,0.3)]">
                {t.hero.titleHighlight}
              </span>{" "}
              <br className="hidden sm:inline" />
              {t.hero.titleLine2}
            </h1>

            {/* Subtitle description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalog"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 text-center cursor-pointer"
              >
                {t.hero.ctaCatalog}
              </a>

              <a
                href={waLink("Hola Angel Santay, me gustaría consultar sobre su catálogo de fragancias de diseñador.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-amber-500/40 bg-zinc-900/80 hover:bg-zinc-800 text-amber-300 hover:text-white font-semibold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-800/80">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.feature1}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-400">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.feature2}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.feature3}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Featured Luxury Bottle Display) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Glowing orb background */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent blur-3xl rounded-full" />

            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass-panel-gold p-4 shadow-2xl group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center">
                <Image
                  src="/perfumes/louis-vuitton-imagination.jpg"
                  alt="Louis Vuitton Imagination - Perfumery Santay"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Overlaid Gold Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-amber-500/40 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-widest">
                    Louis Vuitton
                  </span>
                </div>

                {/* Overlaid Bottom Title */}
                <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-amber-400 uppercase tracking-wider font-medium">
                        Colección Exclusiva
                      </p>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        Imagination &bull; Eau de Parfum
                      </h3>
                    </div>
                    <a
                      href="#catalog"
                      className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1.5 rounded-lg hover:bg-amber-500 hover:text-black font-semibold transition-all"
                    >
                      Ver Catálogo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow anchor */}
      <a
        href="#catalog"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-amber-400 transition-colors animate-bounce p-2"
        aria-label="Scroll to catalog"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
