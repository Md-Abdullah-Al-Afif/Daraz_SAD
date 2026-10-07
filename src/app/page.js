import Link from "next/link";
import { ArrowRight } from "lucide-react";

const meta = {
  members: [
    "Md. Abdullah Al Afif",
    "Md. Ajijul Hakim Sarkar",
    "Aronno Chakrabartti",
    "Ishrat Jahan Sharmin",
  ],
};

const CHAPTERS = [
  { href: "/chapter-1", num: "01", title: "Recognition of Need", dek: "Company background, organizational structure, and the five problems identified from customer reviews and news reports." },
  { href: "/chapter-2", num: "02", title: "Initial Feasibility Study", dek: "Technical, economic, operational, legal, and schedule feasibility for each of the five problems." },
  { href: "/chapter-3-gathering", num: "03a", title: "Information Gathering", dek: "Literature and procedure review, on-site observation, the helpline and stakeholder interviews, and questionnaires." },
  { href: "/chapter-3-analysis", num: "03b", title: "Analysis, Cost-Benefit & Root Cause", dek: "Charts and graphs, the existing system's DFD, cost-benefit analysis, break-even point, and root-cause analysis." },
  { href: "/chapter-4-design", num: "04a", title: "Candidate Systems & Design", dek: "Two candidate systems compared and scored, the selected system's DFD, and how it solves each problem." },
  { href: "/chapter-4-database", num: "04b", title: "Database Design & Forms", dek: "The Entity-Relationship diagram, full data dictionary, and wireframe designs for four new/modified forms." },
  { href: "/prototype", num: "05", title: "Working Prototype", dek: "Interactive screens of the proposed system: trust score, OTP and account freeze, return receipt, rider proof, and support SLA." },
];

export default function Home() {
  return (
    <div>
      <section className="min-h-[92vh] flex flex-col justify-between px-6 md:px-10 pt-24 pb-10 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full opacity-[0.10] blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-signal), transparent 70%)" }}
          aria-hidden
        />
        <div className="mx-auto max-w-4xl w-full">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-paper-dim)] mb-8 flex-wrap">
            <span className="text-[var(--color-signal)]">CSE 346</span>
            <span>·</span>
            <span>Section 20</span>
            <span>·</span>
            <span>Summer 2026</span>
            <span>·</span>
            <span>Information System Design and Software Engineering Lab</span>
          </div>

          <h1 className="font-[var(--font-display)] text-[clamp(2.2rem,6vw,4.6rem)] leading-[1.03] font-semibold text-[var(--color-paper)] max-w-3xl">
            System Analysis &amp; Design of{" "}
            <span className="italic font-normal" style={{ color: "var(--color-signal)" }}>
              Daraz Bangladesh
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[var(--color-paper-dim)] text-lg leading-relaxed">
            This website presents the complete System Analysis and Design of Daraz Bangladesh,
            structured according to the four chapters of the group report: Recognition of Need,
            Feasibility Study, Analysis, and Design. Each chapter is presented in full,
            preserving the report’s detailed content, tables, figures, diagrams, and interview
            transcripts.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/chapter-1"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-signal)] text-[var(--color-ink)] font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Start reading — Chapter 1
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-hair)] text-[var(--color-paper)] font-medium text-sm hover:border-[var(--color-signal)] transition-colors"
            >
              Group &amp; course details
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-4xl w-full mt-16">
          <div className="text-sm text-[var(--color-paper-dim)] leading-relaxed">
            <div className="text-[var(--color-paper)] mb-1 font-medium">Group 05 · Submitted by</div>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {meta.members.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-baseline gap-3 mb-8">
            <span className="font-mono text-sm text-[var(--color-signal)]">Contents</span>
            <span className="h-px flex-1 bg-[var(--color-hair)]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {CHAPTERS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group rounded-lg border border-[var(--color-hair)] bg-[var(--color-panel)] p-5 hover:border-[var(--color-signal)]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[var(--color-signal)]">{c.num}</span>
                  <ArrowRight size={14} className="text-[var(--color-paper-dim)] group-hover:text-[var(--color-signal)] group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="font-[var(--font-display)] text-lg text-[var(--color-paper)] mb-1.5">{c.title}</div>
                <div className="text-[13px] text-[var(--color-paper-dim)] leading-snug">{c.dek}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
