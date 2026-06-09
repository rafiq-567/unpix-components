import { useState } from "react";
import PropTypes from "prop-types";
export default function FullWidth({ label = "Full Width Tabs" }) {
  const [tab, setTab] = useState(0);
  const tabs = ["All", "Active", "Completed", "Archived"];
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ borderBottom: "1.5px solid var(--color-border)", display: "flex" }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{
            flex: 1, padding: "10px 0", border: "none", borderBottom: tab === i ? "2px solid var(--color-accent)" : "2px solid transparent",
            marginBottom: -1.5, background: "none", cursor: "pointer", fontSize: 13, textAlign: "center",
            fontWeight: tab === i ? 600 : 400, color: tab === i ? "var(--color-accent-text)" : "var(--color-text-muted)", transition: "all 0.15s",
          }}>{t}</button>
        ))}
      </div>
      <div style={{ padding: 16, fontSize: 13, color: "var(--color-text-muted)" }}>Content for {tabs[tab]}</div>
    </div>
  );
}
FullWidth.propTypes = { label: PropTypes.string };