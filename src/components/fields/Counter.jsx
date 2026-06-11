import { useState } from "react";
import PropTypes from "prop-types";

export default function Counter({ label = "Counter", min = 0, max = 100 }) {
  const [count, setCount] = useState(0);
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="flex items-center gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl px-4 py-3 w-fit">
        <button onClick={() => setCount(c => Math.max(min, c - 1))}
          className="w-8 h-8 bg-[var(--color-bg-subtle)] hover:opacity-80 rounded-lg font-bold text-[var(--color-text-secondary)] flex items-center justify-center transition">−</button>
        <span className="text-xl font-bold text-[var(--color-text-primary)] w-10 text-center">{count}</span>
        <button onClick={() => setCount(c => Math.min(max, c + 1))}
          className="w-8 h-8 bg-[var(--color-accent)] hover:opacity-90 rounded-lg font-bold text-[var(--color-surface)] flex items-center justify-center transition">+</button>
      </div>
    </div>
  );
}
Counter.propTypes = { label: PropTypes.string, min: PropTypes.number, max: PropTypes.number };