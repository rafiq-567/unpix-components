import { useState } from "react";
import PropTypes from "prop-types";
export default function Basic({ label = "Basic Tabs" }) {
  const [tab, setTab] = useState(0);
  const tabs = ["Tab One", "Tab Two", "Tab Three"];
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="border-b flex gap-0">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)}
            className={`px-5 py-2.5 text-sm font-medium border-b-2 transition ${tab === i ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="p-4 text-sm text-gray-600">Content for {tabs[tab]}</div>
    </div>
  );
}
Basic.propTypes = { label: PropTypes.string };