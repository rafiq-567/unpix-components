import PropTypes from "prop-types";

export default function Home({ label = "Home" }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mt-2 rounded-xl hover:bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] cursor-pointer transition w-fit font-sans">
      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2L2 8v10h6v-6h4v6h6V8L10 2z"/>
      </svg>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
Home.propTypes = { label: PropTypes.string };