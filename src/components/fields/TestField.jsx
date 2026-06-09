import PropTypes from "prop-types";
export default function TestField({ label }) {
  return (
    <div className="border-2 border-dashed border-[var(--color-warning)] rounded-lg p-4 bg-[var(--color-warning-subtle)]">
      <p className="text-xs font-medium text-[var(--color-warning-text)]">{label} — Test Component</p>
    </div>
  );
}
TestField.propTypes = { label: PropTypes.string };
TestField.defaultProps = { label: "Test" };