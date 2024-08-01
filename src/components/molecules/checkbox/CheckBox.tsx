import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import { CheckIcon } from "lucide-react-native";
import { type PropsWithChildren, useMemo } from "react";
import { Pressable, View, type ViewProps, type ViewStyle } from "react-native";
import {
  type UnistylesVariants,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

import { UIContext } from "../../../context/context";
import { HelperText } from "../../atoms/helper-text/HelperText";
import { Typography } from "../../atoms/typography/Typography";
import { UISlot } from "../../atoms/ui-slot/UISlot";
import {Label} from "../../atoms/label/Label";

type ComponentVariants = UnistylesVariants<typeof styleSheet>;

export type CheckBoxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;

  disabled?: boolean;
  error?: boolean;

  label?: string;
  helperText?: string;
} & ComponentVariants &
  ViewProps;

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

  const typographyColor = useMemo(() => {
    if(error) return undefined;
    if(disabled) return undefined;
    return checked ? theme.components.checkbox.label.variant.active.color : undefined;
  }, [checked, theme]);

  return (
    <View {...rest}>
      <UIContext.Provider
        value={{
          color: uiColor,
          size: theme.sizes.checkbox * 0.75,
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
                  <UIContext.Provider
                      value={{
                        color: typographyColor || uiColor,
                      }}
                  >
                    {label ? (
                        <Label style={{fontFamily:theme.components.checkbox.label.font}}>{label}</Label>
                    ) : null}
                  </UIContext.Provider>
            </>
          )}
        </Pressable>
        {helperText ? <HelperText>{helperText}</HelperText> : null}
      </UIContext.Provider>
    </View>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.components.checkbox.borderRadius,

    borderColor: theme.components.input.variants.default.color.foreground,
    borderWidth: theme.components.input.variants.default.borderWidth,
    backgroundColor: theme.components.input.variants.default.color.background,

    width: theme.sizes.checkbox,
    height: theme.sizes.checkbox,

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
  pressed: {
    backgroundColor: theme.components.input.variants.pressed.color,
  },
}));
