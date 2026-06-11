import PropTypes from "prop-types";
export default function Heading5({ label = "Heading 5" }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      <p style={{ marginBottom: 8, fontWeight: 600, color: "var(--color-text-secondary)", fontSize: 13 }}>Heading 5</p>
      <h5 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.3 }}>{label}</h5>
    </div>
  );
}
Heading5.propTypes = { label: PropTypes.string };