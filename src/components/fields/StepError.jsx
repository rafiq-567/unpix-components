import PropTypes from "prop-types";

const steps = ["Details", "Payment", "Review", "Confirm"];

export default function StepError({ label = "Step with Error", errorStep = 1 }) {
  return (
    <div className="font-sans">
      <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-3">{label}</p>
      <div className="flex items-center">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i === errorStep ? "bg-[var(--color-danger)] text-[var(--color-surface)]" : i < errorStep ? "bg-[var(--color-accent)] text-[var(--color-surface)]" : "bg-[var(--color-bg-subtle)] text-[var(--color-text-placeholder)]"}`}>
                {i === errorStep ? "!" : i < errorStep ? "✓" : i + 1}
              </div>
              <span className={`text-xs mt-1 ${i === errorStep ? "text-[var(--color-danger)]" : "text-[var(--color-text-muted)]"}`}>{step}</span>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < errorStep ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"}`} />}
          </div>
        ))}
      </div>
    </div>
  );
}
StepError.propTypes = { label: PropTypes.string, errorStep: PropTypes.number };