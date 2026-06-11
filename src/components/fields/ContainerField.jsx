import PropTypes from "prop-types";
export default function ContainerField({ label }) {
  return (
    <div className="border-2 border-dashed border-[var(--color-accent)] rounded-lg p-4 bg-[var(--color-accent-subtle)] text-sm text-[var(--color-accent-text)]">
      
      <span className="font-medium">{label}</span>
      <p className="text-xs mt-1 text-[var(--color-accent-text)] opacity-70">Max-width container</p>
    </div>
  );
}
ContainerField.propTypes = { label: PropTypes.string };
ContainerField.defaultProps = { label: "Container" };