import PropTypes from "prop-types";
const collaborators = [
  { name: "You", initial: "A", active: 0 },
  { name: "mrakin", initial: "M", active: 0 },
  { name: "ahasanul.addin", initial: "A", active: 0 },
];
export default function CollaboratorsField({ label }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)]">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="font-semibold text-[var(--color-text-primary)]">{label}</h3>
          <p className="text-xs text-[var(--color-text-placeholder)]">View and find all members you collaborate with across projects</p>
        </div>
        <input type="text" placeholder="Search for collaborators"
          className="border border-[var(--color-border)] rounded-lg px-3 py-1.5 text-xs text-[var(--color-text-secondary)] bg-[var(--color-surface)] placeholder-[var(--color-text-placeholder)] w-48" />
      </div>
      <div className="flex gap-8 mt-4">
        {collaborators.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white text-xl font-semibold flex items-center justify-center">{c.initial}</div>
            <p className="text-sm text-[var(--color-text-primary)] font-medium">{c.name}</p>
            <p className="text-xs text-[var(--color-text-placeholder)]">{c.active} active issue</p>
          </div>
        ))}
      </div>
    </div>
  );
}
CollaboratorsField.propTypes = { label: PropTypes.string };
CollaboratorsField.defaultProps = { label: "Collaborators" };