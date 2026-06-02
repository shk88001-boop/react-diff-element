import useDevice from '../hooks/useDevice.js';

// Hero renders completely different headline + CTA elements per device.
// Desktop / Tablet / Mobile each get unique ids and class names.
export default function Hero() {
  const device = useDevice();

  return (
    <section className="hero">
      <div className="hero-inner reveal">
        <span className="hero-pill">🚀 New · AI-powered growth suite</span>

        {device === 'desktop' && (
          <>
            <h1 id="desktop-hero-title">Grow Your Business Faster</h1>
            <p id="desktop-hero-sub">
              Nimbus gives desktop power users the full analytics workspace, deep funnels,
              and side-by-side experimentation to scale revenue with confidence.
            </p>
            <div className="hero-actions">
              <button className="desktop-cta-btn">Get Started</button>
              <button className="btn btn--ghost" id="desktop-hero-secondary">Watch demo →</button>
            </div>
            <p className="hero-trust">Trusted by 4,000+ teams on desktop workstations.</p>
          </>
        )}

        {device === 'tablet' && (
          <>
            <h1 id="tablet-hero-title">Grow Your Business</h1>
            <p id="tablet-hero-sub">
              A streamlined Nimbus workspace tuned for tablets — the metrics that matter,
              fewer clicks, ready when you are.
            </p>
            <div className="hero-actions">
              <button className="tablet-cta-btn">Start Today</button>
              <button className="btn btn--ghost" id="tablet-hero-secondary">See how →</button>
            </div>
            <p className="hero-trust">Optimized for tablet teams on the move.</p>
          </>
        )}

        {device === 'mobile' && (
          <>
            <h1 id="mobile-hero-title">Grow Faster</h1>
            <p id="mobile-hero-sub">Nimbus growth tools — right in your pocket.</p>
            <div className="hero-actions">
              <button className="mobile-cta-btn">Join Now</button>
            </div>
            <p className="hero-trust">Built mobile-first.</p>
          </>
        )}
      </div>
    </section>
  );
}
