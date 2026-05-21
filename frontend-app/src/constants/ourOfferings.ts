export type OfferingBulletCard = {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
};

export type OfferingTagCard = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export type OfferingFeatureCard = {
  id: string;
  title: string;
  description: string;
};

export const OFFERINGS_INTRO = {
  eyebrow: "Business models – B2B & B2C",
  description:
    "Qwalty Solutions offers end-to-end industrial MRO procurement for businesses — from reverse auction and custom tooling to direct-to-consumer products with smart fulfillment and data-driven personalization.",
};

export const BUSINESS_MODELS: OfferingBulletCard[] = [
  {
    id: "b2b",
    badge: "B2B",
    title: "Business Procurement",
    description:
      "End-to-end industrial procurement solutions designed for enterprise buyers who need reliability, speed, and flexibility at scale.",
    bullets: [
      "Reverse auction & competitive bidding",
      "Custom tooling & specification matching",
      "Volume pricing & contract management",
      "Dedicated account management",
    ],
  },
  {
    id: "b2c",
    badge: "B2C",
    title: "Direct to Consumer",
    description:
      "Consumer-facing products backed by intelligent logistics, real-time inventory, and personalized experiences powered by data.",
    bullets: [
      "Smart fulfillment & fast delivery",
      "Data-driven personalization engine",
      "Seamless checkout experience",
      "Loyalty & repeat order automation",
    ],
  },
];

export const SCALE_SOLUTIONS: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: OfferingTagCard[];
} = {
  eyebrow: "What we offer",
  title: "Solutions designed for scale",
  subtitle:
    "Whether you're managing plant maintenance or optimizing your supply chain, we have a tailored industrial MRO procurement solution for every need.",
  items: [
    {
      id: "mro-procurement",
      title: "MRO Procurement",
      description:
        "Our industrial MRO procurement service keeps your machines running with reliable sourcing of maintenance, repair, and operations supplies — delivered on time, every time.",
      tags: ["Spare parts", "Safety equipment", "Industrial tools"],
    },
    {
      id: "tail-end",
      title: "Tail-end Procurement of Direct Material",
      description:
        "Streamline low-volume, high-variety direct material purchases with automated sourcing, quality control, and supplier consolidation — reduce tail spend and maverick buying.",
      tags: ["Direct materials", "Tail spend management", "Supplier rationalization"],
    },
    {
      id: "indirect",
      title: "Indirect Procurement",
      description:
        "Consolidate vendors, reduce costs, and bring full visibility to your indirect spend — from office supplies to facility management.",
      tags: ["Vendor consolidation", "Cost optimization", "Spend analytics"],
    },
    {
      id: "supply-chain",
      title: "Supply Chain Management",
      description:
        "End-to-end visibility and control across your supply chain — smarter sourcing, faster delivery, and lower operational risk.",
      tags: ["Real-time tracking", "Multi-city delivery", "Risk management"],
    },
  ],
};

export const PROCUREMENT_TOOLS: {
  eyebrow: string;
  title: string;
  items: OfferingFeatureCard[];
} = {
  eyebrow: "Intelligent tools · AI · Automation",
  title: "Industrial MRO Procurement Tools that Drive Efficiency",
  items: [
    {
      id: "reverse-auction",
      title: "Reverse Auction",
      description:
        "Real-time bidding where suppliers compete to offer the lowest price. Maximize cost savings and procurement transparency.",
    },
    {
      id: "ai-smart",
      title: "AI Smart Procurement",
      description:
        "Autonomous purchase approvals, supplier matching, and spend analytics. Reduces cycle time and human error.",
    },
    {
      id: "demand-forecasting",
      title: "Demand Forecasting",
      description:
        "Machine learning models analyze past sales and market signals to predict future demand with high accuracy.",
    },
    {
      id: "data-analytics-tools",
      title: "Data Analytics",
      description:
        "Turn raw operational data into actionable dashboards, KPI tracking, and prescriptive insights.",
    },
  ],
};

export const AI_PROCUREMENT: {
  eyebrow: string;
  title: string;
  footerTagline: string;
  items: OfferingFeatureCard[];
} = {
  eyebrow: "AI Powered Intelligence",
  title: "AI for Smart & Fast Procurement",
  footerTagline: "Smarter decisions · Faster operations · AI-driven future",
  items: [
    {
      id: "smart-fast",
      title: "Smart & Fast Procurement",
      description:
        "AI-powered sourcing that automates supplier matching, bid analysis, and purchase approvals. Reduce procurement cycles from weeks to hours while ensuring compliance and best pricing.",
    },
    {
      id: "predictive",
      title: "Predictive Forecasting",
      description:
        "Leverage historical data and machine learning to forecast demand with up to 95% accuracy. Anticipate stockouts, optimize inventory levels, and automate replenishment before you run low.",
    },
    {
      id: "data-analytics-ai",
      title: "Data Analytics",
      description:
        "Real-time dashboards and spend intelligence – uncover savings opportunities, track supplier performance, and get actionable insights. Make data-driven decisions with full visibility across your supply chain.",
    },
  ],
};

export const CUSTOM_ENGINEERING: {
  eyebrow: string;
  title: string;
  footerTagline: string;
  items: OfferingFeatureCard[];
} = {
  eyebrow: "Custom Engineering",
  title: "Precision Custom Projects",
  footerTagline: "End-to-end custom tooling · Fast turnaround · Quality guaranteed",
  items: [
    {
      id: "jigs",
      title: "Jigs",
      description:
        "Custom drilling and assembly jigs for repeatable accuracy. Reduce setup time and eliminate errors in mass production.",
    },
    {
      id: "fixtures",
      title: "Fixtures",
      description:
        "Precision workholding fixtures for machining, welding, and inspection. Tailored to your part geometry and process.",
    },
    {
      id: "fabrication",
      title: "Industrial Fabrication",
      description:
        "Heavy-duty metal fabrication – cutting, bending, welding, and assembly. From prototypes to full production runs.",
    },
    {
      id: "moulds",
      title: "Moulds",
      description:
        "Injection, compression, and blow moulds designed for durability and precision. Optimized for high-volume production.",
    },
    {
      id: "dies",
      title: "Dies",
      description:
        "Progressive, forming, and stamping dies for sheet metal. Built for longevity and tight tolerances.",
    },
  ],
};
