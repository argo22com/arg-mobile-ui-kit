import * as RadioGroupPrimitive from "@rn-primitives/radio-group";
import { useMemo } from "react";
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  View,
  type ViewProps,
  type ViewStyle,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { UIContext } from "../../../context/context";
import { HelperText } from "../../atoms/helper-text/HelperText";
import { Label } from "../../atoms/label/Label";

type Option = { label: string; value: string };

export type RadioGroupProps = {
  options: Option[];
  onValueChange: (value: Option["value"]) => void;
  value?: Option["value"];
  label?: string;
  helperText?: string;
  disabled?: boolean;
  error?: boolean;
} & ViewProps;

export const RadioGroup = ({
  value,
  options,
  onValueChange,
  label,
  helperText,
  disabled,
  error,
  ...rest
}: RadioGroupProps) => {
  const { styles, theme } = useStyles(radioGroupStylesheet, {
    disabled,
    error,
    active: !!value,
  });

  const uiColor = useMemo(() => {
    return (styles.root as TextStyle).color;
  }, [styles]);

  const typographyColor = useMemo(() => {
    if (error) return undefined;
    if (disabled) return undefined;
    return !!value ? theme.components.radio.groupLabel.variant.active.color : undefined;
  }, [value, theme]);

  return (
      <View {...rest}>
        <UIContext.Provider value={{ color: uiColor }}>
          <RadioGroupPrimitive.Root value={value} onValueChange={onValueChange} style={styles.root}>
            <UIContext.Provider
                value={{
                  color: typographyColor || uiColor,
                }}
            >
              {label && <Label style={{ fontFamily: theme.components.radio.groupLabel.font }}>{label}</Label>}
            </UIContext.Provider>
            {options.map((item) => (
                <Radio
                    label={item.label}
                    value={item.value}
                    key={item.value}
                    selected={value === item.value}
                    disabled={disabled}
                    error={error}
                    onPress={() => onValueChange(item.value)}
                />
            ))}
          </RadioGroupPrimitive.Root>

          {helperText && <HelperText>{helperText}</HelperText>}
        </UIContext.Provider>
      </View>
  );
};

const radioGroupStylesheet = createStyleSheet((theme) => ({
  root: {
    gap: theme.spacing.sm,
    variants: {
      active: {
        true: {
          color: theme.components.input.variants.active.color.foreground,
        },
      },
      disabled: {
        true: {
          opacity: theme.components.disabled.opacity,
          color: theme.components.input.variants.disabled.color.foreground,
        },
      },
      error: {
        true: {
          color: theme.components.input.variants.error.color.foreground,
        },
      },
      default: {
        true: {
          color: theme.components.input.variants.default.color.foreground,
        },
      },
    },
  },
}));

type RadioProps = {
  selected?: boolean;
  error?: boolean;
  style?: StyleProp<ViewStyle>;
} & Option &
    Omit<PressableProps, "style">;

const Radio = ({ value, label, selected, disabled, error, style, ...rest }: RadioProps) => {
  const { styles, theme } = useStyles(radioStylesheet, {
    selected,
    disabled: !!disabled,
    error: !!error,
  });
  return (
      <Pressable disabled={disabled} style={[styles.root, style]} {...rest}>
        {({ pressed: rootPressed }) => (
            <UIContext.Provider
                value={{
                  color: (styles.radio as ViewStyle).borderColor,
                }}
            >
              <RadioGroupPrimitive.Item
                  value={value}
                  aria-labelledby={label}
                  disabled={disabled}
                  style={({ pressed }) => [
                    styles.radio,
                    (pressed || rootPressed) && styles.pressed,
                  ]}
              >
                <RadioGroupPrimitive.Indicator>
                  <View style={styles.dot} />
                </RadioGroupPrimitive.Indicator>
              </RadioGroupPrimitive.Item>
              <Label
                  style={[error || disabled || styles.label, { fontFamily: theme.components.radio.radioLabel.font }]}
                  nativeID={label}
              >
                {label}
              </Label>
            </UIContext.Provider>
        )}
      </Pressable>
  );
};

const radioStylesheet = createStyleSheet((theme) => ({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,

    variants: {
      active: {
        true: {
          color: theme.components.input.variants.active.color.foreground,
        },
      },
      disabled: {
        true: {
          opacity: theme.components.disabled.opacity,
          color: theme.components.input.variants.disabled.color.foreground,
        },
      },
      error: {
        true: {
          color: theme.components.input.variants.error.color.foreground,
        },
      },
    },
  },
  radio: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: theme.components.radio.borderRadius,

    width: theme.sizes.radio,
    height: theme.sizes.radio,

    variants: {
      selected: {
        true: {
          borderColor: theme.components.input.variants.active.color.foreground,
          borderWidth: theme.components.input.variants.active.borderWidth,
          backgroundColor:
            theme.components.input.variants.active.color.background,
        },
        false: {
          borderColor: theme.components.input.variants.default.color.foreground,
          borderWidth: theme.components.input.variants.default.borderWidth,
          backgroundColor:
            theme.components.input.variants.default.color.background,
        },
      },
      disabled: {
        true: {
          opacity: theme.components.disabled.opacity,
          borderColor:
            theme.components.input.variants.disabled.color.foreground,
          backgroundColor:
            theme.components.input.variants.disabled.color.background,
          borderWidth: theme.components.input.variants.disabled.borderWidth,
        },
      },
      error: {
        true: {
          borderColor: theme.components.input.variants.error.color.foreground,
          backgroundColor:
            theme.components.input.variants.error.color.background,
          borderWidth: theme.components.input.variants.error.borderWidth,
        },
      },
      default: {
        true: {
          borderColor: theme.components.input.variants.default.color.foreground,
          backgroundColor:
            theme.components.input.variants.default.color.background,
          borderWidth: theme.components.input.variants.default.borderWidth,
        },
      },
    },
  },
  dot: {
    width: theme.sizes.radio * 0.6,
    height: theme.sizes.radio * 0.6,
    borderRadius: theme.components.radio.borderRadius,

    variants: {
      selected: {
        true: {
          backgroundColor:
          theme.components.input.variants.active.color.foreground,
        },
      },
      disabled: {
        true: {
          opacity: theme.components.disabled.opacity,
          backgroundColor:
          theme.components.input.variants.disabled.color.foreground,
        },
      },
      error: {
        true: {
          backgroundColor:
          theme.components.input.variants.error.color.foreground,
        },
      },
    },
  },
  label: {
    variants: {
      selected: {
        true: {
          color: theme.components.radio.radioLabel.variant.active.color,
        },
        false: {
          color: theme.components.radio.radioLabel.variant.default.color,
        },
      },
    },
  },
  pressed: {
    backgroundColor: theme.components.input.variants.pressed.color,
  },
}));
