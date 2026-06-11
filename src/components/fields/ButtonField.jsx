import PropTypes from "prop-types";
export default function ButtonField({ label }) {
  return (
    <div>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Button Field</p>
      <button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-4 py-2 rounded transition">{label}</button>
    </div>

  );
}
ButtonField.propTypes = { label: PropTypes.string };
ButtonField.defaultProps = { label: "Button" };