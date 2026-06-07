import PropTypes from "prop-types";
export default function UnorderedListField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 border rounded p-3">
        <li>First item</li><li>Second item</li><li>Third item</li>
      </ul>
    </div>
  );
}
UnorderedListField.propTypes = { label: PropTypes.string };
UnorderedListField.defaultProps = { label: "Unordered List" };