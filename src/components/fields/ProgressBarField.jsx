import PropTypes from 'prop-types';

/**
 * @uxpindescription Labeled progress bar with percentage and color variants
 */
export default function ProgressBarField({
  label = 'Storage used',
  value = 68,
  max = 100,
  variant = 'default',
  size = 'md',
  showValue = true,
  valuePosition = 'right',
  animated = false,
  color = 'blue',
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  const colors = {
    blue:   'var(--color-accent)',
    green:  'var(--color-success)',
    red:    'var(--color-danger)',
    amber:  'var(--color-warning)',
    purple: '#8b5cf6',
    gray:   'var(--color-text-muted)',
  };

  const autoColor = pct >= 90 ? colors.red : pct >= 70 ? colors.amber : colors[color] || colors.blue;
  const barColor = variant === 'auto' ? autoColor : colors[color] || colors.blue;

  const heights = { sm: 4, md: 8, lg: 12, xl: 16 };
  const h = heights[size] || 8;

  const valueLabel = `${Math.round(pct)}%`;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        {label && <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)' }}>{label}</span>}
        {showValue && valuePosition === 'right' && (
          <span style={{ fontSize: 12, color: 'var(--color-text-muted)', fontWeight: 500 }}>{value}/{max} ({valueLabel})</span>
        )}
      </div>

      {showValue && valuePosition === 'top' && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4 }}>
          <span style={{ fontSize: 12, color: barColor, fontWeight: 600 }}>{valueLabel}</span>
        </div>
      )}

      <div style={{
        width: '100%',
        height: h,
        backgroundColor: 'var(--color-bg-hover)',
        borderRadius: h,
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          backgroundColor: barColor,
          borderRadius: h,
          transition: 'width 0.4s ease',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {animated && (
            <>
              <style>{`@keyframes stripe { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }`}</style>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'stripe 1.5s ease infinite',
              }} />
            </>
          )}
        </div>
      </div>

      {showValue && valuePosition === 'inside' && h >= 12 && (
        <div style={{
          position: 'relative', marginTop: -h,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          height: h,
        }}>
          <span style={{ fontSize: 9, color: 'var(--color-surface)', fontWeight: 700 }}>{valueLabel}</span>
        </div>
      )}

      {showValue && valuePosition === 'bottom' && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          <span style={{ fontSize: 11, color: 'var(--color-text-placeholder)' }}>0</span>
          <span style={{ fontSize: 12, color: barColor, fontWeight: 600 }}>{valueLabel}</span>
          <span style={{ fontSize: 11, color: 'var(--color-text-placeholder)' }}>{max}</span>
        </div>
      )}
    </div>
  );
}

ProgressBarField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'auto']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  showValue: PropTypes.bool,
  valuePosition: PropTypes.oneOf(['right', 'top', 'bottom', 'inside']),
  animated: PropTypes.bool,
  color: PropTypes.oneOf(['blue', 'green', 'red', 'amber', 'purple', 'gray']),
};