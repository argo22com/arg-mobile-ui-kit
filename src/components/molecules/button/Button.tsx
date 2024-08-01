import { type PropsWithChildren, type ReactElement, useMemo } from "react";
import { Pressable, type PressableProps, View } from "react-native";
import {
  type UnistylesVariants,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

import { UIContext } from "../../../context";
import { Loader } from "../../atoms/loader/Loader";
import { Typography } from "../../atoms/typography/Typography";
import { UISlot } from "../../atoms/ui-slot/UISlot";

type ComponentVariants = UnistylesVariants<typeof styleSheet>;

export type ButtonProps = {
  loading?: boolean;
  leftSlot?: ReactElement;
  rightSlot?: ReactElement;
  loaderPosition?: "right" | "left";
} & ComponentVariants &
  Omit<PressableProps, "children">;

export const Button = ({
  loading,
  leftSlot,
  rightSlot,
  children,
  size = "md",
  disabled,
  variant = "primary",
  loaderPosition = "right",
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const { styles, theme } = useStyles(styleSheet, {
    size,
    variant,
  });

  const uiColor = useMemo(() => {
    if (disabled)
      return theme.components.button.variants[variant].color.foreground;
    if (variant)
      return theme.components.button.variants[variant].color.foreground;
    return theme.components.button.variants.primary.color.foreground;
  }, [variant, disabled, theme]);

  const uiSize = useMemo(
    () => ({
      fontSize: theme.fontSize[size],
      size: theme.fontSize[size],
    }),
    [size, theme],
  );

  return (
    <UIContext.Provider
      value={{
        color: uiColor,
        ...uiSize,
      }}
    >
      <Pressable {...rest} disabled={loading || disabled}>
        {({ pressed }) => (
          <View
            style={[
              styles.root,
              pressed && styles.pressed(variant),
              disabled && styles.disabled(variant),
            ]}
          >
            {!(loading && loaderPosition === "left") && leftSlot ? (
              <UISlot element={leftSlot} />
            ) : null}
            {loading && loaderPosition === "left" ? <Loader /> : null}

            {typeof children === "string" ? (
              <Typography style={styles.text}>{children}</Typography>
            ) : (
              children
            )}

            {!(loading && loaderPosition === "right") && rightSlot ? (
              <UISlot element={rightSlot} />
            ) : null}
            {loading && loaderPosition === "right" ? <Loader /> : null}
          </View>
        )}
      </Pressable>
    </UIContext.Provider>
  );
};

const styleSheet = createStyleSheet((theme) => ({
    root: {
        justifyContent: "center",
        alignItems: "center",

        flexDirection: "row",

        overflow: "hidden",

        variants: {
            size: {
                sm: {
                    paddingHorizontal: theme.components.button.size.sm.spacing.horizontal,
                    paddingVertical: theme.components.button.size.sm.spacing.vertical,
                    borderRadius: theme.components.button.size.sm.borderRadius,
                    gap: theme.components.button.size.sm.gap,
                },
                md: {
                    paddingHorizontal: theme.components.button.size.md.spacing.horizontal,
                    paddingVertical: theme.components.button.size.md.spacing.vertical,
                    borderRadius: theme.components.button.size.md.borderRadius,
                    gap: theme.components.button.size.md.gap,
                },
                lg: {
                    paddingHorizontal: theme.components.button.size.lg.spacing.horizontal,
                    paddingVertical: theme.components.button.size.lg.spacing.vertical,
                    borderRadius: theme.components.button.size.lg.borderRadius,
                    gap: theme.components.button.size.lg.gap,
                },
                default: {
                    paddingHorizontal: theme.components.button.size.md.spacing.horizontal,
                    paddingVertical: theme.components.button.size.md.spacing.vertical,
                    borderRadius: theme.components.button.size.md.borderRadius,
                    gap: theme.components.button.size.md.gap,
                },
            },
            variant: {
                primary: {
                    borderWidth:
                    theme.components.button.variants.primary.borderWidth.default,
                    borderColor:
                    theme.components.button.variants.primary.color.background,
                    backgroundColor:
                    theme.components.button.variants.primary.color.background,
                },
                secondary: {
                    backgroundColor:
                    theme.components.button.variants.secondary.color.background,
                    borderWidth:
                    theme.components.button.variants.secondary.borderWidth.default,
                    borderColor:
                    theme.components.button.variants.secondary.color.foreground,
                },
                tertiary: {
                    backgroundColor:
                    theme.components.button.variants.tertiary.color.background,
                    borderWidth:
                    theme.components.button.variants.tertiary.borderWidth.default,
                    borderColor:
                    theme.components.button.variants.tertiary.color.background,
                },
                default: {
                    borderWidth:
                    theme.components.button.variants.primary.borderWidth.default,
                    borderColor:
                    theme.components.button.variants.primary.color.background,
                    backgroundColor:
                    theme.components.button.variants.primary.color.background,
                },
            },
        },
    },
    pressed: (variant) => {
        switch (variant) {
            case "tertiary":
                return {
                    borderWidth:
                    theme.components.button.variants.tertiary.borderWidth.pressed,
                    backgroundColor:
                    theme.components.button.variants.tertiary.color.pressed,
                };
            case "secondary":
                return {
                    borderWidth:
                    theme.components.button.variants.secondary.borderWidth.pressed,
                    backgroundColor:
                    theme.components.button.variants.secondary.color.pressed,
                };
            default:
                return {
                    borderWidth:
                    theme.components.button.variants.primary.borderWidth.pressed,
                    backgroundColor:
                    theme.components.button.variants.primary.color.pressed,
                };
        }
    },
    disabled: (variant) => {
        switch (variant) {
            case "tertiary":
                return {
                    backgroundColor:
                    theme.components.button.variants.tertiary.color.disabled.background,
                    borderColor:
                    theme.components.button.variants.tertiary.color.disabled.background,
                    borderWidth:
                    theme.components.button.variants.tertiary.borderWidth.disabled,
                };
            case "secondary":
                return {
                    backgroundColor:
                    theme.components.button.variants.secondary.color.disabled
                        .background,
                    borderColor:
                    theme.components.button.variants.secondary.color.disabled
                        .foreground,
                    borderWidth:
                    theme.components.button.variants.secondary.borderWidth.disabled,
                };
            default:
                return {
                    backgroundColor:
                    theme.components.button.variants.primary.color.disabled.background,
                    borderColor:
                    theme.components.button.variants.primary.color.disabled.background,
                    borderWidth:
                    theme.components.button.variants.primary.borderWidth.disabled,
                };
        }
    },
    text: {
        fontFamily: theme.components.button.font,
    },
}));
