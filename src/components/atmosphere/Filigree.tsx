import { Sparkle } from './Sparkle';

export function Filigree({ className = '' }: { className?: string }) {
  return (
    <div className={`divider-filigree ${className}`}>
      <Sparkle size={10} variant="gold" />
      <svg width="48" height="14" viewBox="0 0 48 14" fill="none" aria-hidden>
        <path
          d="M2 7 Q 12 1, 24 7 T 46 7"
          stroke="#D4AF37"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="24" cy="7" r="1.6" fill="#D4AF37" opacity="0.85" />
      </svg>
      <Sparkle size={14} variant="gold" />
      <svg width="48" height="14" viewBox="0 0 48 14" fill="none" aria-hidden>
        <path
          d="M2 7 Q 12 13, 24 7 T 46 7"
          stroke="#D4AF37"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="24" cy="7" r="1.6" fill="#D4AF37" opacity="0.85" />
      </svg>
      <Sparkle size={10} variant="gold" />
    </div>
  );
}

export function MoonDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-6 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M16 4 A 8 8 0 1 0 16 20 A 6 6 0 1 1 16 4 Z"
          fill="#D4AF37"
          opacity="0.85"
        />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  );
}
