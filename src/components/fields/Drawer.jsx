import { useState } from "react";
import PropTypes from "prop-types";
export default function Drawer({ label = "Drawer", side = "left" }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
        Open {label}
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {side === "left" && (
            <>
              <div className="w-72 bg-white h-full shadow-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-gray-800">{label}</h2>
                  <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700">✕</button>
                </div>
                {["Dashboard","Analytics","Reports","Settings","Help"].map(item => (
                  <button key={item} className="text-left py-3 px-3 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition">{item}</button>
                ))}
              </div>
              <div onClick={() => setOpen(false)} className="flex-1 bg-black/40" />
            </>
          )}
          {side === "right" && (
            <>
              <div onClick={() => setOpen(false)} className="flex-1 bg-black/40" />
              <div className="w-72 bg-white h-full shadow-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-gray-800">{label}</h2>
                  <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700">✕</button>
                </div>
                {["Profile","Notifications","Privacy","Logout"].map(item => (
                  <button key={item} className="text-left py-3 px-3 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition">{item}</button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
Drawer.propTypes = { label: PropTypes.string, side: PropTypes.oneOf(["left", "right"]) };