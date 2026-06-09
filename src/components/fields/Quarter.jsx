import { useState } from "react";
import PropTypes from "prop-types";
const quarters = ["Q1 (Jan-Mar)", "Q2 (Apr-Jun)", "Q3 (Jul-Sep)", "Q4 (Oct-Dec)"];
export default function Quarter({ label = "Quarter Picker" }) {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-2">
        {quarters.map((q) => (
          <button key={q} onClick={() => setSelected(q)}
            className={`py-2 text-xs rounded-lg border transition ${selected === q ? "bg-indigo-500 text-white border-indigo-500" : "hover:border-indigo-400 text-gray-600"}`}>
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
Quarter.propTypes = { label: PropTypes.string };