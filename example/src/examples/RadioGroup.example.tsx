import { useState } from "react";
import { View } from "react-native";

import { RadioGroup } from "@argo22/mobile-ui-kit";

export const RadioGroupExample = () => {
  const [radioValue, setRadioValue] = useState("apple");

  const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Kiwi", value: "kiwi" },
    { label: "Blackberry", value: "blackberry" },
  ];

  return (
    <View style={{ gap: 8, backgroundColor: "white", padding: 5 }}>
      <RadioGroup
        onValueChange={setRadioValue}
        value={radioValue}
        options={options}
        label="Choose one:"
      />
      <RadioGroup
        onValueChange={setRadioValue}
        value={radioValue}
        options={options}
        label="Choose one:"
        disabled
      />
      <RadioGroup
        onValueChange={setRadioValue}
        value={radioValue}
        options={options}
        label="Choose one:"
        helperText="Please select at-least one value"
        error
      />
    </View>
  );
};
