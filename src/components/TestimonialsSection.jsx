import { useState, useEffect, useCallback, useRef } from "react";
import "../styles/TestimonialsSection.css";
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
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [prev, next]);
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
            <div className="testimonials-inner">
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
                <DotNav total={total} active={active} onSelect={goTo} />
                <div aria-live="polite" aria-atomic="true" className="sr-only">
                    {`Testimonial ${active + 1} of ${total}: ${TESTIMONIALS[active].name}, ${TESTIMONIALS[active].company}`}
                </div>
            </div>
            <div
                key={progressKey}
                className="progress-bar"
                style={{ "--progress-duration": `${AUTO_INTERVAL}ms` }}
                aria-hidden="true"
            />
        </section>
    );
}