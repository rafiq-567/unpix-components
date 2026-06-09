import PropTypes from "prop-types";
export default function TableField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]">{label}</label>
      <table className="w-full text-sm border border-[var(--color-border)] rounded overflow-hidden">
        <thead className="bg-[var(--color-bg-muted)]">
          <tr>{["Name", "Status", "Date"].map((h) => (
            <th key={h} className="text-left px-3 py-2 border-b border-[var(--color-border)] font-medium text-[var(--color-text-muted)]">{h}</th>
          ))}</tr>
        </thead>
        <tbody className="bg-[var(--color-surface)]">
          {[["Alice", "Active", "2024-01-01"], ["Bob", "Inactive", "2024-02-15"]].map((row, i) => (
            <tr key={i} className="hover:bg-[var(--color-bg-hover)]">
              {row.map((cell, j) => <td key={j} className="px-3 py-2 border-b border-[var(--color-border)] text-[var(--color-text-secondary)]">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
TableField.propTypes = { label: PropTypes.string };
TableField.defaultProps = { label: "Table" };