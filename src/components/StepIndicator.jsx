export default function StepIndicator({ steps, current }) {
  return (
    <div className="step-indicator d-flex justify-content-center gap-2 mb-4">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === current;
        const isDone = stepNum < current;
        return (
          <div
            key={label}
            className={`step-pill ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
          >
            <span className="step-num">{stepNum}</span>
            <span className="step-label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
