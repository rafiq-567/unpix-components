import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import PropTypes from "prop-types";

const data = [{ v: 10 }, { v: 40 }, { v: 20 }, { v: 60 }, { v: 30 }, { v: 80 }, { v: 50 }];

export default function Sparklink({ label = "Sparkline", value = "8,240", trend = "+12%" }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)] flex items-center justify-between font-sans">
      <div>
        <p className="text-xs text-[var(--color-text-muted)]">{label}</p>
        <p className="text-2xl font-bold text-[var(--color-text-primary)]">{value}</p>
        <p className="text-xs text-[var(--color-success)] font-medium">{trend}</p>
      </div>
      <ResponsiveContainer width={100} height={50}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="v" stroke="var(--color-accent)" strokeWidth={2} dot={false} />
          <Tooltip contentStyle={{ display: 'none' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
Sparklink.propTypes = { label: PropTypes.string, value: PropTypes.string, trend: PropTypes.string };