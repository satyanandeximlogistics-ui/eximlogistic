import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
  appendTrackingStep,
  getTrackingRecord,
  listTrackingRecords,
  saveTrackingRecord,
  updateTrackingRecord,
  type TrackingRecordInput
} from "./trackingStore.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 4000);
const allowedOrigin = process.env.CORS_ORIGIN;
const trackingAdminToken = process.env.TRACKING_ADMIN_TOKEN?.trim();
const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

app.use(
  cors(
    allowedOrigin
      ? { origin: allowedOrigin }
      : undefined
  )
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "satyanand-exim-backend" });
});

app.get("/api/tracking/:trackingId", async (req, res) => {
  const trackingId = req.params.trackingId?.trim() ?? "";
  const shipment = await getTrackingRecord(trackingId);

  if (!shipment) {
    res.status(404).json({
      ok: false,
      message: "Tracking record not found"
    });
    return;
  }

  res.json({
    ok: true,
    data: shipment
  });
});

const requireTrackingAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (!trackingAdminToken) {
    res.status(500).json({
      ok: false,
      message: "Tracking admin token is not configured on the backend."
    });
    return;
  }

  const authorizationHeader = req.header("authorization");
  const providedToken =
    req.header("x-tracking-admin-token") ??
    (authorizationHeader?.startsWith("Bearer ") ? authorizationHeader.slice(7) : null);

  if (providedToken !== trackingAdminToken) {
    res.status(401).json({
      ok: false,
      message: "Unauthorized"
    });
    return;
  }

  next();
};

app.get("/api/admin/tracking", requireTrackingAdmin, async (_req, res) => {
  const shipments = await listTrackingRecords();
  res.json({ ok: true, data: shipments });
});

app.post("/api/admin/tracking", requireTrackingAdmin, async (req, res) => {
  const { trackingId, shipmentStatus, estimatedDelivery, product, mode, origin, destination, timeline } = req.body ?? {};

  if (!trackingId || !shipmentStatus || !estimatedDelivery || !product || !mode || !origin || !destination) {
    res.status(400).json({
      ok: false,
      message: "trackingId, shipmentStatus, estimatedDelivery, product, mode, origin, and destination are required."
    });
    return;
  }

  const nextRecord = await saveTrackingRecord({
    trackingId,
    shipmentStatus,
    estimatedDelivery,
    product,
    mode,
    origin,
    destination,
    timeline: Array.isArray(timeline) ? timeline : []
  } satisfies TrackingRecordInput);

  res.status(201).json({ ok: true, data: nextRecord });
});

app.patch("/api/admin/tracking/:trackingId", requireTrackingAdmin, async (req, res) => {
  const trackingId = req.params.trackingId?.trim() ?? "";
  const nextRecord = await updateTrackingRecord(trackingId, req.body ?? {});

  if (!nextRecord) {
    res.status(404).json({
      ok: false,
      message: "Tracking record not found"
    });
    return;
  }

  res.json({ ok: true, data: nextRecord });
});

app.post("/api/admin/tracking/:trackingId/timeline", requireTrackingAdmin, async (req, res) => {
  const trackingId = req.params.trackingId?.trim() ?? "";
  const { status, location, time, done = true, active = true } = req.body ?? {};

  if (!status || !location || !time) {
    res.status(400).json({
      ok: false,
      message: "status, location, and time are required."
    });
    return;
  }

  const nextRecord = await appendTrackingStep(trackingId, {
    status,
    location,
    time,
    done: Boolean(done),
    active: Boolean(active)
  });

  if (!nextRecord) {
    res.status(404).json({
      ok: false,
      message: "Tracking record not found"
    });
    return;
  }

  res.json({ ok: true, data: nextRecord });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, product, serviceType, message } = req.body ?? {};
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !resendFromEmail || !contactToEmail) {
    res.status(500).json({
      ok: false,
      message: "Email service is not configured on the backend."
    });
    return;
  }

  const subjectParts = ["New contact inquiry"];
  if (name) {
    subjectParts.push(`from ${name}`);
  }
  if (serviceType) {
    subjectParts.push(`(${serviceType})`);
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin: 0 0 16px;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name) || "-"}</p>
      <p><strong>Email:</strong> ${escapeHtml(email) || "-"}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone) || "-"}</p>
      <p><strong>Service Type:</strong> ${escapeHtml(serviceType) || "-"}</p>
      <p><strong>Product / Inquiry:</strong> ${escapeHtml(product) || "-"}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 12px 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; white-space: pre-wrap;">${escapeHtml(message) || "-"}</div>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [contactToEmail],
      reply_to: email || undefined,
      subject: subjectParts.join(" "),
      html
    })
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    res.status(502).json({
      ok: false,
      message: result?.message || "Failed to send email through Resend."
    });
    return;
  }

  res.status(200).json({
    ok: true,
    message: "Inquiry received and email sent",
    data: {
      name,
      email,
      phone,
      product,
      serviceType,
      message
    }
  });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
