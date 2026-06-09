import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Tab navigation for switching between content panels
 */
export default function TabsField({
  tabs = [
    { label: 'Overview', content: 'Overview panel content goes here.' },
    { label: 'Details', content: 'Details panel content goes here.' },
    { label: 'Settings', content: 'Settings panel content goes here.' },
    { label: 'History', content: 'History panel content goes here.', disabled: true },
  ],
  defaultTab = 0,
  variant = 'line',
  fullWidth = false,
}) {
  const [active, setActive] = useState(defaultTab);

  const variants = {
    line: {
      tabBar: { borderBottom: '1.5px solid #e5e7eb', display: 'flex', gap: 0 },
      tab: (isActive, isDisabled) => ({
        padding: '10px 18px',
        border: 'none',
        borderBottom: isActive ? '2px solid #3b82f6' : '2px solid transparent',
        marginBottom: -1.5,
        background: 'none',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontSize: 13,
        fontWeight: isActive ? 600 : 400,
        color: isActive ? 'var(--color-accent-text)' : isDisabled ? 'var(--color-text-disabled)' : 'var(--color-text-muted)',
        transition: 'all 0.15s',
        flex: fullWidth ? 1 : undefined,
        textAlign: 'center',
      }),
    },
    pills: {
      tabBar: { display: 'flex', gap: 4, backgroundColor: 'var(--color-bg-hover)', padding: 4, borderRadius: 8 },
      tab: (isActive, isDisabled) => ({
        padding: '7px 16px',
        border: 'none',
        borderRadius: 6,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontSize: 13,
        fontWeight: isActive ? 600 : 400,
        color: isActive ? 'var(--color-text-secondary)' : isDisabled ? 'var(--color-text-disabled)' : 'var(--color-text-muted)',
        backgroundColor: isActive ? 'var(--color-surface)' : 'transparent',
        boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.15s',
        flex: fullWidth ? 1 : undefined,
        textAlign: 'center',
      }),
    },
    boxed: {
      tabBar: { display: 'flex', gap: 0, border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' },
      tab: (isActive, isDisabled) => ({
        padding: '9px 18px',
        border: 'none',
        borderRight: '1px solid #e5e7eb',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontSize: 13,
        fontWeight: isActive ? 600 : 400,
        color: isActive ? 'var(--color-accent-text)' : isDisabled ? 'var(--color-text-disabled)' : 'var(--color-text-muted)',
        backgroundColor: isActive ? 'var(--color-accent-subtle)' : isDisabled ? '#fafafa' : 'var(--color-surface)',
        flex: fullWidth ? 1 : undefined,
        textAlign: 'center',
      }),
    },
  };

  const v = variants[variant] || variants.line;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Tabs</p>
      <div style={v.tabBar}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && setActive(i)}
            style={v.tab(active === i, tab.disabled)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{
        padding: '16px',
        fontSize: 13,
        color: 'var(--color-text-muted)',
        lineHeight: 1.6,
        border: variant !== 'line' ? 'none' : '1px solid #e5e7eb',
        borderTop: 'none',
        borderRadius: variant === 'line' ? '0 0 8px 8px' : 0,
      }}>
        {tabs[active]?.content}
      </div>
    </div>
  );
}

TabsField.propTypes = {
  /** Array of tab items */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    content: PropTypes.string,
    disabled: PropTypes.bool,
  })),
  /** Index of initially active tab */
  defaultTab: PropTypes.number,
  /** Tab style variant */
  variant: PropTypes.oneOf(['line', 'pills', 'boxed']),
  /** Stretch tabs to fill full width */
  fullWidth: PropTypes.bool,
};