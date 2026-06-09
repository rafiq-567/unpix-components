import { useState } from "react";
import PropTypes from "prop-types";
export default function Year({ label = "Year Picker" }) {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex items-center gap-4 border rounded-xl px-4 py-3 w-fit">
        <button onClick={() => setYear(y => y - 1)} className="text-gray-400 hover:text-gray-700 text-lg font-bold">‹</button>
        <span className="text-gray-800 font-semibold w-12 text-center">{year}</span>
        <button onClick={() => setYear(y => y + 1)} className="text-gray-400 hover:text-gray-700 text-lg font-bold">›</button>
      </div>
    </div>
  );
}
Year.propTypes = { label: PropTypes.string };