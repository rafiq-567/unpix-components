import { useState } from "react";
import PropTypes from "prop-types";
const actions = [
  { icon: "📝", name: "Note" },
  { icon: "📷", name: "Photo" },
  { icon: "📎", name: "Attach" },
];
export default function SpeedDial({ label = "Speed Dial" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-end gap-2">
      {open && actions.map((a) => (
        <div key={a.name} className="flex items-center gap-2">
          <span className="text-xs bg-white shadow rounded px-2 py-1 text-gray-700">{a.name}</span>
          <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-lg hover:bg-indigo-50 transition">
            {a.icon}
          </button>
        </div>
      ))}
      <button onClick={() => setOpen(!open)}
        className={`w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-transform hover:bg-indigo-700 ${open ? "rotate-45" : ""}`}>
        +
      </button>
    </div>
  );
}
SpeedDial.propTypes = { label: PropTypes.string };