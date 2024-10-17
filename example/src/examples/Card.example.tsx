import { View } from "react-native";
import { Typography } from "@argo22/mobile-ui-kit";
import { Card } from "@argo22/mobile-ui-kit";

export const CardExample = () => {
	return (
		<View
			style={{
				flexDirection: "row",
				gap: 16,
				flexWrap: "wrap",
				padding: 5,
			}}
		>
			<Card default>
				<Typography>Default</Typography>
			</Card>
			<Card filled>
				<Typography>Filled</Typography>
			</Card>
			<Card outlined>
				<Typography>Outlined default border radius</Typography>
			</Card>
			<Card outlined rounded={"md"}>
				<Typography>Outlined md(default) border radius</Typography>
			</Card>
			<Card outlined rounded={"lg"}>
				<Typography>Outlined large border radius</Typography>
			</Card>
			<Card outlined rounded={"sm"}>
				<Typography>Outlined small border radius</Typography>
			</Card>
		</View>
	);
};
