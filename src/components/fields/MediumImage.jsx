import PropTypes from "prop-types";

export default function MediumImage({ label = "Medium Image", src = "https://picsum.photos/400/250" }) {
  return (
    <div className="font-sans">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <img src={src} alt="medium" className="w-full h-40 object-cover rounded-xl border border-[var(--color-border)]" />
    </div>
  );
}
MediumImage.propTypes = { label: PropTypes.string, src: PropTypes.string };