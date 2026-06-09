import PropTypes from "prop-types";
const tasks = [
  { name: "Research",   start: 0,  duration: 3, color: "bg-indigo-400" },
  { name: "Design",     start: 2,  duration: 4, color: "bg-pink-400" },
  { name: "Development",start: 5,  duration: 5, color: "bg-green-400" },
  { name: "Testing",    start: 8,  duration: 3, color: "bg-yellow-400" },
  { name: "Launch",     start: 10, duration: 2, color: "bg-red-400" },
];
const total = 12;
export default function Gantt({ label = "Gantt Chart" }) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white">
      <div className="px-4 py-3 border-b">
        <h3 className="font-semibold text-gray-800">{label}</h3>
      </div>
      <div className="p-4">
        <div className="flex mb-2 ml-28">
          {Array.from({ length: total }, (_, i) => (
            <div key={i} className="flex-1 text-center text-xs text-gray-400 font-medium">W{i + 1}</div>
          ))}
        </div>
        <div className="space-y-2">
          {tasks.map((task) => (
            <div key={task.name} className="flex items-center gap-2">
              <span className="text-xs text-gray-600 w-24 text-right shrink-0">{task.name}</span>
              <div className="flex-1 relative h-7 bg-gray-100 rounded-lg overflow-hidden">
                <div className={`absolute h-full ${task.color} rounded-lg flex items-center px-2 transition-all`}
                  style={{ left: `${(task.start / total) * 100}%`, width: `${(task.duration / total) * 100}%` }}>
                  <span className="text-white text-xs font-medium truncate">{task.duration}w</span>
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