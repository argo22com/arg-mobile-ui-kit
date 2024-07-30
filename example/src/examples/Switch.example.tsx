import { useState } from "react";
import { View } from "react-native";

import { Switch } from "@argo22/mobile-ui-kit";

export const SwitchExample = () => {
  const [checked, setChecked] = useState(false);
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
      <Switch checked={checked} onChange={setChecked} />

      <Switch checked={checked} onChange={setChecked} disabled />

      <Switch
        checked={checked}
        onChange={setChecked}
        label="Premium features"
      />

      <Switch
        checked={checked}
        onChange={setChecked}
        disabled
        label="Premium features"
        helperText="Only for premium users"
      />
    </View>
  );
};
