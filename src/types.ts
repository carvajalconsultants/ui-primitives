/**
 * Removes the 'className' prop from a type T, and optionally removes additional props.
 *
 * @template T - The original type to modify.
 * @template K - Additional props to remove (optional). Defaults to 'never'.
 *
 * @example
 * Removes only 'className'
 * type ButtonPropsWithoutClassName = WithoutClassName<ButtonProps>;
 *
 * @example
 * Removes 'className', 'children', and 'size'
 * type CustomButtonProps = WithoutClassName<ButtonProps, 'children' | 'size'>;
 */
export type WithoutClassName<T, K extends keyof T = never> = Omit<T, "className" | K>;
