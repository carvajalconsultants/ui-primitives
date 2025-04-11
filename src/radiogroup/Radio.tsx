import { Radio as AriaRadio } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { radioGroup } from "../../styled-system/recipes";

import type { FC } from "react";
import type { RadioProps as AriaRadioProps } from "react-aria-components";

import type { RadioGroupVariantProps } from "../../styled-system/recipes";

/**
 * ARIA compliant Radio component that renders a radio button.
 */
// export type RadioProps = Omit<AriaRadioProps, "children"> &
export type RadioProps = AriaRadioProps & Partial<RadioGroupVariantProps>;

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
