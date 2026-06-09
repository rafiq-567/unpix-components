import { useState } from "react";
import PropTypes from "prop-types";
export default function FabNumber({ label = "FAB", count = 3 }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition text-xl">
        +
      </button>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
        {count}
      </span>
      {open && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-2 items-end">
          {["Edit", "Share", "Delete"].map((action) => (
            <div key={action} className="flex items-center gap-2">
              <span className="text-xs bg-white shadow rounded px-2 py-1 text-gray-700">{action}</span>
              <button className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-50">
                {action[0]}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
FabNumber.propTypes = { label: PropTypes.string, count: PropTypes.number };