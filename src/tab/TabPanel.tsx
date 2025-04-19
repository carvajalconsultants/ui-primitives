import { TabPanel as AriaTabPanel } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { tab } from "../../styled-system/recipes/tab";

import type { FC } from "react";
import type { TabPanelProps as AriaTabPanelProps } from "react-aria-components";
import type { WithoutClassName } from "src/types";

/**
 * ARIA compliant TabPanel component that provides a panel.
 *
 * <TabPanel id="tab1">Content for Tab 1</TabPanel>
 */
export const TabPanel: FC<WithoutClassName<AriaTabPanelProps>> = ({ children, ...props }) => {
  const classes = tab();

  return (
    <AriaTabPanel className={cx(classes.panel)} {...props}>
      {children}
    </AriaTabPanel>
  );
};
