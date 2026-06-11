import PropTypes from "prop-types";
export default function Heading3({ label = "Heading 3" }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      <p style={{ marginBottom: 8, fontWeight: 600, color: "var(--color-text-secondary)", fontSize: 13 }}>Heading 3</p>
      <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.3 }}>{label}</h3>
    </div>
  );
}
Heading3.propTypes = { label: PropTypes.string };