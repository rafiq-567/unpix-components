import PropTypes from "prop-types";
export default function EmailField({ label }) {
  return (
    <div>
      <label>{label}</label>
      <input type="email" placeholder="name@example.com" className="w-full border rounded px-3 py-2 mt-2" />
    </div>
  );
}
EmailField.propTypes = { label: PropTypes.string };
EmailField.defaultProps = { label: "Email Field" };