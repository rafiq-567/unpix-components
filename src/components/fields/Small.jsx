import { useState } from "react";
import PropTypes from "prop-types";
export default function Small({ label = "Small Tabs" }) {
  const [tab, setTab] = useState(0);
  const tabs = ["Day", "Week", "Month"];
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="inline-flex bg-gray-100 rounded-lg p-0.5 gap-0.5">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${tab === i ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
Small.propTypes = { label: PropTypes.string };