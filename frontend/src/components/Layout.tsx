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

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);

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
    { name: "Tracking", path: "/tracking" },
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
      href: "https://wa.me/917348967849",
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
            <Phone size={14} className="text-exim-green" /> +91 734 896 7849
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-exim-green" /> vsatyanand71@gmail.com
          </span>
        </div>
        <div className="flex gap-4 opacity-80">
          <span>Kakinada, Andhra Pradesh, India</span>
        </div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "top-0 bg-white/92 backdrop-blur-md shadow-lg py-2" : "top-0 sm:top-[36px] bg-white py-4"} border-b border-slate-100 px-4 sm:px-10`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-satyanand-exim.svg" alt="Satyanand Exim Logistics OPC Private Limited logo" className="w-10 h-10" />
            <div className="flex flex-col leading-tight tracking-tight">
              <span className="text-[0.88rem] sm:text-lg font-bold text-[#0F2B46]">
                Satyanand Exim Logistics
              </span>
              <span className="text-[0.68rem] sm:text-xs font-semibold text-exim-green uppercase tracking-[0.18em]">
                OPC Private Limited
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[14px] font-medium transition-all ${
                  location.pathname === link.path
                    ? "text-exim-green bg-exim-green/10 border border-exim-green/25 rounded-full px-4 py-1.5 font-bold"
                    : "text-slate-600 hover:text-exim-green border border-transparent rounded-full px-4 py-1.5 hover:bg-exim-green/7"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact" className="bg-exim-green hover:bg-green-700 text-white px-6 py-2.5 rounded-[8px] font-bold text-[14px] transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0">
              Book Consultation
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-20 left-0 right-0 bg-white border-b border-slate-200 p-4 flex flex-col space-y-4 md:hidden z-50 shadow-xl"
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
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-exim-green text-white px-5 py-3 rounded-[8px] text-center font-bold mx-4">
                Book Consultation
              </Link>
            </motion.div>
          )}
        </div>
      </nav>

      <div className="h-[80px] sm:h-[116px]"></div>

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
            <img src="/logo-satyanand-exim.svg" alt="Satyanand Exim Logistics OPC Private Limited logo" className="w-7 h-7" />
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
              <Phone size={14} className="text-exim-green" /> +91 734 896 7849
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
