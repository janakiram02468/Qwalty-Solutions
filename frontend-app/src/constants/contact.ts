export const CONTACT = {
  phone: "+91-9030193051",
  phoneHref: "tel:+919030193051",
  email: "info@qwaltysolutions.org",
  emailHref: "mailto:info@qwaltysolutions.org",
  corporateOffice: {
    label: "Corporate Office",
    lines: ["G-3, D-53 VDS Tower, Sector 2", "Noida – 201301"],
  },
  warehouse: {
    label: "Registered Office & Warehouse",
    lines: ["B-1553, Shastri Nagar", "New Delhi – 110052"],
  },
  businessHours: {
    weekdays: "Monday – Saturday",
    weekdaysTime: "10:00 AM – 7:00 PM (IST)",
    sunday: "Sunday",
    sundayNote: "Emergency support only",
    responseTime: "Within 24 hours",
    quoteDelivery: "Same business day",
  },
} as const;

export const INQUIRY_TYPES = [
  {
    value: "quote",
    label: "Request a quote (MRO supplies, industrial parts, bulk pricing)",
    emoji: "📦",
  },
  {
    value: "support",
    label: "Technical support / troubleshooting (expert assistance)",
    emoji: "🔧",
  },
  {
    value: "partnership",
    label: "Partnership / distribution (MRO collaboration)",
    emoji: "🤝",
  },
  {
    value: "general",
    label: "General question (catalogs, lead times, custom solutions)",
    emoji: "💬",
  },
] as const;

export const CONTACT_STATS = [
  { value: "24h", label: "Average response time" },
  { value: "100+", label: "Industrial partners served" },
  { value: "98%", label: "Customer satisfaction rate" },
] as const;
