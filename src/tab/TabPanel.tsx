import { TabPanel as AriaTabPanel } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { tab } from "../../styled-system/recipes/tab";

import type { FC } from "react";
import type { TabPanelProps as AriaTabPanelProps } from "react-aria-components";
import type { WithoutClassName } from "src/types";

import type { TabVariantProps } from "../../styled-system/recipes";

export type TabPanelProps = WithoutClassName<AriaTabPanelProps> & Partial<TabVariantProps>;

/**
 * ARIA compliant TabPanel component that provides a panel.
 *
 * <TabPanel id="tab1">Content for Tab 1</TabPanel>
 */
export const TabPanel: FC<TabPanelProps> = ({ size, variant, color, align, children, ...props }) => {
  const classes = tab({ size, variant, color, align });

  return (
    <AriaTabPanel className={cx(classes.panel)} {...props}>
      {children}
    </AriaTabPanel>
  );
};
