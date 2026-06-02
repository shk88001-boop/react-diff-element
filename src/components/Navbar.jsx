import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useDevice from '../hooks/useDevice.js';

// Shared link set, but each device renders a structurally different <nav>.
const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' }
];

const Brand = () => (
  <NavLink to="/" className="brand" end>
    <span className="brand-mark">N</span>
    <span>Nimbus</span>
  </NavLink>
);

export default function Navbar() {
  const device = useDevice();
  console.log("device", device);
  const [open, setOpen] = useState(false);

  // DESKTOP: full inline links + a CTA on the right
  if (device === 'desktop') {
    return (
      <header className="nav-shell">
        <nav className="desktop-navbar nav-inner" aria-label="Desktop primary">
          <Brand />
          <ul className="nav-links" id="desktop-nav-links">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="desktop-cta-btn" id="desktop-nav-cta">Book a Demo</button>
        </nav>
      </header>
    );
  }

  // TABLET: links + a compact badge, no big CTA
  if (device === 'tablet') {
    return (
      <header className="nav-shell">
        <nav className="tablet-navbar nav-inner" aria-label="Tablet primary">
          <Brand />
          <ul className="nav-links" id="tablet-nav-links">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className="nav-badge" id="tablet-nav-badge">Tablet</span>
        </nav>
      </header>
    );
  }

  // MOBILE: hamburger-driven collapsible menu
  return (
    <header className="nav-shell">
      <nav className="mobile-navbar nav-inner" aria-label="Mobile primary">
        <Brand />
        <button
          className="hamburger"
          id="mobile-hamburger"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu" id="mobile-nav-menu">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
          <button className="mobile-cta-btn" id="mobile-nav-cta">Join Now</button>
        </div>
      )}
    </header>
  );
}
