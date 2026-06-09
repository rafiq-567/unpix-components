import PropTypes from "prop-types";
export default function CheckboxField({ label }) {
  return (
    <label className="flex gap-2 text-[var(--color-text-secondary)]">
      <input type="checkbox" />
      {label}
    </label>
  );
}
CheckboxField.propTypes = { label: PropTypes.string };
CheckboxField.defaultProps = { label: "Checkbox" };