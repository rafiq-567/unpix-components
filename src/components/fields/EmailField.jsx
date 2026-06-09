import PropTypes from "prop-types";
export default function EmailField({ label }) {
  return (
    <div>
      <label className="text-[var(--color-text-secondary)]">{label}</label>
      <input type="email" placeholder="name@example.com" className="w-full border border-[var(--color-border)] rounded px-3 py-2 mt-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)] placeholder-[var(--color-text-placeholder)]" />
    </div>
  );
}
EmailField.propTypes = { label: PropTypes.string };
EmailField.defaultProps = { label: "Email Field" };