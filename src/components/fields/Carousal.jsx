import { useState } from "react";
import PropTypes from "prop-types";

const slides = [
  { text: "Slide 1", emoji: "🎨" },
  { text: "Slide 2", emoji: "🚀" },
  { text: "Slide 3", emoji: "🌟" },
];

export default function Carousal({ label = "Carousel" }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="font-sans mt-2 mb-2">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)]">
        <div className="h-40 flex flex-col items-center justify-center transition-all bg-[var(--color-surface)]">
          <span className="text-5xl">{slides[current].emoji}</span>
          <span className="text-[var(--color-text-secondary)] font-medium mt-2">{slides[current].text}</span>
        </div>
        <button onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] rounded-full w-8 h-8 flex items-center justify-center hover:opacity-90">‹</button>
        <button onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] rounded-full w-8 h-8 flex items-center justify-center hover:opacity-90">›</button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${i === current ? "bg-[var(--color-accent)]" : "bg-[var(--color-text-placeholder)]"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
Carousal.propTypes = { label: PropTypes.string };