import {createStyleSheet, useStyles} from "react-native-unistyles";
import { StyleProp, TextStyle, View, ViewProps } from "react-native";
import {Typography} from "../../atoms/typography/Typography";
import {ReactNode} from "react";

export type Item = {
    left: TextPayload | ReactNode;
    right: TextPayload | ReactNode;
} & ViewProps;

export type TextPayload = {
    value: string;
    icon?: ReactNode;
    disabled?: boolean;
};

const isTextPayload = (payload: TextPayload | ReactNode | string): payload is TextPayload => {
    return !!(payload && typeof payload === "object" && "value" in payload);
}

export const ListItem = ({left, right, style, ...rest}: Item) => {
    const {styles} = useStyles(listItemStylesheet);

    const TextPayload = ({payload, fontStyle}: { payload: TextPayload, fontStyle: StyleProp<TextStyle>}) => (
        <>
            {payload.icon ? <View style={styles.icon}>{payload.icon}</View> : null}
            <Typography style={fontStyle} disabled={payload.disabled}>
                {payload.value}
            </Typography>
        </>
    );

    const renderContent = (content: TextPayload | ReactNode | string, fontStyle: StyleProp<TextStyle>) => {
        if (typeof content === "string") {
            return <Typography style={fontStyle}>{content}</Typography>;
        }
        if (isTextPayload(content)) {
            return <TextPayload payload={content} fontStyle={fontStyle}/>;
        }
        return content;
    };

    return (
        <View style={[styles.root, style]} {...rest}>
            <View style={[styles.slot,styles.left]}>
                {renderContent(left, [styles.leftFont, styles.flexFill])}
            </View>
            <View style={[styles.slot, styles.right]}>
                {renderContent(right, [styles.rightFont, styles.flexFill])}
            </View>
        </View>
    );
};

const listItemStylesheet = createStyleSheet((theme) => ({
    root: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: theme.components.listItem.spacing.vertical,
        paddingHorizontal: theme.components.listItem.spacing.horizontal,
        gap: theme.components.listItem.gap,
    },
    icon: {
        marginRight: theme.components.listItem.gap,
    },
    slot: {
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    left: {},
    right: {
        justifyContent: "flex-end",
    },
    flexFill: {
        flex: 1,
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
