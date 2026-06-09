import { useState } from "react";
import PropTypes from "prop-types";
export default function ImageUploadWithNameShow({ label = "Upload & Show Name" }) {
  const [name, setName] = useState(null);
  const handle = (e) => { if (e.target.files[0]) setName(e.target.files[0].name); };
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <label className="flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer hover:border-indigo-400">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-lg">Browse</span>
        <span className="text-sm text-gray-400">{name || "No file chosen"}</span>
        <input type="file" accept="image/*" className="hidden" onChange={handle} />
      </label>
    </div>
  );
}
ImageUploadWithNameShow.propTypes = { label: PropTypes.string };