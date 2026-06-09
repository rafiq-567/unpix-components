import PropTypes from "prop-types";
const tasks = [
  { name: "Research",    start: 0,  duration: 3, color: "#818cf8" },
  { name: "Design",      start: 2,  duration: 4, color: "#f472b6" },
  { name: "Development", start: 5,  duration: 5, color: "#4ade80" },
  { name: "Testing",     start: 8,  duration: 3, color: "#facc15" },
  { name: "Launch",      start: 10, duration: 2, color: "#f87171" },
];
const total = 12;
export default function Gantt({ label = "Gantt Chart" }) {
  return (
    <div className="mb-2" style={{ border: "1px solid var(--color-border)", borderRadius: 12, overflow: "hidden", backgroundColor: "var(--color-surface)", fontFamily: "sans-serif" }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border)" }}>
        <h3 style={{ fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>{label}</h3>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", marginBottom: 8, marginLeft: 112 }}>
          {Array.from({ length: total }, (_, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center", fontSize: 11, color: "var(--color-text-placeholder)", fontWeight: 500 }}>W{i + 1}</div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {tasks.map((task) => (
            <div key={task.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12, color: "var(--color-text-muted)", width: 104, textAlign: "right", flexShrink: 0 }}>{task.name}</span>
              <div style={{ flex: 1, position: "relative", height: 28, backgroundColor: "var(--color-bg-muted)", borderRadius: 8, overflow: "hidden" }}>
                <div style={{
                  position: "absolute", height: "100%", backgroundColor: task.color, borderRadius: 8,
                  display: "flex", alignItems: "center", paddingLeft: 8, transition: "all 0.15s",
                  left: `${(task.start / total) * 100}%`, width: `${(task.duration / total) * 100}%`,
                }}>
                  <span style={{ color: "#fff", fontSize: 11, fontWeight: 600 }}>{task.duration}w</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Gantt.propTypes = { label: PropTypes.string };