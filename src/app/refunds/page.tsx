import type { Metadata } from 'next';
import { Backdrop } from '@/components/atmosphere/Backdrop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Filigree } from '@/components/atmosphere/Filigree';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'When refunds apply, when they don’t, and how to get help with access issues at NeuroSpicy Mystic.',
};

export default function RefundsPage() {
  return (
    <Backdrop>
      <Header />
      <main className="section">
        <div className="container-narrow">
          <div className="card-parchment p-8 md:p-14">
            <p className="label-eyebrow !text-emphasis-700 mb-3">Effective: 2026-05-10</p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Refund <span className="em-magenta italic">Policy</span>
            </h1>
            <Filigree className="!my-7" />

            <div className="prose prose-lg max-w-none text-body">
              <p className="lead text-lg leading-relaxed">
                Honest version: digital products download instantly, so the standard rule is{' '}
                <strong>all sales are final</strong>. But we&rsquo;re humans, not robots — if
                something legitimately broke, we will fix it.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">When we DO refund (or fix)</h2>
              <ul>
                <li>You can&rsquo;t open the Drive folder — we&rsquo;ll re-share it directly with your email.</li>
                <li>A file is corrupted or missing — we&rsquo;ll send a replacement.</li>
                <li>The product was charged twice — we&rsquo;ll reverse the duplicate.</li>
                <li>You bought the wrong tier and haven&rsquo;t opened anything — contact us within 7 days and we&rsquo;ll convert your purchase.</li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">When we DON&rsquo;T refund</h2>
              <ul>
                <li>You changed your mind after downloading.</li>
                <li>The product wasn&rsquo;t what you expected (the listings describe everything in detail).</li>
                <li>You don&rsquo;t want to learn Canva.</li>
                <li>You expected guaranteed income (we don&rsquo;t and can&rsquo;t guarantee that).</li>
                <li>You&rsquo;ve already opened, downloaded, or shared the files with anyone else.</li>
                <li>You filed a chargeback before contacting us — please email us first; chargebacks block future access.</li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">How to request</h2>
              <ol>
                <li>Email{' '}
                  <a className="font-semibold text-primary hover:underline" href="mailto:support@neurospicymystic.com">support@neurospicymystic.com</a>{' '}
                  within <strong>7 days</strong> of purchase.
                </li>
                <li>Include your order number (the 8-character code on your confirmation email).</li>
                <li>Briefly describe the issue.</li>
              </ol>
              <p>
                Most refundable issues are resolved within 1 business day. Approved refunds go
                back to the original card via Stripe within 5–10 business days.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">Stan Store readings</h2>
              <p>
                1:1 readings booked on Stan are governed by Stan&rsquo;s own refund policy. Free
                15-min readings earned via the spend-tier perks on this site are non-refundable
                (they were free).
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
