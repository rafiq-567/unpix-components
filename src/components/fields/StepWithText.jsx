import { useState } from "react";
import PropTypes from "prop-types";
const steps = [
  { label: "Account", desc: "Create account" },
  { label: "Profile", desc: "Add details" },
  { label: "Review",  desc: "Check info" },
  { label: "Done",    desc: "All set!" },
];
export default function StepWithText({ label = "Steps with Text" }) {
  const [current, setCurrent] = useState(0);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 12 }}>{label}</p>
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 24 }}>
        {steps.map((step, i) => (
          <div key={step.label} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div onClick={() => setCurrent(i)} style={{
                width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", fontWeight: 700, fontSize: 13, transition: "all 0.15s",
                backgroundColor: i < current ? "var(--color-accent)" : i === current ? "var(--color-accent)" : "var(--color-bg-muted)",
                color: i <= current ? "#fff" : "var(--color-text-muted)",
                boxShadow: i === current ? "0 0 0 4px var(--color-accent-subtle)" : "none",
              }}>
                {i < current ? "✓" : i + 1}
              </div>
              <p style={{ fontSize: 11, fontWeight: 500, marginTop: 4, color: i === current ? "var(--color-accent)" : "var(--color-text-muted)" }}>{step.label}</p>
              <p style={{ fontSize: 11, color: "var(--color-text-placeholder)" }}>{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 2, margin: "0 8px", marginTop: -36, backgroundColor: i < current ? "var(--color-accent)" : "var(--color-border)" }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
          style={{ padding: "8px 16px", fontSize: 13, border: "1px solid var(--color-border)", borderRadius: 8, backgroundColor: "var(--color-surface)", color: "var(--color-text-secondary)", cursor: current === 0 ? "not-allowed" : "pointer", opacity: current === 0 ? 0.4 : 1 }}>
          Back
        </button>
        <button onClick={() => setCurrent(c => Math.min(steps.length - 1, c + 1))} disabled={current === steps.length - 1}
          style={{ padding: "8px 16px", fontSize: 13, border: "none", borderRadius: 8, backgroundColor: "var(--color-accent)", color: "#fff", cursor: current === steps.length - 1 ? "not-allowed" : "pointer", opacity: current === steps.length - 1 ? 0.4 : 1 }}>
          Next
        </button>
      </div>
    </div>
  );
}
StepWithText.propTypes = { label: PropTypes.string };