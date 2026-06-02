import Hero from '../components/Hero.jsx';
import HiddenBanners from '../components/HiddenBanners.jsx';
import Features from '../components/Features.jsx';
import Statistics from '../components/Statistics.jsx';
import RearrangeSection from '../components/RearrangeSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import JsInjected from '../components/JsInjected.jsx';
import Popup from '../components/Popup.jsx';
import CTA from '../components/CTA.jsx';

// Home assembles the full marketing flow. Every section below renders
// device-specific selectors so the A/B editor has plenty to target.
export default function Home() {
  return (
    <main>
      <Hero />
      <HiddenBanners />
      <Features />
      <Statistics />
      <RearrangeSection />
      <Testimonials />
      <JsInjected />
      <Popup />
      <CTA />
    </main>
  );
}
