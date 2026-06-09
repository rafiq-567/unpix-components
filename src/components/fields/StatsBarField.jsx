import PropTypes from "prop-types";
export default function StatsBarField({ label }) {
  const stats = [
    { label: "Issues assigned", value: 5 },
    { label: "Issues overdue", value: 0 },
    { label: "Issues created", value: 9 },
    { label: "Issues completed", value: 4 },
  ];
  return (
    <div className="grid grid-cols-4 divide-x divide-[var(--color-border)] border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-surface)]">
      {stats.map((s) => (
        <div key={s.label} className="p-4 text-center">
          <p className="text-2xl font-bold text-[var(--color-text-primary)]">{s.value}</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
StatsBarField.propTypes = { label: PropTypes.string };
StatsBarField.defaultProps = { label: "Stats Bar" };