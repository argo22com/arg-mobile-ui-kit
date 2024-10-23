import { ArrowLeft } from "@argo22/mobile-ui-kit/icons";
import { View } from "react-native";
import { IconButton } from "@argo22/mobile-ui-kit";

export const IconButtonExample = () => {
	return (
		<View style={{ gap: 16 }}>
			<View
				style={{
					flexDirection: "row",
					gap: 16,
				}}
			>
				<IconButton iconSlot={<ArrowLeft />} />
				<IconButton iconSlot={<ArrowLeft />} variant={"secondary"} />
				<IconButton iconSlot={<ArrowLeft />} variant={"tertiary"} />
			</View>
			<View
				style={{
					flexDirection: "row",
					gap: 16,
				}}
			>
				<IconButton iconSlot={<ArrowLeft />} disabled />
				<IconButton iconSlot={<ArrowLeft />} variant={"secondary"} disabled />
				<IconButton iconSlot={<ArrowLeft />} variant={"tertiary"} disabled />
			</View>
			<View
				style={{
					flexDirection: "row",
					gap: 16,
				}}
			>
				<IconButton iconSlot={<ArrowLeft />} size={"lg"} />
				<IconButton iconSlot={<ArrowLeft />} size={"md"} />
				<IconButton iconSlot={<ArrowLeft />} size={"sm"} />
			</View>
		</View>
	);
};
