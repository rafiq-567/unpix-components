import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Multi-step wizard progress indicator
 */
export default function StepperField({
  steps = ['Account Info', 'Personal Details', 'Review', 'Complete'],
  defaultStep = 1,
  orientation = 'horizontal',
  variant = 'numbered',
  allowNavigation = true,
}) {
  const [current, setCurrent] = useState(defaultStep);

  const isComplete = (i) => i < current;
  const isActive = (i) => i === current;

  const colors = {
    complete: { bg: 'var(--color-success)', text: 'var(--color-surface)', border: 'var(--color-success)' },
    active:   { bg: 'var(--color-accent)', text: 'var(--color-surface)', border: 'var(--color-accent)' },
    pending:  { bg: 'var(--color-surface)', text: 'var(--color-text-placeholder)', border: 'var(--color-text-disabled)' },
  };

  const getState = (i) => isComplete(i) ? 'complete' : isActive(i) ? 'active' : 'pending';

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 16, fontSize: 18, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Stepper</p>
      <div style={{
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        alignItems: orientation === 'vertical' ? 'flex-start' : 'center',
        gap: orientation === 'vertical' ? 0 : 0,
      }}>
        {steps.map((step, i) => {
          const state = getState(i + 1);
          const c = colors[state];
          return (
            <div key={i} style={{
              display: 'flex',
              flexDirection: orientation === 'vertical' ? 'row' : 'column',
              alignItems: 'center',
              flex: orientation === 'horizontal' ? 1 : undefined,
            }}>
              <div style={{
                display: 'flex',
                flexDirection: orientation === 'vertical' ? 'column' : 'column',
                alignItems: 'center',
              }}>
                <button
                  onClick={() => allowNavigation && setCurrent(i + 1)}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: `2px solid ${c.border}`,
                    backgroundColor: c.bg,
                    color: c.text,
                    fontSize: variant === 'numbered' ? 13 : 16,
                    fontWeight: 600,
                    cursor: allowNavigation ? 'pointer' : 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s',
                    zIndex: 1,
                  }}
                >
                  {variant === 'numbered'
                    ? (isComplete(i + 1) ? '✓' : i + 1)
                    : (isComplete(i + 1) ? '✓' : '●')}
                </button>
                {orientation === 'horizontal' && (
                  <span style={{
                    marginTop: 8,
                    fontSize: 11,
                    fontWeight: isActive(i + 1) ? 600 : 400,
                    color: isActive(i + 1) ? 'var(--color-accent-text)' : isComplete(i + 1) ? 'var(--color-success-text)' : 'var(--color-text-placeholder)',
                    textAlign: 'center',
                    maxWidth: 80,
                    lineHeight: 1.3,
                  }}>{step}</span>
                )}
              </div>
              {i < steps.length - 1 && (
                <div style={orientation === 'horizontal' ? {
                  flex: 1,
                  height: 2,
                  backgroundColor: isComplete(i + 1) ? 'var(--color-success)' : 'var(--color-border)',
                  margin: '-18px 0 0 0',
                  alignSelf: 'flex-start',
                  marginTop: 17,
                } : {
                  width: 2,
                  height: 32,
                  backgroundColor: isComplete(i + 1) ? 'var(--color-success)' : 'var(--color-border)',
                  margin: '0 0 0 17px',
                }} />
              )}
              {orientation === 'vertical' && (
                <span style={{
                  marginLeft: 12,
                  alignSelf: 'center',
                  fontSize: 13,
                  fontWeight: isActive(i + 1) ? 600 : 400,
                  color: isActive(i + 1) ? 'var(--color-accent-text)' : isComplete(i + 1) ? 'var(--color-success-text)' : 'var(--color-text-placeholder)',
                }}>{step}</span>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 24, display: 'flex', gap: 8 }}>
        <button
          onClick={() => current > 1 && setCurrent(current - 1)}
          disabled={current <= 1}
          style={{
            padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: 6,
            cursor: current <= 1 ? 'not-allowed' : 'pointer',
            fontSize: 13, color: current <= 1 ? 'var(--color-text-disabled)' : 'var(--color-text-secondary)', background: 'var(--color-surface)',
          }}
        >← Back</button>
        <button
          onClick={() => current < steps.length && setCurrent(current + 1)}
          disabled={current >= steps.length}
          style={{
            padding: '8px 16px', border: 'none', borderRadius: 6,
            cursor: current >= steps.length ? 'not-allowed' : 'pointer',
            fontSize: 13, color: 'var(--color-surface)',
            background: current >= steps.length ? 'var(--color-text-disabled)' : 'var(--color-accent)',
          }}
        >Next →</button>
      </div>
    </div>
  );
}

StepperField.propTypes = {
  /** Step labels */
  steps: PropTypes.arrayOf(PropTypes.string),
  /** Current active step (1-based) */
  defaultStep: PropTypes.number,
  /** Layout direction */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Step indicator style */
  variant: PropTypes.oneOf(['numbered', 'dot']),
  /** Allow clicking steps to navigate */
  allowNavigation: PropTypes.bool,
};