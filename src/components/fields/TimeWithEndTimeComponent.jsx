import PropTypes from "prop-types";

export default function TimeWithEndTimeComponent({ label = "Time Range Picker" }) {
  return (
    <div className="font-sans">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <label className="text-xs text-[var(--color-text-placeholder)] block mb-1">Start Time</label>
          <input 
            type="time" 
            className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-lg px-3 py-2 text-sm focus:outline-[var(--color-accent)]" 
          />
        </div>
        <span className="text-[var(--color-text-placeholder)] mt-5">→</span>
        <div className="flex-1">
          <label className="text-xs text-[var(--color-text-placeholder)] block mb-1">End Time</label>
          <input 
            type="time" 
            className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-lg px-3 py-2 text-sm focus:outline-[var(--color-accent)]" 
          />
        </div>
      </div>
    </div>
  );
}
TimeWithEndTimeComponent.propTypes = { label: PropTypes.string };