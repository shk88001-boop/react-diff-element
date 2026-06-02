# Nimbus — A/B Editor Device-Selector Test Site

A standalone React 18 + Vite + React Router demo SaaS website built to **test a Visual A/B Testing Editor** that supports **separate selectors for Desktop, Tablet and Mobile**.

Every major section renders **different HTML structure, ids and class names per device**, so you can verify device-specific targeting, content replacement, style changes, hide/show, rearrangement, JS-injected elements, popups and forms.

## Getting started

```bash
cd ab-testing-demo-site
npm install
npm run dev      # starts Vite on http://localhost:5180
```

Build for production:

```bash
npm run build
npm run preview
```

> No backend is required — everything is static. A floating badge (bottom-right) shows the active device branch.

## Device breakpoints

Detection uses a custom `useDevice()` hook reading `window.innerWidth` (re-evaluated on resize):

| Device  | Width            |
|---------|------------------|
| Desktop | `> 1024px`       |
| Tablet  | `768px – 1024px` |
| Mobile  | `< 768px`        |

Resize the browser (or use DevTools device toolbar) to switch branches — the DOM is re-rendered with new selectors.

## Pages

- `/` — Home (hero, banners, features, stats, rearrange, testimonials, JS-injected, popup, CTA)
- `/about` — About Us (story hero, values, stats, testimonials, CTA)
- `/services` — Services (hero, service cards, rearrange, popup, contact form, CTA)

## Project structure

```
ab-testing-demo-site/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx               # React 18 root + BrowserRouter
    ├── App.jsx                # Routes + Navbar/Footer/DeviceBadge
    ├── hooks/
    │   └── useDevice.js       # window.innerWidth -> 'desktop' | 'tablet' | 'mobile'
    ├── styles/
    │   └── global.css         # design tokens + all component styles
    ├── components/
    │   ├── Navbar.jsx         # desktop-navbar / tablet-navbar / mobile-navbar (hamburger)
    │   ├── Footer.jsx         # desktop-footer / tablet-footer / mobile-footer
    │   ├── Hero.jsx           # device hero titles + CTA buttons
    │   ├── Features.jsx
    │   ├── Statistics.jsx
    │   ├── Testimonials.jsx   # div / section / ul per device
    │   ├── CTA.jsx
    │   ├── ServiceCards.jsx   # desktop/tablet/mobile-service-card
    │   ├── HiddenBanners.jsx  # *-only-banner
    │   ├── RearrangeSection.jsx
    │   ├── JsInjected.jsx     # vanilla-JS injected <p> after load
    │   ├── Popup.jsx          # *-popup modal
    │   ├── ContactForm.jsx    # *-contact-form
    │   └── DeviceBadge.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        └── Services.jsx
```

## Selector reference (per device)

These ids/classes appear **only** on their device. Use them in the A/B editor to confirm device-scoped targeting.

| Area                | Desktop                     | Tablet                      | Mobile                      |
|---------------------|-----------------------------|-----------------------------|-----------------------------|
| Navbar              | `.desktop-navbar`           | `.tablet-navbar`            | `.mobile-navbar`            |
| Hero title          | `#desktop-hero-title`       | `#tablet-hero-title`        | `#mobile-hero-title`        |
| CTA button          | `.desktop-cta-btn`          | `.tablet-cta-btn`           | `.mobile-cta-btn`           |
| Testimonials root   | `#desktop-testimonials` (div) | `#tablet-testimonials` (section) | `#mobile-testimonials` (ul) |
| Service card        | `.desktop-service-card`     | `.tablet-service-card`      | `.mobile-service-card`      |
| Footer              | `#desktop-footer`           | `#tablet-footer`            | `#mobile-footer`            |
| JS-injected element | `#desktop-js-element`       | `#tablet-js-element`        | `#mobile-js-element`        |
| Hidden banner       | `#desktop-only-banner`      | `#tablet-only-banner`       | `#mobile-only-banner`       |
| Popup / modal       | `#desktop-popup`            | `#tablet-popup`             | `#mobile-popup`             |
| Contact form        | `#desktop-contact-form`     | `#tablet-contact-form`      | `#mobile-contact-form`      |
| Rearrange wrapper   | `#desktop-rearrange`        | `#tablet-rearrange`         | `#mobile-rearrange`         |

Plus many more granular selectors: `#desktop-hero-sub`, `#desktop-nav-cta`, `#tablet-nav-badge`, `#mobile-hamburger`, `#mobile-nav-menu`, `#*-features`, `#*-stats`, `#*-services-grid`, `#*-values-grid`, `#*-rearrange-image/content/button`, `#*-popup-trigger`, `#*-popup-accept`, `#*-about-title`, `#*-services-title`, `#active-device-badge`, and the per-card classes `.desktop-feature-card` / `.desktop-value-card` / `.desktop-testimonial-card` (and tablet/mobile equivalents) — **well over 40 unique selectors total.**

## What you can test

- ✅ Device-specific selector targeting
- ✅ Device-specific content replacement (different headline text per device)
- ✅ Device-specific style changes
- ✅ Device-specific element hide/show (`*-only-banner`)
- ✅ Device-specific rearrangement (image/content/button order)
- ✅ Device-specific JS-injected elements (added after load via `createElement`)
- ✅ Device-specific popup targeting
- ✅ Device-specific form targeting (different field arrangements)

## Rearrangement order (RearrangeSection)

| Device  | Order                        |
|---------|------------------------------|
| Desktop | Image → Content → Button     |
| Tablet  | Content → Image → Button     |
| Mobile  | Button → Content → Image     |
