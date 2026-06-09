import PropTypes from "prop-types";
export default function UploadField({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]">{label}</label>
      <div className="border-2 border-dashed border-[var(--color-border)] rounded-lg p-6 text-center text-[var(--color-text-placeholder)] text-sm cursor-pointer hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition bg-[var(--color-bg-subtle)]">
        Click or drag file here to upload
      </div>
    </div>
  );
}
UploadField.propTypes = { label: PropTypes.string };
UploadField.defaultProps = { label: "Upload" };