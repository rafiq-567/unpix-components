import { useState } from "react";
import PropTypes from "prop-types";
const tabs = ["Dashboard", "Users", "Products", "Orders", "Reports"];
export default function VerticalBar({ label = "Vertical Bar Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex gap-4">
        <div className="flex flex-col gap-1">
          {tabs.map((tab, i) => (
            <button key={tab} onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm text-left rounded-lg transition ${active === i ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="flex-1 border-l pl-4 text-sm text-gray-600 flex items-start pt-2">Content for {tabs[active]}</div>
      </div>
    </div>
  );
}
VerticalBar.propTypes = { label: PropTypes.string };