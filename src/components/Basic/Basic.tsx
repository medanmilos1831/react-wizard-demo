import { createWizardClient } from "react-wizzard";

import { CodeHighlighter } from "../CodeHighlighter";

const { Wizard, useWizard, useWizardCommands } = createWizardClient();

const StepOne = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 16px",
        background: "#1e3a8a", // Škoda Deep Blue
        borderRadius: "8px",
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        boxShadow: "0 4px 12px rgba(30, 58, 138, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      🚀 Step One
    </div>
  );
};

const StepTwo = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 16px",
        background: "#dc2626", // Škoda Red
        borderRadius: "8px",
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      ⚡ Step Two
    </div>
  );
};

const StepThree = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 16px",
        background: "#059669", // Škoda Green
        borderRadius: "8px",
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      ✅ Step Three
    </div>
  );
};

const StepMap: Record<string, React.ComponentType> = {
  stepOne: StepOne,
  stepTwo: StepTwo,
  stepThree: StepThree,
};

const BodyWrapper = ({
  children,
}: {
  children: (stepName: string) => React.ReactNode;
}) => {
  const { activeStep } = useWizard();
  return <div>{children(activeStep)}</div>;
};

const WizardControls = () => {
  const { next, previous } = useWizardCommands();
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center",
        marginTop: "16px",
      }}
    >
      <button
        onClick={() => previous()}
        style={{
          background: "#1e3a8a", // Škoda Deep Blue
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "12px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 8px rgba(30, 58, 138, 0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(30, 58, 138, 0.6)";
          e.currentTarget.style.background = "#1e40af";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(30, 58, 138, 0.4)";
          e.currentTarget.style.background = "#1e3a8a";
        }}
      >
        Previous
      </button>
      <button
        onClick={() => next()}
        style={{
          background: "#059669", // Škoda Green
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "12px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 8px rgba(5, 150, 105, 0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(5, 150, 105, 0.6)";
          e.currentTarget.style.background = "#047857";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(5, 150, 105, 0.4)";
          e.currentTarget.style.background = "#059669";
        }}
      >
        Next
      </button>
    </div>
  );
};

const WizardNavigation = () => {
  const { steps, activeStep } = useWizard();
  const { goToStep } = useWizardCommands();
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        justifyContent: "center",
        marginBottom: "16px",
        flexWrap: "wrap",
      }}
    >
      {steps.map((step) => {
        const isActive = step === activeStep;
        return (
          <button
            onClick={() => goToStep(step)}
            key={step}
            style={{
              background: isActive
                ? "#1e3a8a" // Škoda Deep Blue for active
                : "rgba(255, 255, 255, 0.8)",
              color: isActive ? "white" : "#333",
              border: isActive
                ? "1px solid #1e3a8a"
                : "1px solid rgba(102, 126, 234, 0.3)",
              borderRadius: "16px",
              padding: "6px 12px",
              fontSize: "11px",
              fontWeight: isActive ? "600" : "500",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "capitalize",
              backdropFilter: "blur(10px)",
              boxShadow: isActive ? "0 2px 8px rgba(30, 58, 138, 0.3)" : "none",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.6)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}
          >
            {step.replace(/([A-Z])/g, " $1").trim()}
          </button>
        );
      })}
    </div>
  );
};

const Basic = () => {
  const codeExample = `import { createWizardClient } from "react-wizzard";

const { Wizard, useWizard, useWizardCommands } = createWizardClient();

const StepOne = () => {
  return <div>Step One</div>;
};

const StepTwo = () => {
  return <div>Step Two</div>;
};

const StepThree = () => {
  return <div>Step Three</div>;
};

const StepMap: Record<string, React.ComponentType> = {
  stepOne: StepOne,
  stepTwo: StepTwo,
  stepThree: StepThree,
};

const BodyWrapper = ({
  children,
}: {
  children: (stepName: string) => React.ReactNode;
}) => {
  const { activeStep } = useWizard();
  return <div>{children(activeStep)}</div>;
};

const WizardControls = () => {
  const { next, previous } = useWizardCommands();
  return (
    <div>
      <button onClick={() => previous()}>Previous</button>
      <button onClick={() => next()}>Next</button>
    </div>
  );
};

const WizardNavigation = () => {
  const { steps, activeStep } = useWizard();
  const { goToStep } = useWizardCommands();
  return (
    <div>
      {steps.map((step) => {
        const isActive = step === activeStep;
        return (
          <button
            onClick={() => goToStep(step)}
            key={step}
            style={{
              background: isActive ? "#1e3a8a" : "white",
              color: isActive ? "white" : "#333",
            }}
          >
            {step}
          </button>
        );
      })}
    </div>
  );
};

const Basic = () => {
  return (
    <Wizard
      id="basic"
      steps={["stepOne", "stepTwo", "stepThree"]}
      activeStep="stepOne"
    >
      <WizardNavigation />
      <BodyWrapper>
        {(stepName) => {
          const Step = StepMap[stepName as keyof typeof StepMap];
          return <Step />;
        }}
      </BodyWrapper>
      <WizardControls />
    </Wizard>
  );
};`;

  return (
    <div>
      <p style={{ marginBottom: "16px", color: "#666" }}>
        This is a simple wizard implementation with navigation and controls.
      </p>

      <div
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          borderRadius: "12px",
          padding: "20px",
          margin: "16px 0",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #667eea, #764ba2, #f093fb)",
            borderRadius: "16px 16px 0 0",
          }}
        />

        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "12px",
            padding: "24px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Wizard
            id="basic"
            steps={["stepOne", "stepTwo", "stepThree"]}
            activeStep="stepOne"
          >
            <WizardNavigation />
            <BodyWrapper>
              {(stepName) => {
                const Step = StepMap[stepName as keyof typeof StepMap];
                return <Step />;
              }}
            </BodyWrapper>
            <WizardControls />
          </Wizard>
        </div>
      </div>

      <div style={{ marginTop: "16px" }}>
        <h4
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}
        >
          Code Example:
        </h4>
        <p
          style={{
            fontSize: "12px",
            color: "#666",
            fontStyle: "italic",
            marginBottom: "8px",
            padding: "8px 12px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "6px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          ⚠️ Note: CSS styles are not included in this code example. The styling
          shown above is applied via inline styles in the actual component.
        </p>
        <CodeHighlighter code={codeExample} language="tsx" />
      </div>
    </div>
  );
};

export { Basic };
