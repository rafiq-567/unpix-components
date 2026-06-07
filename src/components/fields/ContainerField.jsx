import PropTypes from "prop-types";
export default function ContainerField({ label }) {
  return (
    <div className="border-2 border-dashed border-emerald-300 rounded-lg p-4 bg-emerald-50 text-sm text-emerald-700">
      <span className="font-medium">{label}</span>
      <p className="text-xs mt-1 text-emerald-500">Max-width container</p>
    </div>
  );
}
ContainerField.propTypes = { label: PropTypes.string };
ContainerField.defaultProps = { label: "Container" };