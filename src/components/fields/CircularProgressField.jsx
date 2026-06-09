import PropTypes from "prop-types";
export default function CircularProgressField({ label }) {
  const r = 28, cx = 36, cy = 36;
  const circumference = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-4">
      <svg width="72" height="72">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke='var(--color-border)' strokeWidth="6" />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#eab308" strokeWidth="6"
          strokeDasharray={circumference} strokeDashoffset={circumference * 0.3}
          strokeLinecap="round" transform={`rotate(-90 ${cx} ${cy})`} />
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize="12" fill='var(--color-text-secondary)'>70%</text>
      </svg>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}
CircularProgressField.propTypes = { label: PropTypes.string };
CircularProgressField.defaultProps = { label: "Circular Progress" };