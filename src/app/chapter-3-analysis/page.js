import PageHeader from "@/components/PageHeader";
import ChapterNav from "@/components/ChapterNav";
import Doc from "@/components/doc/Doc";
import DonutChart from "@/components/charts/DonutChart";
import BarChartSimple from "@/components/charts/BarChartSimple";
import BreakEvenChart from "@/components/charts/BreakEvenChart";
import DFDDiagram from "@/components/charts/DFDDiagram";
import ReportImage from "@/components/charts/ReportImage";
import content from "@/data/content/chapter3b.json";
import { complaintCategories, starRatings, paymentMix, deliveryTimes, breakEven } from "@/data/charts";
import { dfdExisting } from "@/data/dfd";

export const metadata = { title: "Chapter 3 — Analysis & Cost-Benefit · Daraz SAD" };

export default function Chapter3Analysis() {
  return (
    <div>
      <PageHeader
        kicker="Chapter 3 · Analysis"
        title="Information Representation, Cost-Benefit & Root Cause"
        dek="The gathered information turned into charts, the existing system's Data Flow Diagram, a cost-benefit and break-even analysis, and a root-cause breakdown of all five problems."
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10">
        <Doc nodes={content.slice(0, 3)} />

        <Doc nodes={content.slice(3, 5)} />
        <DonutChart
          title="Figure 3.1 — Distribution of complaint categories"
          note="Share of reviews studied, by category"
          data={complaintCategories}
        />

        <Doc nodes={content.slice(5, 7)} />
        <BarChartSimple
          title="Figure 3.2 — Star-rating pattern"
          note="Approximate % of reviews on independent review platforms"
          data={starRatings}
          color="#4fd1c5"
        />

        <Doc nodes={content.slice(7, 9)} />
        <DonutChart title="Figure 3.3 — Payment method mix" note="Commonly reported for online orders in Bangladesh" data={paymentMix} />

        <Doc nodes={content.slice(9, 11)} />
        <BarChartSimple
          title="Figure 3.4 — Delivery time ranges"
          note="% of reviews mentioning each delivery window"
          data={deliveryTimes}
          color="#7fbf7a"
        />

        <Doc nodes={content.slice(11, 16)} />
        <ReportImage src="/Figure 3.5.png" alt="Figure 3.5 — DFD of the existing Daraz Bangladesh order and delivery system" caption="Figure 3.5" />
        <DFDDiagram
          title="Figure 3.5 — DFD of the existing Daraz Bangladesh order and delivery system"
          processes={dfdExisting.processes}
          footnote={
            <>
              <span className="text-[var(--color-paper)]">Data stores: </span>
              {dfdExisting.stores.join(" · ")}
              <br />
              <span className="text-[var(--color-paper)]">External entities: </span>
              {dfdExisting.entities.join(" · ")}
            </>
          }
        />
        <Doc nodes={content.slice(16, 20)} />

        <Doc nodes={content.slice(20, 27)} />

        <Doc nodes={content.slice(27, 31)} />
        <BreakEvenChart {...breakEven} />
        <Doc nodes={content.slice(31, 33)} />

        <Doc nodes={content.slice(33)} />
      </div>
      <ChapterNav
        prev={{ href: "/chapter-3-gathering", label: "Chapter 3 — Information Gathering" }}
        next={{ href: "/chapter-4-design", label: "Chapter 4 — Candidate Systems & Design" }}
      />
    </div>
  );
}
