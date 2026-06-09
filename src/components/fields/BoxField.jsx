import PropTypes from "prop-types";
export default function BoxField({ label }) {
  return (
    <div className="border-2 border-dashed border-[var(--color-success)] rounded-lg p-4 bg-[var(--color-success-subtle)] text-sm text-[var(--color-success-text)]">
      <span className="font-medium">{label}</span>
      <p className="text-xs mt-1 text-[var(--color-success-text)] opacity-70">Box layout container</p>
    </div>
  );
}
BoxField.propTypes = { label: PropTypes.string };
BoxField.defaultProps = { label: "Box" };