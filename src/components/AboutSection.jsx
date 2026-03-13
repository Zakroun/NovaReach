import { Link } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────

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

// ─── Sub-components ───────────────────────────────────────────────────────────

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
            {/* Background texture grid */}
            <div className="visual-bg-grid">
                {[...Array(16)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-cell"
                        style={{ animationDelay: `${i * 0.12}s` }}
                    />
                ))}
            </div>

            {/* Central composition */}
            <div className="visual-stage">
                {/* Abstract agency mark */}
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

                {/* Floating data chips */}
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

            {/* Orb accents */}
            <div className="orb orb--a" />
            <div className="orb orb--b" />
        </figure>
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

  .about-section {
    position: relative;
    background: var(--ink);
    padding: 7rem 0;
    overflow: hidden;
    isolation: isolate;
  }

  .about-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 55% 50% at 0% 50%, rgba(163,195,200,0.05) 0%, transparent 65%),
      radial-gradient(ellipse 40% 40% at 100% 20%, rgba(219,39,64,0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  /* ── Inner grid ───────────────────────────────────────────── */

  .about-inner {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  @media (max-width: 860px) {
    .about-inner {
      grid-template-columns: 1fr;
      gap: 3.5rem;
    }
  }

  /* ── Copy column ──────────────────────────────────────────── */

  .about-copy {
    animation: revealUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes revealUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .about-eyebrow {
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
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--scarlet);
    flex-shrink: 0;
  }

  /* ── Heading ──────────────────────────────────────────────── */

  .about-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.8vw, 2.8rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--cream);
    margin: 0 0 1.75rem;
  }

  .about-heading em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet) 0%, var(--blush) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Body copy ────────────────────────────────────────────── */

  .about-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(250,248,245,0.5);
    margin: 0 0 2rem;
    max-width: 46ch;
  }

  /* ── Pillars ──────────────────────────────────────────────── */

  .pillar-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .pillar-item {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    line-height: 1.55;
  }

  .pillar-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--scarlet);
    flex-shrink: 0;
    margin-top: 0.45em;
    box-shadow: 0 0 5px rgba(219, 39, 64, 0.5);
  }

  .pillar-label {
    font-weight: 500;
    color: var(--cream);
  }

  .pillar-desc {
    font-weight: 300;
    color: rgba(250,248,245,0.45);
  }

  /* ── Divider ──────────────────────────────────────────────── */

  .copy-divider {
    width: 100%;
    height: 1px;
    background: rgba(250,248,245,0.07);
    margin-bottom: 2rem;
  }

  /* ── Achievements row ─────────────────────────────────────── */

  .achievements-row {
    display: flex;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
  }

  .achievement-badge {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .badge-value {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--cream);
    line-height: 1;
  }

  .badge-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.68rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(250,248,245,0.3);
  }

  /* ── CTA ──────────────────────────────────────────────────── */

  .about-cta {
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
    box-shadow: 0 4px 20px rgba(219, 39, 64, 0.3);
    letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s, gap 0.2s;
  }

  .about-cta:hover {
    background: var(--crimson);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(156, 13, 28, 0.4);
    gap: 0.75rem;
  }

  .about-cta:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 7px;
  }

  /* ── Visual column ────────────────────────────────────────── */

  .about-visual {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    max-width: 480px;
    justify-self: center;
    animation: revealUp 0.7s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  /* ── Background texture grid ──────────────────────────────── */

  .visual-bg-grid {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 6px;
    border-radius: 20px;
    overflow: hidden;
    opacity: 0.6;
  }

  .bg-cell {
    background: rgba(250,248,245,0.025);
    border-radius: 3px;
    animation: cellBreathe 4s ease-in-out infinite alternate;
  }

  @keyframes cellBreathe {
    from { background: rgba(250,248,245,0.015); }
    to   { background: rgba(163,195,200,0.055); }
  }

  /* ── Stage ────────────────────────────────────────────────── */

  .visual-stage {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── Agency mark ──────────────────────────────────────────── */

  .agency-mark {
    position: relative;
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mark-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(219,39,64,0.2);
    animation: ringExpand 8s ease-in-out infinite alternate;
  }

  .mark-ring--outer {
    inset: 0;
    border-color: rgba(219,39,64,0.12);
  }

  .mark-ring--inner {
    inset: 18px;
    border-color: rgba(219,39,64,0.22);
    animation-direction: alternate-reverse;
  }

  @keyframes ringExpand {
    from { transform: scale(1) rotate(0deg); }
    to   { transform: scale(1.04) rotate(8deg); }
  }

  .mark-core {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(219,39,64,0.08);
    border: 1px solid rgba(219,39,64,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blush);
    z-index: 1;
  }

  .mark-core svg {
    width: 40px;
    height: 40px;
  }

  /* ── Data chips ───────────────────────────────────────────── */

  .data-chip {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    padding: 0.55rem 0.85rem;
    background: rgba(14,13,13,0.85);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(250,248,245,0.08);
    border-radius: 8px;
    z-index: 2;
  }

  .chip-a {
    top: 10%;
    right: 2%;
    animation: chipFloat 4s ease-in-out infinite alternate;
  }

  .chip-b {
    bottom: 16%;
    right: 4%;
    animation: chipFloat 5s 0.5s ease-in-out infinite alternate-reverse;
  }

  .chip-c {
    bottom: 12%;
    left: 2%;
    animation: chipFloat 4.5s 1s ease-in-out infinite alternate;
  }

  @keyframes chipFloat {
    from { transform: translateY(0); }
    to   { transform: translateY(-8px); }
  }

  .chip-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.62rem;
    font-weight: 300;
    letter-spacing: 0.06em;
    color: rgba(250,248,245,0.35);
    white-space: nowrap;
  }

  .chip-val {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--blush);
    line-height: 1;
  }

  .chip-val--teal {
    color: var(--slate-teal);
  }

  /* ── Orbs ─────────────────────────────────────────────────── */

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(50px);
    pointer-events: none;
  }

  .orb--a {
    width: 45%;
    height: 45%;
    top: 8%;
    left: 8%;
    background: radial-gradient(circle, rgba(219,39,64,0.2) 0%, transparent 70%);
    animation: orbDrift 7s ease-in-out infinite alternate;
  }

  .orb--b {
    width: 35%;
    height: 35%;
    bottom: 10%;
    right: 10%;
    background: radial-gradient(circle, rgba(163,195,200,0.18) 0%, transparent 70%);
    animation: orbDrift 9s ease-in-out infinite alternate-reverse;
  }

  @keyframes orbDrift {
    from { transform: translate(0, 0); }
    to   { transform: translate(10px, -14px); }
  }

  /* ── Reduced motion ───────────────────────────────────────── */

  @media (prefers-reduced-motion: reduce) {
    .about-copy,
    .about-visual  { animation: none; }
    .data-chip,
    .orb,
    .mark-ring,
    .bg-cell       { animation: none; }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutSection() {
    return (
        <section className="about-section" aria-labelledby="about-heading">
            <style>{styles}</style>

            <div className="about-inner">
                {/* ── Visual ────────────────────────────────────────── */}
                <AboutVisual />

                {/* ── Copy ──────────────────────────────────────────── */}
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