import { useState, useId } from "react";
import "../styles/Contact.css";
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
export default function Contact() {
    const { fields, errors, set, toggleService, validate } = useForm(INITIAL_FORM);
    const [status, setStatus] = useState("idle");

    const nameId = useId();
    const emailId = useId();
    const companyId = useId();
    const budgetId = useId();
    const messageId = useId();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus("submitting");
        await new Promise((res) => setTimeout(res, 1400));
        setStatus("sent");
    };
    return (
        <section className="contact-section" aria-labelledby="contact-heading">
            <div className="contact-inner">
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
                <div className="contact-form-panel">
                    {status === "sent" ? (
                        <SuccessState />
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            aria-label="Contact form"
                        >
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