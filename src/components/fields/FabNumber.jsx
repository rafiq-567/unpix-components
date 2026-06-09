import { useState } from "react";
import PropTypes from "prop-types";

export default function FabNumber({ label = "FAB", count = 3 }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block font-sans">
      <button onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[var(--color-accent)] text-[var(--color-surface)] rounded-full shadow-[var(--shadow-lg)] flex items-center justify-center hover:opacity-90 transition text-xl">
        +
      </button>
      <span className="absolute -top-1 -right-1 bg-[var(--color-danger)] text-[var(--color-surface)] text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
        {count}
      </span>
      {open && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-2 items-end">
          {["Edit", "Share", "Delete"].map((action) => (
            <div key={action} className="flex items-center gap-2">
              <span className="text-xs bg-[var(--color-surface)] text-[var(--color-text-secondary)] shadow-[var(--shadow-sm)] border border-[var(--color-border)] rounded px-2 py-1 white-space-nowrap">{action}</span>
              <button className="w-10 h-10 bg-[var(--color-surface)] text-[var(--color-accent)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] rounded-full flex items-center justify-center hover:bg-[var(--color-bg-subtle)]">
                {action[0]}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
FabNumber.propTypes = { label: PropTypes.string, count: PropTypes.number };