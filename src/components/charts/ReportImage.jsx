export default function ReportImage({ src, alt, caption = null }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-[var(--color-hair)] bg-[var(--color-panel)] p-3 md:p-4">
      <img
        src={src}
        alt={alt}
        className="block w-full rounded-lg border border-[var(--color-hair)] bg-[var(--color-ink)] object-contain"
      />
      {caption && <div className="mt-3 text-center text-[10.5px] text-[var(--color-paper-dim)]">{caption}</div>}
    </div>
  );
}
