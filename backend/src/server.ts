import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 4000);
const allowedOrigin = process.env.CORS_ORIGIN;
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
