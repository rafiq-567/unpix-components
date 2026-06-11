import { useState } from "react";
import PropTypes from "prop-types";
export default function ModalField({ label }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Modal</p>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-indigo-500 text-white text-sm rounded hover:bg-indigo-600">
        Open {label}
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-80">
            <h2 className="font-semibold text-gray-800 mb-2">{label}</h2>
            <p className="text-sm text-gray-500 mb-4">Modal content goes here.</p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setOpen(false)} className="px-3 py-1.5 text-sm border rounded text-gray-600">Cancel</button>
              <button onClick={() => setOpen(false)} className="px-3 py-1.5 text-sm bg-indigo-500 text-white rounded">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
ModalField.propTypes = { label: PropTypes.string };
ModalField.defaultProps = { label: "Modal" };