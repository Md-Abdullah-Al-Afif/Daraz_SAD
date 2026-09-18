"use client";

import { useState } from "react";
import { ChevronRight, KeyRound } from "lucide-react";

// rows: verbatim ["Attribute","Data Type","Size / Notes"] rows extracted
// from the report's own data-dictionary tables (Section 4.3.3).
export default function EntityCard({ name, rows }) {
  const [open, setOpen] = useState(false);
  const [header, ...body] = rows;

  return (
    <div className="not-prose rounded-lg border border-[var(--color-hair)] bg-[var(--color-panel)] overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between px-5 py-4">
        <span className="font-mono text-[15px] text-[var(--color-teal)]">{name}</span>
        <span className="flex items-center gap-2">
          <span className="text-xs text-[var(--color-paper-dim)] font-mono">{body.length} fields</span>
          <ChevronRight size={16} className={`text-[var(--color-paper-dim)] transition-transform ${open ? "rotate-90" : ""}`} />
        </span>
      </button>
      {open && (
        <div className="border-t border-[var(--color-hair)] overflow-x-auto">
          <table className="w-full text-sm min-w-[420px]">
            <thead>
              <tr className="border-b border-[var(--color-hair)]">
                {header.map((h, i) => (
                  <th key={i} className="text-left font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-paper-dim)] px-5 py-2">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className="border-b border-[var(--color-hair)] last:border-0">
                  <td className="px-5 py-2.5 font-mono text-[13px] text-[var(--color-paper)] whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      {row[2]?.toLowerCase().includes("primary key") && (
                        <KeyRound size={11} className="text-[var(--color-gold)]" />
                      )}
                      {row[0]}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 font-mono text-[12px] text-[var(--color-paper-dim)] whitespace-nowrap">{row[1]}</td>
                  <td className="px-5 py-2.5 text-[12.5px] text-[var(--color-paper-dim)]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
