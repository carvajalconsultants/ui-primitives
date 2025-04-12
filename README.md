# CCI UI Primitives

Foundation UI components for CCI applications.

These components form the building blocks for the entire application.

## Getting Started

Install the package using your preferred package manager:

```bash
# yarn
yarn add @carvajalconsultants/cci-ui-primitives
```

## Panda CSS Setup

1. Install Panda CSS:

```bash
yarn add -D "@pandacss/dev": "^0.52.0"
```

2. Add prepare script to `package.json`:

```json
{
  "scripts": {
    "prepare": "panda codegen"
  }
}
```

3. Create `panda.config.ts` in root directory:

```typescript
import { cciPreset } from "@carvajalconsultants/cci-ui-primitives/src/cci-preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: [cciPreset],
  include: ["app/**/*.{js,jsx,ts,tsx}"],
  preflight: true,
  jsxFramework: "react",
  strictTokens: true,
  strictPropertyValues: true,
  exclude: [],
});
```

### Extending and Modifying Variants

You can extend the existing variants or create new ones by adding a `theme.extend` configuration to your `panda.config.ts`. Here are examples of both approaches:

To create a new variant:

```typescript
export default defineConfig({
  presets: [cciPreset],
  include: ["app/**/*.{js,jsx,ts,tsx}"],
  preflight: true,
  jsxFramework: "react",
  strictTokens: true,
  strictPropertyValues: true,
  exclude: [],
  theme: {
    extend: {
      recipes: {
        button: {
          variants: {
            variant: {
              red: {
                backgroundColor: "red",
                color: "white",
              },
            },
          },
        },
      },
    },
  },
});
```

To modify an existing variant:

```typescript
export default defineConfig({
  presets: [cciPreset],
  include: ["app/**/*.{js,jsx,ts,tsx}"],
  preflight: true,
  jsxFramework: "react",
  strictTokens: true,
  strictPropertyValues: true,
  exclude: [],
  theme: {
    extend: {
      recipes: {
        button: {
          variants: {
            variant: {
              primary: {
                backgroundColor: "red",
                color: "white",
              },
            },
          },
        },
      },
    },
  },
});
```

After configuring the variants, you can use them in your components:

```tsx
import { Button } from "@carvajalconsultants/cci-ui-primitives";

// Using the new red variant
<Button variant="red">Delete</Button>

// Using the modified primary variant
<Button variant="primary">Submit</Button>
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

Here's a more complex example using multiple components:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Form } from "react-aria-components";

import { Avatar, Button, Heading, Paragraph, TextField } from "@carvajalconsultants/cci-ui-primitives";

import { css } from "~/styled-system/css";
import { Box, Stack } from "~/styled-system/jsx";

import type { FormEvent } from "react";

const RouteComponent = () => {
  const navigate = Route.useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const doLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      console.log("formData :", formData);

      await navigate({ to: "/prescriptions-match" });
    } catch (error) {
      console.error("Login failed:", error);
      // You could add error handling here, like showing an error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="dvh" width="full" padding="4">
      <Box background="white" borderRadius="lg" padding="8" maxWidth="100" width="full" boxShadow="popover">
        <Stack direction="column" gap="6">
          <Box textAlign="center" marginBottom="4">
            <Avatar width={120} height={120} size="smaller" className={css({ marginX: "auto" })} src="/images/logo-icon.png?url" alt="Logo" />
            <Heading level={1} size="xl">
              Welcome Back
            </Heading>
            <Paragraph size="md" color="secondary">
              Please sign in to your account
            </Paragraph>
          </Box>

          <Form
            onSubmit={(e) => void doLogin(e)}
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "5",
              width: "full",
            })}>
            <TextField label="Email" name="email" placeholder="Enter your email" autoComplete="email" isDisabled={isLoading} />
            <TextField label="Password" type="password" name="password" placeholder="Enter your password" autoComplete="current-password" isDisabled={isLoading} />

            <Button type="submit" variant="primary" width="full" isDisabled={isLoading}>
              {isLoading ? (
                <Box display="flex" alignItems="center" justifyContent="center" gap="2">
                  <Box
                    width="4"
                    height="4"
                    className={css({
                      animation: "spin",
                      animationDuration: "fast",
                      borderRadius: "full",
                      border: "2",
                      borderStyle: "solid",
                      borderColor: "white",
                      borderTopColor: "transparent",
                    })}
                  />
                  Signing In...
                </Box>
              ) : (
                "Sign In"
              )}
            </Button>
          </Form>

          <Box textAlign="center">
            <Paragraph size="sm" color="secondary">
              Don&apos;t have an account? Contact your administrator
            </Paragraph>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});
```

## Project Rules

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
