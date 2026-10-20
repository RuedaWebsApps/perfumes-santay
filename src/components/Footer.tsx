"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { SITE, telLink, waLink, mapsUrl } from "@/lib/site";
import { Phone, MessageCircle, MapPin, Heart } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const { t, locale } = useI18n();

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Presentation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 p-1 bg-black">
                <Image
                  src="/logo-santay.png"
                  alt={SITE.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold tracking-[0.2em] text-white uppercase">
                Perfumery <span className="text-amber-400">Santay</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={waLink("Hola Perfumery Santay")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={telLink}
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  {t.nav.catalog}
                </a>
              </li>
              <li>
                <a href="#card-info" className="hover:text-amber-400 transition-colors">
                  {t.nav.requestInfo}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={telLink} className="hover:underline">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex items-start gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {SITE.fullAddress}
                </a>
              </p>
              <p className="flex items-center gap-2 text-zinc-300">
                <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
                <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @{SITE.instagramHandle}
                </a>
              </p>
            </div>
          </div>

          {/* Store Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footer.hoursTitle}
            </h4>
            <div className="space-y-1.5 text-xs text-zinc-400">
              {SITE.hours.map((schedule, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>{locale === "es" ? schedule.days[1] : schedule.days[0]}</span>
                  <span className="font-semibold text-zinc-200">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; 2026 {SITE.name}. {t.footer.rightsReserved}
          </p>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>{t.footer.designedBy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
