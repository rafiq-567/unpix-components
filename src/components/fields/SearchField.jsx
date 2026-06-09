import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Search input with icon, clear button, and optional suggestions
 */
export default function SearchField({
  placeholder = 'Search...',
  label = '',
  defaultValue = '',
  size = 'md',
  disabled = false,
  showClear = true,
  suggestions = ['Dashboard', 'Components', 'Settings', 'Users', 'Reports'],
  showSuggestions = false,
}) {
  const [value, setValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);

  const sizes = {
    sm: { height: 32, font: 12, icon: 14, pad: '0 10px' },
    md: { height: 40, font: 14, icon: 16, pad: '0 14px' },
    lg: { height: 48, font: 15, icon: 18, pad: '0 16px' },
  };
  const s = sizes[size] || sizes.md;

  const filtered = value
    ? suggestions.filter(s => s.toLowerCase().includes(value.toLowerCase()))
    : suggestions;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: 8, fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'inline-flex', width: '100%', maxWidth: 360 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: s.height,
          border: `1px solid ${focused ? 'var(--color-accent)' : 'var(--color-text-disabled)'}`,
          borderRadius: 8,
          backgroundColor: disabled ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
          padding: s.pad,
          gap: 8,
          boxShadow: focused ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
          transition: 'all 0.15s',
          opacity: disabled ? 0.6 : 1,
        }}>
          <svg width={s.icon} height={s.icon} viewBox="0 0 24 24" fill="none" stroke='var(--color-text-placeholder)' strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            placeholder={placeholder}
            disabled={disabled}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: s.font,
              color: 'var(--color-text-secondary)',
              background: 'transparent',
            }}
          />
          {showClear && value && (
            <button
              onClick={() => setValue('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-placeholder)', fontSize: 16, padding: 0, lineHeight: 1 }}
            >×</button>
          )}
        </div>

        {showSuggestions && focused && filtered.length > 0 && (
          <div style={{
            position: 'absolute',
            top: s.height + 4,
            left: 0,
            right: 0,
            background: 'var(--color-surface)',
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            zIndex: 100,
            overflow: 'hidden',
          }}>
            {filtered.map((sug, i) => (
              <button
                key={i}
                onMouseDown={() => setValue(sug)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%', padding: '9px 14px',
                  border: 'none', background: 'none', cursor: 'pointer',
                  fontSize: 13, color: 'var(--color-text-secondary)', textAlign: 'left',
                  borderBottom: i < filtered.length - 1 ? '1px solid #f3f4f6' : 'none',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke='var(--color-text-placeholder)' strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                {sug}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

SearchField.propTypes = {
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Field label */
  label: PropTypes.string,
  /** Default search value */
  defaultValue: PropTypes.string,
  /** Input size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Disable the input */
  disabled: PropTypes.bool,
  /** Show clear button */
  showClear: PropTypes.bool,
  /** Suggestion options */
  suggestions: PropTypes.arrayOf(PropTypes.string),
  /** Show dropdown suggestions */
  showSuggestions: PropTypes.bool,
};