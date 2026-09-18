import PageHeader from "@/components/PageHeader";
import ChapterNav from "@/components/ChapterNav";

export const metadata = { title: "Group & Course · Daraz SAD" };

const members = [
  "Md. Abdullah Al Afif",
  "Md. Ajijul Hakim Sarkar",
  "Aronno Chakrabartti",
  "Ishrat Jahan Sharmin",
];

export default function Team() {
  return (
    <div>
      <PageHeader kicker="Cover Page" title="Group 05" dek="Submitted for CSE 346, Section 20, Summer 2026." />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="font-[var(--font-display)] text-xl text-[var(--color-paper)] mb-4">Submitted by,</div>
            <ul className="space-y-3">
              {members.map((m) => (
                <li key={m} className="border-b border-[var(--color-hair)] pb-2">
                  <span className="text-[var(--color-paper)]">{m}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[var(--color-paper-dim)] leading-relaxed">
              Privacy Note: Student IDs have been omitted from this public version to protect the privacy of the group members.
            </p>
          </div>
          <div className="text-sm text-[var(--color-paper-dim)] leading-relaxed">
            <div className="text-[var(--color-paper)] mb-1">Submitted to,</div>
            <p className="mb-6">
              Md. Tanbeer Jubaer
              <br />
              Lecturer, Dept. of CSE, Southeast University
            </p>
            <div className="text-[var(--color-paper)] mb-1">Course Title</div>
            <p className="mb-6">Information System Design and Software Engineering Lab</p>
            <div className="text-[var(--color-paper)] mb-1">Course Code</div>
            <p className="mb-6">CSE 346</p>
            <div className="text-[var(--color-paper)] mb-1">Section</div>
            <p className="mb-6">20</p>
            <div className="text-[var(--color-paper)] mb-1">Semester</div>
            <p>Summer 2026</p>
            <div className="text-[var(--color-paper)] mt-6 mb-1">Group</div>
            <p>05</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-hair)] font-mono text-[11px] text-[var(--color-paper-dim)]">
          Report title: "System Analysis and Design of Daraz Bangladesh" — Department of
          Computer Science and Engineering.
        </div>
      </div>
      <ChapterNav prev={{ href: "/chapter-4-database", label: "Chapter 4 — Database Design & Forms" }} />
    </div>
  );
}
