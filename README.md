# @argo22/mobile-ui-kit

UI Kit for expo based mobile apps. Based on [react-native-unistyles](https://reactnativeunistyles.vercel.app/) and [React Native Primitives
](https://rnprimitives.com/).

> This library follows expo ecosystem requirements. Make sure you have expo ready for development before installing this package.

If you don't have expo development ready - follow [installation steps](./docs/expo-installation.docs.md)

# Installation
1. Install the library with you favourite package manager

```shell
# with expo install
npx expo install @argo22/mobile-ui-kit
# with yarn
yarn add @argo22/mobile-ui-kit
# with npm
npm install @argo22/mobile-ui-kit
```

2. Install peer dependencies

```shell
yarn add react-native-reanimated react-native-safe-area-context react-native-svg react-native-unistyles
```

# Setup

1. Create or extend theme - see [Theming](#theming)
2. In root of your project define your themes types for Typescript to work correctly

```typescript
// if you defined themes
type AppThemes = {
  light: typeof lightTheme,
  dark: typeof darkTheme
}

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
```
3. In root register your themes - details in official [Unistyles setup](https://reactnativeunistyles.vercel.app/start/setup/#34-call-unistylesregistry)
```typescript
import { UnistylesRegistry } from 'react-native-unistyles'

UnistylesRegistry
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: true
  })
```
4. Add `<PortalHost />` to the root of component tree. It will be used for all overlay components

```typescript jsx
export default function App() {
  return (
    <SafeAreaProvider>
      <Root />

      <PortalHost /> {/* <-- Add this */}
    </SafeAreaProvider>
  );
}
```

All done. You can now use @argo22/mobile-ui-kit. For API Overview see [API documentation](#api-documentation)

# Usage

import components from `@argo22/mobile-ui-kit`

```typescript jsx
import { Button } from "@argo22/mobile-ui-kit";
export default () => <Button>Button</Button>
```

import icons from `@argo22/mobile-ui-kit/icons`. For more information see [Icons section](#icons)

```typescript jsx
import { SearchIcon } from "@argo22/mobile-ui-kit/icons";
export default () => <SearchIcon />
```

# API documentation

### Atoms
Atoms are the fundamental building blocks of the UI, providing simple and reusable components like typography and component for custom icons.

- [Helper Text](./docs/HelperText.docs.md)
- [Custom Icon](./docs/Icon.docs.md)
- [Label](./docs/Label.docs.md)
- [Loader](./docs/Loader.docs.md)
- [Typography](./docs/Typography.docs.md)
- [UI Slot](./docs/UISlot.docs.md)

### Molecules
Molecules combine two or more atoms to form more complex UI components, such as buttons and input fields, which offer richer functionality and interaction.
- [Button](./docs/Button.docs.md)
- [Check Box](./docs/CheckBox.docs.md)
- [Input](./docs/Input.docs.md)
- [Radio Group](./docs/RadioGroup.docs.md)
- [Select](./docs/Select.docs.md)
- [Switch](./docs/Switch.docs.md)

### Toast
The Toast category includes components related to displaying transient notifications to inform users of important information or status changes.
- [Toast](./docs/Toast.docs.md)
- [ToastManager](./docs/ToastManager.docs.md)


# Theming

UI kit offers a way to customize components and UI tokens through themes. There is [defaultTheme](./src/theme/theme.ts) you can use as a starting point to customize the UI kit.


```typescript
import { defaultTheme, type Theme } from "@argo22/mobile-ui-kit";

const pumpkinTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: {
      100: "#f6c7b4",
      400: "#f19068",
      500: "#f17643",
      600: "#ef6228",
      800: "#bb3d0a",
    },
  },
};

```

You can customize the theme as long as the structure stays the same. Make sure to use `Theme` type for custom themes to ensure structure integrity.

For official docs follow [Unistyles theming guide](https://reactnativeunistyles.vercel.app/reference/theming/)
## Loading Themes

Load themes in setup phase of `react-native-unistyles`.

```typescript jsx
import { UnistylesRegistry } from 'react-native-unistyles'
import { defaultTheme } from "./theme";

UnistylesRegistry
  .addThemes({
    light: defaultTheme,
    pumpkin: pumkinTheme,
  })
```

## Changing Theme
Use `UnistylesRuntime.setTheme()` function to change a theme programmatically

```typescript jsx
import { UnistylesRuntime } from 'react-native-unistyles'

// change the theme in any component
export const ChangeTheme = () => (
    <Button
        title="Change theme"
        onPress={() => UnistylesRuntime.setTheme('pumpkin')}
    />
)
```

# Icons

The package uses [Lucide Icons](https://lucide.dev/) as the icon set of choice and follows its design rules. Icons can be searched at [Lucide Icons](https://lucide.dev/icons/) and
imported from `@argo22/mobile-ui-kit/build/icons`.

## Usage

To use Lucide Icons, import them from the library as shown below:

```typescript jsx
import { SearchIcon } from "@argo22/mobile-ui-kit/build/icons";
export default () => <SearchIcon />
```

## Custom Icons

To add a custom icon, use the [Icon component](./docs/Icon.docs.md).

### Design Guidelines for Custom Icons

Designers should adhere to the following guidelines to ensure custom icons are compatible with Lucide's style:

1. **Use Lucide Icons**: Always use Lucide Icons as the primary icon set. Avoid using other icon sets to maintain visual consistency.
2. **Icon Dimensions**: Custom icons should be designed at 24x24 pixels.
3. **ViewBox**: Set the viewBox attribute to `0 0 24 24`.
4. **StrokeWidth**: Set the stroke-width to 2 to match the Lucide style guide.

By following these guidelines, you ensure that custom icons integrate seamlessly with the existing icon set and maintain a consistent design throughout the application.

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide](CONTRIBUTING.md).
