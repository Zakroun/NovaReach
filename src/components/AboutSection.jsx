import { Link } from "react-router-dom";
import "../styles/AboutSection.css";
const PILLARS = [
    {
        id: "data",
        label: "Data-First",
        desc: "Every decision is anchored in analytics, not assumptions.",
    },
    {
        id: "creative",
        label: "Creative-Led",
        desc: "Strategy without creativity is just noise. We bridge both.",
    },
    {
        id: "growth",
        label: "Growth-Obsessed",
        desc: "We measure success the same way you do — revenue.",
    },
];

const ACHIEVEMENTS = [
    { value: "2016", label: "Founded" },
    { value: "40+", label: "Specialists" },
    { value: "18", label: "Industries" },
];

function PillarItem({ label, desc }) {
    return (
        <li className="pillar-item">
            <span className="pillar-dot" aria-hidden="true" />
            <div>
                <span className="pillar-label">{label} — </span>
                <span className="pillar-desc">{desc}</span>
            </div>
        </li>
    );
}

function AchievementBadge({ value, label }) {
    return (
        <div className="achievement-badge" role="listitem">
            <span className="badge-value">{value}</span>
            <span className="badge-label">{label}</span>
        </div>
    );
}

function AboutVisual() {
    return (
        <figure className="about-visual" aria-hidden="true">
            <div className="visual-bg-grid">
                {[...Array(16)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-cell"
                        style={{ animationDelay: `${i * 0.12}s` }}
                    />
                ))}
            </div>
            <div className="visual-stage">
                <div className="agency-mark">
                    <div className="mark-ring mark-ring--outer" />
                    <div className="mark-ring mark-ring--inner" />
                    <div className="mark-core">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 28 L14 16 L20 22 L26 12 L32 20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle cx="32" cy="20" r="2.5" fill="currentColor" />
                        </svg>
                    </div>
                </div>
                <div className="data-chip chip-a">
                    <span className="chip-label">Organic Traffic</span>
                    <span className="chip-val">↑ 312%</span>
                </div>
                <div className="data-chip chip-b">
                    <span className="chip-label">Conversion Rate</span>
                    <span className="chip-val">8.4%</span>
                </div>
                <div className="data-chip chip-c">
                    <span className="chip-label">Cost per Lead</span>
                    <span className="chip-val chip-val--teal">↓ 54%</span>
                </div>
            </div>
            <div className="orb orb--a" />
            <div className="orb orb--b" />
        </figure>
    );
}

export default function AboutSection() {
    return (
        <section className="about-section" aria-labelledby="about-heading">
            
            <div className="about-inner">
                <AboutVisual />
                <div className="about-copy">
                    <p className="about-eyebrow">
                        <span className="eyebrow-dot" aria-hidden="true" />
                        Who We Are
                    </p>
                    <h2 className="about-heading" id="about-heading">
                        We help brands <em>grow</em><br />
                        where it counts
                    </h2>
                    <p className="about-body">
                        Our team of digital strategists, creatives, and growth engineers
                        partners with businesses to build authoritative online presence —
                        through SEO, performance advertising, content, and campaigns
                        designed around your revenue goals, not vanity metrics.
                    </p>
                    <ul className="pillar-list" aria-label="Our approach">
                        {PILLARS.map(({ id, label, desc }) => (
                            <PillarItem key={id} label={label} desc={desc} />
                        ))}
                    </ul>
                    <div className="copy-divider" role="separator" />
                    <div className="achievements-row" role="list" aria-label="Agency milestones">
                        {ACHIEVEMENTS.map(({ value, label }) => (
                            <AchievementBadge key={label} value={value} label={label} />
                        ))}
                    </div>
                    <Link to="/about" className="about-cta">
                        Our story
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                            <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}