// Packet 100g Images (front/back)
import chillifront from "../assets/packets/100g/chilli.front-100g.png";
import dhaniafront from "../assets/packets/100g/dhaniya.front-100g.png";
import garamfront from "../assets/packets/100g/garam.front-100g.png";
import jeerafront from "../assets/packets/100g/jeera.front-100g.png";
import pepperfront from "../assets/packets/100g/pepper.front-100g.png";
import turmericfront from "../assets/packets/100g/turmeric.front-100g.png";

import chilliback from "../assets/packets/100g/chilli.back-100g.png";
import dhaniaback from "../assets/packets/100g/dhaniya.back-100g.png";
import garamback from "../assets/packets/100g/garam.back-100g.png";
import jeeraback from "../assets/packets/100g/jeera.back-100g.png";
import pepperback from "../assets/packets/100g/pepper.back-100g.png";
import turmericback from "../assets/packets/100g/turmeric.back-100g.png";

// Raw Powder Images
import chillypowder from "../assets/raw/chillypowder.jpg";
import dhaniyapowder from "../assets/raw/dhaniyapowder.jpeg";
import garammasala from "../assets/raw/garammasala.jpg";
import jeerapowder from "../assets/raw/jeerapowder.jpg";
import pepperpowder from "../assets/raw/pepperpowder.jpg";
import turmericpowder from "../assets/raw/TurmericPowder.jpg";
import wholepepper from "../assets/raw/WholePepper.jpg";

export const boxFrontImages = {
  chillifront,
  dhaniafront,
  garamfront,
  jeerafront,
  pepperfront,
  turmericfront
};

export const boxBackImages = {
  chilliback,
  dhaniaback,
  garamback,
  jeeraback,
  pepperback,
  turmericback
};

export const rawPowderImages = {
  chillypowder,
  dhaniyapowder,
  garammasala,
  jeerapowder,
  pepperpowder,
  turmericpowder,
  wholepepper
};

// Export all images together
export const allImages = {
  ...boxFrontImages,
  ...boxBackImages,
  ...rawPowderImages
};

export const products = [
  {
    id: 1,
    name: "Dhaniya Powder",
    description: "Traditional blend of warming spices with authentic coriander flavor, perfect for curries and marinades",
    imgUrl: dhaniafront,
    images: [dhaniafront, dhaniaback, dhaniyapowder],
    category: "Signature Blend",
    processing: "Traditional stone grinding",
    overview: "Premium coriander powder made from carefully selected seeds. Stone-ground using traditional methods to preserve natural oils and authentic flavor.",
    benefits: [
      "Rich in dietary fiber and antioxidants",
      "Aids digestion and metabolism",
      "Natural flavor enhancer",
      "Contains essential vitamins"
    ],
    details: {
      ingredients: "100% Pure Coriander Seeds",
      shelfLife: "12 months",
      storage: "Store in cool, dry place",
      certifications: "FSSAI Approved • No preservatives"
    }
  },
  {
    id: 2,
    name: "Whole Pepper",
    description: "Premium black peppercorns with intense heat and aromatic flavor, essential for any spice collection",
    imgUrl: pepperfront,
    images: [pepperfront, pepperback, wholepepper],
    category: "Whole Spices",
    processing: "Sun-dried and hand-sorted",
    overview: "Premium black peppercorns hand-picked at peak ripeness and sun-dried for perfect balance of heat and aroma.",
    benefits: [
      "Rich in piperine for nutrient absorption",
      "Natural digestive aid", 
      "Contains antioxidant properties",
      "Adds intense flavor with minimal quantity"
    ],
    details: {
      ingredients: "100% Whole Black Peppercorns",
      shelfLife: "24 months",
      storage: "Store in airtight container",
      certifications: "Export Quality • Steam sterilized"
    }
  },
  {
    id: 3,
    name: "Turmeric Powder",
    description: "Pure and potent golden spice with anti-inflammatory properties, the cornerstone of Indian cooking",
    imgUrl: turmericfront,
    images: [turmericfront, turmericback, turmericpowder],
    category: "Regional Specialty",
    processing: "Traditional grinding",
    overview: "High-quality turmeric powder with rich curcumin content and vibrant golden color. Carefully processed to retain nutritional value.",
    benefits: [
      "High curcumin content for anti-inflammatory benefits",
      "Natural immunity booster",
      "Supports healthy skin",
      "Rich golden color for dishes"
    ],
    details: {
      ingredients: "100% Pure Turmeric Rhizome Powder",
      shelfLife: "18 months", 
      storage: "Keep in cool, dry place",
      certifications: "Organic certified • Lab tested"
    }
  },
  {
    id: 4,
    name: "Chilly Powder",
    description: "Perfect heat for every dish with balanced spiciness and rich red color from premium red chilies",
    imgUrl: chillifront,
    images: [chillifront, chilliback, chillypowder],
    category: "Regional Specialty",
    processing: "Sun-dried and ground",
    overview: "Premium red chili powder delivering perfect balance of heat, color, and flavor. Consistent spice levels in every batch.",
    benefits: [
      "Rich in Vitamin C and capsaicin",
      "Boosts metabolism",
      "Adds beautiful red color",
      "Contains antimicrobial compounds"
    ],
    details: {
      ingredients: "100% Red Chili Peppers",
      shelfLife: "15 months",
      storage: "Store in dry place, avoid sunlight",
      certifications: "FSSAI approved • Medium-Hot heat level"
    }
  },
  {
    id: 5,
    name: "Jeera Powder",
    description: "Authentic South Indian blend with warm, earthy cumin flavor, essential for rice dishes and curries",
    imgUrl: jeerafront,
    images: [jeerafront, jeeraback, jeerapowder],
    category: "Regional Specialty",
    processing: "Traditional roasting",
    overview: "Premium cumin powder made from traditionally roasted seeds. Enhanced nutty aroma and authentic flavor for Indian cooking.",
    benefits: [
      "Excellent source of iron",
      "Promotes healthy digestion",
      "Rich in antioxidants",
      "Perfect for rice dishes and curries"
    ],
    details: {
      ingredients: "100% Roasted Cumin Seeds",
      shelfLife: "12 months",
      storage: "Keep in airtight container",
      certifications: "Premium grade • Traditionally roasted"
    }
  },
  {
    id: 6,
    name: "Garam Masala",
    description: "Complex blend of warming spices including cardamom, cinnamon, and cloves for authentic Indian cuisine",
    imgUrl: garamfront,
    images: [garamfront, garamback, garammasala],
    category: "Custom Blend",
    processing: "Custom blending",
    overview: "Signature blend of aromatic spices following traditional recipes. Each spice individually roasted before blending for complex flavor.",
    benefits: [
      "Blend of 8+ warming spices",
      "Aids digestion naturally",
      "Rich in antioxidants",
      "Adds authentic aroma to dishes"
    ],
    details: {
      ingredients: "Cardamom, Cinnamon, Cloves, Bay leaves, Cumin, Coriander, Black pepper, Nutmeg",
      shelfLife: "10 months",
      storage: "Store in cool, dry place",
      certifications: "Traditional recipe • Hand-blended"
    }
  },
  {
    id: 7,
    name: "Pepper Powder",
    description: "Finely ground black pepper with intense heat and aromatic flavor, perfect for seasoning and cooking",
    imgUrl: pepperfront,
    images: [pepperfront, pepperback, pepperpowder],
    category: "Custom Blend",
    processing: "Fine grinding",
    overview: "Premium peppercorns finely ground for versatile seasoning. Fine texture allows even distribution and quick flavor release.",
    benefits: [
      "Finely ground for maximum flavor",
      "High piperine content",
      "Versatile cooking and seasoning use",
      "Natural preservative properties"
    ],
    details: {
      ingredients: "100% Finely Ground Black Pepper",
      shelfLife: "18 months",
      storage: "Keep in airtight container",
      certifications: "Premium quality • Fresh ground"
    }
  },
];
