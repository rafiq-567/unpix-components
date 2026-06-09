import PropTypes from "prop-types";
export default function DividerField({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--color-border)" }} />
      {label && <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>{label}</span>}
      <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--color-border)" }} />
    </div>
  );
}
DividerField.propTypes = { label: PropTypes.string };
DividerField.defaultProps = { label: "Divider" };