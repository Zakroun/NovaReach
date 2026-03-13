import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useScrolled(threshold = 20) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > threshold);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    return scrolled;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavLogo() {
    return (
        <Link to="/" className="nav-logo" aria-label="NovaReach Digital — home">
            <span className="logo-nova">Nova</span>
            <span className="logo-reach">Reach</span>
            <span className="logo-dot" aria-hidden="true" />
        </Link>
    );
}

function NavLink({ to, label, active, onClick }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            aria-current={active ? "page" : undefined}
            className={`nav-link ${active ? "nav-link--active" : ""}`}
        >
            {label}
            <span className="nav-link-underline" aria-hidden="true" />
        </Link>
    );
}

function MobileDrawer({ links, activePath, onClose }) {
    return (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />
            <nav className="drawer-panel">
                <ul className="drawer-links" role="list">
                    {links.map(({ label, to }, i) => (
                        <li key={to} style={{ animationDelay: `${i * 0.05}s` }}>
                            <Link
                                to={to}
                                onClick={onClose}
                                aria-current={activePath === to ? "page" : undefined}
                                className={`drawer-link ${activePath === to ? "drawer-link--active" : ""}`}
                            >
                                <span className="drawer-link-number">0{i + 1}</span>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link to="/contact" onClick={onClose} className="drawer-cta">
                    Get Started
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>

                <p className="drawer-tagline">Growth-driven digital marketing.</p>
            </nav>
        </div>
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
    --cream:      #faf8f5;
  }

  /* ── Header shell ─────────────────────────────────────────── */

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    transition: background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;
  }

  .site-header--transparent {
    background: transparent;
  }

  .site-header--scrolled {
    background: rgba(14, 13, 13, 0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 1px 0 rgba(250, 248, 245, 0.06);
  }

  /* ── Inner bar ────────────────────────────────────────────── */

  .nav-bar {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  /* ── Logo ─────────────────────────────────────────────────── */

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 1px;
    text-decoration: none;
    position: relative;
  }

  .logo-nova {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--cream);
    letter-spacing: -0.02em;
  }

  .logo-reach {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.35rem;
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

  /* ── Desktop nav ──────────────────────────────────────────── */

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 2.2rem;
  }

  @media (max-width: 820px) {
    .desktop-nav,
    .desktop-cta { display: none; }
  }

  .nav-link {
    position: relative;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    color: rgba(250, 248, 245, 0.55);
    text-decoration: none;
    padding: 0.25rem 0;
    transition: color 0.2s ease;
    letter-spacing: 0.01em;
  }

  .nav-link:hover,
  .nav-link--active {
    color: var(--cream);
  }

  .nav-link-underline {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, var(--scarlet), var(--blush));
    transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-link:hover .nav-link-underline,
  .nav-link--active .nav-link-underline {
    width: 100%;
  }

  .nav-link--active {
    font-weight: 500;
  }

  /* ── Desktop CTA ──────────────────────────────────────────── */

  .desktop-cta {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    padding: 0.6rem 1.4rem;
    border-radius: 6px;
    background: var(--scarlet);
    box-shadow: 0 3px 16px rgba(219, 39, 64, 0.3);
    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .desktop-cta:hover {
    background: var(--crimson);
    transform: translateY(-1px);
    box-shadow: 0 6px 22px rgba(156, 13, 28, 0.4);
  }

  .desktop-cta:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
  }

  /* ── Mobile toggle ────────────────────────────────────────── */

  .mobile-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(250, 248, 245, 0.12);
    border-radius: 8px;
    background: transparent;
    color: var(--cream);
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    flex-shrink: 0;
  }

  .mobile-toggle:hover {
    border-color: rgba(250, 248, 245, 0.25);
    background: rgba(250, 248, 245, 0.04);
  }

  .mobile-toggle:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
  }

  @media (max-width: 820px) {
    .mobile-toggle { display: flex; }
  }

  /* ── Mobile drawer ────────────────────────────────────────── */

  .mobile-drawer {
    position: fixed;
    inset: 0;
    z-index: 99;
    display: flex;
    justify-content: flex-end;
    animation: drawerFadeIn 0.25s ease both;
  }

  @keyframes drawerFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .drawer-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(14, 13, 13, 0.7);
    backdrop-filter: blur(4px);
  }

  .drawer-panel {
    position: relative;
    width: min(320px, 85vw);
    height: 100%;
    background: var(--ink);
    border-left: 1px solid rgba(250, 248, 245, 0.06);
    padding: 6rem 2rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 0;
    animation: panelSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
    overflow-y: auto;
  }

  @keyframes panelSlideIn {
    from { transform: translateX(100%); }
    to   { transform: translateX(0); }
  }

  /* ── Drawer links ─────────────────────────────────────────── */

  .drawer-links {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    display: flex;
    flex-direction: column;
  }

  .drawer-links li {
    animation: linkReveal 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes linkReveal {
    from { opacity: 0; transform: translateX(16px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .drawer-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(250, 248, 245, 0.05);
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    color: rgba(250, 248, 245, 0.5);
    transition: color 0.2s;
  }

  .drawer-link:hover,
  .drawer-link--active {
    color: var(--cream);
  }

  .drawer-link--active {
    font-weight: 500;
  }

  .drawer-link--active .drawer-link-number {
    color: var(--scarlet);
  }

  .drawer-link-number {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: rgba(250, 248, 245, 0.2);
    transition: color 0.2s;
    min-width: 20px;
  }

  /* ── Drawer CTA ───────────────────────────────────────────── */

  .drawer-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding: 0.9rem;
    background: var(--scarlet);
    color: #fff;
    border-radius: 8px;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 4px 20px rgba(219, 39, 64, 0.3);
    transition: background 0.2s;
  }

  .drawer-cta:hover {
    background: var(--crimson);
  }

  /* ── Drawer tagline ───────────────────────────────────────── */

  .drawer-tagline {
    margin-top: auto;
    padding-top: 2rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(250, 248, 245, 0.15);
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();
    const scrolled = useScrolled(20);

    const closeDrawer = useCallback(() => setDrawerOpen(false), []);
    const toggleDrawer = useCallback(() => setDrawerOpen((prev) => !prev), []);

    // Close drawer on route change
    useEffect(() => { closeDrawer(); }, [location.pathname, closeDrawer]);

    // Lock body scroll while drawer is open
    useEffect(() => {
        document.body.style.overflow = drawerOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [drawerOpen]);

    return (
        <>
            <style>{styles}</style>

            <header
                className={`site-header ${scrolled ? "site-header--scrolled" : "site-header--transparent"}`}
            >
                <div className="nav-bar">
                    <NavLogo />

                    <nav className="desktop-nav" aria-label="Primary navigation">
                        {NAV_LINKS.map(({ label, to }) => (
                            <NavLink
                                key={to}
                                to={to}
                                label={label}
                                active={location.pathname === to}
                            />
                        ))}
                    </nav>

                    <Link to="/contact" className="desktop-cta" aria-label="Get started with NovaReach">
                        Get Started
                    </Link>

                    <button
                        className="mobile-toggle"
                        onClick={toggleDrawer}
                        aria-expanded={drawerOpen}
                        aria-controls="mobile-nav"
                        aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
                    >
                        {drawerOpen ? <HiX size={18} /> : <HiMenu size={18} />}
                    </button>
                </div>
            </header>

            {drawerOpen && (
                <MobileDrawer
                    links={NAV_LINKS}
                    activePath={location.pathname}
                    onClose={closeDrawer}
                />
            )}
        </>
    );
}