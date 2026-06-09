import { useState } from "react";
import PropTypes from "prop-types";

export default function Year({ label = "Year Picker" }) {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className="font-sans">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="flex items-center gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl px-4 py-3 w-fit">
        <button onClick={() => setYear(y => y - 1)} className="text-[var(--color-text-placeholder)] hover:text-[var(--color-text-primary)] text-lg font-bold">‹</button>
        <span className="text-[var(--color-text-primary)] font-semibold w-12 text-center">{year}</span>
        <button onClick={() => setYear(y => y + 1)} className="text-[var(--color-text-placeholder)] hover:text-[var(--color-text-primary)] text-lg font-bold">›</button>
      </div>
    </div>
  );
}
Year.propTypes = { label: PropTypes.string };