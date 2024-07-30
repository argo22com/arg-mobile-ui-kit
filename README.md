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
  .addBreakpoints(breakpoints)
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

- [Toast](./docs/Toast.docs.md)
- [ToastManager](./docs/ToastManager.docs.md)
- [Custom Icon](./docs/Icon.docs.md)

# Theming

- TBD

# Icons

- TBD

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).
