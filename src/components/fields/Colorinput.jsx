import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Color picker input field
 */
export default function ColorInput({
  label = 'Background Color',
  defaultValue = 'var(--color-accent)',
  disabled = false,
  required = false,
  size = 'md',
}) {
  const [value, setValue] = useState(defaultValue);
  const heights = { sm: 32, md: 40, lg: 48 };
  const h = heights[size] || 40;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: 6, fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)' }}>
          {label}{required && <span style={{ color: 'var(--color-danger)', marginLeft: 3 }}>*</span>}
        </label>
      )}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 0,
        border: '1px solid #d1d5db', borderRadius: 8, overflow: 'hidden',
        width: '100%', height: h,
        backgroundColor: disabled ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
        opacity: disabled ? 0.6 : 1,
      }}>
        <label style={{
          width: h, height: h, flexShrink: 0, cursor: disabled ? 'not-allowed' : 'pointer',
          position: 'relative', display: 'block',
        }}>
          <div style={{
            width: '100%', height: '100%',
            backgroundColor: value,
            borderRight: '1px solid #e5e7eb',
          }} />
          <input
            type="color"
            value={value}
            onChange={e => setValue(e.target.value)}
            disabled={disabled}
            style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
          />
        </label>
        <input
          type="text"
          value={value}
          onChange={e => {
            const v = e.target.value;
            if (/^#[0-9a-fA-F]{0,6}$/.test(v)) setValue(v);
          }}
          disabled={disabled}
          placeholder="#000000"
          style={{
            flex: 1, height: '100%', padding: '0 12px',
            border: 'none', outline: 'none',
            fontSize: 13, color: 'var(--color-text-secondary)', fontFamily: 'monospace',
            backgroundColor: 'transparent',
          }}
        />
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          backgroundColor: value, margin: '0 12px',
          border: '1px solid rgba(0,0,0,0.1)', flexShrink: 0,
        }} />
      </div>
    </div>
  );
}

ColorInput.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};