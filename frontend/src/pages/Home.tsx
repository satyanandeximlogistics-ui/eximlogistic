import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Globe,
  Clock3,
  Handshake,
  BadgeCheck,
  DollarSign,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

import spiceHeroOne from "../assets/spice-hero.jpg";
import spiceHeroTwo from "../assets/spieces/6etXiCWjwUBnrPCxsBI5WSa8gnfrPW3rQ5NU5ysTFFKE6XCm58HM-91nPH3FMDf4jyQ1ulI7FZBDtIj1BJMhRSUrKVUMYj-fgEj_-3AsXfFRJtmgI50-oCDNQZEeLwA9ybv0uFEvNDShArJvoVLG7Pro_8hmpIA-z25iMP.jpg";
import spiceProductOne from "../assets/spieces/G0ZYH814Pv6GkccL5v0vQrpkEzgkThUyu8Js1wOYxU0KJxvtfnVQ6OBrcp5ncHIXo3I_rERgV8x5R9wP7iUxIJwD1RMErhj1asAtdrnoc6VZO8DLkCfJYEP40DtsaGnlJN036bjZcX06IugtQsvHJygah0QieG91DZtoJU.jpg";
import spiceProductTwo from "../assets/spieces/kcvZlAGoRQ6I6OnWiH_TjbLv6Md6JWB_UhLHTdTf4OHRGO9ykM0oAvTaDKGlNKq9SUfSkCJGwp53JVu5goXNQnw0ZM5Eonw18uCUxbQ8Sk4rDUSzLYhen0F78-vWuw-1xHQ4-KCc3hUl54f61XeWkEYEQctDcYn05oW7Oz.jpg";
import spiceProductThree from "../assets/spieces/REDYsYP-jvs2Yae9xlTZhwtrdNYuKNO9Y0ARFjqqjX1frJhfCb2gwRF5ucFOWVBbtnPgbSqPMVOkuU8ksN9Hre2XDpptUSUFg8Ph8pQaAirmbiwNSKnuswzsmvIXriI69k15Uok4lHMUoYURvlqtLg3zHAlglBs1KUJUWO.jpg";
import spiceProductFour from "../assets/spieces/STJvq3R4Apb5uLoGPPmSIYK2PS0JZTOzIM9nb4axaTar8uk6PwoLQAec3OYlCUvGwRGqiLrC-rMvW2QfRNG9UtN35ib7rNbKfjYs5lam3OUW85igUGd4DcdbiEYQSO5CWhTPOWmVdBcfSWapI_o5wsBf4rR1C52_KIQwIA.jpg";
import spiceCta from "../assets/spieces/Z7Epc-uXO9q4_E84yNiwd_BdvVwl6R9bXT5Pz-6VKQEqbkMDEac7rnUUtKhH3mscJeO9FLseLyVOvcoNVsHu8YheH7BLyRTRlLYGoafqCfHsdpe2PnWvso0tOFYOVuKR75jHM9fPRHb_Ygfve_EjABepzQXvE5yb9F1w3m.jpg";

export default function Home() {
  const contactPhone = "+91 7338899898";
  const heroSlides = [spiceHeroOne, spiceHeroTwo, spiceProductThree];

  const [currentSlide, setCurrentSlide] = useState(0);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const target = aboutSectionRef.current;
    if (!target || aboutVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [aboutVisible]);

  return (
    <>
      <section className="hero-container">
        <div className="hero-slider" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className={`hero-slide ${index === currentSlide ? "is-active" : ""}`}
              style={{ backgroundImage: `url("${slide}")` }}
            />
          ))}
        </div>
        <div className="hero-overlay" />

        <div className="hero-content" key={currentSlide}>
          <h1 className="hero-title">Rooted in India, Ready for the World</h1>
          <div className="hero-subtext-box">
            <p className="hero-subtext">
              India has led the global spice trade for centuries. We carry that legacy forward through direct sourcing, export-grade quality control, and consistent fulfillment for international buyers.
            </p>
          </div>
          <div className="hero-buttons">
            <a href="#products" className="hero-btn hero-btn-primary">
              Our Products
            </a>
            <Link to="/services" className="hero-btn hero-btn-logistics">
              Logistics Support
            </Link>
          </div>
        </div>

        <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
          <span className="scroll-indicator-dot" />
        </a>
      </section>

      <section id="products" className="products-section">
        <div className="products-wrap">
          <div className="products-header">
            <div className="products-priority">Primary Focus (70%): Product Export</div>
            <h2 className="products-title">Our Products</h2>
            <p className="products-subtitle">
              Premium spice categories sourced from trusted Indian farming regions and prepared for global trade standards with purity, aroma, and consistency.
            </p>
          </div>

          <div className="products-grid">
            {[
              { title: "Spices", image: spiceProductOne },
              { title: "Red Chilli", image: spiceProductTwo },
              { title: "Agro Products", image: spiceProductThree },
              { title: "Coconut", image: spiceProductFour }
            ].map((product, idx) => (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.08 }}
                className="product-card"
              >
                <img src={product.image} alt={`${product.title} for export`} className="product-card-media" />
                <div className="product-card-overlay" />
                <div className="product-card-content">
                  <h3 className="product-card-title">{product.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" ref={aboutSectionRef} className="about-section">
        <div className="about-wrap">
          <div className={`about-media ${aboutVisible ? "is-visible" : ""}`}>
            <div className="about-media-frame">
              <img
                src={spiceProductOne}
                alt="Export quality spices and agro products"
                className="about-media-img"
              />
            </div>
          </div>

          <div className={`about-content ${aboutVisible ? "is-visible" : ""}`}>
            <div className="about-label">Rooted in Indian Spice Heritage</div>
            <h3 className="about-heading">Trusted Indian Spice Export Partner</h3>
            <p className="about-copy">
              India is known as the Land of Spices, with a rich history of global trade. We carry this heritage forward through authentic sourcing, strong flavor and aroma retention, strict quality standards, and reliable shipment support.
            </p>
            <Link to="/about" className="about-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="strengths-section">
        <div className="strengths-wrap">
          <div className="strengths-header">
            <h2 className="strengths-title">Our Strengths</h2>
            <p className="strengths-subtitle">Trusted by Global Buyers</p>
          </div>

          <div className="strengths-grid">
            {[
              {
                title: "Rich Heritage",
                desc: "Traditional farming and processing methods passed through generations."
              },
              {
                title: "Product Diversity",
                desc: "Wide range including turmeric, black pepper, red chilli, coconut, and spices."
              },
              {
                title: "Premium Quality",
                desc: "Export-grade, high-purity, and tested products for international buyers."
              },
              {
                title: "Sustainability",
                desc: "Eco-friendly sourcing practices with continued support for farming communities."
              },
              {
                title: "Value-Added Products",
                desc: "Spice powders, blends, and processed goods tailored for market needs."
              }
            ].map((item) => (
              <article key={item.title} className="strength-card">
                <h3 className="strength-card-title">{item.title}</h3>
                <p className="strength-card-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="why-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="why-wrap">
          <motion.div
            className="why-left"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="why-title">Why Choose Us</h2>
            <p className="why-subtitle">
              We combine authentic sourcing with premium export quality, dependable logistics support, and clear communication for every buyer.
            </p>

            <div className="why-points">
              {[
                { icon: <Globe size={18} />, title: "Authentic Indian Origin", desc: "Direct sourcing from trusted Indian farming regions." },
                { icon: <BadgeCheck size={18} />, title: "Premium Export Quality", desc: "Strict quality control aligned with international standards." },
                { icon: <Handshake size={18} />, title: "Natural & Sustainable Products", desc: "Responsible sourcing with a focus on purity and sustainability." },
                { icon: <DollarSign size={18} />, title: "Strong Flavor & Potency", desc: "Authentic aroma, flavor intensity, and high product consistency." },
                { icon: <Clock3 size={18} />, title: "Reliable Supply & Logistics Support", desc: "Steady shipment planning, documentation, and transit coordination." }
              ].map((point) => (
                <div key={point.title} className="why-point-item">
                  <div className="why-point-icon">{point.icon}</div>
                  <div>
                    <h4 className="why-point-title">{point.title}</h4>
                    <p className="why-point-desc">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="cta-section">
        <div className="cta-bg" style={{ backgroundImage: `url('${spiceCta}')` }} />
        <div className="cta-overlay" />
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="cta-title">Heritage in Every Shipment</h2>
          <p className="cta-subtitle">
            Partner with us for authentic Indian spices and agro products backed by export-grade quality, purity, and dependable global supply support.
          </p>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          >
            <Link to="/contact" className="cta-btn cta-btn-primary">
              Get a Quote
            </Link>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="badge-styled">Contact Us</div>
              <h3 className="text-4xl font-extrabold text-navy mb-8">Ready to grow your export business?</h3>
              <p className="text-lg text-slate-500 mb-12">
                Share your spice export requirements and destination markets. Our team will provide a clear plan with product options, quality details, and shipment support.
              </p>

              <div className="space-y-6 max-w-2xl">
                {[
                  {
                    icon: <Phone size={24} />,
                    label: "Phone",
                    value: contactPhone,
                    subtext: "Business Contact"
                  },
                  {
                    icon: <Mail size={24} />,
                    label: "Email",
                    value: "vsatyanand71@gmail.com",
                    subtext: "Business Contact"
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4"
                  >
                    <div className="w-11 h-11 shrink-0 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-exim-green shadow-sm">
                      {item.icon}
                    </div>
                    <div className="pt-1">
                      <div className="text-[0.62rem] font-black uppercase tracking-[0.32em] text-slate-500 mb-2">{item.label}</div>
                      <div className="text-[1.05rem] md:text-[1.15rem] leading-tight font-extrabold text-navy max-w-2xl break-words">
                        {item.value}
                      </div>
                      <p className="text-[0.72rem] md:text-sm text-slate-400 mt-2">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-8 shadow-sm border border-slate-200">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-[6px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-exim-green" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-[6px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-exim-green" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-[6px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-exim-green" />
                <select className="w-full px-4 py-3 rounded-[6px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-exim-green bg-white">
                  <option value="">Service Type</option>
                  <option>Export</option>
                  <option>Logistics</option>
                </select>
                <textarea rows={4} placeholder="Requirement Details..." className="w-full px-4 py-3 rounded-[6px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-exim-green resize-none"></textarea>
                <button type="submit" className="w-full btn-primary py-4 text-lg">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
