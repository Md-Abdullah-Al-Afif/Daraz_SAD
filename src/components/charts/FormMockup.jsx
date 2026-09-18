"use client";

export default function FormMockup({ title, fields, submitLabel, caption, secondaryAction = null }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${title} submitted`);
  };

  return (
    <div className="not-prose my-7 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[380px] rounded-[28px] border border-[var(--color-hair)] bg-[var(--color-panel)] p-4 shadow-[0_0_0_1px_rgba(42,50,61,0.85)]"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-rose)]/80" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-paper-dim)]">
            app
          </span>
        </div>

        <h4 className="mb-4 font-[var(--font-display)] text-[clamp(1.35rem,2vw,1.8rem)] leading-[1.15] text-[var(--color-paper)]">
          {title}
        </h4>

        <div className="space-y-3">
          {fields.map((field, index) => (
            <label key={`${field.label}-${index}`} className="block text-left">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-paper-dim)]">
                {field.label}
              </span>

              {field.type === "select" ? (
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-[var(--color-hair)] bg-[var(--color-ink)]/40 px-3 py-2.5 text-[13px] text-[var(--color-paper)] outline-none transition focus:border-[var(--color-signal)] focus:ring-2 focus:ring-[var(--color-signal)]/40"
                  >
                    <option value="" disabled>
                      {field.placeholder}
                    </option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-paper-dim)]">
                    ▾
                  </span>
                </div>
              ) : field.type === "file" ? (
                <div className="rounded-xl border border-[var(--color-hair)] bg-[var(--color-ink)]/40 px-3 py-2.5 text-[13px] text-[var(--color-paper)]">
                  <input
                    type="file"
                    className="block w-full text-[12px] text-[var(--color-paper)] file:mr-3 file:rounded file:border-0 file:bg-[var(--color-signal)] file:px-2.5 file:py-1.5 file:font-medium file:text-[11px] file:text-[var(--color-ink)] file:shadow-none"
                  />
                </div>
              ) : (
                <input
                  type={field.type || "text"}
                  placeholder={field.placeholder || ""}
                  className="w-full rounded-xl border border-[var(--color-hair)] bg-[var(--color-ink)]/40 px-3 py-2.5 text-[13px] text-[var(--color-paper)] placeholder:text-[var(--color-paper-dim)] outline-none transition focus:border-[var(--color-signal)] focus:ring-2 focus:ring-[var(--color-signal)]/40"
                />
              )}

              {field.note && (
                <p className="mt-1.5 text-[10px] leading-relaxed text-[var(--color-paper-dim)]">{field.note}</p>
              )}
            </label>
          ))}
        </div>

        {secondaryAction && (
          <button
            type="button"
            className="mt-3 w-full rounded-full border border-[var(--color-hair)] bg-transparent px-3 py-2 text-center font-medium text-[var(--color-signal)] transition hover:border-[var(--color-signal)] hover:bg-[var(--color-signal)]/5"
          >
            {secondaryAction}
          </button>
        )}

        <button
          type="submit"
          className="mt-4 w-full rounded-xl bg-[var(--color-signal)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:opacity-90"
        >
          {submitLabel}
        </button>

        {caption && <p className="mt-3 text-[10.5px] leading-relaxed text-[var(--color-paper-dim)]">{caption}</p>}
      </form>
    </div>
  );
}
