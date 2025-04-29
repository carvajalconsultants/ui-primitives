import { Select as AriaSelect, Button, FieldError, Popover, SelectValue } from "react-aria-components";

import { css } from "../../styled-system/css";
import { input, select } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";
import { Label } from "../common/Label";
import { Text } from "../typography/Text";

import type { SelectProps as AriaSelectProps, PopoverProps } from "react-aria-components";

import type { SelectVariant } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type SelectProps<T extends object> = WithoutClassName<AriaSelectProps<T>, "children"> &
  Partial<SelectVariant> &
  Pick<PopoverProps, "children"> & {
    /**
     * Label of the field shown above the select field.
     */
    label?: string;

    /**
     * Text shown in the select field before it has a value
     */
    placeholder?: string;

    /**
     * Description of the field shown after the select field.
     */
    description?: string;

    /**
     * Specific error message to display when a problem occurred loading data, not a validation error.
     */
    errorMessage?: string;
  };

/**
 * Creates an accessible dropdown menu that allows users to choose one option from a list.
 * Combines a button trigger with an expandable listbox, following ARIA best practices for
 * keyboard navigation and screen reader support.
 *
 * @param {Object} props - The component props
 * @param {string} [props.label] - Text label shown above the select field to identify its purpose
 * @param {string} [props.description] - Helper text shown below the field to provide additional context
 * @param {string} [props.placeholder] - Default text shown when no option is selected
 * @param {React.ReactNode | ((item: T) => React.ReactNode)} props.children - The selectable options to display
 * @param {SelectVariant} props.variants - Style variants for customizing appearance
 * @returns {JSX.Element} A fully styled and accessible select dropdown component
 */
export const Select = <T extends object>({ label, description, placeholder, errorMessage, children, size = "md", ...props }: SelectProps<T>) => {
  const classes = select({ size });
  const classesInput = input();

  return (
    // Wrap everything in an ARIA-compliant select container
    <AriaSelect className={classes.wrapper} placeholder={placeholder} {...props}>
      {({ isOpen }) => (
        <>
          {/* Show the field label if provided */}
          {label && <Label color="primary">{label}</Label>}

          {/* Container for the select button trigger */}
          <div className={css({ display: "flex" })}>
            {/* The button shows current selection and toggles dropdown */}
            <Button data-rotate={isOpen} className={classes.button}>
              {/* Displays either selected value or placeholder */}
              <SelectValue className={classes.value} aria-placeholder={placeholder} />

              {/* Chevron icon rotates when dropdown is open */}
              <Icon id="chevron-down" />
            </Button>
          </div>

          {/* Shows validation errors if any exist */}
          <FieldError className={classesInput.error} />
          {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}

          {/* Optional description text for additional context */}
          {description && <Text slot="description">{description}</Text>}

          {/* Floating dropdown container that appears when triggered */}
          <Popover className={classes.popover}>
            {/* Scrollable list of selectable options */}
            {children}
          </Popover>
        </>
      )}
    </AriaSelect>
  );
};
