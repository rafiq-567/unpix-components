import { useState } from "react";
import PropTypes from "prop-types";

export default function ImageUploadWithImageShow({ label = "Upload & Preview Image" }) {
  const [src, setSrc] = useState(null);
  const handle = (e) => { if (e.target.files[0]) setSrc(URL.createObjectURL(e.target.files[0])); };
  
  return (
    <div className="font-sans">
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <label className="block border-2 border-dashed border-[var(--color-border)] rounded-xl p-4 text-center cursor-pointer hover:border-[var(--color-accent)] bg-[var(--color-surface)] mb-3">
        <span className="text-sm text-[var(--color-text-placeholder)]">Click to upload</span>
        <input type="file" accept="image/*" className="hidden" onChange={handle} />
      </label>
      {src && <img src={src} alt="preview" className="w-full rounded-xl object-cover max-h-48 border border-[var(--color-border)]" />}
    </div>
  );
}

ImageUploadWithImageShow.propTypes = { label: PropTypes.string };