import PropTypes from "prop-types";
export default function UploadField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <div className="border-2 border-dashed rounded-lg p-6 text-center text-gray-400 text-sm cursor-pointer hover:border-indigo-400 hover:text-indigo-400 transition">
        Click or drag file here to upload
      </div>
    </div>
  );
}
UploadField.propTypes = { label: PropTypes.string };
UploadField.defaultProps = { label: "Upload" };