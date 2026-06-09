import { useState } from "react";
import PropTypes from "prop-types";
export default function Counter({ label = "Counter", min = 0, max = 100 }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex items-center gap-4 border rounded-xl px-4 py-3 w-fit">
        <button onClick={() => setCount(c => Math.max(min, c - 1))}
          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg font-bold text-gray-700 flex items-center justify-center transition">−</button>
        <span className="text-xl font-bold text-gray-800 w-10 text-center">{count}</span>
        <button onClick={() => setCount(c => Math.min(max, c + 1))}
          className="w-8 h-8 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-bold text-white flex items-center justify-center transition">+</button>
      </div>
    </div>
  );
}
Counter.propTypes = { label: PropTypes.string, min: PropTypes.number, max: PropTypes.number };