import { useState } from "react";
import PropTypes from "prop-types";
const initial = {
  Todo: [{ id: 1, title: "Design mockups" }, { id: 2, title: "Write specs" }],
  "In Progress": [{ id: 3, title: "Build API" }, { id: 4, title: "Setup DB" }],
  Done: [{ id: 5, title: "Project setup" }],
};
const colColors = {
  Todo: "var(--color-bg-muted)",
  "In Progress": "var(--color-accent-subtle)",
  Done: "var(--color-success-subtle)",
};
export default function Kanban({ label = "Kanban Board" }) {
  const [cols, setCols] = useState(initial);
  const [drag, setDrag] = useState(null);
  const onDragStart = (col, id) => setDrag({ col, id });
  const onDrop = (targetCol) => {
    if (!drag || drag.col === targetCol) return;
    const card = cols[drag.col].find(c => c.id === drag.id);
    setCols(prev => ({
      ...prev,
      [drag.col]: prev[drag.col].filter(c => c.id !== drag.id),
      [targetCol]: [...prev[targetCol], card],
    }));
    setDrag(null);
  };
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 16, fontWeight: 900, color: "var(--color-text-secondary)", marginBottom: 12 }}>{label}</p>
      <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8 }}>
        {Object.entries(cols).map(([col, cards]) => (
          <div key={col} onDragOver={e => e.preventDefault()} onDrop={() => onDrop(col)}
            style={{ backgroundColor: colColors[col], borderRadius: 16, padding: 12, minWidth: 192, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-text-muted)", textTransform: "uppercase" }}>{col}</span>
              <span style={{ fontSize: 11, backgroundColor: "var(--color-surface)", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "var(--color-text-muted)" }}>{cards.length}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {cards.map(card => (
                <div key={card.id} draggable onDragStart={() => onDragStart(col, card.id)}
                  style={{ backgroundColor: "var(--color-surface)", borderRadius: 12, padding: 12, fontSize: 13, color: "var(--color-text-secondary)", cursor: "grab", boxShadow: "var(--shadow-sm)", transition: "box-shadow 0.15s" }}>
                  {card.title}
                </div>
              ))}
            </div>
            <button onClick={() => setCols(prev => ({ ...prev, [col]: [...prev[col], { id: Date.now(), title: "New task" }] }))}
              style={{ marginTop: 8, width: "100%", fontSize: 12, color: "var(--color-text-muted)", padding: "4px 0", border: "1px dashed var(--color-border)", borderRadius: 8, backgroundColor: "transparent", cursor: "pointer" }}>
              + Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
Kanban.propTypes = { label: PropTypes.string };