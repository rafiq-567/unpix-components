import PropTypes from "prop-types";
export default function CaptionField({ label }) {
  return <p className="text-xs text-gray-400 italic text-center">{label} — Caption text</p>;
}
CaptionField.propTypes = { label: PropTypes.string };
CaptionField.defaultProps = { label: "Caption" };