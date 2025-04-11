import { SliderField } from "./SliderField";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SliderField> = {
  title: "Components/SliderField",
  component: SliderField,
  // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SliderField>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SingleSliderField: Story = {
  render: (args) => (
    <div style={{ width: "100%", minWidth: "400px", maxWidth: "850px", marginTop: "30px" }}>
      <SliderField {...args} />
    </div>
  ),
};

export const DefaultSlider = {
  ...SingleSliderField,
  args: {
    label: "Default Slider",
    defaultValue: 50,
    minValue: 0,
    maxValue: 100,
  },
};

export const SliderWithCustomSteps = {
  ...SingleSliderField,
  args: {
    label: "Slider with 5-Step Increment",
    defaultValue: 25,
    minValue: 0,
    maxValue: 100,
    step: 5,
  },
};

export const SliderWithMultipleThumbs = {
  ...SingleSliderField,
  args: {
    label: "Slider with Multiple Thumbs",
    defaultValue: [25, 75],
    minValue: 0,
    maxValue: 100,
    thumbLabels: ["Start", "End"],
  },
};

export const SliderWithCurrencyFormat = {
  ...SingleSliderField,
  args: {
    label: "Price Range",
    defaultValue: [500, 1500],
    minValue: 0,
    maxValue: 2000,
    formatOptions: { style: "currency", currency: "USD" },
  },
};

export const DisabledSlider = {
  ...SingleSliderField,
  args: {
    label: "Disabled Slider",
    defaultValue: 40,
    minValue: 0,
    maxValue: 100,
    isDisabled: true,
  },
};

export const SliderWithUnitFormat = {
  ...SingleSliderField,
  args: {
    label: "Distance",
    defaultValue: 300,
    minValue: 0,
    maxValue: 1000,
    formatOptions: { style: "unit", unit: "kilometer" },
  },
};

export const SliderWithLargeRange = {
  ...SingleSliderField,
  args: {
    label: "Large Range Slider",
    defaultValue: 2500,
    minValue: 0,
    maxValue: 10000,
  },
};

export const SliderWithLongerLabel = {
  ...SingleSliderField,
  args: {
    label: "A long label to see how it overflows with the rest of the component",
    defaultValue: 40,
    minValue: 0,
    maxValue: 100,
  },
};

export const SliderWithMoreLongerLabel = {
  ...SingleSliderField,
  args: {
    label:
      "A long label to see how it overflows with the rest of the component and it has more text in it and it goes and goes and goes and goes and goes and goes and goes and goes and goes and goes and goes and goes.",
    defaultValue: 40,
    minValue: 0,
    maxValue: 100,
  },
};

export const UncontrolledSliderField = {
  ...SingleSliderField,
};

export const SliderDisabled = {
  ...SingleSliderField,
  args: {
    isDisabled: true,
  },
};
