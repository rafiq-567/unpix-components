import PropTypes from "prop-types";
export default function BoxField({ label }) {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-4 bg-green-50 text-sm text-green-700">
      <span className="font-medium">{label}</span>
      <p className="text-xs mt-1 text-green-500">Box layout container</p>
    </div>
  );
}
BoxField.propTypes = { label: PropTypes.string };
BoxField.defaultProps = { label: "Box" };