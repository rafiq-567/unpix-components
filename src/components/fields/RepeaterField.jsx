import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
export default function RepeaterField({ label }) {
  const [rows, setRows] = useState(["Row 1"]);
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-2 border rounded px-3 py-2 bg-white">
            <span className="text-xs text-gray-500 flex-1">{row}</span>
            <button onClick={() => setRows(rows.filter((_, j) => j !== i))}>
              <Trash2 size={14} className="text-red-400" />
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => setRows([...rows, `Row ${rows.length + 1}`])}
        className="mt-2 flex items-center gap-1 text-xs text-indigo-500">
        <Plus size={14} /> Add Row
      </button>
    </div>
  );
}
RepeaterField.propTypes = { label: PropTypes.string };
RepeaterField.defaultProps = { label: "Repeater" };