// rows: verbatim table rows ["Criteria","Weight","System 1 Rating","System 1 Score","System 2 Rating","System 2 Score"]
// with a final "Total" row — extracted directly from the report's Table 4.2.
export default function WeightedMatrix({ rows }) {
  const [header, ...body] = rows;
  const dataRows = body.filter((r) => r[0] !== "Total");
  const totalRow = body.find((r) => r[0] === "Total");
  const maxScore = Math.max(...dataRows.map((r) => Math.max(Number(r[3]), Number(r[5]))));

  const Bar = ({ score, color }) => (
    <div className="flex items-center gap-2">
      <div className="w-16 h-2 rounded-full bg-[var(--color-hair)] overflow-hidden shrink-0">
        <div className="h-full rounded-full" style={{ width: `${(score / maxScore) * 100}%`, background: color }} />
      </div>
      <span className="font-mono text-xs text-[var(--color-paper)] w-5 text-right">{score}</span>
    </div>
  );

  return (
    <div className="not-prose rounded-lg border border-[var(--color-hair)] bg-[var(--color-panel)] overflow-x-auto my-6">
      <table className="w-full text-sm min-w-[620px]">
        <thead>
          <tr className="border-b border-[var(--color-hair)]">
            <th className="text-left font-mono text-[11px] uppercase tracking-wide text-[var(--color-paper-dim)] px-5 py-3">{header[0]}</th>
            <th className="text-left font-mono text-[11px] uppercase tracking-wide text-[var(--color-paper-dim)] px-5 py-3">{header[1]}</th>
            <th className="text-left font-mono text-[11px] uppercase tracking-wide text-[var(--color-paper-dim)] px-5 py-3">System 1</th>
            <th className="text-left font-mono text-[11px] uppercase tracking-wide text-[var(--color-paper-dim)] px-5 py-3">System 2</th>
          </tr>
        </thead>
        <tbody>
          {dataRows.map((r) => (
            <tr key={r[0]} className="border-b border-[var(--color-hair)] last:border-0">
              <td className="px-5 py-3.5 text-[var(--color-paper)]">{r[0]}</td>
              <td className="px-5 py-3.5 font-mono text-[var(--color-paper-dim)]">{r[1]}</td>
              <td className="px-5 py-3.5">
                <Bar score={Number(r[3])} color="var(--color-signal)" />
                <span className="text-[11px] text-[var(--color-paper-dim)] font-mono">rating {r[2]}/5</span>
              </td>
              <td className="px-5 py-3.5">
                <Bar score={Number(r[5])} color="var(--color-teal)" />
                <span className="text-[11px] text-[var(--color-paper-dim)] font-mono">rating {r[4]}/5</span>
              </td>
            </tr>
          ))}
          {totalRow && (
            <tr>
              <td className="px-5 py-4 text-[var(--color-paper)] font-medium">Total</td>
              <td />
              <td className="px-5 py-4 font-[var(--font-display)] text-xl" style={{ color: "var(--color-signal)" }}>
                {totalRow[3]}
              </td>
              <td className="px-5 py-4 font-[var(--font-display)] text-xl" style={{ color: "var(--color-teal)" }}>
                {totalRow[5]}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
