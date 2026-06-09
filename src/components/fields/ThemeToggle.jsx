import PropTypes from 'prop-types';
import { useTheme } from './useTheme';

/**
 * @uxpindescription Light / dark mode toggle button — fixed to upper right corner
 */
export default function ThemeToggle({
  position = 'fixed',
  showLabel = false,
}) {
  const { isDark, toggleTheme } = useTheme();

  const containerStyle = position === 'fixed'
    ? { position: 'fixed', top: 16, right: 16, zIndex: 9999 }
    : { display: 'inline-flex' };

  return (
    <div style={containerStyle}>
      <button
        onClick={toggleTheme}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: showLabel ? '8px 14px' : '8px',
          borderRadius: 10,
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text-secondary)',
          cursor: 'pointer',
          fontSize: 13,
          fontWeight: 500,
          fontFamily: 'sans-serif',
          boxShadow: 'var(--shadow-md)',
          transition: 'all 0.2s ease',
          backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-bg-hover)'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-surface)'}
      >
        {/* Track */}
        <div style={{
          position: 'relative',
          width: 42,
          height: 24,
          borderRadius: 12,
          backgroundColor: isDark ? 'var(--color-accent)' : 'var(--color-border-strong)',
          transition: 'background-color 0.3s ease',
          flexShrink: 0,
        }}>
          {/* Thumb */}
          <div style={{
            position: 'absolute',
            top: 3,
            left: isDark ? 21 : 3,
            width: 18,
            height: 18,
            borderRadius: '50%',
            backgroundColor: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
            transition: 'left 0.25s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
          }}>
            {isDark ? '🌙' : '☀️'}
          </div>
        </div>

        {showLabel && (
          <span style={{ color: 'var(--color-text-secondary)', userSelect: 'none' }}>
            {isDark ? 'Dark' : 'Light'}
          </span>
        )}
      </button>
    </div>
  );
}

ThemeToggle.propTypes = {
  /** 'fixed' pins to upper-right corner; 'inline' renders in normal flow */
  position: PropTypes.oneOf(['fixed', 'inline']),
  /** Show Light / Dark text label next to the toggle */
  showLabel: PropTypes.bool,
};