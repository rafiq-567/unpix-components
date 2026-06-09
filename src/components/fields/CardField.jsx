import PropTypes from "prop-types";
export default function CardField({ label }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl shadow-sm p-4 bg-[var(--color-surface)] text-sm">
      <div className="font-semibold text-[var(--color-text-primary)] mb-1">{label}</div>
      <p className="text-[var(--color-text-placeholder)] text-xs">Card content goes here.</p>
    </div>
  );
}
CardField.propTypes = { label: PropTypes.string };
CardField.defaultProps = { label: "Card" };