export interface Property {
  id: string;
  title: string;
  slug: string;
  price: string;
  priceRaw: number;
  budgetCategory: string; // matches < $100K, $100K - $250K, etc.
  type: "house" | "appartment" | "villa" | "penthouse" | "land" | "commercial";
  location: string;
  city: string;
  beds?: number;
  baths?: number;
  sqft: number;
  image: string;
  gallery: string[];
  featured: boolean;
  tag: string;
  description: string;
  features: string[];
  assignedBrokerName: string;
}

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "The Bel Air Sovereign Villa",
    slug: "bel-air-sovereign-villa",
    price: "$3,850,000",
    priceRaw: 3850000,
    budgetCategory: "> $2.5M",
    type: "villa",
    location: "Bellagio Rd, Beverly Hills, CA",
    city: "Beverly Hills",
    beds: 6,
    baths: 7,
    sqft: 8400,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    tag: "Ultra Luxury Estate",
    description: "An architectural masterpiece perched in prime Beverly Hills with infinity edge pool, 12-car subterranean gallery, wine room, and private cinema.",
    features: ["Infinity Pool", "Smart Home Automation", "Private Security Post", "Wine Cellar", "Panoramic City Views"],
    assignedBrokerName: "Marcus Vance",
  },
  {
    id: "prop-2",
    title: "Skyline Horizon Penthouse",
    slug: "skyline-horizon-penthouse",
    price: "$1,950,000",
    priceRaw: 1950000,
    budgetCategory: "$1M - $2.5M",
    type: "penthouse",
    location: "Hudson Yards, Manhattan, NY",
    city: "New York",
    beds: 4,
    baths: 4,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    tag: "High Floor Corner",
    description: "Duplex penthouse offering 360-degree skyline vistas over the Hudson River, floor-to-ceiling glass, private elevator access, and bespoke Italian marble finishes.",
    features: ["Private Keyed Elevator", "Double Height Living Area", "Wraparound Terrace", "Valet Concierge"],
    assignedBrokerName: "Elena Rostova",
  },
  {
    id: "prop-3",
    title: "Biscayne Bay Waterside Modernist",
    slug: "biscayne-bay-waterside-modernist",
    price: "$875,000",
    priceRaw: 875000,
    budgetCategory: "$500K - $1M",
    type: "house",
    location: "Venetian Islands, Miami Beach, FL",
    city: "Miami",
    beds: 4,
    baths: 3,
    sqft: 3100,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    tag: "Waterfront Residence",
    description: "Sleek sun-drenched Miami coastal home with private boat dockage, outdoor summer kitchen, tropical garden, and sustainable solar infrastructure.",
    features: ["Private Boat Dock", "Solar Energy System", "Heated Saltwater Pool", "Chef's Kitchen"],
    assignedBrokerName: "Sarah Jenkins",
  },
  {
    id: "prop-4",
    title: "The Tribeca Loft & Glass Studio",
    slug: "tribeca-loft-glass-studio",
    price: "$440,000",
    priceRaw: 440000,
    budgetCategory: "$250K - $500K",
    type: "appartment",
    location: "Greenwich St, Tribeca, NY",
    city: "New York",
    beds: 2,
    baths: 2,
    sqft: 1650,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    tag: "Verified Condo",
    description: "Authentic loft living with exposed brick, 13-foot timber beamed ceilings, polished concrete floors, and designer lighting fixtures.",
    features: ["Exposed Brick", "Hardwood Floors", "In-Unit Laundry", "Bicycle Storage"],
    assignedBrokerName: "Sarah Jenkins",
  },
  {
    id: "prop-5",
    title: "Austin Hill Country Vista Acreage",
    slug: "austin-hill-country-vista-acreage",
    price: "$185,000",
    priceRaw: 185000,
    budgetCategory: "$100K - $250K",
    type: "land",
    location: "West Lake Hills, Austin, TX",
    city: "Austin",
    sqft: 43560, // 1 Acre
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    tag: "Prime Development Land",
    description: "1-acre shovel-ready residential parcel with pre-approved architectural blueprints for a 4-bedroom luxury sanctuary. Full utilities ready at curb.",
    features: ["Shovel Ready", "Pre-Approved Permits", "City Water & Electric Connected", "Panoramic Hill Views"],
    assignedBrokerName: "David Chen",
  },
  {
    id: "prop-6",
    title: "Highland Pine Starter Parcel",
    slug: "highland-pine-starter-parcel",
    price: "$79,000",
    priceRaw: 79000,
    budgetCategory: "< $100K",
    type: "land",
    location: "Sedona Foothills, AZ",
    city: "Sedona",
    sqft: 21780, // 0.5 Acre
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    tag: "Value Starter Lot",
    description: "Ideal entry investment land parcel with red rock vistas, clean title, zero HOA restrictions, and tremendous appreciation potential.",
    features: ["No HOA", "Clear Deed & Title", "Scenic Views", "Flexible Zoning"],
    assignedBrokerName: "David Chen",
  },
  {
    id: "prop-7",
    title: "Centennial Boulevard Commercial Suites",
    slug: "centennial-boulevard-commercial-suites",
    price: "$1,450,000",
    priceRaw: 1450000,
    budgetCategory: "$1M - $2.5M",
    type: "commercial",
    location: "Brickell Financial District, Miami, FL",
    city: "Miami",
    sqft: 5800,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    tag: "High Yield Commercial",
    description: "Turnkey multi-tenant commercial office asset generating 8.4% cap rate with high credit tech and legal tenants already in place.",
    features: ["8.4% Cap Rate", "Triple Net Leases", "Dedicated Parking", "Fiber Optic Wired"],
    assignedBrokerName: "Marcus Vance",
  },
  {
    id: "prop-8",
    title: "The Magnolia Classical Manor",
    slug: "the-magnolia-classical-manor",
    price: "$620,000",
    priceRaw: 620000,
    budgetCategory: "$500K - $1M",
    type: "house",
    location: "North Druid Hills, Atlanta, GA",
    city: "Atlanta",
    beds: 5,
    baths: 4,
    sqft: 3900,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    tag: "Spacious Family Estate",
    description: "Classic southern colonial architecture completely updated with modern smart systems, landscaped garden, in-law suite, and screened porch.",
    features: ["Screened Porch", "Finished Basement", "Dual Fireplaces", "Two-Car Garage"],
    assignedBrokerName: "Sarah Jenkins",
  },
];
