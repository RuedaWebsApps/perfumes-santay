"use client";

import { useI18n } from "@/lib/i18n";
import { SITE, telLink, waLink, mapsUrl, mapsEmbedUrl } from "@/lib/site";
import { MapPin, Clock, Phone, MessageCircle, ExternalLink, Sparkles, Navigation } from "lucide-react";

export function LocationSection() {
  const { t } = useI18n();

  return (
    <section id="location" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.location.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.location.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Info */}
            <div className="glass-panel p-6 rounded-3xl space-y-3 border border-zinc-800 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  {t.location.addressTitle}
                </h3>
                <p className="text-lg font-bold text-white mt-0.5">
                  {SITE.street}
                </p>
                <p className="text-sm text-zinc-400">
                  {SITE.city}, {SITE.region} {SITE.postalCode}
                </p>
                <p className="text-xs text-amber-400/80 mt-1 font-medium">
                  Round Rock, Texas &bull; Sobre I-35 Frontage Rd
                </p>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider pt-2"
              >
                <span>{t.location.getDirections}</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Hours Info */}
            <div className="glass-panel p-6 rounded-3xl space-y-3 border border-zinc-800 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  {t.location.hoursTitle}
                </h3>
                <div className="mt-2 space-y-1.5 text-sm">
                  {SITE.hours.map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center text-zinc-300 border-b border-zinc-800/60 pb-1.5">
                      <span>{schedule.days[0]}</span>
                      <span className="font-semibold text-white">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="glass-panel p-6 rounded-3xl space-y-3 border border-zinc-800">
              <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                {t.location.contactTitle}
              </h3>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={telLink}
                  className="py-3 px-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{SITE.phoneDisplay}</span>
                </a>

                <a
                  href={waLink("Hola Angel Santay, me gustaría visitarlos hoy en la tienda.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-md transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl relative min-h-[380px] lg:min-h-full bg-zinc-950">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(95%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Perfumery Santay Google Map Location"
              className="w-full h-full min-h-[420px]"
            />
            {/* Overlay Badge */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-amber-500/40 px-3.5 py-2 rounded-2xl flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold text-white">
                Abierto en Round Rock, TX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
