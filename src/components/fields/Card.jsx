import PropTypes from "prop-types";
export default function Card({ title = "Card Title", description = "Card description goes here.", footer = "Card Footer" }) {
  return (
    <div className="border rounded-2xl shadow-sm bg-white overflow-hidden">
      <div className="p-5 border-b">
        <h3 className="font-semibold text-gray-800 text-base">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="px-5 py-3 bg-gray-50 text-xs text-gray-400">{footer}</div>
    </div>
  );
}
Card.propTypes = { title: PropTypes.string, description: PropTypes.string, footer: PropTypes.string };