export default function DFDDiagram({ processes, footnote, title }) {
  return (
    <div className="not-prose rounded-lg border border-[var(--color-hair)] bg-[var(--color-panel)] p-6 md:p-8 my-6">
      {title && <div className="font-[var(--font-display)] text-lg text-[var(--color-paper)] mb-5">{title}</div>}
      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[var(--color-hair)]" aria-hidden />
        <ol className="space-y-5">
          {processes.map((p) => (
            <li key={p.id} className="relative flex gap-5 pl-0">
              <div
                className={`relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-mono text-[11px] border ${
                  p.isNew
                    ? "bg-[var(--color-signal)] text-[var(--color-ink)] border-[var(--color-signal)]"
                    : "bg-[var(--color-panel-2)] text-[var(--color-paper-dim)] border-[var(--color-hair)]"
                }`}
              >
                {p.id}
              </div>
              <div className="pt-1.5 pb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[var(--color-paper)] font-medium text-[15px]">{p.name}</span>
                  {p.isNew && (
                    <span className="font-mono text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-[var(--color-signal)]/15 text-[var(--color-signal)] border border-[var(--color-signal)]/30">
                      new
                    </span>
                  )}
                </div>
                {p.note && <div className="text-sm text-[var(--color-paper-dim)] mt-0.5">{p.note}</div>}
              </div>
            </li>
          ))}
        </ol>
      </div>
      {footnote && (
        <div className="mt-6 pt-4 border-t border-[var(--color-hair)] text-sm text-[var(--color-paper-dim)] leading-relaxed">
          {footnote}
        </div>
      )}
    </div>
  );
}
