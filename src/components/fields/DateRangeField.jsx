import PropTypes from "prop-types";
export default function DatePickerField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <input type="date" className="w-full border rounded px-3 py-2" />
    </div>
  );
}
DatePickerField.propTypes = { label: PropTypes.string };
DatePickerField.defaultProps = { label: "Date" };