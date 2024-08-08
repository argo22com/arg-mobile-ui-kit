import type { LucideProps } from "lucide-react-native";
import type { ReactElement } from "react";
import type { SvgProps } from "react-native-svg";
import { useStyles } from "react-native-unistyles";

export type IconProps = {
  SvgIcon: (props: SvgProps) => ReactElement;
} & LucideProps;

const DEFAULT_LUCIDE_SIZE = 24;
const DEFAULT_LUCIDE_STROKE_WIDTH = 2;
const DEFAULT_LUCIDE_STROKE_COLOR = "currentColor";

export const Icon = ({
  SvgIcon,
  size = DEFAULT_LUCIDE_SIZE,
  strokeWidth = DEFAULT_LUCIDE_STROKE_WIDTH,
  width,
  height,
  color = DEFAULT_LUCIDE_STROKE_COLOR,
  absoluteStrokeWidth = false,
  ...rest
}: IconProps) => {
  const { theme } = useStyles();
  return (
    <SvgIcon
      width={size ?? theme.size.icon}
      height={size ?? theme.size.icon}
      stroke={color}
      strokeWidth={
        absoluteStrokeWidth
          ? (Number(strokeWidth) * DEFAULT_LUCIDE_SIZE) / Number(size)
          : strokeWidth
      }
      {...rest}
    />
  );
};
