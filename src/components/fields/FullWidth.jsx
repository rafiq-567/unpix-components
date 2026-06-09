import { useState } from "react";
import PropTypes from "prop-types";
export default function FullWidth({ label = "Full Width Tabs" }) {
  const [tab, setTab] = useState(0);
  const tabs = ["All", "Active", "Completed", "Archived"];
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex border-b">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)}
            className={`flex-1 py-2.5 text-sm font-medium border-b-2 transition ${tab === i ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="p-4 text-sm text-gray-600">Content for {tabs[tab]}</div>
    </div>
  );
}
FullWidth.propTypes = { label: PropTypes.string };