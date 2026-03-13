import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "../styles/Navbar.css";

const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
];
function useScrolled(threshold = 20) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > threshold);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);
    return scrolled;
}
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

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();
    const scrolled = useScrolled(20);
    const closeDrawer = useCallback(() => setDrawerOpen(false), []);
    const toggleDrawer = useCallback(() => setDrawerOpen((prev) => !prev), []);
    useEffect(() => { closeDrawer(); }, [location.pathname, closeDrawer]);
    useEffect(() => {
        document.body.style.overflow = drawerOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [drawerOpen]);
    return (
        <>
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