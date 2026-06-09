import PropTypes from "prop-types";
export default function SmallImage({ label = "Small Image", src = "https://picsum.photos/200/150" }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <img src={src} alt="small" className="w-32 h-24 object-cover rounded-lg" />
    </div>
  );
}
SmallImage.propTypes = { label: PropTypes.string, src: PropTypes.string };