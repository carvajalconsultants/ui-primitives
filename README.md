# CCI UI Primitives

Foundation UI components for CCI applications.

These components form the building blocks for the entire application.

## Getting Started

Install the package using your preferred package manager:

```bash
# npm
npm install @carvajalconsultants/cci-ui-primitives

# yarn
yarn add @carvajalconsultants/cci-ui-primitives

# pnpm
pnpm add @carvajalconsultants/cci-ui-primitives

# bun
bun add @carvajalconsultants/cci-ui-primitives
```

Then you can use the components in your application:

```tsx
import { Heading } from "@carvajalconsultants/cci-ui-primitives";

import { Stack } from "~/styled-system/jsx";

export const OnlyMobile = () => (
  <Stack alignItems="center" justifyContent="center" height="full" textWrap="balance" textAlign="center">
    <Heading level={1} size="xl">
      Please view on a larger screen
    </Heading>
  </Stack>
);
```

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
