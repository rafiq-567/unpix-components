import PropTypes from "prop-types";
export default function CaptionField({ label }) {
  return <div>
    <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Caption Field</p>
    <p className="text-xs text-[var(--color-text-placeholder)] italic text-center">{label} — Caption text</p>;
  </div>

}
CaptionField.propTypes = { label: PropTypes.string };
CaptionField.defaultProps = { label: "Caption" };