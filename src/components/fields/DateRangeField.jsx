import PropTypes from "prop-types";

export default function DatePickerField({ label = "Date" }) {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)" }}>
        {label}
      </label>
      <input
        type="date"
        style={{
          width: "100%",
          border: "1px solid var(--color-border)",
          borderRadius: 8,
          padding: "8px 12px",
          fontSize: 13,
          color: "var(--color-text-secondary)",
          backgroundColor: "var(--color-surface)",
          colorScheme: "light dark",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

DatePickerField.propTypes = { label: PropTypes.string };