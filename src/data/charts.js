// Exact figures transcribed from the report's embedded chart images
// (Figures 3.1-3.4/3.6 in Chapter 3 — these values exist only as images in
// the source .docx, so they are reproduced here as the numbers printed
// directly on each chart).

export const complaintCategories = [
  { name: "Delivery Issues", value: 30, color: "#4C79A8" },
  { name: "Refund/Return Delays", value: 25, color: "#F0932B" },
  { name: "Product Quality/Authenticity", value: 20, color: "#E5636B" },
  { name: "Customer Support", value: 15, color: "#5FB3AB" },
  { name: "Account Security", value: 10, color: "#5A9E5D" },
];

export const starRatings = [
  { name: "1 Star", value: 46 },
  { name: "2 Star", value: 18 },
  { name: "3 Star", value: 12 },
  { name: "4 Star", value: 10 },
  { name: "5 Star", value: 14 },
];

export const paymentMix = [
  { name: "Cash on Delivery", value: 70, color: "#F0932B" },
  { name: "Mobile Financial Services (bKash/Nagad)", value: 22, color: "#5A9E5D" },
  { name: "Card / Online Banking", value: 8, color: "#4C79A8" },
];

export const deliveryTimes = [
  { name: "1-2 days", value: 35 },
  { name: "3-4 days", value: 33 },
  { name: "5-7 days", value: 20 },
  { name: "More than 7 days", value: 12 },
];

export const breakEven = {
  fixedCost: 40000,
  pricePerUnit: 13,
  variableCostPerUnit: 9.5,
  breakEvenUnits: 11429,
};
