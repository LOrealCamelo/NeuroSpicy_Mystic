'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { AUDIOBOOK } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';

/**
 * Audiobook + interactive sticker book preview.
 *
 * The audio file is not yet recorded — when L'Oreal drops the snippet at
 * `/audio/sacred-waters-preview.mp3`, the play button becomes functional
 * automatically. Same for the page-flip preview: when /audio/preview-page-1.png
 * etc. exist, swap them in.
 */
export function AudioBookPreview() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
    } else {
      el.play().catch(() => setPlaying(false));
    }
  };

  return (
    <section className="section" id="audiobook">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <p className="label-eyebrow mb-3">Coming soon · NeuroSpicy original</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            The <span className="em-magenta italic">Sacred Waters</span> audiobook.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-base text-moonlight/80">
            An audiobook AND interactive sticker book in one. Listen, look, and ritualize at
            your own pace.
          </p>
        </div>

        <div className="card-parchment grid items-center gap-0 overflow-hidden md:grid-cols-[5fr_7fr]">
          {/* Cover column */}
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full">
            <Image
              src={AUDIOBOOK.cover}
              alt={`${AUDIOBOOK.title} cover`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void-900/40 via-transparent to-transparent" aria-hidden />

            {/* Compact play button — bottom-right so it doesn't cover cover-art text */}
            <button
              onClick={togglePlay}
              className="group absolute bottom-3 right-3 flex items-center gap-2 rounded-pill bg-void-900/85 px-3.5 py-2 text-2xs font-semibold uppercase tracking-[0.18em] text-starlight shadow-glow-gold backdrop-blur-sm ring-1 ring-gold/60 transition-transform hover:scale-105"
              aria-label={playing ? 'Pause preview' : 'Play 30-second preview'}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600">
                <svg viewBox="0 0 32 32" width="14" height="14" fill="#2D1B47" aria-hidden>
                  {playing ? (
                    <>
                      <rect x="9" y="6" width="4.5" height="20" rx="1" />
                      <rect x="18.5" y="6" width="4.5" height="20" rx="1" />
                    </>
                  ) : (
                    <path d="M10 6 L24 16 L10 26 Z" />
                  )}
                </svg>
              </span>
              <span className="hidden md:inline">{playing ? 'Pause' : 'Preview'}</span>
            </button>

            <audio
              ref={audioRef}
              src="/audio/sacred-waters-preview.mp3"
              preload="none"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
          </div>

          {/* Text column */}
          <div className="p-7 md:p-12">
            <p className="label-eyebrow !text-emphasis-700 mb-3">{AUDIOBOOK.byline}</p>
            <h3 className="font-display text-3xl text-ink md:text-4xl">{AUDIOBOOK.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-body">{AUDIOBOOK.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-2xs uppercase tracking-[0.22em] text-body/70">
              <span className="rounded-pill border border-emphasis-500/40 bg-emphasis-500/10 px-3 py-1 text-emphasis-700">
                {AUDIOBOOK.status}
              </span>
              <span className="rounded-pill border border-gold/40 bg-gold/10 px-3 py-1 text-gold-700">
                Sticker book inside
              </span>
              <span className="rounded-pill border border-accent-500/40 bg-accent-500/10 px-3 py-1 text-accent-700">
                AuDHD-friendly
              </span>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2 md:gap-3">
              {/* Page peek thumbnails — placeholder gradient panels until L'Oreal drops the page-flip images */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-md border border-parchment-edge/60 bg-gradient-to-br from-primary-100 via-emphasis-100 to-gold-100 shadow-inner"
                  style={{ backgroundImage: 'linear-gradient(135deg, rgba(124,58,237,0.18), rgba(190,24,93,0.18), rgba(212,175,55,0.18))' }}
                  aria-label={`Page peek ${i}`}
                />
              ))}
            </div>
            <p className="mt-3 text-2xs text-body/60">
              Sticker-book page peeks unlock the moment we drop the preview snippet.
            </p>

            <div className="mt-7">
              <a href="#money-spell" className="btn-secondary !border-emphasis-500/60 !text-emphasis-700 !bg-emphasis-50/80">
                <Sparkle size={11} variant="magenta" />
                Notify me when it launches
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
