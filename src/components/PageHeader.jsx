export default function PageHeader({ kicker, title, dek }) {
  return (
    <div className="px-6 md:px-10 pt-24 md:pt-20 pb-10 max-w-4xl mx-auto">
      {kicker && (
        <div className="flex items-baseline gap-3 mb-4">
          <span className="font-mono text-sm text-[var(--color-signal)]">{kicker}</span>
          <span className="h-px flex-1 bg-[var(--color-hair)]" />
        </div>
      )}
      <h1 className="font-[var(--font-display)] text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.08] text-[var(--color-paper)]">
        {title}
      </h1>
      {dek && <p className="mt-4 text-[var(--color-paper-dim)] text-lg leading-relaxed max-w-2xl">{dek}</p>}
    </div>
  );
}
