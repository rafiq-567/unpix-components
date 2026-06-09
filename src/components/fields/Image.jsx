import PropTypes from "prop-types";
export default function Image({ label = "Image", src = "https://picsum.photos/400/300", alt = "image" }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <img src={src} alt={alt} className="rounded-xl w-full object-cover" />
    </div>
  );
}
Image.propTypes = { label: PropTypes.string, src: PropTypes.string, alt: PropTypes.string };