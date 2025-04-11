import { Modal as AriaModal, ModalOverlay } from "react-aria-components";

import { modal } from "../../styled-system/recipes";

import type { FC } from "react";
import type { ModalOverlayProps as AriaModalOverlayProps } from "react-aria-components";

import type { ModalVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type ModalProps = WithoutClassName<AriaModalOverlayProps> & Partial<ModalVariantProps>;

/**
 * ARIA compliant modal which includes the overlay that blurs the background yet the modal contents are fully visible.
 */
export const Modal: FC<ModalProps> = ({ children, ...props }) => {
  const classes = modal();

  return (
    <ModalOverlay className={classes.overlay} {...props}>
      <AriaModal className={classes.modal} {...props}>
        {children}
      </AriaModal>
    </ModalOverlay>
  );
};
