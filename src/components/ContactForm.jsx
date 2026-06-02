import { useState } from 'react';
import useDevice from '../hooks/useDevice.js';

// Each device renders a form with a distinct id and a different field arrangement.
//   Desktop: first + last name (row), email, company, message
//   Tablet:  full name, email, message
//   Mobile:  email + phone only
export default function ContactForm() {
  const device = useDevice();
  const [done, setDone] = useState(false);

  // No backend — just prevent default and show a confirmation state.
  const onSubmit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section className="section section--tint">
      <div className="container text-center" style={{ marginBottom: 30 }}>
        <span className="eyebrow">Get in touch</span>
        <h2 className="section-title">Contact our team</h2>
        <p className="section-sub">The form structure changes per device.</p>
      </div>

      <div className="container">
        {done ? (
          <div className="form-card text-center" id={`${device}-form-success`}>
            <div className="card-icon" style={{ margin: '0 auto 12px' }}>✅</div>
            <h3>Thanks! We’ll be in touch.</h3>
            <p style={{ color: 'var(--c-muted)' }}>Submitted from the {device} form.</p>
          </div>
        ) : (
          <>
            {device === 'desktop' && (
              <form id="desktop-contact-form" className="form-card" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="d-first">First name</label>
                    <input id="d-first" name="firstName" placeholder="Jane" required />
                  </div>
                  <div className="field">
                    <label htmlFor="d-last">Last name</label>
                    <input id="d-last" name="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="d-email">Work email</label>
                  <input id="d-email" type="email" name="email" placeholder="jane@company.com" required />
                </div>
                <div className="field">
                  <label htmlFor="d-company">Company</label>
                  <input id="d-company" name="company" placeholder="Acme Inc." />
                </div>
                <div className="field">
                  <label htmlFor="d-msg">How can we help?</label>
                  <textarea id="d-msg" name="message" rows="4" placeholder="Tell us about your goals..." />
                </div>
                <button className="desktop-cta-btn" type="submit">Send message</button>
              </form>
            )}

            {device === 'tablet' && (
              <form id="tablet-contact-form" className="form-card" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="t-name">Full name</label>
                  <input id="t-name" name="fullName" placeholder="Jane Doe" required />
                </div>
                <div className="field">
                  <label htmlFor="t-email">Email</label>
                  <input id="t-email" type="email" name="email" placeholder="jane@company.com" required />
                </div>
                <div className="field">
                  <label htmlFor="t-msg">Message</label>
                  <textarea id="t-msg" name="message" rows="3" placeholder="Your message..." />
                </div>
                <button className="tablet-cta-btn" type="submit">Send</button>
              </form>
            )}

            {device === 'mobile' && (
              <form id="mobile-contact-form" className="form-card" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="m-email">Email</label>
                  <input id="m-email" type="email" name="email" placeholder="you@email.com" required />
                </div>
                <div className="field">
                  <label htmlFor="m-phone">Phone</label>
                  <input id="m-phone" type="tel" name="phone" placeholder="+1 555 000 1234" />
                </div>
                <button className="mobile-cta-btn" type="submit">Contact me</button>
              </form>
            )}
          </>
        )}
      </div>
    </section>
  );
}
