// if you defined themes
import { defaultTheme } from "../theme/theme";

type AppThemes = {
  [key: string]: typeof defaultTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
