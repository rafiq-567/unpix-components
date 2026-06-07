import PropTypes from "prop-types";
export default function BreadcrumbField({ label }) {
  return (
    <nav className="text-sm text-gray-500 flex items-center gap-1">
      <span className="hover:text-indigo-500 cursor-pointer">Home</span>
      <span>/</span>
      <span className="hover:text-indigo-500 cursor-pointer">Section</span>
      <span>/</span>
      <span className="text-gray-800 font-medium">{label}</span>
    </nav>
  );
}
BreadcrumbField.propTypes = { label: PropTypes.string };
BreadcrumbField.defaultProps = { label: "Breadcrumb" };