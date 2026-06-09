import { useState } from "react";
import PropTypes from "prop-types";
export default function SwitchField({ label }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      <label className="block mb-2 text-[var(--color-text-secondary)]">{label}</label>
      <button type="button" onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 rounded-full transition ${enabled ? "bg-[var(--color-accent)]" : "bg-[var(--color-border-strong)]"}`}>
        <div className={`h-5 w-5 bg-white rounded-full transition-transform ${enabled ? "translate-x-6" : "translate-x-0.5"}`} />
      </button>
    </div>
  );
}
SwitchField.propTypes = { label: PropTypes.string };
SwitchField.defaultProps = { label: "Switch" };