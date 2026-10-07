import PageHeader from "@/components/PageHeader";
import ChapterNav from "@/components/ChapterNav";
import Doc from "@/components/doc/Doc";
import EntityCard from "@/components/charts/EntityCard";
import FormMockup from "@/components/charts/FormMockup";
import ReportImage from "@/components/charts/ReportImage";
import content from "@/data/content/chapter4b.json";

export const metadata = { title: "Chapter 4 — Database Design & Forms · Daraz SAD" };

const ENTITY_PAIRS = [
  [9, 10],
  [11, 12],
  [13, 14],
  [15, 16],
  [17, 18],
  [19, 20],
  [21, 22],
  [23, 24],
];

const FORM_DESIGN_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "4.4 Form Design"
);
const SELLER_SECTION_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "4.4.1 Seller Verification Form"
);
const SELLER_FIGURE_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "Figure 4.3: Wireframe design of the proposed Seller Verification form"
);
const OTP_SECTION_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "4.4.2 OTP / Account Security Verification Form"
);
const OTP_FIGURE_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "Figure 4.4: Wireframe design of the proposed OTP/Account security Verification form."
);
const REFUND_SECTION_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "4.4.3 Return / Refund Request Form"
);
const REFUND_FIGURE_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "Figure 4.5: Wireframe design of the proposed Return / Refund Request form."
);
const RIDER_SECTION_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "4.4.4 Delivery Proof Capture Form(Rider App)"
);
const RIDER_FIGURE_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "Figure 4.5: Wireframe design of the proposed Delivery proof Capture form of the Rider App."
);
const CONCLUSION_START = content.findIndex(
  (node) => node.type === "heading" && node.text === "4.5 Conclusion"
);

export default function Chapter4Database() {
  return (
    <div>
      <PageHeader
        kicker="Chapter 4 · Design"
        title="Database Design & Form Design"
        dek="The Entity-Relationship diagram, the full data dictionary for every table, and wireframe designs for the four new or modified forms."
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10">
        <Doc nodes={content.slice(0, 9)} />
        <ReportImage src="/er diagram.png" alt="ER diagram" caption="Entity-Relationship diagram" />

        <div className="not-prose grid md:grid-cols-2 gap-3 my-6">
          {ENTITY_PAIRS.map(([hIdx, tIdx]) => (
            <EntityCard key={hIdx} name={content[hIdx].text} rows={content[tIdx].rows} />
          ))}
        </div>

        <Doc nodes={content.slice(FORM_DESIGN_START, SELLER_SECTION_START)} />
        <Doc nodes={content.slice(SELLER_SECTION_START, SELLER_FIGURE_START + 2)} />
        <FormMockup
          title="Seller Verification"
          fields={[
            { label: "Shop Name", type: "text", placeholder: "" },
            { label: "Owner's Full Name", type: "text", placeholder: "" },
            { label: "National ID Number", type: "text", placeholder: "" },
            { label: "Upload ID Photo", type: "file" },
            { label: "Business Category", type: "select", placeholder: "[Select Category]" },
          ]}
          submitLabel="Submit for Verification"
          caption="this form supports Process 2.0 — Seller Verification & Product Authenticity Check — and feeds the seller's Trust Score."
        />
        <Doc nodes={content.slice(SELLER_FIGURE_START + 2, OTP_SECTION_START)} />

        <Doc nodes={content.slice(OTP_SECTION_START, OTP_FIGURE_START + 2)} />
        <FormMockup
          title="Verify your identify"
          fields={[
            { label: "Registered Mobile Number", type: "text", placeholder: "+8881xxxxxx" },
            { label: "One-Time Code(OTP)", type: "text", placeholder: "[-----]" },
            { label: "New Device/Location detected", type: "text", placeholder: "Dhaka,Bangladesh" },
          ]}
          submitLabel="Verify & Continue"
        />
        <Doc nodes={content.slice(OTP_FIGURE_START + 2, REFUND_SECTION_START)} />

        <Doc nodes={content.slice(REFUND_SECTION_START, REFUND_FIGURE_START + 2)} />
        <FormMockup
          title="Request Return / Refund"
          fields={[
            { label: "Order ID", type: "text", placeholder: "#BD-2026xxxxxx" },
            { label: "One-Time Code(OTP)", type: "select", placeholder: "[Select Reason]" },
            { label: "Upload Photo (If damaged)", type: "file", placeholder: "Upload Photo" },
          ]}
          submitLabel="Submit Return Request"
          caption="submitting instantly generates a Digital Return Receipt with its own tracking ID."
        />
        <Doc nodes={content.slice(REFUND_FIGURE_START + 2, RIDER_SECTION_START)} />

        <Doc nodes={content.slice(RIDER_SECTION_START, RIDER_FIGURE_START + 2)} />
        <FormMockup
          title="Confirm Delivery(Rider App)"
          fields={[
            { label: "Order ID", type: "text", placeholder: "#BD-2026xxxxxx" },
            { label: "Delivery OTP from Customer", type: "text", placeholder: "[....]" },
            { label: "Photo proof of Handover", type: "file", placeholder: "Capture Photo" },
            { label: "If customer unavailable", type: "text", placeholder: "Log call attempt + timestamp" },
          ]}
          submitLabel="Confirm Delivery"
        />
        <Doc nodes={content.slice(RIDER_FIGURE_START + 2, CONCLUSION_START)} />
      </div>
      <ChapterNav
        prev={{ href: "/chapter-4-design", label: "Chapter 4 — Candidate Systems & Design" }}
        next={{ href: "/team", label: "Group & Course" }}
      />
    </div>
  );
}
