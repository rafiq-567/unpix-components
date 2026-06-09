import { useState } from "react";
import PropTypes from "prop-types";
export default function Week({ label = "Week Picker" }) {
  const [week, setWeek] = useState(1);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex items-center gap-4 border rounded-xl px-4 py-3 w-fit">
        <button onClick={() => setWeek(w => Math.max(1, w - 1))} className="text-gray-400 hover:text-gray-700 text-lg font-bold">‹</button>
        <span className="text-gray-800 font-semibold">Week {week}</span>
        <button onClick={() => setWeek(w => Math.min(52, w + 1))} className="text-gray-400 hover:text-gray-700 text-lg font-bold">›</button>
      </div>
    </div>
  );
}
Week.propTypes = { label: PropTypes.string };