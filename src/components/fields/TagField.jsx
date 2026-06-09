import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Tag/chip input for adding and removing labels
 */
export default function TagField({
  label = 'Tags',
  defaultTags = ['React', 'TypeScript', 'UXPin'],
  placeholder = 'Add a tag...',
  maxTags = 10,
  disabled = false,
  color = 'blue',
}) {
  const [tags, setTags] = useState(defaultTags);
  const [input, setInput] = useState('');

  const colors = {
    blue:   { bg: 'var(--color-accent-subtle)', text: 'var(--color-accent-text)', border: 'var(--color-accent-subtle)' },
    green:  { bg: 'var(--color-success-subtle)', text: 'var(--color-success-text)', border: 'var(--color-success-subtle)' },
    purple: { bg: '#f5f3ff', text: '#6d28d9', border: '#ddd6fe' },
    orange: { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
  };

  const c = colors[color] || colors.blue;

  const addTag = (val) => {
    const trimmed = val.trim();
    if (trimmed && !tags.includes(trimmed) && tags.length < maxTags) {
      setTags([...tags, trimmed]);
    }
    setInput('');
  };

  const removeTag = (tag) => setTags(tags.filter(t => t !== tag));

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      {label && <label style={{ display: 'block', marginBottom: 8, fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)' }}>{label}</label>}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        padding: '8px 10px',
        border: '1px solid #d1d5db',
        borderRadius: 8,
        minHeight: 42,
        backgroundColor: disabled ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'default',
      }}>
        {tags.map(tag => (
          <span key={tag} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            backgroundColor: c.bg,
            color: c.text,
            border: `1px solid ${c.border}`,
            borderRadius: 9999,
            fontSize: 12,
            fontWeight: 500,
            padding: '2px 8px',
          }}>
            {tag}
            {!disabled && (
              <button
                onClick={() => removeTag(tag)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: c.text, fontSize: 14, padding: 0, lineHeight: 1, display: 'flex' }}
              >×</button>
            )}
          </span>
        ))}
        {!disabled && tags.length < maxTags && (
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(input); } }}
            placeholder={placeholder}
            style={{
              border: 'none',
              outline: 'none',
              fontSize: 13,
              minWidth: 100,
              flex: 1,
              backgroundColor: 'transparent',
              color: 'var(--color-text-secondary)',
            }}
          />
        )}
      </div>
      <p style={{ margin: '4px 0 0', fontSize: 11, color: 'var(--color-text-placeholder)' }}>Press Enter or comma to add a tag</p>
    </div>
  );
}

TagField.propTypes = {
  /** Field label */
  label: PropTypes.string,
  /** Initial tags */
  defaultTags: PropTypes.arrayOf(PropTypes.string),
  /** Input placeholder */
  placeholder: PropTypes.string,
  /** Maximum number of tags */
  maxTags: PropTypes.number,
  /** Disable the field */
  disabled: PropTypes.bool,
  /** Tag color theme */
  color: PropTypes.oneOf(['blue', 'green', 'purple', 'orange']),
};