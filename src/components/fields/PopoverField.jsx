import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Popover floating content panel triggered by a button
 */
export default function PopoverField({
  triggerLabel = 'Open Popover',
  title = 'Popover Title',
  content = 'This is the popover content. You can put any information here.',
  placement = 'bottom',
  showArrow = true,
  defaultOpen = false,
  width = 240,
}) {
  const [open, setOpen] = useState(defaultOpen);

  const placements = {
    bottom: { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
    top:    { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
    left:   { top: '50%', right: 'calc(100% + 8px)', transform: 'translateY(-50%)' },
    right:  { top: '50%', left: 'calc(100% + 8px)', transform: 'translateY(-50%)' },
  };

  const arrowPlacement = {
    bottom: { top: -6, left: '50%', transform: 'translateX(-50%)', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '6px solid var(--color-surface)', filter: 'drop-shadow(0 -1px 1px var(--color-border))' },
    top:    { bottom: -6, left: '50%', transform: 'translateX(-50%)', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid var(--color-surface)', filter: 'drop-shadow(0 1px 1px var(--color-border))' },
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontSize: 18, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Popover</p>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            padding: '8px 16px',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            background: open ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-bg-hover)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = open ? 'var(--color-bg-subtle)' : 'var(--color-surface)'}
        >
          {triggerLabel}
        </button>

        {open && (
          <div style={{
            position: 'absolute',
            ...placements[placement],
            width,
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 10,
            boxShadow: 'var(--shadow-lg)',
            zIndex: 400,
            padding: '14px 16px',
          }}>
            {showArrow && arrowPlacement[placement] && (
              <div style={{
                position: 'absolute',
                width: 0,
                height: 0,
                ...arrowPlacement[placement],
              }} />
            )}
            {title && (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 8,
              }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</p>
                <button
                  onClick={() => setOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-placeholder)', fontSize: 18, padding: 0, lineHeight: 1 }}
                >×</button>
              </div>
            )}
            <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

PopoverField.propTypes = {
  triggerLabel: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  placement: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  showArrow: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  width: PropTypes.number,
};