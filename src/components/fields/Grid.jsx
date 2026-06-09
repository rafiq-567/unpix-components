import PropTypes from "prop-types";
const colors = ["#e0e7ff","#fce7f3","#dcfce7","#fef9c3","#dbeafe","#f3e8ff","#ffedd5","#ccfbf1","#fee2e2"];
const items = Array.from({ length: 9 }, (_, i) => ({ id: i + 1, title: `Item ${i + 1}`, color: colors[i] }));
export default function Grid({ label = "Grid", columns = 3 }) {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8 }}>{label}</p>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {items.map(item => (
          <div key={item.id} style={{
            backgroundColor: item.color, borderRadius: 12, padding: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            height: 80, fontSize: 13, fontWeight: 500, color: "#374151",
          }}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
Grid.propTypes = { label: PropTypes.string, columns: PropTypes.number };