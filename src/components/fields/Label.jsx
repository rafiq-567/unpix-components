import PropTypes from 'prop-types';

export default function Label({
  text = 'Field Label',
  required = false,
  optional = false,
  htmlFor = '',
  size = 'md',
  disabled = false,
  tooltip = '',
}) {
  const sizes = { sm: 12, md: 14, lg: 17 };
  const fs = sizes[size] || 14;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 8, fontWeight: 900, color: 'var(--color-text-secondary)', fontSize: 16 }}>Label</p>
      <label
        htmlFor={htmlFor}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: fs,
          fontWeight: 600,
          color: disabled ? 'var(--color-text-placeholder)' : 'var(--color-text-secondary)',
          cursor: disabled ? 'not-allowed' : 'default',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {text}
        {required && (
          <span style={{ color: 'var(--color-danger)', fontSize: fs }}>*</span>
        )}
        {optional && (
          <span style={{ fontSize: fs - 2, color: 'var(--color-text-placeholder)', fontWeight: 400 }}>
            (optional)
          </span>
        )}
        {tooltip && (
          <span
            title={tooltip}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 18, height: 18, borderRadius: '50%',
              backgroundColor: 'var(--color-bg-muted)',
              color: 'var(--color-text-muted)',
              fontSize: 11, cursor: 'help',
              border: '1px solid var(--color-border)',
            }}
          >?</span>
        )}
      </label>

      {/* Preview row so it's always visible in UXPin */}
      <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        <label style={{ fontSize: fs, fontWeight: 600, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
          Required <span style={{ color: 'var(--color-danger)' }}>*</span>
        </label>
        <label style={{ fontSize: fs, fontWeight: 600, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
          Optional <span style={{ fontSize: fs - 2, color: 'var(--color-text-placeholder)', fontWeight: 400 }}>(optional)</span>
        </label>
        <label style={{ fontSize: fs, fontWeight: 600, color: 'var(--color-text-placeholder)', display: 'flex', alignItems: 'center', gap: 4, opacity: 0.5 }}>
          Disabled
        </label>
        <label style={{ fontSize: fs, fontWeight: 600, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
          With Tooltip
          <span title="This is a tooltip" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, borderRadius: '50%', backgroundColor: 'var(--color-bg-muted)', color: 'var(--color-text-muted)', fontSize: 11, cursor: 'help', border: '1px solid var(--color-border)' }}>?</span>
        </label>
      </div>
    </div>
  );
}

Label.propTypes = {
  text: PropTypes.string,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  htmlFor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  tooltip: PropTypes.string,
};