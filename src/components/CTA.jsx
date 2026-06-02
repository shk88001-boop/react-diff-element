import useDevice from '../hooks/useDevice.js';

// CTA band with device-specific id, copy and button class.
export default function CTA() {
  const device = useDevice();

  const copy = {
    desktop: { id: 'desktop-cta', title: 'Ready to scale on the big screen?', sub: 'Spin up your full Nimbus workspace and explore every report in detail.', btn: 'desktop-cta-btn', label: 'Get Started Free' },
    tablet: { id: 'tablet-cta', title: 'Ready when you are', sub: 'Launch Nimbus on your tablet and keep momentum anywhere.', btn: 'tablet-cta-btn', label: 'Start Today' },
    mobile: { id: 'mobile-cta', title: 'Grow on the go', sub: 'Get Nimbus in your pocket.', btn: 'mobile-cta-btn', label: 'Join Now' }
  }[device];

  return (
    <section className="section">
      <div className="container">
        <div className="cta-band reveal" id={copy.id}>
          <h2>{copy.title}</h2>
          <p>{copy.sub}</p>
          <button className={copy.btn}>{copy.label}</button>
        </div>
      </div>
    </section>
  );
}
