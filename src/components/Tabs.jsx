"use client";

import { useState } from "react";

export default function Tabs({ tabs, children }) {
  const [active, setActive] = useState(0);
  const panels = Array.isArray(children) ? children : [children];
  return (
    <div className="not-prose my-6">
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === i
                ? "bg-[var(--color-signal)] border-[var(--color-signal)] text-[var(--color-ink)]"
                : "border-[var(--color-hair)] text-[var(--color-paper-dim)] hover:text-[var(--color-paper)]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {panels[active]}
    </div>
  );
}
