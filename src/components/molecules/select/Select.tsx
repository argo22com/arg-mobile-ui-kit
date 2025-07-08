import * as SelectPrimitive from "@rn-primitives/select";
import { ChevronDown, ChevronUp } from "lucide-react-native";
import { type ReactElement, useState } from "react";
import { StyleSheet, View, type ViewProps, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import type { PositionedContentProps } from "@rn-primitives/types";

import { UIContext } from "../../../context";
import { HelperText } from "../../atoms/helper-text/HelperText";
import { Label } from "../../atoms/label/Label";
import {
  Typography,
  typographyStyleSheet,
} from "../../atoms/typography/Typography";
import { UISlot } from "../../atoms/ui-slot/UISlot";

type Option = { label: string; value: string };

export type SelectProps = {
  value?: Option;
  options: Option[];
  onValueChange: (option: Option) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
  error?: boolean;
  contentSide?: PositionedContentProps["side"];
  endSlotOpened?: ReactElement;
  endSlotClosed?: ReactElement;
} & ViewProps;

export const Select = ({
  options,
  label = "",
  placeholder = "",
  helperText = "",
  onValueChange,
  value,
  disabled,
  error,
  contentSide = undefined,
  endSlotOpened = <ChevronUp />,
  endSlotClosed = <ChevronDown />,
  ...rest
}: SelectProps) => {
  const insets = useSafeAreaInsets();

  const [width, setWidth] = useState<number>();
  const [isOpen, setIsOpen] = useState<boolean>();

  const { styles, theme } = useStyles(stylesheet, {
    disabled,
    error,
    active: isOpen,
  });
  const { styles: typoStyles } = useStyles(typographyStyleSheet, {
    disabled,
    error,
  });

  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
  };

  return (
    <View {...rest}>
      <UIContext.Provider
        value={{
          color: (styles.root as ViewStyle).borderColor,
          size: theme.size.icon,
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
        <SelectPrimitive.Root
          value={value}
          onValueChange={(value) => (value ? onValueChange(value) : null)}
          style={styles.root}
          onOpenChange={setIsOpen}
          onLayout={(event) => {
            setWidth(event.nativeEvent.layout.width);
          }}
          disabled={disabled}
        >
          <SelectPrimitive.Trigger
            disabled={disabled}
            style={({ pressed }) => [
              pressed && styles.pressedItem,
              styles.trigger,
            ]}
          >
            <SelectPrimitive.Value
              style={[typoStyles.root, !value && styles.placeholder]}
              placeholder={placeholder}
            />
            <UISlot element={isOpen ? endSlotOpened : endSlotClosed} />
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Overlay style={styles.overlay}>
              <SelectPrimitive.Content
                alignOffset={-theme.components.input.variants.default.borderWidth}
                sideOffset={theme.spacing.sm}
                style={[styles.content, { width }]}
                insets={contentInsets}
                side={contentSide}
              >
                <SelectPrimitive.Viewport>
                  {options.map((item) => (
                    <SelectPrimitive.Item
                      key={item.value}
                      label={item.label}
                      value={item.value}
                      style={({ pressed }) => [
                        styles.item,
                        pressed && styles.pressedItem,
                      ]}
                    >
                      <SelectPrimitive.ItemIndicator
                        style={styles.selectedItem}
                      />
                      <Typography>{item.label}</Typography>
                    </SelectPrimitive.Item>
                  ))}
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Overlay>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
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
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    minWidth: 150,

    borderWidth: theme.components.input.variants.default.borderWidth,
    borderRadius: theme.components.input.borderRadius,
    borderColor: theme.components.input.variants.default.color.foreground,
    backgroundColor: theme.components.input.variants.default.color.background,

    overflow: "hidden",

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
  placeholder: {
    color: theme.components.typography.colors.placeholder,
    variants: {
      error: {
        true: {
          color: theme.components.input.variants.error.color.foreground,
          opacity: 0.5,
        },
      }
    }
  },
    trigger: {
        paddingHorizontal: theme.components.input.spacings.horizontal,
        paddingVertical: theme.components.input.spacings.vertical,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
    },
    overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    backgroundColor: theme.components.input.variants.active.color.background,
    borderWidth: 1,
    borderRadius: theme.components.input.borderRadius,
    borderColor: theme.components.input.variants.active.color.foreground,
    overflow: "hidden",
  },
  item: {
    paddingVertical: theme.components.selectOption.spacing.vertical,
    paddingHorizontal: theme.components.selectOption.spacing.horizontal,
  },
  pressedItem: {
    backgroundColor: theme.components.selectOption.variants.pressed.color,
  },
  selectedItem: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.components.selectOption.variants.active.color,
  },
  label: {
    marginBottom: theme.components.input.spacings.label,
  },
  helperText: {
    marginTop: theme.components.input.spacings.helpertext,
  }
}));
