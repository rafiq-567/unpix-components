import { useState } from "react";
import PropTypes from "prop-types";

export default function Week({ label = "Week Picker" }) {
  const [week, setWeek] = useState(1);
  return (
    <div className="font-sans">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="flex items-center gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl px-4 py-3 w-fit">
        <button onClick={() => setWeek(w => Math.max(1, w - 1))} className="text-[var(--color-text-placeholder)] hover:text-[var(--color-text-primary)] text-lg font-bold">‹</button>
        <span className="text-[var(--color-text-primary)] font-semibold">Week {week}</span>
        <button onClick={() => setWeek(w => Math.min(52, w + 1))} className="text-[var(--color-text-placeholder)] hover:text-[var(--color-text-primary)] text-lg font-bold">›</button>
      </div>
    </div>
  );
}
Week.propTypes = { label: PropTypes.string };