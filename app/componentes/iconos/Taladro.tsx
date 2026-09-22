"use client";

export default function Taladro({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <rect x={10} y={20} width={30} height={13} rx={5} fill="var(--amarillo-casco)" stroke="var(--tinta-titulo)" strokeWidth={1.5} />
      <rect x={13} y={31} width={9} height={17} rx={3} fill="var(--tinta-titulo)" transform="rotate(8 17 31)" />
      <rect x={11} y={45} width={13} height={6} rx={2} fill="var(--tinta-suave)" />
      <circle cx={43} cy={26.5} r={5} fill="var(--tinta-suave)" stroke="var(--tinta-titulo)" strokeWidth={1} />
      <line x1={48} y1={26.5} x2={57} y2={26.5} stroke="var(--tinta-titulo)" strokeWidth={3} strokeLinecap="round" />
      <rect x={17} y={17} width={7} height={5} rx={1.5} fill="var(--acento)" />
    </svg>
  );
}
