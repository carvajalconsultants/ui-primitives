import { DatePicker as AriaDatePicker, Button, Calendar, CalendarCell, CalendarGrid, DateInput, DateSegment, Dialog, FieldError, Group, Heading, Popover } from "react-aria-components";

import { datePicker, input } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";
import { Label } from "../common/Label";
import { Text } from "../typography/Text";

import type { DatePickerProps as AriaDatePickerProps, DateValue, ValidationResult } from "react-aria-components";

import type { DatePickerVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

interface DatePickerProps<T extends DateValue> extends WithoutClassName<AriaDatePickerProps<T>, "children">, Partial<DatePickerVariantProps> {
  /**
   * The visible label that helps users identify this date field
   */
  label?: string;

  /**
   * Additional guidance text that appears below the date picker to help users understand how to use it
   */
  description?: string;

  /**
   * Custom error message to display when the date input is invalid.
   * Can be either a string or a function that generates an error message based on validation results
   */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

/**
 * An accessible date picker that helps users select dates through either:
 * - Direct keyboard input with smart date parsing
 * - A calendar popup interface for visual date selection
 *
 * @component
 * @template T - The type of date value being used (e.g., Date, CalendarDate)
 *
 * @param {DatePickerProps<T>} props - The component props
 * @param {string} [props.label] - A descriptive label for the date field
 * @param {string} [props.description] - Helper text to provide additional context
 * @param {string | Function} [props.errorMessage] - Validation feedback when the date is invalid
 *
 * @example
 * ```tsx
 * <DatePicker
 *   label="Appointment Date"
 *   description="Select your preferred consultation date"
 *   errorMessage="Please select a future date"
 * />
 * ```
 *
 * @returns A fully functional date picker with keyboard and mouse input support
 */
export const DatePicker = <T extends DateValue>({ label, description, errorMessage, size, ...props }: DatePickerProps<T>) => {
  const classes = datePicker({ size });
  const inputClasses = input();

  return (
    <AriaDatePicker {...props}>
      {label && <Label>{label}</Label>}
      <Group className={classes.group}>
        <DateInput className={classes.dateInput}>{(segment) => <DateSegment segment={segment} />}</DateInput>
        <Button className={classes.button}>
          <Icon id="calendar" size="4" />
        </Button>
      </Group>

      {description && <Text slot="description">{description}</Text>}
      <FieldError className={inputClasses.error}>{errorMessage}</FieldError>

      <Popover className={classes.popover}>
        <Dialog>
          <Calendar className={classes.calendar}>
            <header className={classes.calendarHeader}>
              {/* Previous month button */}
              <Button slot="previous" className={classes.calendarHeaderBtn}>
                <Icon id="chevron-down" />
              </Button>

              {/* Month and year title */}
              <Heading />

              {/* Next month button */}
              <Button slot="next" className={classes.calendarHeaderBtn}>
                <Icon id="chevron-down" />
              </Button>
            </header>

            <CalendarGrid className={classes.calendarGrid}>{(date) => <CalendarCell date={date} className={classes.calendarCell} />}</CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </AriaDatePicker>
  );
};
