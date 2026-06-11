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
  const isToday = (day) => day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  return (
    <div style={{ border: "1px solid var(--color-border)", borderRadius: 16, overflow: "hidden", backgroundColor: "var(--color-surface)", maxWidth: 384, width: "100%", fontFamily: "sans-serif" }}>
       <p className="text-center mt-1" style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Calendar</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", backgroundColor: "var(--color-accent)" }}>
        <button onClick={() => setDate(new Date(year, month - 1))} style={{ width: 32, height: 32, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.2)", color: "#fff", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
        <span style={{ fontWeight: 600, color: "#fff" }}>{monthName} {year}</span>
        <button onClick={() => setDate(new Date(year, month + 1))} style={{ width: 32, height: 32, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.2)", color: "#fff", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", backgroundColor: "var(--color-accent-subtle)" }}>
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
          <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 600, color: "var(--color-accent-text)", padding: "8px 0" }}>{d}</div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", padding: 8, gap: 4, backgroundColor: "var(--color-surface)" }}>
        {cells.map((day, i) => (
          <button key={i} onClick={() => day && setSelected(day)} disabled={!day}
            style={{
              height: 36, width: "100%", border: "none", borderRadius: 12, cursor: day ? "pointer" : "default",
              fontSize: 13, transition: "all 0.15s", fontWeight: day === selected ? 700 : isToday(day) ? 600 : 400,
              backgroundColor: day === selected ? "var(--color-accent)" : isToday(day) ? "var(--color-accent-subtle)" : "transparent",
              color: day === selected ? "#fff" : isToday(day) ? "var(--color-accent-text)" : day ? "var(--color-text-secondary)" : "transparent",
            }}>
            {day}
          </button>
        ))}
      </div>
      {selected && (
        <div style={{ padding: "8px 16px", borderTop: "1px solid var(--color-border)", fontSize: 12, textAlign: "center", color: "var(--color-accent-text)", fontWeight: 500 }}>
          Selected: {monthName} {selected}, {year}
        </div>
      )}
    </div>
  );
}
Calendar.propTypes = { label: PropTypes.string };