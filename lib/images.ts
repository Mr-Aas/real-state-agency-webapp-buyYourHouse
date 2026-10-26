/**
 * getYourHouse Image Registry
 * 
 * Configured with high-resolution placeholder images from Unsplash API for real estate,
 * architecture, modern villas, apartments, land, and luxury penthouses.
 * 
 * TO USE PERSONAL SELF-HOSTED IMAGES:
 * 1. Place your images in `/client/public/images/properties/` or your CDN.
 * 2. Update the `LOCAL_MODE` flag to `true` or override the specific image keys below.
 */

export const IMAGE_CONFIG = {
  // Toggle this to true to prioritize self-hosted local images in /public/images/
  USE_LOCAL_IMAGES: false,
  LOCAL_BASE_PATH: "/images/properties",
};

export interface PropertyImageSet {
  main: string;
  gallery: string[];
  thumbnail: string;
}

export const PLACEHOLDER_IMAGES = {
  // Real Estate Hero & Banners
  heroBanner: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
  luxuryVilla: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  modernApartment: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  penthouseView: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  suburbanHouse: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
  primeLand: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  commercialTower: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  interiorDesign: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  estatePool: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
  coastalRetreat: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
  aboutOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  consultationMeeting: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",

  // Agent Avatars
  agents: {
    sarah: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    marcus: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    elena: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    david: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
};

/**
 * Returns either the remote placeholder or the self-hosted local image path
 */
export function getPropertyImage(key: keyof typeof PLACEHOLDER_IMAGES | string, fallbackUrl?: string): string {
  if (IMAGE_CONFIG.USE_LOCAL_IMAGES) {
    return `${IMAGE_CONFIG.LOCAL_BASE_PATH}/${key}.jpg`;
  }
  
  if (key in PLACEHOLDER_IMAGES) {
    const val = PLACEHOLDER_IMAGES[key as keyof typeof PLACEHOLDER_IMAGES];
    if (typeof val === "string") return val;
  }
  
  return fallbackUrl || PLACEHOLDER_IMAGES.heroBanner;
}
