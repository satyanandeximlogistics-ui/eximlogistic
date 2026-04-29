import { useState } from "react";
import { Award, Factory, FileCheck, MapPin, PackageCheck, Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/spieces/6etXiCWjwUBnrPCxsBI5WSa8gnfrPW3rQ5NU5ysTFFKE6XCm58HM-91nPH3FMDf4jyQ1ulI7FZBDtIj1BJMhRSUrKVUMYj-fgEj_-3AsXfFRJtmgI50-oCDNQZEeLwA9ybv0uFEvNDShArJvoVLG7Pro_8hmpIA-z25iMP.jpg";
import { products } from "../data/products";

type FeaturedProduct = {
  title: string;
  botanical: string;
  origin: string;
  specs: [string, string][];
  use: string;
  actions: { label: string; href: string }[];
};

export default function EXIM() {
  const [quoteProductId, setQuoteProductId] = useState<string | null>(null);

  const featuredProducts: FeaturedProduct[] = [
    {
      title: "Organic Turmeric - Lakadong/Salem",
      botanical: "Curcuma Longa",
      origin: "Meghalaya / Erode, Tamil Nadu",
      specs: [
        ["Curcumin", "3% to 5%"],
        ["Moisture", "<10%"],
        ["Form", "Fingers, Bulbs, Powder 60-80 mesh"],
        ["MOQ", "500 kg"],
        ["Certifications", "NPOP, USDA Organic, FSSAI, Lab COA"]
      ],
      use: "Traditional Use: Culinary, color, and wellness applications. Valued globally as a natural ingredient.",
      actions: [
        { label: "Request COA", href: "/contact?product=turmeric&action=coa" },
        { label: "Get FOB Quote", href: "/contact?product=turmeric&action=quote" }
      ]
    },
    {
      title: "Organic Black Pepper - Malabar MG1",
      botanical: "Piper Nigrum",
      origin: "Western Ghats, Kerala/Karnataka",
      specs: [
        ["Piperine", ">4%"],
        ["Bulk Density", "500-550 GL"],
        ["Moisture", "<12%"],
        ["MOQ", "300 kg"],
        ["Certifications", "NPOP, EU Organic, FSSAI, Steam Sterilized option"]
      ],
      use: "Traditional Use: India's Black Gold, prized for pungency and aroma in global cuisine.",
      actions: [
        { label: "Download Spec Sheet", href: "/products/black-pepper" },
        { label: "Check Price", href: "/contact?product=black-pepper&action=price" }
      ]
    },
    {
      title: "Organic Green Cardamom - Alleppey AGEB",
      botanical: "Elettaria Cardamomum",
      origin: "Idukki Hills, Kerala",
      specs: [
        ["Size", "7mm+ Bold, 6-7mm, 5-6mm"],
        ["Volatile Oil", ">5%"],
        ["Color", "Natural green, no bleach"],
        ["MOQ", "100 kg"],
        ["Certifications", "NPOP, USDA Organic, Spices Board India"]
      ],
      use: "Traditional Use: Queen of Spices used in beverages, desserts, and spice blends worldwide.",
      actions: [
        { label: "Get Size-wise Quote", href: "/contact?product=cardamom&action=size-wise" },
        { label: "Request Sample", href: "/contact?product=cardamom&action=sample" }
      ]
    },
    {
      title: "Organic Cumin - Gujarat Premium",
      botanical: "Cuminum Cyminum",
      origin: "Banaskantha, Gujarat",
      specs: [
        ["Purity", "99.5% machine clean, 99% sortex"],
        ["Volatile Oil", "2.5% to 3.5%"],
        ["Sudan Dye", "Tested Negative - Every batch"],
        ["MOQ", "500 kg"],
        ["Certifications", "NPOP, EU Organic, FSSAI"]
      ],
      use: "Traditional Use: Foundational spice in Middle Eastern, Mexican, and Indian cuisines.",
      actions: [
        { label: "Lab Report Sample", href: "/contact?product=cumin&action=lab-report" },
        { label: "Check Spot Price", href: "/contact?product=cumin&action=price" }
      ]
    },
    {
      title: "Organic Coriander - Rajasthan Eagle",
      botanical: "Coriandrum Sativum",
      origin: "Ramganj Mandi, Rajasthan",
      specs: [
        ["Purity", "99% machine clean, Eagle grade"],
        ["Volatile Oil", "0.25% to 0.4%"],
        ["Splits", "<5%"],
        ["MOQ", "500 kg"],
        ["Certifications", "NPOP, USDA Organic, Non-GMO, FSSAI"]
      ],
      use: "Traditional Use: One of the oldest spices in recorded history, used whole and ground globally.",
      actions: [
        { label: "Get Split % Report", href: "/contact?product=coriander&action=report" },
        { label: "Wholesale Price", href: "/contact?product=coriander&action=price" }
      ]
    }
  ];

  return (
    <div className="products-catalog-page">
      <section className="products-catalog-hero">
        <img src={heroImage} alt="Premium export spices and coconut products" className="catalog-hero-bg" />
        <div className="catalog-hero-overlay" />
        <div className="catalog-hero-content">
          <h1>Our Products</h1>
          <p>Heritage-led Indian spice categories with export quality, purity, and reliable global supply support.</p>
          <div className="catalog-badges">
            <span><Award size={15} /> Rooted in Indian Heritage</span>
            <span><PackageCheck size={15} /> Premium Grade</span>
            <span><MapPin size={15} /> Sourced from India</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="catalog-content-wrap">
          <div className="max-w-4xl">
            <div className="badge-styled">Our Products</div>
            <h2 className="text-4xl md:text-5xl font-black text-navy mt-4">
              Authentic Organic Indian Spices
            </h2>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              Authentic Organic Indian Spices | NPOP &amp; USDA Certified | Export-Grade
            </p>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-4xl">
              At Satyanand Exim Logistics, we specialize in 5 core organic spices sourced directly from certified farmer groups. Every batch is lab-tested for purity, curcumin/piperine/oil content, and export compliance.
            </p>
          </div>

          <div className="mt-12 grid gap-8">
            {featuredProducts.map((product) => (
              <article key={product.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="text-[0.7rem] font-black uppercase tracking-[0.28em] text-exim-green mb-2">Export Grade</div>
                    <h3 className="text-2xl md:text-3xl font-black text-navy">{product.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      Botanical Name: <span className="italic text-navy">{product.botanical}</span>
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      Origin: <span className="text-navy">{product.origin}</span>
                    </p>
                    <p className="mt-5 text-base text-slate-600 leading-relaxed">{product.use}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {product.actions.map((action) => (
                        <Link
                          key={action.label}
                          to={action.href}
                          className="inline-flex items-center rounded-full border border-exim-green/20 bg-white px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-exim-green transition-colors hover:bg-exim-green hover:text-white"
                        >
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-[420px] bg-white rounded-[1.5rem] border border-slate-200 overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-100 bg-slate-50 font-black text-navy">
                      Key Specs
                    </div>
                    <div className="divide-y divide-slate-100">
                      {product.specs.map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[1fr_auto] gap-4 px-5 py-3 text-sm">
                          <span className="font-semibold text-slate-500">{label}</span>
                          <span className="font-bold text-navy text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-navy text-white p-6 sm:p-8">
            <h3 className="text-2xl font-black">All Products Include</h3>
            <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-4 gap-4 text-sm">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="font-black uppercase tracking-[0.22em] text-exim-green text-[0.7rem] mb-2">Traceability</div>
                <p className="text-white/80 leading-relaxed">Farm group, plot, and harvest date documented</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="font-black uppercase tracking-[0.22em] text-exim-green text-[0.7rem] mb-2">Lab Testing</div>
                <p className="text-white/80 leading-relaxed">Aflatoxin, Pesticide, Heavy Metals, Microbial per EU/USA norms</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="font-black uppercase tracking-[0.22em] text-exim-green text-[0.7rem] mb-2">Packaging</div>
                <p className="text-white/80 leading-relaxed">25kg/50kg PP bags, 1kg vacuum pouches, private label ready</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="font-black uppercase tracking-[0.22em] text-exim-green text-[0.7rem] mb-2">Ports &amp; Terms</div>
                <p className="text-white/80 leading-relaxed">Chennai, Kattupalli, Mundra, Kochi | FOB, CIF, DDP</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70 leading-relaxed">
              Compliance Note: Products sold as food ingredients. Information based on traditional culinary use. Not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </section>

      <section className="catalog-detailed-products">
        <div className="catalog-content-wrap">
          <div className="catalog-section-head">
            <h2>Detailed Catalog</h2>
            <p>Explore export-ready products with traceable sourcing, tested purity, and strong flavor performance for global B2B buyers.</p>
          </div>

          <div className="catalog-product-detail-grid">
            {products.map((product) => (
              <article key={product.id} className="catalog-detail-card">
                <div className="catalog-profile-top">
                  <img
                    src={product.image}
                    alt={`${product.name} export`}
                    className={`catalog-detail-image ${
                      product.id === "red-chilli"
                        ? "is-red-chilli"
                        : product.id === "coconut"
                          ? "is-coconut"
                          : ""
                    }`}
                  />
                  <div className="catalog-detail-body">
                    <div className="catalog-detail-topline">Heritage-led Export | {product.category}</div>
                    <h3>{product.productTitle}</h3>
                    <p>{product.intro}</p>
                  </div>
                </div>
                <div className="catalog-detail-actions">
                  <Link className="catalog-action-link" to={`/products/${product.id}`}>View Details</Link>
                  <button type="button" className="alt" onClick={() => setQuoteProductId(product.id)}>Request Quote</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-secondary-support">
        <div className="catalog-content-wrap">
          <div className="catalog-secondary-card">
            <div>
              <div className="secondary-badge">Secondary Support</div>
              <h3>Logistics Assistance Available</h3>
              <p>
                We also support documentation and shipment coordination to ensure consistent supply and smooth movement after quality clearance.
              </p>
            </div>
            <div className="secondary-icons">
              <span><FileCheck size={17} /> Export Documents</span>
              <span><Factory size={17} /> Packing Coordination</span>
              <span><Send size={17} /> Dispatch Tracking</span>
            </div>
          </div>
        </div>
      </section>

      {quoteProductId && (
        <div className="catalog-modal-backdrop" role="dialog" aria-modal="true">
          <div className="catalog-quote-card">
            <button type="button" className="catalog-modal-close" onClick={() => setQuoteProductId(null)} aria-label="Close quote form">
              <X size={18} />
            </button>
            <h3>Request Quote</h3>
            <p>Share your requirement and our export team will respond with pricing and shipment options.</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setQuoteProductId(null);
              }}
              className="catalog-quote-form"
            >
              <div className="catalog-quote-grid">
                <input type="text" placeholder="Full Name" required />
                <input type="text" placeholder="Company Name" required />
              </div>
              <div className="catalog-quote-grid">
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <select
                value={quoteProductId}
                onChange={(event) => setQuoteProductId(event.target.value)}
                required
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>{product.name}</option>
                ))}
              </select>
              <textarea rows={4} placeholder="Quantity, destination country, and packing preference" required />
              <button type="submit">Submit Quote Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
