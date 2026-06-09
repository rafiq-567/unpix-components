import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "→", label: "Next" }, { icon: "✓", label: "Done" }, { icon: "✕", label: "Cancel" }];
export default function RightIcon({ label = "Right Icon Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ borderBottom: "1.5px solid var(--color-border)", display: "flex" }}>
        {tabs.map((tab, i) => (
          <button key={tab.label} onClick={() => setActive(i)} style={{
            display: "flex", alignItems: "center", gap: 8, padding: "10px 16px",
            border: "none", borderBottom: active === i ? "2px solid var(--color-accent)" : "2px solid transparent",
            marginBottom: -1.5, background: "none", cursor: "pointer", fontSize: 13,
            fontWeight: active === i ? 600 : 400, color: active === i ? "var(--color-accent-text)" : "var(--color-text-muted)", transition: "all 0.15s",
          }}>
            {tab.label}<span>{tab.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
RightIcon.propTypes = { label: PropTypes.string };