import { useState } from "react";
import PropTypes from "prop-types";

const defaultColumns = ["Name", "Role", "Status", "Date"];
const defaultRows = [
  { Name: "Alice Johnson", Role: "Designer", Status: "Active", Date: "2024-01-15" },
  { Name: "Bob Smith",     Role: "Developer", Status: "Active", Date: "2024-02-20" },
  { Name: "Carol White",   Role: "Manager",  Status: "Inactive", Date: "2024-03-10" },
  { Name: "David Lee",     Role: "QA",       Status: "Active", Date: "2024-04-05" },
  { Name: "Eva Martinez",  Role: "DevOps",   Status: "Active", Date: "2024-05-18" },
];

export default function DataGrid({ label = "Data Grid" }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ col: null, dir: 1 });
  const filtered = defaultRows
    .filter(row => Object.values(row).some(v => v.toLowerCase().includes(search.toLowerCase())))
    .sort((a, b) => sort.col ? a[sort.col].localeCompare(b[sort.col]) * sort.dir : 0);
  const toggleSort = (col) => setSort(s => ({ col, dir: s.col === col ? -s.dir : 1 }));
  return (
    <div className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-surface)] font-sans">
      <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
        <h3 className="font-semibold text-[var(--color-text-primary)]">{label}</h3>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search..." className="border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-lg px-3 py-1.5 text-sm w-48 focus:outline-[var(--color-accent)]" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[var(--color-bg-subtle)]">
            <tr>
              {defaultColumns.map(col => (
                <th key={col} onClick={() => toggleSort(col)}
                  className="text-left px-4 py-3 font-medium text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-accent)] select-none">
                  {col} {sort.col === col ? (sort.dir === 1 ? "↑" : "↓") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border)]">
            {filtered.map((row, i) => (
              <tr key={i} className="hover:bg-[var(--color-bg-subtle)]">
                {defaultColumns.map(col => (
                  <td key={col} className="px-4 py-3 text-[var(--color-text-secondary)]">
                    {col === "Status" ? (
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row[col] === "Active" ? "bg-[var(--color-success-subtle)] text-[var(--color-success)]" : "bg-[var(--color-bg-subtle)] text-[var(--color-text-placeholder)]"}`}>
                        {row[col]}
                      </span>
                    ) : row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
DataGrid.propTypes = { label: PropTypes.string };