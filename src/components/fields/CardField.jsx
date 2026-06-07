import PropTypes from "prop-types";
export default function CardField({ label }) {
  return (
    <div className="border rounded-xl shadow-sm p-4 bg-white text-sm">
      <div className="font-semibold text-gray-800 mb-1">{label}</div>
      <p className="text-gray-400 text-xs">Card content goes here.</p>
    </div>
  );
}
CardField.propTypes = { label: PropTypes.string };
CardField.defaultProps = { label: "Card" };