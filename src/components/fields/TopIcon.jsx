import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠", label: "Home" }, { icon: "📊", label: "Stats" }, { icon: "⚙️", label: "Settings" }];
export default function TopIcon({ label = "Top Icon Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex border-b">
        {tabs.map((tab, i) => (
          <button key={tab.label} onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-1 px-6 py-2 text-xs border-b-2 transition ${active === i ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
            <span className="text-xl">{tab.icon}</span>{tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
TopIcon.propTypes = { label: PropTypes.string };