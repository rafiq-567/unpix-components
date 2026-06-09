import PropTypes from "prop-types";
export default function FormControlField({ label }) {
  return (
    <div className="border border-[var(--color-border)] rounded-lg p-3 bg-[var(--color-bg-subtle)]">
      <label className="block text-xs font-medium text-[var(--color-text-secondary)] mb-1">{label}</label>
      <input className="w-full border border-[var(--color-border)] rounded px-3 py-1.5 text-sm bg-[var(--color-surface)] text-[var(--color-text-secondary)]" placeholder="Form control input" />
    </div>
  );
}
FormControlField.propTypes = { label: PropTypes.string };
FormControlField.defaultProps = { label: "Form Control" };