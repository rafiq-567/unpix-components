import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Expandable accordion sections
 */
export default function AccordionField({
  items = [
    { title: 'What is UXPin Merge?', content: 'UXPin Merge lets you use real React components directly in your designs.' },
    { title: 'How do I add components?', content: 'Create a component file and add it to your App.jsx to expose it to UXPin.' },
    { title: 'What frameworks are supported?', content: 'UXPin Merge supports React, Web Components, and Storybook-based libraries.' },
  ],
  allowMultiple = false,
  defaultOpen = 0,
  variant = 'default',
}) {
  const [openIndexes, setOpenIndexes] = useState(
    defaultOpen >= 0 ? [defaultOpen] : []
  );

  const toggle = (i) => {
    if (allowMultiple) {
      setOpenIndexes(openIndexes.includes(i) ? openIndexes.filter(x => x !== i) : [...openIndexes, i]);
    } else {
      setOpenIndexes(openIndexes.includes(i) ? [] : [i]);
    }
  };

  const isOpen = (i) => openIndexes.includes(i);

  const variants = {
    default: { border: 'var(--color-border)', headerBg: 'var(--color-surface)', openBg: 'var(--color-bg-subtle)' },
    filled:  { border: 'var(--color-border)', headerBg: 'var(--color-bg-subtle)', openBg: 'var(--color-surface)' },
    bordered: { border: 'var(--color-accent)', headerBg: 'var(--color-surface)', openBg: 'var(--color-accent-subtle)' },
  };
  const v = variants[variant] || variants.default;

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Accordion</p>
      <div style={{ border: `1px solid ${v.border}`, borderRadius: 8, overflow: 'hidden' }}>
        {items.map((item, i) => (
          <div key={i} style={{ borderBottom: i < items.length - 1 ? `1px solid ${v.border}` : 'none' }}>
            <button
              onClick={() => toggle(i)}
              style={{
                width: '100%',
                padding: '14px 16px',
                background: isOpen(i) ? v.openBg : v.headerBg,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                textAlign: 'left',
                transition: 'background 0.15s',
              }}
            >
              {item.title}
              <span style={{
                fontSize: 18,
                color: 'var(--color-text-muted)',
                transform: isOpen(i) ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
                display: 'inline-block',
              }}>⌄</span>
            </button>
            {isOpen(i) && (
              <div style={{
                padding: '0 16px 14px',
                fontSize: 13,
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                backgroundColor: v.openBg,
              }}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

AccordionField.propTypes = {
  /** Array of accordion items */
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
  /** Allow multiple panels open at once */
  allowMultiple: PropTypes.bool,
  /** Index of initially open panel (-1 for none) */
  defaultOpen: PropTypes.number,
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'filled', 'bordered']),
};