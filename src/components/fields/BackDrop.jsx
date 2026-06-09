import { useState } from "react";
import PropTypes from "prop-types";

export default function BackDrop({ label = "Backdrop" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-sans">
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-surface)] rounded-lg text-sm hover:opacity-90 font-medium">
        Show {label}
      </button>
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div onClick={e => e.stopPropagation()} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 shadow-[var(--shadow-lg)]">
            <p className="text-[var(--color-text-primary)] font-semibold mb-4">{label} is showing</p>
            <button onClick={() => setOpen(false)} className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-surface)] rounded-lg text-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
BackDrop.propTypes = { label: PropTypes.string };