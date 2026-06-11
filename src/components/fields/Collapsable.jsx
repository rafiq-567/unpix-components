import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Collapsable panel with toggle button
 */
export default function Collapsable({
  title = 'Collapsable',
  content = 'This is the collapsable content. It can contain any information you want to show or hide.',
  defaultOpen = false,
  icon = '▸',
  variant = 'default',
}) {
  const [open, setOpen] = useState(defaultOpen);

  const variants = {
    default: { bg: 'var(--color-surface)', border: 'var(--color-border)', headerBg: 'var(--color-bg-subtle)' },
    filled:  { bg: 'var(--color-bg-subtle)', border: 'var(--color-border)', headerBg: 'var(--color-bg-hover)' },
    ghost:   { bg: 'transparent', border: 'transparent', headerBg: 'transparent' },
  };
  const v = variants[variant] || variants.default;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <div style={{ border: `1px solid ${v.border}`, borderRadius: 8, overflow: 'hidden', backgroundColor: v.bg }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: '100%', padding: '12px 16px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: v.headerBg, border: 'none', cursor: 'pointer',
            fontSize: 14, fontWeight: 500, color: 'var(--color-text-secondary)', textAlign: 'left',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s', display: 'inline-block', color: 'var(--color-text-muted)',
            }}>{icon}</span>
            {title}
          </span>
          <span style={{ fontSize: 12, color: 'var(--color-text-placeholder)' }}>{open ? 'Hide' : 'Show'}</span>
        </button>
        {open && (
          <div style={{ padding: '12px 16px', borderTop: `1px solid ${v.border}`, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            {content}
          </div>
        )}
      </div>
    </div>
  );
}

Collapsable.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  defaultOpen: PropTypes.bool,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'filled', 'ghost']),
};