# CCI UI Primitives

Foundation UI components for CCI applications.

These components form the building blocks for the entire application.

Keep in mind the following rules when working on this project:

- These project should ONLY have the following dependencies:
  - react
  - react-dom
  - react-aria-components
  - @tanstack/react-table
  - @fontsource/inter
- No additional dependencies should be added to this package.
- No animation library should be used, all animations are CSS only
- Localization is not to be included, this is handled by the calling components
- These are stateless components, state is handled by the calling components
- Only add variants/tokens THAT WE USE. No need to add variants we will never use.
- Components should not have outer margins and/or paddings, see: https://kyleshevlin.com/no-outer-margin/
- Components should not have className prop, apart from the ones from react-aria-components
