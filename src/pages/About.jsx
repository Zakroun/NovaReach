import { Link } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────

const TIMELINE = [
    {
        year: "2016",
        title: "Founded in a Brooklyn loft",
        body: "Two strategists, one developer, and a conviction that most agencies optimise for retainers — not results.",
    },
    {
        year: "2018",
        title: "First $1M revenue milestone",
        body: "Grew to 12 specialists across paid media, SEO, and creative. Opened our first real office (with a standing desk policy).",
    },
    {
        year: "2020",
        title: "Remote-first, coast-to-coast",
        body: "Rebuilt as a distributed team. Hired the best people regardless of zip code. Performance didn't dip — it doubled.",
    },
    {
        year: "2022",
        title: "200+ brands served",
        body: "Expanded into brand strategy and web development. Named a top-25 performance agency by Marketing Insider.",
    },
    {
        year: "2024",
        title: "NovaReach Labs launched",
        body: "Launched our in-house R&D arm — building proprietary attribution tooling and AI-augmented creative workflows.",
    },
];

const VALUES = [
    {
        id: "v1",
        number: "01",
        title: "Results over optics",
        body: "We measure success in pipeline, revenue, and retention — not vanity metrics that look good in monthly reports.",
        accent: "var(--scarlet)",
    },
    {
        id: "v2",
        number: "02",
        title: "Radical transparency",
        body: "Full access to your data, your ad accounts, your dashboards. No black boxes. You own everything we build.",
        accent: "var(--blush)",
    },
    {
        id: "v3",
        number: "03",
        title: "Depth over breadth",
        body: "We deliberately limit our client roster. Every account gets a dedicated team — not a junior exec with 30 other clients.",
        accent: "var(--slate-teal)",
    },
    {
        id: "v4",
        number: "04",
        title: "Obsessive iteration",
        body: "Launch, measure, improve, repeat. Nothing we ship is final. We treat every campaign as a living experiment.",
        accent: "var(--mauve)",
    },
];

const TEAM = [
    {
        id: "tm1",
        name: "Alex Rivera",
        role: "Co-Founder & CEO",
        focus: "Growth strategy",
        initials: "AR",
        accent: "var(--scarlet)",
    },
    {
        id: "tm2",
        name: "Dana Osei",
        role: "Co-Founder & CTO",
        focus: "Engineering & data",
        initials: "DO",
        accent: "var(--slate-teal)",
    },
    {
        id: "tm3",
        name: "Mia Tanaka",
        role: "VP Creative",
        focus: "Brand & content",
        initials: "MT",
        accent: "var(--blush)",
    },
    {
        id: "tm4",
        name: "James Okafor",
        role: "Head of Paid Media",
        focus: "PPC & attribution",
        initials: "JO",
        accent: "var(--mauve)",
    },
    {
        id: "tm5",
        name: "Sara Lindqvist",
        role: "Head of SEO",
        focus: "Organic & technical",
        initials: "SL",
        accent: "var(--scarlet)",
    },
    {
        id: "tm6",
        name: "Ravi Menon",
        role: "Client Strategy Lead",
        focus: "Retention & growth",
        initials: "RM",
        accent: "var(--slate-teal)",
    },
];

const STATS = [
    { value: "40+", label: "Specialists" },
    { value: "200+", label: "Brands served" },
    { value: "18", label: "Industries" },
    { value: "98%", label: "Client retention" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Eyebrow({ children }) {
    return (
        <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {children}
        </p>
    );
}

function SectionHeading({ id, children }) {
    return (
        <h2 className="section-heading" id={id}>
            {children}
        </h2>
    );
}

function TimelineItem({ year, title, body, index }) {
    return (
        <div
            className="timeline-item"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="timeline-year" aria-label={`Year: ${year}`}>
                {year}
            </div>
            <div className="timeline-connector" aria-hidden="true">
                <span className="connector-dot" />
                <span className="connector-line" />
            </div>
            <div className="timeline-content">
                <h3 className="timeline-title">{title}</h3>
                <p className="timeline-body">{body}</p>
            </div>
        </div>
    );
}

function ValueCard({ number, title, body, accent, index }) {
    return (
        <article
            className="value-card"
            style={{ "--card-accent": accent, animationDelay: `${index * 0.08}s` }}
        >
            <span className="value-number" aria-hidden="true">
                {number}
            </span>
            <h3 className="value-title">{title}</h3>
            <p className="value-body">{body}</p>
            <span className="value-accent-line" aria-hidden="true" />
        </article>
    );
}

function TeamCard({ name, role, focus, initials, accent, index }) {
    return (
        <div
            className="team-card"
            style={{ "--card-accent": accent, animationDelay: `${index * 0.07}s` }}
        >
            <div className="team-avatar" aria-hidden="true">
                <span className="avatar-initials">{initials}</span>
                <div className="avatar-ring" />
            </div>
            <div className="team-info">
                <span className="team-name">{name}</span>
                <span className="team-role">{role}</span>
                <span className="team-focus">{focus}</span>
            </div>
        </div>
    );
}

function StatItem({ value, label }) {
    return (
        <div className="stat-item" role="listitem">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
        </div>
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

  /* ── Page wrapper ─────────────────────────────────────────── */

  .about-page {
    background: var(--ink);
    color: var(--cream);
  }

  /* ── Shared utilities ─────────────────────────────────────── */

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
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--scarlet);
    flex-shrink: 0;
  }

  .section-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.8vw, 2.8rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--cream);
    margin: 0 0 1.5rem;
  }

  .section-heading em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet) 0%, var(--blush) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ────────────────────────────────────────────────────────────
     HERO
  ──────────────────────────────────────────────────────────── */

  .about-hero {
    position: relative;
    background: var(--ink);
    padding: 10rem 0 7rem;
    overflow: hidden;
    isolation: isolate;
  }

  .about-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 60% at 50% -10%, rgba(219,39,64,0.1) 0%, transparent 65%),
      radial-gradient(ellipse 40% 40% at 90% 80%, rgba(163,195,200,0.06) 0%, transparent 60%);
    pointer-events: none;
  }

  /* Noise grain */
  .about-hero::after {
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
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  @media (max-width: 860px) {
    .hero-inner { grid-template-columns: 1fr; gap: 3rem; }
  }

  .hero-copy { animation: revealUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }

  .hero-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 5.5vw, 4.2rem);
    font-weight: 900;
    line-height: 1.04;
    letter-spacing: -0.03em;
    color: var(--cream);
    margin: 0 0 1.5rem;
  }

  .hero-headline em {
    display: block;
    font-style: italic;
    font-weight: 700;
    background: linear-gradient(110deg, var(--scarlet) 0%, var(--blush) 55%, var(--mauve) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(250,248,245,0.5);
    max-width: 44ch;
    margin: 0 0 2.5rem;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
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
    color: rgba(250,248,245,0.45);
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    border-radius: 7px;
    border: 1px solid rgba(250,248,245,0.1);
    transition: color 0.2s, border-color 0.2s, gap 0.2s;
  }

  .btn-ghost:hover {
    color: var(--cream);
    border-color: rgba(250,248,245,0.25);
    gap: 0.75rem;
  }

  .btn-ghost:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 7px;
  }

  /* ── Hero stats ───────────────────────────────────────────── */

  .hero-stats {
    animation: revealUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both;
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: rgba(250,248,245,0.06);
    border: 1px solid rgba(250,248,245,0.06);
    border-radius: 16px;
    overflow: hidden;
  }

  .stat-item {
    padding: 1.6rem 1.8rem;
    background: var(--ink-2);
    display: flex;
    align-items: baseline;
    gap: 1rem;
    transition: background 0.2s;
  }

  .stat-item:hover { background: var(--ink-3); }

  .stat-value {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--cream);
    line-height: 1;
    min-width: 5rem;
  }

  .stat-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    color: rgba(250,248,245,0.35);
    letter-spacing: 0.06em;
  }

  /* ────────────────────────────────────────────────────────────
     STORY / TIMELINE
  ──────────────────────────────────────────────────────────── */

  .story-section {
    position: relative;
    background: var(--ink-2);
    padding: 7rem 0;
    overflow: hidden;
  }

  .story-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(219,39,64,0.3) 50%, transparent 100%);
  }

  .story-header {
    max-width: 52ch;
    margin-bottom: 4rem;
  }

  .story-lead {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(250,248,245,0.48);
    margin: 0;
  }

  /* ── Timeline ─────────────────────────────────────────────── */

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 80px 40px 1fr;
    gap: 0 1.5rem;
    align-items: start;
    animation: revealUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
  }

  @media (max-width: 640px) {
    .timeline-item {
      grid-template-columns: 60px 30px 1fr;
      gap: 0 1rem;
    }
  }

  .timeline-year {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--scarlet);
    padding-top: 0.15rem;
    text-align: right;
    letter-spacing: -0.01em;
  }

  .timeline-connector {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .connector-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1.5px solid var(--scarlet);
    background: var(--ink-2);
    box-shadow: 0 0 6px rgba(219,39,64,0.35);
    flex-shrink: 0;
    margin-top: 0.25rem;
    z-index: 1;
  }

  .connector-line {
    flex: 1;
    width: 1px;
    background: rgba(250,248,245,0.07);
    min-height: 3rem;
    margin-top: 4px;
  }

  .timeline-item:last-child .connector-line { display: none; }

  .timeline-content {
    padding-bottom: 2.5rem;
  }

  .timeline-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--cream);
    margin: 0 0 0.5rem;
    padding-top: 0.05rem;
  }

  .timeline-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250,248,245,0.42);
    margin: 0;
    max-width: 52ch;
  }

  /* ────────────────────────────────────────────────────────────
     VALUES
  ──────────────────────────────────────────────────────────── */

  .values-section {
    position: relative;
    background: var(--ink);
    padding: 7rem 0;
    overflow: hidden;
  }

  .values-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 50% at 100% 50%, rgba(219,39,64,0.05) 0%, transparent 65%);
    pointer-events: none;
  }

  .values-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: end;
    margin-bottom: 3.5rem;
  }

  @media (max-width: 720px) {
    .values-header { grid-template-columns: 1fr; }
    .values-sub    { display: none; }
  }

  .values-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250,248,245,0.4);
    max-width: 38ch;
    margin: 0;
    align-self: flex-end;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5px;
    background: rgba(250,248,245,0.06);
    border: 1px solid rgba(250,248,245,0.06);
    border-radius: 16px;
    overflow: hidden;
  }

  @media (max-width: 600px) {
    .values-grid { grid-template-columns: 1fr; }
  }

  .value-card {
    position: relative;
    background: var(--ink-2);
    padding: 2.2rem 2rem;
    overflow: hidden;
    transition: background 0.25s;
    animation: revealUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
  }

  .value-card:hover { background: var(--ink-3); }
  .value-card:hover .value-accent-line { opacity: 1; }

  .value-number {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--card-accent);
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    opacity: 0.6;
  }

  .value-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--cream);
    margin: 0 0 0.65rem;
    line-height: 1.25;
  }

  .value-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.86rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250,248,245,0.4);
    margin: 0;
  }

  .value-accent-line {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--card-accent);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  /* ────────────────────────────────────────────────────────────
     TEAM
  ──────────────────────────────────────────────────────────── */

  .team-section {
    position: relative;
    background: var(--ink-2);
    padding: 7rem 0;
    overflow: hidden;
  }

  .team-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(163,195,200,0.2), transparent);
  }

  .team-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 3.5rem;
    flex-wrap: wrap;
  }

  .team-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 300;
    color: rgba(250,248,245,0.35);
    max-width: 40ch;
    line-height: 1.7;
    margin: 0;
    align-self: flex-end;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5px;
    background: rgba(250,248,245,0.06);
    border: 1px solid rgba(250,248,245,0.06);
    border-radius: 16px;
    overflow: hidden;
  }

  @media (max-width: 760px) {
    .team-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 480px) {
    .team-grid { grid-template-columns: 1fr; }
  }

  .team-card {
    background: var(--ink);
    padding: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.1rem;
    transition: background 0.25s;
    animation: revealUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
  }

  .team-card:hover { background: #161515; }

  .team-avatar {
    position: relative;
    width: 46px;
    height: 46px;
    flex-shrink: 0;
  }

  .avatar-initials {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(250,248,245,0.05);
    border: 1px solid rgba(250,248,245,0.1);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
    color: rgba(250,248,245,0.5);
    letter-spacing: 0.04em;
  }

  .avatar-ring {
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    border: 1.5px solid var(--card-accent);
    opacity: 0.35;
  }

  .team-info {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .team-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--cream);
    line-height: 1.2;
  }

  .team-role {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    font-weight: 400;
    color: rgba(250,248,245,0.35);
  }

  .team-focus {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.68rem;
    font-weight: 300;
    letter-spacing: 0.06em;
    color: var(--card-accent);
    opacity: 0.7;
    text-transform: lowercase;
  }

  /* ────────────────────────────────────────────────────────────
     CLOSING CTA
  ──────────────────────────────────────────────────────────── */

  .about-cta-section {
    position: relative;
    background: var(--ink);
    padding: 7rem 0;
    overflow: hidden;
    text-align: center;
  }

  .about-cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 70% at 50% 50%, rgba(219,39,64,0.07) 0%, transparent 65%);
    pointer-events: none;
  }

  .cta-inner {
    position: relative;
    z-index: 1;
    max-width: 640px;
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
    margin: 0 0 1.25rem;
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

  /* ── Section dividers ─────────────────────────────────────── */

  .section-divider {
    width: 100%;
    height: 1px;
    background: rgba(250,248,245,0.05);
  }

  /* ── Entrance animation ───────────────────────────────────── */

  @keyframes revealUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Reduced motion ───────────────────────────────────────── */

  @media (prefers-reduced-motion: reduce) {
    .hero-copy, .hero-stats,
    .timeline-item, .value-card,
    .team-card { animation: none; }
  }
`;

// ─── Page component ───────────────────────────────────────────────────────────

export default function About() {
    return (
        <main className="about-page">
            <style>{styles}</style>

            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="about-hero" aria-labelledby="about-hero-heading">
                <div className="hero-inner">
                    <div className="hero-copy">
                        <Eyebrow>Our Story</Eyebrow>

                        <h1 className="hero-headline" id="about-hero-heading">
                            An agency built
                            <em>on outcomes</em>
                        </h1>

                        <p className="hero-body">
                            We started NovaReach because we were tired of agencies that
                            optimise for billable hours over business results. Everything
                            we do — how we hire, how we report, how we charge — is built
                            around one question: did it grow your business?
                        </p>

                        <nav className="hero-actions" aria-label="About page actions">
                            <Link to="/contact" className="btn-primary">
                                Work with us
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                                    <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link to="/projects" className="btn-ghost">
                                See our work
                            </Link>
                        </nav>
                    </div>

                    {/* Stats panel */}
                    <div className="hero-stats" role="list" aria-label="Agency at a glance">
                        {STATS.map(({ value, label }) => (
                            <StatItem key={label} value={value} label={label} />
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" role="separator" />

            {/* ── Story timeline ────────────────────────────────────── */}
            <section className="story-section" aria-labelledby="story-heading">
                <div className="inner">
                    <div className="story-header">
                        <Eyebrow>How we got here</Eyebrow>
                        <SectionHeading id="story-heading">
                            Eight years of <em>doing the work</em>
                        </SectionHeading>
                        <p className="story-lead">
                            We didn't grow through acquisition or VC funding. We grew by
                            delivering results that made clients stay — and refer.
                        </p>
                    </div>

                    <div className="timeline" role="list" aria-label="Company history">
                        {TIMELINE.map((item, i) => (
                            <TimelineItem key={item.year} {...item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" role="separator" />

            {/* ── Values ────────────────────────────────────────────── */}
            <section className="values-section" aria-labelledby="values-heading">
                <div className="inner">
                    <div className="values-header">
                        <div>
                            <Eyebrow>What we stand for</Eyebrow>
                            <SectionHeading id="values-heading">
                                Principles that <em>don't bend</em>
                            </SectionHeading>
                        </div>
                        <p className="values-sub">
                            Culture isn't a slide deck. These are the four commitments we
                            hold ourselves to — in every client call, every campaign, every
                            hire.
                        </p>
                    </div>

                    <div className="values-grid" role="list" aria-label="Company values">
                        {VALUES.map((v, i) => (
                            <ValueCard key={v.id} {...v} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" role="separator" />

            {/* ── Team ──────────────────────────────────────────────── */}
            <section className="team-section" aria-labelledby="team-heading">
                <div className="inner">
                    <div className="team-header">
                        <div>
                            <Eyebrow>The people</Eyebrow>
                            <SectionHeading id="team-heading">
                                Built by <em>specialists</em>
                            </SectionHeading>
                        </div>
                        <p className="team-sub">
                            No account managers. Every client works directly with the
                            practitioner executing their strategy.
                        </p>
                    </div>

                    <div className="team-grid" role="list" aria-label="Our team">
                        {TEAM.map((member, i) => (
                            <TeamCard key={member.id} {...member} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" role="separator" />

            {/* ── Closing CTA ───────────────────────────────────────── */}
            <section className="about-cta-section" aria-labelledby="about-cta-heading">
                <div className="cta-inner">
                    <Eyebrow>Ready?</Eyebrow>
                    <h2 className="cta-heading" id="about-cta-heading">
                        Let's build something<br />
                        <em>worth talking about</em>
                    </h2>
                    <p className="cta-body">
                        Tell us where you want to be. We'll tell you honestly if we
                        can get you there — and exactly how.
                    </p>
                    <nav className="cta-actions" aria-label="Get started">
                        <Link to="/contact" className="btn-primary">
                            Start a project
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                                <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link to="/services" className="btn-ghost">
                            Explore services
                        </Link>
                    </nav>
                </div>
            </section>
        </main>
    );
}