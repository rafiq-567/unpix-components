import { useState } from "react";
import PropTypes from "prop-types";
const tabs = ["Overview", "Analytics", "Reports", "Settings"];
export default function Vertical({ label = "Vertical Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex border rounded-xl overflow-hidden">
        <div className="flex flex-col border-r w-32">
          {tabs.map((tab, i) => (
            <button key={tab} onClick={() => setActive(i)}
              className={`px-4 py-3 text-sm text-left border-r-2 transition ${active === i ? "border-indigo-600 text-indigo-600 bg-indigo-50" : "border-transparent text-gray-500 hover:bg-gray-50"}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="flex-1 p-4 text-sm text-gray-600">Content for {tabs[active]}</div>
      </div>
    </div>
  );
}
Vertical.propTypes = { label: PropTypes.string };