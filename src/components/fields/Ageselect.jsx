import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Age selector dropdown with predefined age ranges
 */
export default function AgeSelect({
  label = 'Age Range',
  defaultValue = '',
  disabled = false,
  required = false,
  size = 'md',
}) {
  const [value, setValue] = useState(defaultValue);
  const ageRanges = [
    { value: '', label: 'Select age range' },
    { value: 'under18', label: 'Under 18' },
    { value: '18-24', label: '18 – 24' },
    { value: '25-34', label: '25 – 34' },
    { value: '35-44', label: '35 – 44' },
    { value: '45-54', label: '45 – 54' },
    { value: '55-64', label: '55 – 64' },
    { value: '65+', label: '65 and over' },
    { value: 'prefer-not', label: 'Prefer not to say' },
  ];

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
          color: value ? 'var(--color-text-secondary)' : 'var(--color-text-placeholder)',
          backgroundColor: disabled ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          outline: 'none',
          appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%236b7280' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          paddingRight: 32,
        }}
      >
        {ageRanges.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

AgeSelect.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};