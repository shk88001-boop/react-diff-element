import { useState, useEffect } from 'react';

// Breakpoints (per spec):
//   Desktop: > 1024px
//   Tablet:  768px - 1024px
//   Mobile:  < 768px
export const BREAKPOINTS = {
  mobileMax: 767,
  tabletMax: 1024
};

// Resolve a device label from a pixel width
export function resolveDevice(width) {
  if (width < 768) return 'mobile';
  if (width <= 1024) return 'tablet';
  return 'desktop';
}

// Custom hook that tracks the current device based on window.innerWidth.
// Re-evaluates on every window resize so the A/B editor can switch views live.
export default function useDevice() {
  const [device, setDevice] = useState(() =>
    typeof window === 'undefined' ? 'desktop' : resolveDevice(window.innerWidth)
  );

  useEffect(() => {
    let frame = null;
    const handleResize = () => {
      // rAF throttle so rapid resizes don't thrash React state
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setDevice(resolveDevice(window.innerWidth)));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return device;
}
