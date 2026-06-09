import PropTypes from 'prop-types';

/**
 * @uxpindescription Group of overlapping avatars with overflow count
 */
export default function AvatarGroup({
  avatars = [
    { initials: 'JD', color: 'var(--color-accent)' },
    { initials: 'AL', color: '#8b5cf6' },
    { initials: 'MR', color: 'var(--color-success)' },
    { initials: 'KS', color: 'var(--color-warning)' },
    { initials: 'TP', color: 'var(--color-danger)' },
  ],
  max = 4,
  size = 'md',
  spacing = 'normal',
}) {
  const sizes = { sm: 28, md: 36, lg: 44, xl: 52 };
  const px = sizes[size] || 36;
  const overlap = spacing === 'tight' ? px * 0.5 : px * 0.35;
  const visible = avatars.slice(0, max);
  const extra = avatars.length - max;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 10, fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)' }}>Avatar Group</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {visible.map((av, i) => (
          <div
            key={i}
            title={av.name || av.initials}
            style={{
              width: px, height: px,
              borderRadius: '50%',
              backgroundColor: av.color || 'var(--color-bg-muted)',
              border: '2px solid #fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: px * 0.33,
              fontWeight: 600,
              color: 'var(--color-surface)',
              marginLeft: i === 0 ? 0 : -overlap,
              zIndex: visible.length - i,
              position: 'relative',
              flexShrink: 0,
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            {av.src
              ? <img src={av.src} alt={av.initials} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : av.initials?.slice(0, 2).toUpperCase()
            }
          </div>
        ))}
        {extra > 0 && (
          <div style={{
            width: px, height: px,
            borderRadius: '50%',
            backgroundColor: 'var(--color-bg-hover)',
            border: '2px solid #fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: px * 0.3,
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            marginLeft: -overlap,
            position: 'relative',
            zIndex: 0,
            flexShrink: 0,
          }}>
            +{extra}
          </div>
        )}
        <span style={{ marginLeft: 10, fontSize: 12, color: 'var(--color-text-muted)' }}>
          {avatars.length} member{avatars.length !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
}

AvatarGroup.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.shape({
    initials: PropTypes.string,
    src: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
  })),
  /** Maximum avatars shown before overflow */
  max: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  spacing: PropTypes.oneOf(['normal', 'tight']),
};