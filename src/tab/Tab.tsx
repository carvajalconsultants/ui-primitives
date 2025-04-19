import { Tab as AriaTab } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { tab } from "../../styled-system/recipes/tab";

import type { FC } from "react";
import type { TabProps as AriaTabProps } from "react-aria-components";
import type { WithoutClassName } from "src/types";

/**
 * ARIA compliant Tab component that provides a tab.
 *
 * <Tab id="tab1">Tab 1</Tab>
 */
export const Tab: FC<WithoutClassName<AriaTabProps>> = ({ children, ...props }) => {
  const classes = tab();

  return (
    <AriaTab className={cx(classes.tab)} {...props}>
      {children}
    </AriaTab>
  );
};
