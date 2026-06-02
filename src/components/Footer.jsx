import useDevice from '../hooks/useDevice.js';

// Each device renders a <footer> with a different id, structure and text.
export default function Footer() {
  const device = useDevice();
  const year = 2026;

  // DESKTOP: rich 4-column footer
  if (device === 'desktop') {
    return (
      <footer id="desktop-footer" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand" style={{ color: '#fff' }}>
                <span className="brand-mark">N</span><span>Nimbus</span>
              </div>
              <p style={{ marginTop: 12, maxWidth: 280 }}>
                The desktop growth platform trusted by ambitious teams to scale revenue predictably.
              </p>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year} Nimbus Inc. — Desktop experience. All rights reserved.</span>
            <span>Privacy · Terms · Cookies</span>
          </div>
        </div>
      </footer>
    );
  }

  // TABLET: condensed 2-column footer
  if (device === 'tablet') {
    return (
      <footer id="tablet-footer" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4>Nimbus — Tablet</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Docs</a></li>
              </ul>
            </div>
            <div>
              <h4>Reach us</h4>
              <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">Sales</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year} Nimbus — Optimized for tablet.</span>
          </div>
        </div>
      </footer>
    );
  }

  // MOBILE: single centered stack with inline links
  return (
    <footer id="mobile-footer" className="footer">
      <div className="container">
        <div className="brand" style={{ color: '#fff', justifyContent: 'center' }}>
          <span className="brand-mark">N</span><span>Nimbus</span>
        </div>
        <nav className="footer-mobile-links" style={{ marginTop: 18 }}>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Support</a>
        </nav>
        <p style={{ marginTop: 18, fontSize: 13 }}>© {year} Nimbus · Mobile</p>
      </div>
    </footer>
  );
}
