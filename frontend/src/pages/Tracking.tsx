import { motion } from "motion/react";
import {
  Search,
  MapPin,
  Truck,
  Package,
  CheckCircle2,
  History
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

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
  updatedAt?: string;
};

export default function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [trackingData, setTrackingData] = useState<TrackingRecord | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000").replace(/\/$/, "");
  const trackingIdFromUrl = searchParams.get("trackingId")?.trim() ?? "";

  useEffect(() => {
    if (trackingIdFromUrl) {
      setTrackingId(trackingIdFromUrl);
    }
  }, [trackingIdFromUrl]);

  useEffect(() => {
    if (!trackingIdFromUrl) {
      return;
    }

    const runAutoSearch = async () => {
      setIsSearching(true);
      setError(null);

      try {
        const response = await fetch(`${apiBaseUrl}/api/tracking/${encodeURIComponent(trackingIdFromUrl)}`);
        const payload = await response.json();

        if (!response.ok || !payload?.ok) {
          throw new Error(payload?.message ?? "Shipment not found.");
        }

        setTrackingData(payload.data);
      } catch (fetchError) {
        setError(fetchError instanceof Error ? fetchError.message : "Unable to fetch tracking information.");
      } finally {
        setIsSearching(false);
      }
    };

    void runAutoSearch();
  }, [apiBaseUrl, trackingIdFromUrl]);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = trackingId.trim();
    if (!value) {
      setError("Please enter a tracking reference number.");
      return;
    }

    setIsSearching(true);
    setError(null);
    setTrackingData(null);

    try {
      const response = await fetch(`${apiBaseUrl}/api/tracking/${encodeURIComponent(value)}`);
      const payload = await response.json();

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.message ?? "Shipment not found.");
      }

      setTrackingData(payload.data);
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : "Unable to fetch tracking information.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <section className="bg-navy py-24 px-4 sm:px-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Real-Time Shipment Tracking</h1>
        <p className="text-white/75 text-lg max-w-2xl mx-auto">
          Track your export, import, or domestic shipment using your reference number.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-10 -mt-12">
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-slate-100 mb-12">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow relative">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter Container / AWB / Reference No."
                className="w-full pl-12 pr-4 py-5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-exim-green outline-none text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
            <button
              type="submit"
              className={`btn-primary px-12 py-5 text-lg rounded-2xl flex items-center justify-center gap-2 bg-exim-green hover:bg-green-700 border-none ${isSearching ? "opacity-70 cursor-not-allowed" : ""}`}
              disabled={isSearching}
            >
              {isSearching ? "Searching..." : "Track Now"}
            </button>
          </form>
          <p className="mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center">
            Use the tracking ID shared by our team on invoice, email, or WhatsApp
          </p>
          <p className="mt-2 text-[11px] font-semibold text-slate-400 text-center">
            Demo IDs for testing: SX-98745-EXP | SX-22014-TUR | SX-44088-PEP
          </p>
          {error && (
            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
              {error}
            </div>
          )}
        </div>

        {trackingData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="bg-slate-50 p-8 border-b border-slate-200 flex flex-wrap justify-between items-center gap-4">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Shipment Status</div>
                <div className="text-2xl font-black text-navy flex items-center gap-2">
                  <div className="w-3 h-3 bg-exim-green rounded-full animate-pulse" />
                  {trackingData.shipmentStatus}
                </div>
                <div className="mt-2 text-sm text-slate-500 font-medium">
                  Tracking ID: <span className="font-bold text-navy">{trackingData.trackingId}</span>
                </div>
                {trackingData.updatedAt && (
                  <div className="mt-1 text-xs text-slate-400 font-semibold">
                    Last updated: {new Date(trackingData.updatedAt).toLocaleString()}
                  </div>
                )}
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Delivery</div>
                <div className="text-lg font-black text-navy">{trackingData.estimatedDelivery}</div>
                <div className="mt-2 text-sm text-slate-500 font-medium max-w-[18rem]">
                  Route: <span className="font-bold text-navy">{trackingData.origin}</span> to <span className="font-bold text-navy">{trackingData.destination}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                {trackingData.timeline.map((step, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className={`w-6 h-6 rounded-full border-4 border-white shadow-md flex-shrink-0 z-10 ${step.done ? "bg-exim-green" : step.active ? "bg-exim-green ring-4 ring-exim-green/20" : "bg-slate-200"}`} />
                    <div className={step.active ? "opacity-100" : step.done ? "opacity-100" : "opacity-40"}>
                      <h4 className="font-bold text-navy text-lg leading-none mb-2">{step.status}</h4>
                      <p className="text-slate-500 text-sm flex items-center gap-2">
                        <MapPin size={14} /> {step.location}
                      </p>
                      <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest flex items-center gap-2">
                        <History size={12} /> {step.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-navy text-white flex justify-between items-center text-sm">
              <div className="flex items-center gap-3">
                <Package size={20} className="text-exim-green" />
                <span>Product: <span className="font-bold">{trackingData.product}</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-exim-green" />
                <span>Mode: <span className="font-bold uppercase tracking-widest">{trackingData.mode}</span></span>
              </div>
            </div>
          </motion.div>
        )}

        {!trackingData && !isSearching && (
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-exim-green/10 text-exim-green rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">End-to-End Visibility</h4>
                <p className="text-sm text-slate-500">Track from processing and dispatch to delivery at destination.</p>
              </div>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-exim-green/10 text-exim-green rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Reliable ETA</h4>
                <p className="text-sm text-slate-500">Get practical delivery estimates for export, import, and domestic shipments.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
