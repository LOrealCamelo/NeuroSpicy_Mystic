import Image from 'next/image';
import { Filigree } from './atmosphere/Filigree';

export function FounderBio() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="card-parchment overflow-hidden">
          <div className="grid items-center gap-0 md:grid-cols-[5fr_7fr]">
            {/* Photo column */}
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
              <Image
                src="/founder.jpg"
                alt="L’Oreal — founder of NeuroSpicy Mystic"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-void-800/30 via-transparent to-transparent" aria-hidden />
            </div>

            {/* Text column */}
            <div className="p-8 md:p-12">
              <p className="label-eyebrow !text-emphasis-700 mb-3">Meet the founder</p>
              <h2 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                Hi, I&rsquo;m <span className="em-magenta italic">L&rsquo;Oreal.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                Founder of NeuroSpicy Mystic, born clairvoyant, full-time priestess on TikTok &amp; Etsy. I built this vault for the version of me that wanted to start a digital business at midnight but couldn&rsquo;t open one more &ldquo;how to start a side hustle&rdquo; PDF.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                If you&rsquo;re AuDHD, neurodivergent, divinely distracted, or just done watching everyone else launch — I made this for you. Every template is rebrandable, resellable, and yours forever. You don&rsquo;t need a coach. You need a mystic with the goods.
              </p>

              <Filigree className="!my-6" />

              <p className="font-display text-xl italic text-emphasis-700">
                — Cheering you on always.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
