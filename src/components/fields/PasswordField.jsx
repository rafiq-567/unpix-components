import PropTypes from "prop-types";
export default function PasswordField({ label }) {
  return (
    <div>
      <label className="text-[var(--color-text-secondary)]">{label}</label>
      <input type="password" placeholder="********" className="w-full border border-[var(--color-border)] rounded px-3 py-2 mt-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)]" />
    </div>
  );
}
PasswordField.propTypes = { label: PropTypes.string };
PasswordField.defaultProps = { label: "Password" };