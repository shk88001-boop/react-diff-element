import useDevice from '../hooks/useDevice.js';

// Same three blocks, different order per device:
//   Desktop: Image -> Content -> Button
//   Tablet:  Content -> Image -> Button
//   Mobile:  Button -> Content -> Image
export default function RearrangeSection() {
  const device = useDevice();

  const Image = (
    <div className="rearrange-img" id={`${device}-rearrange-image`} key="img">🖼️</div>
  );
  const Content = (
    <div className="rearrange-content" id={`${device}-rearrange-content`} key="content">
      <h3>Built to adapt to every screen</h3>
      <p>
        The order of these blocks is driven entirely by the active device, so an A/B
        editor can verify rearrangement behaviour across desktop, tablet and mobile.
      </p>
      <p className="order-tag">
        {device === 'desktop' && 'Order: Image → Content → Button'}
        {device === 'tablet' && 'Order: Content → Image → Button'}
        {device === 'mobile' && 'Order: Button → Content → Image'}
      </p>
    </div>
  );
  const Button = (
    <div key="btn" style={{ display: 'grid', placeItems: 'center' }}>
      <button className={`${device}-cta-btn`} id={`${device}-rearrange-button`}>
        Take the tour
      </button>
    </div>
  );

  const order = {
    desktop: [Image, Content, Button],
    tablet: [Content, Image, Button],
    mobile: [Button, Content, Image]
  }[device];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 36 }}>
          <span className="eyebrow">Layout test</span>
          <h2 className="section-title">Rearranged by device</h2>
        </div>
        <div className={`rearrange is-${device}`} id={`${device}-rearrange`}>
          {order}
        </div>
      </div>
    </section>
  );
}
