import { useState } from "react";
import PropTypes from "prop-types";

const files = [
  { name: "Documents", type: "folder", size: "" },
  { name: "Images", type: "folder", size: "" },
  { name: "report.pdf", type: "pdf", size: "2.4 MB" },
  { name: "design.fig", type: "file", size: "8.1 MB" },
  { name: "data.xlsx", type: "excel", size: "1.2 MB" },
  { name: "README.md", type: "md", size: "4 KB" },
];
const icons = { folder: "📁", pdf: "📄", excel: "📊", md: "📝", file: "📎" };

export default function FileManager({ label = "File Manager" }) {
  const [selected, setSelected] = useState(null);
  return (
    <div className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-surface)] font-sans">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
        <h3 className="font-semibold text-[var(--color-text-primary)]">{label}</h3>
        <button className="text-xs bg-[var(--color-accent)] text-[var(--color-surface)] px-3 py-1.5 rounded-lg hover:opacity-90 font-medium">+ New</button>
      </div>
      <div className="divide-y divide-[var(--color-border)]">
        {files.map((file) => (
          <div key={file.name} onClick={() => setSelected(file.name)}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition ${selected === file.name ? "bg-[var(--color-accent-subtle)]" : "hover:bg-[var(--color-bg-subtle)]"}`}>
            <span className="text-xl">{icons[file.type]}</span>
            <span className="flex-1 text-sm text-[var(--color-text-secondary)]">{file.name}</span>
            <span className="text-xs text-[var(--color-text-placeholder)]">{file.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
FileManager.propTypes = { label: PropTypes.string };