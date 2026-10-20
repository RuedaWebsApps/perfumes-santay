"use client";

import { ReactNode, useState, useSyncExternalStore } from "react";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { SplashLoader } from "@/components/SplashLoader";

const emptySubscribe = () => () => {};

export function ClientProviders({ children }: { children: ReactNode }) {
  const [splashFinished, setSplashFinished] = useState(false);
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <I18nProvider>
      {/* Intro Video Presentation modal matching Kings & Loba */}
      {isMounted && !splashFinished && (
        <SplashLoader onComplete={() => setSplashFinished(true)} />
      )}

      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </I18nProvider>
  );
}
