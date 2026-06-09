import { useState } from "react";
import PropTypes from "prop-types";
const pending = [{ id: "AKIJW 11", title: "test", dueDate: "-", assignedTo: "-", icon: "🚫" }];
const completed = [{ id: "AKIJW 5", title: "Logo Design", dueDate: "2024-01-10", assignedTo: "Alice", icon: "✅" }];
export default function CreatedByYouField({ label }) {
  const [tab, setTab] = useState("pending");
  const items = tab === "pending" ? pending : completed;
  return (
    <div style={{ border: "1px solid var(--color-border)", borderRadius: 12, padding: 16, backgroundColor: "var(--color-surface)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h3 style={{ fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>{label}</h3>
        <select style={{ fontSize: 12, border: "1px solid var(--color-border)", borderRadius: 6, padding: "2px 8px", color: "var(--color-text-muted)", backgroundColor: "var(--color-surface)" }}>
          <option>All time</option><option>This week</option><option>This month</option>
        </select>
      </div>
      <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", marginBottom: 16, backgroundColor: "var(--color-bg-muted)", padding: 2, gap: 2 }}>
        {["pending", "completed"].map((t) => (
          <button key={t} type="button" onClick={() => setTab(t)}
            style={{
              flex: 1, padding: "6px 0", fontSize: 12, fontWeight: 500, border: "none", cursor: "pointer", borderRadius: 6, transition: "all 0.15s",
              backgroundColor: tab === t ? "var(--color-surface)" : "transparent",
              color: tab === t ? "var(--color-text-primary)" : "var(--color-text-muted)",
              boxShadow: tab === t ? "var(--shadow-sm)" : "none",
            }}>
            {t === "pending" ? "Pending" : "Marked completed"}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((issue) => (
          <div key={issue.id} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13 }}>
            <span>{issue.icon}</span>
            <span style={{ color: "var(--color-text-muted)", fontSize: 12 }}>{issue.id}</span>
            <span style={{ color: "var(--color-text-secondary)", flex: 1 }}>{issue.title}</span>
            <span style={{ color: "var(--color-text-muted)", fontSize: 12, width: 64, textAlign: "center" }}>{issue.dueDate}</span>
            <span style={{ color: "var(--color-text-muted)", fontSize: 12, width: 64, textAlign: "center" }}>{issue.assignedTo}</span>
          </div>
        ))}
      </div>
      <button style={{ marginTop: 16, fontSize: 12, color: "var(--color-accent)", width: "100%", textAlign: "center", background: "none", border: "none", cursor: "pointer" }}>
        View all issues
      </button>
    </div>
  );
}
CreatedByYouField.propTypes = { label: PropTypes.string };
CreatedByYouField.defaultProps = { label: "Created by you" };