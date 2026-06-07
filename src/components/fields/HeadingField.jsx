import PropTypes from "prop-types";
export default function HeadingField({ label }) {
  return <h1 className="text-2xl font-bold text-gray-900">{label}</h1>;
}
HeadingField.propTypes = { label: PropTypes.string };
HeadingField.defaultProps = { label: "Heading" };