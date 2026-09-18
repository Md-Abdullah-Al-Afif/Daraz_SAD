// Transcribed exactly from the labeled process boxes in the report's own
// Figure 3.5 (existing system DFD) and Figure 4.1 (proposed system DFD).

export const dfdExisting = {
  processes: [
    { id: "1.0", name: "Browse & Search Products" },
    { id: "2.0", name: "Add to Cart / Edit Order" },
    { id: "3.0", name: "Checkout & Select Payment" },
    { id: "4.0", name: "Process Payment" },
    { id: "5.0", name: "Confirm Order (Seller)" },
    { id: "6.0", name: "Pack & Handover to Courier" },
    { id: "7.0", name: "Deliver Order" },
    { id: "8.0", name: "Return / Refund Request" },
  ],
  entities: ["Customer", "Seller", "Warehouse / Seller Stock", "Courier / Delivery Partner"],
  stores: [
    "Product Catalog File",
    "Customer Account File",
    "Payment / Transaction File",
    "Order Info File",
    "Delivery Status File",
  ],
};

export const dfdProposed = {
  processes: [
    { id: "1.0", name: "Browse & Search (with Seller Trust Score)" },
    { id: "2.0", name: "Seller Verification & Product Authenticity Check", isNew: true },
    { id: "3.0", name: "Add to Cart / Edit Order" },
    { id: "4.0", name: "Checkout & Select Payment" },
    { id: "5.0", name: "Fraud Detection & OTP Verification", isNew: true },
    { id: "6.0", name: "Process Payment" },
    { id: "7.0", name: "Confirm Order (Seller)" },
    { id: "8.0", name: "Pack & Generate Delivery Proof Code", isNew: true },
    { id: "9.0", name: "Deliver Order & Capture Proof", isNew: true },
    { id: "10.0", name: "Return / Refund with Digital Receipt", isNew: true },
    { id: "11.0", name: "Support Ticket & Escalation", isNew: true },
  ],
  entities: ["Customer", "Seller", "Warehouse / Seller Stock", "Courier / Delivery Partner", "Support Agent"],
  stores: [
    "Product Catalog & Seller Score File",
    "Customer Account File",
    "Payment / Fraud Log File",
    "Order Info File",
    "Delivery Proof File",
    "Return & Refund File",
    "Support Ticket File",
  ],
};
