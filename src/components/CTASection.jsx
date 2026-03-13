import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────

const TRUST_SIGNALS = [
    { icon: "shield", label: "No long-term contracts" },
    { icon: "clock", label: "Response within 24 hrs" },
    { icon: "chart", label: "Results in 90 days" },
];

const SERVICES_QUICK = [
    "SEO",
    "Paid Ads",
    "Social Media",
    "Brand Strategy",
    "Web Dev",
    "Content",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TrustSignal({ icon, label }) {
    const icons = {
        shield: (
            <path
                d="M12 3L4 7v5c0 4.5 3.4 8.7 8 9.9 4.6-1.2 8-5.4 8-9.9V7L12 3Z"
                stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
            />
        ),
        clock: (
            <>
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
                <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </>
        ),
        chart: (
            <path
                d="M4 18l4-5 4 3 4-7 4 4"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
            />
        ),
    };

    return (
        <li className="trust-signal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {icons[icon]}
            </svg>
            <span>{label}</span>
        </li>
    );
}

function ServicePill({ label }) {
    return <span className="service-pill">{label}</span>;
}

function OrbitRing({ size, duration, reverse, children }) {
    return (
        <div
            className="orbit-ring"
            style={{
                width: size,
                height: size,
                animationDuration: duration,
                animationDirection: reverse ? "reverse" : "normal",
            }}
            aria-hidden="true"
        >
            {children}
        </div>
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

  .cta-section {
    position: relative;
    background: var(--ink);
    padding: 8rem 0;
    overflow: hidden;
    isolation: isolate;
  }

  /* ── Orbital background decoration ───────────────────────── */

  .cta-orbits {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 0;
  }

  .orbit-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(219,39,64,0.08);
    animation: orbitSpin linear infinite;
  }

  @keyframes orbitSpin {
    to { transform: rotate(360deg); }
  }

  /* Glow blobs */
  .cta-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  .blob-a {
    width: 45%;
    height: 60%;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(219,39,64,0.12) 0%, transparent 70%);
    animation: blobDrift 10s ease-in-out infinite alternate;
  }

  .blob-b {
    width: 30%;
    height: 40%;
    bottom: 0;
    left: 5%;
    background: radial-gradient(circle, rgba(163,195,200,0.07) 0%, transparent 70%);
    animation: blobDrift 13s ease-in-out infinite alternate-reverse;
  }

  @keyframes blobDrift {
    from { transform: translateX(-50%) scale(1); }
    to   { transform: translateX(-50%) scale(1.15) translateY(-12px); }
  }

  .blob-b { animation: blobDriftAlt 13s ease-in-out infinite alternate-reverse; }

  @keyframes blobDriftAlt {
    from { transform: scale(1); }
    to   { transform: scale(1.2) translate(10px, -10px); }
  }

  /* ── Inner ────────────────────────────────────────────────── */

  .cta-inner {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* ── Eyebrow ──────────────────────────────────────────────── */

  .cta-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--scarlet);
    margin-bottom: 1.5rem;
  }

  .eyebrow-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--scarlet);
    flex-shrink: 0;
  }

  /* ── Heading ──────────────────────────────────────────────── */

  .cta-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.025em;
    color: var(--cream);
    margin: 0 0 1.5rem;
    max-width: 16ch;
  }

  .cta-heading em {
    display: block;
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet) 0%, var(--blush) 55%, var(--mauve) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Sub-copy ─────────────────────────────────────────────── */

  .cta-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250,248,245,0.45);
    max-width: 44ch;
    margin: 0 0 2.8rem;
  }

  /* ── Service pills ────────────────────────────────────────── */

  .service-pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;
  }

  .service-pill {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    color: rgba(250,248,245,0.35);
    padding: 0.3rem 0.75rem;
    border: 1px solid rgba(250,248,245,0.08);
    border-radius: 100px;
    transition: color 0.2s, border-color 0.2s;
  }

  .service-pill:hover {
    color: var(--mauve);
    border-color: rgba(215,134,158,0.3);
  }

  /* ── CTA buttons ──────────────────────────────────────────── */

  .cta-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
    color: #fff;
    background: var(--scarlet);
    text-decoration: none;
    padding: 0.9rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 28px rgba(219,39,64,0.35);
    letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s, gap 0.2s;
  }

  .btn-primary:hover {
    background: var(--crimson);
    transform: translateY(-2px);
    box-shadow: 0 10px 36px rgba(156,13,28,0.45);
    gap: 0.8rem;
  }

  .btn-primary:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 8px;
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
    padding: 0.9rem 1.5rem;
    border-radius: 8px;
    border: 1px solid rgba(250,248,245,0.1);
    transition: color 0.2s, border-color 0.2s, gap 0.2s;
    letter-spacing: 0.02em;
  }

  .btn-ghost:hover {
    color: var(--cream);
    border-color: rgba(250,248,245,0.25);
    gap: 0.75rem;
  }

  .btn-ghost:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 8px;
  }

  /* ── Trust signals ────────────────────────────────────────── */

  .trust-signals {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .trust-signal {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 300;
    color: rgba(250,248,245,0.3);
    letter-spacing: 0.03em;
  }

  .trust-signal svg {
    color: rgba(250,248,245,0.2);
    flex-shrink: 0;
  }

  /* ── Divider rule ─────────────────────────────────────────── */

  .cta-rule {
    width: 1px;
    height: 80px;
    background: linear-gradient(to bottom, transparent, rgba(219,39,64,0.3), transparent);
    margin: 0 0 3rem;
    align-self: center;
  }

  /* ── Reduced motion ───────────────────────────────────────── */

  @media (prefers-reduced-motion: reduce) {
    .orbit-ring,
    .cta-blob    { animation: none; }
    .btn-primary,
    .btn-ghost   { transition: background 0.1s, color 0.1s; }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function CTASection() {
    return (
        <section className="cta-section" aria-labelledby="cta-heading">
            <style>{styles}</style>

            {/* ── Orbital background ──────────────────────────────── */}
            <div className="cta-orbits" aria-hidden="true">
                <OrbitRing size="500px" duration="40s">
                    <div style={{ position: "absolute", top: "-3px", left: "50%", width: "6px", height: "6px", borderRadius: "50%", background: "var(--scarlet)", transform: "translateX(-50%)", boxShadow: "0 0 8px var(--scarlet)" }} />
                </OrbitRing>
                <OrbitRing size="320px" duration="28s" reverse />
                <OrbitRing size="700px" duration="60s" reverse />
            </div>

            <div className="blob-a cta-blob" aria-hidden="true" />
            <div className="blob-b cta-blob" aria-hidden="true" />

            <div className="cta-inner">
                {/* ── Eyebrow ───────────────────────────────────────── */}
                <p className="cta-eyebrow">
                    <span className="eyebrow-dot" aria-hidden="true" />
                    Let's Build Something
                </p>

                {/* ── Headline ──────────────────────────────────────── */}
                <h2 className="cta-heading" id="cta-heading">
                    Ready to grow
                    <em>your business?</em>
                </h2>

                {/* ── Sub-copy ──────────────────────────────────────── */}
                <p className="cta-sub">
                    Tell us where you want to be. We'll build the digital strategy
                    to get you there — measurably, sustainably, and faster than
                    you expect.
                </p>

                {/* ── Service pills ──────────────────────────────────── */}
                <div className="service-pills" aria-label="Services we offer">
                    {SERVICES_QUICK.map((s) => (
                        <ServicePill key={s} label={s} />
                    ))}
                </div>

                {/* ── Vertical rule ─────────────────────────────────── */}
                <div className="cta-rule" role="separator" aria-hidden="true" />

                {/* ── Actions ───────────────────────────────────────── */}
                <nav className="cta-actions" aria-label="Get started">
                    <Link to="/contact" className="btn-primary">
                        Start your project
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <Link to="/projects" className="btn-ghost">
                        See our work
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                            <path d="M1 6.5h10M7 2l4.5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </nav>

                {/* ── Trust signals ──────────────────────────────────── */}
                <ul className="trust-signals" aria-label="Why work with us">
                    {TRUST_SIGNALS.map(({ icon, label }) => (
                        <TrustSignal key={label} icon={icon} label={label} />
                    ))}
                </ul>
            </div>
        </section>
    );
}