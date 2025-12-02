import { useState } from "react";

import { Button } from "../button/Button";
import { OTPTextField } from "./OTPTextField";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof OTPTextField> = {
  title: "Components/OTPTextField",
  component: OTPTextField,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OTPTextField>;

const ControlledOTPTextField = () => {
  const [value, setValue] = useState("");

  return (
    <OTPTextField
      name="otpCode"
      value={value}
      onChange={(newValue) => {
        const limitedValue = newValue.slice(0, 6).replace(/\D/g, "");
        setValue(limitedValue);
      }}
      pattern="^\\d+$"
    />
  );
};

const DefaultStory: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <ControlledOTPTextField />
    </div>
  ),
};

export const Default = {
  ...DefaultStory,
};

const PartialValueComponent = () => {
  const [value, setValue] = useState("123");

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <OTPTextField
        name="otpCode"
        value={value}
        onChange={(newValue) => {
          const limitedValue = newValue.slice(0, 6).replace(/\D/g, "");
          setValue(limitedValue);
        }}
        pattern="^\\d+$"
      />
    </div>
  );
};

const PartialValueStory: Story = {
  render: () => <PartialValueComponent />,
};

export const PartialValue = {
  ...PartialValueStory,
};

const CompleteValueComponent = () => {
  const [value, setValue] = useState("123456");

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <OTPTextField
        name="otpCode"
        value={value}
        onChange={(newValue) => {
          const limitedValue = newValue.slice(0, 6).replace(/\D/g, "");
          setValue(limitedValue);
        }}
        pattern="^\\d+$"
      />
    </div>
  );
};

const CompleteValueStory: Story = {
  render: () => <CompleteValueComponent />,
};

export const CompleteValue = {
  ...CompleteValueStory,
};

const DisabledComponent = () => {
  const [value, setValue] = useState("123456");

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <OTPTextField
        name="otpCode"
        value={value}
        onChange={(newValue) => {
          const limitedValue = newValue.slice(0, 6).replace(/\D/g, "");
          setValue(limitedValue);
        }}
        pattern="^\\d+$"
        isDisabled
      />
    </div>
  );
};

const DisabledStory: Story = {
  render: () => <DisabledComponent />,
};

export const Disabled = {
  ...DisabledStory,
};

const FormIntegrationComponent = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`OTP Code: ${value}`);
        }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <OTPTextField
            name="otpCode"
            value={value}
            onChange={(newValue) => {
              const limitedValue = newValue.slice(0, 6).replace(/\D/g, "");
              setValue(limitedValue);
            }}
            pattern="^\\d+$"
          />
          <Button type="submit" width="full" variant="secondary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

const FormIntegrationStory: Story = {
  render: () => <FormIntegrationComponent />,
};

export const FormIntegration = {
  ...FormIntegrationStory,
};
