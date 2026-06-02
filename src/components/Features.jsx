import useDevice from '../hooks/useDevice.js';

const FEATURES = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Sub-second dashboards built on a streaming data core.' },
  { icon: '🔒', title: 'Bank-grade Security', desc: 'SOC 2 Type II, SSO, and granular role permissions.' },
  { icon: '📊', title: 'Smart Analytics', desc: 'AI surfaces the trends and anomalies that matter.' },
  { icon: '🔌', title: '100+ Integrations', desc: 'Connect your stack in minutes, not weeks.' },
  { icon: '🤝', title: 'Team Collaboration', desc: 'Shared workspaces, comments, and live cursors.' },
  { icon: '🌍', title: 'Global Scale', desc: 'Multi-region infrastructure with 99.99% uptime.' }
];

// Feature grid uses a device-specific wrapper id and column count.
export default function Features() {
  const device = useDevice();
  const wrapperId = `${device}-features`;
  const gridClass = device === 'mobile' ? 'grid' : device === 'tablet' ? 'grid grid-2' : 'grid grid-3';

  return (
    <section className="section section--tint">
      <div className="container text-center">
        <span className="eyebrow">Why Nimbus</span>
        <h2 className="section-title">Everything you need to scale</h2>
        <p className="section-sub">One platform for analytics, experimentation, and growth.</p>
      </div>
      <div className="container" style={{ marginTop: 40 }}>
        <div id={wrapperId} className={gridClass}>
          {FEATURES.map((f) => (
            <article key={f.title} className={`card ${device}-feature-card reveal`}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
