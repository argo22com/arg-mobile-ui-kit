import { View, type ViewProps } from "react-native";
import { type UnistylesVariants, createStyleSheet, useStyles } from "react-native-unistyles";

export type CardProps = {} & ViewProps & ComponentVariants;

type ComponentVariants = UnistylesVariants<typeof stylesheet>;

export const Card = ({ children, style, outlined, rounded, filled, ...rest }: CardProps) => {
	const { styles } = useStyles(stylesheet, { outlined, rounded, filled });
	return (
		<View style={[styles.root, style]} {...rest}>
			{children}
		</View>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	root: {
		paddingHorizontal: theme.components.card.spacing.horizontal,
		paddingVertical: theme.components.card.spacing.vertical,

		variants: {
			default: {
				true: {
					borderRadius: theme.components.card.variants.default.borderRadius,
					borderWidth: theme.components.card.variants.default.borderWidth,
					borderColor: theme.components.card.variants.default.borderColor,
					backgroundColor: theme.components.card.variants.default.backgroundColor,
				},
			},
			outlined: {
				true: {
					borderRadius: theme.components.card.variants.outlined.borderRadius,
					borderWidth: theme.components.card.variants.outlined.borderWidth,
					borderColor: theme.components.card.variants.outlined.borderColor,
					backgroundColor: theme.components.card.variants.outlined.backgroundColor,
				},
			},
			filled: {
				true: {
					borderRadius: theme.components.card.variants.filled.borderRadius,
					borderWidth: theme.components.card.variants.filled.borderWidth,
					borderColor: theme.components.card.variants.filled.borderColor,
					backgroundColor: theme.components.card.variants.filled.backgroundColor,
				},
			},
			rounded: {
				sm: {
					borderRadius: theme.components.card.variants.rounded.sm.borderRadius,
				},
				md: {
					borderRadius: theme.components.card.variants.rounded.md.borderRadius,
				},
				lg: {
					borderRadius: theme.components.card.variants.rounded.lg.borderRadius,
				},
				default: {
					borderRadius: theme.components.card.variants.rounded.md.borderRadius,
				},
			},
		},
	},
}));
