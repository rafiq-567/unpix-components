import PropTypes from "prop-types";

export default function SmallImage({ label = "Small Image", src = "https://picsum.photos/200/150" }) {
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <img src={src} alt="small" className="w-32 h-24 object-cover rounded-lg border border-[var(--color-border)]" />
    </div>
  );
}
SmallImage.propTypes = { label: PropTypes.string, src: PropTypes.string };