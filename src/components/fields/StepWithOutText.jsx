import { useState } from "react";
import PropTypes from "prop-types";
export default function StepWithOutText({ label = "Steps without Text", steps = 4 }) {
  const [current, setCurrent] = useState(1);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-3">{label}</p>
      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: steps }, (_, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div onClick={() => setCurrent(i + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition ${i + 1 < current ? "bg-indigo-500" : i + 1 === current ? "bg-indigo-600 ring-4 ring-indigo-100" : "bg-gray-200"}`}>
              {i + 1 < current ? <span className="text-white text-xs">✓</span> : <span className={`text-xs font-bold ${i + 1 === current ? "text-white" : "text-gray-400"}`}>{i + 1}</span>}
            </div>
            {i < steps - 1 && <div className={`flex-1 h-0.5 ${i + 1 < current ? "bg-indigo-500" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setCurrent(c => Math.max(1, c - 1))} disabled={current === 1}
          className="px-4 py-2 text-sm border rounded-lg disabled:opacity-40 hover:bg-gray-50">Back</button>
        <button onClick={() => setCurrent(c => Math.min(steps, c + 1))} disabled={current === steps}
          className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg disabled:opacity-40 hover:bg-indigo-700">Next</button>
      </div>
    </div>
  );
}
StepWithOutText.propTypes = { label: PropTypes.string, steps: PropTypes.number };