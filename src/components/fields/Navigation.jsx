import { useState } from "react";
import PropTypes from "prop-types";

const items = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "📊", label: "Analytics" },
  { icon: "👥", label: "Users" },
  { icon: "⚙️", label: "Settings" },
  { icon: "🔔", label: "Notifications" },
];

export default function Navigation({ label = "Navigation" }) {
  const [active, setActive] = useState("Dashboard");
  return (
    <div className="w-56 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-3 space-y-1 font-sans">
      <p className="text-xs font-semibold text-[var(--color-text-placeholder)] uppercase px-3 mb-2">{label}</p>
      {items.map(item => (
        <button key={item.label} onClick={() => setActive(item.label)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${active === item.label ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)] font-medium" : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)]"}`}>
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
Navigation.propTypes = { label: PropTypes.string };