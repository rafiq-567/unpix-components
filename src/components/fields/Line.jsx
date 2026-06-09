import { LineChart, Line as ReLine, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import PropTypes from "prop-types";

const data = [
  { name: "Jan", value: 400 }, { name: "Feb", value: 300 },
  { name: "Mar", value: 600 }, { name: "Apr", value: 800 },
  { name: "May", value: 500 }, { name: "Jun", value: 900 },
];

export default function Line({ label = "Line Chart" }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)] font-sans">
      <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">{label}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--color-text-placeholder)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "var(--color-text-placeholder)" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)", borderRadius: "8px" }} />
          <ReLine type="monotone" dataKey="value" stroke="var(--color-accent)" strokeWidth={2} dot={{ fill: "var(--color-accent)" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
Line.propTypes = { label: PropTypes.string };