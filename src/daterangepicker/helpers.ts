import { getLocalTimeZone, today } from "@internationalized/date";

import type { DateFormatter } from "@internationalized/date";
import type { DateRange } from "react-aria-components";

/**
 * Defines a preset range generation function that returns a start and end date.
 */
export type PresetFunction = () => DateRange;

/**
 * A collection of named preset date ranges that users can quickly select from.
 * Each key is the name of the preset, and the value is a function that generates that date range.
 */
export type Presets = Record<string, PresetFunction>;

// User's browser timezone
const localTimezone = getLocalTimeZone();

/**
 * Common preset date ranges that users frequently need when filtering data or generating reports
 */
export const DEFAULT_PRESET_RANGES: Presets = {
  /**
   * Returns today's date as both start and end date
   * Useful for viewing data from just today, like today's sales or appointments
   */
  today: () => ({
    start: today(localTimezone),
    end: today(localTimezone),
  }),

  /**
   * Returns yesterday's date as both start and end date
   * Helpful for comparing previous day metrics or reviewing yesterday's activities
   */
  yesterday: () => {
    const yesterday = today(localTimezone).subtract({ days: 1 });
    return { start: yesterday, end: yesterday };
  },

  /**
   * Returns a 7-day range ending today
   * Perfect for weekly reports or viewing week-over-week trends
   */
  lastSevenDays: () => ({
    start: today(localTimezone).subtract({ days: 6 }),
    end: today(localTimezone),
  }),

  /**
   * Returns a 30-day range ending today
   * Ideal for monthly performance analysis or rolling 30-day metrics
   */
  lastThirtyDays: () => ({
    start: today(localTimezone).subtract({ days: 29 }),
    end: today(localTimezone),
  }),

  /**
   * Returns the previous calendar month
   * Useful for monthly reports or comparing month-over-month data
   */
  lastMonth: () => {
    const start = today(localTimezone).subtract({ months: 1 });

    return {
      start: start.set({ day: 1 }),
      end: start.set({ day: start.calendar.getDaysInMonth(start) }),
    };
  },

  /**
   * Returns a date range spanning from 100 years ago to the maximum possible future date
   * This preset is useful when you want to:
   * - View absolutely all historical data without any date restrictions
   * - Include future-dated records that may be scheduled or planned
   * - Ensure no data is filtered out by date constraints
   */
  allTime: () => ({
    start: today(localTimezone).subtract({ years: 100 }),
    end: today(localTimezone).set({ day: 31, month: 12, year: 9999 }),
  }),
};

/**
 * Converts a selected date range into human-readable text, either using a preset label or formatting as a custom range.
 *
 * @param formatter - Date formatter to convert custom ranges into readable text
 * @param presets - Available preset date ranges to check against
 * @param presetLabels - Human-readable labels for each preset, plus an 'empty' state label
 * @param range - The currently selected date range to convert to text
 * @returns A user-friendly string describing the selected date range. Could return "Last 7 days" for a preset, or "Jan 1-Jan 15, 2024" for a custom range.
 */
export const getSelectedRangeText = (formatter: DateFormatter, presets: Presets, presetLabels: Record<keyof typeof presets, string> & { empty: string }, range: DateRange | null | undefined) => {
  // Return the empty state label if no range is selected
  if (!range) return presetLabels.empty;

  // Check if the selected range matches any preset ranges
  // This helps maintain consistent labeling and provides familiar terms to users
  for (const [key, getValue] of Object.entries(presets)) {
    const presetRange = getValue();

    // Compare both start and end dates to identify exact preset matches
    if (presetRange.start.compare(range.start) === 0 && presetRange.end.compare(range.end) === 0) {
      return presetLabels[key];
    }
  }

  // If the range doesn't match any presets, format it as a custom date range
  // This handles any user-selected custom date ranges with clear start and end dates
  return formatter.formatRange(range.start.toDate(localTimezone), range.end.toDate(localTimezone));
};
