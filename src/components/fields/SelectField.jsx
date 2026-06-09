import PropTypes from "prop-types";
export default function SelectField({ label }) {
  return (
    <div>
      <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)" }}>{label}</label>
      <select style={{ width: "100%", border: "1px solid var(--color-border)", borderRadius: 8, padding: "8px 12px", fontSize: 13, color: "var(--color-text-secondary)", backgroundColor: "var(--color-surface)", outline: "none" }}>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  );
}
SelectField.propTypes = { label: PropTypes.string };
SelectField.defaultProps = { label: "Select" };