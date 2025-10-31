import { Dialog as AriaDialog } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";
import { dialog } from "../../styled-system/recipes";
import { Button } from "../button/Button";
import { Icon } from "../common/Icon";

import type { FC, PropsWithChildren, ReactNode } from "react";
import type { DialogProps as AriaDialogProps } from "react-aria-components";

import type { DialogVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export interface DialogProps extends PropsWithChildren<WithoutClassName<AriaDialogProps>>, Partial<DialogVariantProps> {
  /**
   * Header component with title and optional description.
   */
  header?: ReactNode;

  /**
   * Hides/shows the X button along the top-right, defaults to true.
   */
  closeable?: boolean;

  /**
   * Actions buttons along the bottom, below the content.
   */
  footer?: ReactNode;
}

/**
 * ARIA compliant dialog with a title, close button and content.
 */
export const Dialog: FC<DialogProps> = ({ header, closeable = true, children, footer, variant, ...props }) => {
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

          {/* Render header if provided */}
          {header}

          {/* Main dialog content */}
          <Box className={classes.content}>{children}</Box>

          {/* Action buttons along the bottom */}
          {footer && <Box className={classes.footer}>{footer}</Box>}
        </>
      )}
    </AriaDialog>
  );
};
