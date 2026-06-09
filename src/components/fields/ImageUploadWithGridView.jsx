import { useState } from "react";
import PropTypes from "prop-types";
export default function ImageUploadWithGridView({ label = "Image Upload Grid View" }) {
  const [images, setImages] = useState([]);
  const handle = (e) => {
    const files = Array.from(e.target.files).map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...files]);
  };
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <label className="block border-2 border-dashed border-gray-300 rounded-xl p-4 text-center cursor-pointer hover:border-indigo-400 mb-3">
        <span className="text-sm text-gray-400">Click to upload images</span>
        <input type="file" multiple accept="image/*" className="hidden" onChange={handle} />
      </label>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="w-full h-24 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
}
ImageUploadWithGridView.propTypes = { label: PropTypes.string };