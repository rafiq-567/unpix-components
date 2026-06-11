import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Numeric stepper input with increment/decrement controls
 */
export default function NumberInputField({
  label = 'Quantity',
  defaultValue = 1,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  prefix = '',
  suffix = '',
  size = 'md',
}) {
  const [value, setValue] = useState(defaultValue);

  const change = (delta) => {
    const next = value + delta;
    if (next >= min && next <= max) setValue(next);
  };

  const sizes = {
    sm: { height: 32, font: 12, btnW: 28 },
    md: { height: 40, font: 14, btnW: 36 },
    lg: { height: 48, font: 15, btnW: 44 },
  };

  const s = sizes[size] || sizes.md;

  const btnStyle = (isDisabled) => ({
    width: s.btnW,
    height: s.height,
    border: '1px solid var(--color-border-strong)',
    background: isDisabled
      ? 'var(--color-bg-subtle)'
      : 'var(--color-surface)',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    fontSize: 18,
    color: isDisabled
      ? 'var(--color-text-disabled)'
      : 'var(--color-text-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.2s ease',
  });

  return (
    <div style={{ padding: 16, fontFamily: 'inherit' }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: 8,
            fontSize: 16,
            fontWeight: 900,
            color: 'var(--color-text-secondary)',
          }}
        >
          {label}
        </label>
      )}

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          border: '1px solid var(--color-border-strong)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          opacity: disabled ? 0.6 : 1,
          backgroundColor: 'var(--color-surface)',
        }}
      >
        <button
          onClick={() => change(-step)}
          disabled={disabled || value <= min}
          style={{
            ...btnStyle(disabled || value <= min),
            borderRadius: '8px 0 0 8px',
            borderRight: 'none',
          }}
        >
          −
        </button>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderLeft: '1px solid var(--color-border-strong)',
            borderRight: '1px solid var(--color-border-strong)',
            height: s.height,
            padding: '0 12px',
            gap: 4,
            minWidth: 60,
            justifyContent: 'center',
            fontSize: s.font,
            color: 'var(--color-text-primary)',
            fontWeight: 500,
            backgroundColor: disabled
              ? 'var(--color-bg-subtle)'
              : 'var(--color-surface)',
          }}
        >
          {prefix && (
            <span
              style={{
                color: 'var(--color-text-placeholder)',
                fontSize: s.font - 1,
              }}
            >
              {prefix}
            </span>
          )}

          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (v >= min && v <= max) setValue(v);
            }}
            style={{
              border: 'none',
              outline: 'none',
              width: 48,
              textAlign: 'center',
              fontSize: s.font,
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              background: 'transparent',
              MozAppearance: 'textfield',
            }}
          />

          {suffix && (
            <span
              style={{
                color: 'var(--color-text-placeholder)',
                fontSize: s.font - 1,
              }}
            >
              {suffix}
            </span>
          )}
        </div>

        <button
          onClick={() => change(step)}
          disabled={disabled || value >= max}
          style={{
            ...btnStyle(disabled || value >= max),
            borderRadius: '0 8px 8px 0',
            borderLeft: 'none',
          }}
        >
          +
        </button>
      </div>

      <p
        style={{
          margin: '4px 0 0',
          fontSize: 11,
          color: 'var(--color-text-placeholder)',
        }}
      >
        Min: {min} · Max: {max}
      </p>
    </div>
  );
}

NumberInputField.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};