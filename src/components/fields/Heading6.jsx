import PropTypes from "prop-types";
export default function Heading6({ label = "Heading 6" }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      <p style={{ marginBottom: 8, fontWeight: 600, color: "var(--color-text-secondary)", fontSize: 13 }}>Heading 6</p>
      <h6 style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.3 }}>{label}</h6>
    </div>
  );
}
Heading6.propTypes = { label: PropTypes.string };