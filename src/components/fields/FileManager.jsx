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
    <div className="border rounded-xl overflow-hidden bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
        <h3 className="font-semibold text-gray-800">{label}</h3>
        <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700">+ New</button>
      </div>
      <div className="divide-y">
        {files.map((file) => (
          <div key={file.name} onClick={() => setSelected(file.name)}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition ${selected === file.name ? "bg-indigo-50" : "hover:bg-gray-50"}`}>
            <span className="text-xl">{icons[file.type]}</span>
            <span className="flex-1 text-sm text-gray-700">{file.name}</span>
            <span className="text-xs text-gray-400">{file.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
FileManager.propTypes = { label: PropTypes.string };