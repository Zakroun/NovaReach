import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "SEO", "Paid Advertising", "Social Media", "Brand Strategy", "Web Development"];

const PROJECTS = [
    {
        id: "meridian-seo",
        client: "Meridian Health",
        category: "SEO",
        title: "Dominating organic search in a competitive healthcare market",
        body: "Meridian had strong brand recognition but almost zero organic footprint. We rebuilt their content architecture from the ground up, fixed three years of technical debt, and executed a topic-cluster strategy that put them on page one for 340+ commercial keywords.",
        metrics: [
            { value: "↑ 418%", label: "Organic traffic" },
            { value: "340+", label: "Keywords ranked" },
            { value: "2.1×", label: "Lead volume" },
        ],
        tags: ["SEO", "Content Strategy", "Technical Audit"],
        accent: "var(--scarlet)",
        featured: true,
        duration: "8 months",
        visual: <MeridianVisual />,
    },
    {
        id: "vertex-ads",
        client: "Vertex Labs",
        category: "Paid Advertising",
        title: "Scaling a SaaS acquisition funnel to 5× ROAS on a tight budget",
        body: "Vertex had a great product but a leaky funnel. We restructured their Google and Meta campaigns around intent signals, rebuilt their landing pages, and introduced multi-touch attribution so they could see exactly what was working.",
        metrics: [
            { value: "5.2×", label: "Return on ad spend" },
            { value: "↓ 61%", label: "Cost per acquisition" },
            { value: "$2.4M", label: "Pipeline generated" },
        ],
        tags: ["Google Ads", "Meta", "Funnel Optimisation", "Landing Pages"],
        accent: "var(--blush)",
        featured: true,
        duration: "6 months",
        visual: <VertexVisual />,
    },
    {
        id: "solace-brand",
        client: "Solace Studio",
        category: "Social Media",
        title: "Repositioning a lifestyle brand for a new generation of buyers",
        body: "Solace had a loyal but ageing customer base. The challenge was repositioning without alienating existing fans. We rebuilt their content strategy, tone of voice, and Instagram presence — growing to 190k engaged followers who actually convert.",
        metrics: [
            { value: "12k→190k", label: "Instagram following" },
            { value: "↑ 290%", label: "Engagement rate" },
            { value: "3.8M", label: "Monthly reach" },
        ],
        tags: ["Social Media", "Brand Strategy", "Creative Direction"],
        accent: "var(--slate-teal)",
        featured: true,
        duration: "10 months",
        visual: <SolaceVisual />,
    },
    {
        id: "archetype-content",
        client: "Archetype",
        category: "SEO",
        title: "Building editorial authority in B2B fintech through content",
        body: "Archetype needed to be seen as the definitive voice in embedded finance. We built a long-form editorial programme, secured 60+ high-DR backlinks, and established their blog as the highest-traffic channel in their acquisition mix.",
        metrics: [
            { value: "↑ 612%", label: "Organic sessions" },
            { value: "60+", label: "DR60+ backlinks" },
            { value: "#1", label: "Rankings for core terms" },
        ],
        tags: ["SEO", "Content Marketing", "Link Building"],
        accent: "var(--mauve)",
        featured: false,
        duration: "12 months",
        visual: <ArchetypeVisual />,
    },
    {
        id: "kova-web",
        client: "Kova Systems",
        category: "Web Development",
        title: "Redesigning a B2B SaaS site for pipeline, not just presence",
        body: "Kova's old site looked dated and converted at 0.8%. We redesigned and rebuilt it with conversion architecture at every stage — clear ICP messaging, social proof at the right moments, and a demo flow that eliminated friction.",
        metrics: [
            { value: "0.8%→4.6%", label: "Conversion rate" },
            { value: "↓ 48%", label: "Bounce rate" },
            { value: "Sub-1s", label: "Load time" },
        ],
        tags: ["Web Development", "CRO", "UX Design"],
        accent: "var(--scarlet)",
        featured: false,
        duration: "4 months",
        visual: <KovaVisual />,
    },
    {
        id: "fable-brand",
        client: "Fable Commerce",
        category: "Brand Strategy",
        title: "Crafting a brand identity that earned trust from day one",
        body: "Fable launched into a crowded DTC market with no brand recognition. We developed their full identity — name rationale, visual system, tone of voice — and executed a launch campaign that made them feel established from the first day live.",
        metrics: [
            { value: "Day 1", label: "Brand awareness" },
            { value: "↑ 220%", label: "Launch week revenue" },
            { value: "4.9★", label: "Brand sentiment score" },
        ],
        tags: ["Brand Strategy", "Identity Design", "Launch Campaign"],
        accent: "var(--blush)",
        featured: false,
        duration: "5 months",
        visual: <FableVisual />,
    },
];

// ─── SVG Visuals ──────────────────────────────────────────────────────────────

function MeridianVisual() {
    const bars = [28, 38, 33, 49, 44, 58, 55, 72, 66, 88];
    return (
        <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="360" height="180" fill="#0f0a0b" />
            <defs>
                <linearGradient id="m-bar" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#DB2740" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#9C0D1C" stopOpacity="0.2" />
                </linearGradient>
            </defs>
            {bars.map((h, i) => {
                const x = 24 + i * 32;
                const bH = (h / 100) * 110;
                return (
                    <g key={i}>
                        <rect x={x} y={150 - bH} width="18" height={bH} rx="3" fill="url(#m-bar)" opacity={0.25 + i * 0.08} />
                    </g>
                );
            })}
            <polyline
                points={bars.map((h, i) => `${33 + i * 32},${148 - (h / 100) * 108}`).join(" ")}
                stroke="#E35E7D" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            {bars.map((h, i) => (
                <circle key={i} cx={33 + i * 32} cy={148 - (h / 100) * 108} r="3.5" fill="#E35E7D" opacity={i === 9 ? 1 : 0.5} />
            ))}
            <circle cx={33 + 9 * 32} cy={148 - (88 / 100) * 108} r="6" stroke="#E35E7D" strokeWidth="1.5" fill="none" />
            <text x="24" y="16" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" letterSpacing="1.8" fill="rgba(250,248,245,0.25)">ORGANIC SESSIONS · 10 MONTHS</text>
            <text x="296" y="16" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="600" fill="#E35E7D">+418%</text>
        </svg>
    );
}

function VertexVisual() {
    const stages = [
        { label: "Impressions", val: "2.4M", pct: 100, w: 300 },
        { label: "Clicks", val: "86k", pct: 36, w: 215 },
        { label: "Leads", val: "9.2k", pct: 14, w: 145 },
        { label: "Customers", val: "1,840", pct: 6, w: 90 },
    ];
    return (
        <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="360" height="180" fill="#090910" />
            <defs>
                <linearGradient id="v-g" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                    <stop stopColor="#DB2740" />
                    <stop offset="1" stopColor="#E35E7D" />
                </linearGradient>
            </defs>
            <text x="24" y="20" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" letterSpacing="1.8" fill="rgba(250,248,245,0.25)">ACQUISITION FUNNEL · ROAS 5.2×</text>
            {stages.map(({ label, val, pct, w }, i) => {
                const y = 36 + i * 33;
                const x = (360 - w) / 2;
                return (
                    <g key={label}>
                        <rect x={x} y={y} width={w} height="20" rx="4" fill="rgba(219,39,64,0.08)" />
                        <rect x={x} y={y} width={w * (pct / 100)} height="20" rx="4" fill="url(#v-g)" opacity={0.55 + i * 0.12} />
                        <text x={x + 10} y={y + 13.5} fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="rgba(250,248,245,0.7)">{label}</text>
                        <text x={x + w - 8} y={y + 13.5} fontFamily="DM Sans, sans-serif" fontSize="8.5" textAnchor="end" fontWeight="500" fill="rgba(250,248,245,0.9)">{val}</text>
                    </g>
                );
            })}
        </svg>
    );
}

function SolaceVisual() {
    const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O"];
    const reach = [12, 20, 26, 38, 34, 55, 64, 74, 85, 100];
    const eng = [6, 12, 18, 24, 28, 44, 50, 60, 70, 86];
    const toY = (v) => 148 - (v / 100) * 110;
    return (
        <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="360" height="180" fill="#080e0f" />
            <defs>
                <linearGradient id="s-fill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#A3C3C8" stopOpacity="0.2" />
                    <stop offset="1" stopColor="#A3C3C8" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon
                points={[...reach.map((v, i) => `${28 + i * 34},${toY(v)}`), `${28 + 9 * 34},160`, `28,160`].join(" ")}
                fill="url(#s-fill)"
            />
            <polyline
                points={reach.map((v, i) => `${28 + i * 34},${toY(v)}`).join(" ")}
                stroke="#A3C3C8" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            <polyline
                points={eng.map((v, i) => `${28 + i * 34},${toY(v)}`).join(" ")}
                stroke="#E35E7D" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3"
            />
            {months.map((m, i) => (
                <text key={m} x={28 + i * 34} y="170" fontFamily="DM Sans, sans-serif" fontSize="8" textAnchor="middle" fill="rgba(250,248,245,0.2)">{m}</text>
            ))}
            <text x="24" y="16" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" letterSpacing="1.8" fill="rgba(250,248,245,0.25)">REACH &amp; ENGAGEMENT · 10 MONTHS</text>
            <g transform="translate(240,10)">
                <rect width="7" height="7" rx="1.5" fill="#A3C3C8" opacity="0.8" />
                <text x="11" y="7" fontFamily="DM Sans, sans-serif" fontSize="8" fill="rgba(250,248,245,0.35)">Reach</text>
                <rect x="52" width="7" height="7" rx="1.5" fill="#E35E7D" opacity="0.8" />
                <text x="63" y="7" fontFamily="DM Sans, sans-serif" fontSize="8" fill="rgba(250,248,245,0.35)">Eng</text>
            </g>
        </svg>
    );
}

function ArchetypeVisual() {
    const data = [18, 28, 22, 40, 35, 55, 62, 72, 80, 96];
    return (
        <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="360" height="180" fill="#0c0c0e" />
            <defs>
                <linearGradient id="a-fill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#D7869E" stopOpacity="0.25" />
                    <stop offset="1" stopColor="#D7869E" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon
                points={[...data.map((v, i) => `${28 + i * 34},${148 - (v / 100) * 108}`), `${28 + 9 * 34},160`, `28,160`].join(" ")}
                fill="url(#a-fill)"
            />
            <polyline
                points={data.map((v, i) => `${28 + i * 34},${148 - (v / 100) * 108}`).join(" ")}
                stroke="#D7869E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            {[2, 5, 8].map((i) => (
                <circle key={i} cx={28 + i * 34} cy={148 - (data[i] / 100) * 108} r="4" fill="#D7869E" opacity="0.7" />
            ))}
            <text x="24" y="16" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" letterSpacing="1.8" fill="rgba(250,248,245,0.25)">ORGANIC SESSIONS · EDITORIAL PROGRAMME</text>
            <text x="284" y="16" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="600" fill="#D7869E">+612%</text>
        </svg>
    );
}

function KovaVisual() {
    const before = [0.8, 0.8, 0.8, 0.8, 0.8];
    const after = [1.2, 2.1, 3.0, 3.8, 4.6];
    const labels = ["Week 1", "Week 3", "Week 5", "Week 7", "Week 9"];
    return (
        <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="360" height="180" fill="#0a0d0a" />
            <line x1="24" y1="148" x2="336" y2="148" stroke="rgba(250,248,245,0.06)" strokeWidth="1" />
            {[25, 50, 75, 100].map((v) => (
                <line key={v} x1="24" y1={148 - (v / 5) * 10} x2="336" y2={148 - (v / 5) * 10} stroke="rgba(250,248,245,0.04)" strokeWidth="1" />
            ))}
            <polyline
                points={before.map((v, i) => `${24 + i * 78},${148 - (v / 5) * 110}`).join(" ")}
                stroke="rgba(250,248,245,0.15)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3"
            />
            <polyline
                points={after.map((v, i) => `${24 + i * 78},${148 - (v / 5) * 110}`).join(" ")}
                stroke="#DB2740" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            {after.map((v, i) => (
                <circle key={i} cx={24 + i * 78} cy={148 - (v / 5) * 110} r="4" fill="#DB2740" />
            ))}
            {labels.map((l, i) => (
                <text key={l} x={24 + i * 78} y="163" fontFamily="DM Sans, sans-serif" fontSize="7.5" textAnchor="middle" fill="rgba(250,248,245,0.2)">{l}</text>
            ))}
            <text x="24" y="16" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" letterSpacing="1.8" fill="rgba(250,248,245,0.25)">CONVERSION RATE · BEFORE &amp; AFTER</text>
        </svg>
    );
}

function FableVisual() {
    const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    const rev = [10, 28, 45, 62, 54, 72, 80, 96];
    return (
        <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="360" height="180" fill="#0d090c" />
            <defs>
                <linearGradient id="f-bar" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#E35E7D" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#9C0D1C" stopOpacity="0.15" />
                </linearGradient>
            </defs>
            {rev.map((v, i) => {
                const bH = (v / 100) * 110;
                const x = 28 + i * 41;
                return (
                    <g key={i}>
                        <rect x={x} y={148 - bH} width="24" height={bH} rx="4" fill="url(#f-bar)" opacity={0.3 + i * 0.1} />
                        <text x={x + 12} y="163" fontFamily="DM Sans, sans-serif" fontSize="7.5" textAnchor="middle" fill="rgba(250,248,245,0.2)">{weeks[i]}</text>
                    </g>
                );
            })}
            <text x="24" y="16" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" letterSpacing="1.8" fill="rgba(250,248,245,0.25)">LAUNCH WEEK REVENUE · 8 WEEKS</text>
            <text x="284" y="16" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="600" fill="#E35E7D">+220%</text>
        </svg>
    );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Eyebrow({ children }) {
    return (
        <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {children}
        </p>
    );
}

function FilterBar({ active, onSelect }) {
    return (
        <nav className="filter-bar" aria-label="Filter projects by category">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    className={`filter-btn ${active === cat ? "filter-btn--active" : ""}`}
                    onClick={() => onSelect(cat)}
                    aria-pressed={active === cat}
                >
                    {cat}
                </button>
            ))}
        </nav>
    );
}

function ProjectMetric({ value, label }) {
    return (
        <div className="proj-metric" role="listitem">
            <span className="metric-val">{value}</span>
            <span className="metric-lbl">{label}</span>
        </div>
    );
}

function FeaturedCard({ id, client, category, title, body, metrics, tags, accent, duration, visual }) {
    return (
        <article
            className="featured-card"
            style={{ "--accent": accent }}
            aria-labelledby={`proj-${id}`}
        >
            <div className="featured-visual" aria-hidden="true">
                {visual}
                <div className="visual-scrim" />
                <div className="featured-badges">
                    <span className="badge-category">{category}</span>
                    <span className="badge-duration">{duration}</span>
                </div>
            </div>

            <div className="featured-body">
                <p className="proj-client">{client}</p>
                <h3 className="proj-title" id={`proj-${id}`}>{title}</h3>
                <p className="proj-body">{body}</p>

                <div className="proj-metrics" role="list" aria-label={`${client} results`}>
                    {metrics.map((m) => <ProjectMetric key={m.label} {...m} />)}
                </div>

                <footer className="proj-footer">
                    <div className="proj-tags" aria-label="Services">
                        {tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                    </div>
                    <Link to={`/projects/${id}`} className="proj-cta" aria-label={`View ${client} case study`}>
                        Case study
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                            <path d="M1 5.5h9M6 2l4 3.5L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </footer>
            </div>
            <span className="card-top-line" aria-hidden="true" />
        </article>
    );
}

function GridCard({ id, client, category, title, metrics, tags, accent, duration, visual }) {
    return (
        <article
            className="grid-card"
            style={{ "--accent": accent }}
            aria-labelledby={`proj-grid-${id}`}
        >
            <div className="grid-visual" aria-hidden="true">
                {visual}
                <div className="visual-scrim" />
                <div className="grid-badges">
                    <span className="badge-category">{category}</span>
                    <span className="badge-duration">{duration}</span>
                </div>
            </div>
            <div className="grid-body">
                <p className="proj-client">{client}</p>
                <h3 className="proj-title small" id={`proj-grid-${id}`}>{title}</h3>
                <div className="proj-metrics compact" role="list" aria-label={`${client} results`}>
                    {metrics.slice(0, 2).map((m) => <ProjectMetric key={m.label} {...m} />)}
                </div>
                <footer className="proj-footer">
                    <div className="proj-tags" aria-label="Services">
                        {tags.slice(0, 2).map((t) => <span key={t} className="proj-tag">{t}</span>)}
                    </div>
                    <Link to={`/projects/${id}`} className="proj-cta" aria-label={`View ${client} case study`}>
                        View
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                            <path d="M1 5.5h9M6 2l4 3.5L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </footer>
            </div>
            <span className="card-top-line" aria-hidden="true" />
        </article>
    );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --crimson:    #9C0D1C;
    --scarlet:    #DB2740;
    --blush:      #E35E7D;
    --mauve:      #D7869E;
    --slate-teal: #A3C3C8;
    --ink:        #0e0d0d;
    --ink-2:      #131212;
    --ink-3:      #191717;
    --cream:      #faf8f5;
  }

  /* ── Page ─────────────────────────────────────────────────── */

  .projects-page { background: var(--ink); color: var(--cream); }

  /* ── Shared ───────────────────────────────────────────────── */

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--scarlet);
    margin-bottom: 1.25rem;
  }

  .eyebrow-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--scarlet);
    flex-shrink: 0;
  }

  .section-divider {
    height: 1px;
    background: rgba(250,248,245,0.05);
  }

  /* ────────────────────────────────────────────────────────────
     HERO
  ──────────────────────────────────────────────────────────── */

  .projects-hero {
    position: relative;
    background: var(--ink);
    padding: 10rem 0 5rem;
    overflow: hidden;
    isolation: isolate;
    text-align: center;
  }

  .projects-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% -5%, rgba(219,39,64,0.1) 0%, transparent 65%);
    pointer-events: none;
  }

  .projects-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 128px;
    pointer-events: none;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    max-width: 720px;
    margin: 0 auto;
    padding: 0 2rem;
    animation: revealUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
  }

  .hero-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 5.5vw, 4.2rem);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: var(--cream);
    margin: 0 0 1.4rem;
  }

  .hero-headline em {
    font-style: italic;
    background: linear-gradient(110deg, var(--scarlet) 0%, var(--blush) 55%, var(--mauve) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250,248,245,0.45);
    max-width: 48ch;
    margin: 0 auto 3rem;
  }

  /* ── Summary strip ────────────────────────────────────────── */

  .hero-summary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    flex-wrap: wrap;
    border: 1px solid rgba(250,248,245,0.07);
    border-radius: 12px;
    overflow: hidden;
    max-width: 560px;
    margin: 0 auto;
  }

  .summary-item {
    flex: 1;
    min-width: 100px;
    padding: 1.25rem 1rem;
    background: var(--ink-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    border-right: 1px solid rgba(250,248,245,0.07);
    transition: background 0.2s;
  }

  .summary-item:last-child { border-right: none; }
  .summary-item:hover { background: var(--ink-3); }

  .summary-val {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--cream);
    line-height: 1;
  }

  .summary-lbl {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.65rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(250,248,245,0.28);
  }

  /* ────────────────────────────────────────────────────────────
     FILTER BAR
  ──────────────────────────────────────────────────────────── */

  .filter-section {
    background: var(--ink-2);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(250,248,245,0.06);
    position: sticky;
    top: 72px;
    z-index: 10;
  }

  .filter-bar {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .filter-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: rgba(250,248,245,0.38);
    background: transparent;
    border: 1px solid rgba(250,248,245,0.08);
    border-radius: 100px;
    padding: 0.4rem 1rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }

  .filter-btn:hover {
    color: rgba(250,248,245,0.7);
    border-color: rgba(250,248,245,0.18);
  }

  .filter-btn--active {
    color: var(--cream);
    border-color: var(--scarlet);
    background: rgba(219,39,64,0.1);
  }

  .filter-btn:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 2px;
  }

  /* ────────────────────────────────────────────────────────────
     FEATURED ROW
  ──────────────────────────────────────────────────────────── */

  .featured-section {
    background: var(--ink);
    padding: 5rem 0;
  }

  .featured-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
  }

  .featured-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--cream);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .featured-heading em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet) 0%, var(--blush) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .featured-count {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 300;
    color: rgba(250,248,245,0.25);
    letter-spacing: 0.08em;
    white-space: nowrap;
  }

  /* Featured cards — stacked vertically with alternating layout */

  .featured-list {
    display: flex;
    flex-direction: column;
    gap: 1.5px;
    background: rgba(250,248,245,0.06);
    border: 1px solid rgba(250,248,245,0.06);
    border-radius: 16px;
    overflow: hidden;
  }

  .featured-card {
    position: relative;
    background: var(--ink-2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 280px;
    overflow: hidden;
    transition: background 0.25s;
    animation: revealUp 0.55s cubic-bezier(0.16,1,0.3,1) both;
  }

  /* Alternate visual side on even cards */
  .featured-card:nth-child(even) { direction: rtl; }
  .featured-card:nth-child(even) > * { direction: ltr; }

  .featured-card:hover { background: #161515; }
  .featured-card:hover .card-top-line { opacity: 1; }
  .featured-card:hover .proj-cta { color: var(--cream); gap: 0.65rem; }
  .featured-card:hover .featured-visual svg { transform: scale(1.03); }

  @media (max-width: 760px) {
    .featured-card,
    .featured-card:nth-child(even) { grid-template-columns: 1fr; direction: ltr; }
    .featured-card:nth-child(even) > * { direction: ltr; }
  }

  .featured-visual {
    position: relative;
    overflow: hidden;
    background: #080808;
  }

  .featured-visual svg {
    width: 100%;
    height: 100%;
    display: block;
    min-height: 220px;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  }

  .visual-scrim {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, transparent 55%, rgba(19,18,18,0.7) 100%);
    pointer-events: none;
  }

  .featured-card:nth-child(even) .visual-scrim {
    background: linear-gradient(to left, transparent 55%, rgba(19,18,18,0.7) 100%);
  }

  @media (max-width: 760px) {
    .visual-scrim,
    .featured-card:nth-child(even) .visual-scrim {
      background: linear-gradient(to bottom, transparent 55%, rgba(19,18,18,0.9) 100%);
    }
  }

  .featured-badges,
  .grid-badges {
    position: absolute;
    top: 0.85rem;
    left: 0.85rem;
    display: flex;
    gap: 0.4rem;
  }

  .badge-category,
  .badge-duration {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.28rem 0.6rem;
    border-radius: 4px;
    background: rgba(14,13,13,0.75);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(250,248,245,0.07);
  }

  .badge-category { color: rgba(250,248,245,0.55); }
  .badge-duration  { color: rgba(250,248,245,0.3); }

  .featured-body {
    padding: 2.2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.9rem;
  }

  /* ────────────────────────────────────────────────────────────
     GRID
  ──────────────────────────────────────────────────────────── */

  .grid-section {
    background: var(--ink-2);
    padding: 5rem 0;
  }

  .grid-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
  }

  .grid-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--cream);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .grid-heading em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet), var(--blush));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5px;
    background: rgba(250,248,245,0.06);
    border: 1px solid rgba(250,248,245,0.06);
    border-radius: 16px;
    overflow: hidden;
  }

  @media (max-width: 860px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 540px) { .projects-grid { grid-template-columns: 1fr; } }

  .grid-card {
    position: relative;
    background: var(--ink);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: background 0.25s;
    animation: revealUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
  }

  .grid-card:hover { background: #161515; }
  .grid-card:hover .card-top-line { opacity: 1; }
  .grid-card:hover .proj-cta { color: var(--cream); gap: 0.65rem; }
  .grid-card:hover .grid-visual svg { transform: scale(1.04); }

  .grid-visual {
    position: relative;
    overflow: hidden;
    background: #080808;
    aspect-ratio: 16/9;
  }

  .grid-visual svg {
    width: 100%;
    height: 100%;
    display: block;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  }

  .grid-visual .visual-scrim {
    background: linear-gradient(to bottom, transparent 50%, rgba(14,13,13,0.85) 100%);
  }

  .grid-body {
    padding: 1.5rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.75rem;
  }

  /* ── Shared card internals ────────────────────────────────── */

  .card-top-line {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--accent);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    z-index: 2;
  }

  .proj-client {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    margin: 0;
  }

  .proj-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.05rem;
    font-weight: 400;
    line-height: 1.45;
    color: rgba(250,248,245,0.85);
    margin: 0;
  }

  .proj-title.small { font-size: 0.9rem; }

  .proj-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250,248,245,0.4);
    margin: 0;
    max-width: 52ch;
  }

  .proj-metrics {
    display: flex;
    gap: 1.75rem;
    flex-wrap: wrap;
  }

  .proj-metrics.compact { gap: 1.25rem; }

  .proj-metric { display: flex; flex-direction: column; gap: 0.12rem; }

  .metric-val {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--cream);
    line-height: 1;
  }

  .proj-metrics.compact .metric-val { font-size: 1.05rem; }

  .metric-lbl {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.62rem;
    font-weight: 300;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(250,248,245,0.28);
  }

  .proj-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding-top: 0.85rem;
    border-top: 1px solid rgba(250,248,245,0.06);
    margin-top: auto;
  }

  .proj-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }

  .proj-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.6rem;
    font-weight: 400;
    color: rgba(250,248,245,0.28);
    padding: 0.2rem 0.5rem;
    border: 1px solid rgba(250,248,245,0.07);
    border-radius: 3px;
    white-space: nowrap;
  }

  .proj-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.73rem;
    font-weight: 500;
    color: rgba(250,248,245,0.28);
    text-decoration: none;
    letter-spacing: 0.04em;
    flex-shrink: 0;
    transition: color 0.2s, gap 0.2s;
  }

  .proj-cta:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* ── Empty state ──────────────────────────────────────────── */

  .empty-state {
    text-align: center;
    padding: 5rem 2rem;
    grid-column: 1 / -1;
  }

  .empty-state p {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: rgba(250,248,245,0.3);
  }

  /* ────────────────────────────────────────────────────────────
     CLOSING CTA
  ──────────────────────────────────────────────────────────── */

  .cta-section {
    position: relative;
    background: var(--ink);
    padding: 7rem 0;
    text-align: center;
    overflow: hidden;
  }

  .cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 55% 60% at 50% 50%, rgba(219,39,64,0.07) 0%, transparent 65%);
    pointer-events: none;
  }

  .cta-inner {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .cta-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--cream);
    margin: 0 0 1.2rem;
  }

  .cta-heading em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet), var(--blush));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cta-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250,248,245,0.42);
    margin: 0 0 2.5rem;
  }

  .cta-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    color: #fff;
    background: var(--scarlet);
    text-decoration: none;
    padding: 0.8rem 1.6rem;
    border-radius: 7px;
    box-shadow: 0 4px 20px rgba(219,39,64,0.3);
    letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.2s, gap 0.2s;
  }

  .btn-primary:hover {
    background: var(--crimson);
    transform: translateY(-2px);
    gap: 0.75rem;
  }

  .btn-primary:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 7px;
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    color: rgba(250,248,245,0.4);
    text-decoration: none;
    padding: 0.8rem 1.4rem;
    border-radius: 7px;
    border: 1px solid rgba(250,248,245,0.1);
    transition: color 0.2s, border-color 0.2s;
  }

  .btn-ghost:hover {
    color: var(--cream);
    border-color: rgba(250,248,245,0.25);
  }

  .btn-ghost:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 7px;
  }

  /* ── Animations ───────────────────────────────────────────── */

  @keyframes revealUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .featured-card, .grid-card, .hero-inner { animation: none; }
    .featured-visual svg, .grid-visual svg  { transition: none; }
  }
`;

// ─── Page component ───────────────────────────────────────────────────────────

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const featured = PROJECTS.filter((p) => p.featured);

    const others = PROJECTS.filter((p) => {
        if (!p.featured) {
            return activeFilter === "All" || p.category === activeFilter;
        }
        return false;
    });

    const visibleFeatured = featured.filter(
        (p) => activeFilter === "All" || p.category === activeFilter
    );

    const totalShown = visibleFeatured.length + others.length;

    return (
        <main className="projects-page">
            <style>{styles}</style>

            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="projects-hero" aria-labelledby="projects-hero-heading">
                <div className="hero-inner">
                    <Eyebrow>Case Studies</Eyebrow>
                    <h1 className="hero-headline" id="projects-hero-heading">
                        Work that <em>proves the point</em>
                    </h1>
                    <p className="hero-sub">
                        Every project starts with a business problem. Here's how we
                        solved them — with numbers attached.
                    </p>
                    <div className="hero-summary" role="list" aria-label="Portfolio summary">
                        {[
                            { val: "200+", lbl: "Projects" },
                            { val: "18", lbl: "Industries" },
                            { val: "98%", lbl: "Retention" },
                            { val: "$40M+", lbl: "Revenue driven" },
                        ].map(({ val, lbl }) => (
                            <div key={lbl} className="summary-item" role="listitem">
                                <span className="summary-val">{val}</span>
                                <span className="summary-lbl">{lbl}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Filter bar ────────────────────────────────────────── */}
            <div className="filter-section">
                <FilterBar active={activeFilter} onSelect={setActiveFilter} />
            </div>

            {/* ── Featured ──────────────────────────────────────────── */}
            {visibleFeatured.length > 0 && (
                <section className="featured-section" aria-labelledby="featured-heading">
                    <div className="inner">
                        <div className="featured-header">
                            <h2 className="featured-heading" id="featured-heading">
                                Featured <em>case studies</em>
                            </h2>
                            <span className="featured-count" aria-live="polite">
                                {visibleFeatured.length} of {featured.length} featured
                            </span>
                        </div>
                        <div className="featured-list" role="list" aria-label="Featured projects">
                            {visibleFeatured.map((p, i) => (
                                <FeaturedCard
                                    key={p.id}
                                    {...p}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="section-divider" role="separator" />

            {/* ── Grid ──────────────────────────────────────────────── */}
            {others.length > 0 && (
                <section className="grid-section" aria-labelledby="grid-heading">
                    <div className="inner">
                        <div className="grid-header">
                            <h2 className="grid-heading" id="grid-heading">
                                More <em>work</em>
                            </h2>
                            <span className="featured-count" aria-live="polite">
                                {others.length} project{others.length !== 1 ? "s" : ""}
                            </span>
                        </div>
                        <div
                            className="projects-grid"
                            role="list"
                            aria-label="More projects"
                        >
                            {others.map((p, i) => (
                                <GridCard
                                    key={p.id}
                                    {...p}
                                    style={{ animationDelay: `${i * 0.08}s` }}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Empty state when filter matches nothing */}
            {totalShown === 0 && (
                <section className="grid-section" aria-live="polite">
                    <div className="inner">
                        <div className="projects-grid">
                            <div className="empty-state">
                                <p>No projects in this category yet — check back soon.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <div className="section-divider" role="separator" />

            {/* ── CTA ───────────────────────────────────────────────── */}
            <section className="cta-section" aria-labelledby="projects-cta-heading">
                <div className="cta-inner">
                    <Eyebrow>Your turn</Eyebrow>
                    <h2 className="cta-heading" id="projects-cta-heading">
                        Ready to be our<br />
                        <em>next case study?</em>
                    </h2>
                    <p className="cta-body">
                        We take on a limited number of new clients each quarter.
                        Tell us about your goals and we'll tell you honestly if
                        we're the right fit.
                    </p>
                    <nav className="cta-actions" aria-label="Get started">
                        <Link to="/contact" className="btn-primary">
                            Start a project
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                                <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link to="/services" className="btn-ghost">
                            Our services
                        </Link>
                    </nav>
                </div>
            </section>
        </main>
    );
}