import PropTypes from "prop-types";
export default function SlotField({ label }) {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-orange-50 text-center">
      <p className="text-xs font-medium text-orange-600">{label}</p>
      <p className="text-xs text-orange-400 mt-1">Slot placeholder</p>
    </div>
  );
}
SlotField.propTypes = { label: PropTypes.string };
SlotField.defaultProps = { label: "Slot" };