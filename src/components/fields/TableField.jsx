import PropTypes from "prop-types";
export default function TableField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <table className="w-full text-sm border rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>{["Name", "Status", "Date"].map((h) => (
            <th key={h} className="text-left px-3 py-2 border-b font-medium text-gray-600">{h}</th>
          ))}</tr>
        </thead>
        <tbody>
          {[["Alice", "Active", "2024-01-01"], ["Bob", "Inactive", "2024-02-15"]].map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              {row.map((cell, j) => <td key={j} className="px-3 py-2 border-b text-gray-700">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
TableField.propTypes = { label: PropTypes.string };
TableField.defaultProps = { label: "Table" };