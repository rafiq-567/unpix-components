import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "→", label: "Next" }, { icon: "✓", label: "Done" }, { icon: "✕", label: "Exit" }];
export default function VerticalRightIcon({ label = "Vertical Right Icon" }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, borderRight: "1px solid var(--color-border)", paddingRight: 8 }}>
          {tabs.map((tab, i) => (
            <button key={tab.label} onClick={() => setActive(i)} style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 12px",
              border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13, transition: "all 0.15s",
              backgroundColor: active === i ? "var(--color-accent-subtle)" : "transparent",
              color: active === i ? "var(--color-accent-text)" : "var(--color-text-muted)",
              fontWeight: active === i ? 600 : 400,
            }}>
              <span>{tab.label}</span><span>{tab.icon}</span>
            </button>
          ))}
        </div>
        <div style={{ flex: 1, fontSize: 13, color: "var(--color-text-muted)", display: "flex", alignItems: "center" }}>
          {tabs[active].label} Content
        </div>
      </div>
    </div>
  );
}
VerticalRightIcon.propTypes = { label: PropTypes.string };