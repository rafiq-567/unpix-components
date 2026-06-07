import { useState } from "react";
import PropTypes from "prop-types";
export default function RadioTilesField({ label }) {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <label className="block mb-2">{label}</label>
      <div className="grid grid-cols-2 gap-2">
        {["Option 1", "Option 2"].map((option) => (
          <button key={option} type="button" onClick={() => setSelected(option)}
            className={`border rounded p-4 ${selected === option ? "border-blue-500 bg-blue-50" : ""}`}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
RadioTilesField.propTypes = { label: PropTypes.string };
RadioTilesField.defaultProps = { label: "Radio Tiles" };