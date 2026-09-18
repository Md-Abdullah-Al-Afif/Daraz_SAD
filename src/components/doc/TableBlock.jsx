export default function TableBlock({ node }) {
  const [header, ...body] = node.rows;
  return (
    <div className="not-prose rounded-lg border border-[var(--color-hair)] bg-[var(--color-panel)] overflow-x-auto my-6">
      <table className="w-full text-sm min-w-[560px]">
        <thead>
          <tr className="border-b border-[var(--color-hair)]">
            {header.map((h, i) => (
              <th
                key={i}
                className="text-left font-mono text-[11px] uppercase tracking-wide text-[var(--color-paper-dim)] px-5 py-3 font-medium"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-[var(--color-hair)] last:border-0 hover:bg-[var(--color-panel-2)]/50 transition-colors"
            >
              {row.map((cell, ci) => (
                <td key={ci} className="px-5 py-3.5 text-[var(--color-paper)] align-top leading-relaxed text-[14px]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
