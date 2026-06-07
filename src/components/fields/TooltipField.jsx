import { useState } from "react";
import { Info } from "lucide-react";
import PropTypes from "prop-types";
export default function TooltipField({ label }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center gap-2 text-sm">
      <span>{label}</span>
      <div className="relative">
        <Info size={16} className="text-amber-500 cursor-pointer"
          onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} />
        {show && (
          <div className="absolute left-6 top-0 bg-gray-800 text-white text-xs rounded px-2 py-1 w-36 z-10">
            Tooltip text goes here
          </div>
        )}
      </div>
    </div>
  );
}
TooltipField.propTypes = { label: PropTypes.string };
TooltipField.defaultProps = { label: "Tooltip" };