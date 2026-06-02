import { useEffect, useRef } from 'react';
import useDevice from '../hooks/useDevice.js';

// Injects a device-specific <p> element into the DOM AFTER load via plain JS
// (createElement + appendChild), not via JSX. This mirrors third-party scripts
// that mutate the page post-render, so the A/B editor can target them.
export default function JsInjected() {
  const device = useDevice();
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const config = {
      desktop: { id: 'desktop-js-element', text: 'Injected by Desktop JS' },
      tablet: { id: 'tablet-js-element', text: 'Injected by Tablet JS' },
      mobile: { id: 'mobile-js-element', text: 'Injected by Mobile JS' }
    }[device];

    // Clear any previously injected node (e.g. after a device switch)
    mount.innerHTML = '';

    // Simulate a deferred injection after page load
    const timer = setTimeout(() => {
      const el = document.createElement('p');
      el.id = config.id;
      el.className = 'js-injected';
      el.textContent = config.text;
      mount.appendChild(el);
    }, 600);

    return () => clearTimeout(timer);
  }, [device]);

  return (
    <section className="section section--tint">
      <div className="container text-center">
        <span className="eyebrow">Dynamic injection</span>
        <h2 className="section-title">JS-injected element</h2>
        <p className="section-sub">
          This block is added after load with vanilla JS. The id changes per device.
        </p>
        <div ref={mountRef} id={`${device}-js-mount`} style={{ marginTop: 18 }} />
      </div>
    </section>
  );
}
