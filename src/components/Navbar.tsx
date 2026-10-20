"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { SITE, telLink, waLink } from "@/lib/site";
import { Phone, MessageCircle, Menu, X, Sparkles, Globe } from "lucide-react";

export function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#catalog", label: t.nav.catalog },
    { href: "#card-info", label: t.nav.requestInfo },
    { href: "#about", label: t.nav.about },
    { href: "#location", label: t.nav.location },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090a0f]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-amber-500/40 p-1 bg-black/60 shadow-lg group-hover:border-amber-400 transition-colors">
              <Image
                src="/logo-santay.png"
                alt={SITE.name}
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <span className="block text-sm sm:text-base font-semibold tracking-[0.2em] text-white uppercase group-hover:text-amber-300 transition-colors">
                Perfumery <span className="text-amber-400">Santay</span>
              </span>
              <span className="block text-[10px] tracking-widest text-zinc-400 uppercase">
                Round Rock &bull; Austin
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-zinc-300 hover:text-amber-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switch Button */}
            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700 hover:border-amber-500/60 bg-zinc-900/60 text-xs font-semibold text-zinc-200 transition-all cursor-pointer"
              title="Cambiar idioma / Change language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className={locale === "es" ? "text-amber-400" : "text-zinc-400"}>ES</span>
              <span className="text-zinc-600">|</span>
              <span className={locale === "en" ? "text-amber-400" : "text-zinc-400"}>EN</span>
            </button>

            {/* Direct Phone Call */}
            <a
              href={telLink}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-medium text-amber-300 hover:text-white transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE.phoneDisplay}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={waLink("Hola Perfumery Santay, me interesa conocer más sobre su catálogo de perfumes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold tracking-wide uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger & Lang */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/60 text-xs font-semibold text-zinc-200"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{locale.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-500/20 bg-[#090a0f]/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-zinc-300 hover:text-amber-400 rounded-lg hover:bg-zinc-800/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              href={telLink}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-amber-500/40 bg-zinc-900 text-amber-300 font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{SITE.phoneDisplay}</span>
            </a>

            <a
              href={waLink("Hola Perfumery Santay, me interesa conocer más sobre su catálogo de perfumes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-sm tracking-wide"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
