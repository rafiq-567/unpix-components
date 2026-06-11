import PropTypes from "prop-types";

const images = [
  "https://picsum.photos/200/200?random=1",
  "https://picsum.photos/200/200?random=2",
  "https://picsum.photos/200/200?random=3",
  "https://picsum.photos/200/200?random=4",
  "https://picsum.photos/200/200?random=5",
  "https://picsum.photos/200/200?random=6",
];

export default function GridImage({ label = "Grid Images" }) {
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="w-full h-24 object-cover rounded-lg border border-[var(--color-border)]" />
        ))}
      </div>
    </div>
  );
}
GridImage.propTypes = { label: PropTypes.string };