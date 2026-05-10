import type { Metadata } from 'next';
import Link from 'next/link';
import { Backdrop } from '@/components/atmosphere/Backdrop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Filigree } from '@/components/atmosphere/Filigree';
import { Sparkle } from '@/components/atmosphere/Sparkle';

export const metadata: Metadata = {
  title: 'Money Spell Manifestation Guide',
  description: 'Real magic for real abundance — the NeuroSpicy Money Spell guide by L’Oreal.',
};

export default function MoneySpellGuidePage() {
  const downloadUrl = process.env.MONEY_SPELL_GUIDE_URL;

  return (
    <Backdrop>
      <Header />
      <main className="section">
        <div className="container-narrow">
          <div className="card-parchment p-8 md:p-14">
            {/* Header */}
            <div className="text-center">
              <span className="pill-magenta !text-emphasis-700 !border-emphasis-500/40 !bg-emphasis-500/10 mb-4">
                <Sparkle size={10} variant="magenta" /> NeuroSpicy original
              </span>
              <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                Money Spell <span className="em-magenta italic">Manifestation Guide</span>
              </h1>
              <p className="mt-4 text-base text-body">
                By L&rsquo;Oreal · NeuroSpicy Mystic
              </p>
              <Filigree className="!my-8" />
            </div>

            {/* Body — placeholder content for L'Oreal to swap with the revised version */}
            <div className="prose prose-lg mx-auto max-w-none text-body">
              <p className="lead text-lg leading-relaxed">
                <em>[REVIEW: replace this section with the revised Money Spell content
                you&rsquo;re uploading. The structure below is a NeuroSpicy-voice
                placeholder so the page renders today and the email works
                end-to-end. Swap each section as the new version lands.]</em>
              </p>

              <h2 className="mt-10 font-display text-3xl text-ink">Before the ritual</h2>
              <p>
                The Money Spell isn&rsquo;t a magic trick — it&rsquo;s a way of getting
                your nervous system, your inbox, and the universe pointed at the same goal.
                Read the whole guide before lighting anything. Have your journal,
                a green or gold candle (any size — divinely-distracted-witch rules
                apply), and 12 minutes uninterrupted.
              </p>

              <h2 className="mt-10 font-display text-3xl text-ink">The ritual</h2>
              <ol className="space-y-3">
                <li>
                  <strong>Ground.</strong> Sit. Two slow inhales. Feet on the floor.
                  Tell the part of you that thinks money is scary that it&rsquo;s safe today.
                </li>
                <li>
                  <strong>Name the amount.</strong> Specific. Real. The number you actually want
                  this month. Write it on the first journal page.
                </li>
                <li>
                  <strong>Light the candle.</strong> Speak the affirmation 3×.
                  &ldquo;I am the witch who is paid for her work.&rdquo;
                </li>
                <li>
                  <strong>Visualize the receipt.</strong> Stripe email. Etsy notification.
                  Whichever your business runs through. See the number land in your inbox.
                </li>
                <li>
                  <strong>Aligned action within 24 hours.</strong> ONE thing. List one
                  product. Send one DM. Post one reel. Magic + motion or it&rsquo;s
                  just journaling.
                </li>
              </ol>

              <h2 className="mt-10 font-display text-3xl text-ink">After the spell</h2>
              <p>
                Track it. Note the day, the affirmation, the action you took, and any
                signs you notice in the next 7 days. The witches who keep records get
                the receipts.
              </p>

              <h2 className="mt-10 font-display text-3xl text-ink">If it doesn&rsquo;t feel like it&rsquo;s working</h2>
              <p>
                That usually means there&rsquo;s a story underneath about whether you&rsquo;re
                allowed to be paid. Open the workbook in the full <strong>NeuroSpicy
                Witch Vault</strong> — there&rsquo;s a money-mindset journal designed to
                surface and rewrite that exact pattern.
              </p>
            </div>

            {/* Download CTA */}
            <div className="mt-12 rounded-card border border-gold/40 bg-gradient-to-br from-gold-50 to-gold-100/50 p-6 text-center md:p-8">
              <p className="label-eyebrow !text-gold-700 mb-2">Want the printable PDF?</p>
              <h3 className="font-display text-2xl text-ink">
                Download for your altar drawer.
              </h3>
              {downloadUrl ? (
                <a
                  href={downloadUrl}
                  className="btn-gold mt-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Sparkle size={14} variant="starlight" />
                  Download the PDF →
                </a>
              ) : (
                <p className="mt-4 text-sm text-body">
                  PDF version coming soon. Bookmark this page — the link will appear here
                  the moment it&rsquo;s ready.
                </p>
              )}
              <p className="mt-3 text-2xs uppercase tracking-[0.22em] text-body/60">
                Free · NeuroSpicy original · For your personal use
              </p>
            </div>

            {/* Cross-sell */}
            <div className="mt-10 rounded-card border border-primary-300/30 bg-primary-50/40 p-6 text-center">
              <p className="text-sm text-ink">
                Loved the spell? The full <strong>NeuroSpicy Witch Vault</strong> has a
                Money Mindset Planner, Abundance Journal, and Wealth Codes Guide that
                pair with this ritual.
              </p>
              <Link href="/#offer" className="btn-primary mt-4 !text-sm">
                <Sparkle size={11} variant="gold" /> Get the Witch Vault →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Backdrop>
  );
}
