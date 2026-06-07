import PropTypes from "prop-types";
export default function DialogField({ label }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white text-sm w-full">
      <div className="font-semibold text-gray-800 mb-1">{label}</div>
      <p className="text-gray-500 text-xs mb-3">Dialog content goes here.</p>
      <div className="flex gap-2 justify-end">
        <button className="px-3 py-1 text-xs border rounded text-gray-600">Cancel</button>
        <button className="px-3 py-1 text-xs bg-indigo-500 text-white rounded">Confirm</button>
      </div>
    </div>
  );
}
DialogField.propTypes = { label: PropTypes.string };
DialogField.defaultProps = { label: "Dialog" };