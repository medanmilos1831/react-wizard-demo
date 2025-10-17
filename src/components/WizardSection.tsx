import { Card } from "antd";
import { Basic } from "./Basic/Basic";
import { DynamicSteps } from "./DynamicSteps/DynamicSteps";
import { RenderSuccess } from "./RenderSuccess/RenderSuccess";
import { Validation } from "./Validation/Validation";
import { Reset } from "./Reset/Reset";

export const WizardSection = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <Card
          title="Basic Wizard"
          style={{ flex: "1", minWidth: "400px" }}
          headStyle={{
            backgroundColor: "#f0f2f5",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          <Basic />
        </Card>
        <Card
          title="Reset Wizard"
          style={{ flex: "1", minWidth: "400px" }}
          headStyle={{
            backgroundColor: "#f0f2f5",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          <Reset />
        </Card>
      </div>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <Card
          title="Dynamic Steps"
          style={{ flex: "1", minWidth: "400px" }}
          headStyle={{
            backgroundColor: "#f0f2f5",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          <DynamicSteps />
        </Card>
        <Card
          title="Render Success"
          style={{ flex: "1", minWidth: "400px" }}
          headStyle={{
            backgroundColor: "#f0f2f5",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          <RenderSuccess />
        </Card>
      </div>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <Card
          title="Validation Wizard"
          style={{ flex: "1", minWidth: "400px" }}
          headStyle={{
            backgroundColor: "#f0f2f5",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          <Validation />
        </Card>
      </div>
    </div>
  );
};
