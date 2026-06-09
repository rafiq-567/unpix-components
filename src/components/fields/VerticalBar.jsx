import { useState } from "react";
import PropTypes from "prop-types";
const tabs = ["Dashboard", "Users", "Products", "Orders", "Reports"];
export default function VerticalBar({ label = "Vertical Bar Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ display: "flex", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {tabs.map((tab, i) => (
            <button key={tab} onClick={() => setActive(i)} style={{
              padding: "8px 16px", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13, textAlign: "left", transition: "all 0.15s",
              backgroundColor: active === i ? "var(--color-accent)" : "transparent",
              color: active === i ? "#fff" : "var(--color-text-muted)",
              fontWeight: active === i ? 600 : 400,
            }}>{tab}</button>
          ))}
        </div>
        <div style={{ flex: 1, borderLeft: "1px solid var(--color-border)", paddingLeft: 16, fontSize: 13, color: "var(--color-text-muted)", display: "flex", alignItems: "flex-start", paddingTop: 8 }}>
          Content for {tabs[active]}
        </div>
      </div>
    </div>
  );
}
VerticalBar.propTypes = { label: PropTypes.string };