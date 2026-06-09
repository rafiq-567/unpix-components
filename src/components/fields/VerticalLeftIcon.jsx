import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠" }, { icon: "📊" }, { icon: "👤" }, { icon: "⚙️" }];
export default function VerticalIconOnly({ label = "Vertical Icon Only" }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, borderRight: "1px solid var(--color-border)", paddingRight: 4 }}>
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: 40, height: 40, borderRadius: 12, border: "none", cursor: "pointer", fontSize: 20,
              display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s",
              backgroundColor: active === i ? "var(--color-accent-subtle)" : "transparent",
              color: active === i ? "var(--color-accent-text)" : "var(--color-text-muted)",
            }}>{tab.icon}</button>
          ))}
        </div>
        <div style={{ flex: 1, fontSize: 13, color: "var(--color-text-muted)", display: "flex", alignItems: "center" }}>
          Content {active + 1}
        </div>
      </div>
    </div>
  );
}
VerticalIconOnly.propTypes = { label: PropTypes.string };