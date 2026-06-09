import PropTypes from 'prop-types';

/**
 * @uxpindescription Displays an inline alert/banner message
 */
export default function AlertField({
  title = 'Alert Title',
  message = 'This is an alert message with important information.',
  variant = 'info',
  dismissible = false,
  icon = true,
}) {
  const variants = {
    info:    { bg: 'var(--color-accent-subtle)', border: '#93c5fd', title: 'var(--color-accent-text)', text: 'var(--color-accent-text)', icon: 'ℹ️' },
    success: { bg: 'var(--color-success-subtle)', border: 'var(--color-success)', title: 'var(--color-success-text)', text: 'var(--color-success-text)', icon: '✅' },
    warning: { bg: 'var(--color-warning-subtle)', border: 'var(--color-warning)', title: 'var(--color-warning-text)', text: 'var(--color-warning-text)', icon: '⚠️' },
    danger:  { bg: 'var(--color-danger-subtle)', border: 'var(--color-danger)', title: 'var(--color-danger-text)', text: 'var(--color-danger-text)', icon: '🚫' },
  };

  const v = variants[variant] || variants.info;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Alert</p>
      <div style={{
        backgroundColor: v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: 8,
        padding: '12px 16px',
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        position: 'relative',
      }}>
        {icon && <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{v.icon}</span>}
        <div style={{ flex: 1 }}>
          {title && (
            <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: 14, color: v.title }}>{title}</p>
          )}
          <p style={{ margin: 0, fontSize: 13, color: v.text, lineHeight: 1.5 }}>{message}</p>
        </div>
        {dismissible && (
          <button style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 16, color: v.text, padding: 0, lineHeight: 1,
          }}>×</button>
        )}
      </div>
    </div>
  );
}

AlertField.propTypes = {
  /** Alert headline */
  title: PropTypes.string,
  /** Alert body message */
  message: PropTypes.string,
  /** Visual variant */
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  /** Show dismiss button */
  dismissible: PropTypes.bool,
  /** Show leading icon */
  icon: PropTypes.bool,
};