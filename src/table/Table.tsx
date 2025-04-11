import { table } from "../../styled-system/recipes";

import type { ComponentProps, RefObject } from "react";

import type { TableVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type TableProps = WithoutClassName<ComponentProps<"table">> &
  Partial<TableVariantProps> & {
    /** Reference to the underlying table element for imperative operations */
    elRef?: RefObject<HTMLTableElement | null>;

    /** Props for the outer container div that handles border styling */
    borderContainerProps?: ComponentProps<"div">;

    /** Props for the scrollable area div that handles overflow behavior */
    scrollContainerProps?: ComponentProps<"div">;
  };

/**
 * A styled table component that provides a consistent, responsive table layout with proper borders
 * and scrolling behavior across all screen sizes.
 *
 * Key features:
 * - Responsive design that handles overflow on mobile devices
 * - Consistent border styling that works across browsers
 * - Proper background colors that match the application theme
 * - Accessible table structure with caption support
 *
 * @param {Object} props - The component props
 * @param {RefObject<HTMLTableElement>} [props.elRef] - Reference to the table element for programmatic access
 * @param {ComponentProps<"div">} [props.containerProps] - Props for the outer container that handles border styling
 * @param {string} [props.className] - Additional CSS classes for custom styling
 * @param {ReactNode} [props.children] - Table content (thead, tbody, etc.)
 * @returns {JSX.Element} A fully styled, responsive table wrapped in container elements for proper layout
 *
 * @example
 * // Example of a responsive table for a user management interface
 * <Table>
 *   <thead>
 *     <tr>
 *       <th>User ID</th>
 *       <th>Name</th>
 *       <th>Role</th>
 *       <th>Status</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     {users.map(user => (
 *       <tr key={user.id}>
 *         <td>{user.id}</td>
 *         <td>{user.name}</td>
 *         <td>{user.role}</td>
 *         <td>{user.status}</td>
 *       </tr>
 *     ))}
 *   </tbody>
 * </Table>
 */
export const Table = ({ borderContainerProps, scrollContainerProps, elRef: nodeRef, ...props }: TableProps) => {
  // Get the pre-defined styles for the table and its containers
  // These styles handle responsive behavior, borders, and theme consistency
  const styles = table();

  return (
    // Outer container that handles border styling and theme consistency
    // This ensures the table looks consistent across different browsers and devices
    <div className={styles.borderContainer} {...borderContainerProps}>
      {/* Scrollable area that handles overflow on smaller screens
          This is crucial for mobile responsiveness and handling large datasets */}
      <div className={styles.scrollContainer} {...scrollContainerProps}>
        {/* The actual table element with all the passed props
            This includes children (thead, tbody) and any additional HTML table attributes */}
        <table ref={nodeRef} className={styles.table} {...props} />
      </div>
    </div>
  );
};
