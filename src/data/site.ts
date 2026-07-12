/**
 * DB Enterprises — Central Site Configuration
 *
 * ⚠️ LAUNCH GATE: every stat below must be VERIFIABLE before going live.
 *    No fabricated review counts, ratings, project totals, or % performance claims.
 *
 * Single source of truth for all site data.
 * Every page, section, and component reads from here.
 */

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  featured: boolean;
  schemaType: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface TrustChip {
  label: string;
  icon: string;
}

export interface TaglinePart {
  text: string;
  color: string;
}

export const site = {
  name: "DB Enterprises",
  tagline: "Heat. Power. Air. Controls.",
  taglineMarkup: [
    { text: "Heat.", color: "text-accent-amber" },
    { text: " Power.", color: "text-foreground" },
    { text: " Air.", color: "text-accent-blue" },
    { text: " Controls.", color: "text-brand-green" },
  ] as TaglinePart[],
  description:
    "Electrical, HVAC/R, EV chargers, heat pumps, refrigeration, and controls — engineered for performance and built for Alberta.",
  phone: "587-333-4822",
  email: "", // placeholder — update before launch
  address: {
    street: "",
    city: "Calgary",
    province: "AB",
    postal: "",
  },
  socials: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  certifications: [
    "Red Seal Electrical",
    "Red Seal Refrigeration & A/C",
  ],
  yearsExperience: "20+",
  serviceAreas: [
    "Calgary",
    "Airdrie",
    "Cochrane",
    "Chestermere",
    "Okotoks",
    "Red Deer",
    "Rocky View County",
    "Strathmore",
    "High River",
    "Canmore",
    "Sundre",
    "Carstairs",
    "Didsbury",
    "Olds",
    "Innisfail",
    "Sylvan Lake",
    "Lacombe",
    "Blackfalds",
    "Ponoka",
    "surrounding areas",
  ],
  serviceAreaNote:
    "Service availability depends on scope, scheduling, and location.",
  trustChips: [
    { label: "Licensed & Insured", icon: "Shield" },
    { label: "Dual Red Seal Certified", icon: "Award" },
    { label: "Emergency Service Available", icon: "Timer" },
    { label: "Serving Calgary & Alberta", icon: "MapPin" },
  ] as TrustChip[],
  stats: [
    { label: "Years Field Experience", value: "20+" },
    { label: "Dual Red Seal Certified", value: "Electrical & HVAC/R" },
    { label: "Fast Response", value: "Usually Same Day" },
    { label: "Service Area", value: "Calgary & Alberta" },
  ] as Stat[],
  services: [
    {
      slug: "ev-charger-installation",
      title: "EV Charger Installation",
      shortTitle: "EV Chargers",
      description:
        "Level 2 EV charger installation for homes and businesses. Licensed, insured, and permitted.",
      longDescription:
        "We install Level 2 electric vehicle chargers for residential and commercial properties across Calgary and Alberta. Our Red Seal certified electricians handle everything from panel capacity assessments to full charger installation, including NEMA outlets, hardwired stations, and load management setups. We work with all major charger brands and ensure your installation meets current Canadian Electrical Code requirements.",
      icon: "Car",
      featured: true,
      schemaType: "Electrician",
    },
    {
      slug: "electrical-panel-upgrades",
      title: "Electrical Panel Upgrades",
      shortTitle: "Electrical",
      description:
        "Panel upgrades, wiring, troubleshooting — full electrical services from a Red Seal certified electrician.",
      longDescription:
        "From panel upgrades and rewiring to troubleshooting complex electrical issues, our Red Seal electrical certification means every job meets the highest standard. We provide residential and commercial electrical services including breaker panels, sub-panels, knob-and-tube replacement, surge protection, and general wiring. All work complies with the Canadian Electrical Code.",
      icon: "Zap",
      featured: true,
      schemaType: "Electrician",
    },
    {
      slug: "ac-installation-service",
      title: "AC Installation & Service",
      shortTitle: "Air Conditioning",
      description:
        "Installation, maintenance, and repair of air conditioning systems for homes and businesses.",
      longDescription:
        "We install, service, and repair a wide range of air conditioning systems including central AC, ductless mini-splits, heat pumps in cooling mode, and packaged units. Our Red Seal refrigeration expertise ensures proper sizing, refrigerant handling, and system commissioning. We work with all major brands and offer maintenance plans to keep your system running efficiently.",
      icon: "Snowflake",
      featured: true,
      schemaType: "HVACBusiness",
    },
    {
      slug: "heat-pumps",
      title: "Heat Pumps",
      shortTitle: "Heat Pumps",
      description:
        "Heat pump installation and service — efficient heating and cooling for Alberta's climate.",
      longDescription:
        "Heat pumps provide efficient heating and cooling year-round. We specialize in ductless mini-splits, cold-climate heat pumps, and hybrid systems designed for Alberta winters. Our dual Red Seal certification (electrical + refrigeration) means we handle both the HVAC and electrical sides of every installation, ensuring a fully integrated system.",
      icon: "Thermometer",
      featured: true,
      schemaType: "HVACBusiness",
    },
    {
      slug: "hvac-refrigeration",
      title: "HVAC/R & Refrigeration",
      shortTitle: "Refrigeration",
      description:
        "Commercial refrigeration, HVAC systems, and walk-in coolers — service and installation.",
      longDescription:
        "We provide comprehensive HVAC/R and refrigeration services for commercial and industrial clients including walk-in coolers and freezers, reach-in units, ice machines, display cases, and HVAC systems for offices, retail, and restaurants. Our Red Seal refrigeration certification means your equipment is in skilled hands.",
      icon: "Wind",
      featured: true,
      schemaType: "HVACBusiness",
    },
    {
      slug: "controls-automation",
      title: "Controls & Automation",
      shortTitle: "Controls",
      description:
        "Building automation, smart thermostats, BMS, and energy management systems.",
      longDescription:
        "We design and install controls and automation systems for residential and commercial buildings. Services include smart thermostat installation, building management system (BMS) integration, zoning controls, energy management, and remote monitoring. Our electrical expertise ensures seamless integration with your existing systems.",
      icon: "Cpu",
      featured: true,
      schemaType: "Electrician",
    },
    {
      slug: "troubleshooting-commissioning",
      title: "Electrical Troubleshooting & Commissioning",
      shortTitle: "Troubleshooting",
      description:
        "Diagnostic services and system commissioning for electrical, HVAC, and controls systems.",
      longDescription:
        "When systems don't perform as expected, our dual-certified technicians diagnose and resolve issues across electrical, HVAC, refrigeration, and controls systems. We also provide commissioning services for new installations, ensuring everything operates to specification before handoff. Our systematic approach minimizes downtime and rework.",
      icon: "Search",
      featured: true,
      schemaType: "Electrician",
    },
    {
      slug: "vfds-starters-controls",
      title: "VFDs, Starters & Motor Controls",
      shortTitle: "VFDs & Motor Controls",
      description:
        "Variable frequency drives, motor starters, and industrial control panel services.",
      longDescription:
        "We provide installation, programming, and maintenance of variable frequency drives (VFDs), motor starters, and industrial control panels. Services include VFD selection and sizing, programming and commissioning, motor control center (MCC) work, and troubleshooting of motor control circuits. Ideal for commercial and industrial facilities looking to optimize motor-driven equipment.",
      icon: "Gauge",
      featured: false,
      schemaType: "Electrician",
    },
  ] as Service[],
  faqs: [
    {
      question: "Do you install EV chargers?",
      answer:
        "Yes. We install Level 2 EV chargers for residential and commercial properties. Our Red Seal electricians handle panel assessments, permits, and full installation. We work with brands including Tesla, ChargePoint, Flo, Grizzl-E, and more.",
    },
    {
      question: "Do you check if my panel has enough capacity?",
      answer:
        "Yes. Every EV charger installation starts with a panel capacity assessment. If your panel is near its limit, we can discuss options including load management devices or a panel upgrade.",
    },
    {
      question: "Do you handle both electrical and HVAC/R work?",
      answer:
        "Yes. Our lead technician holds dual Red Seal certification in Electrical (309A) and Refrigeration & Air Conditioning (313A) — a combination that allows us to handle integrated systems without subcontracting.",
    },
    {
      question: "Do you install or service AC systems?",
      answer:
        "Yes. We install, service, and repair central air conditioning, ductless mini-splits, and packaged AC units. Our Red Seal refrigeration certification covers proper refrigerant handling and system commissioning.",
    },
    {
      question: "Do you work with heat pumps?",
      answer:
        "Yes. We install and service cold-climate heat pumps, ductless mini-splits, and hybrid systems. We handle both the refrigeration and electrical sides of every installation.",
    },
    {
      question: "Can you help with refrigeration equipment?",
      answer:
        "Yes. We service and install commercial refrigeration including walk-in coolers and freezers, reach-in units, ice machines, and display cases for restaurants, retail, and industrial facilities.",
    },
    {
      question: "Can you help with controls and automation?",
      answer:
        "Yes. We provide controls and automation services including smart thermostats, BMS integration, zoning, energy management, and remote monitoring for residential and commercial buildings.",
    },
    {
      question: "What photos should I send for a quote?",
      answer:
        "Photos of your electrical panel, the installation area, existing equipment, and any relevant nameplates or model numbers help us prepare a more accurate quote. Our quote form will indicate what we need based on your project type.",
    },
    {
      question: "Do you do commercial work?",
      answer:
        "Yes. We serve commercial and industrial clients including offices, retail spaces, restaurants, warehouses, and industrial facilities. Contact us to discuss your commercial project.",
    },
    {
      question: "Are permits required?",
      answer:
        "Permit requirements vary by municipality and project scope. We handle permit applications where required and ensure all work meets applicable codes and standards.",
    },
  ] as FAQ[],
  ctas: {
    primary: "Get a Quote",
    secondary: "Explore Services",
    final: "Get Your Quote Today",
  },
  workflowSteps: [
    "Lead Received",
    "Smart Routing",
    "Rapid Response",
    "Qualified & Quoted",
    "Scheduled",
  ] as string[],
  whyChoose: [
    {
      title: "Red Seal Expertise",
      description:
        "Dual Red Seal certified in Electrical (309A) and Refrigeration & A/C (313A) — a rare combination that means fewer subcontractors and better integration.",
      icon: "Award",
    },
    {
      title: "Quality Products",
      description:
        "We use industry-leading equipment and materials from trusted manufacturers. No shortcuts, no off-brands.",
      icon: "ShieldCheck",
    },
    {
      title: "Customer First",
      description:
        "Clear communication, upfront pricing, and a commitment to doing the job right the first time.",
      icon: "Users",
    },
    {
      title: "On Time, On Budget",
      description:
        "We respect your schedule and your budget. Projects are completed on time with no surprise charges.",
      icon: "Clock",
    },
    {
      title: "Energy Smart",
      description:
        "We help clients reduce energy costs through efficient equipment selection, controls, and smart system design.",
      icon: "Leaf",
    },
  ],
  processSteps: [
    { title: "Request", description: "Tell us what you need — call, fill out our form, or send photos for a faster quote." },
    { title: "Diagnose", description: "We review your project, assess requirements, and plan the best approach." },
    { title: "Install / Repair", description: "Our dual Red Seal team handles installation or repair professionally and on schedule." },
  ],
} as const;

export type SiteConfig = typeof site;
