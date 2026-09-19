import PageHeader from "@/components/PageHeader";
import ChapterNav from "@/components/ChapterNav";
import Doc from "@/components/doc/Doc";
import Tabs from "@/components/Tabs";
import ReportImage from "@/components/charts/ReportImage";
import content from "@/data/content/chapter3a.json";

export const metadata = { title: "Chapter 3 — Information Gathering · Daraz SAD" };

export default function Chapter3Gathering() {
  // Find a heading by exact text, searching forward from `from`
  const findHeading = (text, from = 0) =>
    content.findIndex(
      (node, i) => i >= from && node.type === "heading" && node.text === text
    );

  const INTRO_END = 91; // end of the published-FAQ Q&A

  // Locate each form heading in order, so we always hit the FIRST (top) copy
  const orderFormStart = findHeading("Order Form");
  const sellerRegistrationStart = findHeading("Seller Registration Form", orderFormStart);
  const returnFeedbackStart = findHeading("Return Feedback and Review", sellerRegistrationStart);
  const customerReviewStart = findHeading("Customer Feedback and Review Form", returnFeedbackStart);
  const ccmsStart = findHeading("CCMS", customerReviewStart);
  const reviewReportsStart = findHeading("Review Of Public Reports and Disclosures", ccmsStart);

  if (process.env.NODE_ENV !== "production") {
    const idx = { orderFormStart, sellerRegistrationStart, returnFeedbackStart, customerReviewStart, ccmsStart, reviewReportsStart };
    Object.entries(idx).forEach(([k, v]) => v === -1 && console.warn(`[Chapter3] heading not found: ${k}`));
  }

  // Intro is split around the forms section so images sit inline
  const beforeForms = content.slice(2, orderFormStart);          // 3.1 → "Review Of Forms" intro paragraph
  const orderForm = content.slice(orderFormStart, sellerRegistrationStart);
  const sellerRegistration = content.slice(sellerRegistrationStart, returnFeedbackStart);
  const returnFeedback = content.slice(returnFeedbackStart, customerReviewStart);
  const customerReview = content.slice(customerReviewStart, ccmsStart);
  const ccms = content.slice(ccmsStart, reviewReportsStart);
  const afterForms = content.slice(reviewReportsStart, INTRO_END); // public reports → on-site → interviews → FAQ

  const sellerInterview = content.slice(91, 96);
  const customerInterview = content.slice(96, 101);
  const riderInterview = content.slice(101, 108);
  // content.slice(108) is the duplicated forms block: intentionally not rendered

  return (
    <div>
      <PageHeader
        kicker="Chapter 3 · Analysis"
        title="Information Gathering"
        dek="Review of literature, procedure, and forms; on-site observation; the customer-care helpline call; stakeholder interviews; and the questionnaires designed for this study."
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10">
        <Doc nodes={beforeForms} />

        <Doc nodes={orderForm} />
        <ReportImage src="/order form.png" alt="Order form" caption="Order form" />

        <Doc nodes={sellerRegistration} />
        <ReportImage src="/Seller registration form.png" alt="Seller registration form" caption="Seller registration form" />

        <Doc nodes={returnFeedback} />
        <ReportImage src="/Return Feedback.png" alt="Return feedback and review form" caption="Return / Refund request form" />

        <Doc nodes={customerReview} />
        <ReportImage src="/Customer feedback and review.jfif" alt="Customer feedback and review form" caption="Customer feedback and review form" />

        <Doc nodes={ccms} />
        <ReportImage src="/CCMS.png" alt="Central Complaint Management System" caption="CCMS" />

        <Doc nodes={afterForms} />

        <h3 className="font-[var(--font-display)] text-[clamp(1.3rem,1.8vw,1.8rem)] leading-[1.2] text-[var(--color-paper)] font-semibold mt-10 mb-4 scroll-mt-24 first:mt-0">
          Stakeholder Interviews
        </h3>
        <Tabs tabs={["Seller — Arman Rahman", "Customer — Sifat Bhuyan", "Delivery Rider — Rakib"]}>
          <Doc nodes={sellerInterview} />
          <Doc nodes={customerInterview} />
          <Doc nodes={riderInterview} />
        </Tabs>
      </div>
      <ChapterNav
        prev={{ href: "/chapter-2", label: "Chapter 2 — Initial Feasibility Study" }}
        next={{ href: "/chapter-3-analysis", label: "Chapter 3 — Analysis & Cost-Benefit" }}
      />
    </div>
  );
}