import PropTypes from 'prop-types';

/**
 * @uxpindescription Floating Action Button with icon
 */
export default function FabIcon({
  icon = '+',
  color = 'primary',
  size = 'md',
  disabled = false,
  position = 'static',
  tooltip = 'Add',
  shape = 'circle',
}) {
  const colors = {
    primary: { bg: 'var(--color-accent)', hover: 'var(--color-accent-hover)', text: 'var(--color-surface)' },
    secondary: { bg: 'var(--color-text-muted)', hover: 'var(--color-text-secondary)', text: 'var(--color-surface)' },
    success:  { bg: 'var(--color-success)', hover: 'var(--color-success-text)', text: 'var(--color-surface)' },
    danger:   { bg: 'var(--color-danger)', hover: 'var(--color-danger-text)', text: 'var(--color-surface)' },
    warning:  { bg: 'var(--color-warning)', hover: 'var(--color-warning-text)', text: 'var(--color-surface)' },
  };

  const sizes = { sm: 40, md: 56, lg: 72 };
  const px = sizes[size] || 56;
  const c = colors[color] || colors.primary;

  const positionStyle = position === 'static' ? {} : {
    position: 'fixed', bottom: 24, right: 24, zIndex: 1000,
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontSize: 12, color: 'var(--color-text-placeholder)' }}>FAB — Icon</p>
      <button
        title={tooltip}
        disabled={disabled}
        style={{
          ...positionStyle,
          width: px, height: px,
          borderRadius: shape === 'circle' ? '50%' : shape === 'rounded' ? px * 0.25 : 8,
          backgroundColor: disabled ? 'var(--color-border)' : c.bg,
          color: disabled ? 'var(--color-text-placeholder)' : c.text,
          border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: px * 0.4,
          fontWeight: 300,
          boxShadow: disabled ? 'none' : '0 4px 14px rgba(0,0,0,0.25)',
          transition: 'all 0.2s',
        }}
      >
        {icon}
      </button>
    </div>
  );
}

FabIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  position: PropTypes.oneOf(['static', 'fixed']),
  tooltip: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
};