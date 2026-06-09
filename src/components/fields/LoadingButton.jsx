import { useState } from "react";
import PropTypes from "prop-types";
export default function LoadingButton({ label = "Submit" }) {
  const [loading, setLoading] = useState(false);
  const handle = () => { setLoading(true); setTimeout(() => setLoading(false), 2000); };
  return (
    <button onClick={handle} disabled={loading}
      className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-70 transition">
      {loading && <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>}
      {loading ? "Loading..." : label}
    </button>
  );
}
LoadingButton.propTypes = { label: PropTypes.string };