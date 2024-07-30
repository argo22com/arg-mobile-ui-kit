import { LucideLoaderCircle } from "lucide-react-native";
import { ComponentProps, useContext, useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

import { UIContext } from "../../../context/context";

export type LoaderProps = ComponentProps<typeof LucideLoaderCircle>;

export const Loader = ({ style, ...rest }: LoaderProps) => {
  const contextStyles = useContext(UIContext);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <Animated.View style={animatedStyle}>
      <LucideLoaderCircle
        size={contextStyles?.size}
        color={contextStyles?.color}
        {...rest}
      />
    </Animated.View>
  );
};
