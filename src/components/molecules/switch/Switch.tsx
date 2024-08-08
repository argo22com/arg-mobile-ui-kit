import * as SwitchPrimitive from "@rn-primitives/switch";
import * as React from "react";
import { type PropsWithChildren, useMemo } from "react";
import { Pressable, View, type ViewProps, type ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { UIContext } from "../../../context";
import { HelperText } from "../../atoms/helper-text/HelperText";
import { Typography } from "../../atoms/typography/Typography";

export type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;

  disabled?: boolean;

  label?: string;
  helperText?: string;
} & ViewProps;

export const Switch = ({
  checked,
  onChange,
  label,
  helperText = "",
  disabled,
  ...rest
}: PropsWithChildren<SwitchProps>) => {
  const { styles, theme } = useStyles(styleSheet, {
    disabled,
    active: checked,
  });

  const uiColor = useMemo(() => {
    return (styles.switch as ViewStyle).borderColor;
  }, [styles]);

  const translateX = useDerivedValue(() =>
    checked
      ? theme.size.switch - theme.components.switch.spacing.horizontal
      : 0,
  );

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withTiming(translateX.value, { duration: 150 }) },
    ],
  }));

  return (
    <View {...rest}>
      <UIContext.Provider value={{ color: uiColor }}>
        <Pressable
          disabled={disabled}
          onPress={() => onChange(!checked)}
          style={styles.root}
        >
          {({ pressed: rootPressed }) => (
            <>
              <SwitchPrimitive.Root
                checked={checked}
                onCheckedChange={onChange}
                style={({ pressed }) => [
                  styles.switch,
                  (pressed || rootPressed) && styles.pressed,
                ]}
                disabled={disabled}
              >
                <Animated.View style={animatedThumbStyle}>
                  <SwitchPrimitive.Thumb>
                    <SwitchThumb style={{ backgroundColor: uiColor }} />
                  </SwitchPrimitive.Thumb>
                </Animated.View>
              </SwitchPrimitive.Root>
                {label ? (
                    <Typography style={styles.label}>{label}</Typography>
                ) : null}
            </>
          )}
        </Pressable>
        {helperText ? <HelperText style={styles.helperText}>{helperText}</HelperText> : null}
      </UIContext.Provider>
    </View>
  );
};

const SwitchThumb = ({ style, ...rest }: ViewProps) => {
  const { styles } = useStyles(styleSheet);
  return <View style={[styles.thumb, style]} {...rest} />;
};

const styleSheet = createStyleSheet((theme) => ({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumb: {
    width: theme.size.switch - theme.components.switch.spacing.horizontal * 2,
    height: theme.size.switch - theme.components.switch.spacing.vertical * 2,
    borderRadius: theme.components.switch.borderRadius,
  },
  switch: {
    width: theme.size.switch * 2,
    height: theme.size.switch,
    paddingHorizontal: theme.components.switch.spacing.horizontal,
    paddingVertical: theme.components.switch.spacing.vertical,

    justifyContent: "center",

    borderRadius: theme.components.switch.borderRadius,

    borderColor: theme.components.input.variants.default.color.foreground,
    borderWidth: theme.components.input.variants.default.borderWidth,

    backgroundColor: theme.components.input.variants.default.color.background,

    variants: {
      active: {
        true: {
          borderColor: theme.components.input.variants.active.color.foreground,
          backgroundColor:
            theme.components.input.variants.active.color.background,
          borderWidth: theme.components.input.variants.active.borderWidth,
        },
      },
      disabled: {
        true: {
          borderColor:
            theme.components.input.variants.disabled.color.foreground,
          backgroundColor:
            theme.components.input.variants.disabled.color.background,
          borderWidth: theme.components.input.variants.disabled.borderWidth,
        },
      },
    },
  },
  label: {
    marginLeft: theme.components.switch.label.spacing.vertical,
    fontFamily: theme.components.switch.label.font,

    variants: {
      active: {
        true: {
          fontFamily: theme.components.radio.radioLabel.variant.active.font,
          color: theme.components.switch.label.variant.active.color,
        }
      },
      disabled: {
        true: {
          fontFamily: theme.components.switch.label.font,
          color: theme.components.input.variants.disabled.color.foreground,
        }
      },
    }
  },
  helperText: {
    marginTop: theme.components.input.spacings.helpertext,
  },
  pressed: {
    backgroundColor: theme.components.input.variants.pressed.color,
  },
}));
