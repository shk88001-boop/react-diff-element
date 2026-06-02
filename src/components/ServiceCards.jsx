import useDevice from '../hooks/useDevice.js';

const SERVICES = [
  { icon: '📈', title: 'Growth Analytics', price: '$49/mo', desc: 'Funnels, cohorts and retention out of the box.' },
  { icon: '🧪', title: 'A/B Experimentation', price: '$79/mo', desc: 'Run device-aware tests with statistical rigor.' },
  { icon: '🤖', title: 'AI Insights', price: '$99/mo', desc: 'Automated anomaly detection and recommendations.' },
  { icon: '🛠️', title: 'Custom Dashboards', price: '$39/mo', desc: 'Drag-and-drop boards tailored to each team.' },
  { icon: '📨', title: 'Lifecycle Messaging', price: '$59/mo', desc: 'Trigger campaigns from real-time behavior.' },
  { icon: '🔐', title: 'Enterprise Security', price: 'Custom', desc: 'SSO, audit logs and dedicated infrastructure.' }
];

// Service cards use a device-specific card class:
//   desktop-service-card / tablet-service-card / mobile-service-card
export default function ServiceCards() {
  const device = useDevice();
  const cardClass = `${device}-service-card`;
  const gridClass = device === 'mobile' ? 'grid' : device === 'tablet' ? 'grid grid-2' : 'grid grid-3';

  return (
    <section className="section">
      <div className="container text-center" style={{ marginBottom: 40 }}>
        <span className="eyebrow">Our services</span>
        <h2 className="section-title">Plans for every stage</h2>
        <p className="section-sub">Pick what you need today, scale up anytime.</p>
      </div>
      <div className="container">
        <div id={`${device}-services-grid`} className={gridClass}>
          {SERVICES.map((s) => (
            <div key={s.title} className={`${cardClass} reveal`}>
              <div className="card-icon">{s.icon}</div>
              <h3 style={{ margin: '0 0 6px' }}>{s.title}</h3>
              <p style={{ color: 'var(--c-muted)', margin: 0 }}>{s.desc}</p>
              <div className="svc-price">{s.price}</div>
              <button className={`${device}-cta-btn`} style={{ marginTop: 14 }}>Choose plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
