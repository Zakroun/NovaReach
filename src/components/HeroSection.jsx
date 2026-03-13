import { Link } from "react-router-dom";
import "../styles/HeroSection.css";
const HEADLINE_WORDS = ["Grow", "Your", "Business"];
const HEADLINE_ACCENT = "With Smart Digital Marketing";

const STATS = [
    { value: "340%", label: "Avg. ROI Increase" },
    { value: "12M+", label: "Leads Generated" },
    { value: "98%", label: "Client Retention" },
];

function StatPill({ value, label }) {
    return (
        <div className="stat-pill" role="listitem">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}

function HeroVisual() {
    return (
        <figure className="hero-visual" aria-hidden="true">
            <div className="visual-grid">
                {[...Array(9)].map((_, i) => (
                    <div
                        key={i}
                        className="grid-cell"
                        style={{ animationDelay: `${i * 0.08}s` }}
                    />
                ))}
            </div>
            <div className="visual-card card-top">
                <span className="card-dot" />
                <span className="card-text">SEO Performance</span>
                <span className="card-badge">↑ 214%</span>
            </div>
            <div className="visual-orb orb-primary" />
            <div className="visual-orb orb-secondary" />
            <div className="visual-card card-bottom">
                <span className="card-dot dot-accent" />
                <span className="card-text">New Leads Today</span>
                <span className="card-badge badge-dark">+1,284</span>
            </div>
            <div className="visual-ring" />
        </figure>
    );
}

export default function HeroSection() {
    return (
        <section className="hero-section" aria-label="Hero">
            
            <div className="hero-noise" role="presentation" />
            <div className="hero-inner">
                <div className="hero-content">
                    <p className="hero-eyebrow" aria-label="Section label">
                        <span className="eyebrow-line" />
                        NovaReach Digital — Growth Agency
                    </p>
                    <h1 className="hero-headline">
                        {HEADLINE_WORDS.join(" ")}
                        <span className="headline-accent">{HEADLINE_ACCENT}</span>
                    </h1>
                    <p className="hero-body">
                        We help brands increase visibility, generate qualified leads, and
                        scale sustainably through data-driven digital strategies built for
                        the modern web.
                    </p>
                    <nav className="hero-cta" aria-label="Primary actions">
                        <Link to="/contact" className="btn btn-primary">
                            Get Started
                            <svg
                                className="btn-arrow"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2 7h10M8 3l4 4-4 4"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                        <Link to="/services" className="btn btn-ghost">
                            Our Services
                        </Link>
                    </nav>
                    {/* <ul className="hero-stats" role="list" aria-label="Agency metrics">
                        {STATS.map((stat) => (
                            <StatPill key={stat.label} {...stat} />
                        ))}
                    </ul> */}
                </div>
                <HeroVisual />
            </div>
        </section>
    );
}