import { useState, useId } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICES_OPTIONS = [
    "SEO Optimization",
    "Paid Advertising",
    "Social Media Marketing",
    "Brand Strategy",
    "Web Development",
    "Content Marketing",
];

const BUDGET_OPTIONS = [
    "< $2,000 / mo",
    "$2,000 – $5,000 / mo",
    "$5,000 – $15,000 / mo",
    "$15,000+ / mo",
];

const CONTACT_DETAILS = [
    {
        id: "email",
        label: "Email",
        value: "hello@novareach.digital",
        href: "mailto:hello@novareach.digital",
        icon: (
            <path
                d="M3 8l9 6 9-6M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8M3 8a1 1 0 011-1h16a1 1 0 011 1"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
            />
        ),
    },
    {
        id: "phone",
        label: "Phone",
        value: "+1 (555) 012-3456",
        href: "tel:+15550123456",
        icon: (
            <path
                d="M6.6 2H9l1.5 4.5-2 1.2A11 11 0 0013.3 12l1.2-2L19 11.5v2.4a2 2 0 01-2.2 2C8.5 15.3 3.7 10.5 3.1 4.2A2 2 0 015 2h1.6Z"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
            />
        ),
    },
    {
        id: "location",
        label: "Office",
        value: "New York, NY",
        href: null,
        icon: (
            <>
                <path d="M12 22s-8-6.5-8-12a8 8 0 0116 0c0 5.5-8 12-8 12Z" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
            </>
        ),
    },
];

const INITIAL_FORM = {
    name: "",
    email: "",
    company: "",
    services: [],
    budget: "",
    message: "",
};

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useForm(initial) {
    const [fields, setFields] = useState(initial);
    const [errors, setErrors] = useState({});

    const set = (key, value) =>
        setFields((prev) => ({ ...prev, [key]: value }));

    const toggleService = (service) =>
        setFields((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));

    const validate = () => {
        const next = {};
        if (!fields.name.trim()) next.name = "Name is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Valid email required.";
        if (!fields.message.trim()) next.message = "Tell us about your project.";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    return { fields, errors, set, toggleService, validate, setErrors };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Field({ id, label, error, required, children }) {
    return (
        <div className={`field ${error ? "field--error" : ""}`}>
            <label className="field-label" htmlFor={id}>
                {label}
                {required && <span className="field-required" aria-hidden="true"> *</span>}
            </label>
            {children}
            {error && (
                <p className="field-error" role="alert" aria-live="polite">
                    {error}
                </p>
            )}
        </div>
    );
}

function ContactDetail({ label, value, href, icon }) {
    return (
        <li className="contact-detail">
            <span className="detail-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">{icon}</svg>
            </span>
            <div className="detail-text">
                <span className="detail-label">{label}</span>
                {href ? (
                    <a href={href} className="detail-value detail-value--link">{value}</a>
                ) : (
                    <span className="detail-value">{value}</span>
                )}
            </div>
        </li>
    );
}

function SuccessState() {
    return (
        <div className="success-state" role="status" aria-live="assertive">
            <div className="success-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="12" stroke="var(--scarlet)" strokeWidth="1.5" />
                    <path d="M8 14l4 4 8-8" stroke="var(--blush)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h3 className="success-title">Message sent.</h3>
            <p className="success-body">
                We'll review your brief and get back to you within one business day.
            </p>
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
    --ink-2:      #131212;
    --ink-3:      #1a1818;
    --cream:      #faf8f5;
  }

  /* ── Section ─────────────────────────────────────────────── */

  .contact-section {
    position: relative;
    background: var(--ink-2);
    padding: 7rem 0;
    overflow: hidden;
    isolation: isolate;
  }

  .contact-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 55% 50% at 100% 0%, rgba(219,39,64,0.06) 0%, transparent 65%),
      radial-gradient(ellipse 40% 40% at 0% 100%, rgba(163,195,200,0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  /* ── Inner ────────────────────────────────────────────────── */

  .contact-inner {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1.55fr;
    gap: 5rem;
    align-items: start;
  }

  @media (max-width: 900px) {
    .contact-inner {
      grid-template-columns: 1fr;
      gap: 3.5rem;
    }
  }

  /* ── Left column ──────────────────────────────────────────── */

  .contact-sidebar {
    position: sticky;
    top: 8rem;
  }

  .contact-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--scarlet);
    margin-bottom: 1.25rem;
  }

  .eyebrow-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--scarlet);
    flex-shrink: 0;
  }

  .contact-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--cream);
    margin: 0 0 1.25rem;
  }

  .contact-heading em {
    font-style: italic;
    background: linear-gradient(120deg, var(--scarlet) 0%, var(--blush) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .contact-subhead {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(250,248,245,0.45);
    max-width: 36ch;
    margin: 0 0 2.5rem;
  }

  /* ── Contact details ──────────────────────────────────────── */

  .contact-details {
    list-style: none;
    padding: 0;
    margin: 0 0 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .contact-detail {
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
  }

  .detail-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid rgba(250,248,245,0.08);
    background: rgba(250,248,245,0.03);
    color: rgba(250,248,245,0.35);
    flex-shrink: 0;
    margin-top: 1px;
  }

  .detail-text {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .detail-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(250,248,245,0.25);
  }

  .detail-value {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: rgba(250,248,245,0.65);
  }

  .detail-value--link {
    text-decoration: none;
    transition: color 0.2s;
  }

  .detail-value--link:hover { color: var(--cream); }

  .detail-value--link:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 2px;
    border-radius: 2px;
  }

  /* ── Sidebar rule ─────────────────────────────────────────── */

  .sidebar-rule {
    width: 100%;
    height: 1px;
    background: rgba(250,248,245,0.06);
    margin-bottom: 2rem;
  }

  .sidebar-tagline {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(250,248,245,0.15);
  }

  /* ── Form panel ───────────────────────────────────────────── */

  .contact-form-panel {
    background: var(--ink-3);
    border: 1px solid rgba(250,248,245,0.06);
    border-radius: 16px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 540px) {
    .contact-form-panel { padding: 1.75rem 1.25rem; }
  }

  /* ── Form grid ────────────────────────────────────────────── */

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  @media (max-width: 540px) {
    .form-row { grid-template-columns: 1fr; }
  }

  /* ── Field wrapper ────────────────────────────────────────── */

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .field-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(250,248,245,0.35);
  }

  .field-required {
    color: var(--scarlet);
  }

  .field-error {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    font-weight: 400;
    color: var(--blush);
    margin: 0;
  }

  /* ── Inputs ───────────────────────────────────────────────── */

  .input,
  .textarea,
  .select {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: var(--cream);
    background: rgba(250,248,245,0.04);
    border: 1px solid rgba(250,248,245,0.1);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.2s, background 0.2s;
    outline: none;
    appearance: none;
  }

  .input::placeholder,
  .textarea::placeholder {
    color: rgba(250,248,245,0.2);
  }

  .input:focus,
  .textarea:focus,
  .select:focus {
    border-color: rgba(219,39,64,0.5);
    background: rgba(250,248,245,0.06);
  }

  .field--error .input,
  .field--error .textarea {
    border-color: rgba(227,94,125,0.5);
  }

  .textarea {
    resize: vertical;
    min-height: 110px;
    line-height: 1.65;
  }

  .select {
    cursor: pointer;
    color: rgba(250,248,245,0.65);
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(250,248,245,0.3)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem;
  }

  /* ── Service toggles ──────────────────────────────────────── */

  .service-toggles {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .service-toggle {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: rgba(250,248,245,0.4);
    background: transparent;
    border: 1px solid rgba(250,248,245,0.1);
    border-radius: 6px;
    padding: 0.4rem 0.85rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }

  .service-toggle:hover {
    color: rgba(250,248,245,0.7);
    border-color: rgba(250,248,245,0.2);
  }

  .service-toggle--on {
    color: var(--cream);
    border-color: var(--scarlet);
    background: rgba(219,39,64,0.1);
  }

  .service-toggle:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 2px;
  }

  /* ── Submit button ────────────────────────────────────────── */

  .submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
    color: #fff;
    background: var(--scarlet);
    border: none;
    border-radius: 8px;
    padding: 0.95rem 2rem;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 4px 24px rgba(219,39,64,0.3);
    letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--crimson);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(156,13,28,0.4);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .submit-btn:focus-visible {
    outline: 2px solid var(--blush);
    outline-offset: 3px;
    border-radius: 8px;
  }

  .spinner {
    width: 14px;
    height: 14px;
    border: 1.5px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    flex-shrink: 0;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  .submit-note {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    font-weight: 300;
    color: rgba(250,248,245,0.2);
    text-align: center;
    margin-top: -0.5rem;
  }

  /* ── Success state ────────────────────────────────────────── */

  .success-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    padding: 3rem 2rem;
    animation: revealUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .success-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid rgba(219,39,64,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(219,39,64,0.06);
  }

  .success-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--cream);
    margin: 0;
  }

  .success-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(250,248,245,0.45);
    max-width: 36ch;
    margin: 0;
  }

  @keyframes revealUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Reduced motion ───────────────────────────────────────── */

  @media (prefers-reduced-motion: reduce) {
    .spinner        { animation: none; border-top-color: #fff; }
    .success-state  { animation: none; }
    .submit-btn     { transition: background 0.1s; }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Contact() {
    const { fields, errors, set, toggleService, validate } = useForm(INITIAL_FORM);
    const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "sent"

    const nameId = useId();
    const emailId = useId();
    const companyId = useId();
    const budgetId = useId();
    const messageId = useId();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("submitting");

        // Simulate async submission — swap for real endpoint
        await new Promise((res) => setTimeout(res, 1400));

        setStatus("sent");
    };

    return (
        <section className="contact-section" aria-labelledby="contact-heading">
            <style>{styles}</style>

            <div className="contact-inner">
                {/* ── Sidebar ───────────────────────────────────────── */}
                <aside className="contact-sidebar">
                    <p className="contact-eyebrow">
                        <span className="eyebrow-dot" aria-hidden="true" />
                        Get In Touch
                    </p>

                    <h2 className="contact-heading" id="contact-heading">
                        Let's start<br />
                        <em>a conversation</em>
                    </h2>

                    <p className="contact-subhead">
                        Share your goals and we'll come back with a clear plan — no
                        jargon, no hard sell, just honest strategy.
                    </p>

                    <ul className="contact-details" aria-label="Contact information">
                        {CONTACT_DETAILS.map(({ id, label, value, href, icon }) => (
                            <ContactDetail key={id} label={label} value={value} href={href} icon={icon} />
                        ))}
                    </ul>

                    <div className="sidebar-rule" role="separator" />

                    <p className="sidebar-tagline">
                        Growth-driven digital marketing since 2016
                    </p>
                </aside>

                {/* ── Form ──────────────────────────────────────────── */}
                <div className="contact-form-panel">
                    {status === "sent" ? (
                        <SuccessState />
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            aria-label="Contact form"
                        >
                            {/* Name + Email */}
                            <div className="form-row" style={{ marginBottom: "1.25rem" }}>
                                <Field id={nameId} label="Full name" error={errors.name} required>
                                    <input
                                        id={nameId}
                                        className="input"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Jane Smith"
                                        value={fields.name}
                                        onChange={(e) => set("name", e.target.value)}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? `${nameId}-err` : undefined}
                                    />
                                </Field>

                                <Field id={emailId} label="Work email" error={errors.email} required>
                                    <input
                                        id={emailId}
                                        className="input"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="jane@company.com"
                                        value={fields.email}
                                        onChange={(e) => set("email", e.target.value)}
                                        aria-invalid={!!errors.email}
                                    />
                                </Field>
                            </div>

                            {/* Company */}
                            <div style={{ marginBottom: "1.25rem" }}>
                                <Field id={companyId} label="Company">
                                    <input
                                        id={companyId}
                                        className="input"
                                        type="text"
                                        autoComplete="organization"
                                        placeholder="Acme Inc."
                                        value={fields.company}
                                        onChange={(e) => set("company", e.target.value)}
                                    />
                                </Field>
                            </div>

                            {/* Services */}
                            <div style={{ marginBottom: "1.25rem" }}>
                                <Field id="services" label="Services you're interested in">
                                    <div
                                        className="service-toggles"
                                        role="group"
                                        aria-label="Select services"
                                    >
                                        {SERVICES_OPTIONS.map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                className={`service-toggle ${fields.services.includes(s) ? "service-toggle--on" : ""}`}
                                                onClick={() => toggleService(s)}
                                                aria-pressed={fields.services.includes(s)}
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </Field>
                            </div>

                            {/* Budget */}
                            <div style={{ marginBottom: "1.25rem" }}>
                                <Field id={budgetId} label="Monthly budget">
                                    <select
                                        id={budgetId}
                                        className="select"
                                        value={fields.budget}
                                        onChange={(e) => set("budget", e.target.value)}
                                    >
                                        <option value="" disabled>Select a range…</option>
                                        {BUDGET_OPTIONS.map((b) => (
                                            <option key={b} value={b}>{b}</option>
                                        ))}
                                    </select>
                                </Field>
                            </div>

                            {/* Message */}
                            <div style={{ marginBottom: "1.75rem" }}>
                                <Field id={messageId} label="Tell us about your project" error={errors.message} required>
                                    <textarea
                                        id={messageId}
                                        className="textarea"
                                        placeholder="What are you trying to achieve? Where are you now vs. where you want to be?"
                                        value={fields.message}
                                        onChange={(e) => set("message", e.target.value)}
                                        aria-invalid={!!errors.message}
                                    />
                                </Field>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={status === "submitting"}
                                aria-busy={status === "submitting"}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <span className="spinner" aria-hidden="true" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Send message
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </>
                                )}
                            </button>
                            <p className="submit-note">
                                We typically respond within one business day.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}