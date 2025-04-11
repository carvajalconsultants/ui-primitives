import { css } from "../../styled-system/css";
import { SwitchField } from "./SwitchField";

import type { ElementType, FC, PropsWithChildren } from "react";

import type { WithoutClassName } from "../types";
import type { SwitchProps } from "./SwitchField";

export interface ToggleSectionFieldProps extends PropsWithChildren<WithoutClassName<SwitchProps>> {
  /**
   * Switch field component to use, which can be a vanilla Switch or the FormSwitch for instance.
   */
  Field?: ElementType;
}

const toggleSectionCss = css({
  display: "none",

  // Show the section when the switch is on
  ".peer:is([data-selected=true], [data-selected]) ~ &": {
    display: "block",

    // and add top margin if it's not empty (children)
    "&:not(:empty)": {
      marginTop: "4",
    },
  },
});

/**
 * ARIA Switch component that shows/hides children based on the state of the switch.
 */
export const ToggleSectionField: FC<ToggleSectionFieldProps> = ({ Field = SwitchField, children, ...props }) => (
  <div>
    <Field {...props} />
    <div className={toggleSectionCss}>{children}</div>
  </div>
);
