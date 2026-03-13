import { Link } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────

const PROJECTS = [
    {
        id: "meridian-seo",
        client: "Meridian Health",
        category: "SEO + Content",
        title: "Dominating organic search in a competitive healthcare market",
        metrics: [
            { value: "↑ 418%", label: "Organic Traffic" },
            { value: "2.1×", label: "Lead Volume" },
        ],
        tags: ["SEO", "Content Strategy", "Technical Audit"],
        accent: "var(--scarlet)",
        visual: <MeridianVisual />,
    },
    {
        id: "vertex-ads",
        client: "Vertex Labs",
        category: "Paid Advertising",
        title: "Scaling a SaaS acquisition funnel to 5× ROAS on a tight budget",
        metrics: [
            { value: "5.2×", label: "Return on Ad Spend" },
            { value: "↓ 61%", label: "Cost per Acquisition" },
        ],
        tags: ["Google Ads", "Meta", "Funnel Optimisation"],
        accent: "var(--blush)",
        visual: <VertexVisual />,
    },
    {
        id: "solace-brand",
        client: "Solace Studio",
        category: "Brand + Social",
        title: "Repositioning a lifestyle brand for a new generation of buyers",
        metrics: [
            { value: "3.8M", label: "Monthly Reach" },
            { value: "↑ 290%", label: "Engagement Rate" },
        ],
        tags: ["Brand Strategy", "Social Media", "Creative Direction"],
        accent: "var(--slate-teal)",
        visual: <SolaceVisual />,
    },
];

// ─── Inline SVG project visuals ───────────────────────────────────────────────

function MeridianVisual() {
    const bars = [38, 52, 44, 61, 55, 73, 68, 85, 78, 96];
    return (
        <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="280" height="140" fill="url(#m-bg)" />
            <defs>
                <linearGradient id="m-bg" x1="0" y1="0" x2="280" y2="140" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1a0a0d" />
                    <stop offset="1" stopColor="#0e0d0d" />
                </linearGradient>
                <linearGradient id="m-bar" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#DB2740" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#9C0D1C" stopOpacity="0.3" />
                </linearGradient>
            </defs>
            {bars.map((h, i) => {
                const x = 18 + i * 26;
                const barH = (h / 100) * 90;
                return (
                    <g key={i}>
                        <rect x={x} y={120 - barH} width="14" height={barH} rx="3" fill="url(#m-bar)" opacity={0.3 + i * 0.07} />
                    </g>
                );
            })}
            <polyline
                points={bars.map((h, i) => `${25 + i * 26},${118 - (h / 100) * 88}`).join(" ")}
                stroke="#E35E7D"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {bars.map((h, i) => (
                <circle key={i} cx={25 + i * 26} cy={118 - (h / 100) * 88} r="2.5" fill="#E35E7D" />
            ))}
            <text x="18" y="13" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="500" letterSpacing="1.5" fill="rgba(250,248,245,0.3)">ORGANIC SESSIONS · 10 MO</text>
        </svg>
    );
}

function VertexVisual() {
    const funnelStages = [
        { label: "Impressions", pct: 100, w: 220 },
        { label: "Clicks", pct: 34, w: 160 },
        { label: "Leads", pct: 14, w: 110 },
        { label: "Customers", pct: 6, w: 70 },
    ];
    return (
        <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="280" height="140" fill="#0a0a10" />
            <text x="14" y="13" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="500" letterSpacing="1.5" fill="rgba(250,248,245,0.3)">ACQUISITION FUNNEL · ROAS 5.2×</text>
            {funnelStages.map(({ label, pct, w }, i) => {
                const y = 24 + i * 26;
                const x = (280 - w) / 2;
                return (
                    <g key={label}>
                        <rect x={x} y={y} width={w} height="16" rx="3" fill="#E35E7D" opacity={0.12 + i * 0.02} />
                        <rect x={x} y={y} width={w * (pct / 100)} height="16" rx="3" fill="url(#v-grad)" opacity={0.7 + i * 0.1} />
                        <text x={x + 8} y={y + 11} fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="rgba(250,248,245,0.7)">{label}</text>
                        <text x={x + w - 6} y={y + 11} fontFamily="DM Sans, sans-serif" fontSize="7.5" textAnchor="end" fill="rgba(250,248,245,0.4)">{pct}%</text>
                    </g>
                );
            })}
            <defs>
                <linearGradient id="v-grad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                    <stop stopColor="#DB2740" />
                    <stop offset="1" stopColor="#E35E7D" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function SolaceVisual() {
    const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O"];
    const reach = [12, 18, 22, 31, 28, 45, 52, 61, 74, 88];
    const eng = [8, 11, 16, 20, 24, 38, 42, 50, 58, 72];
    const toY = (v) => 118 - (v / 100) * 88;
    return (
        <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="280" height="140" fill="#080e0f" />
            <defs>
                <linearGradient id="s-reach" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#A3C3C8" stopOpacity="0.25" />
                    <stop offset="1" stopColor="#A3C3C8" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon
                points={[
                    ...reach.map((v, i) => `${22 + i * 26},${toY(v)}`),
                    `${22 + 9 * 26},140`, `22,140`
                ].join(" ")}
                fill="url(#s-reach)"
            />
            <polyline
                points={reach.map((v, i) => `${22 + i * 26},${toY(v)}`).join(" ")}
                stroke="#A3C3C8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            <polyline
                points={eng.map((v, i) => `${22 + i * 26},${toY(v)}`).join(" ")}
                stroke="#E35E7D" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3"
            />
            {months.map((m, i) => (
                <text key={m} x={22 + i * 26} y="136" fontFamily="DM Sans, sans-serif" fontSize="7" textAnchor="middle" fill="rgba(250,248,245,0.25)">{m}</text>
            ))}
            <text x="14" y="13" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="500" letterSpacing="1.5" fill="rgba(250,248,245,0.3)">REACH &amp; ENGAGEMENT · 10 MO</text>
            <g transform="translate(190, 8)">
                <rect width="5" height="5" rx="1" fill="#A3C3C8" />
                <text x="8" y="5.5" fontFamily="DM Sans, sans-serif" fontSize="7" fill="rgba(250,248,245,0.4)">Reach</text>
                <rect x="40" width="5" height="5" rx="1" fill="#E35E7D" />
                <text x="48" y="5.5" fontFamily="DM Sans, sans-serif" fontSize="7" fill="rgba(250,248,245,0.4)">Eng.</text>
            </g>
        </svg>
    );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectTag({ label }) {
    return <span className="project-tag">{label}</span>;
}

function ProjectMetric({ value, label }) {
    return (
        <div className="project-metric" role="listitem">
            <span className="metric-value">{value}</span>
            <span className="metric-label">{label}</span>
        </div>
    );
}

function ProjectCard({ id, client, category, title, metrics, tags, accent, visual, index }) {
    return (
        <article
            className="project-card"
            style={{ "--card-accent": accent, animationDelay: `${index * 0.1}s` }}
            aria-labelledby={`project-${id}`}
        >
            {/* Visual */}
            <div className="card-visual" aria-hidden="true">
                {visual}
                <div className="visual-overlay" />
                <span className="card-category">{category}</span>
            </div>

            {/* Body */}
            <div className="card-content">
                <p className="card-client">{client}</p>
                <h3 className="card-title" id={`project-${id}`}>{title}</h3>

                <div className="card-metrics" role="list" aria-label={`${client} results`}>
                    {metrics.map((m) => (
                        <ProjectMetric key={m.label} {...m} />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="card-footer">
                <div className="card-tags" aria-label="Services used">
                    {tags.map((t) => <ProjectTag key={t} label={t} />)}
                </div>
                <Link
                    to={`/projects/${id}`}
                    className="card-cta"
                    aria-label={`View ${client} case study`}
                >
                    Case study
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                        <path d="M1 5.5h9M6 2l4 3.5L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </footer>

            <span className="card-accent-line" aria-hidden="true" />
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
    --ink-2:      #131212;
    --cream:      #faf8f5;
  }

  /* ── Section ─────────────────────────────────────────────── */

  .projects-section {
    position: relative;
    background: var(--ink-2);
    padding: 7rem 0;
    overflow: hidden;
    isolation: isolate;
  }

  .projects-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(219,39,64,0.05) 0%, transparent 65%);
    pointer-events: none;
  }

  /* ── Inner ────────────────────────────────────────────────── */

  .projects-inner {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* ── Header ───────────────────────────────────────────────── */

  .projects-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 3.5rem;
    flex-wrap: wrap;
  }

  .header-left {
    flex: 1;
    min-width: 260px;
  }

  .projects-eyebrow {
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

  .projects-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.8vw, 2.8rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--cream);
    margin: 0;
  }

  .projects-heading em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet) 0%, var(--blush) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .projects-all-link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    color: rgba(250,248,245,0.35);
    text-decoration: none;
    letter-spacing: 0.03em;
    transition: color 0.2s, gap 0.2s;
    white-space: nowrap;
    align-self: flex-end;
    padding-bottom: 0.15rem;
  }

  .projects-all-link:hover { color: var(--cream); gap: 0.7rem; }
  .projects-all-link:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* ── Grid ─────────────────────────────────────────────────── */

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5px;
    background: rgba(250,248,245,0.06);
    border: 1px solid rgba(250,248,245,0.06);
    border-radius: 16px;
    overflow: hidden;
  }

  @media (max-width: 860px) {
    .projects-grid { grid-template-columns: 1fr; }
  }

  /* ── Card ─────────────────────────────────────────────────── */

  .project-card {
    position: relative;
    background: var(--ink);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: cardUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
    transition: background 0.25s;
  }

  .project-card:hover { background: #161515; }

  .project-card:hover .card-accent-line { opacity: 1; }
  .project-card:hover .card-visual svg  { transform: scale(1.03); }
  .project-card:hover .card-cta         { color: var(--cream); gap: 0.6rem; }

  @keyframes cardUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Accent top bar (uses CSS custom prop per card) */
  .card-accent-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--card-accent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 3;
  }

  /* ── Visual area ──────────────────────────────────────────── */

  .card-visual {
    position: relative;
    overflow: hidden;
    background: #080808;
    aspect-ratio: 16 / 9;
  }

  .card-visual svg {
    width: 100%;
    height: 100%;
    display: block;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .visual-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 55%, rgba(14,13,13,0.8) 100%);
    pointer-events: none;
  }

  .card-category {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(250,248,245,0.5);
    background: rgba(14,13,13,0.7);
    backdrop-filter: blur(8px);
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    border: 1px solid rgba(250,248,245,0.07);
  }

  /* ── Content ──────────────────────────────────────────────── */

  .card-content {
    padding: 1.5rem 1.5rem 1rem;
    flex: 1;
  }

  .card-client {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--card-accent);
    margin: 0 0 0.5rem;
  }

  .card-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(250,248,245,0.8);
    margin: 0 0 1.25rem;
  }

  /* ── Metrics ──────────────────────────────────────────────── */

  .card-metrics {
    display: flex;
    gap: 1.5rem;
  }

  .project-metric {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .metric-value {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--cream);
    line-height: 1;
  }

  .metric-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.65rem;
    font-weight: 300;
    letter-spacing: 0.08em;
    color: rgba(250,248,245,0.3);
    text-transform: uppercase;
  }

  /* ── Footer ───────────────────────────────────────────────── */

  .card-footer {
    padding: 1rem 1.5rem 1.4rem;
    border-top: 1px solid rgba(250,248,245,0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .project-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.62rem;
    font-weight: 400;
    color: rgba(250,248,245,0.3);
    padding: 0.2rem 0.5rem;
    border: 1px solid rgba(250,248,245,0.08);
    border-radius: 3px;
    white-space: nowrap;
  }

  .card-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: rgba(250,248,245,0.3);
    text-decoration: none;
    letter-spacing: 0.04em;
    flex-shrink: 0;
    transition: color 0.2s, gap 0.2s;
  }

  .card-cta:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* ── Bottom CTA strip ─────────────────────────────────────── */

  .projects-footer {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  .projects-footer-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    color: #fff;
    background: var(--scarlet);
    text-decoration: none;
    padding: 0.8rem 1.8rem;
    border-radius: 7px;
    box-shadow: 0 4px 20px rgba(219,39,64,0.28);
    letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s, gap 0.2s;
  }

  .projects-footer-cta:hover {
    background: var(--crimson);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(156,13,28,0.4);
    gap: 0.75rem;
  }

  .projects-footer-cta:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 7px;
  }

  /* ── Reduced motion ───────────────────────────────────────── */

  @media (prefers-reduced-motion: reduce) {
    .project-card        { animation: none; }
    .card-visual svg     { transition: none; }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
    return (
        <section className="projects-section" aria-labelledby="projects-heading">
            <style>{styles}</style>

            <div className="projects-inner">
                <header className="projects-header">
                    <div className="header-left">
                        <p className="projects-eyebrow">
                            <span className="eyebrow-dot" aria-hidden="true" />
                            Case Studies
                        </p>
                        <h2 className="projects-heading" id="projects-heading">
                            Work that <em>speaks</em><br />for itself
                        </h2>
                    </div>

                    <Link to="/projects" className="projects-all-link" aria-label="View all case studies">
                        All projects
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </header>

                <div className="projects-grid" role="list" aria-label="Featured case studies">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.id} {...project} index={i} />
                    ))}
                </div>

                <div className="projects-footer">
                    <Link to="/projects" className="projects-footer-cta">
                        See all case studies
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                            <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}