export type Roast = {
  id: number;
  name: string;
  origin: string;
  notes: string[];
  roast: string;
  process: string;
  elevation: string;
  body: number;
  acidity: number;
  sweetness: number;
  tagline: string;
};

export const ROASTS: Roast[] = [
  {
    id: 0,
    name: "Kochere",
    origin: "Ethiopia, Yirgacheffe",
    notes: ["Peach", "Bergamot", "Honeycomb"],
    roast: "Light",
    process: "Washed",
    elevation: "1,950m",
    body: 2,
    acidity: 4,
    sweetness: 3,
    tagline: "Bright and floral. Morning light in a cup.",
  },
  {
    id: 1,
    name: "La Palma",
    origin: "Colombia, Huila",
    notes: ["Red apple", "Caramel", "Cocoa"],
    roast: "Medium",
    process: "Washed",
    elevation: "1,780m",
    body: 3,
    acidity: 3,
    sweetness: 4,
    tagline: "The everyday. The one that just works.",
  },
  {
    id: 2,
    name: "Sitio",
    origin: "Brazil, Minas Gerais",
    notes: ["Hazelnut", "Dark chocolate", "Brown sugar"],
    roast: "Medium dark",
    process: "Natural",
    elevation: "1,200m",
    body: 4,
    acidity: 2,
    sweetness: 4,
    tagline: "Your flat white's best friend.",
  },
  {
    id: 3,
    name: "House",
    origin: "Ethiopia × Colombia",
    notes: ["Toffee", "Stone fruit", "Milk chocolate"],
    roast: "Medium",
    process: "Blend",
    elevation: "Mixed",
    body: 3,
    acidity: 3,
    sweetness: 4,
    tagline: "Ours. The one we keep going back to.",
  },
];
