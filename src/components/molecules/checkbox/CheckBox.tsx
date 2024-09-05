import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import { CheckIcon } from "lucide-react-native";
import { type PropsWithChildren, useMemo } from "react";
import { Pressable, View, type ViewProps, type ViewStyle } from "react-native";
import {
  type UnistylesVariants,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

import { UIContext } from "../../../context";
import { HelperText } from "../../atoms/helper-text/HelperText";
import { Typography } from "../../atoms/typography/Typography";
import { UISlot } from "../../atoms/ui-slot/UISlot";

type ComponentVariants = UnistylesVariants<typeof styleSheet>;

type CheckBoxPropsBase = {
    checked: boolean;
    onChange: (checked: boolean) => void;

    disabled?: boolean;
    error?: boolean;
    
    label?: string;
    helperText?: string;
};


type CheckBoxProps = {
    [P in keyof ViewProps]: ViewProps[P];
} & {
    [P in keyof ComponentVariants]: ComponentVariants[P];
} & CheckBoxPropsBase;

export const CheckBox = ({
  checked,
  onChange,
  label,
  helperText = "",
  disabled,
  error,
  ...rest
}: PropsWithChildren<CheckBoxProps>) => {
  const { styles, theme } = useStyles(styleSheet, {
    disabled,
    error,
    active: checked,
  });

  const uiColor = useMemo(() => {
    return (styles.box as ViewStyle).borderColor;
  }, [styles]);

  return (
    <View {...rest}>
      <UIContext.Provider
        value={{
          color: uiColor,
          size: theme.size.checkbox * 0.75,
        }}
      >
        <Pressable
          disabled={disabled}
          onPress={() => onChange(!checked)}
          style={styles.root}
        >
          {({ pressed: rootPressed }) => (
            <>
              <CheckboxPrimitive.Root
                checked={checked}
                onCheckedChange={onChange}
                style={({ pressed }) => [
                  styles.box,
                  (pressed || rootPressed) && styles.pressed,
                ]}
                disabled={disabled}
              >
                <CheckboxPrimitive.Indicator>
                  <UISlot element={<CheckIcon />} />
                </CheckboxPrimitive.Indicator>
              </CheckboxPrimitive.Root>

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

const styleSheet = createStyleSheet((theme) => ({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.components.checkbox.borderRadius,

    borderColor: theme.components.input.variants.default.color.foreground,
    borderWidth: theme.components.input.variants.default.borderWidth,
    backgroundColor: theme.components.input.variants.default.color.background,

    width: theme.size.checkbox,
    height: theme.size.checkbox,

    variants: {
      active: {
        true: {
          borderColor: theme.components.input.variants.active.color.foreground,
          backgroundColor:
            theme.components.input.variants.active.color.background,
          borderWidth: theme.components.input.variants.active.borderWidth,
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
    fontFamily: theme.components.checkbox.label.font,
    marginLeft: theme.components.checkbox.label.spacing.vertical,
    color: theme.components.input.variants.default.color.foreground,
    variants: {
      active: {
        true: {
          color: theme.components.checkbox.label.variant.active.color,
          fontFamily: theme.components.checkbox.label.variant.active.font,
        }
      },
      error: {
        true: {
          color: theme.components.input.variants.error.color.foreground,
          fontFamily: theme.components.checkbox.label.font,
        }
      },
      disabled: {
        true: {
          color: theme.components.input.variants.disabled.color.foreground,
          fontFamily: theme.components.checkbox.label.font,
        }
      }
    }
  },
  helperText: {
    marginTop: theme.components.input.spacings.helpertext,
  },
  pressed: {
    backgroundColor: theme.components.input.variants.pressed.color,
  },
}));
