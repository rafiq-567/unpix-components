import PropTypes from "prop-types";
const items = [
  { h: "h-32", bg: "bg-indigo-100", text: "Item 1" },
  { h: "h-48", bg: "bg-pink-100",   text: "Item 2" },
  { h: "h-24", bg: "bg-green-100",  text: "Item 3" },
  { h: "h-40", bg: "bg-yellow-100", text: "Item 4" },
  { h: "h-28", bg: "bg-blue-100",   text: "Item 5" },
  { h: "h-36", bg: "bg-purple-100", text: "Item 6" },
];
export default function Masonry({ label = "Masonry Layout" }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="columns-3 gap-2 space-y-2">
        {items.map((item, i) => (
          <div key={i} className={`${item.h} ${item.bg} rounded-xl flex items-center justify-center text-sm text-gray-600 font-medium break-inside-avoid`}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
Masonry.propTypes = { label: PropTypes.string };