import PropTypes from "prop-types";
export default function SlotField({ label }) {
  return (
    <div className="border-2 border-dashed border-[var(--color-warning)] rounded-lg p-4 bg-[var(--color-warning-subtle)] text-center">
      <p className="text-xs font-medium text-[var(--color-warning-text)]">{label}</p>
      <p className="text-xs text-[var(--color-warning-text)] opacity-60 mt-1">Slot placeholder</p>
    </div>
  );
}
SlotField.propTypes = { label: PropTypes.string };
SlotField.defaultProps = { label: "Slot" };