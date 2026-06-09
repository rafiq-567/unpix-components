import PropTypes from "prop-types";
export default function HorizontalMui({ label = "MUI Style Progress", value = 70 }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-1">{label}</p>
      <div className="relative w-full bg-indigo-100 rounded h-1.5">
        <div className="absolute top-0 left-0 h-1.5 bg-indigo-600 rounded transition-all" style={{ width: `${value}%` }} />
      </div>
      <p className="text-xs text-gray-400 mt-1">{value}%</p>
    </div>
  );
}
HorizontalMui.propTypes = { label: PropTypes.string, value: PropTypes.number };