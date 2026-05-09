import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="border-b border-starlight/5 bg-void-900/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="NeuroSpicy Mystic"
              width={42}
              height={42}
              className="drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
            />
            <span className="hidden font-display text-lg tracking-wide text-starlight md:block">
              NeuroSpicy <span className="em-magenta">Mystic</span>
            </span>
          </Link>
          <a href="#offer" className="btn-primary !px-5 !py-2.5 text-sm">
            Get Instant Access →
          </a>
        </div>
      </div>
    </header>
  );
}
