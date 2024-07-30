import { useState } from "react";
import { View } from "react-native";

import { Select } from "@argo22/mobile-ui-kit";

export const SelectExample = () => {
  const [selectValue, setSelectValue] = useState<{
    label: string;
    value: string;
  }>();

  const options = [
    { label: "Apple", value: "apple" },
    { label: "Bannana", value: "bannana" },
    { label: "Bannanaasd", value: "bannanaasd" },
    { label: "123", value: "123" },
    { label: "Ahoj", value: "Ahoj" },
  ];

  return (
    <View style={{ gap: 8, backgroundColor: "white", padding: 5 }}>
      <Select
        label="Fruit"
        value={selectValue}
        options={options}
        onValueChange={setSelectValue}
        placeholder="Select fruit"
      />

      <Select
        label="Fruit"
        value={selectValue}
        options={options}
        onValueChange={setSelectValue}
        placeholder="Select fruit"
        disabled
      />

      <Select
        label="Fruit"
        value={selectValue}
        options={options}
        onValueChange={setSelectValue}
        placeholder="Select fruit"
        error
        helperText="select at least one option"
      />
    </View>
  );
};
