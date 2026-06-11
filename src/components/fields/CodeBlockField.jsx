import PropTypes from "prop-types";

export default function CodeBlockField({ label = "Code Block" }) {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <label style={{ display: "block", marginBottom: 6, fontSize: 16, fontWeight: 900, color: "var(--color-text-muted)" }}>
        {label}
      </label>
      <pre style={{
        backgroundColor: isDark ? "#2d3748" : "#111827",
        color: isDark ? "#94a3b8" : "#4ade80",
        fontSize: 12,
        borderRadius: 8,
        padding: 16,
        overflowX: "auto",
        margin: 0,
        border: isDark ? "1px solid #334155" : "none",
      }}>
        <code>{`// Code block\nconst hello = "world";\nconsole.log(hello);`}</code>
      </pre>
    </div>
  );
}

CodeBlockField.propTypes = { label: PropTypes.string };