import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────

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

// ─── Sub-components ───────────────────────────────────────────────────────────

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

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --crimson:    #9C0D1C;
    --scarlet:    #DB2740;
    --blush:      #E35E7D;
    --mauve:      #D7869E;
    --slate-teal: #A3C3C8;
    --ink:        #0e0d0d;
    --ink-2:      #151414;
    --cream:      #faf8f5;
  }

  /* ── Footer shell ─────────────────────────────────────────── */

  .site-footer {
    position: relative;
    background: var(--ink);
    overflow: hidden;
    isolation: isolate;
  }

  .site-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      var(--scarlet) 30%,
      var(--blush) 60%,
      transparent 100%
    );
    opacity: 0.5;
  }

  .site-footer::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -20%;
    width: 60%;
    height: 50%;
    background: radial-gradient(ellipse, rgba(156,13,28,0.07) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Upper section ────────────────────────────────────────── */

  .footer-upper {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 2rem 4rem;
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 960px) {
    .footer-upper {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
  }

  @media (max-width: 560px) {
    .footer-upper {
      grid-template-columns: 1fr;
    }
  }

  /* ── Logo ─────────────────────────────────────────────────── */

  .footer-logo {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    text-decoration: none;
    margin-bottom: 1.25rem;
  }

  .logo-nova {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--cream);
    letter-spacing: -0.02em;
  }

  .logo-reach {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--mauve);
    letter-spacing: -0.01em;
  }

  .logo-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--scarlet);
    box-shadow: 0 0 6px var(--scarlet);
    margin-left: 3px;
    align-self: flex-start;
    margin-top: 6px;
    flex-shrink: 0;
  }

  /* ── Brand column ─────────────────────────────────────────── */

  .brand-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250, 248, 245, 0.4);
    max-width: 28ch;
    margin: 0 0 1.75rem;
  }

  .brand-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--blush);
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: color 0.2s, gap 0.2s;
  }

  .brand-cta:hover {
    color: var(--cream);
    gap: 0.7rem;
  }

  .brand-cta:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* ── Columns ──────────────────────────────────────────────── */

  .footer-col {
    display: flex;
    flex-direction: column;
  }

  .col-heading {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(250, 248, 245, 0.3);
    margin: 0 0 1.25rem;
  }

  /* ── Nav lists ────────────────────────────────────────────── */

  .footer-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .footer-nav-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: rgba(250, 248, 245, 0.5);
    text-decoration: none;
    transition: color 0.18s ease;
    display: inline-block;
  }

  .footer-nav-link:hover {
    color: var(--cream);
  }

  .footer-nav-link:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* ── Social icons ─────────────────────────────────────────── */

  .social-row {
    display: flex;
    gap: 0.6rem;
    margin-bottom: 2rem;
  }

  .social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 8px;
    border: 1px solid rgba(250, 248, 245, 0.08);
    color: rgba(250, 248, 245, 0.45);
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
  }

  .social-icon:hover {
    color: var(--cream);
    border-color: var(--scarlet);
    background: rgba(219, 39, 64, 0.1);
    transform: translateY(-2px);
  }

  .social-icon:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
  }

  /* ── Contact blurb ────────────────────────────────────────── */

  .contact-blurb {
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(250, 248, 245, 0.06);
  }

  .contact-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(250, 248, 245, 0.2);
    margin-bottom: 0.35rem;
  }

  .contact-email {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    color: var(--slate-teal);
    text-decoration: none;
    transition: color 0.2s;
  }

  .contact-email:hover { color: var(--cream); }

  /* ── Divider ──────────────────────────────────────────────── */

  .footer-divider {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 1px;
    background: rgba(250, 248, 245, 0.06);
  }

  /* ── Lower bar ────────────────────────────────────────────── */

  .footer-lower {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .footer-copy {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.78rem;
    font-weight: 300;
    color: rgba(250, 248, 245, 0.22);
  }

  .footer-legal {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-legal a {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.78rem;
    font-weight: 300;
    color: rgba(250, 248, 245, 0.22);
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-legal a:hover { color: rgba(250, 248, 245, 0.5); }

  .footer-legal a:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <style>{styles}</style>

            <div className="footer-upper">
                {/* ── Brand ─────────────────────────────────────────── */}
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

                {/* ── Company ───────────────────────────────────────── */}
                <FooterColumn heading="Company">
                    <FooterNavList links={COMPANY_LINKS} />
                </FooterColumn>

                {/* ── Services ──────────────────────────────────────── */}
                <FooterColumn heading="Services">
                    <FooterNavList links={SERVICE_LINKS} />
                </FooterColumn>

                {/* ── Connect ───────────────────────────────────────── */}
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