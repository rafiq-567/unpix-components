import { useState } from "react";
import PropTypes from "prop-types";
export default function ButtonGroupField({ label }) {
  const [selected, setSelected] = useState("Option 1");
  const options = ["Option 1", "Option 2"];
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]">{label}</label>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button key={opt} onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded border text-sm transition ${selected === opt ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:bg-[var(--color-bg-hover)]"}`}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
ButtonGroupField.propTypes = { label: PropTypes.string };
ButtonGroupField.defaultProps = { label: "Button Group" };