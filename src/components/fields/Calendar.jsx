import { useState } from "react";
import PropTypes from "prop-types";
export default function Calendar({ label = "Calendar" }) {
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthName = date.toLocaleString("default", { month: "long" });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const [selected, setSelected] = useState(null);
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  return (
    <div className="border rounded-2xl overflow-hidden bg-white w-full max-w-sm">
      <div className="flex items-center justify-between px-4 py-3 bg-indigo-600 text-white">
        <button onClick={() => setDate(new Date(year, month - 1))} className="hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">‹</button>
        <span className="font-semibold">{monthName} {year}</span>
        <button onClick={() => setDate(new Date(year, month + 1))} className="hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">›</button>
      </div>
      <div className="grid grid-cols-7 bg-indigo-50">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
          <div key={d} className="text-center text-xs font-semibold text-indigo-400 py-2">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 p-2 gap-1">
        {cells.map((day, i) => (
          <button key={i} onClick={() => day && setSelected(day)} disabled={!day}
            className={`h-9 w-full rounded-xl text-sm transition ${!day ? "" : day === selected ? "bg-indigo-600 text-white font-bold" : day === today.getDate() && month === today.getMonth() && year === today.getFullYear() ? "bg-indigo-100 text-indigo-700 font-semibold" : "hover:bg-gray-100 text-gray-700"}`}>
            {day}
          </button>
        ))}
      </div>
      {selected && (
        <div className="px-4 py-2 border-t text-xs text-center text-indigo-600 font-medium">
          Selected: {monthName} {selected}, {year}
        </div>
      )}
    </div>
  );
}
Calendar.propTypes = { label: PropTypes.string };