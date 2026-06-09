import { useState } from "react";
import PropTypes from "prop-types";
export default function Slider({ label = "Slider", min = 0, max = 100, defaultValue = 50 }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-semibold text-indigo-600">{value}</span>
      </div>
      <input type="range" min={min} max={max} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-indigo-600" />
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-400">{min}</span>
        <span className="text-xs text-gray-400">{max}</span>
      </div>
    </div>
  );
}
Slider.propTypes = { label: PropTypes.string, min: PropTypes.number, max: PropTypes.number, defaultValue: PropTypes.number };