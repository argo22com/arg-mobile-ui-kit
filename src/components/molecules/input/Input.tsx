import React, {
  forwardRef,
  type ReactElement,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Pressable,
  TextInput,
  type TextInputProps,
  View,
  type ViewProps,
  type ViewStyle,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { UIContext } from "../../../context";
import { HelperText } from "../../atoms/helper-text/HelperText";
import { Label } from "../../atoms/label/Label";
import { UISlot } from "../../atoms/ui-slot/UISlot";

export type InputProps = {
  value?: TextInputProps["value"];
  onChangeText?: TextInputProps["onChangeText"];
  placeholder?: TextInputProps["placeholder"];

  label?: string;
  helperText?: string;

  disabled?: boolean;
  error?: boolean;

  endSlot?: ReactElement;
  startSlot?: ReactElement;

  textInputProps?: TextInputProps;
} & ViewProps;

export const Input = forwardRef<Partial<TextInput>, InputProps>(
  (
    {
      label,
      value,
      onChangeText,
      disabled,
      error,
      helperText,
      endSlot,
      startSlot,
      placeholder,
      textInputProps,
      ...rest
    },
    ref,
  ) => {
    const internalRef = useRef<TextInput>(null);

    const [active, setActive] = useState<boolean>();

    const { styles, theme } = useStyles(stylesheet, {
      active,
      disabled,
      error,
    });

    useImperativeHandle(ref, () => ({
      focus: () => internalRef.current?.focus(),
      blur: () => internalRef.current?.blur(),
      clear: () => internalRef.current?.clear(),
      setSelection: (start, end) =>
        internalRef.current?.setSelection(start, end),
      isFocused: () => !!internalRef.current?.isFocused(),
    }));

    return (
      <View {...rest}>
        <UIContext.Provider
          value={{
            color: (styles.root as ViewStyle).borderColor,
          }}
        >
          {label ? (
            <Label
              style={styles.label}
              alignWithInputValue={
                theme.components.input.alignComponentsWithInputValue
              }
            >
              {label}
            </Label>
          ) : null}
          <Pressable
            style={styles.root}
            onPress={() => {
              internalRef.current?.focus();
            }}
          >
            {startSlot ? <UISlot element={startSlot} /> : null}
            <TextInput
              ref={internalRef}
              value={value}
              onChangeText={onChangeText}
              style={styles.input}
              aria-disabled={disabled}
              placeholderTextColor={
                theme.components.typography.colors.placeholder
              }
              placeholder={placeholder}
              editable={!disabled}
              {...textInputProps}
              onFocus={(e) => {
                setActive(true);
                textInputProps?.onFocus?.(e);
              }}
              onBlur={(e) => {
                setActive(false);
                textInputProps?.onBlur?.(e);
              }}
            />
            {endSlot ? <UISlot element={endSlot} /> : null}
          </Pressable>
          {helperText ? (
            <HelperText
              style={styles.helperText}
              alignWithInputValue={
                theme.components.input.alignComponentsWithInputValue
              }
            >
              {helperText}
            </HelperText>
          ) : null}
        </UIContext.Provider>
      </View>
    );
  },
);

Input.displayName = "Input";

const stylesheet = createStyleSheet((theme) => ({
  root: {
    minWidth: 150,

    borderWidth: theme.components.input.variants.default.borderWidth,
    borderRadius: theme.components.input.borderRadius,
    borderColor: theme.components.input.variants.default.color.foreground,

    backgroundColor: theme.components.input.variants.default.color.background,

    paddingHorizontal: theme.components.input.spacings.horizontal,
    paddingVertical: theme.components.input.spacings.vertical,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",

    gap: theme.spacing.sm,

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
      error: {
        true: {
          borderColor: theme.components.input.variants.error.color.foreground,
          backgroundColor:
            theme.components.input.variants.error.color.background,
          borderWidth: theme.components.input.variants.error.borderWidth,
        },
      },
    },
  },
  input: {
    flex: 1,
    fontFamily: theme.components.input.fonts.text,
    fontSize: theme.fontSize.md,
    color: theme.components.input.variants.default.color.foreground,

    variants: {
      active: {
        true: {
          color: theme.components.input.variants.active.color.foreground,
        },
      },
      disabled: {
        true: {
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
  label: {
    marginBottom: theme.components.input.spacings.label,
  },
  helperText: {
    marginTop: theme.components.input.spacings.helpertext,
  }
}));
