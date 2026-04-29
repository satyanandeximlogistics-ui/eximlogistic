import { motion } from "motion/react";
import {
  Truck,
  Globe,
  Anchor,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const allServices = [
    {
      icon: <Anchor size={32} />,
      title: "Sea Freight",
      desc: "Reliable ocean logistics coordination for export and import cargo across key trade routes.",
      features: ["FCL / LCL Coordination", "Port Handling", "Freight Visibility"]
    },
    {
      icon: <Plane size={32} />,
      title: "Air Freight",
      desc: "Fast handling for urgent samples and high-priority consignments with route optimization.",
      features: ["Priority Bookings", "Airport Coordination", "Time-Critical Movement"]
    },
    {
      icon: <Truck size={32} />,
      title: "Land Cargo Solutions",
      desc: "Pan-India movement support for factory pickups, regional distribution, and final-mile delivery.",
      features: ["Factory to Port", "Regional Distribution", "Last-Mile Delivery"]
    },
    {
      icon: <Truck size={32} />,
      title: "Domestic Transportation",
      desc: "Reliable domestic movement for factory pickups, regional deliveries, and time-sensitive dispatches.",
      features: ["Door-to-Door Support", "Regional Distribution", "Fast Dispatch Coordination"]
    }
  ];

  return (
    <div className="bg-slate-50">
      <section className="bg-[#12344C] py-24 px-4 sm:px-10 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-500/20 text-blue-100 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            Logistics Services
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Logistics Support Services</h1>
          <p className="text-white/75 text-lg max-w-3xl mx-auto">
            We provide focused logistics support across ocean, air, land, and domestic transportation movements.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid md:grid-cols-2 gap-10">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-navy mb-4">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm">{service.desc}</p>
              <div className="space-y-3">
                {service.features.map((feature, f) => (
                  <div key={f} className="flex items-center gap-3 text-xs font-bold text-navy">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/contact" className="text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Enquire Now <Globe size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 px-4 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">Need Logistics Support Alongside Product Export?</h2>
          <p className="text-white/60 mb-10 text-lg">We will design a practical logistics plan around your products, destinations, and delivery timelines.</p>
          <Link to="/contact" className="btn-primary inline-flex py-4 px-12 text-lg bg-blue-600 hover:bg-blue-700 border-none">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
