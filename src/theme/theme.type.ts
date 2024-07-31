import { defaultTheme } from "./theme";

export type Theme = typeof defaultTheme;

export type AppThemes = {
  [key: string]: typeof defaultTheme;
};