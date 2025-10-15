import { Dialog as AriaDialog } from "react-aria-components";

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
  title: string;

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
          <div className={classes.heading}>
            {/* Heading title */}
            <Heading slot="title">{title}</Heading>

            {/* X close button on top-right */}
            {closeable === true && (
              <Button variant="ghost" size="icon" width="fit" onPress={close}>
                <Icon id="x" size="4" stroke="text.primary" />
              </Button>
            )}
          </div>

          {/* Main dialog content */}
          <div className={classes.content}>{children}</div>

          {/* Action buttons along the bottom-right */}
          {buttons && <div className={classes.buttons}>{buttons}</div>}
        </>
      )}
    </AriaDialog>
  );
};
