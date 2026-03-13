# NovaReach Digital — Marketing Agency Website

A modern, production-grade digital marketing agency website built with **React 18** and **Vite**. Features a fully custom design system, reusable component architecture, and a complete multi-page experience — all without any UI library dependency.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Routing | React Router v6 |
| Icons | react-icons |
| Styling | Template-literal CSS-in-JS (per-component `<style>` injection) |
| Fonts | Google Fonts (Playfair Display + DM Sans) |

---

## Project Structure

```
src/
├── /
│   layout/
│   ├── Navbar.jsx          # Fixed nav with scroll-aware backdrop + mobile drawer
│   └── Footer.jsx          # Four-column footer with marquee-compatible layout
│   components/               # Homepage sections (assembled in App.jsx)
│   ├── HeroSection.jsx             # Full-bleed hero with animated visual
│   ├── BrandsSection.jsx           # Infinite CSS marquee trust bar
│   ├── AboutSection.jsx            # Split-grid about section
│   ├── ServicesSection.jsx         # Six-service unified grid
│   ├── ProjectsSection.jsx         # Three featured case study cards
│   ├── TestimonialsSection.jsx     # Auto-advancing windowed carousel
│   └── CTASection.jsx              # Orbital-background closing CTA
│
├── pages/
│   ├── About.jsx            # Full about page: hero, timeline, values, team
│   ├── Home.jsx            # Full Home Page:navbar,HeroSection,BrandsSection,ServicesSectionAboutSection,ProjectsSection,TestimonialsSection,CTASection,Footer
│   ├── Projects.jsx         # Filterable case studies: featured + grid layouts
│   ├── Services.jsx         # Six services with split cards, process section
│   └── Contact.jsx              # Two-column contact form with validation
|   Styles/
│   ├── Navbar.css          
│   └── Footer.css            
│   ├── HeroSection.css             
│   ├── BrandsSection.css           
│   ├── AboutSection.css           
│   ├── ServicesSection.css         
│   ├── ProjectsSection.css         
│   ├── TestimonialsSection.css     
│   └── CTASection.css 
│   ├── About.css            
│   ├── Projects.css         
│   ├── Services.css       
│   └── Contact.css
│
└── main.jsx                     # App entry, router setup
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+ or pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/novareach-digital.git
cd novareach-digital

# Install dependencies
npm install

# Install icon library
npm install react-icons
```

### Development

```bash
npm run dev
```

Runs the app on [http://localhost:5173](http://localhost:5173) with hot module replacement.

### Build

```bash
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
```

### Lint

```bash
npm run lint
```

---

## Design System

All design tokens are defined as CSS custom properties on `:root` inside each component's `styles` template literal. No external stylesheet or CSS preprocessor required.

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--crimson` | `#9C0D1C` | Hover states, deep accents |
| `--scarlet` | `#DB2740` | Primary CTA, active states |
| `--blush` | `#E35E7D` | Gradients, icon accents |
| `--mauve` | `#D7869E` | Secondary text, logo |
| `--slate-teal` | `#A3C3C8` | Data metrics, teal accents |
| `--ink` | `#0e0d0d` | Page background |
| `--cream` | `#faf8f5` | Primary text, headings |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | Playfair Display | 700, 900, italic |
| Body / UI | DM Sans | 300, 400, 500 |

---

## Routing

```jsx
// main.jsx
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/"         element={<HomePage />} />
    <Route path="/about"    element={<AboutPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/contact"  element={<Contact />} />
  </Routes>
  <Footer />
</BrowserRouter>
```

All internal navigation uses `<Link>` from `react-router-dom`. External links use native `<a>` with `rel="noopener noreferrer"`.

---

## Component Patterns

### Per-card CSS custom property theming

Cards across Services, Projects, and Testimonials accept an `accent` prop that is injected as a CSS custom property. This allows a single hover rule to adapt across multiple visual elements without conditional class logic:

```jsx
<article style={{ "--card-accent": "var(--scarlet)" }} className="service-card">
  {/* border, icon, metric, and top-line all reference --card-accent */}
</article>
```

### Custom hooks

| Hook | File | Purpose |
|---|---|---|
| `useScrolled(threshold)` | `Navbar.jsx` | Returns `true` when `scrollY > threshold` — drives the scroll-aware backdrop |
| `useForm(initial)` | `Contact.jsx` | Centralises field state, validation, service toggles, and error management |

### Accessibility standards

- All interactive elements have `:focus-visible` outlines keyed to `var(--blush)`
- Carousels use `aria-roledescription="carousel"` and `aria-live="polite"` live regions
- Decorative visuals carry `aria-hidden="true"` throughout
- Form fields are associated via `useId()`-generated IDs — collision-safe in concurrent rendering
- All animations are disabled via `@media (prefers-reduced-motion: reduce)`

---

## Key Component Notes

### `Navbar`
- Transparent on load, transitions to frosted-glass dark on scroll via `useScrolled`
- Mobile drawer locks `document.body.overflow` and auto-closes on route change
- Keyboard: `ArrowLeft` / `ArrowRight` work on the testimonial carousel

### `Testimonials`
- Windowed carousel: always renders previous, active, and next cards
- 5,500ms auto-advance with a CSS `@keyframes` progress bar that resets on each slide
- Restarted via a `progressKey` increment — no JS width calculation

### `ProjectsPage`
- Category filter drives both the featured section and the grid simultaneously
- `aria-live="polite"` on count labels and empty state

### `Contact`
- Three-state submit: `"idle"` → `"submitting"` → `"sent"`
- On success, the form unmounts and `<SuccessState>` animates in with `role="status"`
- Swap the `setTimeout` in `handleSubmit` for a real `fetch` to wire up a backend

### `ServicesPage`
- Hero right column is a jump-link index — numbered `<a href="#service-id">` anchors
- Service cards use `scroll-margin-top: 100px` to clear the fixed navbar on anchor scroll
- Even-indexed cards flip visual/copy sides via `direction: rtl` on the article element

---

## Extending the Project

### Adding a new service

1. Add an entry to the `SERVICES` array in both `Services.jsx` (homepage section) and `ServicesPage.jsx`
2. Create a matching SVG visual component
3. Add an anchor link to the services hero jump-link index

### Adding a new case study

1. Add an entry to `PROJECTS` in both `Projects.jsx` and `ProjectsPage.jsx`
2. Mark `featured: true` to surface it in the featured section on the projects page
3. Create a matching `<svg>` data visual

### Connecting the contact form

Replace the mock delay in `Contact.jsx`:

```js
// Before
await new Promise((res) => setTimeout(res, 1400));

// After
await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(fields),
});
```

---

## Browser Support

Targets evergreen browsers. Uses `backdrop-filter` (with graceful fallback), CSS custom properties, and `@keyframes` — all broadly supported across Chrome, Firefox, Safari, and Edge.

---

## License

Private — all rights reserved. Not for redistribution.