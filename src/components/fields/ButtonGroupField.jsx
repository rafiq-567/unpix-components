import { useState } from "react";
import PropTypes from "prop-types";
export default function ButtonGroupField({ label }) {
  const [selected, setSelected] = useState("Option 1");
  const options = ["Option 1", "Option 2"];
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button key={opt} onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded border text-sm transition ${selected === opt ? "bg-indigo-500 text-white border-indigo-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
ButtonGroupField.propTypes = { label: PropTypes.string };
ButtonGroupField.defaultProps = { label: "Button Group" };