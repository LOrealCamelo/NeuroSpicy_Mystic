import type { Config } from 'tailwindcss';

// Palette locked from L'Oreal's logo (2026-05-09) + dark mystical direction:
// - Deep midnight VOID for page bg (was cream — changed per L'Oreal request)
// - Parchment cream stays for "letter card" surfaces ON the void
// - Turquoise re-added for BNPL strip, Live pulses, dotted dividers

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VOID — page-level dark mystical background system
        void: {
          DEFAULT: '#1B0F33',
          900: '#07041A',
          800: '#0F0826',
          700: '#1B0F33',
          600: '#2D1B47',
          500: '#3D1A56',
          400: '#4C1D95',
        },
        // Mystic Purple — primary CTA, primary brand purple
        primary: {
          DEFAULT: '#7C3AED',
          50: '#F5F0FB',
          100: '#E9DEF6',
          200: '#D2BFEC',
          300: '#B89BDF',
          400: '#9870D0',
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
          900: '#3D1A56',
        },
        // Cranberry Magenta — italic emphasis ("Spicy" gradient color)
        emphasis: {
          DEFAULT: '#BE185D',
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          400: '#E04C8B',
          500: '#C2185B',
          600: '#BE185D',
          700: '#9D174D',
          800: '#831843',
        },
        // NeuroSpicy Gold — value badges, sparkles, premium accents
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF7E8',
          100: '#F5EBC0',
          200: '#EFDD96',
          300: '#E6CD7A',
          400: '#E0C766',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#8B6508',
          800: '#5C4205',
        },
        // Turquoise — BNPL strip, Live pulses, dotted dividers
        accent: {
          DEFAULT: '#14B8A6',
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        // Soft lilac — secondary buttons, subtle pills
        lilac: {
          DEFAULT: '#A78BFA',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          500: '#A78BFA',
          600: '#8B5CF6',
        },
        // Parchment — card surfaces on the void
        parchment: {
          DEFAULT: '#FAF5E8',
          soft: '#F3EAD9',
          warm: '#EFE0C5',
          edge: '#D9C9A3',
        },
        // Text on dark — moonlight = body, starlight = headings
        moonlight: '#F3EAD9',
        starlight: '#FFFDF8',
        // Text on parchment — ink = headings, body = paragraph
        ink: '#2D1B47',
        body: '#4B3F6A',
        success: '#16A34A',
        danger: '#DC2626',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        card: '0 24px 48px -16px rgba(7, 4, 26, 0.55), 0 8px 16px -8px rgba(7, 4, 26, 0.4)',
        glow: '0 0 32px 0 rgba(124, 58, 237, 0.45)',
        'glow-gold': '0 0 28px 0 rgba(212, 175, 55, 0.5)',
        'glow-magenta': '0 0 24px 0 rgba(190, 24, 93, 0.4)',
        'inner-gold': 'inset 0 0 0 1px rgba(212, 175, 55, 0.45)',
      },
      borderRadius: {
        pill: '9999px',
        card: '20px',
      },
      backgroundImage: {
        'grad-void': 'linear-gradient(180deg, #07041A 0%, #1B0F33 40%, #2D1B47 100%)',
        'grad-nebula':
          'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(124, 58, 237, 0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 80%, rgba(190, 24, 93, 0.3) 0%, transparent 60%)',
        'grad-aurora':
          'linear-gradient(135deg, #2D1B47 0%, #5B21B6 35%, #BE185D 70%, #D4AF37 100%)',
        'grad-text': 'linear-gradient(135deg, #FFFDF8 0%, #F5EBC0 50%, #D4AF37 100%)',
        'grad-magenta-text': 'linear-gradient(135deg, #BE185D 0%, #E04C8B 100%)',
        'grad-gold': 'linear-gradient(135deg, #D4AF37 0%, #E0C766 50%, #B8860B 100%)',
        parchment: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.08'/></svg>\")",
        grain: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/></filter><rect width='240' height='240' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'cta-glow': {
          '0%, 100%': {
            boxShadow:
              '0 0 28px 0 rgba(124, 58, 237, 0.5), inset 0 0 0 1px rgba(212, 175, 55, 0.45)',
          },
          '50%': {
            boxShadow:
              '0 0 56px 6px rgba(124, 58, 237, 0.85), 0 0 28px 0 rgba(212, 175, 55, 0.4), inset 0 0 0 2px rgba(212, 175, 55, 0.85)',
          },
        },
        'shimmer-x': {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(250%) skewX(-20deg)' },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        'twinkle-slow': 'twinkle 7s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'cta-glow': 'cta-glow 2.6s ease-in-out infinite',
        'shimmer-x': 'shimmer-x 3.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
