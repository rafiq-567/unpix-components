import PropTypes from "prop-types";
export default function StackField({ label }) {
  return (
    <div className="border-2 border-dashed border-blue-300 rounded-lg p-3 bg-blue-50 space-y-2">
      <p className="text-xs font-medium text-blue-600">{label} — Stack</p>
      {["Item 1", "Item 2", "Item 3"].map((item) => (
        <div key={item} className="bg-white border border-blue-200 rounded px-3 py-1.5 text-xs text-blue-700">{item}</div>
      ))}
    </div>
  );
}
StackField.propTypes = { label: PropTypes.string };
StackField.defaultProps = { label: "Stack" };