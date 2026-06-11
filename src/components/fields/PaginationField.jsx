import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Pagination control for navigating between pages
 */
export default function PaginationField({
  totalPages = 10,
  defaultPage = 1,
  showFirstLast = true,
  showPrevNext = true,
  size = 'md',
}) {
  const [current, setCurrent] = useState(defaultPage);

  const sizes = {
    sm: { btn: 28, font: 12 },
    md: { btn: 36, font: 13 },
    lg: { btn: 44, font: 15 },
  };
  const s = sizes[size] || sizes.md;

  const btn = (content, page, disabled = false, active = false) => (
    <button
      key={`${content}-${page}`}
      onClick={() => !disabled && page && setCurrent(page)}
      disabled={disabled}
      style={{
        width: s.btn,
        height: s.btn,
        border: active ? '1.5px solid #3b82f6' : '1px solid #e5e7eb',
        borderRadius: 6,
        backgroundColor: active ? 'var(--color-accent-subtle)' : disabled ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
        color: active ? 'var(--color-accent-text)' : disabled ? 'var(--color-text-disabled)' : 'var(--color-text-secondary)',
        fontWeight: active ? 600 : 400,
        fontSize: s.font,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.15s',
      }}
    >
      {content}
    </button>
  );

  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    pages.push(1);
    if (current > 3) pages.push('...');
    for (let i = Math.max(2, current - 1); i <= Math.min(totalPages - 1, current + 1); i++) pages.push(i);
    if (current < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 900, color: 'var(--color-text-secondary)' }}>Pagination</p>
      <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
        {showFirstLast && btn('«', 1, current === 1)}
        {showPrevNext && btn('‹', current - 1, current === 1)}
        {getPages().map((p, i) =>
          p === '...'
            ? <span key={`ellipsis-${i}`} style={{ width: s.btn, textAlign: 'center', fontSize: s.font, color: 'var(--color-text-placeholder)' }}>…</span>
            : btn(p, p, false, p === current)
        )}
        {showPrevNext && btn('›', current + 1, current === totalPages)}
        {showFirstLast && btn('»', totalPages, current === totalPages)}
      </div>
      <p style={{ margin: '8px 0 0', fontSize: 11, color: 'var(--color-text-placeholder)' }}>Page {current} of {totalPages}</p>
    </div>
  );
}

PaginationField.propTypes = {
  /** Total number of pages */
  totalPages: PropTypes.number,
  /** Starting page */
  defaultPage: PropTypes.number,
  /** Show first/last buttons */
  showFirstLast: PropTypes.bool,
  /** Show prev/next buttons */
  showPrevNext: PropTypes.bool,
  /** Control size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};