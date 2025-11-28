import { useState } from "react";

import { HStack, Stack } from "../../styled-system/jsx";
import { Icon } from "../common/Icon";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import { Accordion } from "./Accordion";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionItem } from "./AccordionItem";
import { AccordionPanel } from "./AccordionPanel";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Key } from "react-aria-components";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    defaultExpandedKeys: {
      control: "object",
    },
    allowsMultipleExpanded: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem id="item1">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Personal Information
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Personal information form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="item2">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Billing Address
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Billing address form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="item3">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Payment Method
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Payment method form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDefaultExpanded: Story = {
  render: () => (
    <Accordion defaultExpandedKeys={["item1"]}>
      <AccordionItem id="item1">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Personal Information
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>This section is expanded by default.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="item2">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Billing Address
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Billing address form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleExpanded: Story = {
  render: () => (
    <Accordion allowsMultipleExpanded defaultExpandedKeys={["item1", "item2"]}>
      <AccordionItem id="item1">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Personal Information
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Personal information form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="item2">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Billing Address
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Billing address form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="item3">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Payment Method
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Payment method form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const ControlledExpansion: Story = {
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(new Set(["item1"]));

    return (
      <>
        <Accordion expandedKeys={expandedKeys} onExpandedChange={setExpandedKeys}>
          <AccordionItem id="item1">
            <AccordionHeader>
              <Heading level={3} size="sm" weight="medium">
                Personal Information
              </Heading>
            </AccordionHeader>
            <AccordionPanel>
              <Paragraph>Personal information form here.</Paragraph>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem id="item2">
            <AccordionHeader>
              <Heading level={3} size="sm" weight="medium">
                Billing Address
              </Heading>
            </AccordionHeader>
            <AccordionPanel>
              <Paragraph>Billing address form here.</Paragraph>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Paragraph>Expanded: {Array.from(expandedKeys).join(", ")}</Paragraph>
      </>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Accordion isDisabled>
      <AccordionItem id="item1">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Personal Information
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Personal information form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="item2">
        <AccordionHeader>
          <Heading level={3} size="sm" weight="medium">
            Billing Address
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Billing address form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const CourseContentListExample: Story = {
  render: () => {
    const sections = [
      {
        id: "personal",
        title: "Personal Information",
        chapterCount: 3,
        chapters: [
          { id: "ch1", title: "Chapter 1: Introduction", iconId: "calendar" as const },
          { id: "ch2", title: "Chapter 2: Basics", iconId: "search" as const },
          { id: "ch3", title: "Chapter 3: Advanced", iconId: "x" as const },
        ],
      },
      {
        id: "billing",
        title: "Billing Address",
        chapterCount: 2,
        chapters: [
          { id: "ch4", title: "Chapter 4: Payment", iconId: "calendar" as const },
          { id: "ch5", title: "Chapter 5: Confirmation", iconId: "search" as const },
        ],
      },
    ];

    return (
      <Stack gap="4">
        <Heading size="lg" weight="bold">
          Course Content
        </Heading>
        <Accordion defaultExpandedKeys={["personal"]}>
          {sections.map((section) => (
            <AccordionItem key={section.id} id={section.id}>
              <AccordionHeader>
                <HStack gap="3">
                  <Heading level={3} size="sm" weight="medium">
                    {section.title}
                  </Heading>

                  <span style={{ fontSize: "0.875rem", color: "var(--colors-text-secondary)" }}>{section.chapterCount} chapters</span>
                </HStack>
              </AccordionHeader>
              <AccordionPanel>
                <Stack gap="5">
                  {section.chapters.map((chapter) => (
                    <HStack key={chapter.id} gap="3" alignItems="center">
                      <Icon id={chapter.iconId} size="4" />
                      <Paragraph size="sm" color="secondary">
                        {chapter.title}
                      </Paragraph>
                    </HStack>
                  ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    );
  },
};

export const CustomHeaderContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem id="item1">
        <AccordionHeader>
          {({ isExpanded }) => (
            <>
              <Heading level={3} size="sm" weight="medium">
                {isExpanded ? "Expanded Section" : "Collapsed Section"}
              </Heading>
              <span style={{ fontSize: "0.875rem", color: "var(--colors-text-secondary)" }}>Custom content</span>
            </>
          )}
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>Content with custom header that changes based on expanded state.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="item2">
        <AccordionHeader renderIcon={() => null}>
          <Heading level={3} size="sm" weight="medium">
            No Icon Header
          </Heading>
        </AccordionHeader>
        <AccordionPanel>
          <Paragraph>This header doesn&apos;t show the chevron icon.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const QuietVariant: Story = {
  render: () => (
    <Accordion variant="quiet">
      <AccordionItem id="item1" variant="quiet">
        <AccordionHeader variant="quiet">
          <Heading level={3} size="sm" weight="medium">
            Personal Information
          </Heading>
        </AccordionHeader>
        <AccordionPanel variant="quiet">
          <Paragraph>Personal information form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="item2" variant="quiet">
        <AccordionHeader variant="quiet">
          <Heading level={3} size="sm" weight="medium">
            Billing Address
          </Heading>
        </AccordionHeader>
        <AccordionPanel variant="quiet">
          <Paragraph>Billing address form here.</Paragraph>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};
