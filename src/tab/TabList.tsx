import { TabList as AriaTabList } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { tab } from "../../styled-system/recipes/tab";

import type { ComponentProps, FC } from "react";
import type { TabListProps as AriaTabListProps } from "react-aria-components";
import type { WithoutClassName } from "../types";

import type { TabVariantProps } from "../../styled-system/recipes";

export type TabListProps = WithoutClassName<AriaTabListProps<ComponentProps<"div">>> & Partial<TabVariantProps>;

/**
 * ARIA compliant TabList component that provides a list of tabs.
 *
 * <TabList>
 *   <Tab id="tab1">Tab 1</Tab>
 *   <Tab id="tab2">Tab 2</Tab>
 *   <Tab id="tab3">Tab 3</Tab>
 * </TabList>
 */
export const TabList: FC<TabListProps> = ({ size, variant, color, align, children, ...props }) => {
  const classes = tab({ size, variant, color, align });

  return (
    <AriaTabList className={cx(classes.list)} {...props}>
      {children}
    </AriaTabList>
  );
};
