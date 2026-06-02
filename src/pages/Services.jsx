import useDevice from '../hooks/useDevice.js';
import ServiceCards from '../components/ServiceCards.jsx';
import HiddenBanners from '../components/HiddenBanners.jsx';
import RearrangeSection from '../components/RearrangeSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Popup from '../components/Popup.jsx';
import CTA from '../components/CTA.jsx';

// Services page: device-specific hero, the service cards grid, and the contact form.
export default function Services() {
  const device = useDevice();

  return (
    <main>
      <section className="hero">
        <div className="hero-inner reveal">
          <span className="hero-pill">🧩 Services</span>
          {device === 'desktop' && <h1 id="desktop-services-title">Powerful services for desktop teams</h1>}
          {device === 'tablet' && <h1 id="tablet-services-title">Services built for tablets</h1>}
          {device === 'mobile' && <h1 id="mobile-services-title">Our services</h1>}
          <p id={`${device}-services-intro`}>
            From analytics to experimentation, choose the plan that fits how your team works.
          </p>
        </div>
      </section>

      <HiddenBanners />
      <ServiceCards />
      <RearrangeSection />
      <Popup />
      <ContactForm />
      <CTA />
    </main>
  );
}
