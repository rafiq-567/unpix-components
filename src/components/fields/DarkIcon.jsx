import PropTypes from "prop-types";
export default function DarkIcon({ label = "Dark Icon" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z"/>
        </svg>
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}
DarkIcon.propTypes = { label: PropTypes.string };