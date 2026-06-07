import PropTypes from "prop-types";
export default function TimeRangeField({ label }) {
  return (
    <div>
      <label className="block mb-2">{label}</label>
      <div className="grid grid-cols-2 gap-2">
        <input type="time" className="border rounded p-2" />
        <input type="time" className="border rounded p-2" />
      </div>
    </div>
  );
}
TimeRangeField.propTypes = { label: PropTypes.string };
TimeRangeField.defaultProps = { label: "Time Range" };