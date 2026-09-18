import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ChapterNav({ prev, next }) {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-12 flex items-center justify-between gap-4 border-t border-[var(--color-hair)]">
      {prev ? (
        <Link href={prev.href} className="flex items-center gap-2 text-sm text-[var(--color-paper-dim)] hover:text-[var(--color-signal)] transition-colors">
          <ArrowLeft size={15} />
          <span>{prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="flex items-center gap-2 text-sm text-[var(--color-paper-dim)] hover:text-[var(--color-signal)] transition-colors ml-auto">
          <span>{next.label}</span>
          <ArrowRight size={15} />
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
