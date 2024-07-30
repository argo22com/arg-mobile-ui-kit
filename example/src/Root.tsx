import { ScrollView, View } from "react-native";
import { Typography } from "@argo22/mobile-ui-kit";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { ButtonExample } from "./examples/Button.example";
import { SwitchExample } from "./examples/Switch.example";
import { CheckboxExample } from "./examples/Checkbox.example";
import { IconExample } from "./examples/Icon.example";
import { InputExample } from "./examples/Input.example";
import { RadioGroupExample } from "./examples/RadioGroup.example";
import { SelectExample } from "./examples/Select.example";
import { ToastExample } from "./examples/Toast.example";
import { ToastManagerExample } from "./examples/ToastManager.example";
import { TypographyExample } from "./examples/Typography.example";

export const Root = () => {
  const { styles } = useStyles(stylesheet);

  return <ScrollView contentContainerStyle={styles.root} >
    <Typography size={"xl"}>@Argo22/mobile-ui-kit Example</Typography>
    <View style={{gap: 24, marginTop: 24}}>
      <ButtonExample />
      <CheckboxExample />
      <ToastExample />
      <IconExample />
      <InputExample />
      <RadioGroupExample />
      <SelectExample />
      <SwitchExample />
      <ToastManagerExample />
      <TypographyExample />
    </View>
  </ScrollView>
}

const stylesheet = createStyleSheet({
  root: {
    padding: 16,
  }
})