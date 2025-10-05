import { AsyncButton } from "./AsyncButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AsyncButton> = {
  title: "Components/AsyncButton",
  component: AsyncButton,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      options: ["primary", "secondary", "ghost", "link"],
      control: {
        type: "select",
      },
    },
    width: {
      options: ["fit", "full"],
      control: {
        type: "select",
      },
    },
  },

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AsyncButton>;

const SingleAsyncButton: Story = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))}>
      Click Me
    </AsyncButton>
  ),
};

export const PrimaryFit = {
  ...SingleAsyncButton,
  args: {
    variant: "primary",
    width: "fit",
  },
};

export const PrimaryFitWithLoadingText = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Signing In...">
      Sign In
    </AsyncButton>
  ),
  args: {
    variant: "primary",
    width: "fit",
  },
};

export const PrimaryFitWithFunctionChildren = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))}>
      {({ isPending }) => (
        <>
          {isPending && "⏳ "}
          {isPending ? "Processing..." : "Submit"}
        </>
      )}
    </AsyncButton>
  ),
  args: {
    variant: "primary",
    width: "fit",
  },
};

export const PrimaryFull = {
  ...SingleAsyncButton,
  args: {
    variant: "primary",
    width: "full",
  },
};

export const PrimaryFullWithLoadingText = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Creating Account...">
      Create Account
    </AsyncButton>
  ),
  args: {
    variant: "primary",
    width: "full",
  },
};

export const SecondaryFit = {
  ...SingleAsyncButton,
  args: {
    variant: "secondary",
    width: "fit",
  },
};

export const SecondaryFitWithLoadingText = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Loading...">
      Load Data
    </AsyncButton>
  ),
  args: {
    variant: "secondary",
    width: "fit",
  },
};

export const SecondaryFull = {
  ...SingleAsyncButton,
  args: {
    variant: "secondary",
    width: "full",
  },
};

export const SecondaryFullWithLoadingText = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Saving Changes...">
      Save Changes
    </AsyncButton>
  ),
  args: {
    variant: "secondary",
    width: "full",
  },
};

export const GhostFit = {
  ...SingleAsyncButton,
  args: {
    variant: "ghost",
    width: "fit",
  },
};

export const GhostFitWithLoadingText = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Refreshing...">
      Refresh
    </AsyncButton>
  ),
  args: {
    variant: "ghost",
    width: "fit",
  },
};

export const GhostFull = {
  ...SingleAsyncButton,
  args: {
    variant: "ghost",
    width: "full",
  },
};

export const GhostFullWithLoadingText = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Syncing...">
      Sync Data
    </AsyncButton>
  ),
  args: {
    variant: "ghost",
    width: "full",
  },
};

export const LinkFit = {
  ...SingleAsyncButton,
  args: {
    variant: "link",
    width: "fit",
  },
};

export const LinkFitWithLoadingText = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Loading...">
      View More
    </AsyncButton>
  ),
  args: {
    variant: "link",
    width: "fit",
  },
};

export const LinkFull = {
  ...SingleAsyncButton,
  args: {
    variant: "link",
    width: "full",
  },
};

export const LinkFullWithLoadingText = {
  render: (args: Story["args"]) => (
    <AsyncButton {...args} onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Fetching...">
      Fetch Details
    </AsyncButton>
  ),
  args: {
    variant: "link",
    width: "full",
  },
};

export const AllVariantsComparison = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <AsyncButton variant="primary" width="fit" onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Primary Loading...">
          Primary
        </AsyncButton>
        <AsyncButton variant="secondary" width="fit" onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Secondary Loading...">
          Secondary
        </AsyncButton>
        <AsyncButton variant="ghost" width="fit" onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Ghost Loading...">
          Ghost
        </AsyncButton>
        <AsyncButton variant="link" width="fit" onPress={() => new Promise<void>((resolve) => setTimeout(resolve, 2000))} loadingText="Link Loading...">
          Link
        </AsyncButton>
      </div>
    </div>
  ),
};
