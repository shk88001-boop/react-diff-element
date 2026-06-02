import { useState } from 'react';
import useDevice from '../hooks/useDevice.js';

// Modal whose root element id + structure differs per device.
export default function Popup() {
  const device = useDevice();
  const [open, setOpen] = useState(false);

  const trigger = (
    <button className={`${device}-cta-btn`} id={`${device}-popup-trigger`} onClick={() => setOpen(true)}>
      Open {device} popup
    </button>
  );

  if (!open) {
    return (
      <section className="section text-center">
        <div className="container">
          <span className="eyebrow">Popup test</span>
          <h2 className="section-title">Device-specific modal</h2>
          <p className="section-sub" style={{ marginBottom: 22 }}>
            Each device opens a modal with a different root id and layout.
          </p>
          {trigger}
        </div>
      </section>
    );
  }

  // DESKTOP modal
  if (device === 'desktop') {
    return (
      <section className="section text-center">
        <div className="container">{trigger}</div>
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div id="desktop-popup" className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)}>✕</button>
            <span className="modal-badge">Desktop offer</span>
            <h3>Unlock the full desktop suite</h3>
            <p>Get 30 days of Nimbus Pro with every advanced report unlocked on desktop.</p>
            <div className="form-row">
              <button className="desktop-cta-btn" id="desktop-popup-accept">Claim offer</button>
              <button className="btn btn--dark" onClick={() => setOpen(false)}>No thanks</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // TABLET modal
  if (device === 'tablet') {
    return (
      <section className="section text-center">
        <div className="container">{trigger}</div>
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div id="tablet-popup" className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)}>✕</button>
            <span className="modal-badge">Tablet offer</span>
            <h3>Tablet starter boost</h3>
            <p>Activate Nimbus on your tablet and get priority onboarding.</p>
            <button className="tablet-cta-btn" id="tablet-popup-accept">Start now</button>
          </div>
        </div>
      </section>
    );
  }

  // MOBILE modal
  return (
    <section className="section text-center">
      <div className="container">{trigger}</div>
      <div className="modal-overlay" onClick={() => setOpen(false)}>
        <div id="mobile-popup" className="modal-card" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setOpen(false)}>✕</button>
          <span className="modal-badge">Mobile offer</span>
          <h3>Go mobile, grow faster</h3>
          <button className="mobile-cta-btn" id="mobile-popup-accept">Join now</button>
        </div>
      </div>
    </section>
  );
}
