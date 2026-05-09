type SparkleProps = {
  size?: number;
  className?: string;
  variant?: 'gold' | 'magenta' | 'starlight' | 'turquoise';
};

const VARIANTS: Record<NonNullable<SparkleProps['variant']>, string> = {
  gold: '#E0C766',
  magenta: '#E04C8B',
  starlight: '#FFFDF8',
  turquoise: '#5EEAD4',
};

export function Sparkle({ size = 14, className = '', variant = 'gold' }: SparkleProps) {
  const fill = VARIANTS[variant];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path
        d="M12 0 L13.5 9.2 Q13.7 10.5 15 10.7 L24 12 L15 13.3 Q13.7 13.5 13.5 14.8 L12 24 L10.5 14.8 Q10.3 13.5 9 13.3 L0 12 L9 10.7 Q10.3 10.5 10.5 9.2 Z"
        fill={fill}
      />
    </svg>
  );
}
