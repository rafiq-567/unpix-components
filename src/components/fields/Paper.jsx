import PropTypes from "prop-types";

export default function Paper({ label = "Paper", elevation = 2 }) {
  const shadows = ["shadow-none", "shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl"];
  return (
    <div className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 ${shadows[Math.min(elevation, 5)]} font-sans`}>
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">{label}</p>
      <p className="text-xs text-[var(--color-text-placeholder)]">Elevation: {elevation}</p>
      <p className="text-sm text-[var(--color-text-muted)] mt-2">Paper component with configurable elevation shadow.</p>
    </div>
  );
}
Paper.propTypes = { label: PropTypes.string, elevation: PropTypes.number };