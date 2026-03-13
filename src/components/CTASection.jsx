import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CTASection.css";
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

export default function CTASection() {
    return (
        <section className="cta-section" aria-labelledby="cta-heading">
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
                <p className="cta-eyebrow">
                    <span className="eyebrow-dot" aria-hidden="true" />
                    Let's Build Something
                </p>
                <h2 className="cta-heading" id="cta-heading">
                    Ready to grow
                    <em>your business?</em>
                </h2>
                <p className="cta-sub">
                    Tell us where you want to be. We'll build the digital strategy
                    to get you there — measurably, sustainably, and faster than
                    you expect.
                </p>
                <div className="service-pills" aria-label="Services we offer">
                    {SERVICES_QUICK.map((s) => (
                        <ServicePill key={s} label={s} />
                    ))}
                </div>
                <div className="cta-rule" role="separator" aria-hidden="true" />
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
                <ul className="trust-signals" aria-label="Why work with us">
                    {TRUST_SIGNALS.map(({ icon, label }) => (
                        <TrustSignal key={label} icon={icon} label={label} />
                    ))}
                </ul>
            </div>
        </section>
    );
}