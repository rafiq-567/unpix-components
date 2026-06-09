import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Color picker with swatch palette and hex code display
 */
export default function ColorWithColorCode({
  label = 'Pick a Color',
  defaultValue = 'var(--color-accent)',
  swatches = ['var(--color-danger)','#f97316','var(--color-warning)','var(--color-success)','var(--color-accent)','#8b5cf6','#ec4899','#06b6d4','#64748b','var(--color-text-primary)'],
  showHex = true,
  showRgb = false,
}) {
  const [selected, setSelected] = useState(defaultValue);

  const hexToRgb = (hex) => {
    if (hex.startsWith('var(')) return 'Dynamic Theme Color';
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      {label && <label style={{ display: 'block', marginBottom: 10, fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)' }}>{label}</label>}
      <div style={{
        border: '1px solid var(--color-border)', borderRadius: 10, padding: 14,
        backgroundColor: 'var(--color-surface)', display: 'inline-block',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
          {swatches.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelected(color)}
              title={color}
              style={{
                width: 28, height: 28, borderRadius: 6,
                backgroundColor: color, border: 'none', cursor: 'pointer',
                outline: selected === color ? `3px solid ${color.startsWith('var(') ? 'var(--color-accent)' : color}` : '2px solid transparent',
                outlineOffset: 2,
                transform: selected === color ? 'scale(1.15)' : 'scale(1)',
                transition: 'all 0.15s',
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 8,
            backgroundColor: selected,
            border: '1px solid var(--color-border)',
            flexShrink: 0,
          }} />
          <div>
            {showHex && <p style={{ margin: '0 0 2px', fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>{selected.toUpperCase()}</p>}
            {showRgb && <p style={{ margin: 0, fontSize: 11, color: 'var(--color-text-placeholder)', fontFamily: 'monospace' }}>{hexToRgb(selected)}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

ColorWithColorCode.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  swatches: PropTypes.arrayOf(PropTypes.string),
  showHex: PropTypes.bool,
  showRgb: PropTypes.bool,
};