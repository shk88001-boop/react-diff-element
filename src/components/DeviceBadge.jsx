import useDevice from '../hooks/useDevice.js';

// Small floating indicator so testers can see which device branch is active.
export default function DeviceBadge() {
  const device = useDevice();
  return (
    <div className="device-badge" id="active-device-badge" data-device={device}>
      <span className="device-dot" />
      {device.toUpperCase()}
    </div>
  );
}
