export type BrandPartner = {
  /** Display name (shown if no image). */
  name: string;
  /** Logo URL or local import. Leave empty to use text placeholder until you add icons. */
  image?: string;
};

/**
 * Partner brands — swap `image` URLs or use local imports from `@/assets/brands/`.
 * Names-only entries render as text placeholders until you add logos.
 */
export const BRAND_PARTNERS: BrandPartner[] = [
  { name: "HP", image: "https://industrymro.com/wp-content/uploads/2026/04/hp-logo.png" },
  { name: "Gulf", image: "https://industrymro.com/wp-content/uploads/2026/04/Gulf_logo.png" },
  { name: "Mobil", image: "https://industrymro.com/wp-content/uploads/2026/04/mobil.png" },
  { name: "Shell", image: "https://industrymro.com/wp-content/uploads/2026/04/Shell_logo.svg.png" },
  { name: "Hillson", image: "https://industrymro.com/wp-content/uploads/2026/05/hillson1.jpg" },
  { name: "Karam", image: "https://industrymro.com/wp-content/uploads/2026/05/karam-1-1.jpg" },
  { name: "Duracell", image: "https://industrymro.com/wp-content/uploads/2026/04/images.png" },
  { name: "JK Paper", image: "https://industrymro.com/wp-content/uploads/2026/04/jk-paper-600.png" },
  { name: "Century Pulp & Paper", image: "https://industrymro.com/wp-content/uploads/2026/04/century-pulp-paper-logo.png" },
  { name: "Polycab", image: "https://industrymro.com/wp-content/uploads/2026/04/polycab.png" },
  { name: "Stanley", image: "https://industrymro.com/wp-content/uploads/2026/04/stanley.png" },
  { name: "L&T", image: "https://industrymro.com/wp-content/uploads/2026/04/lnt.jpg" },
  { name: "Bosch", image: "https://industrymro.com/wp-content/uploads/2026/04/bosch-1.webp" },
  { name: "Crompton", image: "https://industrymro.com/wp-content/uploads/2026/04/crompton.jpg" },
  { name: "JSP Safety", image: "https://industrymro.com/wp-content/uploads/2026/04/jsp.jpg" },
  { name: "Henkel", image: "https://industrymro.com/wp-content/uploads/2026/04/henkel.jpg" },
  { name: "Pidilite", image: "https://industrymro.com/wp-content/uploads/2026/04/pidilite.jpg" },
  { name: "3M", image: "https://industrymro.com/wp-content/uploads/2026/04/3M-Logo.png" },
  { name: "Havells", image: "https://industrymro.com/wp-content/uploads/2026/04/havells.avif" },
  { name: "SKF", image: "https://industrymro.com/wp-content/uploads/2026/04/skf.webp" },
  { name: "NTN", image: "https://industrymro.com/wp-content/uploads/2026/04/ntn.png" },
  { name: "Unbrako", image: "https://industrymro.com/wp-content/uploads/2026/05/unbrako.png" },
  { name: "Yuken", image: "https://industrymro.com/wp-content/uploads/2026/05/yuken.png" },
];
