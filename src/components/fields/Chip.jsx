import { useState } from "react";
import PropTypes from "prop-types";

const defaultChips = ["React", "TypeScript", "Tailwind", "Next.js", "Vite"];

export default function Chip({ label = "Chips" }) {
  const [chips, setChips] = useState(defaultChips);
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-medium rounded-full border border-[var(--color-border)]">
            {chip}
            <button onClick={() => setChips(chips.filter(c => c !== chip))} className="text-[var(--color-text-placeholder)] hover:text-[var(--color-text-primary)] ml-1">×</button>
          </span>
        ))}
      </div>
    </div>
  );
}
Chip.propTypes = { label: PropTypes.string };