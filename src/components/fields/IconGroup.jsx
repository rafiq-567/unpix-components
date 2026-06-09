import PropTypes from "prop-types";
const icons = ["🏠","⚙️","🔔","👤","📁"];
export default function IconGroup({ label = "Icon Group" }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex gap-2">
        {icons.map((icon, i) => (
          <button key={i} className="w-10 h-10 bg-gray-100 hover:bg-indigo-100 rounded-xl flex items-center justify-center text-lg transition">
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
IconGroup.propTypes = { label: PropTypes.string };