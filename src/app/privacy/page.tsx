import type { Metadata } from 'next';
import { Backdrop } from '@/components/atmosphere/Backdrop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Filigree } from '@/components/atmosphere/Filigree';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How NeuroSpicy Mystic collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <Backdrop>
      <Header />
      <main className="section">
        <div className="container-narrow">
          <div className="card-parchment p-8 md:p-14">
            <p className="label-eyebrow !text-emphasis-700 mb-3">Last updated: 2026-05-10</p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Privacy <span className="em-magenta italic">Policy</span>
            </h1>
            <Filigree className="!my-7" />

            <div className="prose prose-lg max-w-none text-body">
              <p className="lead text-lg leading-relaxed">
                NeuroSpicy Mystic (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is operated by L&rsquo;Oreal Venturini Camelo. This policy explains what we collect, why, and how we keep it safe.
                Plain English. No tricks.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">What we collect</h2>
              <ul className="space-y-2">
                <li><strong>Email + first name</strong> when you sign up for the free Money Spell guide, the newsletter, or any assessment on this site.</li>
                <li><strong>Order info</strong> when you buy a digital product — name, email, billing address, last 4 of card (we never see the full card; that&rsquo;s Stripe&rsquo;s job).</li>
                <li><strong>Stripe payment data</strong> processed by Stripe&rsquo;s PCI-compliant systems. We do not store full card numbers.</li>
                <li><strong>Basic analytics</strong> — pages visited, device type, country. No personally-identifying tracking pixels.</li>
                <li><strong>Cookies</strong> — only the ones we need (e.g. to remember if you dismissed the perks banner).</li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">How we use it</h2>
              <ul className="space-y-2">
                <li>To send you the digital product or guide you signed up for.</li>
                <li>To email order confirmations and download links from <strong>info@neurospicymystic.com</strong>.</li>
                <li>To send you marketing emails — only if you explicitly opted in.</li>
                <li>To improve the site (which sections people read, which CTAs convert).</li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">Marketing emails &amp; early access</h2>
              <p>
                If you opt in to marketing during signup, we&rsquo;ll send you occasional updates about new products, early-access releases, and AuDHD / neurodivergent-friendly tools. Opt-in is genuinely optional — you can buy or download anything on this site without subscribing.
              </p>
              <p>
                <strong>Unsubscribe</strong> is one click in any email. We never sell or rent your email address. Ever.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">Who else sees your data</h2>
              <ul className="space-y-2">
                <li><strong>Stripe</strong> — payment processing.</li>
                <li><strong>Google Workspace (Gmail SMTP)</strong> — outbound order and lead-magnet emails from <strong>info@neurospicymystic.com</strong>.</li>
                <li><strong>Email marketing platform</strong> (when configured) — for marketing sequences only, not transactional.</li>
                <li><strong>Render</strong> — our hosting provider.</li>
              </ul>
              <p>That&rsquo;s the entire list. No data brokers, no ad networks.</p>

              <h2 className="mt-8 font-display text-2xl text-ink">Health / medical disclaimer</h2>
              <p>
                If you take an ADHD or Autism self-assessment on this site, the result is <strong>informational only</strong>. It is not a diagnosis. It is not medical advice. It does not replace evaluation by a licensed mental-health professional. If you suspect you&rsquo;re neurodivergent, please follow up with your primary care doctor or a qualified specialist for a real assessment.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">Spiritual / reading disclaimer</h2>
              <p>
                Tarot, oracle, pendulum, and dowsing readings on Stan Store are for entertainment, reflection, and spiritual guidance only. They are not a substitute for professional medical, legal, financial, or psychiatric advice.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">Your rights</h2>
              <ul className="space-y-2">
                <li>You can request a copy of all data we have about you.</li>
                <li>You can ask us to correct or delete your information.</li>
                <li>You can opt out of marketing at any time.</li>
                <li>You can file a complaint with your local data-protection authority (e.g., the FTC in the US).</li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">How to reach us</h2>
              <p>
                Questions, requests, or concerns: email{' '}
                <a className="font-semibold text-primary hover:underline" href="mailto:support@neurospicymystic.com">
                  support@neurospicymystic.com
                </a>
                . A real human (very likely L&rsquo;Oreal herself) reads every message.
              </p>

              <p className="mt-10 text-sm text-body/70">
                We may update this policy as we add features. The date at the top reflects the latest revision.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Backdrop>
  );
}
