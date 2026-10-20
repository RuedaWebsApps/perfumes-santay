"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Sparkles, Shield, HeartHandshake, Compass } from "lucide-react";

export function AboutSection() {
  const { t } = useI18n();

  const brandLogos = [
    "Louis Vuitton",
    "Parfums de Marly",
    "Creed",
    "Bond No. 9",
    "Valentino",
    "Yves Saint Laurent",
    "Paco Rabanne",
    "Jean Paul Gaultier",
    "Prada",
    "Burberry",
    "Lancôme",
    "Versace",
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#090a0f] via-zinc-950 to-[#090a0f] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Emblem & Visual Prestige */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-8 glass-panel-gold flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-500/20 rounded-full blur-2xl" />

              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-amber-500/50 p-2 bg-black/60 shadow-inner mb-6 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/logo-santay.png"
                  alt={SITE.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white">
                Perfumery <span className="text-amber-400">Santay</span>
              </h3>
              <p className="text-xs text-amber-300/80 font-medium tracking-widest uppercase mt-1">
                Round Rock &bull; Texas
              </p>

              {/* Stats badges inside emblem container */}
              <div className="grid grid-cols-3 gap-2 w-full mt-6 pt-6 border-t border-zinc-800">
                <div className="text-center">
                  <p className="text-lg font-extrabold text-amber-400">{t.about.statBrands}</p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">{t.about.statBrandsLabel}</p>
                </div>
                <div className="text-center border-x border-zinc-800">
                  <p className="text-lg font-extrabold text-amber-400">{t.about.statAuthentic}</p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">{t.about.statAuthenticLabel}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-extrabold text-amber-400">{t.about.statService}</p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">{t.about.statServiceLabel}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Quality Promise */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wider">
                  100% Autenticidad
                </h4>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Garantía total de productos de casas de diseñador originales.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wider">
                  Trato Personalizado
                </h4>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Atención guiada por Angel Santay para elegir tu aroma característico.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wider">
                  Exclusividad
                </h4>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Aromas de nicho y de alta costura no fáciles de conseguir localmente.
                </p>
              </div>
            </div>

            {/* Featured Brand Cloud */}
            <div className="pt-4 border-t border-zinc-800">
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-semibold">
                Casas de Diseño Presentes:
              </p>
              <div className="flex flex-wrap gap-2">
                {brandLogos.map((brand) => (
                  <span
                    key={brand}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
