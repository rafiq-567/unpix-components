import { useState } from "react";
import PropTypes from "prop-types";
const steps = [
  { label: "Account", desc: "Create account" },
  { label: "Profile", desc: "Add details" },
  { label: "Review",  desc: "Check info" },
  { label: "Done",    desc: "All set!" },
];
export default function StepWithText({ label = "Steps with Text" }) {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-3">{label}</p>
      <div className="flex items-start mb-6">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div onClick={() => setCurrent(i)}
                className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition font-bold text-sm ${i < current ? "bg-indigo-500 text-white" : i === current ? "bg-indigo-600 text-white ring-4 ring-indigo-100" : "bg-gray-200 text-gray-500"}`}>
                {i < current ? "✓" : i + 1}
              </div>
              <p className={`text-xs font-medium mt-1 ${i === current ? "text-indigo-600" : "text-gray-500"}`}>{step.label}</p>
              <p className="text-xs text-gray-400">{step.desc}</p>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 mt-[-18px] ${i < current ? "bg-indigo-500" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
          className="px-4 py-2 text-sm border rounded-lg disabled:opacity-40 hover:bg-gray-50">Back</button>
        <button onClick={() => setCurrent(c => Math.min(steps.length - 1, c + 1))} disabled={current === steps.length - 1}
          className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg disabled:opacity-40 hover:bg-indigo-700">Next</button>
      </div>
    </div>
  );
}
StepWithText.propTypes = { label: PropTypes.string };