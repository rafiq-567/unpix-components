import PropTypes from "prop-types";
export default function RadioGroupField({ label }) {
  return (
    <div>
      <label className="text-[var(--color-text-secondary)]">{label}</label>
      <div className="mt-2 space-y-2">
        <label className="flex gap-2 text-[var(--color-text-secondary)]"><input type="radio" name="radio" />Option 1</label>
        <label className="flex gap-2 text-[var(--color-text-secondary)]"><input type="radio" name="radio" />Option 2</label>
      </div>
    </div>
  );
}
RadioGroupField.propTypes = { label: PropTypes.string };
RadioGroupField.defaultProps = { label: "Radio Group" };