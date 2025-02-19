import { ArrowLeft, ArrowRight } from "@argo22/mobile-ui-kit/icons";
import { View } from "react-native";

import { Button } from "@argo22/mobile-ui-kit";
import {Trash} from "lucide-react-native";

export const ButtonExample = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        flexWrap: "wrap",
        backgroundColor: "white",
        padding: 5,
      }}
    >
      <View style={{ flexDirection: "row", gap: 4, flexWrap: "wrap" }}>
        <Button size="sm">Button</Button>
        <Button size="sm" loading>
          Button
        </Button>
        <Button size="sm" loading loaderPosition="left">
          Button
        </Button>
        <Button size="sm" leftSlot={<ArrowLeft />}>
          Button
        </Button>
        <Button size="sm" rightSlot={<ArrowRight />}>
          Button
        </Button>
        <Button size="sm" leftSlot={<ArrowRight />} loading>
          Button
        </Button>
      </View>

      <View style={{ flexDirection: "row", gap: 4, flexWrap: "wrap" }}>
        <Button size="sm" variant="secondary">
          Button
        </Button>
        <Button size="sm" variant="secondary" loading>
          Button
        </Button>
        <Button size="sm" variant="secondary" loading loaderPosition="left">
          Button
        </Button>
        <Button size="sm" variant="secondary" leftSlot={<ArrowLeft />}>
          Button
        </Button>
        <Button size="sm" variant="secondary" rightSlot={<ArrowRight />}>
          Button
        </Button>
        <Button size="sm" variant="secondary" leftSlot={<ArrowRight />} loading>
          Button
        </Button>
      </View>
      <View style={{ flexDirection: "row", gap: 4, flexWrap: "wrap" }}>
        <Button size="sm" variant="tertiary">
          Button
        </Button>
        <Button size="sm" variant="tertiary" loading>
          Button
        </Button>
        <Button size="sm" variant="tertiary" loading loaderPosition="left">
          Button
        </Button>
        <Button size="sm" variant="tertiary" leftSlot={<ArrowLeft />}>
          Button
        </Button>
        <Button size="sm" variant="tertiary" rightSlot={<ArrowRight />}>
          Button
        </Button>
        <Button size="sm" variant="tertiary" leftSlot={<ArrowRight />} loading>
          Button
        </Button>
      </View>
      <View style={{ flexDirection: "row", gap: 4, flexWrap: "wrap" }}>
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
      </View>
      <View style={{ flexDirection: "row", gap: 4, flexWrap: "wrap" }}>
        <Button variant={"danger"} size="sm" >Button</Button>
        <Button variant={"danger"} size="md">Button</Button>
        <Button variant={"danger"} size="lg" rightSlot={<Trash/>}>Button</Button>
      </View>
    </View>
  );
};
