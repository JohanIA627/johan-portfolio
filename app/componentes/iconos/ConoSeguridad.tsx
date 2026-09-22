"use client";

export default function ConoSeguridad({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <rect x={8} y={48} width={36} height={6} rx={2} fill="var(--tinta-titulo)" />
      <polygon points="26,8 14,48 38,48" fill="var(--amarillo-casco)" stroke="var(--tinta-titulo)" strokeWidth={1.5} />
      <polygon points="20.5,28 31.5,28 29,36 23,36" fill="var(--tinta-titulo)" />
      <polygon points="17.5,40 34.5,40 32.5,46 19.5,46" fill="var(--tinta-titulo)" />
    </svg>
  );
}
