import PropTypes from "prop-types";
const collaborators = [
  { name: "You", initial: "A", active: 0 },
  { name: "mrakin", initial: "M", active: 0 },
  { name: "ahasanul.addin", initial: "A", active: 0 },
];
export default function CollaboratorsField({ label }) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="font-semibold text-gray-800">{label}</h3>
          <p className="text-xs text-gray-400">View and find all members you collaborate with across projects</p>
        </div>
        <input type="text" placeholder="Search for collaborators"
          className="border rounded-lg px-3 py-1.5 text-xs text-gray-500 w-48" />
      </div>
      <div className="flex gap-8 mt-4">
        {collaborators.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-indigo-700 text-white text-xl font-semibold flex items-center justify-center">{c.initial}</div>
            <p className="text-sm text-gray-700 font-medium">{c.name}</p>
            <p className="text-xs text-gray-400">{c.active} active issue</p>
          </div>
        ))}
      </div>
    </div>
  );
}
CollaboratorsField.propTypes = { label: PropTypes.string };
CollaboratorsField.defaultProps = { label: "Collaborators" };