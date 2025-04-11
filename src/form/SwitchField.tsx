import { Switch as AriaSwitch, Label } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { switchh } from "../../styled-system/recipes";
import { Text } from "../typography/Text";

import type { FC, ReactNode } from "react";
import type { SwitchProps as AriaSwitchProps } from "react-aria-components";

import type { SwitchhVariant } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export interface SwitchProps extends WithoutClassName<AriaSwitchProps>, Partial<SwitchhVariant> {
  /**
   * Text to display above the switch
   */
  label?: ReactNode;

  /**
   * String to display below the switch
   */
  description?: string;
}

/**
 * Aria compliant switch field with a label and a description.
 */
export const SwitchField: FC<SwitchProps> = ({ label, description, ...props }) => {
  // For some reason, the `switch` is not working.
  const classes = switchh();

  return (
    <AriaSwitch className={cx(classes.switchField, "peer")} {...props}>
      <div className={classes.container}>
        <Label className={classes.label}>{label}</Label>
        <span className={cx("handler", classes.handler)} />
      </div>

      {description && <Text slot="description">{description}</Text>}
    </AriaSwitch>
  );
};
