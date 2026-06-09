import PropTypes from "prop-types";
export default function CaptionField({ label }) {
  return <p className="text-xs text-[var(--color-text-placeholder)] italic text-center">{label} — Caption text</p>;
}
CaptionField.propTypes = { label: PropTypes.string };
CaptionField.defaultProps = { label: "Caption" };