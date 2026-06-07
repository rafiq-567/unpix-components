import PropTypes from "prop-types";
export default function OrderedListField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 border rounded p-3">
        <li>First item</li><li>Second item</li><li>Third item</li>
      </ol>
    </div>
  );
}
OrderedListField.propTypes = { label: PropTypes.string };
OrderedListField.defaultProps = { label: "Ordered List" };