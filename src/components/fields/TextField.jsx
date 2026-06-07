import PropTypes from "prop-types";
export default function TextField({ label = "Text Field" }) {
  return (
    <div>
      <label className="block mb-2">{label}</label>
      <input className="w-full border rounded p-2" placeholder={label} />
    </div>
  );
}
TextField.propTypes = { label: PropTypes.string };
