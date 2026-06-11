import PropTypes from "prop-types";
export default function Heading2({ label = "Heading 2" }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      <p style={{ marginBottom: 8, fontWeight: 600, color: "var(--color-text-secondary)", fontSize: 13 }}>Heading 2</p>
      <h2 style={{ fontSize: 26, fontWeight: 700, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.3 }}>{label}</h2>
    </div>
  );
}
Heading2.propTypes = { label: PropTypes.string };