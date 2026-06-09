import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "📁", label: "Files" }, { icon: "🔔", label: "Alerts" }, { icon: "💬", label: "Messages" }];
export default function NewLine({ label = "Icon + Label Tabs" }) {
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
NewLine.propTypes = { label: PropTypes.string };