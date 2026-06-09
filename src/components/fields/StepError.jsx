import PropTypes from "prop-types";
const steps = ["Details", "Payment", "Review", "Confirm"];
export default function StepError({ label = "Step with Error", errorStep = 1 }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-3">{label}</p>
      <div className="flex items-center">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i === errorStep ? "bg-red-500 text-white" : i < errorStep ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                {i === errorStep ? "!" : i < errorStep ? "✓" : i + 1}
              </div>
              <span className={`text-xs mt-1 ${i === errorStep ? "text-red-500" : "text-gray-500"}`}>{step}</span>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < errorStep ? "bg-indigo-500" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>
    </div>
  );
}
StepError.propTypes = { label: PropTypes.string, errorStep: PropTypes.number };