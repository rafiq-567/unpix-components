import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠", label: "Home" }, { icon: "📊", label: "Stats" }, { icon: "👤", label: "Profile" }];
export default function VerticalBottomIcon({ label = "Vertical Bottom Icon" }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {tabs.map((tab, i) => (
            <button key={tab.label} onClick={() => setActive(i)} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "8px 16px",
              border: "none", borderRight: active === i ? "2px solid var(--color-accent)" : "2px solid transparent",
              borderRadius: 12, cursor: "pointer", fontSize: 11, transition: "all 0.15s",
              backgroundColor: active === i ? "var(--color-accent-subtle)" : "transparent",
              color: active === i ? "var(--color-accent-text)" : "var(--color-text-muted)",
            }}>
              <span>{tab.label}</span><span style={{ fontSize: 16 }}>{tab.icon}</span>
            </button>
          ))}
        </div>
        <div style={{ flex: 1, borderLeft: "1px solid var(--color-border)", paddingLeft: 12, fontSize: 13, color: "var(--color-text-muted)", display: "flex", alignItems: "center" }}>
          {tabs[active].label} Content
        </div>
      </div>
    </div>
  );
}
VerticalBottomIcon.propTypes = { label: PropTypes.string };