import PropTypes from "prop-types";
export default function Icon({ label = "Icon", color = "#6366f1" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
        <svg className="w-5 h-5" fill={color} viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z"/>
        </svg>
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}
Icon.propTypes = { label: PropTypes.string, color: PropTypes.string };