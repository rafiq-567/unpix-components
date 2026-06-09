import { useState } from "react";
import PropTypes from "prop-types";
export default function ImageUploadWithImageShow({ label = "Upload & Preview Image" }) {
  const [src, setSrc] = useState(null);
  const handle = (e) => { if (e.target.files[0]) setSrc(URL.createObjectURL(e.target.files[0])); };
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <label className="block border-2 border-dashed border-gray-300 rounded-xl p-4 text-center cursor-pointer hover:border-indigo-400 mb-3">
        <span className="text-sm text-gray-400">Click to upload</span>
        <input type="file" accept="image/*" className="hidden" onChange={handle} />
      </label>
      {src && <img src={src} alt="preview" className="w-full rounded-xl object-cover max-h-48" />}
    </div>
  );
}
ImageUploadWithImageShow.propTypes = { label: PropTypes.string };