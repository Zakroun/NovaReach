import { useState, useEffect, useCallback, useRef } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
    {
        id: "t1",
        quote:
            "NovaReach completely transformed how we acquire customers online. Within six months our cost-per-lead dropped by 58% while volume tripled. It's the most measurable ROI we've ever seen from an agency.",
        name: "Sarah Okonkwo",
        role: "CMO",
        company: "Meridian Health",
        metric: "↓ 58% CPL",
        initials: "SO",
        accent: "var(--scarlet)",
    },
    {
        id: "t2",
        quote:
            "We'd worked with three agencies before NovaReach. The difference is they actually understand our funnel. Our Google Ads ROAS went from 1.8× to 5.2× in four months — with the same budget.",
        name: "James Whitfield",
        role: "Founder & CEO",
        company: "Vertex Labs",
        metric: "5.2× ROAS",
        initials: "JW",
        accent: "var(--blush)",
    },
    {
        id: "t3",
        quote:
            "Our Instagram following grew from 12k to 190k in eight months and we're converting that audience into real revenue. The brand strategy work alone was worth the entire engagement.",
        name: "Priya Nair",
        role: "Brand Director",
        company: "Solace Studio",
        metric: "12k → 190k",
        initials: "PN",
        accent: "var(--slate-teal)",
    },
    {
        id: "t4",
        quote:
            "They rearchitected our entire content strategy and the organic traffic results speak for themselves — 418% growth in under a year. Our sales team now has more inbound leads than they can handle.",
        name: "Tom Eriksen",
        role: "Head of Growth",
        company: "Archetype",
        metric: "↑ 418% traffic",
        initials: "TE",
        accent: "var(--mauve)",
    },
    {
        id: "t5",
        quote:
            "What sets NovaReach apart is the depth of reporting. We always know exactly what's working and why. No agency-speak, no smoke and mirrors — just clear data and a team that executes.",
        name: "Lena Hoffmann",
        role: "Operations Director",
        company: "Fable Commerce",
        metric: "Full transparency",
        initials: "LH",
        accent: "var(--scarlet)",
    },
];

const AUTO_INTERVAL = 5500;

// ─── Sub-components ───────────────────────────────────────────────────────────

function Avatar({ initials, accent }) {
    return (
        <div className="avatar" style={{ "--avatar-accent": accent }} aria-hidden="true">
            <span className="avatar-initials">{initials}</span>
            <div className="avatar-ring" />
        </div>
    );
}

function QuoteIcon() {
    return (
        <svg
            className="quote-icon"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M0 24V14.4C0 10.08 1.12 6.6 3.36 3.96 5.68 1.32 8.96 0 13.2 0v4.8c-2.48 0-4.36.76-5.64 2.28C6.32 8.6 5.68 10.44 5.6 12.72H10V24H0ZM18 24V14.4c0-4.32 1.12-7.8 3.36-10.44C23.68 1.32 26.96 0 31.2 0v4.8c-2.48 0-4.36.76-5.64 2.28-1.24 1.52-1.88 3.36-1.96 5.64H28V24H18Z"
                fill="currentColor"
            />
        </svg>
    );
}

function TestimonialCard({ quote, name, role, company, metric, initials, accent, isActive }) {
    return (
        <figure
            className={`testimonial-card ${isActive ? "card--active" : "card--idle"}`}
            aria-hidden={!isActive}
        >
            <QuoteIcon />
            <blockquote className="card-quote">
                <p>{quote}</p>
            </blockquote>
            <figcaption className="card-caption">
                <Avatar initials={initials} accent={accent} />
                <div className="caption-text">
                    <span className="caption-name">{name}</span>
                    <span className="caption-meta">
                        {role} · <span style={{ color: accent }}>{company}</span>
                    </span>
                </div>
                <span className="caption-metric" style={{ color: accent }}>
                    {metric}
                </span>
            </figcaption>
        </figure>
    );
}

function DotNav({ total, active, onSelect }) {
    return (
        <nav className="dot-nav" aria-label="Testimonial navigation">
            {Array.from({ length: total }, (_, i) => (
                <button
                    key={i}
                    className={`dot ${i === active ? "dot--active" : ""}`}
                    onClick={() => onSelect(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === active ? "true" : undefined}
                />
            ))}
        </nav>
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
    --cream:      #faf8f5;
  }

  /* ── Section ─────────────────────────────────────────────── */

  .testimonials-section {
    position: relative;
    background: var(--ink);
    padding: 7rem 0;
    overflow: hidden;
    isolation: isolate;
  }

  .testimonials-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 50% 60% at 20% 50%, rgba(219,39,64,0.06) 0%, transparent 65%),
      radial-gradient(ellipse 40% 50% at 80% 30%, rgba(163,195,200,0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  /* Grain overlay */
  .testimonials-section::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.02;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 128px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Inner ────────────────────────────────────────────────── */

  .testimonials-inner {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* ── Header ───────────────────────────────────────────────── */

  .testimonials-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }

  .testimonials-eyebrow {
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

  .testimonials-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.8vw, 2.8rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--cream);
    margin: 0;
  }

  .testimonials-heading em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet) 0%, var(--blush) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Carousel controls ────────────────────────────────────── */

  .carousel-controls {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    align-self: flex-end;
    padding-bottom: 0.15rem;
  }

  .ctrl-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    border: 1px solid rgba(250,248,245,0.1);
    background: transparent;
    color: rgba(250,248,245,0.4);
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
  }

  .ctrl-btn:hover {
    border-color: var(--scarlet);
    color: var(--cream);
    background: rgba(219,39,64,0.08);
  }

  .ctrl-btn:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
  }

  /* ── Stage ────────────────────────────────────────────────── */

  .carousel-stage {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5px;
    background: rgba(250,248,245,0.06);
    border: 1px solid rgba(250,248,245,0.06);
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 900px) {
    .carousel-stage { grid-template-columns: 1fr; }
  }

  /* ── Card ─────────────────────────────────────────────────── */

  .testimonial-card {
    position: relative;
    background: #0f0e0e;
    padding: 2.2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 0;
    transition: background 0.25s ease, opacity 0.4s ease, transform 0.4s ease;
  }

  .testimonial-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(219,39,64,0.4) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card--active::before { opacity: 1; }
  .card--active { background: #141313; }

  .card--idle {
    opacity: 0.45;
  }

  @media (max-width: 900px) {
    .card--idle { display: none; }
    .card--active { opacity: 1; }
  }

  /* ── Quote icon ───────────────────────────────────────────── */

  .quote-icon {
    width: 20px;
    height: auto;
    color: rgba(219,39,64,0.25);
    flex-shrink: 0;
  }

  /* ── Quote text ───────────────────────────────────────────── */

  .card-quote {
    margin: 0;
    flex: 1;
  }

  .card-quote p {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(250,248,245,0.65);
    margin: 0;
  }

  /* ── Caption ──────────────────────────────────────────────── */

  .card-caption {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding-top: 1.25rem;
    border-top: 1px solid rgba(250,248,245,0.06);
  }

  .caption-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .caption-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    color: var(--cream);
    line-height: 1.2;
  }

  .caption-meta {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    font-weight: 300;
    color: rgba(250,248,245,0.35);
  }

  .caption-metric {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* ── Avatar ───────────────────────────────────────────────── */

  .avatar {
    position: relative;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
  }

  .avatar-initials {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(250,248,245,0.06);
    border: 1px solid rgba(250,248,245,0.1);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    color: rgba(250,248,245,0.55);
    letter-spacing: 0.05em;
  }

  .avatar-ring {
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    border: 1.5px solid var(--avatar-accent);
    opacity: 0.4;
  }

  /* ── Dot nav ──────────────────────────────────────────────── */

  .dot-nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: none;
    background: rgba(250,248,245,0.15);
    cursor: pointer;
    padding: 0;
    transition: background 0.2s, width 0.25s cubic-bezier(0.4,0,0.2,1), border-radius 0.25s;
  }

  .dot--active {
    width: 22px;
    border-radius: 3px;
    background: var(--scarlet);
  }

  .dot:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
  }

  /* ── Progress bar ─────────────────────────────────────────── */

  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--scarlet), var(--blush));
    animation: progressFill var(--progress-duration, 5500ms) linear forwards;
    transform-origin: left;
  }

  @keyframes progressFill {
    from { width: 0%; }
    to   { width: 100%; }
  }

  /* ── Reduced motion ───────────────────────────────────────── */

  @media (prefers-reduced-motion: reduce) {
    .testimonial-card  { transition: opacity 0.1s; }
    .dot               { transition: none; }
    .progress-bar      { display: none; }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const [progressKey, setProgressKey] = useState(0);
    const timerRef = useRef(null);

    const total = TESTIMONIALS.length;

    const goTo = useCallback((index) => {
        setActive(index);
        setProgressKey((k) => k + 1);
    }, []);

    const prev = useCallback(() => goTo((active - 1 + total) % total), [active, goTo, total]);
    const next = useCallback(() => goTo((active + 1) % total), [active, goTo, total]);

    // Auto-advance
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setActive((a) => {
                const next = (a + 1) % total;
                setProgressKey((k) => k + 1);
                return next;
            });
        }, AUTO_INTERVAL);
        return () => clearInterval(timerRef.current);
    }, [total]);

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [prev, next]);

    // Visible window: active + two neighbours (wrapping)
    const visibleIndices = [
        (active - 1 + total) % total,
        active,
        (active + 1) % total,
    ];

    return (
        <section
            className="testimonials-section"
            aria-labelledby="testimonials-heading"
            aria-roledescription="carousel"
        >
            <style>{styles}</style>

            <div className="testimonials-inner">
                {/* ── Header ──────────────────────────────────────── */}
                <header className="testimonials-header">
                    <div>
                        <p className="testimonials-eyebrow">
                            <span className="eyebrow-dot" aria-hidden="true" />
                            Client Stories
                        </p>
                        <h2 className="testimonials-heading" id="testimonials-heading">
                            Proof in every <em>result</em>
                        </h2>
                    </div>

                    <div className="carousel-controls" aria-label="Carousel navigation">
                        <button className="ctrl-btn" onClick={prev} aria-label="Previous testimonial">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="ctrl-btn" onClick={next} aria-label="Next testimonial">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* ── Carousel stage ──────────────────────────────── */}
                <div
                    className="carousel-stage"
                    role="group"
                    aria-label={`Testimonial ${active + 1} of ${total}`}
                >
                    {visibleIndices.map((dataIndex, slot) => {
                        const t = TESTIMONIALS[dataIndex];
                        const isActive = slot === 1;
                        return (
                            <TestimonialCard
                                key={`${t.id}-${slot}`}
                                {...t}
                                isActive={isActive}
                            />
                        );
                    })}
                </div>

                {/* ── Dot nav + progress ──────────────────────────── */}
                <DotNav total={total} active={active} onSelect={goTo} />

                {/* Screen-reader live region */}
                <div aria-live="polite" aria-atomic="true" className="sr-only">
                    {`Testimonial ${active + 1} of ${total}: ${TESTIMONIALS[active].name}, ${TESTIMONIALS[active].company}`}
                </div>
            </div>

            {/* ── Progress bar ────────────────────────────────── */}
            <div
                key={progressKey}
                className="progress-bar"
                style={{ "--progress-duration": `${AUTO_INTERVAL}ms` }}
                aria-hidden="true"
            />
        </section>
    );
}