import PropTypes from "prop-types";

export default function Image({ label = "Image", src = "https://picsum.photos/400/300", alt = "image" }) {
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <img src={src} alt={alt} className="rounded-xl w-full object-cover border border-[var(--color-border)]" />
    </div>
  );
}
Image.propTypes = { label: PropTypes.string, src: PropTypes.string, alt: PropTypes.string };