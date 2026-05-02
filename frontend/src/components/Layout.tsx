import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import logoImage from "../assets/logo/WhatsApp Image 2026-04-29 at 7.18.06 PM.jpeg";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const logoAlt = "Satyanand Exim Logistics OPC Private Limited logo";
  const contactPhone = "+91 7338899898";
  const whatsappNumber = "917338899898";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);

    const sections = Array.from(document.querySelectorAll("main section")).filter(
      (section) => !section.classList.contains("hero-container")
    );

    sections.forEach((section) => section.classList.add("scroll-reveal-target"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/exim" },
    { name: "Logistics", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      iconClass: "fa-brands fa-facebook-f",
      href: "https://www.facebook.com/",
      className: "social-link-facebook"
    },
    {
      name: "Instagram",
      iconClass: "fa-brands fa-instagram",
      href: "https://www.instagram.com/",
      className: "social-link-instagram"
    },
    {
      name: "WhatsApp",
      iconClass: "fa-brands fa-whatsapp",
      href: `https://wa.me/${whatsappNumber}`,
      className: "social-link-whatsapp"
    },
    {
      name: "YouTube",
      iconClass: "fa-brands fa-youtube",
      href: "https://www.youtube.com/",
      className: "social-link-youtube"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-exim-green/30 selection:text-exim-green">
      <div className="bg-[#103146] text-white py-2 px-4 sm:px-10 flex justify-between text-[12px] font-medium hidden sm:flex border-b border-white/10">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-exim-green" /> {contactPhone}
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-exim-green" /> vsatyanand71@gmail.com
          </span>
        </div>
        <div className="flex gap-4 opacity-80">
          <span>Kakinada, Andhra Pradesh, India</span>
        </div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "top-0 bg-white/94 backdrop-blur-md shadow-md py-2.5" : "top-0 sm:top-[36px] bg-white py-3.5"} border-b border-slate-100 px-4 sm:px-10`}>
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0 min-w-0">
            <img src={logoImage} alt={logoAlt} className="w-[3.25rem] h-[3.25rem] sm:w-14 sm:h-14 shrink-0 object-contain" />
            <div className="flex flex-col leading-tight tracking-tight min-w-0">
              <span className="text-[0.82rem] sm:text-[0.96rem] font-extrabold text-[#0F2B46] whitespace-nowrap">
                Satyanand Exim Logistics
              </span>
              <span className="text-[0.62rem] sm:text-[0.74rem] font-bold text-exim-green uppercase tracking-[0.26em] whitespace-nowrap">
                OPC Private Limited
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-1.5 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link-pill text-[14px] font-medium transition-all ${
                  location.pathname === link.path
                    ? "is-active text-exim-green"
                    : "text-slate-600 hover:text-exim-green"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="hidden lg:inline-flex bg-exim-green hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold text-[14px] transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0 shrink-0">
            Book Consultation
          </Link>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-600 rounded-full border border-slate-200 bg-white shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-[calc(100%+0.75rem)] left-4 right-4 bg-white border border-slate-200 rounded-3xl p-4 flex flex-col gap-2 lg:hidden z-50 shadow-2xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[14px] font-medium px-4 py-2 rounded-lg ${
                    location.pathname === link.path
                      ? "text-exim-green bg-exim-green/10 border border-exim-green/20"
                      : "text-slate-600 hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-exim-green text-white px-5 py-3 rounded-full text-center font-bold mt-2">
                Book Consultation
              </Link>
            </motion.div>
          )}
        </div>
      </nav>

      <div className="h-[76px] sm:h-[104px]"></div>

      <aside className="social-sidebar" aria-label="Social media links">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className={`social-link ${social.className}`}
          >
            <i className={social.iconClass} aria-hidden="true" />
          </a>
        ))}
      </aside>

      <main key={location.pathname} className="flex-grow page-shell">
        {children}
      </main>

      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="text-xl font-bold text-navy tracking-tight flex items-center gap-2">
            <img src={logoImage} alt={logoAlt} className="w-9 h-9 object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base text-navy">Satyanand Exim Logistics</span>
              <span className="text-[0.62rem] sm:text-[0.72rem] font-semibold text-exim-green uppercase tracking-[0.18em]">
                OPC Private Limited
              </span>
            </span>
          </Link>
          <div className="flex gap-8 text-[12px] font-bold text-slate-500 uppercase tracking-widest">
            <Link to="/exim" className="hover:text-exim-green">Products</Link>
            <Link to="/services" className="hover:text-exim-green">Logistics Support</Link>
            <Link to="/contact" className="hover:text-exim-green">Contact</Link>
          </div>
          <div className="text-slate-500 text-xs font-semibold space-y-1">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-exim-green" /> {contactPhone}
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-exim-green" /> vsatyanand71@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-exim-green" /> Kakinada, Andhra Pradesh, India
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
