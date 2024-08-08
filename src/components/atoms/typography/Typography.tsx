import { useContext } from "react";
import { Text, type TextProps } from "react-native";
import {
  type UnistylesVariants,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

import { UIContext } from "../../../context";

type ComponentVariants = UnistylesVariants<typeof typographyStyleSheet>;
export type TypographyProps = { bold?: boolean } & TextProps &
  ComponentVariants;

export const Typography = ({
  children,
  style,
  size,
  variant,
  bold,
  disabled,
  error,
  color,
  ...rest
}: TypographyProps) => {
  const contextStyles = useContext(UIContext);

  const { styles } = useStyles(typographyStyleSheet, {
    size,
    color,
    disabled,
    error,
    variant,
  });

  return (
    <Text
      style={[styles.root, bold && styles.bold(variant), contextStyles, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const typographyStyleSheet = createStyleSheet((theme) => ({
  root: {
    fontFamily: theme.fontFamily.paragraph.light,

    variants: {
      color: {
        primary: {
          color: theme.components.typography.colors.primary,
        },
        secondary: {
          color: theme.components.typography.colors.secondary,
        },
        default: {
          color: theme.components.typography.colors.primary,
        },
      },
      size: {
        default: {
          fontSize: theme.fontSize.md,
        },
        xl: {
          fontSize: theme.fontSize.xl,
        },
        lg: {
          fontSize: theme.fontSize.lg,
        },
        md: {
          fontSize: theme.fontSize.md,
        },
        sm: {
          fontSize: theme.fontSize.sm,
        },
        xs: {
          fontSize: theme.fontSize.xs,
        },
      },
      disabled: {
        true: {
          color: theme.color.neutral["400"],
        },
      },
      error: {
        true: {
          color: theme.color.error["400"],
        },
      },
      variant: {
        heading: {
          fontFamily: theme.fontFamily.heading.light,
        },
        default: {
          fontFamily: theme.fontFamily.paragraph.light,
        },
      },
    },
  },
  bold: (variant) => {
    if (variant === "heading") {
      return { fontFamily: theme.fontFamily.heading.strong };
    }
    return { fontFamily: theme.fontFamily.paragraph.strong };
  },
}));
