import PropTypes from "prop-types";
export default function TimeRangeField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-[var(--color-text-secondary)]">{label}</label>
      <div className="grid grid-cols-2 gap-2">
        <input type="time" className="border border-[var(--color-border)] rounded p-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)]" />
        <input type="time" className="border border-[var(--color-border)] rounded p-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)]" />
      </div>
    </div>
  );
}
TimeRangeField.propTypes = { label: PropTypes.string };
TimeRangeField.defaultProps = { label: "Time Range" };