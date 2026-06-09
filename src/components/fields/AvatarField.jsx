import PropTypes from 'prop-types';

/**
 * @uxpindescription Displays a user avatar with image or initials fallback
 */
export default function AvatarField({
  src = '',
  alt = 'User Avatar',
  initials = 'AB',
  size = 'md',
  shape = 'circle',
  status = 'none',
}) {
  const sizes = { sm: 32, md: 40, lg: 56, xl: 72 };
  const px = sizes[size] || 40;

  const statusColors = {
    online: 'var(--color-success)',
    offline: '#94a3b8',
    busy: 'var(--color-danger)',
    away: 'var(--color-warning)',
    none: 'transparent',
  };

  const borderRadius = shape === 'circle' ? '50%' : shape === 'rounded' ? '8px' : '4px';

  const containerStyle = {
    position: 'relative',
    display: 'inline-flex',
    width: px,
    height: px,
    flexShrink: 0,
  };

  const avatarStyle = {
    width: px,
    height: px,
    borderRadius,
    backgroundColor: 'var(--color-bg-muted)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: px * 0.35,
    fontWeight: 600,
    color: '#475569',
    overflow: 'hidden',
    border: '1px solid #cbd5e1',
    objectFit: 'cover',
  };

  const dotSize = Math.max(10, px * 0.26);
  const statusDotStyle = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: dotSize,
    height: dotSize,
    borderRadius: '50%',
    backgroundColor: statusColors[status] || 'transparent',
    border: '2px solid white',
    display: status === 'none' ? 'none' : 'block',
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Avatar</p>
      <div style={containerStyle}>
        {src ? (
          <img src={src} alt={alt} style={avatarStyle} />
        ) : (
          <div style={avatarStyle}>{initials.slice(0, 2).toUpperCase()}</div>
        )}
        <span style={statusDotStyle} />
      </div>
    </div>
  );
}

AvatarField.propTypes = {
  /** Image URL */
  src: PropTypes.string,
  /** Alt text for image */
  alt: PropTypes.string,
  /** Fallback initials (up to 2 chars) */
  initials: PropTypes.string,
  /** Avatar size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** Avatar shape */
  shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
  /** Online status indicator */
  status: PropTypes.oneOf(['none', 'online', 'offline', 'busy', 'away']),
};