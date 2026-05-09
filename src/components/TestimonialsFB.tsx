/* eslint-disable @next/next/no-img-element -- screenshots vary in aspect ratio,
   plain <img> with native lazy-loading is the cleanest path for a static archive */
import { TESTIMONIAL_IMAGES } from '@/lib/copy';

export function TestimonialsFB() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <p className="label-eyebrow mb-3">Real customers · Real screenshots</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            What real <span className="em-magenta italic">witches</span> say.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-moonlight/65">
            These are real Facebook comments from L&rsquo;Oreal&rsquo;s customers.
            No edits, no AI, no script.
          </p>
        </div>

        {/* Mobile — horizontal scroll-snap strip */}
        <div className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 scrollbar-none md:hidden">
          {TESTIMONIAL_IMAGES.map((t) => (
            <figure
              key={t.src}
              className="card-parchment relative shrink-0 snap-center overflow-hidden p-2"
              style={{ width: '85vw', maxWidth: 360 }}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="block h-auto w-full rounded-md"
              />
            </figure>
          ))}
        </div>

        {/* Desktop — CSS columns masonry */}
        <div className="hidden md:block">
          <div className="columns-2 gap-5 lg:columns-3">
            {TESTIMONIAL_IMAGES.map((t) => (
              <figure
                key={t.src}
                className="card-parchment mb-5 break-inside-avoid overflow-hidden p-2"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  className="block h-auto w-full rounded-md"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
