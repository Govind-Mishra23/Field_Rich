// Box Front Images
import chillifront from "../assets/boxfront/chillifront_edited.png";
import dhaniafront from "../assets/boxfront/dhaniafront_edited.png";
import garamfront from "../assets/boxfront/garamfront_edited.png";
import jeerafront from "../assets/boxfront/jeerafront_edited.png";
import pepperfront from "../assets/boxfront/pepperfront_edited.png";
import turmericfront from "../assets/boxfront/turmericfront_edited.png";

// Box Back Images
import chilliback from "../assets/boxback/chilli back_edited.png";
import dhaniaback from "../assets/boxback/dhaniya back_edited.png";
import garamback from "../assets/boxback/garam back_edited.png";
import jeeraback from "../assets/boxback/jeeraback.png";
import pepperback from "../assets/boxback/pepperback_edited.png";
import turmericback from "../assets/boxback/turmeric back_edited.png";

// Raw Powder Images
import chillypowder from "../assets/chillypowder.jpg";
import dhaniyapowder from "../assets/dhaniyapowder.jpeg";
import garammasala from "../assets/garammasala.jpg";
import jeerapowder from "../assets/jeerapowder.jpg";
import pepperpowder from "../assets/pepperpowder.jpg";
import turmericpowder from "../assets/TurmericPowder.jpg";
import wholepepper from "../assets/WholePepper.jpg";

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
    name: "Dhaniya Powder",
    description: "Traditional blend of warming spices with authentic coriander flavor, perfect for curries and marinades",
    imgUrl: dhaniafront,
    images: [dhaniafront, dhaniaback, dhaniyapowder],
    category: "Signature Blend",
    origin: "Rajasthan, India",
    processing: "Traditional stone grinding",
    benefits: ["Enhances flavor", "Natural preservative", "Rich in antioxidants"]
  },
  {
    name: "Whole Pepper",
    description: "Premium black peppercorns with intense heat and aromatic flavor, essential for any spice collection",
    imgUrl: pepperfront,
    images: [pepperfront, pepperback, wholepepper],
    category: "Signature Blend",
    origin: "Kerala, India",
    processing: "Sun-dried and hand-sorted",
    benefits: ["Natural heat", "Digestive aid", "Antibacterial properties"]
  },
  {
    name: "Turmeric Powder",
    description: "Pure and potent golden spice with anti-inflammatory properties, the cornerstone of Indian cooking",
    imgUrl: turmericfront,
    images: [turmericfront, turmericback, turmericpowder],
    category: "Regional Specialty",
    origin: "Tamil Nadu, India",
    processing: "Traditional grinding",
    benefits: ["Anti-inflammatory", "Natural color", "Immune support"]
  },
  {
    name: "Chilly Powder",
    description: "Perfect heat for every dish with balanced spiciness and rich red color from premium red chilies",
    imgUrl: chillifront,
    images: [chillifront, chilliback, chillypowder],
    category: "Regional Specialty",
    origin: "Andhra Pradesh, India",
    processing: "Sun-dried and ground",
    benefits: ["Controlled heat", "Rich color", "Metabolism boost"]
  },
  {
    name: "Jeera Powder",
    description: "Authentic South Indian blend with warm, earthy cumin flavor, essential for rice dishes and curries",
    imgUrl: jeerafront,
    images: [jeerafront, jeeraback, jeerapowder],
    category: "Regional Specialty",
    origin: "Gujarat, India",
    processing: "Traditional roasting",
    benefits: ["Digestive aid", "Warm flavor", "Traditional taste"]
  },
  {
    name: "Garam Masala",
    description: "Complex blend of warming spices including cardamom, cinnamon, and cloves for authentic Indian cuisine",
    imgUrl: garamfront,
    images: [garamfront, garamback, garammasala],
    category: "Custom Blend",
    origin: "North India",
    processing: "Custom blending",
    benefits: ["Warming spices", "Complex flavor", "Traditional recipe"]
  },
  {
    name: "Pepper Powder",
    description: "Finely ground black pepper with intense heat and aromatic flavor, perfect for seasoning and cooking",
    imgUrl: pepperfront,
    images: [pepperfront, pepperback, pepperpowder],
    category: "Custom Blend",
    origin: "Kerala, India",
    processing: "Fine grinding",
    benefits: ["Intense heat", "Aromatic flavor", "Versatile use"]
  },
];
