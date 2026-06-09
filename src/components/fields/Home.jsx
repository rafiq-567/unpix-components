import PropTypes from "prop-types";
export default function Home({ label = "Home" }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer transition w-fit">
      <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2L2 8v10h6v-6h4v6h6V8L10 2z"/>
      </svg>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
}
Home.propTypes = { label: PropTypes.string };