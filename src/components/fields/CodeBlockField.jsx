import PropTypes from "prop-types";
export default function CodeBlockField({ label }) {
  return (
    <div>
      <label className="block mb-1 text-xs font-medium text-gray-500">{label}</label>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-lg p-4 overflow-x-auto">
        <code>{`// Code block\nconst hello = "world";\nconsole.log(hello);`}</code>
      </pre>
    </div>
  );
}
CodeBlockField.propTypes = { label: PropTypes.string };
CodeBlockField.defaultProps = { label: "Code Block" };