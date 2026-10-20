"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "es" | "en";

export interface Translations {
  locale: Locale;
  nav: {
    home: string;
    catalog: string;
    about: string;
    brands: string;
    location: string;
    contact: string;
    requestInfo: string;
    callNow: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaCatalog: string;
    ctaWhatsApp: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  catalog: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterByBrand: string;
    allBrands: string;
    allCategories: string;
    notes: string;
    topNotes: string;
    heartNotes: string;
    baseNotes: string;
    family: string;
    consultAvailability: string;
    viewDetails: string;
    close: string;
    noResults: string;
    clearFilters: string;
    resultsCount: string;
    shareWhatsApp: string;
    authenticBadge: string;
    noticeNoPrice: string;
  };
  cardInfo: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ownerLabel: string;
    phoneLabel: string;
    locationLabel: string;
    instagramLabel: string;
    ctaCall: string;
    ctaWhatsapp: string;
    ctaDirections: string;
    flipFront: string;
    flipBack: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description1: string;
    description2: string;
    statBrands: string;
    statBrandsLabel: string;
    statAuthentic: string;
    statAuthenticLabel: string;
    statService: string;
    statServiceLabel: string;
  };
  location: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    hoursTitle: string;
    contactTitle: string;
    getDirections: string;
    whatsappMessage: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    hoursTitle: string;
    rightsReserved: string;
    designedBy: string;
  };
  splash: {
    skip: string;
  };
}

const TRANSLATIONS: Record<Locale, Translations> = {
  es: {
    locale: "es",
    nav: {
      home: "Inicio",
      catalog: "Catálogo",
      about: "Nosotros",
      brands: "Marcas",
      location: "Ubicación",
      contact: "Contacto",
      requestInfo: "Pedir Información",
      callNow: "Llamar Ahora",
    },
    hero: {
      badge: "ALTA PERFUMERÍA DE DISEÑADOR EN ROUND ROCK, TX",
      titleLine1: "La Esencia del",
      titleHighlight: "Lujo & Distinción",
      titleLine2: "en Cada Gota",
      subtitle:
        "Colección exclusiva de fragancias de diseñador para dama y caballero. Louis Vuitton, Creed, Bond No. 9, Valentino, YSL, Paco Rabanne y más. 100% auténticos.",
      ctaCatalog: "Explorar Colección",
      ctaWhatsApp: "Consultar por WhatsApp",
      feature1: "100% Auténticos y Garantizados",
      feature2: "Asesoría de Fragancia Personalizada",
      feature3: "Ubicados en Round Rock, TX",
    },
    catalog: {
      eyebrow: "COLECCIÓN SELECTA",
      title: "Catálogo de Perfumes de Diseñador",
      subtitle:
        "Descubre nuestra selecta selección de fragancias mundiales. Consulta por tu perfume favorito directamente a través de WhatsApp o teléfono.",
      searchPlaceholder: "Buscar perfume o marca (ej. Louis Vuitton, Delina, YSL)...",
      filterByBrand: "Filtrar por marca",
      allBrands: "Todas las marcas",
      allCategories: "Todas las categorías",
      notes: "Pirámide Olfativa",
      topNotes: "Salida",
      heartNotes: "Corazón",
      baseNotes: "Fondo",
      family: "Familia Olfativa",
      consultAvailability: "Preguntar Disponibilidad",
      viewDetails: "Ver Detalles",
      close: "Cerrar",
      noResults: "No se encontraron perfumes con ese criterio.",
      clearFilters: "Restablecer filtros",
      resultsCount: "fragancias encontradas",
      shareWhatsApp: "Preguntar por este perfume",
      authenticBadge: "Diseñador Original",
      noticeNoPrice: "Contáctanos directamente para disponibilidad inmediata y detalles personalizados.",
    },
    cardInfo: {
      eyebrow: "TARJETA DE PRESENTACIÓN DIGITAL",
      title: "Información de Contacto y Tienda",
      subtitle:
        "Visítanos en nuestra tienda física o contáctanos de manera directa por llamada, WhatsApp o redes sociales.",
      ownerLabel: "Atención Personalizada",
      phoneLabel: "Teléfono Directo",
      locationLabel: "Dirección de Tienda",
      instagramLabel: "Instagram Oficial",
      ctaCall: "Llamar Ahora",
      ctaWhatsapp: "Escribir al WhatsApp",
      ctaDirections: "Cómo Llegar en GPS",
      flipFront: "Ver Frente",
      flipBack: "Ver Reverso",
    },
    about: {
      eyebrow: "SOBRE PERFUMERY SANTAY",
      title: "Pasión por los Aromas que Marcan la Diferencia",
      description1:
        "En Perfumery Santay, bajo la dirección de Angel Santay, nos dedicamos a acercarte las casas de perfumería más prestigiosas y codiciadas del mundo. Creemos que una fragancia no es solo un accesorio, sino una firma personal inolvidable.",
      description2:
        "Contamos con una cuidada selección que abarca desde la sofisticación parisina de Louis Vuitton e Yves Saint Laurent hasta el magnetismo neoyorquino de Bond No. 9 y la realeza de Parfums de Marly. Te brindamos asesoría cercana y personalizada para que encuentres tu perfume ideal.",
      statBrands: "10+",
      statBrandsLabel: "Marcas de Alta Gama",
      statAuthentic: "100%",
      statAuthenticLabel: "Fragancias Originales",
      statService: "5★",
      statServiceLabel: "Atención Exclusiva",
    },
    location: {
      eyebrow: "VISÍTANOS",
      title: "Nuestra Ubicación en Round Rock, TX",
      subtitle: "Fácil acceso desde la I-35. Ven a descubrir y probar tus fragancias favoritas.",
      addressTitle: "Dirección",
      hoursTitle: "Horarios de Atención",
      contactTitle: "Contacto Rápido",
      getDirections: "Abrir en Google Maps",
      whatsappMessage: "Hola Perfumery Santay, me gustaría obtener más información sobre sus perfumes.",
    },
    footer: {
      tagline: "Perfumes de diseñador para hombre y mujer en Round Rock, Texas.",
      quickLinks: "Navegación Rápida",
      contactTitle: "Contacto Directo",
      hoursTitle: "Horario de Tienda",
      rightsReserved: "Todos los derechos reservados.",
      designedBy: "Diseñado por Ruedawebs",
    },
    splash: {
      skip: "Saltar Intro",
    },
  },
  en: {
    locale: "en",
    nav: {
      home: "Home",
      catalog: "Catalog",
      about: "About Us",
      brands: "Brands",
      location: "Location",
      contact: "Contact",
      requestInfo: "Request Info",
      callNow: "Call Now",
    },
    hero: {
      badge: "LUXURY DESIGNER PERFUMERY IN ROUND ROCK, TX",
      titleLine1: "The Essence of",
      titleHighlight: "Luxury & Elegance",
      titleLine2: "in Every Drop",
      subtitle:
        "Exclusive collection of designer fragrances for men and women. Louis Vuitton, Creed, Bond No. 9, Valentino, YSL, Paco Rabanne, and more. 100% authentic.",
      ctaCatalog: "Explore Collection",
      ctaWhatsApp: "Inquire via WhatsApp",
      feature1: "100% Authentic & Guaranteed",
      feature2: "Personalized Fragrance Advisory",
      feature3: "Located in Round Rock, TX",
    },
    catalog: {
      eyebrow: "CURATED COLLECTION",
      title: "Designer Fragrance Catalog",
      subtitle:
        "Discover our prestigious world-class fragrance collection. Inquire about your favorite perfume directly through WhatsApp or phone call.",
      searchPlaceholder: "Search perfume or brand (e.g. Louis Vuitton, Delina, YSL)...",
      filterByBrand: "Filter by brand",
      allBrands: "All brands",
      allCategories: "All categories",
      notes: "Olfactory Pyramid",
      topNotes: "Top Notes",
      heartNotes: "Heart Notes",
      baseNotes: "Base Notes",
      family: "Olfactory Family",
      consultAvailability: "Check Availability",
      viewDetails: "View Details",
      close: "Close",
      noResults: "No fragrances found matching your search.",
      clearFilters: "Reset filters",
      resultsCount: "fragrances found",
      shareWhatsApp: "Inquire about this perfume",
      authenticBadge: "Original Designer",
      noticeNoPrice: "Contact us directly for immediate availability and personalized details.",
    },
    cardInfo: {
      eyebrow: "DIGITAL BUSINESS CARD",
      title: "Contact & Store Information",
      subtitle:
        "Visit our store in person or reach out to us directly via phone, WhatsApp, or Instagram.",
      ownerLabel: "Personalized Service",
      phoneLabel: "Direct Phone",
      locationLabel: "Store Address",
      instagramLabel: "Official Instagram",
      ctaCall: "Call Now",
      ctaWhatsapp: "Message on WhatsApp",
      ctaDirections: "Get Directions (GPS)",
      flipFront: "Show Front",
      flipBack: "Show Back",
    },
    about: {
      eyebrow: "ABOUT PERFUMERY SANTAY",
      title: "A Passion for Scents that Make a Statement",
      description1:
        "At Perfumery Santay, led by Angel Santay, we bring you the most prestigious and sought-after fragrance houses in the world. We believe a fine fragrance is not just an accessory—it is an unforgettable signature.",
      description2:
        "From the Parisian sophistication of Louis Vuitton and Yves Saint Laurent to the bold energy of New York's Bond No. 9 and the royal elegance of Parfums de Marly. We offer dedicated, one-on-one fragrance guidance to find your match.",
      statBrands: "10+",
      statBrandsLabel: "Luxury Houses",
      statAuthentic: "100%",
      statAuthenticLabel: "Authentic Fragrances",
      statService: "5★",
      statServiceLabel: "Exclusive Experience",
    },
    location: {
      eyebrow: "VISIT US",
      title: "Our Store in Round Rock, TX",
      subtitle: "Conveniently located off I-35 Frontage Rd. Come sample and experience your favorite fragrances in person.",
      addressTitle: "Address",
      hoursTitle: "Business Hours",
      contactTitle: "Quick Contact",
      getDirections: "Open in Google Maps",
      whatsappMessage: "Hello Perfumery Santay, I would like to get more information about your perfumes.",
    },
    footer: {
      tagline: "Designer fragrances for men and women in Round Rock, Texas.",
      quickLinks: "Quick Navigation",
      contactTitle: "Direct Contact",
      hoursTitle: "Store Hours",
      rightsReserved: "All rights reserved.",
      designedBy: "Designed by Ruedawebs",
    },
    splash: {
      skip: "Skip Intro",
    },
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("santay_locale") as Locale | null;
      if (saved === "es" || saved === "en") {
        setLocaleState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("santay_locale", l);
    } catch {
      // ignore
    }
  };

  const toggleLocale = () => {
    const next = locale === "es" ? "en" : "es";
    setLocale(next);
  };

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t: TRANSLATIONS[locale],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
