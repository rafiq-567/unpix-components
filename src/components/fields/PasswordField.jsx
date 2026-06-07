import PropTypes from "prop-types";
export default function PasswordField({ label }) {
  return (
    <div>
      <label>{label}</label>
      <input type="password" placeholder="********" className="w-full border rounded px-3 py-2 mt-2" />
    </div>
  );
}
PasswordField.propTypes = { label: PropTypes.string };
PasswordField.defaultProps = { label: "Password" };