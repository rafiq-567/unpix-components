import { Paperclip, MessageSquare, LayoutGrid } from "lucide-react";
import PropTypes from "prop-types";
const activities = [
  { icon: Paperclip, text: "You uploaded a new", bold: "attachment", suffix: "to ERP-9 Links for UI/UX", time: "1 day ago" },
  { icon: MessageSquare, text: "You updated the description of", bold: "WEB-20 Problems", suffix: "", time: "4 days ago" },
  { icon: LayoutGrid, text: "You set the state to", bold: "Done", suffix: "for WEB-6 Loading Animation", time: "4 days ago" },
];
export default function IssueActivitiesField({ label }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)]">
      <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">{label}</h3>
      <div className="space-y-4">
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className="flex gap-3">
              <Icon size={16} className="text-[var(--color-text-placeholder)] mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-[var(--color-text-secondary)]">{a.text} <strong className="text-[var(--color-text-primary)]">{a.bold}</strong> {a.suffix}</p>
                <p className="text-xs text-[var(--color-text-placeholder)] mt-0.5">{a.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-4 text-xs text-[var(--color-accent)] w-full text-center">View all</button>
    </div>
  );
}
IssueActivitiesField.propTypes = { label: PropTypes.string };
IssueActivitiesField.defaultProps = { label: "Your issue activities" };