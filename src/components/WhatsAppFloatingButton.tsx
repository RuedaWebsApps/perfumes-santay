"use client";

import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  const { locale } = useI18n();

  const msg =
    locale === "es"
      ? "Hola Angel Santay, me comunico desde la página web de Perfumery Santay para solicitar información."
      : "Hello Angel Santay, I am contacting you from Perfumery Santay website to request information.";

  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/30 transition-all transform hover:scale-105 group border border-emerald-400/40"
      aria-label="WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
      </div>
      <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
        WhatsApp
      </span>
    </a>
  );
}
