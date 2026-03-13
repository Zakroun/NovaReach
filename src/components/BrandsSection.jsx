// ─── Constants ────────────────────────────────────────────────────────────────

const BRANDS = [
    {
        name: "Meridian",
        svg: (
            <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M28 16h16M52 8l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="68" y="21" fontFamily="serif" fontSize="14" fontWeight="700" fill="currentColor">meridian</text>
            </svg>
        ),
    },
    {
        name: "Luma Studio",
        svg: (
            <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="4" y="8" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <rect x="10" y="14" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <text x="34" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="300" letterSpacing="3" fill="currentColor">LUMA</text>
            </svg>
        ),
    },
    {
        name: "Vertex Labs",
        svg: (
            <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 8l12 16 12-16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="34" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="600" fill="currentColor">VERTEX</text>
                <text x="34" y="30" fontFamily="sans-serif" fontSize="7" fontWeight="300" letterSpacing="2" fill="currentColor">LABS</text>
            </svg>
        ),
    },
    {
        name: "Orin & Co",
        svg: (
            <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M16 4 C6 4, 4 26, 16 28 C28 26, 26 4, 16 4Z" stroke="currentColor" strokeWidth="1.5" />
                <text x="34" y="18" fontFamily="serif" fontSize="14" fontStyle="italic" fontWeight="700" fill="currentColor">Orin</text>
                <text x="70" y="18" fontFamily="sans-serif" fontSize="11" fontWeight="300" fill="currentColor">&amp; Co</text>
            </svg>
        ),
    },
    {
        name: "Kova Systems",
        svg: (
            <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 8v16M4 16l12-8M4 16l12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="24" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="500" letterSpacing="1" fill="currentColor">KOVA</text>
                <text x="62" y="21" fontFamily="sans-serif" fontSize="9" fontWeight="300" letterSpacing="2" fill="currentColor">SYSTEMS</text>
            </svg>
        ),
    },
    {
        name: "Solace",
        svg: (
            <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 20 Q10 4 16 16 Q22 28 28 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <text x="36" y="21" fontFamily="serif" fontSize="15" fontWeight="700" fontStyle="italic" fill="currentColor">Solace</text>
            </svg>
        ),
    },
    {
        name: "Archetype",
        svg: (
            <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M16 6L28 26H4L16 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <text x="36" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="300" letterSpacing="2" fill="currentColor">ARCHETYPE</text>
            </svg>
        ),
    },
    {
        name: "Fable",
        svg: (
            <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 10h14M6 16h10M6 22h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <text x="30" y="21" fontFamily="serif" fontSize="16" fontWeight="700" fill="currentColor">Fable</text>
            </svg>
        ),
    },
];

// Double the array so the marquee loop is seamless
const MARQUEE_ITEMS = [...BRANDS, ...BRANDS];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BrandLogo({ name, svg }) {
    return (
        <li className="brand-item" title={name}>
            <span className="brand-svg" role="img" aria-label={name}>
                {svg}
            </span>
        </li>
    );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

  :root {
    --crimson:    #9C0D1C;
    --scarlet:    #DB2740;
    --blush:      #E35E7D;
    --mauve:      #D7869E;
    --slate-teal: #A3C3C8;
    --ink:        #0e0d0d;
    --cream:      #faf8f5;
  }

  /* ── Section shell ────────────────────────────────────────── */

  .brands-section {
    position: relative;
    background: var(--ink);
    padding: 5rem 0;
    overflow: hidden;
    isolation: isolate;
  }

  .brands-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% 100%, rgba(163,195,200,0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ── Header ───────────────────────────────────────────────── */

  .brands-header {
    text-align: center;
    margin-bottom: 3.5rem;
    padding: 0 2rem;
  }

  .brands-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(250,248,245,0.3);
  }

  .eyebrow-rule {
    display: block;
    width: 1.5rem;
    height: 1px;
    background: var(--scarlet);
    opacity: 0.6;
    flex-shrink: 0;
  }

  /* ── Marquee wrapper ──────────────────────────────────────── */

  .marquee-wrapper {
    position: relative;
  }

  /* Left / right fade masks */
  .marquee-wrapper::before,
  .marquee-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 12rem;
    z-index: 2;
    pointer-events: none;
  }

  .marquee-wrapper::before {
    left: 0;
    background: linear-gradient(to right, var(--ink) 0%, transparent 100%);
  }

  .marquee-wrapper::after {
    right: 0;
    background: linear-gradient(to left, var(--ink) 0%, transparent 100%);
  }

  /* ── Marquee track ────────────────────────────────────────── */

  .marquee-track {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
    width: max-content;
    animation: marqueeScroll 36s linear infinite;
    gap: 0;
  }

  .marquee-track:hover {
    animation-play-state: paused;
  }

  @keyframes marqueeScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── Brand item ───────────────────────────────────────────── */

  .brand-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    border-right: 1px solid rgba(250,248,245,0.06);
    flex-shrink: 0;
    cursor: default;
  }

  .brand-svg {
    display: block;
    width: 120px;
    height: 32px;
    color: rgba(250,248,245,0.2);
    transition: color 0.3s ease;
  }

  .brand-svg svg {
    width: 100%;
    height: 100%;
  }

  .brand-item:hover .brand-svg {
    color: rgba(250,248,245,0.7);
  }

  /* ── Bottom stat strip ────────────────────────────────────── */

  .brands-stats {
    display: flex;
    justify-content: center;
    gap: 0;
    margin-top: 3.5rem;
    padding: 0 2rem;
    flex-wrap: wrap;
  }

  .brands-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    padding: 0 3rem;
    border-right: 1px solid rgba(250,248,245,0.07);
  }

  .brands-stat:last-child {
    border-right: none;
  }

  @media (max-width: 600px) {
    .brands-stat { border-right: none; padding: 1rem 2rem; }
  }

  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--cream);
    line-height: 1;
  }

  .stat-number em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet), var(--blush));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(250,248,245,0.3);
    white-space: nowrap;
  }

  /* ── Reduced motion ───────────────────────────────────────── */

  @media (prefers-reduced-motion: reduce) {
    .marquee-track { animation: none; }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function BrandsSection() {
    return (
        <section className="brands-section" aria-label="Trusted by leading brands">
            <style>{styles}</style>

            <header className="brands-header">
                <p className="brands-eyebrow">
                    <span className="eyebrow-rule" aria-hidden="true" />
                    Trusted by innovative companies worldwide
                    <span className="eyebrow-rule" aria-hidden="true" />
                </p>
            </header>

            <div className="marquee-wrapper" aria-hidden="true">
                <ul className="marquee-track">
                    {MARQUEE_ITEMS.map(({ name, svg }, i) => (
                        <BrandLogo key={`${name}-${i}`} name={name} svg={svg} />
                    ))}
                </ul>
            </div>

            <div className="brands-stats" role="list" aria-label="Agency milestones">
                {[
                    { number: "200", suffix: "+", label: "Brands Served" },
                    { number: "12", suffix: "M+", label: "Leads Generated" },
                    { number: "8", suffix: " yrs", label: "In the Industry" },
                    { number: "98", suffix: "%", label: "Retention Rate" },
                ].map(({ number, suffix, label }) => (
                    <div key={label} className="brands-stat" role="listitem">
                        <span className="stat-number">
                            {number}<em>{suffix}</em>
                        </span>
                        <span className="stat-desc">{label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}