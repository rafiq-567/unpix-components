import PropTypes from "prop-types";
export default function BlockquoteField({ label }) {
  return (
    <blockquote className="border-l-4 border-[var(--color-accent)] pl-4 py-1 bg-[var(--color-accent-subtle)] rounded-r">
      <p className="text-sm text-[var(--color-accent-text)] italic">"{label}"</p>
      <cite className="text-xs text-[var(--color-accent-text)] opacity-60 mt-1 block">— Author</cite>
    </blockquote>
  );
}
BlockquoteField.propTypes = { label: PropTypes.string };
BlockquoteField.defaultProps = { label: "Blockquote" };