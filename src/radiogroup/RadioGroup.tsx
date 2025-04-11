import { RadioGroup as AriaRadioGroup } from "react-aria-components";

import { radioGroup } from "../../styled-system/recipes";

import type { FC } from "react";
import type { RadioGroupProps as AriaRadioGroupProps } from "react-aria-components";

import type { RadioGroupVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type RadioGroupProps = WithoutClassName<AriaRadioGroupProps> & Partial<RadioGroupVariantProps>;

/**
 * ARIA compliant RadioGroup component that wraps <Radio> components.
 *
 * <RadioGroup>
 *   <Radio value="option1">Option 1</Radio>
 *   <Radio value="option2">Option 2</Radio>
 *   <Radio value="option3">Option 3</Radio>
 * </RadioGroup>
 */
export const RadioGroup: FC<RadioGroupProps> = ({ children, ...props }) => {
  const classes = radioGroup();

  return (
    <AriaRadioGroup className={classes.root} {...props}>
      {children}
    </AriaRadioGroup>
  );
};
