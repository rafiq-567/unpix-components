import PropTypes from "prop-types";
export default function BlockquoteField({ label }) {
  return (
    <blockquote className="border-l-4 border-[var(--color-accent)] pl-4 py-1 bg-[var(--color-accent-subtle)] rounded-r">
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Block Qoute</p>
      <p className="text-sm text-[var(--color-accent-text)] italic">"{label}"</p>
      <cite className="text-xs text-[var(--color-accent-text)] opacity-60 mt-1 block">— Author</cite>
    </blockquote>
  );
}
BlockquoteField.propTypes = { label: PropTypes.string };
BlockquoteField.defaultProps = { label: "Blockquote" };