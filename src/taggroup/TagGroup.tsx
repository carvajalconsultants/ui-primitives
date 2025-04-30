import { TagGroup as AriaTagGroup, TagList } from "react-aria-components";

import { tagGroup } from "../../styled-system/recipes";
import { Label } from "../common/Label";
import { Text } from "../typography/Text";

import type { TagGroupProps as AriaTagGroupProps, TagListProps } from "react-aria-components";

import type { TagGroupVariant } from "../../styled-system/recipes";

/**
 * Configuration interface for the TagGroup component, defining its customization options
 *
 * @template T - The type of data object represented by each tag
 *
 * @property {T[]} [items] - Data array that populates the individual tags
 * @property {Function} [children] - Custom renderer for individual tag appearances
 * @property {Function} [renderEmptyState] - Custom content displayed when items array is empty
 */
export interface TagGroupProps<T extends object> extends Omit<AriaTagGroupProps, "children">, Pick<TagListProps<T>, "items" | "children" | "renderEmptyState">, TagGroupVariant {
  /** Human-readable identifier for the group (e.g., "Product Categories") */
  label?: string;

  /** Helper text explaining the tag group's purpose or usage */
  description?: string;

  /** Feedback message when there are validation or selection issues */
  errorMessage?: string;
}

/**
 * A component that manages and displays a collection of related tags with optional labeling and error states.
 * Useful for scenarios like displaying selected filters, categories, or metadata tags.
 *
 * @template T - The type of data object represented by each tag
 *
 * @param {Object} props - Component properties
 * @param {string} [props.label] - A descriptive label for the group of tags (e.g., "Selected Categories")
 * @param {string} [props.description] - Additional context or instructions about the tag group
 * @param {string} [props.errorMessage] - Displays validation or error feedback when tags have issues
 * @param {T[]} [props.items] - Collection of data objects to be rendered as tags
 * @param {Function} [props.children] - Render function that defines how each tag should be displayed
 * @param {Function} [props.renderEmptyState] - Custom content to show when no tags are present
 *
 * @returns A fully accessible tag group component with support for labels, descriptions, and error states
 */
export const TagGroup = <T extends object>({ label, description, errorMessage, items, children, renderEmptyState, ...props }: TagGroupProps<T>) => {
  // Apply styling variants for consistent appearance across the application
  const styles = tagGroup();

  return (
    <AriaTagGroup {...props} className={styles.group}>
      {/* Optional label that helps users understand the purpose of the tag group */}
      {label && (
        <Label color="primary" size="sm">
          {label}
        </Label>
      )}

      {/* Core tag list that handles the rendering and interaction of individual tags */}
      <TagList items={items} renderEmptyState={renderEmptyState} className={styles.tagList}>
        {children}
      </TagList>

      {/* Supplementary information to guide users or provide feedback */}
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaTagGroup>
  );
};
