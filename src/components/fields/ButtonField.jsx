import PropTypes from "prop-types";
export default function ButtonField({ label }) {
  return (
    <button className="bg-indigo-500 text-white px-4 py-2 rounded">{label}</button>
  );
}
ButtonField.propTypes = { label: PropTypes.string };
ButtonField.defaultProps = { label: "Button" };