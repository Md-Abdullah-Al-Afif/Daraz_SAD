"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, ShieldAlert, Star, Clock, Check, X, Camera, Phone, Truck, Lock } from "lucide-react";

/* ---------- shared helpers ---------- */
const ORANGE = "#f85606";
const stamp = () => new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
const rid = (p) => `${p}-2026-${Math.floor(100000 + Math.random() * 900000)}`;
const tier = (s) => (s >= 75 ? { name: "Verified", cls: "bg-emerald-100 text-emerald-800" } : s >= 50 ? { name: "Standard", cls: "bg-amber-100 text-amber-800" } : { name: "New", cls: "bg-rose-100 text-rose-800" });

const Badge = ({ score }) => {
  const t = tier(score);
  return <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${t.cls}`}>{t.name} · {score}/100</span>;
};
const Btn = ({ children, className = "", ...p }) => (
  <button {...p} className={`w-full rounded-lg py-2.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40 ${className}`} style={{ background: ORANGE }}>{children}</button>
);
const Ghost = ({ children, ...p }) => (
  <button {...p} className="w-full rounded-lg border border-neutral-300 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50">{children}</button>
);
const Field = ({ label, error, children }) => (
  <label className="block">
    <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-600">{label}</span>
    {children}
    {error && <span className="mt-1 block text-[11px] text-rose-600">{error}</span>}
  </label>
);
const inp = "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-[#f85606] focus:ring-2 focus:ring-[#f85606]/25";

function Frame({ title, children }) {
  return (
    <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[30px] border-[6px] border-[#2a323d] bg-white text-neutral-900 shadow-2xl">
      <div className="px-4 py-3 text-sm font-bold text-white" style={{ background: ORANGE }}>{title}</div>
      <div className="min-h-[520px] space-y-3 p-4">{children}</div>
    </div>
  );
}

/* ---------- 1. Product page + Seller Trust Score ---------- */
const SELLERS = [
  { name: "NutriMart BD", price: 789, score: 91, active: "4 yrs", complaints: "1.2%", reply: "35 min", delivery: 96, rating: 4.8 },
  { name: "Dhaka Daily Needs", price: 745, score: 62, active: "11 mo", complaints: "5.8%", reply: "3 hrs", delivery: 84, rating: 4.1 },
  { name: "QuickDeal Zone", price: 520, score: 31, active: "6 wks", complaints: "17.4%", reply: "2 days", delivery: 61, rating: 3.2 },
];
function ProductScreen() {
  const [i, setI] = useState(0);
  const s = SELLERS[i];
  return (
    <Frame title="Product page">
      <div className="flex gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-100 text-2xl">🥛</div>
        <div>
          <div className="text-sm font-semibold">Pusti Full Cream Milk Powder – 1 kg</div>
          <div className="text-xl font-bold" style={{ color: ORANGE }}>৳{s.price}</div>
        </div>
      </div>
      <div className="text-xs font-medium text-neutral-500">Other sellers for this item</div>
      <div className="space-y-2">
        {SELLERS.map((x, k) => (
          <button key={x.name} onClick={() => setI(k)} className={`flex w-full items-center justify-between rounded-lg border p-2.5 text-left text-xs ${k === i ? "border-[#f85606] bg-orange-50" : "border-neutral-200"}`}>
            <span className="font-medium">{x.name}<br /><span className="text-neutral-500">৳{x.price}</span></span>
            <Badge score={x.score} />
          </button>
        ))}
      </div>
      <div className="rounded-lg border border-neutral-200 p-3 text-xs">
        <div className="mb-2 flex items-center gap-1.5 font-semibold"><ShieldCheck size={14} /> Seller Trust Score: {s.name}</div>
        <div className="mb-3 h-2 rounded-full bg-neutral-200"><div className="h-2 rounded-full" style={{ width: `${s.score}%`, background: s.score >= 75 ? "#059669" : s.score >= 50 ? "#d97706" : "#e11d48" }} /></div>
        <dl className="grid grid-cols-2 gap-y-1.5 text-neutral-600">
          <dt>Active on Daraz</dt><dd className="text-right font-medium text-neutral-900">{s.active}</dd>
          <dt>Orders with complaints</dt><dd className="text-right font-medium text-neutral-900">{s.complaints}</dd>
          <dt>Avg. reply time</dt><dd className="text-right font-medium text-neutral-900">{s.reply}</dd>
          <dt>On-time delivery</dt><dd className="text-right font-medium text-neutral-900">{s.delivery}%</dd>
          <dt>Rating</dt><dd className="text-right font-medium text-neutral-900"><Star size={11} className="mr-0.5 inline" />{s.rating}</dd>
        </dl>
      </div>
      {s.score < 50 && (
        <div className="flex gap-2 rounded-lg bg-rose-50 p-3 text-xs text-rose-800"><ShieldAlert size={16} className="shrink-0" />This seller is new and has a high complaint rate. Check the details before you buy.</div>
      )}
      <Btn>Add to cart</Btn>
    </Frame>
  );
}

/* ---------- 2. Seller verification form -> trust score ---------- */
function SellerScreen() {
  const [f, setF] = useState({ shop: "", owner: "", nid: "", photo: "", license: false, licenseNo: "", licensePhoto: "", cat: "" });
  const [err, setErr] = useState({});
  const [res, setRes] = useState(null);
  const set = (k, v) => setF((o) => ({ ...o, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!f.shop.trim()) x.shop = "Enter the shop name.";
    if (f.owner.trim().split(/\s+/).length < 2) x.owner = "Enter the owner's full name.";
    const nidOk = [10, 13, 17].includes(f.nid.replace(/\D/g, "").length) && /^\d+$/.test(f.nid);
    if (!nidOk) x.nid = "NID must be 10, 13 or 17 digits.";
    if (!f.photo) x.photo = "Upload a photo of the NID.";
    if (f.license) {
      if (!f.licenseNo.trim()) x.licenseNo = "Enter the trade license number.";
      if (!f.licensePhoto) x.licensePhoto = "Upload a photo of the trade license.";
    }
    if (!f.cat) x.cat = "Choose a business category.";
    setErr(x);
    if (Object.keys(x).length) return setRes(null);
    const score = 30 + 30 + 15 + (f.license ? 15 : 0) + (["Electronics", "Beauty"].includes(f.cat) ? 0 : 5);
    setRes({ score, id: rid("SLR") });
  };
  if (res)
    return (
      <Frame title="Seller verification">
        <div className="space-y-3 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Check /></div>
          <div className="font-semibold">Submitted for verification</div>
          <div className="text-xs text-neutral-500">Reference {res.id}</div>
          <div className="rounded-lg border border-neutral-200 p-3">
            <div className="text-xs text-neutral-500">Starting Trust Score for {f.shop}</div>
            <div className="my-1 text-4xl font-bold" style={{ color: ORANGE }}>{res.score}</div>
            <Badge score={res.score} />
          </div>
          <p className="text-xs text-neutral-600">{f.license ? "Trade license included. " : "Add a trade license to raise the score. "}The score updates with order history, complaint rate and delivery performance.</p>
          <Ghost onClick={() => setRes(null)}>Start again</Ghost>
        </div>
      </Frame>
    );
  return (
    <Frame title="Seller verification">
      <form onSubmit={submit} className="space-y-3" noValidate>
        <Field label="Shop name" error={err.shop}><input className={inp} value={f.shop} onChange={(e) => set("shop", e.target.value)} /></Field>
        <Field label="Owner's full name" error={err.owner}><input className={inp} value={f.owner} onChange={(e) => set("owner", e.target.value)} /></Field>
        <Field label="National ID number" error={err.nid}><input className={inp} inputMode="numeric" value={f.nid} onChange={(e) => set("nid", e.target.value)} /></Field>
        <Field label="UPLOAD ID PHOTO" error={err.photo}>
          <div className="rounded-xl border border-neutral-300 bg-white px-3 py-2.5">
            <div className="flex items-center gap-2">
              <label htmlFor="nid-photo" className="inline-flex cursor-pointer rounded-md bg-[#f85606] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white transition hover:opacity-90">Choose File</label>
              <span className="text-[11px] text-neutral-500">{f.photo || "No file chosen"}</span>
            </div>
            <input id="nid-photo" type="file" accept="image/*" className="sr-only" onChange={(e) => set("photo", e.target.files?.[0]?.name || "")} />
          </div>
        </Field>
        <label className="flex items-center gap-2 text-xs"><input type="checkbox" checked={f.license} onChange={(e) => set("license", e.target.checked)} /> I have a trade license (optional)</label>
        {f.license && (
          <>
            <Field label="Trade license number" error={err.licenseNo}><input className={inp} value={f.licenseNo} onChange={(e) => set("licenseNo", e.target.value)} /></Field>
            <Field label="UPLOAD TRADE LICENSE PHOTO" error={err.licensePhoto}>
              <div className="rounded-xl border border-neutral-300 bg-white px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <label htmlFor="license-photo" className="inline-flex cursor-pointer rounded-md bg-[#f85606] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white transition hover:opacity-90">Choose File</label>
                  <span className="text-[11px] text-neutral-500">{f.licensePhoto || "No file chosen"}</span>
                </div>
                <input id="license-photo" type="file" accept="image/*" className="sr-only" onChange={(e) => set("licensePhoto", e.target.files?.[0]?.name || "")} />
              </div>
            </Field>
          </>
        )}
        <Field label="Business category" error={err.cat}>
          <select className={inp} value={f.cat} onChange={(e) => set("cat", e.target.value)}>
            <option value="">Select category</option>
            {["Electronics", "Beauty", "Groceries", "Fashion", "Home & living"].map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <Btn type="submit">Submit for verification</Btn>
      </form>
    </Frame>
  );
}

/* ---------- 3. OTP + "This wasn't me" ---------- */
function OtpScreen() {
  const [code] = useState(() => String(Math.floor(100000 + Math.random() * 900000)));
  const [val, setVal] = useState("");
  const [tries, setTries] = useState(3);
  const [state, setState] = useState("ask"); // ask | ok | frozen | locked
  const [msg, setMsg] = useState("");
  const verify = (e) => {
    e.preventDefault();
    if (val === code) return setState("ok");
    const left = tries - 1;
    setTries(left);
    if (left <= 0) return setState("locked");
    setMsg(`Wrong code. ${left} ${left === 1 ? "try" : "tries"} left.`);
  };
  const reset = () => { setState("ask"); setTries(3); setVal(""); setMsg(""); };
  if (state !== "ask")
    return (
      <Frame title="Account security">
        <div className="space-y-3 text-center">
          <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${state === "ok" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>{state === "ok" ? <Check /> : <Lock />}</div>
          <div className="font-semibold">{state === "ok" ? "Identity confirmed" : state === "frozen" ? "Account frozen" : "Too many wrong codes"}</div>
          <p className="text-xs text-neutral-600">
            {state === "ok" && "Your order of ৳18,500 can continue to payment."}
            {state === "frozen" && "All sessions were signed out and 2 pending orders (৳18,500 gift card, ৳4,200 phone case) were put on hold. Reset your password to unlock."}
            {state === "locked" && "This order is on hold and the account is locked for 30 minutes."}
          </p>
          <Ghost onClick={reset}>Reset demo</Ghost>
        </div>
      </Frame>
    );
  return (
    <Frame title="Verify your identity">
      <div className="rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
        <div className="font-semibold">Unusual activity detected (risk score 82/100)</div>
        New device, Dhaka, {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}. Order value ৳18,500.
      </div>
      <div className="rounded-lg bg-neutral-100 p-2.5 text-xs text-neutral-600">
        <Phone size={12} className="mr-1 inline" /> Demo SMS to +8801•••••482: your Daraz code is <b className="text-neutral-900">{code}</b>
      </div>
      <form onSubmit={verify} className="space-y-3">
        <Field label="REGISTERED MOBILE NUMBER">
          <input className={`${inp} pointer-events-none cursor-default opacity-60 select-none`} readOnly value={"+8801•••••482"} />
        </Field>
        <Field label="ONE-TIME CODE (OTP)">
          <input className={`${inp} tracking-[0.3em]`} inputMode="numeric" maxLength={6} value={val} onChange={(e) => setVal(e.target.value.replace(/\D/g, ""))} placeholder="••••••" />
        </Field>
        <Field label="NEW DEVICE / LOCATION DETECTED">
          <input className={`${inp} pointer-events-none cursor-default opacity-60 select-none`} readOnly value={"Dhaka, Bangladesh"} />
        </Field>
        {msg && <div className="text-xs text-rose-600">{msg}</div>}
        <Btn type="submit" disabled={val.length !== 6}>Verify & continue</Btn>
      </form>
      <button onClick={() => setState("frozen")} className="w-full rounded-lg border border-rose-300 py-2.5 text-sm font-semibold text-rose-700 hover:bg-rose-50">This wasn't me</button>
    </Frame>
  );
}

/* ---------- 4. Return form -> digital receipt + tracker ---------- */
const ORDERS = ["#BD-2026-184274 · Milk powder", "#BD-2026-183990 · Insect spray 400 ml", "#BD-2026-181122 · Earbuds"];
const STEPS = ["Requested", "Picked up", "Quality check", "Refunded"];
function ReturnScreen() {
  const [f, setF] = useState({ order: "", reason: "", photo: "" });
  const [err, setErr] = useState({});
  const [rec, setRec] = useState(null);
  const [step, setStep] = useState(0);
  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!f.order) x.order = "Choose the order.";
    if (!f.reason) x.reason = "Choose a reason.";
    if (f.reason === "Damaged item" && !f.photo) x.photo = "Add a photo of the damage.";
    setErr(x);
    if (Object.keys(x).length) return;
    const due = new Date(Date.now() + 7 * 864e5).toLocaleDateString("en-GB", { dateStyle: "medium" });
    setRec({ no: rid("RCP"), at: stamp(), due, ...f });
    setStep(0);
  };
  if (rec)
    return (
      <Frame title="Return receipt">
        <div className="rounded-lg border border-dashed border-neutral-400 p-3 text-xs">
          <div className="mb-1 font-semibold">Digital return receipt</div>
          <div className="font-mono text-sm" style={{ color: ORANGE }}>{rec.no}</div>
          <div className="mt-1 text-neutral-600">{rec.order}<br />Reason: {rec.reason}<br />Logged {rec.at}<br />Refund due by {rec.due} (demo target)</div>
        </div>
        <ol className="space-y-2">
          {STEPS.map((s, k) => (
            <li key={s} className="flex items-center gap-3 text-sm">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${k <= step ? "text-white" : "bg-neutral-200 text-neutral-500"}`} style={k <= step ? { background: ORANGE } : {}}>{k <= step ? <Check size={13} /> : k + 1}</span>
              <span className={k <= step ? "font-medium" : "text-neutral-500"}>{s}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-neutral-500">An SMS and email go out at every step. Any rejection must state its reason, and you can ask for a second review.</p>
        <Btn disabled={step >= 3} onClick={() => setStep((n) => n + 1)}>Move to next step (demo)</Btn>
        <Ghost onClick={() => { setRec(null); setF({ order: "", reason: "", photo: "" }); }}>New return</Ghost>
      </Frame>
    );
  return (
    <Frame title="Request return / refund">
      <form onSubmit={submit} className="space-y-3" noValidate>
        <Field label="Order ID" error={err.order}>
          <input className={`${inp} pointer-events-none cursor-default opacity-60 select-none`} readOnly value={"#BD-2026-184274"} />
        </Field>
        <Field label="Reason" error={err.reason}>
          <select className={inp} value={f.reason} onChange={(e) => setF({ ...f, reason: e.target.value })}>
            <option value="">Select reason</option>{["Wrong item", "Damaged item", "Different from description", "Changed my mind"].map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field label="Upload Photo (If damaged)" error={err.photo}>
          <div className="rounded-xl border border-neutral-300 bg-white px-3 py-2.5">
            <div className="flex items-center gap-2">
              <label htmlFor="return-photo" className="inline-flex cursor-pointer rounded-md bg-[#f85606] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white transition hover:opacity-90">Choose File</label>
              <span className="text-[11px] text-neutral-500">{f.photo || "No file chosen"}</span>
            </div>
            <input id="return-photo" type="file" accept="image/*" className="sr-only" onChange={(e) => setF({ ...f, photo: e.target.files?.[0]?.name || "" })} />
          </div>
        </Field>
        <Btn type="submit">Submit return request</Btn>
      </form>
    </Frame>
  );
}

/* ---------- 5. Rider app: proof before status ---------- */
function RiderScreen() {
  const OTP = "4821";
  const [otp, setOtp] = useState("");
  const [photo, setPhoto] = useState(false);
  const [calls, setCalls] = useState([]);
  const [done, setDone] = useState(null);
  const okDelivered = otp === OTP || photo;
  const ok = okDelivered || calls.length > 0;
  const addCall = () => {
    const now = new Date();
    const formatted = now.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    setCalls((c) => [...c, formatted]);
  };
  const submitLabel = calls.length > 0 ? "Mark delivery failed" : "Confirm delivery";
  const submitState = calls.length > 0 ? "failed" : "delivered";
  if (done)
    return (
      <Frame title="Rider app">
        <div className="space-y-3 text-center">
          <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${done === "delivered" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}><Truck /></div>
          <div className="font-semibold">{done === "delivered" ? "Delivered, proof saved" : "Failed attempt recorded"}</div>
          {done === "failed" && <ul className="rounded-lg bg-neutral-100 p-2 text-left text-xs">{calls.map((c, k) => <li key={k}>Call {k + 1}: {c}</li>)}</ul>}
          <p className="text-xs text-neutral-600">The customer sees this record in the app and can dispute it.</p>
          <Ghost onClick={() => { setDone(null); setOtp(""); setPhoto(false); setCalls([]); }}>Reset demo</Ghost>
        </div>
      </Frame>
    );
  return (
    <Frame title="Confirm delivery (rider)">
      <div className="rounded-lg bg-neutral-100 p-2.5 text-xs">Order <b>#BD-2026-184274</b> · Bashundhara, Dhaka · COD ৳929</div>
      <Field label="ORDER ID">
        <input className={`${inp} pointer-events-none cursor-default opacity-60 select-none`} readOnly value="#BD-2026-184274" />
      </Field>

      <Field label="DELIVERY OTP FROM CUSTOMER">
        <div className="rounded-lg bg-amber-50 p-2 text-[11px] text-amber-900">
          <div className="mb-1 font-medium">Demo SMS to Rider: your delivery otp is <b>{OTP}</b></div>
        </div>
        <input className={`${inp} mt-2 tracking-[0.2em]`} inputMode="numeric" maxLength={4} value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} placeholder="••••" />
      </Field>

      <Field label="PHOTO PROOF OF HANDOVER">
        <div className="flex items-center gap-3 rounded-lg border border-neutral-300 bg-white px-2.5 py-2">
          <label htmlFor="rider-photo" className="inline-flex cursor-pointer rounded-md bg-[#f85606] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">Choose File</label>
          <span className="text-[11px] text-neutral-500">{photo ? "File selected" : "No file chosen"}</span>
        </div>
        <input id="rider-photo" type="file" accept="image/*" className="sr-only" onChange={(e) => setPhoto(Boolean(e.target.files?.[0]))} />
      </Field>

      <Field label="IF CUSTOMER UNAVAILABLE">
        <button onClick={addCall} className="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white py-2 text-xs text-neutral-700"><Phone size={14} />Log call attempt + timestamp</button>
      </Field>

      {calls.length > 0 && (
        <ul className="space-y-1 text-xs text-neutral-600">
          {calls.map((c, k) => <li key={k}>Call {k + 1} · {c}</li>)}
        </ul>
      )}

      {!ok && <div className="flex gap-2 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-900"><Lock size={14} className="shrink-0" />Please provide a valid OTP, handover proof, or at least one call log.</div>}
      <Btn disabled={!ok} onClick={() => setDone(submitState)}>{submitLabel}</Btn>
    </Frame>
  );
}

/* ---------- 6. Support ticket with SLA + escalation ---------- */
const SLA = { High: 4, Medium: 12, Low: 24 };
const fmt = (s) => `${String(Math.floor(s / 3600)).padStart(2, "0")}:${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
function SupportScreen() {
  const [f, setF] = useState({ cat: "Refund", pri: "Medium", text: "" });
  const [t, setT] = useState(null);
  const [err, setErr] = useState("");
  useEffect(() => {
    if (!t || t.status !== "Open") return;
    const id = setInterval(() => setT((o) => {
      if (!o || o.status !== "Open") return o;
      const left = o.left - 1;
      return left <= 0 ? { ...o, left: 0, status: "Escalated" } : { ...o, left };
    }), 1000);
    return () => clearInterval(id);
  }, [t]);
  const open = (e) => {
    e.preventDefault();
    if (f.text.trim().length < 10) return setErr("Describe the problem in at least 10 characters.");
    setErr("");
    setT({ ...f, id: rid("TKT"), left: SLA[f.pri] * 3600, status: "Open", at: stamp(), confirmed: false });
  };
  if (t)
    return (
      <Frame title="Support ticket">
        <div className="rounded-lg border border-neutral-200 p-3 text-xs">
          <div className="flex justify-between"><span className="font-mono font-semibold">{t.id}</span><span className={`rounded-full px-2 py-0.5 font-semibold ${t.status === "Open" ? "bg-sky-100 text-sky-800" : t.status === "Escalated" ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"}`}>{t.status}</span></div>
          <div className="mt-1 text-neutral-600">{t.cat} · {t.pri} priority · {t.at}</div>
          <p className="mt-2 text-neutral-800">{t.text}</p>
        </div>
        {t.status === "Open" && (
          <div className="rounded-lg bg-neutral-100 p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-neutral-500"><Clock size={12} /> Bot has until this deadline</div>
            <div className="font-mono text-3xl font-bold" style={{ color: ORANGE }}>{fmt(t.left)}</div>
            <div className="text-[11px] text-neutral-500">Then it goes to a human agent automatically</div>
          </div>
        )}
        {t.status === "Escalated" && <div className="rounded-lg bg-rose-50 p-3 text-xs text-rose-900">Escalated to a human agent: <b>Nusrat (Support)</b>. You will not need to repeat your problem. The chat stays open until you confirm it is solved.</div>}
        {t.status === "Resolved" && <div className="rounded-lg bg-emerald-50 p-3 text-xs text-emerald-900">You confirmed this issue is solved. Ticket closed.</div>}
        {t.status !== "Resolved" && (
          <div className="space-y-2">
            {t.status === "Open" && <><Ghost onClick={() => setT((o) => ({ ...o, left: Math.max(0, o.left - 3600) }))}>Skip 1 hour (demo)</Ghost><Ghost onClick={() => setT((o) => ({ ...o, status: "Escalated" }))}>Talk to a human now</Ghost></>}
            <Ghost onClick={() => setT((o) => ({ ...o, status: "Resolved" }))}>Yes, my issue is solved</Ghost>
          </div>
        )}
        <Ghost onClick={() => setT(null)}>New ticket</Ghost>
      </Frame>
    );
  return (
    <Frame title="Contact support">
      <form onSubmit={open} className="space-y-3" noValidate>
        <Field label="Topic"><select className={inp} value={f.cat} onChange={(e) => setF({ ...f, cat: e.target.value })}>{["Refund", "Delivery", "Account", "Product", "Other"].map((c) => <option key={c}>{c}</option>)}</select></Field>
        <Field label="Priority">
          <select className={inp} value={f.pri} onChange={(e) => setF({ ...f, pri: e.target.value })}>{Object.keys(SLA).map((p) => <option key={p} value={p}>{p} (reply within {SLA[p]} h)</option>)}</select>
        </Field>
        <Field label="What happened?" error={err}><textarea rows={4} className={inp} value={f.text} onChange={(e) => setF({ ...f, text: e.target.value })} /></Field>
        <Btn type="submit">Open ticket</Btn>
      </form>
    </Frame>
  );
}

/* ---------- 7. Existing vs proposed ---------- */
const COMPARE = [
  ["Product authenticity", "Seller rating only. Complaint history is hard to find.", "Trust Score and badge shown before buying (Process 2.0)"],
  ["Refund and return", "Request, then no clear status. Cancellations come with no reason.", "Instant digital receipt and 4-step tracker (Process 10.0)"],
  ["Account security", "No fast way to freeze a hacked account.", "Risk score, OTP and a 'This wasn't me' freeze (Process 5.0)"],
  ["Delivery", "'Failed' status can be set with no proof.", "Delivery code or photo; failed needs a call log (Process 8.0, 9.0)"],
  ["Customer support", "Chatbot first, chat can be closed by Daraz.", "Ticket with SLA timer, auto-escalation to a human (Process 11.0)"],
];
function CompareView() {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--color-hair)]">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-[var(--color-panel-2)] text-[var(--color-paper-dim)]"><tr><th className="p-3">Problem</th><th className="p-3">Existing system</th><th className="p-3">Proposed system</th></tr></thead>
        <tbody>{COMPARE.map((r) => <tr key={r[0]} className="border-t border-[var(--color-hair)] align-top"><td className="p-3 font-medium text-[var(--color-paper)]">{r[0]}</td><td className="p-3 text-[var(--color-paper-dim)]">{r[1]}</td><td className="p-3 text-[var(--color-paper)]">{r[2]}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

/* ---------- lab shell ---------- */
const TABS = [
  { id: "product", label: "Product page", C: ProductScreen, problem: "Problem 01 · Product authenticity", proc: "Process 1.0 and 2.0", tip: "Tap each seller. The Trust Score, badge and warning change. A low-trust seller gets a warning before purchase." },
  { id: "seller", label: "Seller verification", C: SellerScreen, problem: "Problem 01 · Product authenticity", proc: "Process 2.0", tip: "Submit empty to see validation. Use a 10, 13 or 17 digit NID, upload any image, and a trust score appears. Ticking the trade license raises it." },
  { id: "otp", label: "OTP and freeze", C: OtpScreen, problem: "Problem 03 · Account security", proc: "Process 5.0", tip: "Type the demo code from the SMS box. Try a wrong code three times, or press 'This wasn't me' to freeze the account." },
  { id: "return", label: "Return and receipt", C: ReturnScreen, problem: "Problem 02 · Refund and return", proc: "Process 10.0", tip: "Pick 'Damaged item' without a photo to see the check. Submit to get a receipt, then step the tracker forward." },
  { id: "rider", label: "Rider app", C: RiderScreen, problem: "Problem 04 · Delivery service", proc: "Process 8.0 and 9.0", tip: "Try to confirm with no proof: the button stays locked. Switch to 'Customer unavailable' and log a call to unlock it." },
  { id: "support", label: "Support ticket", C: SupportScreen, problem: "Problem 05 · Customer support", proc: "Process 11.0", tip: "Open a ticket and watch the SLA countdown. Skip hours or let it run out to see the automatic hand-off to a human agent." },
  { id: "compare", label: "Existing vs proposed", C: null, problem: "All five problems", proc: "Tables 4.3 and Chapter 3", tip: "" },
];

export default function PrototypeLab() {
  const [tab, setTab] = useState("product");
  const cur = TABS.find((t) => t.id === tab);
  return (
    <div>
      <div role="tablist" className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {TABS.map((t) => (
          <button key={t.id} role="tab" aria-selected={t.id === tab} onClick={() => setTab(t.id)} className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${t.id === tab ? "border-[var(--color-signal)] bg-[var(--color-signal)] font-medium text-[var(--color-ink)]" : "border-[var(--color-hair)] text-[var(--color-paper-dim)] hover:border-[var(--color-signal)]/60"}`}>{t.label}</button>
        ))}
      </div>
      {cur.C ? (
        <div key={cur.id} className="grid items-center gap-8 md:grid-cols-[380px_minmax(0,1fr)]">
          <cur.C />
          <aside className="space-y-4 text-sm leading-relaxed">
            <div><div className="text-[var(--color-signal)]">{cur.problem}</div><div className="text-[var(--color-paper-dim)]">Supports {cur.proc} of the proposed DFD</div></div>
            <p className="text-[var(--color-paper)]">{cur.tip}</p>
            <p className="rounded-lg border border-[var(--color-hair)] bg-[var(--color-panel)] p-3 text-[13px] text-[var(--color-paper-dim)]">This is a front-end prototype. All data is made up and nothing is sent to a server.</p>
          </aside>
        </div>
      ) : (
        <CompareView />
      )}
    </div>
  );
}
