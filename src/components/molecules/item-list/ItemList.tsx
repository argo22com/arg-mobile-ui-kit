import {View, type ViewProps} from "react-native";
import {createStyleSheet, useStyles} from "react-native-unistyles";
import {ReactNode} from "react";
import {ListItem} from "./ListItem";

export type ItemListProps = {
    items: Item[];
} & ViewProps;

export type Item = {
    left: TextPayload | ReactNode;
    right: TextPayload | ReactNode;
};

export type TextPayload = {
    value: string;
    icon?: ReactNode;
    disabled?: boolean;
};

export const ItemList = ({items, style, ...rest}: ItemListProps) => {
    const {styles} = useStyles(listStylesheet);

    return (
        <View style={[styles.root, style]} {...rest}>
            {items.map((item, index) => (
                <View key={index}>
                    <ListItem left={item.left} right={item.right}/>
                    {index < items.length - 1 && <ItemSeparator/>}
                </View>
            ))}
        </View>
    );
};

const ItemSeparator = () => {
    const {styles} = useStyles(listStylesheet);
    return <View style={styles.separator}/>;
};

const listStylesheet = createStyleSheet((theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.components.list.color.background,
        borderRadius: theme.components.list.borderRadius,
        paddingVertical: theme.components.list.spacing.vertical,
        paddingHorizontal: theme.components.list.spacing.horizontal,
        rowGap: theme.components.list.gap,
    },
    separator: {
        height: theme.components.list.separator.height,
        backgroundColor: theme.components.list.separator.color,
    },
}));
