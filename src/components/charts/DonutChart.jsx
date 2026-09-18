"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

export default function DonutChart({ data, title, note }) {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="not-prose rounded-lg border border-[var(--color-hair)] bg-[var(--color-panel)] p-6 my-6">
      {title && <div className="font-[var(--font-display)] text-lg text-[var(--color-paper)] mb-1">{title}</div>}
      {note && <div className="text-sm text-[var(--color-paper-dim)] mb-4">{note}</div>}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-full sm:w-56 h-56 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={2}
                stroke="none"
                onMouseEnter={(_, idx) => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                {data.map((entry, idx) => (
                  <Cell
                    key={entry.name}
                    fill={entry.color}
                    opacity={activeIdx === null || activeIdx === idx ? 1 : 0.35}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "#1d2530",
                  border: "1px solid #2a323d",
                  borderRadius: 8,
                  color: "#edeee9",
                  fontSize: 13,
                }}
                formatter={(value, name) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex-1 w-full space-y-2">
          {data.map((entry, idx) => (
            <li
              key={entry.name}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className={`flex items-center justify-between text-sm rounded px-2 py-1.5 transition-colors ${
                activeIdx === idx ? "bg-[var(--color-panel-2)]" : ""
              }`}
            >
              <span className="flex items-center gap-2 text-[var(--color-paper)]">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: entry.color }} />
                {entry.name}
              </span>
              <span className="font-mono text-[var(--color-paper-dim)]">{entry.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
