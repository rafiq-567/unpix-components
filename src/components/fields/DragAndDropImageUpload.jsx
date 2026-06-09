import { useState } from "react";
import PropTypes from "prop-types";

export default function DragAndDropImageUpload({ label = "Drag & Drop Image Upload" }) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  
  return (
    <div className="font-sans">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div 
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); setFile(e.dataTransfer.files[0]); }}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${
          dragging 
            ? "border-[var(--color-accent)] bg-[var(--color-accent-subtle)]" 
            : "border-[var(--color-border)] hover:border-[var(--color-accent)] bg-[var(--color-surface)]"
        }`}
      >
        <p className="text-[var(--color-text-placeholder)] text-sm">
          {file ? file.name : "Drag and drop an image here"}
        </p>
      </div>
    </div>
  );
}

DragAndDropImageUpload.propTypes = { label: PropTypes.string };