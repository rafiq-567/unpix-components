import PropTypes from "prop-types";
export default function StackField({ label }) {
  return (
    <div className="border-2 border-dashed border-[var(--color-accent)] rounded-lg p-3 bg-[var(--color-accent-subtle)] space-y-2">
      <p className="text-xs font-medium text-[var(--color-accent-text)]">{label} — Stack</p>
      {["Item 1", "Item 2", "Item 3"].map((item) => (
        <div key={item} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded px-3 py-1.5 text-xs text-[var(--color-text-secondary)]">{item}</div>
      ))}
    </div>
  );
}
StackField.propTypes = { label: PropTypes.string };
StackField.defaultProps = { label: "Stack" };