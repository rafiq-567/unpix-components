import PropTypes from "prop-types";
export default function LinkField({ label }) {
  return <a href="#" className="text-blue-500 underline text-sm hover:text-blue-700">{label}</a>;
}
LinkField.propTypes = { label: PropTypes.string };
LinkField.defaultProps = { label: "Link" };