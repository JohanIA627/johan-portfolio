"use client";

export default function Volqueta({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <rect x={4} y={38} width={50} height={4} rx={2} fill="var(--tinta-suave)" />
      <rect x={4} y={24} width={16} height={16} rx={2} fill="var(--tinta-titulo)" />
      <rect x={7} y={27} width={8} height={7} rx={1} fill="var(--fondo)" />
      <polygon points="20,38 20,20 42,16 50,24 50,38" fill="var(--amarillo-casco)" stroke="var(--tinta-titulo)" strokeWidth={1.5} />
      <line x1={26} y1={22} x2={26} y2={36} stroke="var(--tinta-titulo)" strokeOpacity={0.4} strokeWidth={1.2} />
      <line x1={34} y1={19} x2={34} y2={36} stroke="var(--tinta-titulo)" strokeOpacity={0.4} strokeWidth={1.2} />
      <circle cx={14} cy={44} r={6} fill="var(--tinta-titulo)" />
      <circle cx={14} cy={44} r={2.4} fill="var(--fondo)" />
      <circle cx={42} cy={44} r={6} fill="var(--tinta-titulo)" />
      <circle cx={42} cy={44} r={2.4} fill="var(--fondo)" />
    </svg>
  );
}
