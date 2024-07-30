import { Portal } from "@rn-primitives/portal";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";

import { useToast } from "./ToastManager.hook";
import { Toast } from "../components/molecules/toast/Toast";

export const ToastsPortal = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useStyles();
  const { toasts } = useToast();

  return (
    <Portal name="toast-manager">
      {toasts.length ? (
        <View
          style={{
            top: insets.top + theme.spacing.sm,
            position: "absolute",
            width: "100%",
            paddingHorizontal: theme.spacing.md,
            gap: theme.spacing.sm,
          }}
        >
          {toasts.map(([id, props]) => (
            <Toast key={id} {...props} />
          ))}
        </View>
      ) : null}
    </Portal>
  );
};
