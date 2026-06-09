import { useState } from "react";
import PropTypes from "prop-types";

export default function Slider({ label = "Slider", min = 0, max = 100, defaultValue = 50 }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="font-sans">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-[var(--color-text-secondary)]">{label}</span>
        <span className="text-sm font-semibold text-[var(--color-accent)]">{value}</span>
      </div>
      <input type="range" min={min} max={max} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-[var(--color-bg-subtle)] rounded-full appearance-none cursor-pointer accent-[var(--color-accent)]" />
      <div className="flex justify-between mt-1">
        <span className="text-xs text-[var(--color-text-placeholder)]">{min}</span>
        <span className="text-xs text-[var(--color-text-placeholder)]">{max}</span>
      </div>
    </div>
  );
}
Slider.propTypes = { label: PropTypes.string, min: PropTypes.number, max: PropTypes.number, defaultValue: PropTypes.number };