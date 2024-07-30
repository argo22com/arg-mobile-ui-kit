import { AppThemes, defaultTheme, PortalHost } from "@argo22/mobile-ui-kit";

import { View } from "react-native";
import { createStyleSheet, UnistylesRegistry, useStyles } from "react-native-unistyles";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Root } from "./src/Root";

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: defaultTheme,
  // register other themes with unique names
}).addConfig({
  // you can pass here optional config described below
  adaptiveThemes: true,
  initialTheme: "light",
});

export default function App() {
  const { styles } = useStyles(stylesheet);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Root />
        <PortalHost />
      </View>
    </SafeAreaProvider>
  );
}

const stylesheet = createStyleSheet((theme, miniRuntime) => ({
  container: {
    paddingTop: miniRuntime.insets.top,
    flex: 1,
  },
}));
