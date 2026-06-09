import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠", label: "Home" }, { icon: "🔍", label: "Search" }, { icon: "❤️", label: "Saved" }, { icon: "👤", label: "Profile" }];
export default function BottomIcon({ label = "Bottom Icon Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ border: "1px solid var(--color-border)", borderRadius: 16, overflow: "hidden" }}>
        <div style={{ height: 96, backgroundColor: "var(--color-bg-subtle)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "var(--color-text-placeholder)" }}>
          {tabs[active].label} Content
        </div>
        <div style={{ display: "flex", borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-surface)" }}>
          {tabs.map((tab, i) => (
            <button key={tab.label} onClick={() => setActive(i)} style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "12px 0", gap: 4,
              border: "none", background: "none", cursor: "pointer", transition: "all 0.15s",
              color: active === i ? "var(--color-accent)" : "var(--color-text-muted)",
            }}>
              <span style={{ fontSize: 20 }}>{tab.icon}</span>
              <span style={{ fontSize: 11 }}>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
BottomIcon.propTypes = { label: PropTypes.string };