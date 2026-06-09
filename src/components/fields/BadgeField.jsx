import PropTypes from 'prop-types';

/**
 * @uxpindescription Displays a small status badge or label chip
 */
export default function BadgeField({
  label = 'Badge',
  variant = 'default',
  size = 'md',
  dot = false,
  rounded = true,
}) {
  const variants = {
    default:  { bg: 'var(--color-bg-hover)', color: '#475569', border: '#cbd5e1' },
    primary:  { bg: 'var(--color-accent-subtle)', color: 'var(--color-accent-text)', border: 'var(--color-accent-subtle)' },
    success:  { bg: 'var(--color-success-subtle)', color: 'var(--color-success-text)', border: 'var(--color-success-subtle)' },
    warning:  { bg: 'var(--color-warning-subtle)', color: 'var(--color-warning-text)', border: 'var(--color-warning-subtle)' },
    danger:   { bg: 'var(--color-danger-subtle)', color: 'var(--color-danger-text)', border: 'var(--color-danger-subtle)' },
    info:     { bg: 'var(--color-info-subtle)', color: 'var(--color-accent-text)', border: 'var(--color-info-subtle)' },
  };

  const sizes = {
    sm: { fontSize: 11, padding: '2px 6px' },
    md: { fontSize: 12, padding: '3px 8px' },
    lg: { fontSize: 13, padding: '4px 10px' },
  };

  const v = variants[variant] || variants.default;
  const s = sizes[size] || sizes.md;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    backgroundColor: v.bg,
    color: v.color,
    border: `1px solid ${v.border}`,
    borderRadius: rounded ? 9999 : 4,
    fontSize: s.fontSize,
    fontWeight: 500,
    padding: s.padding,
    fontFamily: 'sans-serif',
    whiteSpace: 'nowrap',
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Badge</p>
      <span style={style}>
        {dot && (
          <span style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: v.color,
            flexShrink: 0,
          }} />
        )}
        {label}
      </span>
    </div>
  );
}

BadgeField.propTypes = {
  /** Badge label text */
  label: PropTypes.string,
  /** Visual variant */
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  /** Badge size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Show a status dot before the label */
  dot: PropTypes.bool,
  /** Pill shape vs rounded rect */
  rounded: PropTypes.bool,
};