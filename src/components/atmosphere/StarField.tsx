// Sparse hand-scattered starfield. Deterministic by seed so SSR/CSR match.
type Star = { cx: number; cy: number; r: number; opacity: number; delay: number };

function seededStars(count: number, seed: number): Star[] {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      cx: rand() * 100,
      cy: rand() * 100,
      r: 0.3 + rand() * 1.2,
      opacity: 0.3 + rand() * 0.6,
      delay: rand() * 6,
    });
  }
  return stars;
}

type StarFieldProps = {
  count?: number;
  seed?: number;
  className?: string;
};

export function StarField({ count = 80, seed = 7, className = '' }: StarFieldProps) {
  const stars = seededStars(count, seed);
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.cx}
          cy={s.cy}
          r={s.r}
          fill="#FFFDF8"
          opacity={s.opacity}
          style={{
            animation: `twinkle ${4 + s.delay}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </svg>
  );
}
