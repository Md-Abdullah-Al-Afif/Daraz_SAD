"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";

export default function BarChartSimple({ data, title, note, color = "#4fd1c5" }) {
  const [activeIdx, setActiveIdx] = useState(null);
  return (
    <div className="not-prose rounded-lg border border-[var(--color-hair)] bg-[var(--color-panel)] p-6 my-6">
      {title && <div className="font-[var(--font-display)] text-lg text-[var(--color-paper)] mb-1">{title}</div>}
      {note && <div className="text-sm text-[var(--color-paper-dim)] mb-4">{note}</div>}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis dataKey="name" tick={{ fill: "#a3adb8", fontSize: 12 }} axisLine={{ stroke: "#2a323d" }} tickLine={false} />
            <YAxis tick={{ fill: "#a3adb8", fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
              contentStyle={{ background: "#1d2530", border: "1px solid #2a323d", borderRadius: 8, color: "#edeee9", fontSize: 13 }}
              formatter={(value) => [`${value}%`, "Share"]}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} onMouseEnter={(_, idx) => setActiveIdx(idx)} onMouseLeave={() => setActiveIdx(null)}>
              {data.map((entry, idx) => (
                <Cell key={entry.name} fill={color} opacity={activeIdx === null || activeIdx === idx ? 1 : 0.4} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
