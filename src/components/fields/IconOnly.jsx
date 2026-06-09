import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠" }, { icon: "📊" }, { icon: "👤" }, { icon: "⚙️" }];
export default function IconOnly({ label = "Icon Only Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex border-b">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`flex-1 py-3 text-xl border-b-2 transition ${active === i ? "border-indigo-600" : "border-transparent opacity-50 hover:opacity-75"}`}>
            {tab.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
IconOnly.propTypes = { label: PropTypes.string };