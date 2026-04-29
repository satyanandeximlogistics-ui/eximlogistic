import { Target, TrendingUp } from "lucide-react";

import founderPhoto from "../assets/WhatsApp Image 2026-04-28 at 11.49.21 AM.jpeg";
import spiceHero from "../assets/3WgvVVgOuKX6G3zP2z0V_XAoyYHBfBXr6trmfYKm10-qhmUxQ_sgcvbdm5-bn42nj0BVUOmeaC8BbP_QcFRtW4Np5x06qUoWMCKcwsJ9HypGIFxFCg28OSCnADjCm_nk2VI1jZZ7s91uxJPNef-Hx8fnkscO2X8Sy_iU-CvjDS4NN3.jpg";
import spiceImage from "../assets/spieces/G0ZYH814Pv6GkccL5v0vQrpkEzgkThUyu8Js1wOYxU0KJxvtfnVQ6OBrcp5ncHIXo3I_rERgV8x5R9wP7iUxIJwD1RMErhj1asAtdrnoc6VZO8DLkCfJYEP40DtsaGnlJN036bjZcX06IugtQsvHJygah0QieG91DZtoJU.jpg";

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-navy py-24 px-4 sm:px-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          <img src={spiceHero} alt="Spices and agro products" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">About Satyanand Exim Logistics OPC Private Limited</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            India is known as the Land of Spices, and we continue that legacy with heritage-led sourcing, export-grade quality control, and dependable global trade execution.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="badge-styled">Our Story</div>
            <h2 className="text-4xl font-black text-navy mb-8">India's Spice Heritage, Delivered Worldwide</h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Satyanand Exim Logistics OPC Private Limited is built to deliver authentic Indian spices and agro products with strong flavor, aroma, and purity. We source directly from trusted farming regions, apply strict quality checks, and support reliable export movement for long-term buyer confidence.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Target size={32} className="text-exim-green mb-4" />
                <h4 className="font-bold text-navy mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500">Deliver premium, export-grade Indian spices and agro products with consistent quality and traceability.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <TrendingUp size={32} className="text-exim-green mb-4" />
                <h4 className="font-bold text-navy mb-2">Our Vision</h4>
                <p className="text-sm text-slate-500">Be a trusted global partner for Indian spice excellence and reliable export fulfillment.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={spiceImage} alt="Premium spice products" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="rounded-[2rem] bg-white border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="grid lg:grid-cols-[340px_1fr] gap-0">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10 flex items-center justify-center">
                <div className="w-full max-w-[300px]">
                  <div className="rounded-full overflow-hidden border-[10px] border-white shadow-xl bg-white">
                    <img
                      src={founderPhoto}
                      alt="Dr. Vungarala Satyanand, Founder and Director of Satyanand Exim Logistics OPC Private Limited"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="badge-styled">Meet the Founder</div>
                <h2 className="text-4xl md:text-5xl font-black text-navy mt-4">
                  Dr. Vungarala Satyanand
                </h2>
                <p className="text-xl font-semibold text-exim-green mt-3">
                  Founder &amp; Director, Satyanand Exim Logistics OPC Private Limited
                </p>
                <p className="text-lg text-slate-600 mt-2">
                  Naturopathy &amp; Yoga Physician | 25+ Years Experience in Natural Wellness
                </p>

                <div className="flex flex-wrap gap-3 mt-6 text-sm font-semibold text-slate-500">
                  <span className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200">Born: 1971</span>
                  <span className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200">Based: Chennai, Tamil Nadu, India</span>
                </div>

                <div className="mt-8 space-y-6 max-w-4xl">
                  <div>
                    <h3 className="text-2xl font-black text-navy mb-3">From Healing to Global Trade</h3>
                    <p className="text-lg text-slate-500 leading-relaxed">
                      For over 25 years, Dr. Vungarala Satyanand served as a Naturopathy and Yoga Physician, guiding people toward natural living and preventive wellness. That experience shaped the standards behind Satyanand Exim Logistics OPC Private Limited, launched in 2024.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-navy mb-3">Why Spices? Why Export?</h3>
                    <p className="text-lg text-slate-500 leading-relaxed">
                      India's spices have been valued for centuries for their culinary and traditional wellness importance. Dr. Satyanand founded this company to combine natural-product discipline with modern EXIM compliance, traceability, and buyer trust.
                    </p>
                  </div>

                  <blockquote className="border-l-4 border-exim-green bg-slate-50 rounded-2xl px-6 py-5">
                    <p className="text-lg md:text-xl text-navy font-medium leading-relaxed">
                      "In my clinic, I never compromised on the quality of herbs I recommended. At Satyanand Exim, I apply the same standard to every container we ship."
                    </p>
                  </blockquote>

                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                      <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400 mb-2">Quality</div>
                      <div className="font-black text-navy">Single-origin sourcing</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                      <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400 mb-2">Compliance</div>
                      <div className="font-black text-navy">Clean export documentation</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                      <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400 mb-2">Trust</div>
                      <div className="font-black text-navy">Transparency from soil to ship</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
