import PropTypes from "prop-types";

export default function DateRangeField({ label = "Date Range" }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]">{label}</label>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Date Range</p>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block mb-1 text-xs text-[var(--color-text-muted)]">Start Date</label>
          <input type="date" className="w-full border border-[var(--color-border)] rounded px-3 py-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)]" />
        </div>
        <div>
          <label className="block mb-1 text-xs text-[var(--color-text-muted)]">End Date</label>
          <input type="date" className="w-full border border-[var(--color-border)] rounded px-3 py-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)]" />
        </div>
      </div>
    </div>
  );
}

DateRangeField.propTypes = { label: PropTypes.string };