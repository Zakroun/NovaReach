import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Footer.css"
const COMPANY_LINKS = [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
];
const SERVICE_LINKS = [
    { label: "SEO Optimization", to: "/services#seo" },
    { label: "Social Media Marketing", to: "/services#social" },
    { label: "Paid Advertising", to: "/services#ads" },
    { label: "Brand Strategy", to: "/services#brand" },
    { label: "Content Creation", to: "/services#content" },
    { label: "Web Development", to: "/services#web" },
];
const SOCIAL_LINKS = [
    { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
];
const LEGAL_LINKS = [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
];
function FooterLogo() {
    return (
        <Link to="/" className="footer-logo" aria-label="NovaReach Digital — home">
            <span className="logo-nova">Nova</span>
            <span className="logo-reach">Reach</span>
            <span className="logo-dot" aria-hidden="true" />
        </Link>
    );
}

function FooterColumn({ heading, children }) {
    return (
        <div className="footer-col">
            <h3 className="col-heading">{heading}</h3>
            {children}
        </div>
    );
}

function FooterNavList({ links }) {
    return (
        <ul className="footer-nav-list" role="list">
            {links.map(({ label, to }) => (
                <li key={to}>
                    <Link to={to} className="footer-nav-link">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

function SocialIcon({ icon: Icon, label, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`NovaReach on ${label}`}
            className="social-icon"
        >
            <Icon size={14} aria-hidden="true" />
        </a>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="footer-upper">
                <div className="footer-col">
                    <FooterLogo />
                    <p className="brand-body">
                        We help businesses grow online through data-driven strategies,
                        creative execution, and measurable results.
                    </p>
                    <Link to="/contact" className="brand-cta">
                        Start a project
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
                <FooterColumn heading="Company">
                    <FooterNavList links={COMPANY_LINKS} />
                </FooterColumn>
                <FooterColumn heading="Services">
                    <FooterNavList links={SERVICE_LINKS} />
                </FooterColumn>
                <FooterColumn heading="Connect">
                    <nav aria-label="Social media links">
                        <div className="social-row">
                            {SOCIAL_LINKS.map(({ icon, label, href }) => (
                                <SocialIcon key={label} icon={icon} label={label} href={href} />
                            ))}
                        </div>
                    </nav>
                    <div className="contact-blurb">
                        <p className="contact-label">Drop us a line</p>
                        <a href="mailto:hello@novareach.digital" className="contact-email">
                            hello@novareach.digital
                        </a>
                    </div>
                </FooterColumn>
            </div>
            <div className="footer-divider" role="separator" />
            <div className="footer-lower">
                <p className="footer-copy">
                    © {year} NovaReach Digital. All rights reserved.
                </p>
                <ul className="footer-legal" aria-label="Legal links">
                    {LEGAL_LINKS.map(({ label, to }) => (
                        <li key={to}>
                            <Link to={to}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}