import PropTypes from "prop-types";
export default function CodeBlockField({ label }) {
  return (
    <div>
      <label className="block mb-1 text-xs font-medium text-[var(--color-text-muted)]">{label}</label>
      <pre className="bg-[var(--color-text-primary)] text-green-400 text-xs rounded-lg p-4 overflow-x-auto">
        <code>{`// Code block\nconst hello = "world";\nconsole.log(hello);`}</code>
      </pre>
    </div>
  );
}
CodeBlockField.propTypes = { label: PropTypes.string };
CodeBlockField.defaultProps = { label: "Code Block" };