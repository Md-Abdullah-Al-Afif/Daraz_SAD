"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine,
  CartesianGrid,
} from "recharts";

function buildSeries(fixedCost, price, variableCost, maxUnits = 25000, step = 1000) {
  const points = [];
  for (let u = 0; u <= maxUnits; u += step) {
    points.push({ units: u, cost: fixedCost + variableCost * u, revenue: price * u });
  }
  return points;
}

export default function BreakEvenChart({ fixedCost, pricePerUnit, variableCostPerUnit, breakEvenUnits }) {
  const data = buildSeries(fixedCost, pricePerUnit, variableCostPerUnit);
  const breakEvenY = fixedCost + variableCostPerUnit * breakEvenUnits;

  return (
    <div className="not-prose rounded-lg border border-[var(--color-hair)] bg-[var(--color-panel)] p-6 my-6">
      <div className="font-[var(--font-display)] text-lg text-[var(--color-paper)] mb-1">Break-even analysis, charted</div>
      <div className="text-sm text-[var(--color-paper-dim)] mb-4">
        Fixed cost ${fixedCost.toLocaleString()} · ${pricePerUnit}/unit benefit vs. ${variableCostPerUnit}/unit cost
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#2a323d" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="units"
              tick={{ fill: "#a3adb8", fontSize: 11 }}
              axisLine={{ stroke: "#2a323d" }}
              tickLine={false}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <YAxis
              tick={{ fill: "#a3adb8", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{ background: "#1d2530", border: "1px solid #2a323d", borderRadius: 8, color: "#edeee9", fontSize: 13 }}
              formatter={(value, name) => [`$${Math.round(value).toLocaleString()}`, name]}
              labelFormatter={(v) => `${v.toLocaleString()} units`}
            />
            <Line type="monotone" dataKey="cost" stroke="#ea6470" strokeWidth={2} dot={false} name="Total cost" />
            <Line type="monotone" dataKey="revenue" stroke="#5fb3ab" strokeWidth={2} dot={false} name="Total benefit" />
            <ReferenceLine x={breakEvenUnits} stroke="#ff7a33" strokeDasharray="4 4" />
            <ReferenceDot x={breakEvenUnits} y={breakEvenY} r={5} fill="#ff7a33" stroke="#10141a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
