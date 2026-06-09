import PropTypes from "prop-types";
export default function TextareaField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-[var(--color-text-secondary)]">{label}</label>
      <textarea rows={4} placeholder="Enter text..." className="w-full border border-[var(--color-border)] rounded p-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)] placeholder-[var(--color-text-placeholder)]" />
    </div>
  );
}
TextareaField.propTypes = { label: PropTypes.string };
TextareaField.defaultProps = { label: "Textarea" };