import PageHeader from "@/components/PageHeader";
import ChapterNav from "@/components/ChapterNav";
import Doc from "@/components/doc/Doc";
import content from "@/data/content/chapter2.json";

export const metadata = { title: "Chapter 2 — Initial Feasibility Study · Daraz SAD" };

export default function Chapter2() {
  const nodes = content.slice(2);
  return (
    <div>
      <PageHeader
        kicker="Chapter 2"
        title="Initial Feasibility Study"
        dek="Technical, economic, operational, legal, and schedule feasibility for each of the five problems identified in Chapter 1."
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10">
        <Doc nodes={nodes} />
      </div>
      <ChapterNav
        prev={{ href: "/chapter-1", label: "Chapter 1 — Recognition of Need" }}
        next={{ href: "/chapter-3-gathering", label: "Chapter 3 — Information Gathering" }}
      />
    </div>
  );
}
