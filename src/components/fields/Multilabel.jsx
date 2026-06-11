import PropTypes from 'prop-types';

/**
 * @uxpindescription Multiple labels displayed together as a label group
 */
export default function MultiLabel({
  labels = [
    { text: 'First Name', required: true },
    { text: 'Last Name', required: true },
    { text: 'Email', required: false },
    { text: 'Phone', required: false, optional: true },
  ],
  direction = 'vertical',
  size = 'md',
  gap = 12,
}) {
  const sizes = { sm: 11, md: 13, lg: 15 };
  const fs = sizes[size] || 13;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 10, fontSize: 16, color: 'var(--color-text-placeholder)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Label Group</p>
      <div style={{
        display: 'flex',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        gap,
        flexWrap: direction === 'horizontal' ? 'wrap' : 'nowrap',
      }}>
        {labels.map((lbl, i) => (
          <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: fs, fontWeight: 500, color: 'var(--color-text-secondary)' }}>{lbl.text}</span>
            {lbl.required && <span style={{ color: 'var(--color-danger)', fontSize: fs }}>*</span>}
            {lbl.optional && <span style={{ fontSize: fs - 1, color: 'var(--color-text-placeholder)', fontWeight: 400 }}>(optional)</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

MultiLabel.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    required: PropTypes.bool,
    optional: PropTypes.bool,
  })),
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  gap: PropTypes.number,
};