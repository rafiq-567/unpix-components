import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Large collapsable panel with prominent header and rich content area
 */
export default function CollapsableBig({
  title = 'Advanced Settings',
  subtitle = 'Configure advanced options for your project',
  content = 'This large collapsable section contains more detailed content, settings, or information that is shown only when expanded.',
  defaultOpen = false,
  badge = '',
  accentColor = 'var(--color-accent)',
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <div style={{
        border: '1px solid var(--color-border)',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: open ? 'var(--shadow-sm)' : 'none',
        transition: 'box-shadow 0.2s',
      }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: '100%', padding: '20px 24px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: open ? 'var(--color-bg-subtle)' : 'var(--color-surface)', border: 'none', cursor: 'pointer', textAlign: 'left',
            borderLeft: `4px solid ${open ? accentColor : 'var(--color-border)'}`,
            transition: 'all 0.2s',
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</span>
              {badge && (
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 9999,
                  backgroundColor: 'var(--color-accent-subtle)', color: accentColor,
                }}>{badge}</span>
              )}
            </div>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-muted)' }}>{subtitle}</p>
          </div>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            border: `1.5px solid ${open ? accentColor : 'var(--color-border)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: open ? accentColor : 'var(--color-text-placeholder)', flexShrink: 0, marginLeft: 16,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'all 0.2s',
          }}>▾</div>
        </button>
        {open && (
          <div style={{
            padding: '20px 24px',
            borderTop: '1px solid var(--color-border)',
            fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7,
            backgroundColor: 'var(--color-bg-subtle)',
          }}>
            {content}
          </div>
        )}
      </div>
    </div>
  );
}

CollapsableBig.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  defaultOpen: PropTypes.bool,
  badge: PropTypes.string,
  accentColor: PropTypes.string,
};