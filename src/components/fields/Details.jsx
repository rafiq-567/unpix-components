import PropTypes from "prop-types";
export default function Details({ label = "Details Picker" }) {
  return (
    <details className="border rounded-xl overflow-hidden">
      <summary className="px-4 py-3 cursor-pointer font-medium text-gray-700 bg-gray-50 hover:bg-gray-100">{label}</summary>
      <div className="p-4 text-sm text-gray-600">Expanded content goes here.</div>
    </details>
  );
}
Details.propTypes = { label: PropTypes.string };