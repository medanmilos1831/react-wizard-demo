import { Typography, Divider } from "antd";
import { WizardSection } from "./components/WizardSection";

const { Title, Paragraph } = Typography;

export const HomePage = () => {
  return (
    <div
      className="homepage-container"
      style={{ padding: "20px 15px", margin: "0 2rem" }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={1}>React Wizard Demo</Title>
        <Paragraph
          style={{
            fontSize: "16px",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Discover the power of our custom React Wizard library with interactive
          step-by-step forms and workflows. Each example showcases different
          wizard patterns and advanced navigation features.
        </Paragraph>
      </div>

      <Divider />

      <WizardSection />
    </div>
  );
};
