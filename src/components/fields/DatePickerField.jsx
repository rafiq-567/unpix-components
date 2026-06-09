import PropTypes from "prop-types";
export default function DatePickerField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]">{label}</label>
      <input type="date" className="w-full border border-[var(--color-border)] rounded px-3 py-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)]" />
    </div>
  );
}
DatePickerField.propTypes = { label: PropTypes.string };
DatePickerField.defaultProps = { label: "Date" };