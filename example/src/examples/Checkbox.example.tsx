import { useState } from "react";
import { View } from "react-native";

import { CheckBox } from "@argo22/mobile-ui-kit";

export const CheckboxExample = () => {
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
      <CheckBox checked={checked} onChange={setChecked} />
      <CheckBox disabled checked={checked} onChange={setChecked} />
      <CheckBox error checked={checked} onChange={setChecked} />
      <CheckBox
        label="Agree to Terms and Conditions"
        checked={checked}
        onChange={setChecked}
      />
      <CheckBox
        label="Agree to Terms and Conditions"
        disabled
        checked={checked}
        onChange={setChecked}
      />
      <CheckBox
        label="Agree to Terms and Conditions"
        helperText="This field is required"
        error
        checked={checked}
        onChange={setChecked}
      />
    </View>
  );
};
