import PropTypes from "prop-types";

export default function Card({ title = "Card Title", description = "Card description goes here.", footer = "Card Footer" }) {
  return (
    <div className="border border-[var(--color-border)] mt-2 rounded-2xl shadow-[var(--shadow-sm)] bg-[var(--color-surface)] overflow-hidden font-sans">
      <div className="p-5 border-b border-[var(--color-border)]">
        <h3 className="font-semibold text-[var(--color-text-primary)] text-base">{title}</h3>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">{description}</p>
      </div>
      <div className="px-5 py-3 bg-[var(--color-bg-subtle)] text-xs text-[var(--color-text-placeholder)]">{footer}</div>
    </div>
  );
}
Card.propTypes = { title: PropTypes.string, description: PropTypes.string, footer: PropTypes.string };