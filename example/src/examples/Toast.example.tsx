import { BookOpen } from "lucide-react-native";
import { View } from "react-native";

import { Toast, Button } from "@argo22/mobile-ui-kit";

export const ToastExample = () => {
  const isOpen = true;
  const onClose = () => null;

  return (
    <View style={{ gap: 8, backgroundColor: "white", padding: 8 }}>
      <Toast open={isOpen} title="Title" onClose={onClose} closeSlot={null} />
      <Toast
        open={isOpen}
        description="Description"
        onClose={onClose}
        closeSlot={null}
      />
      <Toast
        open={isOpen}
        title="Title"
        description="Description"
        onClose={onClose}
        closeSlot={null}
      />
      <Toast
        open={isOpen}
        title="Title"
        description="This one is pressable."
        onClose={onClose}
        pressable
      />
      <Toast open={isOpen} title="Title" onClose={onClose} type="success" />
      <Toast open={isOpen} title="Title" onClose={onClose} type="warning" />
      <Toast open={isOpen} title="Title" onClose={onClose} type="error" />
      <Toast
        open={isOpen}
        title="With Action"
        onClose={onClose}
        type="info"
        closeSlot={null}
        actionSlot={{
          onPress: () => null,
          slot: (
            <Button variant="secondary" rightSlot={<BookOpen />}>
              Read More
            </Button>
          ),
        }}
      />
    </View>
  );
};
