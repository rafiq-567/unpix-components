import PropTypes from "prop-types";
export default function Heading4({ label = "Heading 4" }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      <p style={{ marginBottom: 8, fontWeight: 600, color: "var(--color-text-secondary)", fontSize: 13 }}>Heading 4</p>
      <h4 style={{ fontSize: 18, fontWeight: 600, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.3 }}>{label}</h4>
    </div>
  );
}
Heading4.propTypes = { label: PropTypes.string };