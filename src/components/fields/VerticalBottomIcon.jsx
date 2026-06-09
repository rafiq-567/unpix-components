import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠", label: "Home" }, { icon: "📊", label: "Stats" }, { icon: "👤", label: "Profile" }];
export default function VerticalBottomIcon({ label = "Vertical Bottom Icon" }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex gap-3">
        <div className="flex flex-col gap-1">
          {tabs.map((tab, i) => (
            <button key={tab.label} onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-xs border-r-2 transition ${active === i ? "border-indigo-600 text-indigo-600 bg-indigo-50" : "border-transparent text-gray-500 hover:bg-gray-50"}`}>
              <span>{tab.label}</span><span className="text-base">{tab.icon}</span>
            </button>
          ))}
        </div>
        <div className="flex-1 border-l pl-3 text-sm text-gray-600 flex items-center">{tabs[active].label} Content</div>
      </div>
    </div>
  );
}
VerticalBottomIcon.propTypes = { label: PropTypes.string };