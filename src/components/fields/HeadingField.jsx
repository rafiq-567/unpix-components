import PropTypes from "prop-types";
export default function HeadingField({ label }) {
  return <h1 style={{ fontSize: 24, fontWeight: 700, color: "var(--color-text-primary)", margin: 0 }}>{label}</h1>;
}
HeadingField.propTypes = { label: PropTypes.string };
HeadingField.defaultProps = { label: "Heading" };