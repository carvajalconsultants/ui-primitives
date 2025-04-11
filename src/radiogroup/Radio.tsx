import { Radio as AriaRadio } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { radioGroup } from "../../styled-system/recipes";

import type { FC } from "react";
import type { RadioProps as AriaRadioProps } from "react-aria-components";

import type { RadioGroupVariantProps } from "../../styled-system/recipes";

/**
 * ARIA compliant Radio component that renders a radio button.
 */
export type RadioProps = AriaRadioProps & Partial<RadioGroupVariantProps>;

export const Radio: FC<RadioProps> = (props) => {
  const classes = radioGroup();

  return (
    <AriaRadio className={cx(classes.radio)} {...props}>
      <div className={cx(classes.control)}>
        <div className={cx(classes.indicator)} />
      </div>

      {props.children}
    </AriaRadio>
  );
};
