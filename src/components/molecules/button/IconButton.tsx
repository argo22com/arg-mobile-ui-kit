import { type PropsWithChildren, type ReactElement, useMemo } from "react";
import { Pressable, type PressableProps, View } from "react-native";
import {
    type UnistylesVariants,
    createStyleSheet,
    useStyles,
} from "react-native-unistyles";
import { UIContext } from "../../../context";
import { UISlot } from "../../atoms/ui-slot/UISlot";

type ComponentVariants = UnistylesVariants<typeof styleSheet>;

export type IconButtonProps = {
    iconSlot: ReactElement;
} & ComponentVariants &
    Omit<PressableProps, "children">;

export const IconButton = ({
   size = "md",
   disabled,
   variant = "primary",
   iconSlot,
   ...rest
}: PropsWithChildren<IconButtonProps>) => {
    const { styles, theme } = useStyles(styleSheet, {
        size,
        variant,
    });

    const uiColor = useMemo(() => {
        if (disabled)
            return theme.components.iconButton.variants[variant].color.foreground;
        if (variant)
            return theme.components.iconButton.variants[variant].color.foreground;
        return theme.components.iconButton.variants.primary.color.foreground;
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
            <Pressable {...rest} disabled={disabled}>
                {({ pressed }) => (
                    <View
                        style={[
                            styles.root,
                            pressed && styles.pressed(variant),
                            disabled && styles.disabled(variant),
                        ]}
                    >{iconSlot?<UISlot element={iconSlot} />:null}

                    </View>
                )}
            </Pressable>
        </UIContext.Provider>
    );
};

const styleSheet = createStyleSheet((theme) => ({
    root: {
        variants: {
            size: {
                sm: {
                    paddingHorizontal: theme.components.iconButton.size.sm.spacing.horizontal,
                    paddingVertical: theme.components.iconButton.size.sm.spacing.vertical,
                    borderRadius: theme.components.iconButton.size.sm.borderRadius,
                },
                md: {
                    paddingHorizontal: theme.components.iconButton.size.md.spacing.horizontal,
                    paddingVertical: theme.components.iconButton.size.md.spacing.vertical,
                    borderRadius: theme.components.iconButton.size.md.borderRadius,
                },
                lg: {
                    paddingHorizontal: theme.components.iconButton.size.lg.spacing.horizontal,
                    paddingVertical: theme.components.iconButton.size.lg.spacing.vertical,
                    borderRadius: theme.components.iconButton.size.lg.borderRadius,
                },
                default: {
                    paddingHorizontal: theme.components.iconButton.size.md.spacing.horizontal,
                    paddingVertical: theme.components.iconButton.size.md.spacing.vertical,
                    borderRadius: theme.components.iconButton.size.md.borderRadius,
                },
            },
            variant: {
                primary: {
                    borderWidth:
                    theme.components.iconButton.variants.primary.borderWidth.default,
                    borderColor:
                    theme.components.iconButton.variants.primary.color.border.default,
                    backgroundColor:
                    theme.components.iconButton.variants.primary.color.background,
                },
                secondary: {
                    backgroundColor:
                    theme.components.iconButton.variants.secondary.color.background,
                    borderWidth:
                    theme.components.iconButton.variants.secondary.borderWidth.default,
                    borderColor:
                    theme.components.iconButton.variants.secondary.color.border.default,
                },
                tertiary: {
                    backgroundColor:
                    theme.components.iconButton.variants.tertiary.color.background,
                    borderWidth:
                    theme.components.iconButton.variants.tertiary.borderWidth.default,
                    borderColor:
                    theme.components.iconButton.variants.tertiary.color.border.default,
                },
                default: {
                    borderWidth:
                    theme.components.iconButton.variants.primary.borderWidth.default,
                    borderColor:
                    theme.components.iconButton.variants.primary.color.border.default,
                    backgroundColor:
                    theme.components.iconButton.variants.primary.color.background,
                },
            },
        },
    },
    pressed: (variant) => {
        switch (variant) {
            case "tertiary":
                return {
                    borderWidth:
                    theme.components.iconButton.variants.tertiary.borderWidth.pressed,
                    backgroundColor:
                    theme.components.iconButton.variants.tertiary.color.pressed,
                    borderColor:
                    theme.components.iconButton.variants.tertiary.color.border.pressed,
                };
            case "secondary":
                return {
                    borderWidth:
                    theme.components.iconButton.variants.secondary.borderWidth.pressed,
                    backgroundColor:
                    theme.components.iconButton.variants.secondary.color.pressed,
                    borderColor:
                    theme.components.iconButton.variants.secondary.color.border.pressed,
                };
            default:
                return {
                    borderWidth:
                    theme.components.iconButton.variants.primary.borderWidth.pressed,
                    backgroundColor:
                    theme.components.iconButton.variants.primary.color.pressed,
                    borderColor:
                    theme.components.iconButton.variants.primary.color.border.pressed,
                };
        }
    },
    disabled: (variant) => {
        switch (variant) {
            case "tertiary":
                return {
                    backgroundColor:
                    theme.components.iconButton.variants.tertiary.color.disabled.background,
                    borderColor:
                    theme.components.iconButton.variants.tertiary.color.border.disabled,
                    borderWidth:
                    theme.components.iconButton.variants.tertiary.borderWidth.disabled,
                };
            case "secondary":
                return {
                    backgroundColor:
                    theme.components.iconButton.variants.secondary.color.disabled
                        .background,
                    borderColor:
                    theme.components.iconButton.variants.secondary.color.border.disabled,
                    borderWidth:
                    theme.components.iconButton.variants.secondary.borderWidth.disabled,
                };
            default:
                return {
                    backgroundColor:
                    theme.components.iconButton.variants.primary.color.disabled.background,
                    borderColor:
                    theme.components.iconButton.variants.primary.color.border.disabled,
                    borderWidth:
                    theme.components.iconButton.variants.primary.borderWidth.disabled,
                };
        }
    },
}));
