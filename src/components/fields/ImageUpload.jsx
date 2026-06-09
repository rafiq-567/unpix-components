import PropTypes from "prop-types";

export default function ImageUpload({ label = "Image Upload" }) {
  return (
    <div className="font-sans">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <label className="block border-2 border-dashed border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl p-6 text-center cursor-pointer hover:border-[var(--color-accent)] transition">
        <div className="text-3xl mb-2">📷</div>
        <span className="text-sm text-[var(--color-text-placeholder)]">Click to upload image</span>
        <input type="file" accept="image/*" className="hidden" />
      </label>
    </div>
  );
}

ImageUpload.propTypes = { label: PropTypes.string };