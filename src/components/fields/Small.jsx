import { useState } from "react";
import PropTypes from "prop-types";
export default function Small({ label = "Small Tabs" }) {
  const [tab, setTab] = useState(0);
  const tabs = ["Day", "Week", "Month"];
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ display: "inline-flex", backgroundColor: "var(--color-bg-muted)", borderRadius: 8, padding: 2, gap: 2 }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{
            padding: "6px 12px", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 12,
            fontWeight: tab === i ? 600 : 400, transition: "all 0.15s",
            backgroundColor: tab === i ? "var(--color-surface)" : "transparent",
            color: tab === i ? "var(--color-text-primary)" : "var(--color-text-muted)",
            boxShadow: tab === i ? "var(--shadow-sm)" : "none",
          }}>{t}</button>
        ))}
      </div>
    </div>
  );
}
Small.propTypes = { label: PropTypes.string };