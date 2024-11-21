import * as ToastPrimitive from "@rn-primitives/toast";
import {
  CircleAlert,
  CircleCheck,
  InfoIcon,
  TriangleAlert,
  XIcon,
} from "lucide-react-native";
import type { ReactElement } from "react";
import { Pressable, View, type ViewStyle } from "react-native";
import {
  type UnistylesVariants,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

import { UIContext } from "../../../context/context";
import { Typography } from "../../atoms/typography/Typography";
import { UISlot } from "../../atoms/ui-slot/UISlot";

type ComponentVariants = UnistylesVariants<typeof stylesheet>;

const toastIcon: Record<
  NonNullable<ComponentVariants["type"]>,
  ReactElement
> = {
  info: <InfoIcon />,
  success: <CircleCheck />,
  warning: <CircleAlert />,
  error: <TriangleAlert />,
};

export type ToastProps = {
  title?: string;
  description?: string;
  onClose: () => void;
  pressable?: boolean;
  onPress?: () => void;
  open?: boolean;
  toastType?: "background" | "foreground";
  icon?: typeof toastIcon | null;
  closeSlot?: ReactElement | null;
  actionSlot?: {
    onPress: () => void;
    slot: ReactElement;
  };
} & ComponentVariants;

export const Toast = ({
  title,
  description,
  onClose,
  pressable,
  onPress,
  toastType,
  open = true,
  type = "info",
  icon = toastIcon,
  closeSlot = <XIcon />,
  actionSlot,
}: ToastProps) => {
  const { styles, theme } = useStyles(stylesheet, {
    type,
  });

  return (
    <Pressable
      disabled={!pressable}
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <UIContext.Provider
        value={{
          color: (styles.root as ViewStyle).borderColor,
          size: theme.components.toast.iconSize,
        }}
      >
        <ToastPrimitive.Root
          type={toastType}
          open={open}
          onOpenChange={onClose}
          style={styles.root}
        >
          {icon ? <UISlot element={icon[type]} /> : null}

          <View style={styles.content}>
            {title ? (
              <ToastPrimitive.Title>
                <Typography style={styles.titleFont} >{title}</Typography>
              </ToastPrimitive.Title>
            ) : null}
            {description ? (
              <ToastPrimitive.Description>
                <Typography size="sm" style={styles.descriptionFont}>{description}</Typography>
              </ToastPrimitive.Description>
            ) : null}
          </View>

          {closeSlot ? (
            <ToastPrimitive.Close onPress={onClose}>
              <UISlot element={closeSlot} />
            </ToastPrimitive.Close>
          ) : null}
          {actionSlot ? (
            <ToastPrimitive.Action onPress={actionSlot.onPress}>
              <UISlot element={actionSlot.slot} />
            </ToastPrimitive.Action>
          ) : null}
        </ToastPrimitive.Root>
      </UIContext.Provider>
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    paddingHorizontal: theme.components.toast.spacings.horizontal,
    paddingVertical: theme.components.toast.spacings.vertical,
    borderRadius: theme.components.toast.borderRadius,

    position: "relative",

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    overflow: "hidden",

    gap: theme.spacing.md,

    variants: {
      type: {
        info: {
          backgroundColor:
            theme.components.toast.variants.info.color.background,
          borderColor: theme.components.toast.variants.info.color.foreground,
          borderWidth: theme.components.toast.variants.info.borderWidth,
        },
        success: {
          backgroundColor:
            theme.components.toast.variants.success.color.background,
          borderColor: theme.components.toast.variants.success.color.foreground,
          borderWidth: theme.components.toast.variants.success.borderWidth,
        },
        warning: {
          backgroundColor:
            theme.components.toast.variants.warning.color.background,
          borderColor: theme.components.toast.variants.warning.color.foreground,
          borderWidth: theme.components.toast.variants.warning.borderWidth,
        },
        error: {
          backgroundColor:
            theme.components.toast.variants.error.color.background,
          borderColor: theme.components.toast.variants.error.color.foreground,
          borderWidth: theme.components.toast.variants.error.borderWidth,
        },
        default: {
          backgroundColor:
            theme.components.toast.variants.info.color.background,
          borderColor: theme.components.toast.variants.info.color.foreground,
          borderWidth: theme.components.toast.variants.info.borderWidth,
        },
      },
    },
  },
  content: {
    flex: 1,
    gap: theme.spacing["2xs"],
  },
  pressed: {
    opacity: theme.components.toast.pressedOpacity,
  },
  titleFont:{
    fontFamily:theme.components.toast.fonts.title,
  },
  descriptionFont:{
    fontFamily:theme.components.toast.fonts.description,
  }
}));
