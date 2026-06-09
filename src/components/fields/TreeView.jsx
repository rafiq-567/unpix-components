import { useState } from "react";
import PropTypes from "prop-types";
const tree = {
  "src": { "components": { "Button.jsx": null, "Input.jsx": null }, "pages": { "index.jsx": null } },
  "public": { "favicon.ico": null },
  "package.json": null,
};
function TreeNode({ name, node, depth = 0 }) {
  const [open, setOpen] = useState(depth < 1);
  const isFolder = node !== null;
  return (
    <div style={{ paddingLeft: depth * 16 }}>
      <div onClick={() => isFolder && setOpen(!open)}
        className={`flex items-center gap-1.5 py-1 px-2 rounded-lg text-sm cursor-pointer hover:bg-gray-50 ${isFolder ? "text-gray-700 font-medium" : "text-gray-500"}`}>
        {isFolder ? (open ? "📂" : "📁") : "📄"} {name}
      </div>
      {isFolder && open && Object.entries(node).map(([k, v]) => <TreeNode key={k} name={k} node={v} depth={depth + 1} />)}
    </div>
  );
}
export default function TreeView({ label = "Tree View" }) {
  return (
    <div className="border rounded-xl p-3 bg-white">
      <p className="text-sm font-semibold text-gray-700 mb-2 px-2">{label}</p>
      {Object.entries(tree).map(([k, v]) => <TreeNode key={k} name={k} node={v} />)}
    </div>
  );
}
TreeView.propTypes = { label: PropTypes.string };