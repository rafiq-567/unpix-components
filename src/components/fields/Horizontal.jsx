import PropTypes from "prop-types";
export default function Horizontal({ label = "Horizontal Progress", value = 40, color = "#6366f1" }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
        <div className="h-4 rounded-full flex items-center justify-end pr-2 transition-all"
          style={{ width: `${value}%`, backgroundColor: color }}>
          <span className="text-white text-xs font-medium">{value}%</span>
        </div>
      </div>
    </div>
  );
}
Horizontal.propTypes = { label: PropTypes.string, value: PropTypes.number, color: PropTypes.string };