export const CAREERS_EMAIL = "info@qwaltysolutions.org";
export const CAREERS_EMAIL_HREF = `mailto:${CAREERS_EMAIL}?subject=Job%20Application%20-%20Qwalty%20Solutions`;

export const CAREERS_HERO_TAGS = [
  "Quick Response",
  "2000+ Products",
  "Pan-India Delivery",
] as const;

export const WHY_JOIN_US = [
  {
    id: "impact",
    badge: "Top Reason",
    title: "Real Impact, Real Operations",
    description:
      "At Qwalty Solutions, your work directly shapes procurement outcomes for clients across industries. Every sourcing decision and delivery you help execute keeps real production lines running — your skills leave a tangible mark.",
    featured: true,
  },
  {
    id: "culture",
    badge: "Inclusive Culture",
    title: "A diverse, welcoming team",
    description:
      "Every voice matters. We celebrate different perspectives and foster a sense of belonging across procurement, logistics, and operations.",
    featured: false,
  },
  {
    id: "growth",
    badge: "Career Growth",
    title: "Clear progression paths",
    description:
      "Mentorship programmes and skill-building workshops accelerate your professional journey — from executive to leadership roles.",
    featured: false,
  },
  {
    id: "balance",
    badge: "Work-Life Balance",
    title: "Results-driven, flexible culture",
    description:
      "Flexible scheduling and a culture that respects your time outside the office — without sacrificing accountability.",
    featured: false,
  },
  {
    id: "learning",
    badge: "Continuous Learning",
    title: "Training and certifications",
    description:
      "Access to training resources, industry certifications, and hands-on exposure to modern procurement and MRO technologies.",
    featured: false,
  },
  {
    id: "rewards",
    badge: "Recognition & Rewards",
    title: "Contributions that count",
    description:
      "We celebrate milestones, achievements, and the everyday wins that move the business forward.",
    featured: false,
  },
  {
    id: "leadership",
    badge: "Strong Leadership",
    title: "Veterans who invest in you",
    description:
      "Work alongside experienced industry leaders who share knowledge freely and genuinely invest in your growth.",
    featured: false,
  },
] as const;

export const TEAM_TESTIMONIALS = [
  {
    id: "ops",
    quote:
      "Running operations at a startup like Qwalty Solutions means no two days look the same. I own the entire process — from supplier coordination to last-mile delivery — and leadership actually listens when something needs fixing. The pace is demanding, but watching a system you built from scratch run smoothly? That's what keeps me here.",
    name: "Lata Satwal",
    title: "Operations Manager",
  },
  {
    id: "procurement",
    quote:
      "In a startup, procurement isn't just about cutting costs — it's about building the supply chain from the ground up. I negotiate directly with vendors, make decisions that actually move the needle, and see the results within days, not quarters. There's no bureaucracy slowing you down — just ownership and outcomes.",
    name: "Yasin Beag",
    title: "Procurement Executive",
  },
  {
    id: "it",
    quote:
      "At Qwalty Solutions, you're not waiting months for your ideas to be reviewed in a committee. I pitched a system change on a Tuesday and it was live by Thursday. The trust placed in every person here — regardless of title — is what makes this place genuinely different.",
    name: "Sidharth Gautam",
    title: "IT Analyst",
  },
  {
    id: "head",
    quote:
      "Joining as Procurement Head was a chance to build everything from scratch — and that's exactly what I've done. We've onboarded 150+ new vendors in six months, negotiated better payment terms, and cut lead times by nearly 25%. Every suggestion goes straight to leadership. No red tape.",
    name: "Raj Kumar",
    title: "Procurement Head",
  },
  {
    id: "junior",
    quote:
      "I joined right after college. Everyone said procurement is boring paperwork, but here I'm actually learning how deals are made — from finding suppliers to placing orders. My seniors answer my questions and let me make small decisions on my own. It's fast, but I'm growing every day.",
    name: "Mayank Mittal",
    title: "Procurement Executive",
  },
] as const;

export const OPEN_ROLES = [
  {
    id: "procurement-executive",
    department: "Procurement",
    title: "Procurement Executive",
    description:
      "Lead end-to-end sourcing strategies for MRO supplies, manage vendor relationships, and drive cost efficiencies across supply chains.",
    type: "Full-Time",
    location: "On-Site",
    locationDetail: "Noida",
    mailSubject: "Application%20-%20Procurement%20Executive",
  },
  {
    id: "accountant",
    department: "Finance",
    title: "Accountant",
    description:
      "Manage financial records, prepare reports, and ensure compliance for MRO operations. Support budgeting, auditing, and financial planning.",
    type: "Full-Time",
    location: "Hybrid",
    locationDetail: "Noida",
    mailSubject: "Application%20-%20Accountant",
  },
  {
    id: "logistics-coordinator",
    department: "Logistics",
    title: "Logistics Coordinator",
    description:
      "Oversee inbound and outbound shipments, coordinate with warehousing teams, and optimize delivery timelines for MRO parts and equipment.",
    type: "Full-Time",
    location: "On-Site",
    locationDetail: "Delhi NCR",
    mailSubject: "Application%20-%20Logistics%20Coordinator",
  },
] as const;
