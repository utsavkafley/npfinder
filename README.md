# outdors

A cinematic single-page app for exploring US National Park Service sites — built with React + Vite, styled with CSS Modules, powered by the [NPS API](https://www.nps.gov/subjects/developer/api-documentation.htm).

## Setup

```bash
npm install
cp .env.example .env   # add your API keys
npm run dev
```

**NPS API key** — free at [developer.nps.gov](https://www.nps.gov/subjects/developer/get-started.htm)  
**Stadia Maps key** — free tier at [stadiamaps.com](https://stadiamaps.com) (optional in dev; localhost works without a key)

## Stack

- **React 18** + **React Router 6**
- **Vite** (build tooling)
- **CSS Modules** + CSS custom properties (no framework)
- **Axios** (API requests)
- **NPS API** (parks data — all ~400+ NPS units)
- **MapLibre GL JS** + **Stadia Maps** (map view)
- **BBH Bartle** (brand font) + **Fraunces** (display) + **Inter** (body)
- **Vercel** (deployment)

---

## Roadmap

### Phase 1 — Foundation ✅
- Migrated CRA → Vite
- Removed Tailwind; replaced with CSS Modules + CSS custom properties
- API key moved to `.env`
- Fixed ParkDetail loading bug
- Removed dead files (Contact stub, CRA boilerplate)

### Phase 2 — Cinematic Redesign ✅
- Rebranded to **outdors** — expanded scope beyond National Parks
- Design system: Fraunces (display) + Inter (body), earthy token palette, dark mode
- Fluid single-page architecture: park detail as full-screen slide-up overlay
- Cinematic hero with Park of the Day (date-deterministic, rotates daily)
- Card grid: 4:3 aspect ratio, image zoom on hover, gradient name overlay
- Skeleton loaders, smooth CSS transitions
- Sticky glass-morphism header with dark mode toggle (persisted via localStorage)

### Phase 3 — Features ✅
- **Expanded scope** — all ~400+ NPS-managed units (monuments, seashores, historic sites, etc.)
- **Multi-facet filters** — designation type + state + live text search
- **Map view** — MapLibre GL JS, Stadia Maps outdoor tiles, clustered GeoJSON markers, theme-aware (light → outdoors style, dark → smooth dark)
- **Compare mode** — select up to 3 sites, side-by-side: image, location, entry fee, activities, description
- **BBH Bartle** brand font under logo in header
- Bundle code-split: MapLibre in its own lazy chunk (282KB gzip)
