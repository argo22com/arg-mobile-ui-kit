import {View, type ViewProps} from "react-native";
import {createStyleSheet, useStyles} from "react-native-unistyles";
import { Item, ListItem } from "./ListItem";

export type ItemListProps = {
    items: Item[];
} & ViewProps;



export const ItemList = ({items, style, ...rest}: ItemListProps) => {
    const {styles} = useStyles(listStylesheet);

    return (
        <View style={[styles.root, style]} {...rest}>
            {items.map((item, index) => (
                <View key={index}>
                    <ListItem left={item.left} right={item.right} style={index < items.length - 1 && styles.bordered}/>
                </View>
            ))}
        </View>
    );
};

const listStylesheet = createStyleSheet((theme) => ({
    root: {
        backgroundColor: theme.components.list.color.background,
        borderRadius: theme.components.list.borderRadius,
        paddingVertical: theme.components.list.spacing.vertical,
        paddingHorizontal: theme.components.list.spacing.horizontal,
        rowGap: theme.components.list.gap,
    },
    bordered: {
        borderBottomWidth: theme.components.list.separator.height,
        borderBottomColor: theme.components.list.separator.color,
    },
}));
