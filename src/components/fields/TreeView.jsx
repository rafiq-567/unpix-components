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
        className={`flex items-center gap-1.5 py-1 px-2 rounded-lg text-sm cursor-pointer hover:bg-[var(--color-bg-subtle)] ${isFolder ? "text-[var(--color-text-secondary)] font-medium" : "text-[var(--color-text-muted)]"}`}>
        {isFolder ? (open ? "📂" : "📁") : "📄"} {name}
      </div>
      {isFolder && open && Object.entries(node).map(([k, v]) => <TreeNode key={k} name={k} node={v} depth={depth + 1} />)}
    </div>
  );
}

export default function TreeView({ label = "Tree View" }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl p-3 bg-[var(--color-surface)] font-sans">
      <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-2 px-2">{label}</p>
      {Object.entries(tree).map(([k, v]) => <TreeNode key={k} name={k} node={v} />)}
    </div>
  );
}
TreeView.propTypes = { label: PropTypes.string };