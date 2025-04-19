import { Tab as AriaTab, TabList as AriaTabList, TabPanel as AriaTabPanel, Tabs as AriaTabs } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { tab } from "../../styled-system/recipes/tab";

import type { ComponentProps, FC } from "react";
import type { TabListProps as AriaTabListProps, TabPanelProps as AriaTabPanelProps, TabProps as AriaTabProps, TabsProps as AriaTabsProps } from "react-aria-components";
import type { WithoutClassName } from "src/types";

import type { TabVariant } from "../../styled-system/recipes";

export type TabsProps = WithoutClassName<AriaTabsProps> & Partial<TabVariant>;

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

/**
 * ARIA compliant TabList component that provides a list of tabs.
 *
 * <TabList>
 *   <Tab id="tab1">Tab 1</Tab>
 *   <Tab id="tab2">Tab 2</Tab>
 *   <Tab id="tab3">Tab 3</Tab>
 * </TabList>
 */
export const TabList: FC<WithoutClassName<AriaTabListProps<ComponentProps<"div">>>> = ({ children, ...props }) => {
  const classes = tab();

  return (
    <AriaTabList className={cx(classes.list)} {...props}>
      {children}
    </AriaTabList>
  );
};

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
