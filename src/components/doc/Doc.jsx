import TableBlock from "./TableBlock";

const topicHeadingClasses =
  "font-[var(--font-display)] text-[clamp(1.3rem,1.8vw,1.8rem)] leading-[1.2] text-[var(--color-paper)] font-semibold mt-10 mb-4 scroll-mt-24 first:mt-0";

function headingClasses(level) {
  return topicHeadingClasses;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Heading({ node }) {
  const isCaption = /^(Figure|Table)\s+\d/.test(node.text.trim());

  if (isCaption) {
    return (
      <p id={slugify(node.text)} className="font-mono text-[12.5px] text-[var(--color-paper-dim)] border-l-2 border-[var(--color-signal)]/50 pl-3 my-4 leading-relaxed">
        {node.text}
      </p>
    );
  }

  const Tag = `h${Math.min(node.level || 4, 6)}`;
  return (
    <Tag id={slugify(node.text)} className={headingClasses(node.level)}>
      {node.text}
    </Tag>
  );
}

export function Para({ node }) {
  const isCaption = /^(Figure|Table)\s+\d/.test(node.text.trim());
  if (isCaption) {
    return (
      <p className="font-mono text-[12.5px] text-[var(--color-paper-dim)] border-l-2 border-[var(--color-signal)]/50 pl-3 my-4 leading-relaxed">
        {node.text}
      </p>
    );
  }
  return <p>{node.text}</p>;
}

export function ListBlock({ node }) {
  const Tag = node.ordered ? "ol" : "ul";
  return (
    <Tag>
      {node.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  );
}

// Renders a flat array of doc nodes (headings/paragraphs/lists/tables) in order.
export default function Doc({ nodes }) {
  return (
    <div className="doc-prose">
      {nodes.map((node, i) => {
        if (node.type === "heading") return <Heading key={i} node={node} />;
        if (node.type === "para") return <Para key={i} node={node} />;
        if (node.type === "list") return <ListBlock key={i} node={node} />;
        if (node.type === "table") return <TableBlock key={i} node={node} />;
        return null;
      })}
    </div>
  );
}
