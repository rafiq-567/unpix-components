import PropTypes from "prop-types";
export default function LinearProgressField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]">{label}</label>
      <div className="w-full bg-[var(--color-bg-muted)] rounded-full h-2.5">
        <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: "60%" }} />
      </div>
      <p className="text-xs text-[var(--color-text-placeholder)] mt-1">60%</p>
    </div>
  );
}
LinearProgressField.propTypes = { label: PropTypes.string };
LinearProgressField.defaultProps = { label: "Linear Progress" };