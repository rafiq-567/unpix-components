import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠", label: "Home" }, { icon: "📊", label: "Stats" }, { icon: "⚙️", label: "Settings" }];
export default function TopIcon({ label = "Top Icon Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ borderBottom: "1.5px solid var(--color-border)", display: "flex" }}>
        {tabs.map((tab, i) => (
          <button key={tab.label} onClick={() => setActive(i)} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "8px 24px",
            border: "none", borderBottom: active === i ? "2px solid var(--color-accent)" : "2px solid transparent",
            marginBottom: -1.5, background: "none", cursor: "pointer", fontSize: 11,
            fontWeight: active === i ? 600 : 400, color: active === i ? "var(--color-accent-text)" : "var(--color-text-muted)", transition: "all 0.15s",
          }}>
            <span style={{ fontSize: 20 }}>{tab.icon}</span>{tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
TopIcon.propTypes = { label: PropTypes.string };