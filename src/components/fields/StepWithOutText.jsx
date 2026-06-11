import { useState } from "react";
import PropTypes from "prop-types";

export default function StepWithOutText({ label = "Steps without Text", steps = 4 }) {
  const [current, setCurrent] = useState(1);
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-3">{label}</p>
      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: steps }, (_, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div onClick={() => setCurrent(i + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition ${i + 1 < current ? "bg-[var(--color-accent)]" : i + 1 === current ? "bg-[var(--color-accent)] ring-4 ring-[var(--color-accent-subtle)]" : "bg-[var(--color-bg-subtle)]"}`}>
              {i + 1 < current ? <span className="text-[var(--color-surface)] text-xs">✓</span> : <span className={`text-xs font-bold ${i + 1 === current ? "text-[var(--color-surface)]" : "text-[var(--color-text-placeholder)]"}`}>{i + 1}</span>}
            </div>
            {i < steps - 1 && <div className={`flex-1 h-0.5 ${i + 1 < current ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"}`} />}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setCurrent(c => Math.max(1, c - 1))} disabled={current === 1}
          className="px-4 py-2 text-sm border border-[var(--color-border)] rounded-lg text-[var(--color-text-secondary)] disabled:opacity-40 hover:bg-[var(--color-bg-subtle)]">Back</button>
        <button onClick={() => setCurrent(c => Math.min(steps, c + 1))} disabled={current === steps}
          className="px-4 py-2 text-sm bg-[var(--color-accent)] text-[var(--color-surface)] rounded-lg disabled:opacity-40 hover:opacity-90 font-medium">Next</button>
      </div>
    </div>
  );
}
StepWithOutText.propTypes = { label: PropTypes.string, steps: PropTypes.number };