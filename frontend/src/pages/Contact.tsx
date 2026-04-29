import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const googleMapsUrl = "https://goo.gl/maps/bJfhE3vckNLvQHidA?g_st=aw";
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product");
  const action = searchParams.get("action");
  const inquiryLabel = product
    ? `${product.replace(/-/g, " ")}${action ? ` - ${action.replace(/-/g, " ")}` : ""}`
    : "";

  return (
    <div className="bg-white pb-24">
      <section className="bg-navy py-20 px-4 sm:px-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Connect With Satyanand Exim Logistics OPC Private Limited</h1>
        <p className="text-white/75 text-lg max-w-2xl mx-auto">
          Contact us for heritage-led Indian spices, premium quality specifications, and dependable global shipment support.
        </p>
        <p className="text-white/90 text-base md:text-lg font-semibold mt-4">
          Satyanand Exim Logistics OPC Private Limited
        </p>
        {inquiryLabel && (
          <div className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
            Inquiry: {inquiryLabel}
          </div>
        )}
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { icon: <Phone size={24} />, title: "Phone", details: "+91 734 896 7849", sub: "Business Contact" },
            { icon: <Mail size={24} />, title: "Email", details: "vsatyanand71@gmail.com", sub: "Business Contact" },
            { icon: <MapPin size={24} />, title: "Location", details: "Kakinada, Andhra Pradesh, India", sub: "Operations Base" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl text-center"
            >
              <div className="w-16 h-16 bg-exim-green/10 text-exim-green rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="font-bold text-navy mb-2">{item.title}</h3>
              <div className="text-lg font-black text-navy mb-1">{item.details}</div>
              <p className="text-slate-400 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black text-navy mb-8">Send A Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-exim-green focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-exim-green focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Type</label>
                <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-exim-green focus:border-transparent outline-none transition-all bg-white">
                  <option value="">Select Service Type</option>
                  <option>Export</option>
                  <option>Logistics</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                <textarea rows={6} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-exim-green focus:border-transparent outline-none transition-all resize-none" placeholder="Share product, quantity, destination market, and quality requirements..."></textarea>
              </div>
              <button className="w-full btn-primary py-5 rounded-xl text-lg flex items-center justify-center gap-3 bg-exim-green hover:bg-green-700 border-none">
                Send Request <ArrowRight size={20} />
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-black text-navy mb-8">Our Location</h2>
            <div className="h-[400px] bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200 flex items-center justify-center">
              <div className="text-center px-6">
                <MapPin size={40} className="mx-auto text-exim-green mb-4" />
                <p className="text-slate-500 font-medium mb-4">Kakinada, Andhra Pradesh, India</p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex bg-navy text-white px-5 py-3 rounded-full font-bold hover:bg-exim-green transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="mt-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                <Clock size={18} className="text-exim-green" /> Business Hours
              </h4>
              <div className="space-y-2 text-slate-600 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-bold">09:00 AM - 07:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold">10:00 AM - 04:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold text-exim-green">Emergency Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
