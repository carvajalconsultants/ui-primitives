import { Tag as AriaTag, Button } from "react-aria-components";

import { tagGroup } from "../../styled-system/recipes";

import type { TagProps } from "react-aria-components";

/**
 * Single tag that shows a label with a remove button if configured.
 * Commonly used in scenarios like quick selection, add/removing custom items, etc.
 *
 * @param {Object} props - The component properties
 * @param {ReactNode | ((renderProps: TagRenderProps) => ReactNode)} props.children -
 *        The content to display inside the tag. Can be either direct content or a render function
 *        for advanced customization of the tag's appearance
 * @param {boolean} [props.allowsRemoving] - When true, displays a remove button to delete the tag
 * @param {string} [props.className] - Custom CSS classes to apply to the tag
 * @returns {JSX.Element} A styled, interactive tag component
 *
 * @example
 * // Simple usage
 * <Tag>Category</Tag>
 *
 * // Removable tag
 * <Tag allowsRemoving>Removable Label</Tag>
 */
export const Tag = ({ children, ...props }: TagProps) => {
  // Apply the predefined styling variants for consistent tag appearance
  const styles = tagGroup();

  // Extract the text value for accessibility and searching when children is a string
  // This ensures screen readers can properly announce the tag content
  const textValue = typeof children === "string" ? children : undefined;

  return (
    <AriaTag textValue={textValue} {...props} className={styles.tag}>
      {(values) => (
        <>
          {/* Render either the function-based content or direct children */}
          {typeof children === "function" ? children(values) : children}

          {/* Add a remove button (ⓧ) when the tag is configured to be removable */}
          {values.allowsRemoving && <Button slot="remove">ⓧ</Button>}
        </>
      )}
    </AriaTag>
  );
};
