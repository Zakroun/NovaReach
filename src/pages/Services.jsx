import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";
const SERVICES = [
    {
        id: "seo",
        number: "01",
        title: "SEO Optimization",
        tagline: "Own the search results your customers are already using.",
        body: "We rebuild your organic presence from the ground up — technical foundations, content architecture, authority acquisition — so you earn traffic that compounds month after month without paying per click.",
        deliverables: [
            "Technical SEO audit & remediation",
            "Keyword research & topic-cluster mapping",
            "On-page optimisation at scale",
            "Link building & digital PR",
            "Monthly reporting with rank tracking",
        ],
        metrics: [
            { value: "↑ 418%", label: "Avg. traffic growth" },
            { value: "8 mo", label: "Avg. time to results" },
        ],
        accent: "var(--scarlet)",
        visual: <SEOVisual />,
    },
    {
        id: "paid-ads",
        number: "02",
        title: "Paid Advertising",
        tagline: "Every dollar tracked. Every campaign built to compound.",
        body: "From Google Search to Meta and LinkedIn, we build full-funnel paid strategies anchored in data. We don't just manage budgets — we optimise for revenue, not click-throughs.",
        deliverables: [
            "Google Search, Display & Shopping",
            "Meta & Instagram campaigns",
            "LinkedIn B2B advertising",
            "Conversion rate optimisation",
            "Multi-touch attribution setup",
        ],
        metrics: [
            { value: "5.2×", label: "Avg. return on ad spend" },
            { value: "↓ 61%", label: "Avg. cost per acquisition" },
        ],
        accent: "var(--blush)",
        visual: <PaidAdsVisual />,
    },
    {
        id: "social",
        number: "03",
        title: "Social Media Marketing",
        tagline: "Audiences that convert, not just follow.",
        body: "We build social strategies that serve your funnel — content that attracts, communities that retain, and campaigns that drive measurable revenue, not vanity follower counts.",
        deliverables: [
            "Platform strategy & content calendar",
            "Short-form video production",
            "Community management",
            "Influencer partnerships",
            "Social commerce setup",
        ],
        metrics: [
            { value: "3.8M", label: "Avg. monthly reach" },
            { value: "↑ 290%", label: "Avg. engagement lift" },
        ],
        accent: "var(--slate-teal)",
        visual: <SocialVisual />,
    },
    {
        id: "brand",
        number: "04",
        title: "Brand Strategy",
        tagline: "Positioning that earns trust before you speak.",
        body: "We define who you are, who you're for, and why you're the only real choice — then build the visual and verbal system to express it consistently across every touchpoint.",
        deliverables: [
            "Brand positioning & ICP definition",
            "Visual identity system",
            "Tone of voice & messaging framework",
            "Brand guidelines documentation",
            "Launch & repositioning campaigns",
        ],
        metrics: [
            { value: "↑ 220%", label: "Avg. launch week revenue" },
            { value: "4.9★", label: "Avg. brand sentiment" },
        ],
        accent: "var(--mauve)",
        visual: <BrandVisual />,
    },
    {
        id: "web",
        number: "05",
        title: "Web Development",
        tagline: "Sites built to convert, not just impress.",
        body: "We design and build performance-first websites with conversion architecture at every layer — clear messaging, social proof at the right moments, and zero friction on the path to purchase.",
        deliverables: [
            "UX strategy & wireframing",
            "Design system & component library",
            "React / Next.js development",
            "CRO audits & A/B testing",
            "Performance & Core Web Vitals",
        ],
        metrics: [
            { value: "↑ 470%", label: "Avg. conversion rate lift" },
            { value: "Sub-1s", label: "Avg. load time" },
        ],
        accent: "var(--scarlet)",
        visual: <WebVisual />,
    },
    {
        id: "content",
        number: "06",
        title: "Content Marketing",
        tagline: "Authority you build once, that pays forever.",
        body: "We run editorial programmes that position you as the definitive voice in your category — attracting organic traffic, earning links, and nurturing leads through every stage of the funnel.",
        deliverables: [
            "Content strategy & editorial calendar",
            "Long-form articles & thought leadership",
            "Email nurture sequences",
            "Video scripts & production briefs",
            "Content performance analytics",
        ],
        metrics: [
            { value: "↑ 612%", label: "Avg. organic traffic" },
            { value: "60+", label: "Avg. DR60+ backlinks/yr" },
        ],
        accent: "var(--blush)",
        visual: <ContentVisual />,
    },
];

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Discovery",
        body: "We audit where you are, who your competitors are, and exactly where your biggest opportunities lie before we recommend a single tactic.",
    },
    {
        number: "02",
        title: "Strategy",
        body: "A tailored, channel-specific growth plan with clear milestones, KPIs, and a 90-day roadmap that both teams agree on before work starts.",
    },
    {
        number: "03",
        title: "Execution",
        body: "Senior specialists — not juniors — execute every deliverable. Weekly check-ins, real-time dashboards, no black boxes.",
    },
    {
        number: "04",
        title: "Iteration",
        body: "Monthly performance reviews feed back into the strategy. What works gets scaled. What doesn't gets cut. Nothing stays static.",
    },
];
function SEOVisual() {
    const bars = [22, 32, 28, 44, 38, 56, 50, 68, 62, 84];
    return (
        <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="420" height="200" fill="#0f0a0b" />
            <defs>
                <linearGradient id="seo-bar" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#DB2740" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#9C0D1C" stopOpacity="0.15" />
                </linearGradient>
            </defs>
            {bars.map((h, i) => {
                const x = 28 + i * 38;
                const bH = (h / 100) * 130;
                return (
                    <rect key={i} x={x} y={172 - bH} width="22" height={bH} rx="4"
                        fill="url(#seo-bar)" opacity={0.2 + i * 0.085} />
                );
            })}
            <polyline
                points={bars.map((h, i) => `${39 + i * 38},${170 - (h / 100) * 128}`).join(" ")}
                stroke="#E35E7D" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            {bars.map((h, i) => (
                <circle key={i} cx={39 + i * 38} cy={170 - (h / 100) * 128}
                    r={i === 9 ? 5 : 3} fill="#E35E7D" opacity={i === 9 ? 1 : 0.45} />
            ))}
            <circle cx={39 + 9 * 38} cy={170 - (84 / 100) * 128} r="9"
                stroke="#E35E7D" strokeWidth="1" fill="none" opacity="0.35" />
            <text x="28" y="18" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500"
                letterSpacing="1.8" fill="rgba(250,248,245,0.22)">ORGANIC SESSIONS · 10 MONTHS</text>
            <text x="352" y="18" fontFamily="DM Sans, sans-serif" fontSize="9"
                fontWeight="600" fill="#E35E7D">+418%</text>
        </svg>
    );
}

function PaidAdsVisual() {
    const stages = [
        { label: "Impressions", val: "2.4M", pct: 100, w: 360 },
        { label: "Clicks", val: "86k", pct: 36, w: 260 },
        { label: "Leads", val: "9.2k", pct: 14, w: 175 },
        { label: "Customers", val: "1,840", pct: 6, w: 108 },
    ];
    return (
        <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="420" height="200" fill="#090910" />
            <defs>
                <linearGradient id="ads-g" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                    <stop stopColor="#DB2740" />
                    <stop offset="1" stopColor="#E35E7D" />
                </linearGradient>
            </defs>
            <text x="28" y="22" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500"
                letterSpacing="1.8" fill="rgba(250,248,245,0.22)">ACQUISITION FUNNEL · ROAS 5.2×</text>
            {stages.map(({ label, val, pct, w }, i) => {
                const y = 38 + i * 36;
                const x = (420 - w) / 2;
                return (
                    <g key={label}>
                        <rect x={x} y={y} width={w} height="22" rx="4" fill="rgba(227,94,125,0.07)" />
                        <rect x={x} y={y} width={w * (pct / 100)} height="22" rx="4"
                            fill="url(#ads-g)" opacity={0.45 + i * 0.14} />
                        <text x={x + 10} y={y + 15} fontFamily="DM Sans, sans-serif"
                            fontSize="9" fill="rgba(250,248,245,0.65)">{label}</text>
                        <text x={x + w - 8} y={y + 15} fontFamily="DM Sans, sans-serif"
                            fontSize="9" textAnchor="end" fontWeight="500"
                            fill="rgba(250,248,245,0.9)">{val}</text>
                    </g>
                );
            })}
        </svg>
    );
}

function SocialVisual() {
    const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O"];
    const reach = [12, 20, 26, 38, 34, 55, 64, 74, 85, 100];
    const eng = [6, 12, 18, 24, 28, 44, 50, 60, 70, 86];
    const toY = (v) => 172 - (v / 100) * 138;
    return (
        <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="420" height="200" fill="#080e0f" />
            <defs>
                <linearGradient id="soc-fill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#A3C3C8" stopOpacity="0.22" />
                    <stop offset="1" stopColor="#A3C3C8" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon
                points={[...reach.map((v, i) => `${28 + i * 40},${toY(v)}`),
                `${28 + 9 * 40},182`, `28,182`].join(" ")}
                fill="url(#soc-fill)"
            />
            <polyline
                points={reach.map((v, i) => `${28 + i * 40},${toY(v)}`).join(" ")}
                stroke="#A3C3C8" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            <polyline
                points={eng.map((v, i) => `${28 + i * 40},${toY(v)}`).join(" ")}
                stroke="#E35E7D" strokeWidth="1.8" fill="none" strokeLinecap="round"
                strokeLinejoin="round" strokeDasharray="5 3"
            />
            {months.map((m, i) => (
                <text key={m} x={28 + i * 40} y="194" fontFamily="DM Sans, sans-serif"
                    fontSize="8" textAnchor="middle" fill="rgba(250,248,245,0.18)">{m}</text>
            ))}
            <text x="28" y="18" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500"
                letterSpacing="1.8" fill="rgba(250,248,245,0.22)">REACH &amp; ENGAGEMENT · 10 MONTHS</text>
            <g transform="translate(310,10)">
                <rect width="7" height="7" rx="1.5" fill="#A3C3C8" opacity="0.8" />
                <text x="11" y="7" fontFamily="DM Sans, sans-serif" fontSize="8" fill="rgba(250,248,245,0.32)">Reach</text>
                <rect x="54" width="7" height="7" rx="1.5" fill="#E35E7D" opacity="0.8" />
                <text x="65" y="7" fontFamily="DM Sans, sans-serif" fontSize="8" fill="rgba(250,248,245,0.32)">Eng</text>
            </g>
        </svg>
    );
}

function BrandVisual() {
    const segments = [
        { label: "Awareness", pct: 88, r: 70, stroke: "#D7869E" },
        { label: "Trust", pct: 94, r: 54, stroke: "#E35E7D" },
        { label: "Preference", pct: 76, r: 38, stroke: "#DB2740" },
    ];
    const cx = 210, cy = 108;
    return (
        <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="420" height="200" fill="#0c0a0e" />
            {segments.map(({ label, pct, r, stroke }) => {
                const circ = 2 * Math.PI * r;
                const dash = (pct / 100) * circ;
                return (
                    <g key={label}>
                        <circle cx={cx} cy={cy} r={r} stroke="rgba(250,248,245,0.04)"
                            strokeWidth="10" fill="none" />
                        <circle cx={cx} cy={cy} r={r} stroke={stroke} strokeWidth="10"
                            fill="none" strokeDasharray={`${dash} ${circ}`}
                            strokeDashoffset={circ * 0.25} strokeLinecap="round" opacity="0.75" />
                    </g>
                );
            })}
            <text x={cx} y={cy - 4} fontFamily="Playfair Display, serif" fontSize="22"
                fontWeight="700" fill="rgba(250,248,245,0.9)" textAnchor="middle">4.9★</text>
            <text x={cx} y={cy + 14} fontFamily="DM Sans, sans-serif" fontSize="8"
                fontWeight="300" letterSpacing="1.5" fill="rgba(250,248,245,0.3)" textAnchor="middle">BRAND SCORE</text>
            {[
                { label: "Awareness 88%", x: 330, y: 72, color: "#D7869E" },
                { label: "Trust 94%", x: 330, y: 108, color: "#E35E7D" },
                { label: "Preference 76%", x: 330, y: 144, color: "#DB2740" },
            ].map(({ label, x, y, color }) => (
                <g key={label}>
                    <circle cx={x - 10} cy={y - 3} r="3.5" fill={color} opacity="0.7" />
                    <text x={x} y={y} fontFamily="DM Sans, sans-serif" fontSize="9"
                        fill="rgba(250,248,245,0.4)">{label}</text>
                </g>
            ))}
            <text x="28" y="18" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500"
                letterSpacing="1.8" fill="rgba(250,248,245,0.22)">BRAND HEALTH DASHBOARD</text>
        </svg>
    );
}

function WebVisual() {
    const before = [0.8, 0.8, 0.8, 0.9, 0.8];
    const after = [1.2, 2.0, 2.9, 3.7, 4.6];
    const labels = ["Wk 1", "Wk 3", "Wk 5", "Wk 7", "Wk 9"];
    return (
        <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="420" height="200" fill="#0a0d0a" />
            {[25, 50, 75, 100].map((v) => (
                <line key={v} x1="28" y1={172 - (v / 5) * 12} x2="392" y2={172 - (v / 5) * 12}
                    stroke="rgba(250,248,245,0.04)" strokeWidth="1" />
            ))}
            <polyline
                points={before.map((v, i) => `${28 + i * 91},${172 - (v / 5) * 132}`).join(" ")}
                stroke="rgba(250,248,245,0.14)" strokeWidth="1.5" fill="none"
                strokeLinecap="round" strokeDasharray="5 3"
            />
            <polyline
                points={after.map((v, i) => `${28 + i * 91},${172 - (v / 5) * 132}`).join(" ")}
                stroke="#DB2740" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            {after.map((v, i) => (
                <circle key={i} cx={28 + i * 91} cy={172 - (v / 5) * 132} r="5" fill="#DB2740" />
            ))}
            {labels.map((l, i) => (
                <text key={l} x={28 + i * 91} y="188" fontFamily="DM Sans, sans-serif" fontSize="8"
                    textAnchor="middle" fill="rgba(250,248,245,0.2)">{l}</text>
            ))}
            <text x="28" y="18" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500"
                letterSpacing="1.8" fill="rgba(250,248,245,0.22)">CONVERSION RATE · BEFORE &amp; AFTER LAUNCH</text>
        </svg>
    );
}

function ContentVisual() {
    const data = [14, 22, 18, 34, 28, 48, 56, 68, 76, 96];
    const toY = (v) => 172 - (v / 100) * 138;
    return (
        <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="420" height="200" fill="#0c0c0e" />
            <defs>
                <linearGradient id="cnt-fill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#E35E7D" stopOpacity="0.22" />
                    <stop offset="1" stopColor="#E35E7D" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon
                points={[...data.map((v, i) => `${28 + i * 40},${toY(v)}`),
                `${28 + 9 * 40},182`, `28,182`].join(" ")}
                fill="url(#cnt-fill)"
            />
            <polyline
                points={data.map((v, i) => `${28 + i * 40},${toY(v)}`).join(" ")}
                stroke="#E35E7D" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            {[2, 5, 8].map((i) => (
                <circle key={i} cx={28 + i * 40} cy={toY(data[i])} r="4.5" fill="#E35E7D" opacity="0.65" />
            ))}
            <circle cx={28 + 9 * 40} cy={toY(96)} r="6" fill="#E35E7D" />
            <circle cx={28 + 9 * 40} cy={toY(96)} r="10" stroke="#E35E7D" strokeWidth="1" fill="none" opacity="0.3" />
            <text x="28" y="18" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500"
                letterSpacing="1.8" fill="rgba(250,248,245,0.22)">EDITORIAL PROGRAMME · ORGANIC SESSIONS</text>
            <text x="348" y="18" fontFamily="DM Sans, sans-serif" fontSize="9"
                fontWeight="600" fill="#E35E7D">+612%</text>
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

function ServiceMetric({ value, label }) {
    return (
        <div className="svc-metric" role="listitem">
            <span className="metric-val">{value}</span>
            <span className="metric-lbl">{label}</span>
        </div>
    );
}

function DeliverableItem({ text }) {
    return (
        <li className="deliverable-item">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6.5l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {text}
        </li>
    );
}

function ServiceCard({ id, number, title, tagline, body, deliverables, metrics, accent, visual, index }) {
    const isEven = index % 2 === 1;
    return (
        <article
            className={`service-card ${isEven ? "service-card--flip" : ""}`}
            id={id}
            style={{ "--accent": accent, animationDelay: `${index * 0.06}s` }}
            aria-labelledby={`svc-title-${id}`}
        >
            <div className="svc-visual" aria-hidden="true">
                {visual}
                <div className="visual-scrim" />
                <span className="svc-number-bg" aria-hidden="true">{number}</span>
            </div>
            <div className="svc-copy">
                <div className="svc-copy-inner">
                    <p className="svc-number" aria-hidden="true">{number}</p>
                    <h3 className="svc-title" id={`svc-title-${id}`}>{title}</h3>
                    <p className="svc-tagline">{tagline}</p>
                    <p className="svc-body">{body}</p>
                    <ul className="deliverables-list" aria-label={`${title} deliverables`}>
                        {deliverables.map((d) => <DeliverableItem key={d} text={d} />)}
                    </ul>
                    <div className="svc-metrics" role="list" aria-label={`${title} results`}>
                        {metrics.map((m) => <ServiceMetric key={m.label} {...m} />)}
                    </div>
                    <Link to="/contact" className="svc-cta" aria-label={`Start a ${title} project`}>
                        Get started
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
            <span className="card-accent-line" aria-hidden="true" />
        </article>
    );
}

function ProcessStep({ number, title, body, index }) {
    return (
        <div className="process-step" style={{ animationDelay: `${index * 0.08}s` }}>
            <div className="step-number" aria-hidden="true">{number}</div>
            <div className="step-connector" aria-hidden="true">
                <span className="connector-dot" />
                <span className="connector-line" />
            </div>
            <div className="step-body">
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{body}</p>
            </div>
        </div>
    );
}

export default function Services() {
    return (
        <main className="services-page">
            <section className="services-hero" aria-labelledby="services-page-heading">
                <div className="hero-inner">
                    <div>
                        <Eyebrow>What We Do</Eyebrow>
                        <h1 className="hero-headline" id="services-page-heading">
                            Six services.<br />
                            <em>One goal.</em>
                        </h1>
                        <p className="hero-body">
                            Every service we offer connects to the same outcome: predictable,
                            scalable revenue growth for your business. Pick one or combine
                            them — we'll tell you what actually makes sense for where you are.
                        </p>
                    </div>
                    <nav className="hero-links" aria-label="Jump to service">
                        {SERVICES.map(({ id, number, title }) => (
                            <a key={id} href={`#${id}`} className="hero-link-item">
                                <span className="link-left">
                                    <span className="link-num">{number}</span>
                                    <span className="link-name">{title}</span>
                                </span>
                                <svg className="link-arrow" width="12" height="12" viewBox="0 0 12 12"
                                    fill="none" aria-hidden="true">
                                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        ))}
                    </nav>
                </div>
            </section>
            <div className="section-divider" role="separator" />
            <section className="services-list" aria-label="Our services">
                <div className="services-list-inner" role="list">
                    {SERVICES.map((svc, i) => (
                        <ServiceCard key={svc.id} {...svc} index={i} />
                    ))}
                </div>
            </section>
            <div className="section-divider" role="separator" />
            <section className="process-section" aria-labelledby="process-heading">
                <div className="inner">
                    <div className="process-header">
                        <div>
                            <Eyebrow>How It Works</Eyebrow>
                            <h2 className="process-heading" id="process-heading">
                                A process built for<br />
                                <em>real results</em>
                            </h2>
                        </div>
                        <p className="process-sub">
                            No onboarding theatre. Every engagement follows a four-phase
                            framework that keeps strategy and execution tightly aligned.
                        </p>
                    </div>
                    <div className="process-steps" role="list" aria-label="Our process">
                        {PROCESS_STEPS.map((step, i) => (
                            <ProcessStep key={step.number} {...step} index={i} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-divider" role="separator" />
            <section className="cta-section" aria-labelledby="services-cta-heading">
                <div className="cta-inner">
                    <Eyebrow>Let's talk</Eyebrow>
                    <h2 className="cta-heading" id="services-cta-heading">
                        Not sure which service<br />
                        <em>you actually need?</em>
                    </h2>
                    <p className="cta-body">
                        Tell us your goals and current situation. We'll give you an
                        honest recommendation — even if that means fewer services
                        than you expected.
                    </p>
                    <nav className="cta-actions" aria-label="Get started">
                        <Link to="/contact" className="btn-primary">
                            Talk to us
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                                <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link to="/projects" className="btn-ghost">
                            See our work
                        </Link>
                    </nav>
                </div>
            </section>
        </main>
    );
}