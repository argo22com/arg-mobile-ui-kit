import { LockIcon, Search } from "@argo22/mobile-ui-kit/icons";
import { View } from "react-native";

import { Input, Button } from "@argo22/mobile-ui-kit";

export const InputExample = () => {
  return (
    <View
      style={{ gap: 8, backgroundColor: "white", padding: 5 }}
    >
      <Input placeholder="Enter your name" />
      <Input value="Marek Karel" placeholder="Enter your name" />
      <Input label="Name" value="Marek Karel" placeholder="Enter your name" />
      <Input
        label="Name"
        value="Marek Karel"
        placeholder="Enter your name"
        helperText="Enter your full name"
      />
      <Input
        label="Name"
        value="Marek Karel"
        placeholder="Enter your name"
        helperText="Enter your full name"
        error
      />
      <Input
        label="Name"
        value="Marek Karel"
        placeholder="Enter your name"
        helperText="Enter your full name"
        disabled
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        helperText="must contain at least 8 characters"
        endSlot={<LockIcon />}
      />
      <View style={{ flexDirection: "row", alignItems:"center", gap: 8 }}>
        <Input placeholder="What are you looking for" startSlot={<Search size={16} absoluteStrokeWidth={true} />} />
        <Button>Search</Button>
      </View>
    </View>
  );
};
