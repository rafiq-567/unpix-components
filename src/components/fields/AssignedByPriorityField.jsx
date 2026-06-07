// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Urgent",  value: 1, color: "#ef4444" },
  { name: "High",    value: 3, color: "#f97316" },
  { name: "Medium",  value: 2, color: "#eab308" },
  { name: "Low",     value: 1, color: "#6b7280" },
  { name: "None",    value: 2, color: "#d1d5db" },
];

export default function AssignedByPriorityField({ label }) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">{label || "Assigned by priority"}</h3>
        <select className="text-xs border rounded px-2 py-1 text-gray-500">
          <option>All time</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} barSize={32}>
          <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

AssignedByPriorityField.propTypes = {
  label: PropTypes.string,
};

AssignedByPriorityField.defaultProps = {
  label: "Assigned by priority",
};