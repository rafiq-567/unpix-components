import PropTypes from "prop-types";
export default function LinkField({ label }) {
  return <a href="#" className="text-[var(--color-accent)] underline text-sm hover:text-[var(--color-accent-hover)]">{label}</a>;
}
LinkField.propTypes = { label: PropTypes.string };
LinkField.defaultProps = { label: "Link" };