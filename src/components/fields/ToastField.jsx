import PropTypes from 'prop-types';

/**
 * @uxpindescription Toast notification snackbar message
 */
export default function ToastField({
  message = 'Changes saved successfully!',
  variant = 'success',
  position = 'bottom-right',
  showAction = false,
  actionLabel = 'Undo',
  showClose = true,
}) {
  const variants = {
    success: { bg: 'var(--color-success-text)', icon: '✓' },
    error:   { bg: 'var(--color-danger-text)', icon: '✕' },
    warning: { bg: 'var(--color-warning-text)', icon: '⚠' },
    info:    { bg: 'var(--color-accent-text)', icon: 'ℹ' },
    default: { bg: 'var(--color-text-primary)', icon: null },
  };

  const positions = {
    'top-left':     { top: 16, left: 16 },
    'top-center':   { top: 16, left: '50%', transform: 'translateX(-50%)' },
    'top-right':    { top: 16, right: 16 },
    'bottom-left':  { bottom: 16, left: 16 },
    'bottom-center':{ bottom: 16, left: '50%', transform: 'translateX(-50%)' },
    'bottom-right': { bottom: 16, right: 16 },
  };

  const v = variants[variant] || variants.default;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Toast</p>
      <div style={{ position: 'relative', height: 80 }}>
        <div style={{
          position: 'absolute',
          ...positions[position],
          backgroundColor: v.bg,
          color: 'var(--color-surface)',
          borderRadius: 8,
          padding: '12px 16px',
          fontSize: 13,
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          maxWidth: 320,
          whiteSpace: 'nowrap',
          zIndex: 9999,
        }}>
          {v.icon && <span style={{ fontSize: 14, flexShrink: 0 }}>{v.icon}</span>}
          <span style={{ flex: 1 }}>{message}</span>
          {showAction && (
            <button style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: 4,
              color: 'var(--color-surface)',
              cursor: 'pointer',
              fontSize: 12,
              padding: '3px 8px',
              fontWeight: 600,
            }}>{actionLabel}</button>
          )}
          {showClose && (
            <button style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer', fontSize: 16, padding: 0, lineHeight: 1,
            }}>×</button>
          )}
        </div>
      </div>
    </div>
  );
}

ToastField.propTypes = {
  /** Toast message text */
  message: PropTypes.string,
  /** Visual variant */
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'default']),
  /** Screen position */
  position: PropTypes.oneOf(['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']),
  /** Show action button */
  showAction: PropTypes.bool,
  /** Action button label */
  actionLabel: PropTypes.string,
  /** Show close button */
  showClose: PropTypes.bool,
};