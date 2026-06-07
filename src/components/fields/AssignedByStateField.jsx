import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
const data = [
  { name: "Backlog", value: 20, color: "#d1d5db" },
  { name: "Unstarted", value: 0, color: "#6b7280" },
  { name: "Started", value: 0, color: "#eab308" },
  { name: "Done", value: 80, color: "#22c55e" },
];
export default function AssignedByStateField({ label }) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">{label}</h3>
        <select className="text-xs border rounded px-2 py-1 text-gray-500"><option>All time</option></select>
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
            <span className="text-lg font-bold text-gray-800">20%</span>
            <span className="text-xs text-gray-400">Backlog</span>
          </div>
        </div>
        <div className="space-y-2 flex-1">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="text-gray-600 flex-1">{d.name}</span>
              <span className="text-gray-400 text-xs">{d.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
AssignedByStateField.propTypes = { label: PropTypes.string };
AssignedByStateField.defaultProps = { label: "Assigned by state" };