import { View } from "react-native";
import Svg, { Path, type SvgProps } from "react-native-svg";

import { Input, Button, Icon } from "@argo22/mobile-ui-kit";

export const IconExample = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        gap: 8,
        padding: 8,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Icon
        SvgIcon={SvgComponent}
        size={24}
        absoluteStrokeWidth
        color="green"
      />
      <Button leftSlot={<Icon SvgIcon={SvgComponent} />} />
      <Button leftSlot={<Icon SvgIcon={SvgComponent} />} variant="secondary" />
      <Button leftSlot={<Icon SvgIcon={SvgComponent} />} variant="tertiary" />

      <Input startSlot={<Icon SvgIcon={SvgComponent} />} error />
    </View>
  );
};

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2v2m-3 8v9m6-9v9M5 16l4-2m6 0 4 2M9 18h6M10 8v.01M14 8v.01M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z"
    />
  </Svg>
);
