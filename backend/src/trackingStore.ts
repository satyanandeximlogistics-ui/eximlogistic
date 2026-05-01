import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type TrackingStep = {
  status: string;
  location: string;
  time: string;
  done: boolean;
  active?: boolean;
};

export type TrackingRecord = {
  trackingId: string;
  shipmentStatus: string;
  estimatedDelivery: string;
  product: string;
  mode: string;
  origin: string;
  destination: string;
  timeline: TrackingStep[];
  updatedAt: string;
};

export type TrackingRecordInput = Omit<TrackingRecord, "updatedAt">;

const dataDirectory = path.resolve(process.cwd(), "data");
const dataFilePath = path.join(dataDirectory, "trackings.json");

const seedRecords: Record<string, TrackingRecord> = {
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
    ],
    updatedAt: "2026-04-20T10:20:00.000Z"
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
    ],
    updatedAt: "2026-04-24T14:40:00.000Z"
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
    ],
    updatedAt: "2026-04-18T13:45:00.000Z"
  }
};

let cachedStore: Record<string, TrackingRecord> | null = null;
let loadingPromise: Promise<Record<string, TrackingRecord>> | null = null;

const normalizeTrackingId = (trackingId: string) => trackingId.trim().toUpperCase();

const cloneStore = (store: Record<string, TrackingRecord>) =>
  JSON.parse(JSON.stringify(store)) as Record<string, TrackingRecord>;

async function persistStore(store: Record<string, TrackingRecord>) {
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(dataFilePath, `${JSON.stringify(store, null, 2)}\n`, "utf8");
  cachedStore = cloneStore(store);
}

async function loadStore() {
  if (cachedStore) {
    return cachedStore;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = (async () => {
    try {
      const raw = await readFile(dataFilePath, "utf8");
      const parsed = JSON.parse(raw) as Record<string, TrackingRecord>;
      cachedStore = parsed;
      return parsed;
    } catch {
      const seed = cloneStore(seedRecords);
      cachedStore = seed;
      await persistStore(seed);
      return seed;
    } finally {
      loadingPromise = null;
    }
  })();

  return loadingPromise;
}

export async function getTrackingRecord(trackingId: string) {
  const store = await loadStore();
  return store[normalizeTrackingId(trackingId)] ?? null;
}

export async function listTrackingRecords() {
  const store = await loadStore();
  return Object.values(store).sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
}

export async function saveTrackingRecord(record: TrackingRecordInput) {
  const store = await loadStore();
  const trackingId = normalizeTrackingId(record.trackingId);
  const nextRecord: TrackingRecord = {
    ...record,
    trackingId,
    updatedAt: new Date().toISOString()
  };

  const nextStore = {
    ...store,
    [trackingId]: nextRecord
  };

  await persistStore(nextStore);
  return nextRecord;
}

export async function updateTrackingRecord(
  trackingId: string,
  patch: Partial<Omit<TrackingRecordInput, "trackingId" | "timeline">> & { timeline?: TrackingStep[] }
) {
  const store = await loadStore();
  const normalizedTrackingId = normalizeTrackingId(trackingId);
  const existing = store[normalizedTrackingId];

  if (!existing) {
    return null;
  }

  const nextRecord: TrackingRecord = {
    ...existing,
    ...patch,
    trackingId: normalizedTrackingId,
    timeline: patch.timeline ?? existing.timeline,
    updatedAt: new Date().toISOString()
  };

  const nextStore = {
    ...store,
    [normalizedTrackingId]: nextRecord
  };

  await persistStore(nextStore);
  return nextRecord;
}

export async function appendTrackingStep(trackingId: string, step: TrackingStep) {
  const store = await loadStore();
  const normalizedTrackingId = normalizeTrackingId(trackingId);
  const existing = store[normalizedTrackingId];

  if (!existing) {
    return null;
  }

  const nextTimeline = [step, ...existing.timeline.map((item) => ({ ...item, active: false }))];

  const nextRecord: TrackingRecord = {
    ...existing,
    timeline: nextTimeline,
    shipmentStatus: step.status,
    updatedAt: new Date().toISOString()
  };

  const nextStore = {
    ...store,
    [normalizedTrackingId]: nextRecord
  };

  await persistStore(nextStore);
  return nextRecord;
}
