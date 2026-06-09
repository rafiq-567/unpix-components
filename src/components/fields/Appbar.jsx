import PropTypes from "prop-types";
export default function Appbar({ title = "App Title", showSearch = true }) {
  return (
    <div className="bg-indigo-600 text-white px-4 py-3 flex items-center justify-between rounded-xl">
      <div className="flex items-center gap-3">
        <button className="text-white hover:text-indigo-200 text-xl">☰</button>
        <span className="font-semibold">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {showSearch && (
          <button className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center">🔍</button>
        )}
        <button className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center">🔔</button>
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-semibold">A</div>
      </div>
    </div>
  );
}
Appbar.propTypes = { title: PropTypes.string, showSearch: PropTypes.bool };