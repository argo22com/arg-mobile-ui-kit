import {
  ArrowBigRight,
  CheckCircleIcon,
  CircleAlert,
  InfoIcon,
  Settings2,
  TimerOffIcon,
  TriangleAlert,
} from "lucide-react-native";
import { View } from "react-native";

import { useToast, ToastManagerProvider, ToastsPortal } from "@argo22/mobile-ui-kit/toast-manager";
import { Button } from "@argo22/mobile-ui-kit";

export const ToastManagerExample = () => {
  return (
    <ToastManagerProvider>
      <ToastsPortal />

      <ToastControlExample />
    </ToastManagerProvider>
  );
};

const ToastControlExample = () => {
  const { toast } = useToast();

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 8,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      <Button
        variant="secondary"
        leftSlot={<InfoIcon />}
        onPress={() =>
          toast({ title: "Info Toast", description: "This is info toast" })
        }
      >
        Toast Info
      </Button>
      <Button
        variant="secondary"
        leftSlot={<CheckCircleIcon />}
        onPress={() =>
          toast({
            title: "Success Toast",
            description: "This is Success toast",
            type: "success",
          })
        }
      >
        Toast success
      </Button>
      <Button
        variant="secondary"
        leftSlot={<TriangleAlert />}
        onPress={() =>
          toast({
            title: "Error Toast",
            description: "This is Error toast",
            type: "error",
          })
        }
      >
        Toast error
      </Button>
      <Button
        variant="secondary"
        leftSlot={<CircleAlert />}
        onPress={() =>
          toast({
            title: "Warning Toast",
            description: "This is Warning toast",
            type: "warning",
          })
        }
      >
        Toast warning
      </Button>
      <Button
        variant="secondary"
        leftSlot={<TimerOffIcon />}
        onPress={() =>
          toast({
            title: "Persist",
            description: "this will be here forever",
            type: "info",
            persist: true,
          })
        }
      >
        Toast persisted message
      </Button>
      <Button
        variant="secondary"
        leftSlot={<Settings2 />}
        onPress={() =>
          toast({
            title: "Custom",
            description: "This one's special",
            persist: true,
            pressable: true,
            onPress: () => alert("clicked on custom"),
            actionSlot: {
              slot: <ArrowBigRight />,
              onPress: () => alert("clicked on custom action"),
            },
          })
        }
      >
        Custom
      </Button>
    </View>
  );
};
