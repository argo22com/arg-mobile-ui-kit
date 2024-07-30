import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Typography, type TypographyProps } from "../typography/Typography";

export type LabelProps = {
  alignWithInputValue?: boolean;
} & TypographyProps;

export const Label = ({ style, alignWithInputValue, ...rest }: LabelProps) => {
  const { styles } = useStyles(stylesheet, {
    alignWithInputValue,
  });
  return <Typography style={[styles.root, style]} {...rest} />;
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
    fontFamily: theme.components.input.fonts.label,
    variants: {
      alignWithInputValue: {
        true: {
          paddingLeft: theme.components.input.spacings.horizontal,
        },
        false: {
          paddingLeft: 0,
        },
      },
    },
  },
}));
