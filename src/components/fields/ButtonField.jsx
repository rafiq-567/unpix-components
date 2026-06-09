import PropTypes from "prop-types";
export default function ButtonField({ label }) {
  return (
    <button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-4 py-2 rounded transition">{label}</button>
  );
}
ButtonField.propTypes = { label: PropTypes.string };
ButtonField.defaultProps = { label: "Button" };