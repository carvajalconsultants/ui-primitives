import { Radio as AriaRadio } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { radioGroup } from "../../styled-system/recipes";

import type { FC } from "react";
import type { RadioProps as AriaRadioProps } from "react-aria-components";
import type { WithoutClassName } from "src/types";

import type { RadioGroupVariantProps } from "../../styled-system/recipes";

/**
 * ARIA compliant Radio component that renders a radio button.
 */
export type RadioProps = WithoutClassName<AriaRadioProps> & Partial<RadioGroupVariantProps>;

export const Radio: FC<RadioProps> = ({ children, ...props }) => {
  const classes = radioGroup();

  return (
    <AriaRadio className={cx(classes.radio)} {...props}>
      {(props) => (
        <>
          <div className={cx(classes.control)}>
            <div className={cx(classes.indicator)} />
          </div>

          {typeof children === "function" ? children(props) : children}
        </>
      )}
    </AriaRadio>
  );
};
