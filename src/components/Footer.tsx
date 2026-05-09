import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/copy';
import { MoonDivider } from './atmosphere/Filigree';

export function Footer() {
  return (
    <footer className="relative border-t border-starlight/8 bg-void-900/70 px-5 pt-16 pb-10 md:px-10">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="NeuroSpicy Mystic"
              width={64}
              height={64}
              className="mb-3 rounded-lg"
            />
            <p className="font-display text-2xl text-starlight">
              NeuroSpicy <span className="em-magenta italic">Mystic</span>
            </p>
            <p className="mt-2 text-sm text-moonlight/70">
              For the Divinely Distracted Goddesses &amp; Starseeds alike.
            </p>
          </div>

          <FooterCol title="Shop" links={FOOTER_LINKS.shop} />
          <FooterCol title="Read more" links={FOOTER_LINKS.legal} />
          <FooterCol title="Follow the magic" links={FOOTER_LINKS.social} />
        </div>

        <MoonDivider className="mt-12" />

        <div className="flex flex-col items-center gap-2 text-center text-2xs text-moonlight/60">
          <p>
            &copy; 2026 NeuroSpicy Mystic | For the Divinely Distracted Goddesses &amp; Starseeds alike
          </p>
          <p>
            <a href="mailto:support@neurospicymystic.com" className="hover:text-gold">
              support@neurospicymystic.com
            </a>
            {' · '}
            <a href="mailto:info@neurospicymystic.com" className="hover:text-gold">
              info@neurospicymystic.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="label-eyebrow mb-4 text-moonlight">{title}</p>
      <ul className="space-y-2 text-sm">
        {links.map((l) => {
          const external = l.href.startsWith('http') || l.href.startsWith('mailto');
          return (
            <li key={l.label}>
              {external ? (
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-moonlight/85 hover:text-gold"
                >
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className="text-moonlight/85 hover:text-gold">
                  {l.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
