import { useState } from "react";
import PropTypes from "prop-types";
export default function Centered({ label = "Centered Tabs" }) {
  const [tab, setTab] = useState(0);
  const tabs = ["Overview", "Details", "Reviews"];
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex justify-center border-b gap-2">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)}
            className={`px-5 py-2.5 text-sm font-medium border-b-2 transition ${tab === i ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="p-4 text-sm text-gray-600 text-center">Content for {tabs[tab]}</div>
    </div>
  );
}
Centered.propTypes = { label: PropTypes.string };