import { useState } from "react";
import PropTypes from "prop-types";
const tabs = [{ icon: "🏠" }, { icon: "📊" }, { icon: "👤" }, { icon: "⚙️" }];
export default function IconOnly({ label = "Icon Only Tabs" }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ borderBottom: "1.5px solid var(--color-border)", display: "flex" }}>
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            flex: 1, padding: "12px 0", border: "none", borderBottom: active === i ? "2px solid var(--color-accent)" : "2px solid transparent",
            marginBottom: -1.5, background: "none", cursor: "pointer", fontSize: 20, transition: "all 0.15s",
            opacity: active === i ? 1 : 0.4,
          }}>{tab.icon}</button>
        ))}
      </div>
    </div>
  );
}
IconOnly.propTypes = { label: PropTypes.string };