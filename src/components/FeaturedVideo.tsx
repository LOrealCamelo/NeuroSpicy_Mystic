import { Sparkle } from './atmosphere/Sparkle';

/**
 * Featured auto-playing video — a hero embed designed to capture attention.
 *
 * Drop a YouTube video ID into NEXT_PUBLIC_FEATURED_YOUTUBE_ID and this
 * component renders an autoplay-muted-loop iframe. Without the env var, it
 * shows a placeholder so the section still has presence on the page.
 *
 * YouTube autoplay rules: must be muted to autoplay in modern browsers.
 * Loop on a single video requires the `playlist` param set to the same ID.
 */

const VIDEO_ID = process.env.NEXT_PUBLIC_FEATURED_YOUTUBE_ID;

export function FeaturedVideo() {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    controls: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    ...(VIDEO_ID ? { playlist: VIDEO_ID } : {}),
  });

  return (
    <section id="featured" className="section">
      <div className="container-wide">
        <div className="mb-8 text-center">
          <p className="label-eyebrow mb-3">Watch this first</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            A minute with <span className="em-magenta italic">L&rsquo;Oreal.</span>
          </h2>
        </div>

        <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-card border border-gold/30 shadow-glow-gold">
          {VIDEO_ID ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?${params.toString()}`}
              title="Featured NeuroSpicy Mystic video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-primary-800 via-emphasis-700 to-void-900">
              <div className="text-center">
                <Sparkle size={40} variant="gold" className="mx-auto mb-4 animate-twinkle" />
                <p className="font-display text-2xl text-starlight md:text-3xl">
                  A featured video lives here
                </p>
                <p className="mt-2 text-sm text-moonlight/80">
                  Drop a YouTube video ID into the <code className="rounded bg-void-900/60 px-2 py-0.5 text-gold-200">NEXT_PUBLIC_FEATURED_YOUTUBE_ID</code> env
                  and it autoplays here on every page load.
                </p>
              </div>
            </div>
          )}
        </div>

        {VIDEO_ID && (
          <p className="mt-4 text-center text-2xs uppercase tracking-[0.32em] text-moonlight/60">
            Auto-plays muted · tap to unmute
          </p>
        )}
      </div>
    </section>
  );
}
