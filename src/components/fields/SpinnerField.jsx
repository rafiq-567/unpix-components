import PropTypes from 'prop-types';

/**
 * @uxpindescription Loading spinner / activity indicator
 */
export default function SpinnerField({
  size = 'md',
  variant = 'border',
  color = 'blue',
  label = 'Loading...',
  showLabel = true,
  centered = false,
}) {
  const sizes = { sm: 20, md: 32, lg: 48, xl: 64 };
  const px = sizes[size] || 32;
  const thickness = Math.max(2, px * 0.1);

  const colors = {
    blue: 'var(--color-accent)', green: 'var(--color-success)', red: 'var(--color-danger)',
    purple: '#8b5cf6', orange: '#f97316', gray: 'var(--color-text-muted)',
  };
  const c = colors[color] || colors.blue;

  const spinnerStyle = {
    border: variant === 'border'
      ? `${thickness}px solid #e5e7eb`
      : `${thickness}px dotted #e5e7eb`,
    borderTop: `${thickness}px solid ${c}`,
    borderRadius: '50%',
    width: px,
    height: px,
    animation: 'spin 0.8s linear infinite',
    display: 'inline-block',
    flexShrink: 0,
  };

  const dotsStyle = () => (
    <div style={{ display: 'flex', gap: px * 0.2, alignItems: 'center' }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          width: px * 0.22,
          height: px * 0.22,
          borderRadius: '50%',
          backgroundColor: c,
          animation: `bounce 0.6s ease-in-out ${i * 0.15}s infinite alternate`,
          display: 'inline-block',
        }} />
      ))}
    </div>
  );

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Spinner</p>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes bounce { 0% { transform: scale(0.7); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>
      <div style={{
        display: 'flex',
        flexDirection: centered ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: centered ? 'center' : 'flex-start',
        gap: centered ? 12 : 10,
      }}>
        {variant === 'dots' ? dotsStyle() : <div style={spinnerStyle} />}
        {showLabel && (
          <span style={{ fontSize: Math.max(11, px * 0.35), color: 'var(--color-text-muted)' }}>{label}</span>
        )}
      </div>
    </div>
  );
}

SpinnerField.propTypes = {
  /** Spinner size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** Spinner animation style */
  variant: PropTypes.oneOf(['border', 'dotted', 'dots']),
  /** Spinner color */
  color: PropTypes.oneOf(['blue', 'green', 'red', 'purple', 'orange', 'gray']),
  /** Loading label text */
  label: PropTypes.string,
  /** Show text label */
  showLabel: PropTypes.bool,
  /** Center spinner and label */
  centered: PropTypes.bool,
};