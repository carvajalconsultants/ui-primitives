import { Dialog as AriaDialog } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";
import { dialog } from "../../styled-system/recipes";
import { Button } from "../button/Button";
import { Icon } from "../common/Icon";
import { Heading } from "../typography/Heading";

import type { FC, PropsWithChildren, ReactNode } from "react";
import type { DialogProps as AriaDialogProps } from "react-aria-components";

import type { DialogVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export interface DialogProps extends PropsWithChildren<WithoutClassName<AriaDialogProps>>, Partial<DialogVariantProps> {
  /**
   * Title that will be shown along the top of the dialog.
   */
  title?: ReactNode | string;

  /**
   * Hides/shows the X button along the top-right, defaults to true.
   */
  closeable?: boolean;

  /**
   * Actions buttons along the bottom, below the content.
   */
  buttons?: ReactNode;
}

/**
 * ARIA compliant dialog with a title, close button and content.
 */
export const Dialog: FC<DialogProps> = ({ title, closeable = true, children, buttons, variant, ...props }) => {
  const classes = dialog({ variant });

  return (
    <AriaDialog className={classes.dialog} {...props}>
      {({ close }) => (
        <>
          {/* X close button on top-right */}
          {closeable === true && (
            <Box className={cx(classes.closeable)}>
              <Button variant="ghost" size="icon" onPress={close}>
                <Icon id="x" size="4" stroke="text.primary" />
              </Button>
            </Box>
          )}

          {/* If we've got a title, we render a <Heading> with the title, otherwise we render the title as is. */}
          {title && (typeof title === "string" ? <Heading slot="title">{title}</Heading> : <Box slot="title">{title}</Box>)}

          {/* Main dialog content */}
          <Box className={classes.content}>{children}</Box>

          {/* Action buttons along the bottom-right */}
          {buttons && <Box className={classes.buttons}>{buttons}</Box>}
        </>
      )}
    </AriaDialog>
  );
};
