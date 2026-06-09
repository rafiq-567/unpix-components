import { useState } from "react";
import PropTypes from "prop-types";
export default function BackDrop({ label = "Backdrop" }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
        Show {label}
      </button>
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div onClick={e => e.stopPropagation()} className="bg-white rounded-2xl p-8 shadow-2xl">
            <p className="text-gray-800 font-semibold mb-4">{label} is showing</p>
            <button onClick={() => setOpen(false)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
BackDrop.propTypes = { label: PropTypes.string };