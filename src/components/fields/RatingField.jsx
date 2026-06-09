import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Star rating input or display
 */
export default function RatingField({
  label = 'Rating',
  defaultValue = 0,
  max = 5,
  size = 'md',
  readOnly = false,
  showValue = true,
  color = 'amber',
  icon = 'star',
}) {
  const [value, setValue] = useState(defaultValue);
  const [hover, setHover] = useState(0);

  const colors = {
    amber:  'var(--color-warning)',
    orange: '#f97316',
    red:    'var(--color-danger)',
    blue:   'var(--color-accent)',
    purple: '#8b5cf6',
  };
  const activeColor = colors[color] || colors.amber;

  const sizes = { sm: 18, md: 24, lg: 32, xl: 40 };
  const px = sizes[size] || 24;

  const icons = {
    star:   (filled) => filled ? '★' : '☆',
    heart:  (filled) => filled ? '♥' : '♡',
    thumb:  (filled) => filled ? '👍' : '👍',
    circle: (filled) => filled ? '●' : '○',
  };

  const getIcon = icons[icon] || icons.star;
  const display = hover || value;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: 8, fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)' }}>{label}</label>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {Array.from({ length: max }).map((_, i) => {
          const starVal = i + 1;
          const filled = starVal <= display;
          return (
            <button
              key={i}
              onClick={() => !readOnly && setValue(starVal)}
              onMouseEnter={() => !readOnly && setHover(starVal)}
              onMouseLeave={() => !readOnly && setHover(0)}
              style={{
                background: 'none',
                border: 'none',
                cursor: readOnly ? 'default' : 'pointer',
                fontSize: px,
                color: filled ? activeColor : 'var(--color-text-disabled)',
                padding: 0,
                lineHeight: 1,
                transition: 'color 0.1s, transform 0.1s',
                transform: !readOnly && hover === starVal ? 'scale(1.2)' : 'scale(1)',
              }}
            >
              {getIcon(filled)}
            </button>
          );
        })}
        {showValue && (
          <span style={{ marginLeft: 8, fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>
            {value > 0 ? `${value}/${max}` : 'Not rated'}
          </span>
        )}
      </div>
    </div>
  );
}

RatingField.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.number,
  max: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  readOnly: PropTypes.bool,
  showValue: PropTypes.bool,
  color: PropTypes.oneOf(['amber', 'orange', 'red', 'blue', 'purple']),
  icon: PropTypes.oneOf(['star', 'heart', 'circle']),
};