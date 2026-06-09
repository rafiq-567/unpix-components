import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠", label: "Home" }, { icon: "🔍", label: "Search" }, { icon: "❤️", label: "Saved" }, { icon: "👤", label: "Profile" }];
export default function BottomIcon({ label = "Bottom Icon Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="border rounded-2xl overflow-hidden">
        <div className="h-24 bg-gray-50 flex items-center justify-center text-sm text-gray-400">
          {tabs[active].label} Content
        </div>
        <div className="flex border-t bg-white">
          {tabs.map((tab, i) => (
            <button key={tab.label} onClick={() => setActive(i)}
              className={`flex-1 flex flex-col items-center py-3 gap-1 transition ${active === i ? "text-indigo-600" : "text-gray-400 hover:text-gray-600"}`}>
              <span className="text-xl">{tab.icon}</span>
              <span className="text-xs">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
BottomIcon.propTypes = { label: PropTypes.string };