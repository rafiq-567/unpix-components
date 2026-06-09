import PropTypes from "prop-types";
export default function BreadcrumbField({ label }) {
  return (
    <nav className="text-sm text-[var(--color-text-muted)] flex items-center gap-1">
      <span className="hover:text-[var(--color-accent)] cursor-pointer">Home</span>
      <span className="text-[var(--color-border-strong)]">/</span>
      <span className="hover:text-[var(--color-accent)] cursor-pointer">Section</span>
      <span className="text-[var(--color-border-strong)]">/</span>
      <span className="text-[var(--color-text-primary)] font-medium">{label}</span>
    </nav>
  );
}
BreadcrumbField.propTypes = { label: PropTypes.string };
BreadcrumbField.defaultProps = { label: "Breadcrumb" };