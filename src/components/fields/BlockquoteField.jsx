import PropTypes from "prop-types";
export default function BlockquoteField({ label }) {
  return (
    <blockquote className="border-l-4 border-indigo-400 pl-4 py-1 bg-indigo-50 rounded-r">
      <p className="text-sm text-indigo-700 italic">"{label}"</p>
      <cite className="text-xs text-indigo-400 mt-1 block">— Author</cite>
    </blockquote>
  );
}
BlockquoteField.propTypes = { label: PropTypes.string };
BlockquoteField.defaultProps = { label: "Blockquote" };