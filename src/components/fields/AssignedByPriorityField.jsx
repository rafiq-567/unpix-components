import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Urgent",  value: 1, color: 'var(--color-danger)' },
  { name: "High",    value: 3, color: "#f97316" },
  { name: "Medium",  value: 2, color: "#eab308" },
  { name: "Low",     value: 1, color: 'var(--color-text-muted)' },
  { name: "None",    value: 2, color: 'var(--color-text-disabled)' },
];

export default function AssignedByPriorityField({ label }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-[var(--color-text-primary)]">{label || "Assigned by priority"}</h3>
        <select className="text-xs border border-[var(--color-border)] rounded px-2 py-1 text-[var(--color-text-muted)] bg-[var(--color-surface)]">
          <option>All time</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} barSize={32}>
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
AssignedByPriorityField.propTypes = { label: PropTypes.string };
AssignedByPriorityField.defaultProps = { label: "Assigned by priority" };