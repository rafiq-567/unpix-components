import PropTypes from "prop-types";
export default function Heading1({ label = "Heading 1" }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      <p style={{ marginBottom: 8, fontWeight: 600, color: "var(--color-text-secondary)", fontSize: 13 }}>Heading 1</p>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.3 }}>{label}</h1>
    </div>
  );
}
Heading1.propTypes = { label: PropTypes.string };