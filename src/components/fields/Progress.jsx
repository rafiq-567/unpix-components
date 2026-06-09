import PropTypes from "prop-types";

export default function Progress({ label = "Progress", value = 65 }) {
  return (
    <div className="font-sans">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-[var(--color-text-secondary)]">{label}</span>
        <span className="text-sm text-[var(--color-text-muted)]">{value}%</span>
      </div>
      <div className="w-full bg-[var(--color-bg-subtle)] rounded-full h-2.5">
        <div className="bg-[var(--color-accent)] h-2.5 rounded-full transition-all" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
Progress.propTypes = { label: PropTypes.string, value: PropTypes.number };