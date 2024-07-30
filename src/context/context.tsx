import { createContext } from "react";
import type { TextStyle, ViewStyle } from "react-native";

export type UIStyleType = (ViewStyle & TextStyle) & { size?: number };

export const UIContext = createContext<UIStyleType | null>(null);
