import PropTypes from "prop-types";
export default function DividerField({ label }) {
  return (
    <div className="flex items-center gap-3">
      <hr className="flex-1 border-gray-300" />
      {label && <span className="text-xs text-gray-400">{label}</span>}
      <hr className="flex-1 border-gray-300" />
    </div>
  );
}
DividerField.propTypes = { label: PropTypes.string };
DividerField.defaultProps = { label: "Divider" };