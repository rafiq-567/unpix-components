import PropTypes from 'prop-types';

/**
 * @uxpindescription Form label with optional required marker and helper text
 */
export default function Label({
  text = 'Field Label',
  required = false,
  optional = false,
  htmlFor = '',
  size = 'md',
  disabled = false,
  tooltip = '',
}) {
  const sizes = { sm: 11, md: 13, lg: 15 };
  const fs = sizes[size] || 13;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <label
        htmlFor={htmlFor}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          fontSize: fs, fontWeight: 500,
          color: disabled ? 'var(--color-text-placeholder)' : 'var(--color-text-secondary)',
          cursor: disabled ? 'not-allowed' : 'default',
        }}
      >
        {text}
        {required && <span style={{ color: 'var(--color-danger)', fontSize: fs }}>*</span>}
        {optional && <span style={{ fontSize: fs - 1, color: 'var(--color-text-placeholder)', fontWeight: 400 }}>(optional)</span>}
        {tooltip && (
          <span title={tooltip} style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 16, height: 16, borderRadius: '50%',
            backgroundColor: 'var(--color-border)', color: 'var(--color-text-muted)', fontSize: 10, cursor: 'help',
          }}>?</span>
        )}
      </label>
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