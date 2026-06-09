import PropTypes from 'prop-types';

/**
 * @uxpindescription Displays loading skeleton placeholder shapes
 */
export default function SkeletonField({
  variant = 'text',
  width = '100%',
  height = 16,
  rows = 3,
  animated = true,
}) {
  const shimmer = animated ? {
    background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
  } : { backgroundColor: 'var(--color-bg-hover)' };

  const base = {
    ...shimmer,
    borderRadius: 4,
    display: 'block',
  };

  const renderSkeleton = () => {
    switch (variant) {
      case 'circle':
        return <span style={{ ...base, width: height, height, borderRadius: '50%', display: 'inline-block' }} />;
      case 'rect':
        return <span style={{ ...base, width, height, display: 'block' }} />;
      case 'card':
        return (
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
              <span style={{ ...base, width: 40, height: 40, borderRadius: '50%', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <span style={{ ...base, height: 12, marginBottom: 8, display: 'block' }} />
                <span style={{ ...base, height: 10, width: '60%', display: 'block' }} />
              </div>
            </div>
            <span style={{ ...base, height: 10, marginBottom: 6, display: 'block' }} />
            <span style={{ ...base, height: 10, width: '80%', display: 'block' }} />
          </div>
        );
      case 'text':
      default:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {Array.from({ length: rows }).map((_, i) => (
              <span
                key={i}
                style={{ ...base, height, width: i === rows - 1 ? '70%' : '100%', display: 'block' }}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Skeleton</p>
      <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
      {renderSkeleton()}
    </div>
  );
}

SkeletonField.propTypes = {
  /** Skeleton shape type */
  variant: PropTypes.oneOf(['text', 'circle', 'rect', 'card']),
  /** Width for rect variant */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Height in pixels */
  height: PropTypes.number,
  /** Number of text rows */
  rows: PropTypes.number,
  /** Enable shimmer animation */
  animated: PropTypes.bool,
};