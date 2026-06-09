import { LineChart, Line as ReLine, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import PropTypes from "prop-types";
const data = [
  { name: "Jan", value: 400 }, { name: "Feb", value: 300 },
  { name: "Mar", value: 600 }, { name: "Apr", value: 800 },
  { name: "May", value: 500 }, { name: "Jun", value: 900 },
];
export default function Line({ label = "Line Chart" }) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <h3 className="font-semibold text-gray-800 mb-3">{label}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <ReLine type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={{ fill: "#6366f1" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
Line.propTypes = { label: PropTypes.string };