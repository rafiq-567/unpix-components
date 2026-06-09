import { PieChart, Pie as RePie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import PropTypes from "prop-types";

const data = [
  { name: "Design", value: 400, color: "var(--color-accent)" },
  { name: "Dev",    value: 300, color: "var(--color-warning)" },
  { name: "QA",     value: 200, color: "var(--color-success)" },
  { name: "PM",     value: 100, color: "var(--color-text-placeholder)" },
];

export default function Pie({ label = "Pie Chart" }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)] font-sans">
      <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">{label}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <RePie data={data} cx="50%" cy="50%" outerRadius={70} dataKey="value">
            {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </RePie>
          <Tooltip contentStyle={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)", borderRadius: "8px" }} />
          <Legend wrapperStyle={{ fontSize: "12px", color: "var(--color-text-muted)" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
Pie.propTypes = { label: PropTypes.string };