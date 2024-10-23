import { Typography } from "@argo22/mobile-ui-kit";
import { ScrollView, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { ButtonExample } from "./examples/Button.example";
import { CardExample } from "./examples/Card.example";
import { CheckboxExample } from "./examples/Checkbox.example";
import { IconExample } from "./examples/Icon.example";
import { InputExample } from "./examples/Input.example";
import { LoaderExample } from "./examples/Loader.example";
import { RadioGroupExample } from "./examples/RadioGroup.example";
import { SelectExample } from "./examples/Select.example";
import { SwitchExample } from "./examples/Switch.example";
import { ToastExample } from "./examples/Toast.example";
import { ToastManagerExample } from "./examples/ToastManager.example";
import { TypographyExample } from "./examples/Typography.example";
import { IconButtonExample } from "./examples/IconButton.example";
import { ItemListExample } from "./examples/ItemList.example";

export const Root = () => {
  const { styles } = useStyles(stylesheet);

    return (
        <ScrollView contentContainerStyle={styles.root} >
            <Typography size={"xl"}>@Argo22/mobile-ui-kit Example</Typography>
            <View style={{gap: 24, marginTop: 24}}>
                <ItemListExample />
                <CardExample />
                <IconButtonExample />
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
                <LoaderExample />
            </View>
        </ScrollView>
    )
}

const stylesheet = createStyleSheet({
    root: {
        padding: 16,
    }
})