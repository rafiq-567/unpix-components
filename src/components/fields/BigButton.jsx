import PropTypes from "prop-types";
export default function BigButton({ label = "Big Button", onClick }) {
  return (
    <button onClick={onClick}
      className="w-full py-4 px-8 bg-indigo-600 text-white text-lg font-semibold rounded-2xl hover:bg-indigo-700 active:scale-95 transition-all shadow-lg">
      {label}
    </button>
  );
}
BigButton.propTypes = { label: PropTypes.string, onClick: PropTypes.func };