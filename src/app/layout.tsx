import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? 'https://neurospicymystic.com'),
  title: {
    default: 'NeuroSpicy Mystic — Stop Creating. Start Selling.',
    template: '%s · NeuroSpicy Mystic',
  },
  description:
    'The 2027 PLR vault for divinely distracted witches. 2,000+ rebrandable templates, lifetime access, resell rights — keep 100% of every sale.',
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
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
