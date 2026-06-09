import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Select dropdown with a pre-selected default value
 */
export default function DefaultSelect({
  label = 'Country',
  defaultValue = 'us',
  options = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
  ],
  disabled = false,
  required = false,
  helperText = '',
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
      <select
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={disabled}
        style={{
          width: '100%', height: h,
          padding: '0 12px',
          border: '1px solid #d1d5db',
          borderRadius: 8,
          fontSize: 13,
          color: 'var(--color-text-secondary)',
          backgroundColor: disabled ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          outline: 'none',
          appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%236b7280' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          paddingRight: 32,
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {helperText && <p style={{ margin: '4px 0 0', fontSize: 11, color: 'var(--color-text-muted)' }}>{helperText}</p>}
    </div>
  );
}

DefaultSelect.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};