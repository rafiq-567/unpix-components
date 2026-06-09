import { useState } from "react";
import PropTypes from "prop-types";
const initial = {
  Todo:       [{ id: 1, title: "Design mockups" }, { id: 2, title: "Write specs" }],
  "In Progress": [{ id: 3, title: "Build API" }, { id: 4, title: "Setup DB" }],
  Done:       [{ id: 5, title: "Project setup" }],
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
  const colors = { Todo: "bg-gray-100", "In Progress": "bg-blue-50", Done: "bg-green-50" };
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-3">{label}</p>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {Object.entries(cols).map(([col, cards]) => (
          <div key={col} onDragOver={e => e.preventDefault()} onDrop={() => onDrop(col)}
            className={`${colors[col]} rounded-2xl p-3 min-w-48 flex-1`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-600 uppercase">{col}</span>
              <span className="text-xs bg-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-gray-500">{cards.length}</span>
            </div>
            <div className="space-y-2">
              {cards.map(card => (
                <div key={card.id} draggable onDragStart={() => onDragStart(col, card.id)}
                  className="bg-white rounded-xl p-3 shadow-sm text-sm text-gray-700 cursor-grab active:cursor-grabbing hover:shadow-md transition">
                  {card.title}
                </div>
              ))}
            </div>
            <button onClick={() => setCols(prev => ({ ...prev, [col]: [...prev[col], { id: Date.now(), title: "New task" }] }))}
              className="mt-2 w-full text-xs text-gray-400 hover:text-gray-600 py-1 border border-dashed rounded-lg">+ Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}
Kanban.propTypes = { label: PropTypes.string };