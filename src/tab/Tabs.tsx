import { Tabs as AriaTabs } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { tab } from "../../styled-system/recipes/tab";

import type { FC } from "react";
import type { TabsProps as AriaTabsProps } from "react-aria-components";
import type { WithoutClassName } from "src/types";

import type { TabVariantProps } from "../../styled-system/recipes";

export type TabsProps = WithoutClassName<AriaTabsProps> & Partial<TabVariantProps>;

/**
 * ARIA compliant Tabs component that provides a tabbed interface.
 *
 * <Tabs>
 *   <TabList>
 *     <Tab id="tab1">Tab 1</Tab>
 *     <Tab id="tab2">Tab 2</Tab>
 *     <Tab id="tab3">Tab 3</Tab>
 *   </TabList>
 *   <TabPanel id="tab1">Content for Tab 1</TabPanel>
 *   <TabPanel id="tab2">Content for Tab 2</TabPanel>
 *   <TabPanel id="tab3">Content for Tab 3</TabPanel>
 * </Tabs>
 */
export const Tabs: FC<TabsProps> = ({ children, size, variant, color, align, ...props }) => {
  const classes = tab({ size, variant, color, align });

  return (
    <AriaTabs className={cx(classes.root)} {...props}>
      {children}
    </AriaTabs>
  );
};
