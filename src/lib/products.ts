export type ProductBadge = 'BESTSELLER' | 'NEW' | 'TAROT' | 'COMING SOON';

export type Product = {
  id: string;
  name: string;
  tagline: string;
  bullets: string[];
  priceUsd: number;
  compareAtUsd?: number;
  stripePriceId: string;
  /**
   * Stripe Payment Link URL. If present, CTAs redirect here directly
   * (no /api/checkout call). Comes from NEXT_PUBLIC_STRIPE_PAYMENT_LINK_*
   * env vars so it's available client-side.
   */
  paymentLinkUrl?: string;
  badge?: ProductBadge;
  image: string;
  available: boolean;
  downloadEnvKey?: string;
};

export const products: Product[] = [
  {
    id: 'witch-vault',
    name: 'NeuroSpicy Witch Vault',
    tagline: 'The 2027 PLR vault for divinely distracted witches',
    bullets: [
      '2,000+ rebrandable PLR templates',
      'Lifetime access · resell rights included',
      'Canva-ready · keep 100% of profits',
    ],
    priceUsd: 67,
    compareAtUsd: 97,
    stripePriceId: process.env.STRIPE_PRICE_WITCH_VAULT ?? '',
    paymentLinkUrl: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_WITCH_VAULT,
    badge: 'BESTSELLER',
    image: '/products/witch-vault.png',
    available: true,
    downloadEnvKey: 'WITCH_VAULT_DOWNLOAD_URL',
  },
  {
    id: 'money-spell',
    name: 'Money Spell Manifestation Guide',
    tagline: 'Real magic for real abundance — by L’Oreal',
    bullets: [
      'Step-by-step ritual + workbook',
      'NeuroSpicy original — not PLR',
      'Pairs with the Witch Vault for full money-mindset alignment',
    ],
    priceUsd: 17,
    stripePriceId: process.env.STRIPE_PRICE_MONEY_SPELL ?? '',
    badge: 'NEW',
    image: '/products/money-spell.png',
    available: false,
    downloadEnvKey: 'MONEY_SPELL_GUIDE_URL',
  },
  {
    id: 'ceo-vault',
    name: 'CEO Vault (Kiana edition)',
    tagline: 'Coming soon — the next-gen vault for young witchy creators',
    bullets: ['Kiana’s curated bundle', 'Built for Gen-Z launches', 'Drops 2027'],
    priceUsd: 67,
    stripePriceId: process.env.STRIPE_PRICE_CEO_VAULT ?? '',
    badge: 'COMING SOON',
    image: '/products/ceo-vault.png',
    available: false,
  },
  {
    id: 'content-vault',
    name: 'Content Vault',
    tagline: 'Coming soon — ready-to-post reels, captions, hooks',
    bullets: ['365 days of content', 'TikTok + Reels formats', 'NeuroSpicy voice locked in'],
    priceUsd: 47,
    stripePriceId: process.env.STRIPE_PRICE_CONTENT_VAULT ?? '',
    badge: 'COMING SOON',
    image: '/products/content-vault.png',
    available: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getAvailableProducts(): Product[] {
  return products.filter((p) => p.available);
}

export function getUpsellsExcluding(excludeId: string): Product[] {
  return products.filter((p) => p.id !== excludeId).slice(0, 2);
}
