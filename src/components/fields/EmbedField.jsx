import PropTypes from "prop-types";
export default function EmbedField({ label }) {
  return (
    <div className="border-2 border-dashed border-[var(--color-danger)] rounded-lg p-4 bg-[var(--color-danger-subtle)] text-center">
      <p className="text-xs font-medium text-[var(--color-danger-text)]">{label}</p>
      <p className="text-xs text-[var(--color-danger-text)] opacity-60 mt-1">Embed code / iframe goes here</p>
    </div>
  );
}
EmbedField.propTypes = { label: PropTypes.string };
EmbedField.defaultProps = { label: "Embed" };