import { useState } from "react";
import PropTypes from "prop-types";
const pending = [{ id: "AKIJW 11", title: "test", dueDate: "-", assignedTo: "-", icon: "🚫" }];
const completed = [{ id: "AKIJW 5", title: "Logo Design", dueDate: "2024-01-10", assignedTo: "Alice", icon: "✅" }];
export default function CreatedByYouField({ label }) {
  const [tab, setTab] = useState("pending");
  const items = tab === "pending" ? pending : completed;
  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">{label || "Created by you"}</h3>
        <select className="text-xs border rounded px-2 py-1 text-gray-500">
          <option>All time</option><option>This week</option><option>This month</option>
        </select>
      </div>
      <div className="flex rounded-lg overflow-hidden mb-4 bg-gray-100 p-0.5 gap-0.5">
        <button type="button" onClick={() => setTab("pending")}
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${tab === "pending" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400"}`}>
          Pending
        </button>
        <button type="button" onClick={() => setTab("completed")}
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${tab === "completed" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400"}`}>
          Marked completed
        </button>
      </div>
      <div className="space-y-3">
        {items.map((issue) => (
          <div key={issue.id} className="flex items-center gap-3 text-sm">
            <span>{issue.icon}</span>
            <span className="text-gray-400 text-xs">{issue.id}</span>
            <span className="text-gray-700 flex-1 truncate">{issue.title}</span>
            <span className="text-xs text-gray-400 w-16 text-center">{issue.dueDate}</span>
            <span className="text-xs text-gray-400 w-16 text-center">{issue.assignedTo}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 text-xs text-indigo-500 w-full text-center">View all issues</button>
    </div>
  );
}
CreatedByYouField.propTypes = { label: PropTypes.string };
CreatedByYouField.defaultProps = { label: "Created by you" };