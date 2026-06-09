import PropTypes from "prop-types";
export default function Progress({ label = "Progress", value = 65 }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-indigo-500 h-2.5 rounded-full transition-all" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
Progress.propTypes = { label: PropTypes.string, value: PropTypes.number };