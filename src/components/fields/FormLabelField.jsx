import PropTypes from "prop-types";
export default function FormLabelField({ label }) {
  return (
    <label className="block text-sm font-medium text-rose-600">
      {label}<span className="text-rose-400 ml-1 text-xs">(Form Label)</span>
    </label>
  );
}
FormLabelField.propTypes = { label: PropTypes.string };
FormLabelField.defaultProps = { label: "Form Label" };