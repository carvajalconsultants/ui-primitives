import { useState } from "react";
import { useDateFormatter } from "react-aria";
import { Button as AriaButton, DateRangePicker as AriaDateRangePicker, CalendarCell, CalendarGrid, Dialog, FieldError, Group, Heading, Popover, RangeCalendar } from "react-aria-components";

import { Box, HStack, VStack } from "../../styled-system/jsx";
import { datePicker, input } from "../../styled-system/recipes";
import { Button } from "../button/Button";
import { Icon } from "../common/Icon";
import { Label } from "../common/Label";
import { Text } from "../typography/Text";
import { DEFAULT_PRESET_RANGES, getSelectedRangeText } from "./helpers";

import type { DateRangePickerProps as AriaDateRangePickerProps, DateRange, DateValue, ValidationResult } from "react-aria-components";

import type { DatePickerVariantProps } from "../../styled-system/recipes";
import type { PresetFunction, Presets } from "./helpers";

type DateRangePickerProps<T extends Presets> = Omit<AriaDateRangePickerProps<DateValue>, "onChange" | "value"> &
  Partial<DatePickerVariantProps> & {
    /** Label text for the date range picker */
    label?: string;

    /** Description text that appears below the date range picker */
    description?: string;

    /** Error message or function that returns an error message based on validation */
    errorMessage?: string | ((validation: ValidationResult) => string);

    /** Callback fired when the date range changes and is applied */
    onChange?: (value: DateRange | null | undefined) => void;

    /** The currently selected date range */
    value?: DateRange | null;

    /** Object of preset functions that generate the date ranges */
    presets?: T;

    /** Order in which the preset buttons are displayed on the left hand side*/
    presetsOrder?: (keyof T)[];

    /** Custom labels for the preset ranges */
    presetLabels?: Record<keyof T, string> & { empty: string };
  };

/**
 * React Aria Date range picker component that allows users to select a range of dates.
 */
export const DateRangePicker = <T extends Presets>({
  label,
  description,
  errorMessage,
  onChange,
  value,
  presets = DEFAULT_PRESET_RANGES as T,
  presetsOrder = ["today", "yesterday", "lastSevenDays", "lastThirtyDays", "lastMonth", "allTime"],
  presetLabels = {
    today: "Today",
    yesterday: "Yesterday",
    lastSevenDays: "Last 7 days",
    lastThirtyDays: "Last 30 days",
    lastMonth: "Last month",
    allTime: "All time",
    empty: "Select date range",
  } as Record<keyof T, string> & { empty: string },
  size = "normal",
  ...props
}: DateRangePickerProps<T>) => {
  const classes = datePicker({ size });
  const inputClasses = input();

  // Controls the visibility of the date picker popover
  const [open, setOpen] = useState(false);

  // Dates selected in the calendar prior to the user applying the changes.
  const [draftSelection, setDraftSelection] = useState<DateRange | null | undefined>(value);

  // Formatter for when the date range is selected
  const formatter = useDateFormatter({
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Handler for the Apply button on the bottom
  const applyPress = () => {
    // Have calling component apply the changes
    onChange?.(draftSelection);

    // Close the calendar after applying the changes
    setOpen(false);
  };

  // Handler for the Clear button on the bottom
  const clearPress = () => {
    // Clear the selection on the calendars
    setDraftSelection(null);

    // Have calling component clear the selection
    onChange?.(null);

    // Close the calendar after clearing the selection
    setOpen(false);
  };

  // Handler for the preset buttons on the left, such as "Today", "Yesterday", "Last 7 days", etc.
  const presetPress = (presetFn: PresetFunction) => {
    // Have calling component apply the changes
    onChange?.(presetFn());

    // Close the calendar after applying the changes
    setOpen(false);
  };

  return (
    <AriaDateRangePicker
      isOpen={open}
      {...props}
      // Use draftSelection when open, otherwise use the value prop
      value={open ? draftSelection : value}
      onChange={setDraftSelection}>
      {label && <Label>{label}</Label>}

      <Group onClick={() => setOpen(true)} className={classes.group}>
        <Icon id="calendar" size="4" fill="transparent" stroke="body.bg" />

        <span className={classes.dateInput}>{getSelectedRangeText(formatter, presets, presetLabels, value)}</span>
        <AriaButton className={classes.button}>
          <Icon id="chevron-down" />
        </AriaButton>
      </Group>

      {description && <Text slot="description">{description}</Text>}
      <FieldError className={inputClasses.error}>{errorMessage}</FieldError>

      <Popover className={classes.popover}>
        <Dialog>
          <Box display="flex">
            {/* Preset range options sidebar */}
            <VStack gap="2" padding="3" borderRight="1" borderStyle="solid" borderColor="border.secondary._alt">
              {presetsOrder.map((presetKey) => (
                <Button key={String(presetKey)} variant="secondary" width="fit" size="sm" onPress={() => presetPress(presets[presetKey])}>
                  {presetLabels[presetKey]}
                </Button>
              ))}
            </VStack>

            <Box>
              {/* Calendar for custom date selection */}
              <RangeCalendar className={classes.calendar} visibleDuration={{ months: 2 }}>
                <header className={classes.calendarHeader}>
                  <AriaButton slot="previous" className={classes.calendarHeaderBtn}>
                    <Icon id="chevron-down" />
                  </AriaButton>
                  <Heading />
                  <AriaButton slot="next" className={classes.calendarHeaderBtn}>
                    <Icon id="chevron-down" />
                  </AriaButton>
                </header>

                {/* Display two months side by side */}
                <Box display="flex" gap="8" overflow="auto" width="full">
                  <CalendarGrid className={classes.calendarGrid}>{(date) => <CalendarCell date={date} className={classes.calendarCell} />}</CalendarGrid>
                  <CalendarGrid className={classes.calendarGrid} offset={{ months: 1 }}>
                    {(date) => <CalendarCell date={date} className={classes.calendarCell} />}
                  </CalendarGrid>
                </Box>
              </RangeCalendar>

              {/* Action buttons */}
              <HStack justify="end" gap="2" paddingTop="0" padding="3">
                <Button variant="ghost" width="fit" size="sm" onPress={clearPress}>
                  Clear
                </Button>
                <Button variant="primary" width="fit" size="sm" onPress={applyPress}>
                  Apply
                </Button>
              </HStack>
            </Box>
          </Box>
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  );
};
