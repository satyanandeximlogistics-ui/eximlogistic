import { Award, CheckCircle2, Globe, Leaf, MapPin, PackageCheck, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <section className="py-24 px-4 sm:px-10 text-center">
        <h1 className="text-3xl font-bold text-navy">Product not found</h1>
        <p className="text-slate-500 mt-3">Please go back to our products catalog.</p>
        <Link to="/exim" className="inline-flex mt-6 btn-primary">Back to Products</Link>
      </section>
    );
  }

  const highlightValues =
    product.id === "turmeric"
      ? ["Curcumin Rich", "Export Grade", "Strong Color & Aroma"]
      : product.id === "coconut"
        ? ["Oil Content up to 65% (Premium Grade)", "Export Grade", "Long Shelf Life"]
        : product.id === "spices"
          ? ["98-100% Purity | Export Grade Spices", "High Volatile Oils", "Global Demand"]
          : product.id === "red-chilli"
            ? ["ASTA up to 150+ | Premium Export Grade Chilli", "High Pungency Range", "Export-Stable Moisture"]
            : product.id === "black-pepper"
              ? ["Piperine up to 9% | Premium Tellicherry Grade", "High Bulk Density", "Strong Aroma Oils"]
      : ["Export Grade", "Consistent Supply", "Global Market Ready"];

  const trustIndicators = [
    product.sourcingRegions[0] ? `Region: ${product.sourcingRegions[0]}` : "Authentic Indian origin",
    "Strict export quality checks",
    "Reliable supply and dispatch"
  ];

  const quickHighlights = Array.from(new Set([
    ...(product.quality?.slice(0, 2) ?? []),
    ...(product.whyBuy?.slice(0, 2) ?? [])
  ])).slice(0, 3);
  const heroBadges = ["Rooted in Indian Heritage", "Premium Export Quality", "High Purity"];
  const heroImagePosition: Record<string, string> = {
    turmeric: "center 74%",
    "red-chilli": "center 48%",
    coconut: "center 42%",
    spices: "center 50%",
    "black-pepper": "center 50%"
  };

  return (
    <div className="products-catalog-page">
      <section className="catalog-detailed-products py-10">
        <div className="catalog-content-wrap">
          <div className="product-detail-topbar">
            <Link to="/exim" className="text-exim-green font-semibold text-sm">Back to Products</Link>
          </div>

          <article className="product-hero-premium">
            <img
              src={product.image}
              alt={product.name}
              className="product-hero-image"
              style={{ objectPosition: heroImagePosition[product.id] ?? "center 50%" }}
            />
            <div className="product-hero-overlay" />
            <div className="product-hero-content-layer">
              <div className="catalog-detail-topline on-hero">Heritage-led Export | {product.category}</div>
              <h1>{product.productTitle}</h1>
              <p>{product.intro}</p>
              <div className="product-hero-badges">
                {heroBadges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
              <div className="product-detail-cta is-on-hero">
                <Link className="catalog-action-link" to={`/contact?product=${product.id}`}>Request Quote</Link>
                <Link className="catalog-action-link alt" to="/contact">Contact</Link>
              </div>
            </div>
          </article>

          <div className="product-hero-meta">
            <div className="product-trust-indicators">
              <span><MapPin size={14} /> {trustIndicators[0]}</span>
              <span><ShieldCheck size={14} /> {trustIndicators[1]}</span>
              <span><Globe size={14} /> {trustIndicators[2]}</span>
            </div>
            <div className="product-value-pills">
              {highlightValues.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            {quickHighlights.length > 0 && (
              <div className="product-quick-points">
                {quickHighlights.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="catalog-section-head left product-sections-title">
            <h2>Product Specifications</h2>
            <p>Clear export-focused details covering quality, sourcing, purity, and market readiness.</p>
          </div>

          <article className="catalog-detail-card is-expanded">
            <div className="catalog-profile-sections">
              {[
                ...(product.keyQualitySpecs
                  ? [{
                      title: "Key Quality Specifications",
                      items: product.keyQualitySpecs,
                      icon: <PackageCheck size={16} />
                    }]
                  : []),
                {
                  title: "Quality Details",
                  items: product.quality,
                  icon: <PackageCheck size={16} />
                },
                {
                  title: "Sourcing Regions",
                  items: product.sourcingRegions,
                  icon: <MapPin size={16} />
                },
                ...(product.premiumVarieties
                  ? [{
                      title: product.premiumVarietiesTitle ?? "Premium Varieties",
                      items: product.premiumVarieties,
                      icon: <Award size={16} />
                    }]
                  : []),
                ...(product.types
                  ? [{
                      title: "Types of Spices",
                      items: product.types,
                      icon: <Leaf size={16} />
                    }]
                  : []),
                {
                  title: "Why Buy This Product",
                  items: product.whyBuy,
                  icon: <Award size={16} />,
                  highlight: true
                },
                {
                  title: "Product Benefits",
                  items: product.benefits,
                  icon: <Leaf size={16} />
                },
                ...(product.marketDemand
                  ? [{
                      title: "Market Demand & Export Value",
                      items: product.marketDemand,
                      icon: <Globe size={16} />
                    }]
                  : []),
                {
                  title: "Applications",
                  items: product.applications,
                  icon: <Globe size={16} />
                }
              ].map((section) => (
                <div
                  key={`${product.id}-${section.title}`}
                  className={`catalog-profile-section ${section.highlight ? "is-highlight" : ""}`}
                >
                  <h4>
                    <span className="catalog-section-icon">{section.icon}</span>
                    {section.title}
                  </h4>
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <section className="product-bottom-cta">
            <h3>Ready to discuss your export requirement?</h3>
            <p>Our team can share product specifications, packing options, and shipment support aligned with your destination market requirements.</p>
            <div className="product-detail-cta">
              <Link className="catalog-action-link" to={`/contact?product=${product.id}`}>Request Quote</Link>
              <Link className="catalog-action-link alt" to="/contact">Contact</Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
