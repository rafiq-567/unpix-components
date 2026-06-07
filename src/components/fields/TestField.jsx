import PropTypes from "prop-types";
export default function TestField({ label }) {
  return (
    <div className="border-2 border-dashed border-yellow-300 rounded-lg p-4 bg-yellow-50">
      <p className="text-xs font-medium text-yellow-700">{label} — Test Component</p>
    </div>
  );
}
TestField.propTypes = { label: PropTypes.string };
TestField.defaultProps = { label: "Test" };