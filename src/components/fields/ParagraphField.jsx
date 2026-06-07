import PropTypes from "prop-types";
export default function ParagraphField({ label }) {
  return <p className="text-sm text-gray-600 leading-relaxed">{label} — This is a paragraph.</p>;
}
ParagraphField.propTypes = { label: PropTypes.string };
ParagraphField.defaultProps = { label: "Paragraph" };