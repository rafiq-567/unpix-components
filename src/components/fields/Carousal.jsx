import { useState } from "react";
import PropTypes from "prop-types";
const slides = [
  { bg: "bg-indigo-100", text: "Slide 1", emoji: "🎨" },
  { bg: "bg-pink-100",   text: "Slide 2", emoji: "🚀" },
  { bg: "bg-green-100",  text: "Slide 3", emoji: "🌟" },
];
export default function Carousal({ label = "Carousel" }) {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="relative overflow-hidden rounded-2xl">
        <div className={`${slides[current].bg} h-40 flex flex-col items-center justify-center transition-all`}>
          <span className="text-5xl">{slides[current].emoji}</span>
          <span className="text-gray-700 font-medium mt-2">{slides[current].text}</span>
        </div>
        <button onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50">‹</button>
        <button onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50">›</button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${i === current ? "bg-indigo-500" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
Carousal.propTypes = { label: PropTypes.string };