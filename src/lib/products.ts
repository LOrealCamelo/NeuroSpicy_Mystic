export type ProductBadge = 'BESTSELLER' | 'NEW' | 'TAROT' | 'COMING SOON' | 'FIRST RELEASE';

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
  /**
   * Visible "Coming Soon" framing on placeholder bundles. Set to a short
   * status string (e.g. "Rebranding now") to display under the bundle name
   * until L'Oreal swaps in real product data.
   */
  comingSoonNote?: string;
  /** Decorative gradient family used by the BundleRoadmap card */
  hue: 'primary' | 'emphasis' | 'gold' | 'accent' | 'lilac';
  downloadEnvKey?: string;
};

export const products: Product[] = [
  {
    id: 'witch-vault',
    name: 'NeuroSpicy Witch Vault',
    tagline: 'The 2027 rebrandable-templates vault for divinely distracted witches',
    bullets: [
      '2,000+ rebrandable digital templates',
      'Lifetime access · sell as your own forever',
      'Canva-ready · keep 100% of every sale',
    ],
    priceUsd: 67,
    compareAtUsd: 97,
    stripePriceId: process.env.STRIPE_PRICE_WITCH_VAULT ?? '',
    paymentLinkUrl: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_WITCH_VAULT,
    badge: 'FIRST RELEASE',
    image: '/products/witch-vault.png',
    available: true,
    hue: 'primary',
    downloadEnvKey: 'WITCH_VAULT_DOWNLOAD_URL',
  },
  {
    id: 'money-spell',
    name: 'Money Spell Manifestation Guide',
    tagline: 'Real magic for real abundance — by L’Oreal',
    bullets: [
      'Step-by-step ritual + workbook',
      'NeuroSpicy original — written by L’Oreal',
      'Pairs with the Witch Vault for full money-mindset alignment',
    ],
    priceUsd: 17,
    stripePriceId: process.env.STRIPE_PRICE_MONEY_SPELL ?? '',
    paymentLinkUrl: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONEY_SPELL,
    badge: 'NEW',
    image: '/products/money-spell.png',
    available: false,
    comingSoonNote: 'Final edits in progress',
    hue: 'emphasis',
    downloadEnvKey: 'MONEY_SPELL_GUIDE_URL',
  },
  {
    id: 'mystic-spiritual-vault',
    name: 'Mystic & Spiritual Tools Vault',
    tagline: 'Guided meditations, manifestation cards, sacred rituals',
    bullets: [
      'Sacred Journeys + Mindful Depths + Whispers of the Soul scripts',
      'Manifestation cards · Wealth Codes · Bath Rituals',
      'EFT manifestation workbook · Chakra healing guide',
    ],
    priceUsd: 47,
    stripePriceId: '',
    paymentLinkUrl: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MYSTIC_SPIRITUAL,
    badge: 'COMING SOON',
    image: '/products/mystic-spiritual.png',
    available: false,
    comingSoonNote: 'Rebranding & Resell Rights pending',
    hue: 'lilac',
  },
  {
    id: 'wellness-vault',
    name: 'Wellness & Self-Care Vault',
    tagline: 'Habit trackers, meal planners, mood logs, fitness journals',
    bullets: [
      'Habit + Mood Trackers · Mega Bundle of Trackers',
      'Meal · Nutrition · Weight Loss · Recipe Card Bundle',
      'Self-Love Workbook · Switch Off Journal · Healthy Living',
    ],
    priceUsd: 47,
    stripePriceId: '',
    paymentLinkUrl: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_WELLNESS,
    badge: 'COMING SOON',
    image: '/products/wellness.png',
    available: false,
    comingSoonNote: 'Rebranding & Resell Rights pending',
    hue: 'accent',
  },
  {
    id: 'ceo-vault',
    name: 'CEO Vault (Kiana edition)',
    tagline: 'The next-gen vault for young witchy creators',
    bullets: [
      'Curated by Kiana — Gen-Z witchy launches',
      'Etsy + TikTok Shop ready from day one',
      'Drops 2027',
    ],
    priceUsd: 67,
    stripePriceId: process.env.STRIPE_PRICE_CEO_VAULT ?? '',
    paymentLinkUrl: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_CEO_VAULT,
    badge: 'COMING SOON',
    image: '/products/ceo-vault.png',
    available: false,
    comingSoonNote: 'Kiana is curating · Drops 2027',
    hue: 'gold',
  },
  {
    id: 'content-vault',
    name: 'Content Creator Vault',
    tagline: '500+ Reels, Insta posts, hooks, captions, story templates',
    bullets: [
      '500+ manifestation reels pack',
      '120 Instagram spirituality templates',
      'Insta Growth Playbook · Build Your Brand eBook',
    ],
    priceUsd: 47,
    stripePriceId: process.env.STRIPE_PRICE_CONTENT_VAULT ?? '',
    paymentLinkUrl: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_CONTENT_VAULT,
    badge: 'COMING SOON',
    image: '/products/content-vault.png',
    available: false,
    comingSoonNote: 'Rebranding & Resell Rights pending',
    hue: 'emphasis',
  },
  {
    id: 'tarot-decks',
    name: 'NeuroSpicy Tarot & Oracle Decks',
    tagline: 'Two original decks — designed by L’Oreal, illustrated by hand',
    bullets: [
      '78-card NeuroSpicy Tarot · digital + physical',
      'NeuroSpicy Oracle Deck · 44 cards',
      'Original artwork · 100% L’Oreal · full copyright owned',
    ],
    priceUsd: 67,
    stripePriceId: '',
    paymentLinkUrl: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_TAROT,
    badge: 'TAROT',
    image: '/products/tarot-decks.png',
    available: false,
    comingSoonNote: 'In design — original artwork',
    hue: 'primary',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getAvailableProducts(): Product[] {
  return products.filter((p) => p.available);
}

export function getComingSoonProducts(): Product[] {
  return products.filter((p) => !p.available);
}

export function getUpsellsExcluding(excludeId: string): Product[] {
  return products.filter((p) => p.id !== excludeId).slice(0, 2);
}
