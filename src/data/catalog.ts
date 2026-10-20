export type GenderCategory = "all" | "women" | "men" | "unisex";
export type BrandFilter = "all" | "Louis Vuitton" | "Valentino" | "YSL" | "Paco Rabanne" | "Jean Paul Gaultier" | "Bond No. 9" | "Burberry" | "Creed" | "Lancôme" | "Parfums de Marly" | "Prada" | "Versace";

export interface PerfumeItem {
  id: string;
  name: string;
  brand: string;
  category: "women" | "men" | "unisex";
  image: string;
  olfactoryFamily: {
    es: string;
    en: string;
  };
  notes: {
    top: { es: string; en: string };
    heart: { es: string; en: string };
    base: { es: string; en: string };
  };
  description: {
    es: string;
    en: string;
  };
  features: {
    es: string[];
    en: string[];
  };
  isFeatured?: boolean;
}

export const PERFUMES_CATALOG: PerfumeItem[] = [
  {
    id: "lv-imagination",
    name: "Imagination",
    brand: "Louis Vuitton",
    category: "men",
    image: "/perfumes/louis-vuitton-imagination.jpg",
    olfactoryFamily: {
      es: "Cítrica Aromática Ámbar",
      en: "Citrus Aromatic Amber",
    },
    notes: {
      top: { es: "Cidra de Calabria, Bergamota, Naranja Siciliana", en: "Calabrian Citron, Bergamot, Sicilian Orange" },
      heart: { es: "Jengibre Nigeriano, Canela de Ceilán, Neroli de Túnez", en: "Nigerian Ginger, Ceylon Cinnamon, Tunisian Neroli" },
      base: { es: "Ambroxan, Té Negro de China, Madera de Guayaco", en: "Ambroxan, Chinese Black Tea, Guaiac Wood" },
    },
    description: {
      es: "Una obra maestra de frescura contemporánea y elegancia pura. Despierta los sentidos con un acorde luminoso de cítricos italianos contrastado con el misterio del té negro y el magnetismo del ambroxan.",
      en: "A masterpiece of contemporary freshness and pure elegance. Awakens the senses with a luminous Italian citrus accord contrasted by mysterious black tea and alluring ambroxan.",
    },
    features: {
      es: ["Alta fijación y proyección refinada", "Esencia de lujo absoluto para ocasiones especiales", "100% Auténtico de diseñador"],
      en: ["High longevity and refined sillage", "Ultimate luxury signature for special occasions", "100% Authentic designer"],
    },
    isFeatured: true,
  },
  {
    id: "lv-ombre-nomade",
    name: "Ombre Nomade",
    brand: "Louis Vuitton",
    category: "unisex",
    image: "/perfumes/louis-vuitton-ombre-nomade.jpg",
    olfactoryFamily: {
      es: "Ámbar Amaderada Oriental",
      en: "Amber Woody Oriental",
    },
    notes: {
      top: { es: "Frambuesa Silvestre, Azafrán Exótico", en: "Wild Raspberry, Exotic Saffron" },
      heart: { es: "Madera de Oud (Agarwood), Rosa Damascena", en: "Oud Wood (Agarwood), Damask Rose" },
      base: { es: "Benjuí, Incienso Ahumado, Cuero y Abedul", en: "Benzoin, Smoky Incense, Leather & Birch" },
    },
    description: {
      es: "Un viaje sensorial a través de las arenas ardientes del desierto. La suntuosa combinación de madera de oud puro, volutas de incienso y notas de frambuesa crean una fragancia opulenta e inolvidable.",
      en: "A sensory voyage across burning desert sands. The sumptuous blend of pure oud wood, swirls of incense, and dark raspberry creates an opulent and indelible fragrance.",
    },
    features: {
      es: ["Presencia magnética e intensa", "Madera de Oud natural y acordes ahumados", "Perfume de nicho de altísimo prestigio"],
      en: ["Magnetic and intense presence", "Natural Oud wood and smoky accords", "Ultra-prestige niche perfume"],
    },
    isFeatured: true,
  },
  {
    id: "lv-limmensite",
    name: "L'Immensité",
    brand: "Louis Vuitton",
    category: "men",
    image: "/perfumes/louis-vuitton-limmensite.jpg",
    olfactoryFamily: {
      es: "Oriental Especiada Fresca",
      en: "Oriental Fresh Spicy",
    },
    notes: {
      top: { es: "Pomelo Brillante, Jengibre Fresco, Bergamota", en: "Bright Grapefruit, Fresh Ginger, Bergamot" },
      heart: { es: "Romero Aromático, Salvia, Notas Acuáticas", en: "Aromatic Rosemary, Sage, Water Notes" },
      base: { es: "Ambroxan, Ládano Español, Ámbar Cálido", en: "Ambroxan, Spanish Labdanum, Warm Amber" },
    },
    description: {
      es: "Inspirado en la inmensidad del horizonte y los nuevos comienzos. Fusiona un golpe chispeante de jengibre y pomelo con un fondo ambarino sensual y vigorizante.",
      en: "Inspired by the vastness of the horizon and new horizons. Merges a sparkling kick of ginger and grapefruit with a sensual, invigorating amber base.",
    },
    features: {
      es: ["Vibrante, moderno y versátil", "Ideal tanto para el día a día como eventos formales", "Calidad artesanal francesa"],
      en: ["Vibrant, modern, and versatile", "Ideal for daily wear and formal events alike", "French artisanal prestige"],
    },
  },
  {
    id: "parfums-de-marly-delina",
    name: "Delina",
    brand: "Parfums de Marly",
    category: "women",
    image: "/perfumes/parfums-de-marly-delina.jpg",
    olfactoryFamily: {
      es: "Floral Frutal Sensual",
      en: "Sensual Floral Fruity",
    },
    notes: {
      top: { es: "Lichi Exótico, Ruibarbo, Bergamota, Nuez Moscada", en: "Exotic Lychee, Rhubarb, Bergamot, Nutmeg" },
      heart: { es: "Rosa Turca, Peonía, Lirio de los Valles, Vainilla", en: "Turkish Rose, Peony, Lily of the Valley, Vanilla" },
      base: { es: "Cashmeran, Cedro, Almizcle Blanco, Vetiver", en: "Cashmeran, Cedar, White Musk, Vetiver" },
    },
    description: {
      es: "La cumbre de la feminidad y el romanticismo de alta gama. Un bouquet floral dominado por la rosa turca y el lichi jugoso con una sofisticación cautivadora que nunca pasa desapercibida.",
      en: "The pinnacle of high-end femininity and romance. A floral bouquet reigned by Turkish rose and juicy lychee, exuding captivating sophistication that never goes unnoticed.",
    },
    features: {
      es: ["Uno de los perfumes femeninos más elogiados del mundo", "Estela prolongada y adictiva", "Frasco icónico de realeza francesa"],
      en: ["One of the world's most acclaimed women's perfumes", "Addictive, long-lasting trail", "Iconic French royalty bottle"],
    },
    isFeatured: true,
  },
  {
    id: "creed-iris-tubereuse",
    name: "Iris Tubéreuse (Acqua Originale)",
    brand: "Creed",
    category: "women",
    image: "/perfumes/creed-iris.jpg",
    olfactoryFamily: {
      es: "Floral Verde Amaderada",
      en: "Floral Green Woody",
    },
    notes: {
      top: { es: "Gálbano, Hojas de Violeta, Naranja", en: "Galbanum, Violet Leaves, Orange" },
      heart: { es: "Tuberosa de la India, Lirio de Florencia, Lirio de los Valles", en: "Indian Tuberose, Florentine Iris, Lily of the Valley" },
      base: { es: "Vainilla Bourbon, Almizcle Blanco, Flor de Azahar", en: "Bourbon Vanilla, White Musk, Orange Blossom" },
    },
    description: {
      es: "Una oda botánica de la histórica casa Creed que une el romance toscano y la exuberancia de la India. El lirio noble y la cremosa tuberosa crean una armonía celestial y etérea.",
      en: "A botanical ode by the historic House of Creed linking Tuscan romance with Indian richness. Noble iris and creamy tuberose create a heavenly, ethereal harmony.",
    },
    features: {
      es: ["Tradición centenaria de la realeza", "Ingredientes botánicos de máxima pureza", "Aroma distinguido y sublime"],
      en: ["Centuries-old royal heritage", "Utmost botanical purity", "Distinguished and sublime scent"],
    },
    isFeatured: true,
  },
  {
    id: "bond-no-9-sutton-place",
    name: "Sutton Place",
    brand: "Bond No. 9",
    category: "men",
    image: "/perfumes/bond-no-9-sutton-place.jpg",
    olfactoryFamily: {
      es: "Ámbar Cuero Especiada",
      en: "Amber Leather Spicy",
    },
    notes: {
      top: { es: "Bergamota, Mandarina, Pimienta Rosa, Casis", en: "Bergamot, Tangerine, Pink Pepper, Cassis" },
      heart: { es: "Pachulí, Jazmín, Azucena, Cuero Fino", en: "Patchouli, Jasmine, Lily, Fine Leather" },
      base: { es: "Ámbar, Almizcle, Vainilla Cálida", en: "Amber, Musk, Warm Vanilla" },
    },
    description: {
      es: "Rinde tributo a la enclave diplomático y cosmopolita de Sutton Place en Manhattan. Una fragancia seductora, decidida y con carácter masculino inquebrantable.",
      en: "A homage to Manhattan's quiet diplomatic and cosmopolitan haven. A seductive, assertive fragrance with an uncompromising masculine character.",
    },
    features: {
      es: ["Estilo neoyorquino moderno y exclusivo", "Notas cálidas de cuero y ámbar profundo", "Carácter ejecutivo e imponente"],
      en: ["Modern exclusive New York flair", "Warm leather and deep amber chords", "Commanding executive presence"],
    },
  },
  {
    id: "bond-no-9-new-york-nights",
    name: "New York Nights",
    brand: "Bond No. 9",
    category: "unisex",
    image: "/perfumes/bond-no-9-new-york.jpg",
    olfactoryFamily: {
      es: "Ámbar Vainilla Gourmand",
      en: "Amber Vanilla Gourmand",
    },
    notes: {
      top: { es: "Jazmín, Gardenia, Clavel de la Noche", en: "Jasmine, Gardenia, Carnation" },
      heart: { es: "Pachulí, Sándalo Cremoso, Flores Marinas", en: "Patchouli, Creamy Sandalwood, Marine Floral" },
      base: { es: "Caramelo Líquido, Café Espresso, Vainilla", en: "Liquid Caramel, Espresso Coffee, Vanilla" },
    },
    description: {
      es: "Inspirada en el hipnótico horizonte nocturno iluminado de la ciudad de Nueva York. Un festín olfativo con deliciosos toques de café, caramelo y flores radiantes.",
      en: "Inspired by the kaleidoscopic, illuminated Manhattan skyline at night. An intoxicating gourmand feast with accents of espresso, caramel, and glowing florals.",
    },
    features: {
      es: ["Inconfundible perfil dulce y seductor", "Para quienes buscan un perfume memorable de noche", "Diseño icónico de estrella neoyorquina"],
      en: ["Unmistakable sweet, seductive profile", "For those seeking an unforgettable night scent", "Iconic NYC star silhouette bottle"],
    },
    isFeatured: true,
  },
  {
    id: "valentino-donna-born-in-roma",
    name: "Donna Born in Roma",
    brand: "Valentino",
    category: "women",
    image: "/perfumes/valentino-donna-born-in-roma.jpg",
    olfactoryFamily: {
      es: "Ámbar Floral Moderna",
      en: "Amber Floral Modern",
    },
    notes: {
      top: { es: "Grosellas Negras, Pimienta Rosa, Bergamota", en: "Blackcurrant, Pink Pepper, Bergamot" },
      heart: { es: "Trío de Jazmines (Grandiflorum, Sambac, Té de Jazmín)", en: "Jasmine Trio (Grandiflorum, Sambac, Jasmine Tea)" },
      base: { es: "Vainilla Bourbon, Cashmeran, Madera de Guayaco", en: "Bourbon Vanilla, Cashmeran, Guaiac Wood" },
    },
    description: {
      es: "Un tributo a la alta costura romana y la actitud urbana contemporánea. Las tres variedades de jazmín se funden con la suntuosa vainilla bourbon y toques amaderados ahumados.",
      en: "A tribute to Roman haute couture and fearless modern street style. Three facets of opulent jasmine mingle with warm Bourbon vanilla and smoky woods.",
    },
    features: {
      es: ["Frasco esculpido con las emblemáticas tachuelas Valentino", "Fragancia insignia juvenil, sensual y chic", "Excelente duración en piel y ropa"],
      en: ["Sculpted with iconic Valentino rockstuds", "Youthful, chic, and sultry signature", "Outstanding projection and longevity"],
    },
    isFeatured: true,
  },
  {
    id: "valentino-donna-green-stravaganza",
    name: "Donna Born in Roma Green Stravaganza",
    brand: "Valentino",
    category: "women",
    image: "/perfumes/valentino-born-in-roma-donna-green-stravaganza.jpg",
    olfactoryFamily: {
      es: "Floral Ámbar Amaderada",
      en: "Floral Amber Woody",
    },
    notes: {
      top: { es: "Té Lapsang Souchong Ahumado", en: "Smoky Lapsang Souchong Tea" },
      heart: { es: "Absoluto de Jazmín Sambac", en: "Jasmine Sambac Absolute" },
      base: { es: "Extracto de Vainilla de Madagascar", en: "Madagascar Vanilla Extract" },
    },
    description: {
      es: "Una aventura extravagante inspirada en los exuberantes jardines de Roma. El intrigante aroma del té negro ahumado se entrelaza con el resplandor solar del jazmín y la calidez de la vainilla.",
      en: "An extravagant escapade through Rome's lush hidden gardens. The intriguing facet of smoky tea blends seamlessly with solar jasmine and Madagascar vanilla.",
    },
    features: {
      es: ["Aroma distintivo y magnético", "Diseño verde esmeralda deslumbrante", "Toque audaz y no convencional"],
      en: ["Distinctive, magnetic scent trail", "Dazzling emerald rockstud design", "Bold and unconventional appeal"],
    },
  },
  {
    id: "valentino-born-in-roma-uomo",
    name: "Uomo Born in Roma",
    brand: "Valentino",
    category: "men",
    image: "/perfumes/valentino-born-in-roma-uomo.jpg",
    olfactoryFamily: {
      es: "Amaderada Especiada Aromática",
      en: "Woody Spicy Aromatic",
    },
    notes: {
      top: { es: "Notas Minerales, Sal Marina, Hojas de Violeta", en: "Mineral Chords, Sea Salt, Violet Leaves" },
      heart: { es: "Salvia Esclarea, Jengibre Picante", en: "Clary Sage, Spicy Ginger" },
      base: { es: "Vetiver Ahumado, Notas Amaderadas Nobles", en: "Smoky Vetiver, Noble Wood Notes" },
    },
    description: {
      es: "El equilibrio perfecto entre la elegancia clásica italiana y una fresca irreverencia urbana. El acorde mineral salino aporta un dinamismo adictivo y sumamente masculino.",
      en: "The seamless harmony between classic Italian elegance and disruptive urban cool. The salty mineral accord lends an addictive, crisp masculine dynamism.",
    },
    features: {
      es: ["Fresco, sofisticado y versátil", "Firma olfativa moderna para caballeros", "Botella con tachuelas icónicas"],
      en: ["Crisp, sophisticated, versatile", "Modern signature for gentlemen", "Iconic rockstud architecture"],
    },
  },
  {
    id: "valentino-born-in-roma-intense-uomo",
    name: "Uomo Born in Roma Intense",
    brand: "Valentino",
    category: "men",
    image: "/perfumes/valentino-born-in-roma-intense-uomo.jpg",
    olfactoryFamily: {
      es: "Ámbar Fougere Vainilla",
      en: "Amber Fougere Vanilla",
    },
    notes: {
      top: { es: "Vainilla Bourbon Envolvente", en: "Enveloping Bourbon Vanilla" },
      heart: { es: "Lavandín de Provenza", en: "Provençal Lavandin" },
      base: { es: "Vetiver Ahumado Profundo", en: "Deep Smoky Vetiver" },
    },
    description: {
      es: "Una celebración de la noche en la Ciudad Eterna. Esta reinterpretación intensa eleva la seducción con una sobredosis de vainilla bourbon y lavandín que deja huella donde vayas.",
      en: "A celebration of the nocturnal energy in the Eternal City. This intense reinvention pushes seduction forward with Bourbon vanilla overdoses and smoky lavandin.",
    },
    features: {
      es: ["Intensidad nocturna y seducción garantizada", "Proyección sobresaliente en climas frescos", "Sensación cálida y lujosa"],
      en: ["Nighttime magnetism and assured seduction", "Remarkable sillage in cool weather", "Warm, opulent luxury feel"],
    },
    isFeatured: true,
  },
  {
    id: "ysl-libre-edp",
    name: "Libre Eau de Parfum",
    brand: "YSL",
    category: "women",
    image: "/perfumes/ysl-libre-eau-de-parfum.jpg",
    olfactoryFamily: {
      es: "Floral Ámbar Lavanda",
      en: "Amber Floral Lavender",
    },
    notes: {
      top: { es: "Aceite de Mandarina, Lavanda Francesa, Grosella Negra", en: "Mandarin Oil, French Lavender, Blackcurrant" },
      heart: { es: "Azahar de Marruecos, Jazmín Sambac", en: "Moroccan Orange Blossom, Jasmine Sambac" },
      base: { es: "Extracto de Vainilla de Madagascar, Cedro, Ámbar Gris", en: "Madagascar Vanilla Extract, Cedar, Ambergris" },
    },
    description: {
      es: "El perfume de la mujer fuerte, audaz y auténticamente libre. La sensualidad ardiente de la flor de azahar marroquí combinada con la audacia de la lavanda francesa.",
      en: "The fragrance of a woman who is fierce, bold, and unapologetically free. The blazing sensuality of Moroccan orange blossom paired with bold French lavender.",
    },
    features: {
      es: ["Frasco joya con el legendario logo Cassandra dorado", "Elegancia empoderada y moderna", "Gran estela y fijación insuperable"],
      en: ["Jeweled bottle with gilded iconic Cassandra logo", "Empowering modern elegance", "Outstanding longevity and trail"],
    },
    isFeatured: true,
  },
  {
    id: "ysl-libre-le-parfum",
    name: "Libre Le Parfum",
    brand: "YSL",
    category: "women",
    image: "/perfumes/ysl-libre-le-parfum.jpg",
    olfactoryFamily: {
      es: "Ámbar Floral Especiada Cálida",
      en: "Warm Spicy Amber Floral",
    },
    notes: {
      top: { es: "Acorde de Azafrán de Ourika, Jengibre, Mandarina", en: "Ourika Saffron Accord, Ginger, Mandarin" },
      heart: { es: "Flor de Azahar, Lavanda Francesa", en: "Orange Blossom, French Lavender" },
      base: { es: "Miel Bourbon, Vainilla de Madagascar, Vetiver", en: "Bourbon Honey, Madagascar Vanilla, Vetiver" },
    },
    description: {
      es: "La versión más cálida, ardiente y concentrada de la familia Libre. El azafrán recogido en los jardines comunitarios de YSL Ourika en Marruecos le confiere un halo dorado inolvidable.",
      en: "The warmest, fiery, and most concentrated interpretation of the Libre line. Saffron hand-harvested in YSL's Ourika Gardens lends it an unforgettable golden aura.",
    },
    features: {
      es: ["La mayor concentración de la saga Libre", "Matices dorados y golosos de miel y azafrán", "Perfecto para noches memorables"],
      en: ["Highest concentration in the Libre lineup", "Golden honeyed and saffron facets", "Ideal for unforgettable evenings"],
    },
  },
  {
    id: "ysl-myslf-edp",
    name: "MYSLF Eau de Parfum",
    brand: "YSL",
    category: "men",
    image: "/perfumes/ysl-myslf-eau-de-parfum.jpg",
    olfactoryFamily: {
      es: "Amaderada Floral Cítrica",
      en: "Woody Floral Citrus",
    },
    notes: {
      top: { es: "Acorde Fresco de Bergamota de Calabria", en: "Fresh Calabrian Bergamot Chords" },
      heart: { es: "Flor de Azahar Tunecina Radiante", en: "Radiant Tunisian Orange Blossom" },
      base: { es: "Ambrofix Ambarino, Pachulí de Indonesia", en: "Ambrofix Amber, Indonesian Patchouli" },
    },
    description: {
      es: "Una declaración de masculinidad contemporánea, libre de estereotipos. Una combinación luminosa de bergamota chispeante, corazón floral de azahar y fondo amaderado sensual.",
      en: "A declaration of contemporary masculinity, free from stereotypes. A luminous clash between sparkling bergamot, orange blossom heart, and sensual amber woods.",
    },
    features: {
      es: ["Limpieza, frescura y seducción magnética", "Frasco monolítico negro de alta costura", "El nuevo clásico imprescindible de YSL"],
      en: ["Clean, crisp, yet magnetically sensual", "Monolithic couture black bottle", "YSL's newest essential modern classic"],
    },
    isFeatured: true,
  },
  {
    id: "ysl-y-edp",
    name: "Y Eau de Parfum",
    brand: "YSL",
    category: "men",
    image: "/perfumes/ysl-y-eau-de-parfum.jpg",
    olfactoryFamily: {
      es: "Aromática Fougere Amaderada",
      en: "Aromatic Fougere Woody",
    },
    notes: {
      top: { es: "Manzana Verde, Jengibre, Bergamota", en: "Green Apple, Ginger, Bergamot" },
      heart: { es: "Salvia, Bayas de Enebro, Geranio", en: "Sage, Juniper Berries, Geranium" },
      base: { es: "Madera de Ámbar, Haba Tonka, Cedro, Incienso", en: "Amberwood, Tonka Bean, Cedar, Olibanum" },
    },
    description: {
      es: "Dedicado al hombre que se atreve a soñar y a cumplir sus metas. Una fragancia intensamente fresca y amaderada, con una apertura jugosa de manzana y un fondo profundo que cautiva.",
      en: "Dedicated to the man who dares to dream and achieve. An intensely fresh and woody fragrance, highlighted by juicy crisp apple and a deeply captivating base.",
    },
    features: {
      es: ["Increíble proyección y cumplidos garantizados", "Versatilidad total durante todo el año", "Uno de los perfumes masculinos más vendidos del mundo"],
      en: ["Incredible projection & guaranteed compliments", "All-year-round versatility", "One of the best-selling men's fragrances worldwide"],
    },
    isFeatured: true,
  },
  {
    id: "paco-rabanne-1-million-elixir",
    name: "1 Million Elixir",
    brand: "Paco Rabanne",
    category: "men",
    image: "/perfumes/paco-rabanne-1-million-elixir.jpg",
    olfactoryFamily: {
      es: "Ámbar Amaderada Intensa",
      en: "Intense Amber Woody",
    },
    notes: {
      top: { es: "Manzana Crujiente, Hojas de Davana Silvestre", en: "Crisp Apple, Wild Davana Leaves" },
      heart: { es: "Rosa Damascena, Osmanto, Madera de Cedro", en: "Damask Rose, Osmanthus, Cedarwood" },
      base: { es: "Vainilla Negra Absoluta, Haba Tonka, Pachulí", en: "Black Vanilla Absolute, Tonka Bean, Patchouli" },
    },
    description: {
      es: "La cúspide de la intensidad en la icónica saga del lingote de oro. Ingredientes cosechados a mano dan forma a un elixir irresistiblemente dulce, profundo y misterioso.",
      en: "The pinnacle of intensity in the iconic gold ingot lineage. Hand-picked ingredients craft an elixir that is irresistibly sweet, deep, and mysteriously captivating.",
    },
    features: {
      es: ["Frasco icónico de lingote de oro con triángulo enjoyado", "Dulzura embriagadora y máxima duración", "Especial para noches de fiesta y citas"],
      en: ["Iconic gold bar with black jewel emblem", "Intoxicating sweetness and maximum longevity", "Perfect for nightlife and dates"],
    },
    isFeatured: true,
  },
  {
    id: "paco-rabanne-1-million-royal",
    name: "1 Million Royal",
    brand: "Paco Rabanne",
    category: "men",
    image: "/perfumes/paco-rabanne-1-million-royal.jpg",
    olfactoryFamily: {
      es: "Ámbar Amaderada Aromática",
      en: "Amber Woody Aromatic",
    },
    notes: {
      top: { es: "Cardamomo Especiado, Mandarina, Bergamota", en: "Spicy Cardamom, Tangerine, Bergamot" },
      heart: { es: "Lavanda Francesa, Salvia, Hojas de Violeta", en: "French Lavender, Sage, Violet Leaves" },
      base: { es: "Benjuí Cálido, Madera de Cedro, Pachulí", en: "Warm Benzoin, Cedarwood, Patchouli" },
    },
    description: {
      es: "Reclama tu trono con una fragancia audaz que desafía lo convencional. La frescura vigorizante de la lavanda se une a la calidez balsámica del benjuí para un efecto regio y distinguido.",
      en: "Claim your stage with an audacious fragrance defying conventions. Lavender's invigorating energy meets balsam benzoin warmth for a regal, distinguished impact.",
    },
    features: {
      es: ["Carácter triunfador y regio", "Aroma moderno que atrae todas las miradas", "Diseño con rubí rojo majestuoso"],
      en: ["Regal, triumphant character", "Modern scent commanding every glance", "Majestic red ruby detail on gold bar"],
    },
  },
  {
    id: "jpg-divine",
    name: "Gaultier Divine",
    brand: "Jean Paul Gaultier",
    category: "women",
    image: "/perfumes/jean-paul-gaultier-divine.jpg",
    olfactoryFamily: {
      es: "Floral Marina Salada Gourmand",
      en: "Salty Marine Floral Gourmand",
    },
    notes: {
      top: { es: "Brisa Marina Salada, Bergamota, Frutos Rojos", en: "Salty Marine Breeze, Bergamot, Red Berries" },
      heart: { es: "Lirio de los Valles, Jazmín Solar, Ylang-Ylang", en: "Lily, Solar Jasmine, Ylang-Ylang" },
      base: { es: "Merengue Dulce, Almizcle Blanco, Pachulí", en: "Sweet Meringue, White Musk, Patchouli" },
    },
    description: {
      es: "Una oda a la mujer como una auténtica diosa dorada. Un contraste hipnótico entre una brisa salada marina y un delicioso corazón de lirio blanco con merengue crujiente.",
      en: "A celebration of woman as a radiant golden goddess. A hypnotic contrast between a salty sea breeze and a delicious heart of white lily embraced by crisp sweet meringue.",
    },
    features: {
      es: ["Corsé dorado emblemático de Jean Paul Gaultier", "Acorde salado-dulce único e irresistible", "Femenino, radiante e inolvidable"],
      en: ["Iconic Jean Paul Gaultier golden corset", "Unique, addictive sweet-salty harmony", "Feminine, radiant, and unforgettable"],
    },
    isFeatured: true,
  },
  {
    id: "jpg-le-male-elixir",
    name: "Le Male Elixir",
    brand: "Jean Paul Gaultier",
    category: "men",
    image: "/perfumes/jean-paul-gaultier-elixir.jpg",
    olfactoryFamily: {
      es: "Ámbar Fougere Cálida y Seductora",
      en: "Warm Seductive Amber Fougere",
    },
    notes: {
      top: { es: "Lavanda Fina, Menta Refrescante", en: "Fine Lavender, Refreshing Mint" },
      heart: { es: "Vainilla Cálida, Benjuí Balsámico", en: "Warm Vanilla, Balsamic Benzoin" },
      base: { es: "Miel Dorada, Haba Tonka Tostada, Tabaco Suave", en: "Golden Honey, Roasted Tonka Bean, Gentle Tobacco" },
    },
    description: {
      es: "El calor sube a bordo. Un marinero incandescente vestido con un torso estriado bañado en oro, cuyo rastro de miel, vainilla y haba tonka despierta pasiones absolutas.",
      en: "Heat rises on deck. An incandescent sailor clad in gold-striped torso armor, whose trail of golden honey, tonka bean, and warm vanilla ignites pure passion.",
    },
    features: {
      es: ["Efecto ultra-seductor y magnético", "Uno de los perfumes masculinos más virales y deseados", "Excelente rendimiento y proyección potente"],
      en: ["Ultra-seductive and magnetic allure", "One of the most viral and sought-after men's scents", "Extraordinary performance and potent trail"],
    },
    isFeatured: true,
  },
  {
    id: "burberry-her",
    name: "Her Eau de Parfum",
    brand: "Burberry",
    category: "women",
    image: "/perfumes/burberry-her.jpg",
    olfactoryFamily: {
      es: "Floral Frutal Gourmand",
      en: "Floral Fruity Gourmand",
    },
    notes: {
      top: { es: "Fresa, Frambuesa, Mora, Cereza Ácida, Grosella Negra", en: "Strawberry, Raspberry, Blackberry, Sour Cherry, Cassis" },
      heart: { es: "Violeta Suave, Jazmín Radiante", en: "Soft Violet, Radiant Jasmine" },
      base: { es: "Almizcle, Ámbar Cálido, Madera de Roble, Cashmeran", en: "Musk, Warm Amber, Oak Wood, Cashmeran" },
    },
    description: {
      es: "La encarnación del espíritu vibrante, optimista y juvenil de Londres. Una explosión deliciosa de frutos rojos enriquecida por un fondo ambarino y almizclado sumamente acogedor.",
      en: "The embodiment of London's vibrant, spirited, and youthful vibe. A burst of luscious red berries deepened by an airy amber-musk drydown.",
    },
    features: {
      es: ["Aroma adictivo a frutos del bosque azucarados", "Perfecto para uso diario y ocasiones especiales", "Estilo británico contemporáneo"],
      en: ["Addictive candied berry aroma", "Ideal for casual days and nights out", "Contemporary British sophistication"],
    },
  },
  {
    id: "lancome-la-vie-est-belle",
    name: "La Vie Est Belle",
    brand: "Lancôme",
    category: "women",
    image: "/perfumes/lancome-la-vie-est-belle.jpg",
    olfactoryFamily: {
      es: "Floral Frutal Gourmand",
      en: "Floral Fruity Gourmand",
    },
    notes: {
      top: { es: "Grosellas Negras, Pera Jugosa", en: "Blackcurrant, Juicy Pear" },
      heart: { es: "Iris Pallida de Florencia, Flor de Azahar, Jazmín", en: "Florentine Iris Pallida, Orange Blossom, Jasmine" },
      base: { es: "Praliné Dulce, Vainilla Bourbon, Haba Tonka, Pachulí", en: "Sweet Praline, Bourbon Vanilla, Tonka Bean, Patchouli" },
    },
    description: {
      es: "Una declaración universal a la felicidad y a la belleza de la vida. Su noble iris pallida entrelazado con praliné dulce y vainilla crea una sonrisa olfativa cautivadora.",
      en: "A universal declaration of happiness and life's sweetness. Noble Iris Pallida fused with sweet praline and comforting vanilla forms an irresistible olfactory smile.",
    },
    features: {
      es: ["Frasco icónico de 'la sonrisa de cristal'", "Durabilidad estelar durante todo el día", "Uno de los perfumes femeninos más queridos del mundo"],
      en: ["Iconic 'crystal smile' glass bottle", "Stellar all-day durability", "One of the most universally loved fragrances"],
    },
    isFeatured: true,
  },
  {
    id: "prada-paradoxe",
    name: "Paradoxe Eau de Parfum",
    brand: "Prada",
    category: "women",
    image: "/perfumes/prada-paradoxe.jpg",
    olfactoryFamily: {
      es: "Ámbar Floral Sofisticada",
      en: "Sophisticated Amber Floral",
    },
    notes: {
      top: { es: "Pera Crujiente, Mandarina, Bergamota de Calabria", en: "Crisp Pear, Tangerine, Calabrian Bergamot" },
      heart: { es: "Flor de Azahar, Neroli, Esencia de Jazmín Sambac", en: "Orange Blossom, Neroli, Jasmine Sambac" },
      base: { es: "Infusión de Vainilla Bourbon, Ámbar Ambrofix, Almizcle Blanco Serenolide", en: "Bourbon Vanilla Infusion, Ambrofix Amber, Serenolide White Musk" },
    },
    description: {
      es: "Explora las múltiples dimensiones de la mujer que nunca es la misma, pero siempre ella misma. El primer extracto de yema de neroli de Prada aporta frescura viva a un fondo cálido y envolvente.",
      en: "Explores the infinite facets of a woman never the same, yet always herself. Prada's bio-converted neroli bud captures the crisp freshness before warming into comforting vanilla.",
    },
    features: {
      es: ["Innovadora botella triangular que imita el logo icónico de Prada", "Fragancia limpia, fresca y profundamente femenina", "Elegancia minimalista y vanguardista"],
      en: ["Avant-garde triangular bottle evoking Prada's logo", "Clean, luminous, and deeply feminine", "Minimalist high-fashion luxury"],
    },
    isFeatured: true,
  },
  {
    id: "versace-bright-crystal",
    name: "Bright Crystal",
    brand: "Versace",
    category: "women",
    image: "/perfumes/versace-bright-crystal.jpg",
    olfactoryFamily: {
      es: "Floral Frutal Acuática",
      en: "Floral Fruity Aquatic",
    },
    notes: {
      top: { es: "Yuzu Japonés, Granada Brillante, Acorde de Hielo", en: "Japanese Yuzu, Bright Pomegranate, Icy Chords" },
      heart: { es: "Peonía, Flor de Loto, Magnolia", en: "Peony, Lotus Flower, Magnolia" },
      base: { es: "Almizcle Suave, Caoba, Ámbar Vegetal", en: "Soft Musk, Mahogany Wood, Plant Amber" },
    },
    description: {
      es: "Una joya preciosa de rara belleza caracterizada por un aroma fresco, vibrante y floral. La sutileza del loto y la magnolia se combinan con la frescura helada del yuzu para deslumbrar con gracia.",
      en: "A precious gem of rare beauty marked by a fresh, vibrant, and luminous floral bouquet. Delicate lotus and magnolia meet crystalline yuzu freshness to shine with effortless grace.",
    },
    features: {
      es: ["Tapón tallado como un diamante gigante", "Frescura cristalina y femenina para cualquier hora", "Un éxito rotundo de la casa Versace"],
      en: ["Monumental crystal cut-gem stopper", "Crystalline and feminine daytime freshness", "A timeless sensation from Versace"],
    },
  },
];

export const CATEGORIES = [
  { id: "all", es: "Todos", en: "All" },
  { id: "women", es: "Para Dama", en: "Women's" },
  { id: "men", es: "Para Caballero", en: "Men's" },
  { id: "unisex", es: "Unisex / Exclusivos", en: "Unisex / Niche" },
] as const;
