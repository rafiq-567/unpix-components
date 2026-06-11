import { useState } from "react";
import PropTypes from "prop-types";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function Month({ label = "Month Picker" }) {
  const [selected, setSelected] = useState(null);
  return (
    <div className="font-sans mt-2">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="grid grid-cols-4 gap-2">
        {months.map((m) => (
          <button 
            key={m} 
            onClick={() => setSelected(m)}
            className={`py-1.5 text-xs rounded-lg border transition ${
              selected === m 
                ? "bg-[var(--color-accent)] text-[var(--color-surface)] border-[var(--color-accent)] font-medium" 
                : "border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-muted)] bg-[var(--color-surface)]"
            }`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
Month.propTypes = { label: PropTypes.string };