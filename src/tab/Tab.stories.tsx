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
    <Tabs defaultSelectedKey="tab1">
      <TabList aria-label="Sample Tabs">
        <Tab id="tab1">Tab 1</Tab>
        <Tab id="tab2">Tab 2</Tab>
        <Tab id="tab3">Tab 3</Tab>
      </TabList>
      <TabPanel id="tab1">
        <Paragraph>Content for Tab 1</Paragraph>
      </TabPanel>
      <TabPanel id="tab2">
        <Paragraph>Content for Tab 2</Paragraph>
      </TabPanel>
      <TabPanel id="tab3">
        <Paragraph>Content for Tab 3</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1">
      <TabList aria-label="Tabs with Disabled Tab">
        <Tab id="tab1">Tab 1</Tab>
        <Tab id="tab2">Tab 2</Tab>
        <Tab id="tab3" isDisabled>
          Tab 3 (Disabled)
        </Tab>
      </TabList>
      <TabPanel id="tab1">
        <Paragraph>Content for Tab 1</Paragraph>
      </TabPanel>
      <TabPanel id="tab2">
        <Paragraph>Content for Tab 2</Paragraph>
      </TabPanel>
      <TabPanel id="tab3">
        <Paragraph>Content for Tab 3</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1">
      <TabList aria-label="Tabs with Custom Content">
        <Tab id="tab1">
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
          Tab 1
        </Tab>
        <Tab id="tab2">
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          Tab 2
        </Tab>
        <Tab id="tab3">
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          Tab 3
        </Tab>
      </TabList>
      <TabPanel id="tab1">
        <Paragraph>Custom content for Tab 1</Paragraph>
      </TabPanel>
      <TabPanel id="tab2">
        <Paragraph>Custom content for Tab 2</Paragraph>
      </TabPanel>
      <TabPanel id="tab3">
        <Paragraph>Custom content for Tab 3</Paragraph>
      </TabPanel>
    </Tabs>
  ),
};
