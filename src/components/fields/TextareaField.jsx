import PropTypes from "prop-types";
export default function TextareaField({ label }) {
  return (
    <div>
      <label className="block mb-2">{label}</label>
      <textarea rows={4} placeholder="Enter text..." className="w-full border rounded p-2" />
    </div>
  );
}
TextareaField.propTypes = { label: PropTypes.string };
TextareaField.defaultProps = { label: "Textarea" };