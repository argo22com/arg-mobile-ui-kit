import {createStyleSheet, useStyles} from "react-native-unistyles";
import {StyleProp, TextStyle, View} from "react-native";
import {Item, TextPayload} from "./ItemList";
import {Typography} from "../../atoms/typography/Typography";
import {ReactNode} from "react";

export const ListItem = ({left, right, ...rest}: Item) => {
    const {styles} = useStyles(listItemStylesheet);

    const renderTextPayload = (payload: TextPayload, fontStyle: StyleProp<TextStyle>) => (
        <>
            {payload.icon && <View style={styles.icon}>{payload.icon}</View>}
            <Typography style={fontStyle} disabled={payload.disabled}>
                {payload.value}
            </Typography>
        </>
    );

    const renderContent = (content: TextPayload | ReactNode | string, fontStyle: StyleProp<TextStyle>) => {
        if (typeof content === "string") {
            return <Typography style={fontStyle}>{content}</Typography>;
        }
        if (content && typeof content === "object" && "value" in content) {
            return renderTextPayload(content as TextPayload, fontStyle);
        }
        return content;
    };

    return (
        <View style={[styles.root]} {...rest}>
            <View style={styles.left}>
                {left && renderContent(left, styles.leftFont)}
            </View>
            <View style={styles.right}>
                {right && renderContent(right, styles.rightFont)}
            </View>
        </View>
    );
};

const listItemStylesheet = createStyleSheet((theme) => ({
    root: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: theme.components.listItem.spacing.vertical,
        paddingHorizontal: theme.components.listItem.spacing.horizontal,
    },
    icon: {
        marginRight: theme.components.listItem.gap,
    },
    left: {
        width: "40%",
        flexDirection: "row",
        alignItems: "center",
    },
    right: {
        width: "40%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    leftFont: {
        fontFamily: theme.components.listItem.font.left,
        fontSize: theme.components.listItem.font.size.left,
    },
    rightFont: {
        fontFamily: theme.components.listItem.font.right,
        fontSize: theme.components.listItem.font.size.right,
        textAlign: "right",
    },
}));
