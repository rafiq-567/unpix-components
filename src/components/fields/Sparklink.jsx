import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import PropTypes from "prop-types";
const data = [{ v: 10 }, { v: 40 }, { v: 20 }, { v: 60 }, { v: 30 }, { v: 80 }, { v: 50 }];
export default function Sparklink({ label = "Sparkline", value = "8,240", trend = "+12%" }) {
  return (
    <div className="border rounded-xl p-4 bg-white flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-xs text-green-500 font-medium">{trend}</p>
      </div>
      <ResponsiveContainer width={100} height={50}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={2} dot={false} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
Sparklink.propTypes = { label: PropTypes.string, value: PropTypes.string, trend: PropTypes.string };