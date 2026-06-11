import { useState } from "react";
import PropTypes from "prop-types";
const pending = [
  { id: "AKIJW 2", title: "Development of E-Commerce Website for AKIJ Plus", icon: "📊" },
  { id: "AKIJO 1", title: "Work Order Initiation for AKIJ Plus Outlet", icon: "⚠️" },
  { id: "AKIJW 7", title: "Product Reservation", icon: "🚫" },
  { id: "AKIJW 6", title: "Add Password Strength Meter", icon: "🚫" },
];
const completed = [
  { id: "AKIJW 3", title: "Homepage Redesign", icon: "✅" },
  { id: "AKIJW 4", title: "API Integration", icon: "✅" },
];
export default function AssignedToYouField({ label }) {
  const [tab, setTab] = useState("pending");
  const items = tab === "pending" ? pending : completed;
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg text-[var(--color-text-primary)]">{label || "Assigned to you"}</h3>
        <select className="text-xs border border-[var(--color-border)] rounded px-2 py-1 text-[var(--color-text-muted)] bg-[var(--color-surface)]">
          <option>All time</option><option>This week</option><option>This month</option>
        </select>
      </div>
      <div className="flex rounded-lg overflow-hidden mb-4 bg-[var(--color-bg-muted)] p-0.5 gap-0.5">
        <button type="button" onClick={() => setTab("pending")}
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${tab === "pending" ? "bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-sm" : "text-[var(--color-text-muted)]"}`}>
          Pending
        </button>
        <button type="button" onClick={() => setTab("completed")}
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${tab === "completed" ? "bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-sm" : "text-[var(--color-text-muted)]"}`}>
          Marked completed
        </button>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-[var(--color-text-muted)]">Issues</span>
        <span className="bg-[var(--color-accent-subtle)] text-[var(--color-accent-text)] text-xs font-semibold px-2 py-0.5 rounded-full">{items.length}</span>
      </div>
      <div className="space-y-3">
        {items.map((issue) => (
          <div key={issue.id} className="flex items-center gap-3 text-sm">
            <span>{issue.icon}</span>
            <span className="text-[var(--color-text-placeholder)] text-xs">{issue.id}</span>
            <span className="text-[var(--color-text-secondary)] truncate">{issue.title}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 text-xs text-[var(--color-accent)] w-full text-center">View all issues</button>
    </div>
  );
}
AssignedToYouField.propTypes = { label: PropTypes.string };
AssignedToYouField.defaultProps = { label: "Assigned to you" };