import type { Metadata } from 'next';
import { Backdrop } from '@/components/atmosphere/Backdrop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Filigree } from '@/components/atmosphere/Filigree';
import { Sparkle } from '@/components/atmosphere/Sparkle';

export const metadata: Metadata = {
  title: 'PLR License — what you can and can’t do with NeuroSpicy products',
  description:
    'The full license that follows every NeuroSpicy Mystic digital product purchase. What you can do, what you can’t, and the pricing floors.',
};

export default function LicensePage() {
  return (
    <Backdrop>
      <Header />
      <main className="section">
        <div className="container-narrow">
          <div className="card-parchment p-8 md:p-14">
            <p className="label-eyebrow !text-emphasis-700 mb-3">Version 1.0 · Effective 2026-05-10</p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              NeuroSpicy <span className="em-magenta italic">Resell License</span>
            </h1>
            <p className="mt-4 text-base text-body">
              The license that follows every digital product you buy from neurospicymystic.com.
              Read it once. It applies to every template, ebook, journal, planner, sticker
              pack, and bonus included in your purchase.
            </p>
            <Filigree className="!my-7" />

            <div className="prose prose-lg max-w-none text-body">
              <h2 className="mt-2 font-display text-2xl text-ink">1. The deal in plain English</h2>
              <p>
                When you buy a NeuroSpicy product you get a <strong>non-exclusive, non-transferable
                license</strong> to use, edit, rebrand, and resell each individual template as a
                final product. <strong>Copyright stays with NeuroSpicy Mystic</strong> — you&rsquo;re
                buying the right to use it, not the underlying work itself.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">2. ✓ You CAN</h2>
              <ul className="space-y-1.5">
                <li className="flex gap-2"><span className="mt-1 text-success">✓</span><span>Edit the template designs as much as you want — colors, fonts, layout, content.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-success">✓</span><span>Rebrand each template under your own brand name and logo.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-success">✓</span><span>Sell the rebranded outputs as your own digital products on Etsy, TikTok Shop, Stan Store, Shopify, Gumroad, Beacons, your own site, or in person at markets.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-success">✓</span><span>Use the templates inside courses, paid bundles, or coaching programs.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-success">✓</span><span>Offer rebranded outputs as lead magnets or free bonuses to <em>your</em> audience.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-success">✓</span><span>Use the templates for personal or client projects.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-success">✓</span><span>Set your own prices (within the floors below).</span></li>
                <li className="flex gap-2"><span className="mt-1 text-success">✓</span><span>Print and sell physical versions (e.g., print-on-demand journals).</span></li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">3. ✕ You CAN&rsquo;T</h2>
              <ul className="space-y-1.5">
                <li className="flex gap-2"><span className="mt-1 text-danger">✕</span><span><strong>Pass the resell rights to your customers.</strong> They buy the rebranded final product — they cannot resell it themselves. Misleading them on this is a license breach.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-danger">✕</span><span>List the bundle as a &ldquo;PLR,&rdquo; &ldquo;Master Resell Rights,&rdquo; or &ldquo;rebrandable templates&rdquo; product on Whop, Beacons, PLR marketplaces, or template-license swap groups.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-danger">✕</span><span>Use NeuroSpicy Mystic mockups, ad creatives, sales-page copy, or screenshots in your own listings.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-danger">✕</span><span>Upload or share the source files (Canva or PDF) in free Facebook groups, swap groups, public Drive folders, or PLR/MRR marketplaces.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-danger">✕</span><span>Resell or share products as Canva edit links — distribute as <strong>finished PDFs or printed products only</strong>.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-danger">✕</span><span>Trademark or patent the unmodified product.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-danger">✕</span><span>Resell the Money Spell Manifestation Guide — it&rsquo;s a NeuroSpicy original, yours to keep but not to resell.</span></li>
                <li className="flex gap-2"><span className="mt-1 text-danger">✕</span><span>Claim authorship of the original templates (you can claim authorship of <em>your rebranded version</em>).</span></li>
                <li className="flex gap-2"><span className="mt-1 text-danger">✕</span><span>Use the brand names &ldquo;NeuroSpicy,&rdquo; &ldquo;NeuroSpicy Mystic,&rdquo; or any L&rsquo;Oreal-as-personality references in your rebranded products.</span></li>
              </ul>

              <h2 className="mt-8 font-display text-2xl text-ink">4. Pricing floors</h2>
              <ul>
                <li><strong>Individual product</strong> — must be priced <strong>$6 or higher</strong>.</li>
                <li><strong>Full bundle resale</strong> — must be priced <strong>$34 or higher</strong>.</li>
              </ul>
              <p>
                These floors keep the market sustainable for every seller (including you).
                Selling below these prices undercuts everyone and breaches the license.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">5. Audio, video, and recorded content</h2>
              <p>
                Audiobooks, voice content, and any audio embedded in NeuroSpicy products are
                <strong> not licensed for resale</strong> in their original form. You may
                reference, summarize, or quote (with attribution) for educational purposes only.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">6. License is non-transferable</h2>
              <p>
                The license is yours alone. You cannot sell, gift, or assign it to another
                person. If your business changes hands, the license does not transfer with the
                business — the new owner needs their own license.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">7. Termination</h2>
              <p>
                If we discover a breach (uploads to free swap sites, MRR pass-through claims,
                using NeuroSpicy mockups in your ads, etc.), the license terminates
                immediately. We may also pursue takedowns, recover damages, and revoke access
                to past and future NeuroSpicy products.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">8. No copyright transfer</h2>
              <p>
                To be unambiguous: <strong>your purchase does NOT transfer the copyright</strong>{' '}
                in the underlying templates to you. You are licensed to use them under these
                terms. NeuroSpicy Mystic remains the copyright holder.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">9. Reporting violations</h2>
              <p>
                If you spot someone reselling NeuroSpicy products outside this license — please
                let us know:{' '}
                <a className="font-semibold text-primary hover:underline" href="mailto:support@neurospicymystic.com">
                  support@neurospicymystic.com
                </a>
                . Tip leads that result in successful enforcement get a thank-you gift from the
                vault.
              </p>

              <h2 className="mt-8 font-display text-2xl text-ink">10. Updates</h2>
              <p>
                We may revise this license to clarify terms or address new use cases. Existing
                purchases stay under the license version active at time of purchase. New
                purchases use the current version.
              </p>

              <Filigree className="!my-8" />

              <p className="text-center font-display text-2xl text-ink">
                <Sparkle size={14} variant="gold" className="inline" />{' '}
                Use it well, sell it loud, send it forward.{' '}
                <Sparkle size={14} variant="gold" className="inline" />
              </p>

              <p className="mt-10 text-sm text-body/60">
                © 2026 NeuroSpicy Mystic — All rights reserved. NeuroSpicy Mystic and the
                NeuroSpicy wordmark are trademarks of L&rsquo;Oreal Venturini Camelo.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Backdrop>
  );
}
