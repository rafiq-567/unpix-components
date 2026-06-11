import { BarChart, Bar as ReBar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import PropTypes from "prop-types";

const data = [
  { name: "Jan", value: 400 }, { name: "Feb", value: 300 },
  { name: "Mar", value: 600 }, { name: "Apr", value: 800 },
  { name: "May", value: 500 }, { name: "Jun", value: 900 },
];

export default function Bar({ label = "Bar Chart" }) {
  return (
    <div className="border border-[var(--color-border)] text-lg  rounded-xl p-4 bg-[var(--color-surface)] font-sans">
      <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">{label}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--color-text-placeholder)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "var(--color-text-placeholder)" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)", borderRadius: "8px" }} />
          <ReBar dataKey="value" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
Bar.propTypes = { label: PropTypes.string };