import { Link } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICES = [
    {
        id: "seo",
        title: "SEO Optimization",
        desc: "Climb search rankings organically and capture high-intent traffic before your competitors do.",
        metric: "↑ 214% avg. traffic",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 18l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "social",
        title: "Social Media Marketing",
        desc: "Build loyal communities and grow brand presence across every platform that matters to your audience.",
        metric: "3.2M+ reach/month",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="7" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="21" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="21" cy="21" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 12.5l8-4M10 15.5l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "ads",
        title: "Paid Advertising",
        desc: "Launch precision-targeted campaigns on Google and social platforms engineered to convert at scale.",
        metric: "4.8× avg. ROAS",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 20l6-8 5 5 4-6 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 8h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "brand",
        title: "Brand Strategy",
        desc: "Define a powerful identity and market position that resonates deeply and differentiates you from the noise.",
        metric: "98% client retention",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M14 4l2.5 7.5H24l-6.5 4.5 2.5 7.5L14 19l-6 4.5 2.5-7.5L4 11.5h7.5L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "web",
        title: "Web Development",
        desc: "Fast, modern websites architected to convert visitors into customers and reflect your brand at its best.",
        metric: "Sub-1s load times",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="3" y="5" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 10h22" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 15l3 3-3 3M15 21h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "content",
        title: "Content Marketing",
        desc: "Build authority and trust through editorial content, video, and storytelling that keeps your audience coming back.",
        metric: "6× engagement lift",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 7h16M6 12h12M6 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="21" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M21 18v2l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceCard({ id, title, desc, metric, icon, index }) {
    return (
        <article
            className="service-card"
            style={{ animationDelay: `${index * 0.07}s` }}
            aria-labelledby={`service-${id}`}
        >
            <div className="card-icon-wrap" aria-hidden="true">
                {icon}
            </div>

            <div className="card-body">
                <h3 className="card-title" id={`service-${id}`}>
                    {title}
                </h3>
                <p className="card-desc">{desc}</p>
            </div>

            <footer className="card-footer">
                <span className="card-metric">{metric}</span>
                <Link
                    to={`/services#${id}`}
                    className="card-link"
                    aria-label={`Learn more about ${title}`}
                >
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </footer>

            <span className="card-glow" aria-hidden="true" />
        </article>
    );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --crimson:    #9C0D1C;
    --scarlet:    #DB2740;
    --blush:      #E35E7D;
    --mauve:      #D7869E;
    --slate-teal: #A3C3C8;
    --ink:        #0e0d0d;
    --ink-2:      #141313;
    --cream:      #faf8f5;
  }

  /* ── Section ─────────────────────────────────────────────── */

  .services-section {
    position: relative;
    background: var(--ink-2);
    padding: 7rem 0;
    overflow: hidden;
    isolation: isolate;
  }

  .services-section::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -15%;
    width: 50%;
    height: 80%;
    background: radial-gradient(ellipse, rgba(219,39,64,0.06) 0%, transparent 65%);
    pointer-events: none;
  }

  /* ── Inner ────────────────────────────────────────────────── */

  .services-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* ── Section header ───────────────────────────────────────── */

  .services-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: end;
    margin-bottom: 4rem;
  }

  @media (max-width: 720px) {
    .services-header {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .header-right { display: none; }
  }

  .header-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--scarlet);
    margin-bottom: 1rem;
  }

  .eyebrow-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--scarlet);
    flex-shrink: 0;
  }

  .services-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--cream);
    margin: 0;
  }

  .services-heading em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet) 0%, var(--blush) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .header-right {
    padding-bottom: 0.25rem;
  }

  .services-subhead {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250,248,245,0.45);
    max-width: 38ch;
    margin: 0 0 1.5rem;
  }

  .services-all-link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--slate-teal);
    text-decoration: none;
    letter-spacing: 0.03em;
    transition: color 0.2s, gap 0.2s;
  }

  .services-all-link:hover {
    color: var(--cream);
    gap: 0.7rem;
  }

  .services-all-link:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* ── Grid ─────────────────────────────────────────────────── */

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5px;
    background: rgba(250,248,245,0.06);
    border: 1px solid rgba(250,248,245,0.06);
    border-radius: 16px;
    overflow: hidden;
  }

  @media (max-width: 860px) {
    .services-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 540px) {
    .services-grid { grid-template-columns: 1fr; }
  }

  /* ── Card ─────────────────────────────────────────────────── */

  .service-card {
    position: relative;
    background: var(--ink-2);
    padding: 2.2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    transition: background 0.25s ease;
    animation: cardReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .service-card:hover {
    background: #1a1818;
  }

  .service-card:hover .card-glow {
    opacity: 1;
  }

  .service-card:hover .card-icon-wrap {
    border-color: rgba(219,39,64,0.4);
    color: var(--blush);
    background: rgba(219,39,64,0.08);
  }

  .service-card:hover .card-link {
    color: var(--blush);
    gap: 0.6rem;
  }

  @keyframes cardReveal {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Card glow ────────────────────────────────────────────── */

  .card-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--scarlet), var(--blush));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  /* ── Icon ─────────────────────────────────────────────────── */

  .card-icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    border: 1px solid rgba(250,248,245,0.1);
    color: rgba(250,248,245,0.5);
    background: rgba(250,248,245,0.03);
    transition: border-color 0.25s, color 0.25s, background 0.25s;
    flex-shrink: 0;
  }

  .card-icon-wrap svg {
    width: 20px;
    height: 20px;
  }

  /* ── Body ─────────────────────────────────────────────────── */

  .card-body {
    flex: 1;
  }

  .card-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--cream);
    margin: 0 0 0.5rem;
    line-height: 1.2;
  }

  .card-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(250,248,245,0.42);
    margin: 0;
  }

  /* ── Footer ───────────────────────────────────────────────── */

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    border-top: 1px solid rgba(250,248,245,0.06);
    margin-top: auto;
  }

  .card-metric {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    color: var(--slate-teal);
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: rgba(250,248,245,0.3);
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: color 0.2s, gap 0.2s;
  }

  .card-link:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* ── Reduced motion ───────────────────────────────────────── */

  @media (prefers-reduced-motion: reduce) {
    .service-card { animation: none; }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesSection() {
    return (
        <section className="services-section" aria-labelledby="services-heading">
            <style>{styles}</style>

            <div className="services-inner">
                <header className="services-header">
                    <div className="header-left">
                        <p className="header-eyebrow">
                            <span className="eyebrow-dot" aria-hidden="true" />
                            What We Do
                        </p>
                        <h2 className="services-heading" id="services-heading">
                            Marketing that <em>moves</em><br />the needle
                        </h2>
                    </div>

                    <div className="header-right">
                        <p className="services-subhead">
                            We combine creativity and data-driven strategy to deliver
                            digital marketing solutions that generate real, measurable growth.
                        </p>
                        <Link to="/services" className="services-all-link">
                            View all services
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </header>

                <div
                    className="services-grid"
                    role="list"
                    aria-label="Our services"
                >
                    {SERVICES.map((service, i) => (
                        <ServiceCard key={service.id} {...service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}