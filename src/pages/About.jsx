import useDevice from '../hooks/useDevice.js';
import Statistics from '../components/Statistics.jsx';
import Testimonials from '../components/Testimonials.jsx';
import HiddenBanners from '../components/HiddenBanners.jsx';
import CTA from '../components/CTA.jsx';

const VALUES = [
  { icon: '🎯', title: 'Customer obsessed', desc: 'Every decision starts with the people we serve.' },
  { icon: '🔭', title: 'Long-term thinking', desc: 'We build for the next decade, not the next quarter.' },
  { icon: '🤝', title: 'Radical transparency', desc: 'Open metrics, open roadmap, open communication.' }
];

// About page: device-specific hero heading + intro, then reused sections.
export default function About() {
  const device = useDevice();

  return (
    <main>
      <section className="hero">
        <div className="hero-inner reveal">
          <span className="hero-pill">🌟 Our story</span>
          {device === 'desktop' && <h1 id="desktop-about-title">Building the desktop growth platform of the future</h1>}
          {device === 'tablet' && <h1 id="tablet-about-title">Building the growth platform of the future</h1>}
          {device === 'mobile' && <h1 id="mobile-about-title">Our story</h1>}
          <p id={`${device}-about-intro`}>
            Founded in 2019, Nimbus helps thousands of teams turn raw data into confident
            decisions. We are a remote-first company spread across 14 countries.
          </p>
        </div>
      </section>

      <HiddenBanners />

      <section className="section">
        <div className="container text-center" style={{ marginBottom: 40 }}>
          <span className="eyebrow">What drives us</span>
          <h2 className="section-title">Our core values</h2>
        </div>
        <div className="container">
          <div id={`${device}-values-grid`} className={device === 'mobile' ? 'grid' : 'grid grid-3'}>
            {VALUES.map((v) => (
              <article key={v.title} className={`card ${device}-value-card reveal`}>
                <div className="card-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Statistics />
      <Testimonials />
      <CTA />
    </main>
  );
}
