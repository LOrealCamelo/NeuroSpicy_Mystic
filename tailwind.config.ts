import type { Config } from 'tailwindcss';

// PLACEHOLDER palette — pending L'Oreal's new logo (in progress 2026-05-09).
// Component code uses SEMANTIC tokens (primary, emphasis, accent, gold, bg, ink, body)
// so swapping the actual hex here propagates everywhere.

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B46C1',
          50: '#F5F0FB',
          100: '#E9DEF6',
          200: '#D2BFEC',
          300: '#B89BDF',
          400: '#9870D0',
          500: '#6B46C1',
          600: '#5836A0',
          700: '#432878',
          800: '#2E1B53',
          900: '#1B1031',
        },
        emphasis: {
          DEFAULT: '#EC4899',
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF7E8',
          100: '#F5EBC0',
          400: '#E0C766',
          500: '#D4AF37',
          600: '#A98826',
          700: '#7E661B',
        },
        accent: {
          DEFAULT: '#14B8A6',
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        bg: {
          DEFAULT: '#FFFDF8',
          soft: '#F8F4EE',
          mist: '#F2EBFF',
        },
        ink: '#0B0B0B',
        body: '#4B5563',
        success: '#16A34A',
        danger: '#DC2626',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 32px -8px rgba(43, 14, 89, 0.18)',
        glow: '0 0 28px 0 rgba(107, 70, 193, 0.35)',
      },
      borderRadius: {
        pill: '9999px',
      },
    },
  },
  plugins: [],
};

export default config;
