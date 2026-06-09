import PropTypes from "prop-types";
export default function ImageUpload({ label = "Image Upload" }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <label className="block border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-indigo-400 transition">
        <div className="text-3xl mb-2">📷</div>
        <span className="text-sm text-gray-400">Click to upload image</span>
        <input type="file" accept="image/*" className="hidden" />
      </label>
    </div>
  );
}
ImageUpload.propTypes = { label: PropTypes.string };