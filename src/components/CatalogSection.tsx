"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import {
  PERFUMES_CATALOG,
  CATEGORIES,
  type GenderCategory,
  type PerfumeItem,
} from "@/data/catalog";
import { SITE, waLink } from "@/lib/site";
import {
  Search,
  Sparkles,
  MessageCircle,
  X,
  SlidersHorizontal,
  Flame,
  CheckCircle2,
  Share2,
} from "lucide-react";

export function CatalogSection() {
  const { t, locale } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<GenderCategory>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalPerfume, setActiveModalPerfume] = useState<PerfumeItem | null>(null);

  // Extract unique brands list
  const allBrands = useMemo(() => {
    const set = new Set<string>();
    PERFUMES_CATALOG.forEach((item) => set.add(item.brand));
    return Array.from(set).sort();
  }, []);

  // Filtered perfumes
  const filteredPerfumes = useMemo(() => {
    return PERFUMES_CATALOG.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== "all" && item.brand !== selectedBrand) {
        return false;
      }
      // Search term
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesBrand = item.brand.toLowerCase().includes(query);
        const matchesFamily =
          item.olfactoryFamily.es.toLowerCase().includes(query) ||
          item.olfactoryFamily.en.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesFamily) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSearchQuery("");
  };

  const getWhatsAppPerfumeLink = (perfume: PerfumeItem) => {
    const text =
      locale === "es"
        ? `Hola Angel Santay, me interesa consultar información y disponibilidad del perfume ${perfume.brand} - ${perfume.name}.`
        : `Hello Angel Santay, I would like to inquire about availability and details for the perfume ${perfume.brand} - ${perfume.name}.`;
    return waLink(text);
  };

  return (
    <section id="catalog" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.catalog.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.catalog.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            {t.catalog.subtitle}
          </p>
          <div className="pt-1">
            <span className="inline-block text-xs font-medium text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
              {t.catalog.noticeNoPrice}
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.catalog.searchPlaceholder}
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brand Dropdown */}
            <div className="relative md:w-64">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full py-3.5 px-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-sm focus:outline-none focus:border-amber-400 cursor-pointer appearance-none"
              >
                <option value="all">{t.catalog.allBrands} ({PERFUMES_CATALOG.length})</option>
                {allBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
              <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            </div>
          </div>

          {/* Gender / Category Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? PERFUMES_CATALOG.length
                  : PERFUMES_CATALOG.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id as GenderCategory)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-amber-500 text-black shadow-lg shadow-amber-500/25"
                      : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {cat[locale]} <span className="opacity-70 text-[11px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Filter Counter Status */}
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
            <span>
              Mostrando <strong className="text-amber-400">{filteredPerfumes.length}</strong> de{" "}
              {PERFUMES_CATALOG.length} {t.catalog.resultsCount}
            </span>
            {(selectedCategory !== "all" || selectedBrand !== "all" || searchQuery) && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-amber-400 hover:underline cursor-pointer"
              >
                {t.catalog.clearFilters}
              </button>
            )}
          </div>
        </div>

        {/* Perfume Grid */}
        {filteredPerfumes.length === 0 ? (
          <div className="text-center py-20 bg-zinc-950/60 rounded-3xl border border-dashed border-zinc-800 p-8 space-y-4">
            <p className="text-zinc-400 text-base">{t.catalog.noResults}</p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full bg-amber-500 text-black text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-all cursor-pointer"
            >
              {t.catalog.clearFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPerfumes.map((perfume) => (
              <div
                key={perfume.id}
                className="group relative rounded-3xl bg-zinc-950 border border-zinc-800/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Image Container with Badges */}
                <div
                  onClick={() => setActiveModalPerfume(perfume)}
                  className="relative aspect-square w-full bg-gradient-to-b from-zinc-900 to-black p-6 flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30">
                      {perfume.category === "women"
                        ? "Dama"
                        : perfume.category === "men"
                        ? "Caballero"
                        : "Unisex"}
                    </span>
                  </div>

                  {perfume.isFeatured && (
                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/40 px-2 py-0.5 rounded-md">
                      <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-[10px] font-bold text-amber-300 uppercase">Top</span>
                    </div>
                  )}

                  {/* Perfume Bottle Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={perfume.image}
                      alt={`${perfume.brand} - ${perfume.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-contain transition-transform duration-500 group-hover:scale-108"
                    />
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-amber-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {t.catalog.viewDetails}
                    </span>
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Brand */}
                    <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400/90">
                      {perfume.brand}
                    </p>
                    {/* Perfume Name */}
                    <h3
                      onClick={() => setActiveModalPerfume(perfume)}
                      className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
                    >
                      {perfume.name}
                    </h3>
                    {/* Olfactory Family */}
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                      {perfume.olfactoryFamily[locale]}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {perfume.description[locale]}
                    </p>
                  </div>

                  {/* Quick Action Button to WhatsApp */}
                  <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-2">
                    <a
                      href={getWhatsAppPerfumeLink(perfume)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{t.catalog.consultAvailability}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveModalPerfume(perfume)}
                      className="p-2.5 rounded-xl border border-zinc-800 hover:border-amber-500/50 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                      title={t.catalog.viewDetails}
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {activeModalPerfume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalPerfume(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer z-10"
              aria-label={t.catalog.close}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Perfume Big Image */}
              <div className="md:col-span-5 relative aspect-square w-full rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-6 flex items-center justify-center border border-zinc-800">
                <Image
                  src={activeModalPerfume.image}
                  alt={`${activeModalPerfume.brand} - ${activeModalPerfume.name}`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Modal Content */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <div className="inline-block text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                    {activeModalPerfume.brand}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeModalPerfume.name}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1 font-medium">
                    {activeModalPerfume.olfactoryFamily[locale]}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {activeModalPerfume.description[locale]}
                </p>

                {/* Olfactory Notes Pyramid */}
                <div className="bg-zinc-900/80 rounded-2xl p-4 border border-zinc-800 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.catalog.notes}</span>
                  </h4>
                  <div className="text-xs space-y-1.5">
                    <div>
                      <span className="font-semibold text-zinc-200">
                        {t.catalog.topNotes}:
                      </span>{" "}
                      <span className="text-zinc-400">
                        {activeModalPerfume.notes.top[locale]}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-zinc-200">
                        {t.catalog.heartNotes}:
                      </span>{" "}
                      <span className="text-zinc-400">
                        {activeModalPerfume.notes.heart[locale]}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-zinc-200">
                        {t.catalog.baseNotes}:
                      </span>{" "}
                      <span className="text-zinc-400">
                        {activeModalPerfume.notes.base[locale]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bullet Features */}
                <div className="space-y-1.5">
                  {activeModalPerfume.features[locale].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Order Action */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppPerfumeLink(activeModalPerfume)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.catalog.shareWhatsApp}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
