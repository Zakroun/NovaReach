import { Link } from "react-router-dom";
import "../styles/ServicesSection.css";
const SERVICES = [
    {
        id: "seo",
        title: "SEO Optimization",
        desc: "Climb search rankings organically and capture high-intent traffic before your competitors do.",
        metric: "↑ 214% avg. traffic",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 18l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "social",
        title: "Social Media Marketing",
        desc: "Build loyal communities and grow brand presence across every platform that matters to your audience.",
        metric: "3.2M+ reach/month",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="7" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="21" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="21" cy="21" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 12.5l8-4M10 15.5l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "ads",
        title: "Paid Advertising",
        desc: "Launch precision-targeted campaigns on Google and social platforms engineered to convert at scale.",
        metric: "4.8× avg. ROAS",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 20l6-8 5 5 4-6 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 8h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "brand",
        title: "Brand Strategy",
        desc: "Define a powerful identity and market position that resonates deeply and differentiates you from the noise.",
        metric: "98% client retention",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M14 4l2.5 7.5H24l-6.5 4.5 2.5 7.5L14 19l-6 4.5 2.5-7.5L4 11.5h7.5L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "web",
        title: "Web Development",
        desc: "Fast, modern websites architected to convert visitors into customers and reflect your brand at its best.",
        metric: "Sub-1s load times",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="3" y="5" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 10h22" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 15l3 3-3 3M15 21h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "content",
        title: "Content Marketing",
        desc: "Build authority and trust through editorial content, video, and storytelling that keeps your audience coming back.",
        metric: "6× engagement lift",
        icon: (
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 7h16M6 12h12M6 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="21" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M21 18v2l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
    },
];
function ServiceCard({ id, title, desc, metric, icon, index }) {
    return (
        <article
            className="service-card"
            style={{ animationDelay: `${index * 0.07}s` }}
            aria-labelledby={`service-${id}`}
        >
            <div className="card-icon-wrap" aria-hidden="true">
                {icon}
            </div>
            <div className="card-body">
                <h3 className="card-title" id={`service-${id}`}>
                    {title}
                </h3>
                <p className="card-desc">{desc}</p>
            </div>
            <footer className="card-footer">
                <span className="card-metric">{metric}</span>
                <Link
                    to={`/services#${id}`}
                    className="card-link"
                    aria-label={`Learn more about ${title}`}
                >
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </footer>
            <span className="card-glow" aria-hidden="true" />
        </article>
    );
}
export default function ServicesSection() {
    return (
        <section className="services-section" aria-labelledby="services-heading">
            <div className="services-inner">
                <header className="services-header">
                    <div className="header-left">
                        <p className="header-eyebrow">
                            <span className="eyebrow-dot" aria-hidden="true" />
                            What We Do
                        </p>
                        <h2 className="services-heading" id="services-heading">
                            Marketing that <em>moves</em><br />the needle
                        </h2>
                    </div>
                    <div className="header-right">
                        <p className="services-subhead">
                            We combine creativity and data-driven strategy to deliver
                            digital marketing solutions that generate real, measurable growth.
                        </p>
                        <Link to="/services" className="services-all-link">
                            View all services
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </header>
                <div
                    className="services-grid"
                    role="list"
                    aria-label="Our services"
                >
                    {SERVICES.map((service, i) => (
                        <ServiceCard key={service.id} {...service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}