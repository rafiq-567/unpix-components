import PropTypes from "prop-types";
export default function ListItemField({ label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded px-3 py-2 bg-[var(--color-surface)]">
      <span>•</span><span>{label}</span>
    </div>
  );
}
ListItemField.propTypes = { label: PropTypes.string };
ListItemField.defaultProps = { label: "List Item" };