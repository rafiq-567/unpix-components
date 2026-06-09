import PropTypes from "prop-types";

export default function Icon({ label = "Icon", color = "var(--color-accent)" }) {
  return (
    <div className="flex items-center gap-3 font-sans">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-accent-subtle)]">
        <svg className="w-5 h-5" fill={color.startsWith('var') ? 'currentColor' : color} className="w-5 h-5 text-[var(--color-accent)]" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z"/>
        </svg>
      </div>
      <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
    </div>
  );
}
Icon.propTypes = { label: PropTypes.string, color: PropTypes.string };