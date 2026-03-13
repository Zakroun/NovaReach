import { Link } from "react-router-dom";
import "../styles/About.css";
const TIMELINE = [
    {
        year: "2016",
        title: "Founded in a Brooklyn loft",
        body: "Two strategists, one developer, and a conviction that most agencies optimise for retainers — not results.",
    },
    {
        year: "2018",
        title: "First $1M revenue milestone",
        body: "Grew to 12 specialists across paid media, SEO, and creative. Opened our first real office (with a standing desk policy).",
    },
    {
        year: "2020",
        title: "Remote-first, coast-to-coast",
        body: "Rebuilt as a distributed team. Hired the best people regardless of zip code. Performance didn't dip — it doubled.",
    },
    {
        year: "2022",
        title: "200+ brands served",
        body: "Expanded into brand strategy and web development. Named a top-25 performance agency by Marketing Insider.",
    },
    {
        year: "2024",
        title: "NovaReach Labs launched",
        body: "Launched our in-house R&D arm — building proprietary attribution tooling and AI-augmented creative workflows.",
    },
];

const VALUES = [
    {
        id: "v1",
        number: "01",
        title: "Results over optics",
        body: "We measure success in pipeline, revenue, and retention — not vanity metrics that look good in monthly reports.",
        accent: "var(--scarlet)",
    },
    {
        id: "v2",
        number: "02",
        title: "Radical transparency",
        body: "Full access to your data, your ad accounts, your dashboards. No black boxes. You own everything we build.",
        accent: "var(--blush)",
    },
    {
        id: "v3",
        number: "03",
        title: "Depth over breadth",
        body: "We deliberately limit our client roster. Every account gets a dedicated team — not a junior exec with 30 other clients.",
        accent: "var(--slate-teal)",
    },
    {
        id: "v4",
        number: "04",
        title: "Obsessive iteration",
        body: "Launch, measure, improve, repeat. Nothing we ship is final. We treat every campaign as a living experiment.",
        accent: "var(--mauve)",
    },
];

const TEAM = [
    {
        id: "tm1",
        name: "Alex Rivera",
        role: "Co-Founder & CEO",
        focus: "Growth strategy",
        initials: "AR",
        accent: "var(--scarlet)",
    },
    {
        id: "tm2",
        name: "Dana Osei",
        role: "Co-Founder & CTO",
        focus: "Engineering & data",
        initials: "DO",
        accent: "var(--slate-teal)",
    },
    {
        id: "tm3",
        name: "Mia Tanaka",
        role: "VP Creative",
        focus: "Brand & content",
        initials: "MT",
        accent: "var(--blush)",
    },
    {
        id: "tm4",
        name: "James Okafor",
        role: "Head of Paid Media",
        focus: "PPC & attribution",
        initials: "JO",
        accent: "var(--mauve)",
    },
    {
        id: "tm5",
        name: "Sara Lindqvist",
        role: "Head of SEO",
        focus: "Organic & technical",
        initials: "SL",
        accent: "var(--scarlet)",
    },
    {
        id: "tm6",
        name: "Ravi Menon",
        role: "Client Strategy Lead",
        focus: "Retention & growth",
        initials: "RM",
        accent: "var(--slate-teal)",
    },
];

const STATS = [
    { value: "40+", label: "Specialists" },
    { value: "200+", label: "Brands served" },
    { value: "18", label: "Industries" },
    { value: "98%", label: "Client retention" },
];

function Eyebrow({ children }) {
    return (
        <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {children}
        </p>
    );
}

function SectionHeading({ id, children }) {
    return (
        <h2 className="section-heading" id={id}>
            {children}
        </h2>
    );
}

function TimelineItem({ year, title, body, index }) {
    return (
        <div
            className="timeline-item"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="timeline-year" aria-label={`Year: ${year}`}>
                {year}
            </div>
            <div className="timeline-connector" aria-hidden="true">
                <span className="connector-dot" />
                <span className="connector-line" />
            </div>
            <div className="timeline-content">
                <h3 className="timeline-title">{title}</h3>
                <p className="timeline-body">{body}</p>
            </div>
        </div>
    );
}

function ValueCard({ number, title, body, accent, index }) {
    return (
        <article
            className="value-card"
            style={{ "--card-accent": accent, animationDelay: `${index * 0.08}s` }}
        >
            <span className="value-number" aria-hidden="true">
                {number}
            </span>
            <h3 className="value-title">{title}</h3>
            <p className="value-body">{body}</p>
            <span className="value-accent-line" aria-hidden="true" />
        </article>
    );
}

function TeamCard({ name, role, focus, initials, accent, index }) {
    return (
        <div
            className="team-card"
            style={{ "--card-accent": accent, animationDelay: `${index * 0.07}s` }}
        >
            <div className="team-avatar" aria-hidden="true">
                <span className="avatar-initials">{initials}</span>
                <div className="avatar-ring" />
            </div>
            <div className="team-info">
                <span className="team-name">{name}</span>
                <span className="team-role">{role}</span>
                <span className="team-focus">{focus}</span>
            </div>
        </div>
    );
}

function StatItem({ value, label }) {
    return (
        <div className="stat-item" role="listitem">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}

export default function About() {
    return (
        <main className="about-page">
            <section className="about-hero" aria-labelledby="about-hero-heading">
                <div className="hero-inner">
                    <div className="hero-copy">
                        <Eyebrow>Our Story</Eyebrow>
                        <h1 className="hero-headline" id="about-hero-heading">
                            An agency built
                            <em>on outcomes</em>
                        </h1>
                        <p className="hero-body">
                            We started NovaReach because we were tired of agencies that
                            optimise for billable hours over business results. Everything
                            we do — how we hire, how we report, how we charge — is built
                            around one question: did it grow your business?
                        </p>
                        <nav className="hero-actions" aria-label="About page actions">
                            <Link to="/contact" className="btn-primary">
                                Work with us
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                                    <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link to="/projects" className="btn-ghost">
                                See our work
                            </Link>
                        </nav>
                    </div>
                    <div className="hero-stats" role="list" aria-label="Agency at a glance">
                        {STATS.map(({ value, label }) => (
                            <StatItem key={label} value={value} label={label} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-divider" role="separator" />
            <section className="story-section" aria-labelledby="story-heading">
                <div className="inner">
                    <div className="story-header">
                        <Eyebrow>How we got here</Eyebrow>
                        <SectionHeading id="story-heading">
                            Eight years of <em>doing the work</em>
                        </SectionHeading>
                        <p className="story-lead">
                            We didn't grow through acquisition or VC funding. We grew by
                            delivering results that made clients stay — and refer.
                        </p>
                    </div>
                    <div className="timeline" role="list" aria-label="Company history">
                        {TIMELINE.map((item, i) => (
                            <TimelineItem key={item.year} {...item} index={i} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-divider" role="separator" />
            <section className="values-section" aria-labelledby="values-heading">
                <div className="inner">
                    <div className="values-header">
                        <div>
                            <Eyebrow>What we stand for</Eyebrow>
                            <SectionHeading id="values-heading">
                                Principles that <em>don't bend</em>
                            </SectionHeading>
                        </div>
                        <p className="values-sub">
                            Culture isn't a slide deck. These are the four commitments we
                            hold ourselves to — in every client call, every campaign, every
                            hire.
                        </p>
                    </div>
                    <div className="values-grid" role="list" aria-label="Company values">
                        {VALUES.map((v, i) => (
                            <ValueCard key={v.id} {...v} index={i} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-divider" role="separator" />
            <section className="team-section" aria-labelledby="team-heading">
                <div className="inner">
                    <div className="team-header">
                        <div>
                            <Eyebrow>The people</Eyebrow>
                            <SectionHeading id="team-heading">
                                Built by <em>specialists</em>
                            </SectionHeading>
                        </div>
                        <p className="team-sub">
                            No account managers. Every client works directly with the
                            practitioner executing their strategy.
                        </p>
                    </div>
                    <div className="team-grid" role="list" aria-label="Our team">
                        {TEAM.map((member, i) => (
                            <TeamCard key={member.id} {...member} index={i} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-divider" role="separator" />
            <section className="about-cta-section" aria-labelledby="about-cta-heading">
                <div className="cta-inner">
                    <Eyebrow>Ready?</Eyebrow>
                    <h2 className="cta-heading" id="about-cta-heading">
                        Let's build something<br />
                        <em>worth talking about</em>
                    </h2>
                    <p className="cta-body">
                        Tell us where you want to be. We'll tell you honestly if we
                        can get you there — and exactly how.
                    </p>
                    <nav className="cta-actions" aria-label="Get started">
                        <Link to="/contact" className="btn-primary">
                            Start a project
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                                <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link to="/services" className="btn-ghost">
                            Explore services
                        </Link>
                    </nav>
                </div>
            </section>
        </main>
    );
}