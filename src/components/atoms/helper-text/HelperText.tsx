import { createStyleSheet, useStyles } from "react-native-unistyles";

import {
  Typography,
  type TypographyProps,
} from "../typography/Typography";

export type HelperTextProps = {
  alignWithInputValue?: boolean;
} & TypographyProps;

export const HelperText = ({
  children,
  style,
  alignWithInputValue = false,
  ...rest
}: HelperTextProps) => {
  const { styles } = useStyles(stylesheet, {
    alignWithInputValue,
  });
  return (
    <Typography style={[styles.root, style]} size="xs" {...rest}>
      {children}
    </Typography>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  root: {
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
