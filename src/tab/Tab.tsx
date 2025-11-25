import { Tab as AriaTab } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { tab } from "../../styled-system/recipes/tab";

import type { FC } from "react";
import type { TabProps as AriaTabProps } from "react-aria-components";

import type { TabVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type TabProps = WithoutClassName<AriaTabProps> & Partial<TabVariantProps>;

/**
 * ARIA compliant Tab component that provides a tab.
 *
 * <Tab id="tab1">Tab 1</Tab>
 */
export const Tab: FC<WithoutClassName<TabProps>> = ({ size, variant, color, align, children, ...props }) => {
  const classes = tab({ size, variant, color, align });

  return (
    <AriaTab className={cx(classes.tab)} {...props}>
      {children}
    </AriaTab>
  );
};
