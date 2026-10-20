import { Hero } from "@/components/Hero";
import { CatalogSection } from "@/components/CatalogSection";
import { BusinessCardSection } from "@/components/BusinessCardSection";
import { AboutSection } from "@/components/AboutSection";
import { LocationSection } from "@/components/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CatalogSection />
      <BusinessCardSection />
      <AboutSection />
      <LocationSection />
    </>
  );
}
