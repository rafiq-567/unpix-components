import { useState } from "react";
import PropTypes from "prop-types";

export default function Drawer({ label = "Drawer", side = "left" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-sans">
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-surface)] rounded-lg text-sm hover:opacity-90 font-medium">
        Open {label}
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {side === "left" && (
            <>
              <div className="w-72 bg-[var(--color-surface)] h-full shadow-[var(--shadow-lg)] border-r border-[var(--color-border)] p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-[var(--color-text-primary)]">{label}</h2>
                  <button onClick={() => setOpen(false)} className="text-[var(--color-text-placeholder)] hover:text-[var(--color-text-primary)]">✕</button>
                </div>
                {["Dashboard","Analytics","Reports","Settings","Help"].map(item => (
                  <button key={item} className="text-left py-3 px-3 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-accent-subtle)] hover:text-[var(--color-accent)] rounded-lg transition">{item}</button>
                ))}
              </div>
              <div onClick={() => setOpen(false)} className="flex-1 bg-black/40 backdrop-blur-xs" />
            </>
          )}
          {side === "right" && (
            <>
              <div onClick={() => setOpen(false)} className="flex-1 bg-black/40 backdrop-blur-xs" />
              <div className="w-72 bg-[var(--color-surface)] h-full shadow-[var(--shadow-lg)] border-l border-[var(--color-border)] p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-[var(--color-text-primary)]">{label}</h2>
                  <button onClick={() => setOpen(false)} className="text-[var(--color-text-placeholder)] hover:text-[var(--color-text-primary)]">✕</button>
                </div>
                {["Profile","Notifications","Privacy","Logout"].map(item => (
                  <button key={item} className="text-left py-3 px-3 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-accent-subtle)] hover:text-[var(--color-accent)] rounded-lg transition">{item}</button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
Drawer.propTypes = { label: PropTypes.string, side: PropTypes.oneOf(["left", "right"]) };