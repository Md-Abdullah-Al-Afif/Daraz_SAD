import PageHeader from "@/components/PageHeader";
import ChapterNav from "@/components/ChapterNav";
import Doc from "@/components/doc/Doc";
import WeightedMatrix from "@/components/charts/WeightedMatrix";
import DFDDiagram from "@/components/charts/DFDDiagram";
import ReportImage from "@/components/charts/ReportImage";
import content from "@/data/content/chapter4a.json";
import { dfdProposed } from "@/data/dfd";

export const metadata = { title: "Chapter 4 — Candidate Systems & Design · Daraz SAD" };

export default function Chapter4Design() {
  return (
    <div>
      <PageHeader
        kicker="Chapter 4 · Design"
        title="Candidate Systems & Proposed Design"
        dek="Two candidate systems compared and scored, the DFD of the selected system, and a mapping of how it solves each problem identified in Chapter 1."
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10">
        <Doc nodes={content.slice(2, 22)} />
        <WeightedMatrix rows={content[22].rows} />
        <Doc nodes={content.slice(23, 29)} />
        <ReportImage src="/figure-4-1.png" alt="Figure 4.1 — DFD of the proposed candidate system (Candidate System 1)" caption="Figure 4.1" />
        <DFDDiagram
          title="Figure 4.1 — DFD of the proposed candidate system (Candidate System 1)"
          processes={dfdProposed.processes}
          footnote={
            <>
              <span className="text-[var(--color-paper)]">New / updated data stores: </span>
              {dfdProposed.stores.join(" · ")}
              <br />
              <span className="text-[var(--color-paper)]">External entities: </span>
              {dfdProposed.entities.join(" · ")}
            </>
          }
        />
        <Doc nodes={content.slice(29, 37)} />
      </div>
      <ChapterNav
        prev={{ href: "/chapter-3-analysis", label: "Chapter 3 — Analysis & Cost-Benefit" }}
        next={{ href: "/chapter-4-database", label: "Chapter 4 — Database Design & Forms" }}
      />
    </div>
  );
}
