import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

type TrackingStep = {
  status: string;
  location: string;
  time: string;
  done: boolean;
  active?: boolean;
};

type TrackingRecord = {
  trackingId: string;
  shipmentStatus: string;
  estimatedDelivery: string;
  product: string;
  mode: string;
  origin: string;
  destination: string;
  timeline: TrackingStep[];
};

const app = express();
const port = Number(process.env.PORT ?? 4000);
const allowedOrigin = process.env.CORS_ORIGIN;
const trackingRecords: Record<string, TrackingRecord> = {
  "SX-98745-EXP": {
    trackingId: "SX-98745-EXP",
    shipmentStatus: "In Transit",
    estimatedDelivery: "Apr 26, 2026",
    product: "Red Chilli Export Batch",
    mode: "Road + Freight",
    origin: "AP Processing Unit",
    destination: "Hyderabad, India",
    timeline: [
      { status: "Arrival at Destination Hub", location: "Hyderabad, India", time: "Pending", done: false },
      { status: "In Transit", location: "Domestic Transport Route", time: "Apr 20, 10:20 AM", done: false, active: true },
      { status: "Departed from Origin Facility", location: "AP Processing Unit", time: "Apr 19, 04:30 PM", done: true },
      { status: "Dispatch Documentation Verified", location: "Export Desk", time: "Apr 19, 11:00 AM", done: true },
      { status: "Shipment Booked", location: "Satyanand Exim Logistics OPC Private Limited", time: "Apr 18, 09:00 AM", done: true }
    ]
  },
  "SX-22014-TUR": {
    trackingId: "SX-22014-TUR",
    shipmentStatus: "At Port",
    estimatedDelivery: "May 02, 2026",
    product: "Organic Turmeric Fingers",
    mode: "Sea Freight",
    origin: "Kakinada, Andhra Pradesh",
    destination: "Dubai, UAE",
    timeline: [
      { status: "Ready for Loading", location: "Kakinada Port", time: "Pending", done: false },
      { status: "At Port", location: "Kakinada Port", time: "Apr 24, 02:40 PM", done: false, active: true },
      { status: "Customs Clearance Completed", location: "Export Yard", time: "Apr 23, 10:15 AM", done: true },
      { status: "Packed and Sealed", location: "Processing Unit", time: "Apr 22, 05:50 PM", done: true },
      { status: "Shipment Booked", location: "Satyanand Exim Logistics OPC Private Limited", time: "Apr 22, 09:10 AM", done: true }
    ]
  },
  "SX-44088-PEP": {
    trackingId: "SX-44088-PEP",
    shipmentStatus: "Delivered",
    estimatedDelivery: "Apr 18, 2026",
    product: "Black Pepper Export Lot",
    mode: "Air Freight",
    origin: "Kerala, India",
    destination: "Doha, Qatar",
    timeline: [
      { status: "Delivered", location: "Doha, Qatar", time: "Apr 18, 01:45 PM", done: true, active: true },
      { status: "Out for Delivery", location: "Destination City", time: "Apr 18, 08:20 AM", done: true },
      { status: "Arrived at Destination Airport", location: "Doha Airport", time: "Apr 17, 11:30 PM", done: true },
      { status: "Departed from Origin Airport", location: "Cochin Airport", time: "Apr 16, 06:10 PM", done: true },
      { status: "Shipment Booked", location: "Satyanand Exim Logistics OPC Private Limited", time: "Apr 15, 09:00 AM", done: true }
    ]
  }
};

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

app.get("/api/tracking/:trackingId", (req, res) => {
  const trackingId = req.params.trackingId?.trim().toUpperCase();
  const shipment = trackingRecords[trackingId];

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
