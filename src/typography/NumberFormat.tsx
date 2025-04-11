import { useNumberFormatter } from "react-aria";

import type { NumberFormatOptions } from "@internationalized/number";

/**
 * Formats a number according to Intl.NumberFormat  options.
 * This component is useful for displaying numeric values in a user-friendly format,
 * ensuring that the related symbol (currency, percentage, etc.) and number formatting are appropriate for the user's locale.
 * Use I18nProvider from react-aria to ensure the formatter is localized to the user's locale.
 *
 * @param {Object} props - The properties for the NumberFormat component.
 * @param {number} props.children - The number to be formatted.
 * @param {string} [props.currency="USD"] - We set USD as the default currency as its what we mostly use.
 * @param {NumberFormatOptions} props - Additional formatting options from the NumberFormatOptions interface.
 * @returns {string} The formatted number as a string, suitable for display in a UI.
 */
export const NumberFormat = ({ children, currency = "USD", ...props }: NumberFormatOptions & { currency?: string; children: number }) => {
  const formatter = useNumberFormatter({
    ...props,
    currency,
  });

  return formatter.format(children);
};
