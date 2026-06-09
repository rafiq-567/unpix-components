import PropTypes from "prop-types";

export default function Details({ label = "Details Picker" }) {
  return (
    <details className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-surface)] mt-2">
       
      <summary className="px-4 py-3 cursor-pointer font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-subtle)] hover:opacity-90">
        {label}
      </summary>
      <div className="p-4 text-sm text-[var(--color-text-muted)]">
        Expanded content goes here.
      </div>
    </details>
  );
}
Details.propTypes = { label: PropTypes.string };