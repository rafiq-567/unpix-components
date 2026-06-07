import PropTypes from "prop-types";
export default function FormControlField({ label }) {
  return (
    <div className="border rounded-lg p-3 bg-pink-50 border-pink-200">
      <label className="block text-xs font-medium text-pink-700 mb-1">{label}</label>
      <input className="w-full border border-pink-200 rounded px-3 py-1.5 text-sm" placeholder="Form control input" />
    </div>
  );
}
FormControlField.propTypes = { label: PropTypes.string };
FormControlField.defaultProps = { label: "Form Control" };