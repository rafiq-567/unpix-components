import PropTypes from "prop-types";
export default function TypographyField({ label }) {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Heading 1</h1>
      <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Heading 2</h2>
      <p className="text-sm text-[var(--color-text-muted)]">{label} — Body text sample</p>
    </div>
  );
}
TypographyField.propTypes = { label: PropTypes.string };
TypographyField.defaultProps = { label: "Typography" };