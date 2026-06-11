import PropTypes from "prop-types";

const icons = ["🏠","⚙️","🔔","👤","📁"];

export default function IconGroup({ label = "Icon Group" }) {
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="flex gap-2">
        {icons.map((icon, i) => (
          <button key={i} className="w-10 h-10 bg-[var(--color-bg-subtle)] hover:bg-[var(--color-accent-subtle)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-xl flex items-center justify-center text-lg transition">
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
IconGroup.propTypes = { label: PropTypes.string };