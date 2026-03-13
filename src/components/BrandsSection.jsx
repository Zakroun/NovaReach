import "../styles/BrandsSection.css";
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
const MARQUEE_ITEMS = [...BRANDS, ...BRANDS];
function BrandLogo({ name, svg }) {
    return (
        <li className="brand-item" title={name}>
            <span className="brand-svg" role="img" aria-label={name}>
                {svg}
            </span>
        </li>
    );
}

export default function BrandsSection() {
    return (
        <section className="brands-section" aria-label="Trusted by leading brands">
            
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