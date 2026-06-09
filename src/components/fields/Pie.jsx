import { PieChart, Pie as RePie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import PropTypes from "prop-types";
const data = [
  { name: "Design", value: 400, color: "#6366f1" },
  { name: "Dev",    value: 300, color: "#f97316" },
  { name: "QA",     value: 200, color: 'var(--color-success)' },
  { name: "PM",     value: 100, color: "#eab308" },
];
export default function Pie({ label = "Pie Chart" }) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <h3 className="font-semibold text-gray-800 mb-3">{label}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <RePie data={data} cx="50%" cy="50%" outerRadius={70} dataKey="value">
            {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </RePie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
Pie.propTypes = { label: PropTypes.string };