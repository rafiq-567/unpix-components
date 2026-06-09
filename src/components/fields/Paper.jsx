import PropTypes from "prop-types";
export default function Paper({ label = "Paper", elevation = 2 }) {
  const shadows = ["shadow-none", "shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl"];
  return (
    <div className={`bg-white rounded-2xl p-6 ${shadows[Math.min(elevation, 5)]}`}>
      <p className="text-sm font-medium text-gray-700 mb-1">{label}</p>
      <p className="text-xs text-gray-400">Elevation: {elevation}</p>
      <p className="text-sm text-gray-600 mt-2">Paper component with configurable elevation shadow.</p>
    </div>
  );
}
Paper.propTypes = { label: PropTypes.string, elevation: PropTypes.number };