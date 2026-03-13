import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
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
            <div className="filter-section">
                <FilterBar active={activeFilter} onSelect={setActiveFilter} />
            </div>
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