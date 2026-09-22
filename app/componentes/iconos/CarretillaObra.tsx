"use client";

export default function CarretillaObra({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <line x1={20} y1={30} x2={52} y2={22} stroke="var(--tinta-suave)" strokeWidth={3} strokeLinecap="round" />
      <line x1={22} y1={40} x2={52} y2={28} stroke="var(--tinta-suave)" strokeWidth={3} strokeLinecap="round" />
      <polygon points="16,22 44,22 38,38 20,38" fill="var(--amarillo-casco)" stroke="var(--tinta-titulo)" strokeWidth={1.5} />
      <circle cx={14} cy={44} r={7} fill="var(--tinta-titulo)" />
      <circle cx={14} cy={44} r={3} fill="var(--fondo)" />
      <line x1={20} y1={44} x2={8} y2={44} stroke="var(--tinta-suave)" strokeWidth={2} />
    </svg>
  );
}
