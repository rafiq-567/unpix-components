import PropTypes from "prop-types";

export default function Horizontal({ label = "Horizontal Progress", value = 40, color = "var(--color-accent)" }) {
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="w-full bg-[var(--color-bg-subtle)] rounded-full h-4 overflow-hidden">
        <div className="h-4 rounded-full flex items-center justify-end pr-2 transition-all"
          style={{ width: `${value}%`, backgroundColor: color }}>
          <span className="text-[var(--color-surface)] text-xs font-medium">{value}%</span>
        </div>
      </div>
    </div>
  );
}
Horizontal.propTypes = { label: PropTypes.string, value: PropTypes.number, color: PropTypes.string };