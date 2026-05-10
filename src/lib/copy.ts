// Centralized copy + seed data for the landing page. [REVIEW] markers flag
// blocks I drafted in NeuroSpicy voice — L'Oreal should sign off on each.

export const HERO = {
  pill: 'For the Divinely Distracted',
  h1Top: 'Stop Creating.',
  h1Emph: 'Start Selling.',
  sub: 'The 2027 vault of rebrandable digital templates for divinely distracted goddesses. 2,000+ templates · lifetime access · 100% profit on every resale.',
  cta: 'Yes, I Want Instant Access',
  ctaSecondary: 'View what’s inside ↓',
  trust: ['One-time payment', 'No subscriptions', 'Instant download'],
};

export const SHORTCUT_CARDS = [
  {
    title: 'List products on Etsy today',
    body: 'Drop the rebranded files into your shop and start the same afternoon. No design degree, no inventory.',
    icon: 'shop',
    accent: 'gold' as const,
  },
  {
    title: 'Sell through your link-in-bio',
    body: 'Stan Store, Gumroad, Shopify, Beacons — every storefront is wired. Your TikTok funnel finally has something to sell.',
    icon: 'link',
    accent: 'magenta' as const,
  },
  {
    title: 'Keep every dollar you make',
    body: 'No royalties. No revenue share. Full resell rights — rebrand each template, sell as your own, keep every dollar forever.',
    icon: 'coin',
    accent: 'turquoise' as const,
  },
];

export const STATS = [
  { value: '1,000+', label: 'Active sellers' },
  { value: '$500K', label: 'Monthly sales' },
  { value: '1M+', label: 'Products' },
];

export const PAIN_STATS = [
  { value: '82%', label: 'of small businesses fail in the first 5 years' },
  { value: '70%', label: 'of women want financial freedom but don’t know where to start' },
];

export const THREE_STEPS = [
  {
    n: '01',
    title: 'Get the files instantly',
    body: '300GB+ of templates, journals, planners, ebooks, and design assets — delivered to you the moment Stripe says yes.',
  },
  {
    n: '02',
    title: 'Brand them as yours',
    body: 'Open in Canva. Apply your colors and logo. Save. The files are already structured for one-tap rebranding.',
  },
  {
    n: '03',
    title: 'Keep 100% of every sale',
    body: 'No revenue share, no royalty, no licensing fee. Full resell rights mean every dollar stays in your pocket.',
  },
];

export const BUNDLE_PREVIEWS = [
  { title: 'Mystic Planners', tag: 'TOP ETSY SELLER', tagVariant: 'gold' as const, hue: 'primary' as const },
  { title: 'Manifestation Journals', tag: 'CANVA-READY', tagVariant: 'turquoise' as const, hue: 'emphasis' as const },
  { title: 'Tarot & Oracle Decks', tag: 'NEUROSPICY ORIGINAL', tagVariant: 'magenta' as const, hue: 'gold' as const },
  { title: 'Moon & Astrology', tag: '2027 EDITION', tagVariant: 'gold' as const, hue: 'primary' as const },
  { title: 'Chakra Healing', tag: 'MULTI-INDUSTRY', tagVariant: 'turquoise' as const, hue: 'accent' as const },
  { title: 'Self-Love Workbooks', tag: 'CANVA-READY', tagVariant: 'turquoise' as const, hue: 'emphasis' as const },
  { title: 'Habit Trackers', tag: 'TOP ETSY SELLER', tagVariant: 'gold' as const, hue: 'primary' as const },
  { title: 'Affirmation Cards', tag: 'CANVA-READY', tagVariant: 'turquoise' as const, hue: 'gold' as const },
];

export const INVENTORY_CATEGORIES = [
  {
    icon: '📚',
    title: 'eBooks, Courses & Printables',
    items: [
      'Manifestation Affirmation Cards',
      'Law of Attraction Journal · EFT Manifestation Workbook',
      'Mystic Wealth Codes Guide · Money Spell Manifestation Guide',
      'Sacred Journeys + Mindful Depths + Whispers of the Soul guided meditation scripts',
      'Find Your Passion · Calming Your Mind · 120 Gratitude Prompts · 115 Deep Mental Prompts',
    ],
    valueUsd: 1200,
  },
  {
    icon: '🎨',
    title: 'Design & Creative Assets',
    items: [
      'Spirit & Celestial Animals Coloring Pages',
      'Gold Zodiac Fact Sheets · Manifestation Stickers',
      'Recipe Card Bundle · Vision Book Journal',
      'Yoga Journal · Crystal Journal · Tarot Journal',
    ],
    valueUsd: 1000,
  },
  {
    icon: '🗂️',
    title: 'Business & Productivity',
    items: [
      'Mystic Planner + Calendar · Moon Planner · Moon & Astrology Planner 2027',
      'Personal Growth Planner · Self Care Planner · Habit Trackers · Mood Trackers',
      'Etsy Shop Planner · Digital Product Planner · Handmade Business Planner',
      'Reading Planner · Journaling Planner · Life Planner · Mega Bundle of Trackers',
    ],
    valueUsd: 750,
  },
  {
    icon: '💸',
    title: 'Marketing & Sales Tools',
    items: [
      'Money Mindset Planner · Savings Tracker · Abundance Journal',
      'Manifestation Planner · Law of Attraction Planner',
      'Decluttering & Cleaning Planner · Stress Processing Journal',
      'Full resell rights on every template — rebrand and sell as your own',
    ],
    valueUsd: 900,
  },
  {
    icon: '⭐',
    title: 'Special Collections',
    items: [
      'Switch Off Journal · Being an Introvert Journal · Self Love Workbook',
      'Spirituality & Awakening · Mystic & Spiritual',
      'Herbs & Essential Oils · Chakra Healing Guide · Chakra Planner',
      'Prayer Journal · Prayer & Gratitude Journal · 100 Relationship Journal Prompts',
    ],
    valueUsd: 0,
    valueLabel: 'INCLUDED FREE',
  },
  {
    icon: '🔮',
    title: 'Mystical Bonus (NeuroSpicy original)',
    items: [
      'Money Spell Manifestation Guide — written by L’Oreal',
      'Sacred Waters Bath Rituals · Chakras Alignment Guided Meditation',
      'Manifest & Align Workbook · Nurturing the Soul Guide',
      'Abundance Mindset Journal · Healthy Living Journal',
    ],
    valueUsd: 0,
    valueLabel: 'NEUROSPICY EXCLUSIVE',
  },
];

export const INVENTORY_TOTAL_VALUE = 4100;

export const PROOF_CARDS = [
  {
    platform: 'Etsy',
    headline: '$2,502.15',
    sub: '632 orders · 30-day window',
    accent: 'gold' as const,
  },
  {
    platform: 'Stan Store',
    headline: '$1,419',
    sub: '+357% month-over-month',
    accent: 'magenta' as const,
  },
  {
    platform: 'WooCommerce',
    headline: '24 orders / day',
    sub: 'rolling 7-day average',
    accent: 'turquoise' as const,
  },
];

export const OLD_NEW = {
  old: {
    title: 'The Old Way',
    bullets: [
      'Spend months researching what to make',
      'Hire a designer or learn Adobe yourself',
      'Build inventory from scratch',
      'Burn out before your first sale',
    ],
    foot: '⏱  3–6 months   ·   💸  $1,000+',
  },
  new: {
    title: 'The NeuroSpicy Way',
    bullets: [
      'Open the vault, pick a niche, rebrand',
      'List on Etsy or Stan today',
      'Use the included master resell rights',
      'Keep 100% of every sale forever',
    ],
    foot: '⚡  Under 30 minutes   ·   💰  One-time $67',
  },
};

export const BENEFITS = [
  { title: 'No need to show your face', body: 'Sell quietly from your phone. The vault does the heavy lifting.' },
  { title: 'Create once. Sell forever.', body: 'Lifetime access means the vault is an asset, not an expense.' },
  { title: 'Sell globally', body: 'Etsy, Stan, Shopify, Gumroad, Beacons, your own site — every platform is fair game.' },
  { title: 'Profit margins like nothing else', body: 'Digital files cost $0 to ship. Pricing is yours to set.' },
  { title: 'Work on your own schedule', body: 'Built for ADHD brains. No standing inventory, no fulfillment, no team.' },
  { title: 'Earn while you sleep', body: 'Customers download instantly. Stripe deposits while you’re unconscious.' },
];

export const QUALIFIER = {
  yes: {
    title: 'This IS for you if…',
    bullets: [
      'You want a low-pressure way to start digital products today',
      'You’re neurodivergent, ADHD, or just done with research-paralysis',
      'You want to sell on Etsy, TikTok Shop, Stan, or your own site',
      'You like spiritual, intuitive, mystical aesthetics',
      'You want the master resell rights so you keep 100% forever',
    ],
  },
  no: {
    title: 'This is NOT for you if…',
    bullets: [
      'You want a get-rich-quick scheme with no effort at all',
      'You refuse to spend 30 minutes rebranding files',
      'You won’t list a single product no matter what we hand you',
      'You expect a coach to sell on your behalf',
      'You want refunds for digital products you’ve already downloaded',
    ],
  },
};

export const FAQ_ITEMS = [
  {
    q: 'What exactly am I getting?',
    a: 'Lifetime access to 300GB+ of editable templates across 62 bundles — journals, planners, ebooks, courses, sticker packs, coloring pages, meditation scripts, and the NeuroSpicy-exclusive Money Spell Manifestation Guide. Everything is Canva-ready and includes the right to rebrand and sell each template as your own.',
  },
  {
    q: 'Can I really resell and keep 100%?',
    a: 'Yes. Every template in the vault comes with full resell rights — you rebrand them, sell them as your own, set your own prices, keep every dollar. The Money Spell Guide is the one NeuroSpicy original — it’s yours to keep but not to resell.',
  },
  {
    q: 'Do I need design skills?',
    a: 'No. If you can drag-and-drop in Canva, you can rebrand the entire vault. Every template is structured with editable text and color tokens so you can swap your logo and palette in minutes.',
  },
  {
    q: 'Is this really a one-time payment?',
    a: 'Yes. $67 today, lifetime access, no subscription, no upsell drip, no surprise charges. Future template additions are included free.',
  },
  {
    q: 'Where can I sell the products?',
    a: 'Anywhere — Etsy, TikTok Shop, Stan Store, Shopify, Gumroad, Beacons, your own site, in-person at markets. The license is global and platform-agnostic.',
  },
  {
    q: 'How soon can I start earning?',
    a: 'Same day if you want. Several customers list their first 3 products on Etsy within an hour of buying the vault.',
  },
  {
    q: 'What’s your refund policy?',
    a: 'Because of the digital nature of the product (everything downloads instantly), all sales are final. Reach out to support@neurospicymystic.com if you have access issues — we’ll fix them fast.',
  },
];

// Real customer screenshots from L'Oreal's `testimonials -…zip`. Stored at
// public/testimonials/. The text is in the screenshot itself — we only render
// the image. Alt text describes that it's a real customer screenshot.
export const TESTIMONIAL_IMAGES = [
  { src: '/testimonials/IMG_3281.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
  { src: '/testimonials/IMG_3282.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
  { src: '/testimonials/IMG_3286.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
  { src: '/testimonials/IMG_3287.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
  { src: '/testimonials/IMG_3288.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
  { src: '/testimonials/IMG_3290.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
  { src: '/testimonials/IMG_3292.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
  { src: '/testimonials/IMG_3293.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
  { src: '/testimonials/IMG_3384.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
  { src: '/testimonials/IMG_3386.jpg', alt: 'Real customer testimonial — Facebook screenshot' },
];

export const TRUSTPULSE_EVENTS = [
  { name: 'Marisa', city: 'Atlanta, GA', product: 'NeuroSpicy Vault', minutesAgo: 3 },
  { name: 'Jasmine', city: 'Brooklyn, NY', product: 'NeuroSpicy Vault', minutesAgo: 12 },
  { name: 'Briana', city: 'Houston, TX', product: 'NeuroSpicy Vault', minutesAgo: 27 },
  { name: 'Sade', city: 'Toronto, ON', product: 'NeuroSpicy Vault', minutesAgo: 41 },
  { name: 'Camila', city: 'Phoenix, AZ', product: 'NeuroSpicy Vault', minutesAgo: 58 },
];

export const REWARD_TIERS = [
  {
    spend: 39.99,
    label: 'Free 15-min reading',
    body: 'Spend $39.99 or more on this site and book a complimentary 15-minute reading with L’Oreal on Stan. Tarot, oracle, pendulum, or a single-question dowse — your pick.',
    redeemNote: 'Code arrives in your order confirmation email. Redeemable on stan.store/neurospicymystic. Exclusive to neurospicymystic.com purchases — does not apply to Etsy or TikTok Shop orders.',
    icon: '🔮',
    accent: 'primary' as const,
  },
  {
    spend: 69.99,
    label: 'Pick a free gift',
    body: 'Spend $69.99 or more and choose ONE: a free digital download (under $15.99), the free 15-minute reading, OR a $10-off coupon for your next purchase here.',
    redeemNote: 'You’ll get a one-click pick-your-perk link in your order email. Combine sales / bundles to hit the threshold.',
    icon: '✨',
    accent: 'gold' as const,
  },
];

export const SOCIAL_FEED_LINKS = {
  chirp: 'https://chirp.me/usemylink', // [REVIEW] confirm
  stan: 'https://stan.store/neurospicymystic', // [REVIEW] confirm
  tiktok: 'https://www.tiktok.com/@neurospicy_mystic', // [REVIEW] confirm handle
  youtube: 'https://www.youtube.com/@neurospicy_mystic', // [REVIEW] confirm handle
};

export const AUDIOBOOK = {
  title: 'Sacred Waters: Bath Rituals',
  byline: 'Audiobook + sticker book by L’Oreal',
  status: 'In production · launching 2026',
  cover: '/Sacred_bath_rituals_audiobook.png',
  description:
    'A guided audio journey through 12 sacred-water rituals — paired with an interactive sticker book you can flip through while you listen. NeuroSpicy original. AuDHD-friendly pacing. Real magic, no fluff.',
  previewLengthSeconds: 30,
};

export const FOOTER_LINKS = {
  shop: [
    { label: 'NeuroSpicy Vault', href: '#offer' },
    { label: 'Free Money Spell Guide', href: '#money-spell' },
    { label: 'Stan Store · 1:1 readings', href: 'https://stan.store/neurospicymystic' },
    { label: 'Etsy · NeuroSpicy Boutique', href: 'https://www.etsy.com/shop/NeuroSpicyBoutique' }, // [REVIEW] confirm Etsy URL
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'PLR License', href: '/license' },
    { label: 'Refund Policy', href: '/refunds' },
    { label: 'Contact', href: 'mailto:support@neurospicymystic.com' },
  ],
  social: [
    { label: 'TikTok @neurospicy_mystic', href: 'https://tiktok.com/@neurospicy_mystic' },
    { label: 'YouTube @neurospicy_mystic', href: 'https://youtube.com/@neurospicy_mystic' },
    { label: 'Facebook · NeuroSpicyMystic', href: 'https://www.facebook.com/NeuroSpicyMystic/' },
    { label: 'Chirp · usemylink', href: 'https://chirp.me/usemylink' },
  ],
};
