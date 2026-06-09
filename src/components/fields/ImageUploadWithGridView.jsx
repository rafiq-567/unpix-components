import { useState } from "react";
import PropTypes from "prop-types";

export default function ImageUploadWithGridView({ label = "Image Upload Grid View" }) {
  const [images, setImages] = useState([]);
  const handle = (e) => {
    const files = Array.from(e.target.files).map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...files]);
  };
  
  return (
    <div className="font-sans">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <label className="block border-2 border-dashed border-[var(--color-border)] rounded-xl p-4 text-center cursor-pointer hover:border-[var(--color-accent)] bg-[var(--color-surface)] mb-3">
        <span className="text-sm text-[var(--color-text-placeholder)]">Click to upload images</span>
        <input type="file" multiple accept="image/*" className="hidden" onChange={handle} />
      </label>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="w-full h-24 object-cover rounded-lg border border-[var(--color-border)]" />
        ))}
      </div>
    </div>
  );
}

ImageUploadWithGridView.propTypes = { label: PropTypes.string };