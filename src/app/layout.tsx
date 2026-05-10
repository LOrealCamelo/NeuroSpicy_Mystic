import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { ElevenLabsAgent } from '@/components/ElevenLabsAgent';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? 'https://neurospicymystic.com'),
  title: {
    default: 'NeuroSpicy Mystic — Stop Creating. Start Selling.',
    template: '%s · NeuroSpicy Mystic',
  },
  description:
    'The 2027 vault of rebrandable digital templates for divinely distracted goddesses. 2,000+ templates, lifetime access, resell rights — keep 100% of every sale. AuDHD / neurodivergent / NeuroSpicy.',
  openGraph: {
    title: 'NeuroSpicy Mystic — Stop Creating. Start Selling.',
    description: 'For the Divinely Distracted Goddesses & Starseeds alike.',
    url: 'https://neurospicymystic.com',
    siteName: 'NeuroSpicy Mystic',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroSpicy Mystic — Stop Creating. Start Selling.',
    description: 'For the Divinely Distracted Goddesses & Starseeds alike.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <ElevenLabsAgent />
      </body>
    </html>
  );
}
