import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Dropdown context menu with grouped items
 */
export default function MenuField({
  triggerLabel = 'Actions',
  items = [
    { label: 'Edit', icon: '✏️' },
    { label: 'Duplicate', icon: '📋' },
    { divider: true },
    { label: 'Share', icon: '🔗' },
    { divider: true },
    { label: 'Delete', icon: '🗑️', danger: true },
  ],
  placement = 'bottom-start',
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  const placements = {
    'bottom-start': { top: '100%', left: 0, marginTop: 4 },
    'bottom-end':   { top: '100%', right: 0, marginTop: 4 },
    'top-start':    { bottom: '100%', left: 0, marginBottom: 4 },
    'top-end':      { bottom: '100%', right: 0, marginBottom: 4 },
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Menu</p>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            padding: '8px 14px',
            border: '1px solid #d1d5db',
            borderRadius: 8,
            background: open ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          {triggerLabel}
          <span style={{
            display: 'inline-block',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.15s',
            fontSize: 10,
          }}>▼</span>
        </button>

        {open && (
          <div style={{
            position: 'absolute',
            ...placements[placement],
            backgroundColor: 'var(--color-surface)',
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            minWidth: 180,
            zIndex: 200,
            overflow: 'hidden',
            padding: '4px 0',
          }}>
            {items.map((item, i) =>
              item.divider ? (
                <div key={i} style={{ height: 1, backgroundColor: 'var(--color-bg-muted)', margin: '4px 0' }} />
              ) : (
                <button
                  key={i}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    width: '100%',
                    padding: '8px 14px',
                    border: 'none',
                    background: 'none',
                    cursor: item.disabled ? 'not-allowed' : 'pointer',
                    fontSize: 13,
                    color: item.danger ? 'var(--color-danger-text)' : item.disabled ? 'var(--color-text-disabled)' : 'var(--color-text-secondary)',
                    textAlign: 'left',
                    opacity: item.disabled ? 0.5 : 1,
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={e => { if (!item.disabled) e.target.style.backgroundColor = item.danger ? 'var(--color-danger-subtle)' : 'var(--color-bg-subtle)'; }}
                  onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; }}
                >
                  {item.icon && <span style={{ fontSize: 14 }}>{item.icon}</span>}
                  {item.label}
                  {item.shortcut && (
                    <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--color-text-placeholder)' }}>{item.shortcut}</span>
                  )}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

MenuField.propTypes = {
  /** Text on the trigger button */
  triggerLabel: PropTypes.string,
  /** Menu items */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string,
    shortcut: PropTypes.string,
    disabled: PropTypes.bool,
    danger: PropTypes.bool,
    divider: PropTypes.bool,
  })),
  /** Dropdown placement */
  placement: PropTypes.oneOf(['bottom-start', 'bottom-end', 'top-start', 'top-end']),
  /** Start in open state */
  defaultOpen: PropTypes.bool,
};