/** Business data for Perfumery Santay */
export const SITE = {
  name: "Perfumery Santay",
  owner: "Angel Santay",
  taglineEs: "Perfumes de Diseñador para Hombre y Mujer",
  taglineEn: "Designer Fragrances for Men and Women",
  phoneDisplay: "(737) 384-1191",
  phoneTel: "+17373841191",
  whatsappNumber: "17373841191",
  instagramHandle: "Perfumery_Santay",
  instagramUrl: "https://www.instagram.com/Perfumery_Santay",
  street: "1500 S I-35 Frontage Rd #108",
  city: "Round Rock",
  region: "TX",
  postalCode: "78681",
  country: "US",
  fullAddress: "1500 S I-35 Frontage Rd #108, Round Rock, TX 78681",
  hours: [
    { days: ["Monday - Saturday", "Lunes - Sábado"], hours: "10:00 AM - 8:00 PM" },
    { days: ["Sunday", "Domingo"], hours: "11:00 AM - 6:00 PM" },
  ],
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SITE.name} ${SITE.fullAddress}`
)}`;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${SITE.street} ${SITE.city} ${SITE.region} ${SITE.postalCode}`
)}&z=15&output=embed`;

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${SITE.phoneTel}`;
export const smsLink = (message: string) =>
  `sms:${SITE.phoneTel}?&body=${encodeURIComponent(message)}`;
