import { useState } from "react";
import PropTypes from "prop-types";

const quarters = ["Q1 (Jan-Mar)", "Q2 (Apr-Jun)", "Q3 (Jul-Sep)", "Q4 (Oct-Dec)"];

export default function Quarter({ label = "Quarter Picker" }) {
  const [selected, setSelected] = useState(null);
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-2">
        {quarters.map((q) => (
          <button 
            key={q} 
            onClick={() => setSelected(q)}
            className={`py-2 text-xs rounded-lg border transition ${
              selected === q 
                ? "bg-[var(--color-accent)] text-[var(--color-surface)] border-[var(--color-accent)] font-medium" 
                : "border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-muted)] bg-[var(--color-surface)]"
            }`}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
Quarter.propTypes = { label: PropTypes.string };