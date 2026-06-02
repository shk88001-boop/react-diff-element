import useDevice from '../hooks/useDevice.js';

const STATS = [
  { num: '4,200+', label: 'Active companies' },
  { num: '180M', label: 'Events / day' },
  { num: '99.99%', label: 'Uptime SLA' },
  { num: '32%', label: 'Avg. revenue lift' }
];

// Stat band: desktop shows 4 across, tablet 2x2, mobile stacked.
export default function Statistics() {
  const device = useDevice();
  const wrapperId = `${device}-stats`;
  const gridClass = device === 'desktop' ? 'grid grid-4' : device === 'tablet' ? 'grid grid-2' : 'grid';

  return (
    <section className="section stats">
      <div className="container">
        <div id={wrapperId} className={gridClass}>
          {STATS.map((s) => (
            <div key={s.label} className={`stat ${device}-stat-item`}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
