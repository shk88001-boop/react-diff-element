import useDevice from '../hooks/useDevice.js';

const QUOTES = [
  { name: 'Sara Lin', role: 'VP Growth, Flowbase', text: 'Nimbus paid for itself in the first month. Our experiment velocity tripled.' },
  { name: 'Marcus Reed', role: 'CEO, Loopwork', text: 'The clearest analytics product we have ever used. Onboarding took an afternoon.' },
  { name: 'Priya Nair', role: 'Head of Product, Castle', text: 'Device-level insights changed how we ship. We finally trust our numbers.' }
];

const initials = (name) => name.split(' ').map((p) => p[0]).join('');

// Intentionally different container tags per device:
//   desktop -> <div id="desktop-testimonials">
//   tablet  -> <section id="tablet-testimonials">
//   mobile  -> <ul id="mobile-testimonials">
export default function Testimonials() {
  const device = useDevice();

  const Header = (
    <div className="container text-center">
      <span className="eyebrow">Loved by teams</span>
      <h2 className="section-title">Don’t just take our word for it</h2>
      <p className="section-sub">Thousands of teams grow faster with Nimbus.</p>
    </div>
  );

  if (device === 'desktop') {
    return (
      <section className="section">
        {Header}
        <div className="container" style={{ marginTop: 40 }}>
          <div id="desktop-testimonials" className="grid grid-3">
            {QUOTES.map((q) => (
              <figure key={q.name} className="quote desktop-testimonial-card reveal">
                <div className="stars">★★★★★</div>
                <p>“{q.text}”</p>
                <figcaption className="quote-author">
                  <span className="avatar">{initials(q.name)}</span>
                  <span><strong>{q.name}</strong><br /><small>{q.role}</small></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (device === 'tablet') {
    return (
      <section className="section">
        {Header}
        <div className="container" style={{ marginTop: 40 }}>
          <section id="tablet-testimonials" className="grid grid-2">
            {QUOTES.map((q) => (
              <article key={q.name} className="quote tablet-testimonial-card reveal">
                <div className="stars">★★★★★</div>
                <p>“{q.text}”</p>
                <div className="quote-author">
                  <span className="avatar">{initials(q.name)}</span>
                  <span><strong>{q.name}</strong><br /><small>{q.role}</small></span>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>
    );
  }

  // mobile -> list structure
  return (
    <section className="section">
      {Header}
      <div className="container" style={{ marginTop: 30 }}>
        <ul id="mobile-testimonials">
          {QUOTES.map((q) => (
            <li key={q.name} className="mobile-testimonial-item reveal">
              <div className="stars">★★★★★</div>
              <p style={{ margin: '8px 0' }}>“{q.text}”</p>
              <div className="quote-author">
                <span className="avatar">{initials(q.name)}</span>
                <span><strong>{q.name}</strong> · <small>{q.role}</small></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
