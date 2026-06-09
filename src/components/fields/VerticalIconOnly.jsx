import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠" }, { icon: "📊" }, { icon: "👤" }, { icon: "⚙️" }];
export default function VerticalIconOnly({ label = "Vertical Icon Only" }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex gap-3">
        <div className="flex flex-col gap-1 border-r pr-1">
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition ${active === i ? "bg-indigo-100 text-indigo-600" : "text-gray-400 hover:bg-gray-50"}`}>
              {tab.icon}
            </button>
          ))}
        </div>
        <div className="flex-1 text-sm text-gray-600 flex items-center">Content {active + 1}</div>
      </div>
    </div>
  );
}
VerticalIconOnly.propTypes = { label: PropTypes.string };