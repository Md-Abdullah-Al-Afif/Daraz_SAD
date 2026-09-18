import PageHeader from "@/components/PageHeader";
import ChapterNav from "@/components/ChapterNav";
import Doc from "@/components/doc/Doc";
import content from "@/data/content/chapter1.json";

export const metadata = { title: "Chapter 1 — Recognition of Need · Daraz SAD" };

export default function Chapter1() {
  // skip the raw "Chapter 1" / "Recognition of Need" title nodes (0,1) —
  // the page header above already presents them.
  const nodes = content.slice(2);
  return (
    <div>
      <PageHeader
        kicker="Chapter 1"
        title="Recognition of Need"
        dek="Company background, organizational structure, and the five problems identified from customer reviews and news reports."
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10">
        <Doc nodes={nodes} />
      </div>
      <ChapterNav next={{ href: "/chapter-2", label: "Chapter 2 — Initial Feasibility Study" }} />
    </div>
  );
}
