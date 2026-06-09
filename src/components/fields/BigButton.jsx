import PropTypes from "prop-types";

export default function BigButton({ label = "Big Button", onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-full py-4 px-8 bg-[var(--color-accent)] text-[var(--color-surface)] text-lg font-semibold rounded-2xl hover:opacity-90 active:scale-95 transition-all shadow-[var(--shadow-lg)]"
    >
      {label}
    </button>
  );
}

BigButton.propTypes = { label: PropTypes.string, onClick: PropTypes.func };