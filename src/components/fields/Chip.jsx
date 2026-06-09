import { useState } from "react";
import PropTypes from "prop-types";
const defaultChips = ["React", "TypeScript", "Tailwind", "Next.js", "Vite"];
export default function Chip({ label = "Chips" }) {
  const [chips, setChips] = useState(defaultChips);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-200">
            {chip}
            <button onClick={() => setChips(chips.filter(c => c !== chip))} className="text-indigo-400 hover:text-indigo-700 ml-1">×</button>
          </span>
        ))}
      </div>
    </div>
  );
}
Chip.propTypes = { label: PropTypes.string };