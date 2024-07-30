import { View } from "react-native";

import { Typography } from "@argo22/mobile-ui-kit";

export const TypographyExample = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        flexWrap: "wrap",
        backgroundColor: "white",
        padding: 5,
      }}
    >
      <View style={{ gap: 2 }}>
        <Typography size="xl">Typography</Typography>
        <Typography size="lg">Typography</Typography>
        <Typography size="md">Typography</Typography>
        <Typography size="sm">Typography</Typography>
        <Typography size="xs">Typography</Typography>
      </View>
      <View style={{ gap: 2 }}>
        <Typography size="xl" variant="heading">
          Typography
        </Typography>
        <Typography size="lg" variant="heading">
          Typography
        </Typography>
        <Typography size="md" variant="heading">
          Typography
        </Typography>
        <Typography size="sm" variant="heading">
          Typography
        </Typography>
        <Typography size="xs" variant="heading">
          Typography
        </Typography>
      </View>
      <View style={{ gap: 2 }}>
        <Typography size="xl" color="secondary">
          Typography
        </Typography>
        <Typography size="lg" color="secondary">
          Typography
        </Typography>
        <Typography size="md" color="secondary">
          Typography
        </Typography>
        <Typography size="sm" color="secondary">
          Typography
        </Typography>
        <Typography size="xs" color="secondary">
          Typography
        </Typography>
      </View>
      <View style={{ gap: 2 }}>
        <Typography size="xl" color="secondary" variant="heading">
          Typography
        </Typography>
        <Typography size="lg" color="secondary" variant="heading">
          Typography
        </Typography>
        <Typography size="md" color="secondary" variant="heading">
          Typography
        </Typography>
        <Typography size="sm" color="secondary" variant="heading">
          Typography
        </Typography>
        <Typography size="xs" color="secondary" variant="heading">
          Typography
        </Typography>
      </View>
    </View>
  );
};
