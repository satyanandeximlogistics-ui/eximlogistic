export type Product = {
  id: string;
  name: string;
  productTitle: string;
  category: string;
  image: string;
  intro: string;
  keyQualitySpecs?: string[];
  premiumVarieties?: string[];
  premiumVarietiesTitle?: string;
  quality: string[];
  sourcingRegions: string[];
  types?: string[];
  whyBuy: string[];
  benefits: string[];
  marketDemand?: string[];
  applications: string[];
};

import chilliImage from "../assets/chilli1.jpg";
import coconutImage from "../assets/spieces/STJvq3R4Apb5uLoGPPmSIYK2PS0JZTOzIM9nb4axaTar8uk6PwoLQAec3OYlCUvGwRGqiLrC-rMvW2QfRNG9UtN35ib7rNbKfjYs5lam3OUW85igUGd4DcdbiEYQSO5CWhTPOWmVdBcfSWapI_o5wsBf4rR1C52_KIQwIA.jpg";
import spicesImage from "../assets/spieces/G0ZYH814Pv6GkccL5v0vQrpkEzgkThUyu8Js1wOYxU0KJxvtfnVQ6OBrcp5ncHIXo3I_rERgV8x5R9wP7iUxIJwD1RMErhj1asAtdrnoc6VZO8DLkCfJYEP40DtsaGnlJN036bjZcX06IugtQsvHJygah0QieG91DZtoJU.jpg";
import turmericImage from "../assets/turmeric2.jpg";
import papperImageOne from "../assets/papper1.jpg";
import papperImageTwo from "../assets/papper2.jpg";

export const productCategories = [
  { name: "Spices", image: spicesImage, productId: "spices" },
  { name: "Turmeric", image: turmericImage, productId: "turmeric" },
  { name: "Red Chilli", image: chilliImage, productId: "red-chilli" },
  { name: "Black Pepper", image: papperImageTwo, productId: "black-pepper" },
  { name: "Coconut", image: coconutImage, productId: "coconut" }
];

export const products: Product[] = [
  {
    id: "spices",
    name: "Spices",
    productTitle: "PREMIUM INDIAN SPICES EXPORT",
    category: "Spices",
    image: spicesImage,
    intro:
      "We export a wide range of authentic Indian spices known for strong aroma, rich flavor, and high purity. Rooted in India's long trade heritage, every lot is directly sourced from top spice-growing regions and prepared to global export standards for food and health industries.",
    keyQualitySpecs: [
      "Purity Level: 98% to 100% (export grade)",
      "Moisture Content: Controlled (<10 to 12%) to ensure long shelf life",
      "Volatile Oil Content: High for strong aroma and flavor",
      "Cleanliness: Machine-cleaned, dust-free, export-ready"
    ],
    premiumVarietiesTitle: "Major Spice Categories",
    premiumVarieties: [
      "Whole Spices: Black Pepper, Cardamom, Cloves, Coriander Seeds",
      "Ground Spices: Turmeric Powder, Chilli Powder, Spice Blends"
    ],
    quality: [
      "High purity and export-grade quality checks",
      "Hygienically processed and packed lots",
      "Consistent quality supply for global buyers"
    ],
    sourcingRegions: [
      "Kerala - spice capital for pepper and cardamom",
      "Karnataka - pepper and spices",
      "Tamil Nadu - turmeric and blended spices",
      "South India - premium spice hub"
    ],
    whyBuy: [
      "Strong natural aroma and flavor",
      "High purity and quality grading",
      "Sourced directly from trusted farmers",
      "Hygienic processing and packaging",
      "Consistent quality supply",
      "Suitable for global markets"
    ],
    benefits: [
      "Rich in natural antioxidants",
      "Essential for global cuisines",
      "Used in food and health industries",
      "High demand in international markets"
    ],
    marketDemand: [
      "Strong demand in USA, Europe, and Middle East",
      "Used in food processing, spice blending, and health products"
    ],
    applications: ["Food Industry", "Spice Processing", "Nutraceutical / Health Products", "Export Markets"]
  },
  {
    id: "turmeric",
    name: "Turmeric",
    productTitle: "Premium Turmeric Export from India",
    category: "Turmeric",
    image: turmericImage,
    intro:
      "We export premium Indian turmeric selected for strong color, clean aroma, and reliable curcumin levels. Sourced from trusted farming regions, it is processed to export standards for food, nutraceutical, and wellness markets.",
    keyQualitySpecs: [
      "Curcumin Content: 2% to 5% in standard lots; premium lots available on request",
      "Moisture Content: Controlled (<10 to 12%) for export stability and shelf life",
      "Purity: Machine-cleaned and graded for export-ready dispatch",
      "Color & Aroma: Bright yellow-orange tone with characteristic natural aroma"
    ],
    premiumVarietiesTitle: "Turmeric Forms & Export Options",
    premiumVarieties: [
      "Turmeric Fingers (Whole) - cleaned, graded, and export-packed",
      "Turmeric Bulbs - selected lots for processing and grinding buyers",
      "Turmeric Powder - fine mesh options available as per buyer requirements",
      "Custom packing and private labeling support for bulk orders"
    ],
    quality: [
      "Sorted by grade, moisture, and purity checks before shipment",
      "Hygienic processing and food-safe handling standards",
      "Organic and residue-compliant lots available on request",
      "Consistent batch quality and documented pre-dispatch checks"
    ],
    sourcingRegions: [
      "Andhra Pradesh - strong turmeric cultivation belt",
      "Telangana - reliable supply and commercial grades",
      "Tamil Nadu - quality turmeric for domestic and export markets",
      "Maharashtra - established turmeric producing region"
    ],
    whyBuy: [
      "Premium quality selection from trusted sourcing regions",
      "Buyer-focused curcumin and quality grade matching",
      "Direct sourcing for pricing stability and traceability",
      "Strict Quality Control",
      "Hygienic Processing and Packaging",
      "Export Standard Compliance",
      "Reliable Delivery",
      "Competitive Pricing"
    ],
    benefits: [
      "Rich in curcumin and natural antioxidants",
      "Widely used across food, health, and wellness industries",
      "High and stable demand in international markets"
    ],
    marketDemand: [
      "Strong import demand in Middle East, Europe, USA, and Southeast Asia",
      "Used in spice blends, nutraceutical formulations, and natural food coloring"
    ],
    applications: ["Food Industry", "Nutraceutical / Health Industry", "Export Markets"]
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    productTitle: "PREMIUM BLACK PEPPER EXPORT FROM INDIA",
    category: "Spices",
    image: papperImageOne,
    intro:
      "We export premium-grade black pepper sourced from India's leading spice-growing regions. The result is bold flavor, strong aroma, and high piperine content that meets global export standards for food and nutraceutical industries.",
    keyQualitySpecs: [
      "Piperine Content: 3% to 6% (standard) | 6% to 9% (premium grade)",
      "Bulk Density: 550 to 600 g/l (export grade) - higher density means better quality",
      "Volatile Oil Content: 1% to 2.5% (aroma strength)",
      "Moisture Content: <12% for longer shelf life",
      "Appearance: Bold, uniform, deep black peppercorns"
    ],
    premiumVarietiesTitle: "Premium Black Pepper Varieties",
    premiumVarieties: [
      "Tellicherry Pepper (Premium Grade) - Large bold berries and high density (550 to 600 g/l) | Best for premium export markets",
      "Malabar Pepper - Strong aroma with medium piperine content | Widely used in global trade",
      "MG1 (Malabar Garbled Grade 1) - Cleaned, graded, and uniform quality | Standard export grade"
    ],
    quality: [
      "High piperine content for strong flavor",
      "Bold size with uniform grading",
      "Hygienically processed and packed",
      "Export-ready quality standards"
    ],
    sourcingRegions: [
      "Kerala - primary source and best quality",
      "Karnataka - consistent production",
      "Tamil Nadu (minor regions)",
      "South India - global pepper hub"
    ],
    whyBuy: [
      "High piperine content (strong flavor)",
      "Sourced directly from trusted regions",
      "Bold size and uniform grading",
      "Hygienically processed and packed",
      "Export-ready quality standards"
    ],
    benefits: [
      "Rich in antioxidants",
      "Enhances digestion",
      "Improves nutrient absorption",
      "Strong natural flavor enhancer"
    ],
    marketDemand: [
      "High demand in USA, Europe, and Middle East",
      "Used in food processing, spice blends, and pharmaceutical applications"
    ],
    applications: ["Food Industry", "Spice Processing", "Pharmaceutical / Nutraceutical", "Export Markets"]
  },
  {
    id: "red-chilli",
    name: "Red Chilli",
    productTitle: "PREMIUM RED CHILLI EXPORT FROM INDIA",
    category: "Red Chilli",
    image: chilliImage,
    intro:
      "We export high-quality Indian red chillies known for vibrant color, strong pungency, and consistent quality. Each lot is selected from key growing belts and prepared for global export standards in food processing and spice industries.",
    keyQualitySpecs: [
      "ASTA Color Value (Color Strength): 80 to 150+ ASTA - higher ASTA means richer red color (premium quality)",
      "Pungency (Scoville Heat Units - SHU): Mild to very high depending on variety",
      "Capsaicin Content: Defines spice intensity and quality",
      "Moisture Content: Controlled (<10 to 12%) for long shelf life and export stability"
    ],
    premiumVarietiesTitle: "Premium Red Chilli Varieties",
    premiumVarieties: [
      "Guntur Chilli (Andhra Pradesh) - High pungency and bright red color | Most exported variety",
      "Byadgi Chilli (Karnataka) - Deep red color and low pungency | Best for color extraction (oleoresin)",
      "Teja Chilli - Very high heat level with strong global demand",
      "Kashmiri Chilli - Bright red color with mild heat | Ideal for food coloring and premium dishes"
    ],
    quality: [
      "High ASTA color value for rich red appearance",
      "Strong and consistent pungency",
      "Carefully cleaned and graded",
      "Hygienically processed for export",
      "Reliable bulk supply"
    ],
    sourcingRegions: [
      "Andhra Pradesh (Guntur) - largest chilli hub",
      "Karnataka (Byadgi) - premium color chilli",
      "Telangana",
      "India is one of the largest chilli exporters globally"
    ],
    whyBuy: [
      "High ASTA color value (rich red appearance)",
      "Strong and consistent pungency",
      "Carefully cleaned and graded",
      "Hygienically processed for export",
      "Reliable bulk supply"
    ],
    benefits: [
      "Rich in antioxidants",
      "Enhances flavor and color in food",
      "Widely used in global cuisines"
    ],
    marketDemand: [
      "High demand in Asia, Middle East, and Europe",
      "Used in food processing, spice blends, and oleoresin extraction"
    ],
    applications: ["Food Industry", "Spice Processing", "Color Extraction Industry", "Export Markets"]
  },
  {
    id: "coconut",
    name: "Coconut & Coconut Products",
    productTitle: "PREMIUM COCONUT & COCONUT PRODUCTS EXPORT FROM INDIA",
    category: "Coconut & Coconut Products",
    image: coconutImage,
    intro:
      "We export high-quality coconuts and coconut-based products sourced from India's leading coconut-growing regions. Freshness, high oil content, and purity are maintained to match international export standards for food and industrial applications.",
    keyQualitySpecs: [
      "Oil Content: 60% to 65% (premium coconuts) - higher oil means better quality and export value",
      "Moisture Content: Controlled for longer shelf life",
      "Kernel Thickness: Thick, mature kernels as key quality indicator",
      "Size and Weight: Uniform size for export grading"
    ],
    premiumVarietiesTitle: "Premium Coconut Types",
    premiumVarieties: [
      "Mature Coconut - High oil content and thick kernel | Best for oil extraction and export",
      "Semi-Husked Coconut - Longer shelf life and easier transport | Preferred for export markets",
      "Fully Husked Coconut - Cleaned and processed | Ready for commercial use",
      "Coconut Products: Copra, Coconut Oil, Desiccated Coconut, Coconut Powder"
    ],
    quality: [
      "High oil content with export-grade quality checks",
      "Fresh and hygienically processed lots",
      "Long shelf-life handling for export transit",
      "Consistent quality supply across batches"
    ],
    sourcingRegions: [
      "Kerala - highest quality coconuts",
      "Tamil Nadu - large production and export",
      "Karnataka - consistent supply",
      "South India - coconut production hub"
    ],
    whyBuy: [
      "High oil content (export-grade quality)",
      "Sourced from top regions in India",
      "Fresh and hygienically processed",
      "Long shelf life for export",
      "Consistent quality supply"
    ],
    benefits: [
      "Rich in nutrients and healthy fats",
      "Used in food, oil, and industrial products",
      "Consistent global demand"
    ],
    marketDemand: [
      "Strong demand in Middle East, Europe, and Asian markets",
      "Used in food processing, oil extraction, cosmetic and industrial products"
    ],
    applications: ["Food Industry", "Oil & Cosmetic Industry", "Industrial Processing", "Export Markets"]
  }
];
