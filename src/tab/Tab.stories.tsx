import { Paragraph } from "../typography/Paragraph";
import { Tab } from "./Tab";
import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { Tabs } from "./Tabs";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    defaultSelectedKey: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="primary" align="start">
      <TabList variant="line" size="md" color="primary" align="start" aria-label="Sample Tabs">
        <Tab variant="line" size="md" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="primary" align="start">
      <TabList variant="line" size="md" color="primary" align="start" aria-label="Tabs with Disabled Tab">
        <Tab variant="line" size="md" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab3" isDisabled>
          Tab 3 (Disabled)
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="primary" align="start">
      <TabList variant="line" size="md" color="primary" align="start" aria-label="Tabs with Custom Content">
        <Tab variant="line" size="md" color="primary" align="start" id="tab1">
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab2">
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab3">
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab1">
        <Paragraph>Custom content for Tab 1</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab2">
        <Paragraph>Custom content for Tab 2</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab3">
        <Paragraph>Custom content for Tab 3</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const VariantLine: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="primary" align="start">
      <TabList variant="line" size="md" color="primary" align="start" aria-label="Line Variant Tabs">
        <Tab variant="line" size="md" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1 with line variant</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2 with line variant</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3 with line variant</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const VariantEnclosed: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="enclosed" size="md" color="primary" align="start">
      <TabList variant="enclosed" size="md" color="primary" align="start" aria-label="Enclosed Variant Tabs">
        <Tab variant="enclosed" size="md" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="enclosed" size="md" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="enclosed" size="md" color="primary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="enclosed" size="md" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1 with enclosed variant</Paragraph>
      </TabPanel>
      <TabPanel variant="enclosed" size="md" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2 with enclosed variant</Paragraph>
      </TabPanel>
      <TabPanel variant="enclosed" size="md" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3 with enclosed variant</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const VariantUnstyled: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="unstyled" size="md" color="primary" align="start">
      <TabList variant="unstyled" size="md" color="primary" align="start" aria-label="Unstyled Variant Tabs">
        <Tab variant="unstyled" size="md" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="unstyled" size="md" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="unstyled" size="md" color="primary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="unstyled" size="md" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1 with unstyled variant</Paragraph>
      </TabPanel>
      <TabPanel variant="unstyled" size="md" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2 with unstyled variant</Paragraph>
      </TabPanel>
      <TabPanel variant="unstyled" size="md" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3 with unstyled variant</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const SizeSmall: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="sm" color="primary" align="start">
      <TabList variant="line" size="sm" color="primary" align="start" aria-label="Small Size Tabs">
        <Tab variant="line" size="sm" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="sm" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="sm" color="primary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="sm" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1 with small size</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="sm" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2 with small size</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="sm" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3 with small size</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const SizeMedium: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="primary" align="start">
      <TabList variant="line" size="md" color="primary" align="start" aria-label="Medium Size Tabs">
        <Tab variant="line" size="md" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1 with medium size</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2 with medium size</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3 with medium size</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const SizeLarge: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="lg" color="primary" align="start">
      <TabList variant="line" size="lg" color="primary" align="start" aria-label="Large Size Tabs">
        <Tab variant="line" size="lg" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="lg" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="lg" color="primary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="lg" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1 with large size</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="lg" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2 with large size</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="lg" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3 with large size</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const ColorPrimary: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="primary" align="start">
      <TabList variant="line" size="md" color="primary" align="start" aria-label="Primary Color Tabs">
        <Tab variant="line" size="md" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1 with primary color</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2 with primary color</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3 with primary color</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const ColorSecondary: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="secondary" align="start">
      <TabList variant="line" size="md" color="secondary" align="start" aria-label="Secondary Color Tabs">
        <Tab variant="line" size="md" color="secondary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="secondary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="secondary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="secondary" align="start" id="tab1">
        <Paragraph>Content for Tab 1 with secondary color</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="secondary" align="start" id="tab2">
        <Paragraph>Content for Tab 2 with secondary color</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="secondary" align="start" id="tab3">
        <Paragraph>Content for Tab 3 with secondary color</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const AlignStart: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="primary" align="start">
      <TabList variant="line" size="md" color="primary" align="start" aria-label="Start Aligned Tabs">
        <Tab variant="line" size="md" color="primary" align="start" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="primary" align="start" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab1">
        <Paragraph>Content for Tab 1 with start alignment</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab2">
        <Paragraph>Content for Tab 2 with start alignment</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="start" id="tab3">
        <Paragraph>Content for Tab 3 with start alignment</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const AlignCenter: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="primary" align="center">
      <TabList variant="line" size="md" color="primary" align="center" aria-label="Center Aligned Tabs">
        <Tab variant="line" size="md" color="primary" align="center" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="primary" align="center" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="primary" align="center" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="primary" align="center" id="tab1">
        <Paragraph>Content for Tab 1 with center alignment</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="center" id="tab2">
        <Paragraph>Content for Tab 2 with center alignment</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="center" id="tab3">
        <Paragraph>Content for Tab 3 with center alignment</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const AlignEnd: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="line" size="md" color="primary" align="end">
      <TabList variant="line" size="md" color="primary" align="end" aria-label="End Aligned Tabs">
        <Tab variant="line" size="md" color="primary" align="end" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="line" size="md" color="primary" align="end" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="line" size="md" color="primary" align="end" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="line" size="md" color="primary" align="end" id="tab1">
        <Paragraph>Content for Tab 1 with end alignment</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="end" id="tab2">
        <Paragraph>Content for Tab 2 with end alignment</Paragraph>
      </TabPanel>
      <TabPanel variant="line" size="md" color="primary" align="end" id="tab3">
        <Paragraph>Content for Tab 3 with end alignment</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const CombinedVariants: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" variant="enclosed" size="lg" color="secondary" align="center">
      <TabList variant="enclosed" size="lg" color="secondary" align="center" aria-label="Combined Variants Tabs">
        <Tab variant="enclosed" size="lg" color="secondary" align="center" id="tab1">
          Tab 1
        </Tab>
        <Tab variant="enclosed" size="lg" color="secondary" align="center" id="tab2">
          Tab 2
        </Tab>
        <Tab variant="enclosed" size="lg" color="secondary" align="center" id="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel variant="enclosed" size="lg" color="secondary" align="center" id="tab1">
        <Paragraph>Content for Tab 1 with combined variants (enclosed, large, secondary, center)</Paragraph>
      </TabPanel>
      <TabPanel variant="enclosed" size="lg" color="secondary" align="center" id="tab2">
        <Paragraph>Content for Tab 2 with combined variants (enclosed, large, secondary, center)</Paragraph>
      </TabPanel>
      <TabPanel variant="enclosed" size="lg" color="secondary" align="center" id="tab3">
        <Paragraph>Content for Tab 3 with combined variants (enclosed, large, secondary, center)</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};
