import { useState } from "react";
import PropTypes from "prop-types";

export default function ImageUploadWithNameShow({ label = "Upload & Show Name" }) {
  const [name, setName] = useState(null);
  const handle = (e) => { if (e.target.files[0]) setName(e.target.files[0].name); };
  
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-2">{label}</p>
      <label className="flex items-center gap-3 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl px-4 py-3 cursor-pointer hover:border-[var(--color-accent)]">
        <span className="px-3 py-1 bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs rounded-lg font-medium">Browse</span>
        <span className="text-sm text-[var(--color-text-placeholder)]">{name || "No file chosen"}</span>
        <input type="file" accept="image/*" className="hidden" onChange={handle} />
      </label>
    </div>
  );
}

ImageUploadWithNameShow.propTypes = { label: PropTypes.string };