import PropTypes from "prop-types";
export default function OrderedListField({ label }) {
  return (
    <div>
      <label style={{ display: "block", marginBottom: 8, fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)" }}>{label}</label>
      <ol style={{ border: "1px solid var(--color-border)", borderRadius: 8, padding: "12px 12px 12px 28px", margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {["First item", "Second item", "Third item"].map((item) => (
          <li key={item} style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
OrderedListField.propTypes = { label: PropTypes.string };
OrderedListField.defaultProps = { label: "Ordered List" };