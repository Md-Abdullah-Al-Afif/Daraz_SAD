import PageHeader from "@/components/PageHeader";
import ChapterNav from "@/components/ChapterNav";
import Doc from "@/components/doc/Doc";
import Tabs from "@/components/Tabs";
import ReportImage from "@/components/charts/ReportImage";
import content from "@/data/content/chapter3a.json";

export const metadata = { title: "Chapter 3 — Information Gathering · Daraz SAD" };

export default function Chapter3Gathering() {
  const intro = content.slice(2, 91); // 3.1 Introduction through the published-FAQ Q&A
  const sellerInterview = content.slice(91, 96);
  const customerInterview = content.slice(96, 101);
  const riderInterview = content.slice(101, 108);

  const orderFormStart = content.findIndex((node) => node.type === "heading" && node.text === "Order Form");
  const sellerRegistrationStart = content.findIndex(
    (node) => node.type === "heading" && node.text === "Seller Registration Form"
  );
  const returnFeedbackStart = content.findIndex(
    (node) => node.type === "heading" && node.text === "Return Feedback and Review"
  );
  const customerReviewStart = content.findIndex(
    (node) => node.type === "heading" && node.text === "Customer Feedback and Review Form"
  );
  const ccmsStart = content.findIndex((node) => node.type === "heading" && node.text === "CCMS");
  const reviewReportsStart = content.findIndex(
    (node) => node.type === "heading" && node.text === "Review Of Public Reports and Disclosures"
  );

  const beforeForms = content.slice(108, orderFormStart);
  const orderForm = content.slice(orderFormStart, sellerRegistrationStart);
  const sellerRegistration = content.slice(sellerRegistrationStart, returnFeedbackStart);
  const returnFeedback = content.slice(returnFeedbackStart, customerReviewStart);
  const customerReview = content.slice(customerReviewStart, ccmsStart);
  const ccms = content.slice(ccmsStart, reviewReportsStart);

  return (
    <div>
      <PageHeader
        kicker="Chapter 3 · Analysis"
        title="Information Gathering"
        dek="Review of literature, procedure, and forms; on-site observation; the customer-care helpline call; stakeholder interviews; and the questionnaires designed for this study."
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10">
        <Doc nodes={intro} />

        <h3 className="font-[var(--font-display)] text-[clamp(1.3rem,1.8vw,1.8rem)] leading-[1.2] text-[var(--color-paper)] font-semibold mt-10 mb-4 scroll-mt-24 first:mt-0">
          Stakeholder Interviews
        </h3>
        <Tabs tabs={["Seller — Arman Rahman", "Customer — Sifat Bhuyan", "Delivery Rider — Rakib"]}>
          <Doc nodes={sellerInterview} />
          <Doc nodes={customerInterview} />
          <Doc nodes={riderInterview} />
        </Tabs>

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
      </div>
      <ChapterNav
        prev={{ href: "/chapter-2", label: "Chapter 2 — Initial Feasibility Study" }}
        next={{ href: "/chapter-3-analysis", label: "Chapter 3 — Analysis & Cost-Benefit" }}
      />
    </div>
  );
}
