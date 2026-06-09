import { Plus } from "lucide-react";
import PropTypes from "prop-types";
const projects = [
  { name: "Akij+ Outlet", emoji: "🛒", bg: "bg-pink-100 dark:bg-pink-900", members: ["A", "M"] },
  { name: "AKIJ E-Mobility Website", emoji: "🏍️", bg: "bg-pink-100 dark:bg-pink-900", members: ["A", "A", "M"] },
  { name: "Hospital Management software", emoji: "⏰", bg: "bg-pink-100 dark:bg-pink-900", members: ["M", "A"] },
  { name: "ERP", emoji: "🌐", bg: "bg-[var(--color-bg-muted)]", members: ["A", "M"] },
];
export default function RecentProjectsField({ label }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)]">
      <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">{label}</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 cursor-pointer hover:bg-[var(--color-bg-hover)] rounded-lg p-2 -mx-2">
          <div className="w-10 h-10 border-2 border-dashed border-[var(--color-accent)] rounded-lg flex items-center justify-center">
            <Plus size={18} className="text-[var(--color-accent)]" />
          </div>
          <span className="text-sm text-[var(--color-text-secondary)]">Create new project</span>
        </div>
        {projects.map((p) => (
          <div key={p.name} className="flex items-center gap-3 cursor-pointer hover:bg-[var(--color-bg-hover)] rounded-lg p-2 -mx-2">
            <div className={`w-10 h-10 ${p.bg} rounded-lg flex items-center justify-center text-lg`}>{p.emoji}</div>
            <div className="flex-1"><p className="text-sm text-[var(--color-text-primary)]">{p.name}</p></div>
            <div className="flex -space-x-2">
              {p.members.map((m, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center border-2 border-[var(--color-surface)] font-medium">{m}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
RecentProjectsField.propTypes = { label: PropTypes.string };
RecentProjectsField.defaultProps = { label: "Recent projects" };