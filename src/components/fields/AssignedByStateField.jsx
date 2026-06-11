import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
const data = [
  { name: "Backlog", value: 20, color: 'var(--color-text-disabled)' },
  { name: "Unstarted", value: 0, color: 'var(--color-text-muted)' },
  { name: "Started", value: 0, color: "#eab308" },
  { name: "Done", value: 80, color: 'var(--color-success)' },
];
export default function AssignedByStateField({ label }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)]">
      <div className="flex items-center justify-between mb-3">
        <p style={{ marginBottom: 12, fontWeight: 900, color: 'var(--color-text-secondary)' }}>Assigned By State</p>
        <h3 className="font-semibold text-[var(--color-text-primary)]">{label}</h3>
        <select className="text-xs border border-[var(--color-border)] rounded px-2 py-1 text-[var(--color-text-muted)] bg-[var(--color-surface)]"><option>All time</option></select>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-36 h-36">
          <ResponsiveContainer width={144} height={144}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={60}
                dataKey="value" startAngle={90} endAngle={-270}>
                {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-[var(--color-text-primary)]">20%</span>
            <span className="text-xs text-[var(--color-text-muted)]">Backlog</span>
          </div>
        </div>
        <div className="space-y-2 flex-1">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="text-[var(--color-text-secondary)] flex-1">{d.name}</span>
              <span className="text-[var(--color-text-placeholder)] text-xs">{d.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
AssignedByStateField.propTypes = { label: PropTypes.string };
AssignedByStateField.defaultProps = { label: "Assigned by state" };