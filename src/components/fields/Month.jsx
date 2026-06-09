import { useState } from "react";
import PropTypes from "prop-types";
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export default function Month({ label = "Month Picker" }) {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="grid grid-cols-4 gap-2">
        {months.map((m) => (
          <button key={m} onClick={() => setSelected(m)}
            className={`py-1.5 text-xs rounded-lg border transition ${selected === m ? "bg-indigo-500 text-white border-indigo-500" : "hover:border-indigo-400 text-gray-600"}`}>
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
Month.propTypes = { label: PropTypes.string };