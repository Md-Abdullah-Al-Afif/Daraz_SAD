import PageHeader from "@/components/PageHeader";
import ChapterNav from "@/components/ChapterNav";
import PrototypeLab from "@/components/prototype/PrototypeLab";

export const metadata = { title: "Working Prototype of the Proposed System · Daraz SAD" };

export default function PrototypePage() {
  return (
    <div>
      <PageHeader
        kicker="Prototype"
        title="The proposed system, working"
        dek="Interactive front-end screens for the five new processes from Chapter 4. Try each one: the validation, the trust score, the freeze button, the receipt, the proof lock, and the SLA countdown all respond. Data is fake and there is no backend."
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10">
        <PrototypeLab />
      </div>
      <ChapterNav
        prev={{ href: "/chapter-4-database", label: "Chapter 4 — Database & Forms" }}
        next={{ href: "/team", label: "Group & Course" }}
      />
    </div>
  );
}
