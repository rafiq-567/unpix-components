import { useState } from "react";
import PropTypes from "prop-types";

const menu = {
  Products: [["Analytics", "Dashboard", "Reports"], ["API", "SDK", "Webhooks"]],
  Solutions: [["Enterprise", "Startup", "Agency"], ["Healthcare", "Finance", "Education"]],
  Resources: [["Docs", "Blog", "Tutorials"], ["Community", "Support", "Status"]],
};

export default function MegaMenu({ label = "Mega Menu" }) {
  const [active, setActive] = useState(null);
  return (
    <div className="relative font-sans">
      <nav className="flex items-center gap-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-3 py-2">
        <span className="font-semibold text-[var(--color-text-primary)] mr-4">{label}</span>
        {Object.keys(menu).map(key => (
          <button key={key} onMouseEnter={() => setActive(key)} onMouseLeave={() => setActive(null)}
            className={`px-3 py-2 text-sm rounded-lg transition ${active === key ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"}`}>
            {key} ▾
          </button>
        ))}
      </nav>
      {active && (
        <div onMouseEnter={() => setActive(active)} onMouseLeave={() => setActive(null)}
          className="absolute top-full left-0 mt-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-[var(--shadow-lg)] p-6 z-50 flex gap-8 min-w-96">
          {menu[active].map((col, i) => (
            <div key={i} className="space-y-2">
              {col.map(item => (
                <a key={item} href="#" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:translate-x-1 transition-all">{item}</a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
MegaMenu.propTypes = { label: PropTypes.string };