/**
 * Lead Capture & Validation Engine for getYourHouse
 * 
 * Features:
 * - Anti-spam verification & Bot honeypot detection
 * - Disposable & suspicious email domain blocker
 * - Phone number international formatting validation
 * - Budget Tier (<T, >T) automated classification
 * - Dynamic personalized WhatsApp / Twilio SMS generator based on project size
 */

export interface LeadFormData {
  name: string;
  email: string;
  phoneCountryCode: string;
  phone: string;
  budget: string;
  location: string;
  projectType: string;
  description: string;
  honeypot?: string; // Hidden bot trap field
}

export interface ValidationResult {
  isValid: boolean;
  spamScore: number; // 0-100 (higher = safer/genuine)
  isSpam: boolean;
  errors: Partial<Record<keyof LeadFormData, string>>;
  leadTier: "Starter" | "Growth" | "Prime" | "Luxury VIP" | "Ultra Estate";
  assignedBroker: {
    name: string;
    role: string;
    avatar: string;
    responseTime: string;
    phone: string;
  };
  personalizedMessages: {
    whatsapp: string;
    twilioSms: string;
    emailSummary: string;
  };
}

export const BUDGET_OPTIONS = [
  { value: "< $100K", label: "< $100K (Starter Land & Entry Residential)", tier: "Starter" },
  { value: "$100K - $250K", label: "$100K - $250K (Modern Condos & Plots)", tier: "Growth" },
  { value: "$250K - $500K", label: "$250K - $500K (Family Homes & Duplexes)", tier: "Prime" },
  { value: "$500K - $1M", label: "$500K - $1M (Executive Residences)", tier: "Prime" },
  { value: "$1M - $2.5M", label: "$1M - $2.5M (Luxury Waterfront & Penthouses)", tier: "Luxury VIP" },
  { value: "> $2.5M", label: "> $2.5M (High-Value Estates & Commercial Assets)", tier: "Ultra Estate" },
];

export const PROJECT_TYPES = [
  { value: "house", label: "House / Single Family Home", icon: "Home" },
  { value: "appartment", label: "Apartment / Condominium", icon: "Building2" },
  { value: "villa", label: "Luxury Villa / Estate", icon: "Castle" },
  { value: "penthouse", label: "Sky Penthouse", icon: "Sparkles" },
  { value: "land", label: "Land & Development Parcel", icon: "Trees" },
  { value: "commercial", label: "Commercial / Multi-Unit", icon: "Briefcase" },
];

export const POPULAR_LOCATIONS = [
  "Beverly Hills, CA",
  "Manhattan, New York",
  "Miami Beach, FL",
  "Austin, Texas",
  "Scottsdale, Arizona",
  "Kensington, London",
  "Downtown Dubai",
  "Aspen, Colorado",
];

export const COUNTRY_CODES = [
  { code: "+1", country: "US / Canada", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
];

// List of common temporary / disposable email services to discard spam
const DISPOSABLE_DOMAINS = [
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "throwawaymail.com",
  "trashmail.com",
  "sharklasers.com",
  "yopmail.com",
  "getnada.com",
  "dispostable.com",
];

/**
 * Validates lead data and generates automated personal message dispatch payloads
 */
export function validateLead(data: LeadFormData): ValidationResult {
  const errors: Partial<Record<keyof LeadFormData, string>> = {};
  let spamScore = 100;

  // 1. Honeypot check (bots fill hidden inputs)
  if (data.honeypot && data.honeypot.trim().length > 0) {
    spamScore = 0;
    errors.honeypot = "Automated submission detected.";
  }

  // 2. Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please provide your full legal or preferred name.";
    spamScore -= 25;
  } else if (/^test|spam|admin|asdf|qwerty$/i.test(data.name.trim())) {
    errors.name = "Please provide a valid client name.";
    spamScore -= 40;
  }

  // 3. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
    spamScore -= 30;
  } else {
    const domain = data.email.split("@")[1]?.toLowerCase();
    if (domain && DISPOSABLE_DOMAINS.includes(domain)) {
      errors.email = "Temporary disposable emails are not permitted. Please use your genuine email.";
      spamScore -= 50;
    }
  }

  // 4. Phone validation
  const cleanPhone = (data.phone || "").replace(/\D/g, "");
  if (!data.phone || cleanPhone.length < 7 || cleanPhone.length > 15) {
    errors.phone = "Please enter a valid phone number with 7-15 digits.";
    spamScore -= 25;
  } else if (/^(0000000|1234567|9999999)$/.test(cleanPhone)) {
    errors.phone = "Please provide a valid direct phone number.";
    spamScore -= 35;
  }

  // 5. Budget & Project Type
  if (!data.budget) {
    errors.budget = "Please select your target project budget.";
    spamScore -= 15;
  }

  if (!data.projectType) {
    errors.projectType = "Please select a project type.";
    spamScore -= 15;
  }

  if (!data.location || data.location.trim().length < 2) {
    errors.location = "Please enter your preferred location.";
    spamScore -= 15;
  }

  // Determine Tier
  let leadTier: ValidationResult["leadTier"] = "Growth";
  if (data.budget === "> $2.5M") {
    leadTier = "Ultra Estate";
  } else if (data.budget === "$1M - $2.5M") {
    leadTier = "Luxury VIP";
  } else if (data.budget === "$500K - $1M" || data.budget === "$250K - $500K") {
    leadTier = "Prime";
  } else {
    leadTier = "Starter";
  }

  // Assign Broker according to Budget Tier & Project Type
  const brokerMap = {
    "Ultra Estate": {
      name: "Marcus Vance",
      role: "Managing Principal & Ultra-High-Net-Worth Advisory",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      responseTime: "< 5 Minutes (Priority VIP)",
      phone: "+1 (800) 438-9687",
    },
    "Luxury VIP": {
      name: "Elena Rostova",
      role: "Luxury Estates & Penthouse Portfolio Lead",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      responseTime: "< 15 Minutes",
      phone: "+1 (800) 438-9688",
    },
    "Prime": {
      name: "Sarah Jenkins",
      role: "Senior Residential & Waterfront Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      responseTime: "< 30 Minutes",
      phone: "+1 (800) 438-9689",
    },
    "Starter": {
      name: "David Chen",
      role: "Acquisitions & Land Development Associate",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      responseTime: "< 1 Hour",
      phone: "+1 (800) 438-9690",
    },
  };

  const assignedBroker = brokerMap[leadTier] || brokerMap["Prime"];
  const formattedClientName = data.name.trim().split(" ")[0] || "Valued Client";
  const capitalProjectType = data.projectType ? data.projectType.charAt(0).toUpperCase() + data.projectType.slice(1) : "Property";

  // Personalized Messaging Payloads for Twilio SMS & WhatsApp
  let personalizedWhatsapp = "";
  let personalizedTwilioSms = "";

  if (leadTier === "Ultra Estate" || leadTier === "Luxury VIP") {
    personalizedWhatsapp = `Hello ${formattedClientName}, this is ${assignedBroker.name} from getYourHouse VIP Private Office. Thank you for your inquiry regarding luxury ${capitalProjectType} investments in ${data.location || "your target region"} (Budget: ${data.budget}). We have prepared an off-market private dossier matching your criteria. May we connect for a brief 5-minute confidential consultation?`;
    personalizedTwilioSms = `[getYourHouse VIP] Hello ${formattedClientName}, your request for ${data.budget} ${capitalProjectType} in ${data.location} has been assigned to Managing Principal ${assignedBroker.name}. Check your WhatsApp/Email for the private portfolio dossier. Ref: GYH-${Math.floor(1000 + Math.random() * 9000)}`;
  } else if (leadTier === "Prime") {
    personalizedWhatsapp = `Hi ${formattedClientName}! Welcome to getYourHouse. ${assignedBroker.name} here. I saw your interest in ${capitalProjectType} properties around ${data.location || "prime areas"} within ${data.budget}. I have 3 hand-picked verified listings ready for you. Would you like me to send photos and floorplans directly here?`;
    personalizedTwilioSms = `[getYourHouse] Hi ${formattedClientName}, thank you for reaching out! Specialist ${assignedBroker.name} is reviewing your ${capitalProjectType} inquiry for ${data.location}. Direct line: ${assignedBroker.phone}.`;
  } else {
    personalizedWhatsapp = `Hello ${formattedClientName}, welcome to getYourHouse! We received your inquiry for ${capitalProjectType} in ${data.location || "the area"} with a budget of ${data.budget}. ${assignedBroker.name} has curated starter options and zoning guidance for you. Reply YES to view the catalog!`;
    personalizedTwilioSms = `[getYourHouse] Welcome ${formattedClientName}! Your inquiry for ${capitalProjectType} in ${data.location} is verified. ${assignedBroker.name} will reach out shortly. Reply STOP to opt out.`;
  }

  const emailSummary = `Priority Lead Notification: ${leadTier} Tier (${data.budget}) for ${capitalProjectType} in ${data.location}. Client: ${data.name} (${data.email}, ${data.phoneCountryCode}${data.phone}). Assigned to: ${assignedBroker.name}.`;

  const finalSpamScore = Math.max(0, Math.min(100, spamScore));
  const isSpam = finalSpamScore < 40 || Object.keys(errors).length > 0;

  return {
    isValid: Object.keys(errors).length === 0 && finalSpamScore >= 60,
    spamScore: finalSpamScore,
    isSpam,
    errors,
    leadTier,
    assignedBroker,
    personalizedMessages: {
      whatsapp: personalizedWhatsapp,
      twilioSms: personalizedTwilioSms,
      emailSummary,
    },
  };
}
