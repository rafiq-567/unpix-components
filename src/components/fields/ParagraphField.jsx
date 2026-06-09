import PropTypes from "prop-types";
export default function ParagraphField({ label }) {
  return <p style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>{label} — This is a paragraph.</p>;
}
ParagraphField.propTypes = { label: PropTypes.string };
ParagraphField.defaultProps = { label: "Paragraph" };