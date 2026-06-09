import PropTypes from "prop-types";
export default function ListField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]">{label}</label>
      <ul className="border border-[var(--color-border)] rounded p-3 space-y-1 text-sm text-[var(--color-text-muted)] bg-[var(--color-surface)]">
        <li>• List item one</li>
        <li>• List item two</li>
        <li>• List item three</li>
      </ul>
    </div>
  );
}
ListField.propTypes = { label: PropTypes.string };
ListField.defaultProps = { label: "List" };