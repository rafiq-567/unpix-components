import { useState } from "react";
import PropTypes from "prop-types";
const tabs = ["Overview", "Analytics", "Reports", "Settings"];
export default function Vertical({ label = "Vertical Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ display: "flex", border: "1px solid var(--color-border)", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column", borderRight: "1px solid var(--color-border)", width: 128 }}>
          {tabs.map((tab, i) => (
            <button key={tab} onClick={() => setActive(i)} style={{
              padding: "12px 16px", border: "none", borderRight: active === i ? "2px solid var(--color-accent)" : "2px solid transparent",
              cursor: "pointer", fontSize: 13, textAlign: "left", transition: "all 0.15s",
              backgroundColor: active === i ? "var(--color-accent-subtle)" : "var(--color-surface)",
              color: active === i ? "var(--color-accent-text)" : "var(--color-text-muted)",
              fontWeight: active === i ? 600 : 400,
            }}>{tab}</button>
          ))}
        </div>
        <div style={{ flex: 1, padding: 16, fontSize: 13, color: "var(--color-text-muted)", backgroundColor: "var(--color-surface)" }}>
          Content for {tabs[active]}
        </div>
      </div>
    </div>
  );
}
Vertical.propTypes = { label: PropTypes.string };