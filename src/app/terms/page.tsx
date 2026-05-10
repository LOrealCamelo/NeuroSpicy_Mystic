import type { Metadata } from 'next';
import { Backdrop } from '@/components/atmosphere/Backdrop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Filigree } from '@/components/atmosphere/Filigree';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The general business terms governing your use of neurospicymystic.com and any digital product purchased here.',
};

export default function TermsPage() {
  return (
    <Backdrop>
      <Header />
      <main className="section">
        <div className="container-narrow">
          <div className="card-parchment p-8 md:p-14">
            <p className="label-eyebrow !text-emphasis-700 mb-3">Effective: 2026-05-10</p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Terms of <span className="em-magenta italic">Service</span>
            </h1>
            <Filigree className="!my-7" />

            <div className="prose prose-lg max-w-none text-body">
              <p className="lead text-lg leading-relaxed">
                Welcome. These Terms govern your use of <strong>neurospicymystic.com</strong> and
                any digital product you buy from this site, owned and operated by{' '}
                <strong>NeuroSpicy Mystic</strong> (sole proprietor: L&rsquo;Oreal Venturini Camelo).
                Plain English. Real terms. Read once, agree once, you&rsquo;re good.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">1. Acceptance</h2>
              <p>
                By visiting this site, signing up for our newsletter, downloading the free Money
                Spell guide, or purchasing a product, you agree to these Terms and our{' '}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                If you don&rsquo;t agree, please don&rsquo;t use the site.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">2. Eligibility</h2>
              <p>
                You must be 18 years or older to purchase. If you&rsquo;re a minor with a
                parent or guardian helping you build something cool, the parent/guardian is
                the legal purchaser.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">3. Purchases &amp; payment</h2>
              <ul>
                <li>Payments are processed by <strong>Stripe</strong>. We never see or store full card numbers.</li>
                <li>Prices are in USD unless stated otherwise.</li>
                <li>By completing checkout you confirm the billing info is accurate.</li>
                <li>Buy-Now-Pay-Later via Affirm / Afterpay / Klarna is offered where eligible — those terms are between you and the BNPL provider.</li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">4. Digital products &amp; license</h2>
              <p>
                Every digital product on this site is licensed, not sold outright. Purchasing a
                product grants you the rights described in our{' '}
                <a href="/license" className="font-semibold text-primary hover:underline">PLR License</a>{' '}
                — copyright stays with NeuroSpicy Mystic. The License travels with the product
                and applies to every customer, every platform, every transaction.
              </p>
              <p>
                A copy of the License accompanies each Drive folder you receive after purchase.
                You agreed to the License at checkout — please read it before reselling anything.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">5. Refunds</h2>
              <p>
                Because digital products download instantly, all sales are final. We make
                exceptions for genuine access issues — broken links, corrupted files, you can&rsquo;t
                open the Drive folder. Email{' '}
                <a className="font-semibold text-primary hover:underline" href="mailto:support@neurospicymystic.com">
                  support@neurospicymystic.com
                </a>{' '}
                with your order number and we&rsquo;ll fix it the same day. Full policy:{' '}
                <a href="/refunds" className="text-primary hover:underline">/refunds</a>.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">6. Bookings on Stan Store</h2>
              <p>
                1:1 readings are booked and delivered through L&rsquo;Oreal&rsquo;s Stan Store at{' '}
                <a href="https://stan.store/neurospicymystic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">stan.store/neurospicymystic</a>.
                Stan&rsquo;s terms govern those bookings; the perks earned on this site (the free 15-min
                reading and free-gift tiers) are honored at Stan via redemption codes tied to your
                neurospicymystic.com order number.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">7. Acceptable use</h2>
              <ul>
                <li>Don&rsquo;t use the site or our products to harass, threaten, or harm anyone.</li>
                <li>Don&rsquo;t reverse-engineer, scrape, or attempt to break the site&rsquo;s security.</li>
                <li>Don&rsquo;t resell, redistribute, or relicense our products outside the License terms.</li>
                <li>Don&rsquo;t impersonate L&rsquo;Oreal or NeuroSpicy Mystic.</li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">8. Health, spiritual &amp; financial disclaimers</h2>
              <ul>
                <li>The on-site ADHD / Autism self-assessments are <strong>informational only</strong>. They are not a diagnosis. They are not medical advice. Please follow up with your doctor or a licensed specialist.</li>
                <li>Tarot, oracle, pendulum, and dowsing readings are for entertainment, reflection, and spiritual guidance only. They are not a substitute for medical, legal, financial, or psychiatric advice.</li>
                <li>Any income claims or testimonials reflect individual results. Your outcomes depend on your effort, market, niche, and platform — we don&rsquo;t guarantee any specific income.</li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">9. Intellectual property</h2>
              <p>
                All content on neurospicymystic.com — including text, design, logos, graphics,
                source materials, and the brand name &ldquo;NeuroSpicy Mystic&rdquo; — is owned by NeuroSpicy
                Mystic or used under license. You may not copy, modify, distribute, or use any
                of it for commercial purposes without our written permission, except where the{' '}
                <a href="/license" className="text-primary hover:underline">PLR License</a>{' '}
                explicitly grants those rights for purchased products.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">10. Disclaimers &amp; limitation of liability</h2>
              <p>
                The site and products are provided &ldquo;as is.&rdquo; To the fullest extent permitted by
                law, NeuroSpicy Mystic disclaims all warranties, express or implied. We&rsquo;re not
                liable for indirect, incidental, special, consequential, or punitive damages,
                including lost profits, lost data, or business interruption. Total liability for
                any claim related to a purchase is capped at the amount you paid for that product.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold NeuroSpicy Mystic harmless from claims arising
                out of your misuse of the site or our products, your violation of these Terms or
                the License, or your infringement of someone else&rsquo;s rights.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">12. Termination</h2>
              <p>
                We may suspend or terminate access for violations of these Terms or the License.
                Termination doesn&rsquo;t entitle you to a refund of past purchases.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">13. Governing law</h2>
              <p>
                These Terms are governed by the laws of the United States and L&rsquo;Oreal&rsquo;s state
                of residence (currently the State of [REVIEW: confirm state] — to be filled in
                before public launch). Any disputes are resolved in those courts.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">14. Changes</h2>
              <p>
                We may update these Terms as the business grows. The effective date at the top
                reflects the latest revision. Material changes will be announced via email to
                the newsletter list.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">15. Contact</h2>
              <p>
                <a className="font-semibold text-primary hover:underline" href="mailto:support@neurospicymystic.com">support@neurospicymystic.com</a>{' '}
                ·{' '}
                <a className="font-semibold text-primary hover:underline" href="mailto:info@neurospicymystic.com">info@neurospicymystic.com</a>
              </p>

              <p className="mt-10 text-sm text-body/60">
                © 2026 NeuroSpicy Mystic — All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Backdrop>
  );
}
