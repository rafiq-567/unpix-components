import PropTypes from "prop-types";
export default function SelectField({ label }) {
  return (
    <div>
      <label>{label}</label>
      <select className="w-full border rounded px-3 py-2 mt-2">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  );
}
SelectField.propTypes = { label: PropTypes.string };
SelectField.defaultProps = { label: "Select" };