import PropTypes from "prop-types";
export default function TextField({ label = "Text Field" }) {
  return (
    <div>
      <label className="block mb-2 text-[var(--color-text-secondary)]">{label}</label>
      <input className="w-full border border-[var(--color-border)] rounded p-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)] placeholder-[var(--color-text-placeholder)]" placeholder={label} />
    </div>
  );
}
TextField.propTypes = { label: PropTypes.string };