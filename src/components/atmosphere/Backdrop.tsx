import { StarField } from './StarField';

// Atmospheric bg layer that wraps the page. The body itself already has the
// gradient + nebula + grain; this adds the starfield on top of any section's
// background as decorative overlay.

export function Backdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <StarField count={140} seed={11} className="opacity-70" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-primary-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute top-[40%] -right-40 h-[520px] w-[520px] rounded-full bg-emphasis-700/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[10%] h-[360px] w-[360px] rounded-full bg-accent-700/15 blur-[120px]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
