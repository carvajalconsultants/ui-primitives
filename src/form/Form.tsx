import { Form as AriaForm } from "react-aria-components";

import { useFormContext } from "./context";

import type { ValidationErrors } from "@react-types/shared";
import type { StandardSchemaV1Issue } from "@tanstack/react-form";
import type { FormEvent } from "react";
import type { FormProps } from "react-aria-components";

/**
 * Converts TanStack React Form error objects into the format expected
 * by React Aria (`ValidationErrors`).
 *
 * Real-world purpose:
 * - React Aria requires a very specific `Record<string, string[]>` structure
 *   for errors so it can associate them with accessible form elements.
 * - TanStack Form, on the other hand, groups issues by field but wraps them
 *   in schema-based validation arrays.
 *
 * This utility acts as a “translator” between the two systems so our form
 * ecosystem remains fully accessible while still benefiting from TanStack’s
 * deeply typed validation layer.
 *
 * @param errors — Array of error bag objects coming from TanStack Form state
 * @returns ValidationErrors — The normalized error object for React Aria
 */
const ariaErrors = (errors: unknown[]): ValidationErrors => {
  const validationErrors: ValidationErrors = {};

  errors.forEach((error) => {
    if (!error) return;

    for (const [key, value] of Object.entries(error)) {
      /**
       * Real-world description:
       * - `value` is an array of validation issues (StandardSchemaV1Issue[]).
       * - Each issue contains a `message` describing what went wrong.
       * - We map the list of issues to a string[] for React Aria.
       *
       * We use loose typing here intentionally because TanStack Form exposes
       * validation issues in a generic but dynamic structure.
       */
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      validationErrors[key] = value.map((issue: StandardSchemaV1Issue) => issue.message);
    }
  });

  return validationErrors;
};

/**
 * A unified `<Form>` component that bridges:
 *  - TanStack React Form (business logic, validation, submission)
 *  - React Aria (accessibility, form semantics, focus management)
 *
 * Real-world problem this solves:
 * - TanStack Form gives us typed validation, schema integration, and reactive form state.
 * - React Aria provides accessible form primitives (ARIA roles, announcements, etc.).
 * - These two libraries are not natively compatible in how they handle errors and submission.
 *
 * This wrapper harmonizes both systems so our forms:
 *  - Stay fully accessible (React Aria)
 *  - Stay fully typed and validation-first (TanStack Form)
 *  - Have a clean API for our internal form components
 *
 * @param props — All React Aria `<Form>` props except `onSubmit` and `validationErrors`
 *                since we override both to integrate with TanStack Form.
 *
 * @returns JSX.Element — A React Aria `<Form>` synchronized with TanStack Form state.
 */
export const Form = (props: Omit<FormProps, "onSubmit" | "validationErrors">) => {
  const form = useFormContext();

  /**
   * Handles form submission using TanStack's internal submission logic.
   *
   * Real-world behavior:
   * - Prevents default browser submission behavior.
   * - Calls TanStack Form's `handleSubmit`, which:
   *   ✓ Runs schema validation
   *   ✓ Updates form state
   *   ✓ Executes user-defined submit handlers
   * - Wrapping in `void` suppresses the promise return for event handlers.
   */
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void form.handleSubmit();
  };

  return (
    /**
     * `form.Subscribe` lets us track TanStack Form's error state reactively.
     * Whenever validation errors change, React Aria re-renders with the updated
     * error map — ensuring instant accessibility feedback.
     *
     * The selector `(state) => state.errors` extracts only the error object
     * to minimize rerenders and improve performance.
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    <form.Subscribe selector={(state) => state.errors}>
      {(errors) => (
        <AriaForm
          {...props}
          /**
           * The unified submit handler that ensures TanStack Form drives the
           * submission pipeline.
           */
          onSubmit={submitHandler}
          /**
           * React Aria uses this prop to associate error messages with fields.
           * We convert TanStack Form’s validation structure into this format.
           */
          validationErrors={ariaErrors(errors)}
        />
      )}
    </form.Subscribe>
  );
};
