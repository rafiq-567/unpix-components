import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "→", label: "Next" }, { icon: "✓", label: "Done" }, { icon: "✕", label: "Cancel" }];
export default function RightIcon({ label = "Right Icon Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex border-b">
        {tabs.map((tab, i) => (
          <button key={tab.label} onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm border-b-2 transition ${active === i ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
            {tab.label}<span>{tab.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
RightIcon.propTypes = { label: PropTypes.string };