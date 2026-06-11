import PropTypes from 'prop-types';

/**
 * @uxpindescription Breadcrumb navigation with icons at each step
 */
export default function BreadcrumbsIcon({
  items = [
    { label: 'Home', icon: '🏠' },
    { label: 'Products', icon: '📦' },
    { label: 'Electronics', icon: '💻' },
    { label: 'Laptops', icon: '🖥️' },
  ],
  separator = '/',
  size = 'md',
  maxItems = 0,
}) {
  const sizes = { sm: 11, md: 13, lg: 15 };
  const fs = sizes[size] || 13;

  const displayed = maxItems > 0 && items.length > maxItems
    ? [items[0], { label: '...', icon: '•', ellipsis: true }, ...items.slice(-(maxItems - 1))]
    : items;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 900, color: 'var(--color-text-secondary)' }}>Breadcrumb Icon</p>
      <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
        {displayed.map((item, i) => {
          const isLast = i === displayed.length - 1;
          return (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {i > 0 && (
                <span style={{ color: 'var(--color-text-disabled)', fontSize: fs, userSelect: 'none', margin: '0 2px' }}>{separator}</span>
              )}
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontSize: fs,
                color: isLast ? 'var(--color-text-secondary)' : 'var(--color-text-muted)',
                fontWeight: isLast ? 600 : 400,
                cursor: isLast || item.ellipsis ? 'default' : 'pointer',
                textDecoration: 'none',
                padding: '3px 6px',
                borderRadius: 6,
                backgroundColor: isLast ? 'var(--color-bg-muted)' : 'transparent',
                transition: 'background 0.1s',
              }}>
                {item.icon && !item.ellipsis && (
                  <span style={{ fontSize: fs + 1 }}>{item.icon}</span>
                )}
                {item.label}
              </span>
            </span>
          );
        })}
      </nav>
    </div>
  );
}

BreadcrumbsIcon.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, icon: PropTypes.string })),
  separator: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  maxItems: PropTypes.number,
};