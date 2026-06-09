import PropTypes from "prop-types";
export default function TimePickerField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-[var(--color-text-secondary)]">{label}</label>
      <input type="time" className="w-full border border-[var(--color-border)] rounded p-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)]" />
    </div>
  );
}
TimePickerField.propTypes = { label: PropTypes.string };
TimePickerField.defaultProps = { label: "Time" };