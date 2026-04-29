import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 4000);
const allowedOrigin = process.env.CORS_ORIGIN;

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

app.post("/api/contact", (req, res) => {
  const { name, email, phone, product, serviceType, message } = req.body ?? {};

  res.status(200).json({
    ok: true,
    message: "Inquiry received",
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
