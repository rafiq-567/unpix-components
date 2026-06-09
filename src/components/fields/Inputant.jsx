import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Ant Design styled input with prefix/suffix addons
 */
export default function InputAnt({
  label = 'Username',
  placeholder = 'Enter username',
  defaultValue = '',
  prefix = '',
  suffix = '',
  addonBefore = '',
  addonAfter = '',
  disabled = false,
  status = 'default',
  size = 'md',
  allowClear = true,
  showCount = false,
  maxLength = 0,
}) {
  const [value, setValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);

  const statusColors = {
    default: focused ? 'var(--color-accent)' : 'var(--color-border)',
    error:   'var(--color-danger)',
    warning: 'var(--color-warning)',
  };

  const heights = { sm: 28, md: 36, lg: 44 };
  const h = heights[size] || 36;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      {label && <label style={{ display: 'block', marginBottom: 6, fontSize: 13, color: 'var(--color-text-primary)', fontWeight: 500 }}>{label}</label>}
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        {addonBefore && (
          <div style={{
            padding: '0 11px', backgroundColor: 'var(--color-bg-subtle)',
            border: `1px solid ${statusColors[status]}`, borderRight: 'none',
            borderRadius: '6px 0 0 6px', display: 'flex', alignItems: 'center',
            fontSize: 13, color: 'var(--color-text-muted)', whiteSpace: 'nowrap',
          }}>{addonBefore}</div>
        )}
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center',
          border: `1px solid ${statusColors[status]}`,
          borderRadius: addonBefore && addonAfter ? 0 : addonBefore ? '0 6px 6px 0' : addonAfter ? '6px 0 0 6px' : '6px',
          backgroundColor: disabled ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
          padding: '0 11px', height: h, gap: 8,
          boxShadow: focused ? `0 0 0 2px var(--color-accent-subtle)` : 'none',
          transition: 'all 0.2s',
        }}>
          {prefix && <span style={{ color: 'var(--color-text-placeholder)', fontSize: 13, flexShrink: 0 }}>{prefix}</span>}
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength || undefined}
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontSize: 13, color: 'var(--color-text-secondary)',
              backgroundColor: 'transparent',
              cursor: disabled ? 'not-allowed' : 'text',
            }}
          />
          {allowClear && value && (
            <button onClick={() => setValue('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-placeholder)', fontSize: 14, padding: 0 }}>✕</button>
          )}
          {suffix && <span style={{ color: 'var(--color-text-placeholder)', fontSize: 13, flexShrink: 0 }}>{suffix}</span>}
        </div>
        {addonAfter && (
          <div style={{
            padding: '0 11px', backgroundColor: 'var(--color-bg-subtle)',
            border: `1px solid ${statusColors[status]}`, borderLeft: 'none',
            borderRadius: '0 6px 6px 0', display: 'flex', alignItems: 'center',
            fontSize: 13, color: 'var(--color-text-muted)', whiteSpace: 'nowrap',
          }}>{addonAfter}</div>
        )}
      </div>
      {showCount && maxLength > 0 && (
        <div style={{ textAlign: 'right', marginTop: 4, fontSize: 11, color: 'var(--color-text-placeholder)' }}>
          {value.length} / {maxLength}
        </div>
      )}
    </div>
  );
}

InputAnt.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  addonBefore: PropTypes.string,
  addonAfter: PropTypes.string,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(['default', 'error', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  allowClear: PropTypes.bool,
  showCount: PropTypes.bool,
  maxLength: PropTypes.number,
};