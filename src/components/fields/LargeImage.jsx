import PropTypes from "prop-types";

export default function LargeImage({ label = "Large Image", src = "https://picsum.photos/800/400" }) {
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <img src={src} alt="large" className="w-full h-64 object-cover rounded-2xl border border-[var(--color-border)]" />
    </div>
  );
}
LargeImage.propTypes = { label: PropTypes.string, src: PropTypes.string };