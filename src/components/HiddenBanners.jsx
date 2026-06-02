import useDevice from '../hooks/useDevice.js';

// Only one banner exists in the DOM at a time, depending on the device.
// Lets the editor test device-specific show/hide targeting.
export default function HiddenBanners() {
  const device = useDevice();

  return (
    <div className="container" style={{ paddingTop: 28 }}>
      {device === 'desktop' && (
        <div id="desktop-only-banner" className="banner">
          🖥️ Desktop-only banner — exclusive workspace shortcuts are available on large screens.
        </div>
      )}
      {device === 'tablet' && (
        <div id="tablet-only-banner" className="banner">
          📱 Tablet-only banner — swipe through your dashboards in landscape mode.
        </div>
      )}
      {device === 'mobile' && (
        <div id="mobile-only-banner" className="banner">
          📲 Mobile-only banner — enable push alerts to never miss a spike.
        </div>
      )}
    </div>
  );
}
