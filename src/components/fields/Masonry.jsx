import PropTypes from "prop-types";

const items = [
  { h: "h-32", bg: "bg-[var(--color-accent-subtle)]", text: "Item 1" },
  { h: "h-48", bg: "bg-[var(--color-bg-subtle)]", text: "Item 2" },
  { h: "h-24", bg: "bg-[var(--color-success-subtle)]", text: "Item 3" },
  { h: "h-40", bg: "bg-[var(--color-warning-subtle)]", text: "Item 4" },
  { h: "h-28", bg: "bg-[var(--color-accent-subtle)]", opacity: "0.7", text: "Item 5" },
  { h: "h-36", bg: "bg-[var(--color-bg-subtle)]", text: "Item 6" },
];

export default function Masonry({ label = "Masonry Layout" }) {
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="columns-3 gap-2 space-y-2">
        {items.map((item, i) => (
          <div key={i} className={`${item.h} ${item.bg} border border-[var(--color-border)] rounded-xl flex items-center justify-center text-sm text-[var(--color-text-secondary)] font-medium break-inside-avoid`}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
Masonry.propTypes = { label: PropTypes.string };