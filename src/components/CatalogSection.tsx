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
import { waLink } from "@/lib/site";
import {
  Search,
  Sparkles,
  MessageCircle,
  X,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Package,
} from "lucide-react";

const ITEMS_PER_PAGE = 24;

export function CatalogSection() {
  const { t, locale } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<GenderCategory>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
        const matchesNumber = item.catalogNumber.toString() === query.replace("#", "");
        if (!matchesName && !matchesBrand && !matchesNumber) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPerfumes.length / ITEMS_PER_PAGE);
  const paginatedPerfumes = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPerfumes.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPerfumes, currentPage]);

  const handleCategoryChange = (cat: GenderCategory) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const getWhatsAppPerfumeLink = (perfume: PerfumeItem) => {
    const text =
      locale === "es"
        ? `Hola Angel Santay, me interesa consultar información y disponibilidad del perfume #${perfume.catalogNumber}: ${perfume.brand} - ${perfume.name} (${perfume.size} ${perfume.concentration}).`
        : `Hello Angel Santay, I would like to inquire about availability and details for perfume #${perfume.catalogNumber}: ${perfume.brand} - ${perfume.name} (${perfume.size} ${perfume.concentration}).`;
    return waLink(text);
  };

  return (
    <section id="catalog" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CATÁLOGO OFICIAL &bull; 230+ FRAGANCIAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.catalog.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            {t.catalog.subtitle}
          </p>
          <div className="pt-1">
            <span className="inline-block text-xs font-medium text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
              {t.catalog.noticeNoPrice}
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Buscar por nombre, marca o número (ej: Sauvage, Chanel, #21)..."
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brand Dropdown */}
            <div className="relative md:w-72">
              <select
                value={selectedBrand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="w-full py-3.5 pl-4 pr-10 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-sm focus:outline-none focus:border-amber-400 cursor-pointer appearance-none"
              >
                <option value="all">Todas las marcas ({allBrands.length})</option>
                {allBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand} ({PERFUMES_CATALOG.filter((p) => p.brand === brand).length})
                  </option>
                ))}
              </select>
              <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            </div>
          </div>

          {/* Gender / Category Tabs */}
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
                  onClick={() => handleCategoryChange(cat.id as GenderCategory)}
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

          {/* Results Status & Page Counter */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400 px-1 pt-1">
            <span>
              Mostrando <strong className="text-amber-400">{filteredPerfumes.length}</strong> de{" "}
              {PERFUMES_CATALOG.length} fragancias disponibles &bull; Página {currentPage} de {Math.max(1, totalPages)}
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {paginatedPerfumes.map((perfume) => (
              <div
                key={perfume.id}
                className="group relative rounded-3xl bg-zinc-950 border border-zinc-800/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Image Container with Badges */}
                <div
                  onClick={() => setActiveModalPerfume(perfume)}
                  className="relative aspect-square w-full bg-gradient-to-b from-zinc-900 to-black p-4 sm:p-6 flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  {/* Item number badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
                      #{perfume.catalogNumber}
                    </span>
                  </div>

                  {/* Gender pill tag */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-zinc-300 border border-zinc-700">
                      {perfume.category === "women"
                        ? "Dama"
                        : perfume.category === "men"
                        ? "Caballero"
                        : "Unisex"}
                    </span>
                  </div>

                  {/* Perfume Bottle Image from PDF */}
                  <div className="relative w-full h-full">
                    <Image
                      src={perfume.image}
                      alt={`${perfume.brand} - ${perfume.name}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-black text-[11px] font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {t.catalog.viewDetails}
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Brand */}
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-amber-400/90 line-clamp-1">
                      {perfume.brand}
                    </p>
                    {/* Perfume Name */}
                    <h3
                      onClick={() => setActiveModalPerfume(perfume)}
                      className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-2 mt-0.5 leading-snug"
                    >
                      {perfume.name}
                    </h3>
                    {/* Size and concentration specs */}
                    <div className="flex items-center gap-2 mt-2 text-[11px] text-zinc-400 font-medium">
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {perfume.concentration}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {perfume.size}
                      </span>
                    </div>
                  </div>

                  {/* Quick WhatsApp Action */}
                  <div className="pt-2 border-t border-zinc-800/80">
                    <a
                      href={getWhatsAppPerfumeLink(perfume)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{t.catalog.consultAvailability}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-amber-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page number buttons */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  return (
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 2
                  );
                })
                .map((page, idx, arr) => {
                  const prevPage = arr[idx - 1];
                  const hasGap = prevPage && page - prevPage > 1;

                  return (
                    <div key={page} className="flex items-center">
                      {hasGap && <span className="px-2 text-zinc-600 text-xs">...</span>}
                      <button
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                          currentPage === page
                            ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                            : "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
                        }`}
                      >
                        {page}
                      </button>
                    </div>
                  );
                })}
            </div>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-amber-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Página siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {activeModalPerfume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalPerfume(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer z-10"
              aria-label={t.catalog.close}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Perfume Big Image */}
              <div className="md:col-span-5 relative aspect-square w-full rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-6 flex items-center justify-center border border-zinc-800">
                <Image
                  src={activeModalPerfume.image}
                  alt={`${activeModalPerfume.brand} - ${activeModalPerfume.name}`}
                  fill
                  className="object-contain p-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Modal Content Details */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-black border border-amber-500/40 text-amber-400 mr-2">
                    Ref #{activeModalPerfume.catalogNumber}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                    {activeModalPerfume.brand}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {activeModalPerfume.name}
                  </h3>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 bg-zinc-900/80 rounded-xl p-3 border border-zinc-800 text-center">
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Presentación</p>
                    <p className="text-xs font-bold text-white mt-0.5">{activeModalPerfume.size}</p>
                  </div>
                  <div className="border-x border-zinc-800">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Concentración</p>
                    <p className="text-xs font-bold text-amber-400 mt-0.5">{activeModalPerfume.concentration}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Género</p>
                    <p className="text-xs font-bold text-white mt-0.5 uppercase">
                      {activeModalPerfume.category === "women"
                        ? "Dama"
                        : activeModalPerfume.category === "men"
                        ? "Caballero"
                        : "Unisex"}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Calidad de alta gama y fijación premium garantizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Empaque y presentación original de fábrica</span>
                  </div>
                </div>

                {/* WhatsApp Action */}
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
