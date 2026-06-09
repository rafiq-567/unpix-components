import PropTypes from "prop-types";
export default function DialogField({ label }) {
  return (
    <div className="border border-[var(--color-border)] rounded-lg shadow-md p-4 bg-[var(--color-surface)] text-sm w-full">
      <div className="font-semibold text-[var(--color-text-primary)] mb-1">{label}</div>
      <p className="text-[var(--color-text-muted)] text-xs mb-3">Dialog content goes here.</p>
      <div className="flex gap-2 justify-end">
        <button className="px-3 py-1 text-xs border border-[var(--color-border)] rounded text-[var(--color-text-secondary)] bg-[var(--color-surface)] hover:bg-[var(--color-bg-hover)]">Cancel</button>
        <button className="px-3 py-1 text-xs bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded">Confirm</button>
      </div>
    </div>
  );
}
DialogField.propTypes = { label: PropTypes.string };
DialogField.defaultProps = { label: "Dialog" };