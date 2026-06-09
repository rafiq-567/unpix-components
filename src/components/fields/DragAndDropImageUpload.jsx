import { useState } from "react";
import PropTypes from "prop-types";
export default function DragAndDropImageUpload({ label = "Drag & Drop Image Upload" }) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); setFile(e.dataTransfer.files[0]); }}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${dragging ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400"}`}>
        <p className="text-gray-400 text-sm">{file ? file.name : "Drag and drop an image here"}</p>
      </div>
    </div>
  );
}
DragAndDropImageUpload.propTypes = { label: PropTypes.string };