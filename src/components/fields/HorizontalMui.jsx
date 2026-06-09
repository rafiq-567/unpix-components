import PropTypes from "prop-types";

export default function HorizontalMui({ label = "MUI Style Progress", value = 70 }) {
  return (
    <div className="font-sans">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">{label}</p>
      <div className="relative w-full bg-[var(--color-accent-subtle)] rounded h-1.5">
        <div className="absolute top-0 left-0 h-1.5 bg-[var(--color-accent)] rounded transition-all" style={{ width: `${value}%` }} />
      </div>
      <p className="text-xs text-[var(--color-text-placeholder)] mt-1">{value}%</p>
    </div>
  );
}
HorizontalMui.propTypes = { label: PropTypes.string, value: PropTypes.number };