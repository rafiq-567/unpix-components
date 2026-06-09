import PropTypes from "prop-types";
const items = Array.from({ length: 9 }, (_, i) => ({ id: i + 1, title: `Item ${i + 1}`, bg: ["bg-indigo-100","bg-pink-100","bg-green-100","bg-yellow-100","bg-blue-100","bg-purple-100","bg-orange-100","bg-teal-100","bg-red-100"][i] }));
export default function Grid({ label = "Grid", columns = 3 }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className={`grid gap-3`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {items.map(item => (
          <div key={item.id} className={`${item.bg} rounded-xl p-4 flex items-center justify-center text-sm font-medium text-gray-700 h-20`}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
Grid.propTypes = { label: PropTypes.string, columns: PropTypes.number };