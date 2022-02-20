import { Button } from "native-base";
import React from "react";

interface ButtonProps {
  onPress: () => void;
  padding: number;
  borderRadius: string;
  marginBottom: string;
  background: string;
}

const ButtonComponent = ({
  onPress,
  padding,
  borderRadius,
  marginBottom,
  background,
}: ButtonProps) => {
  return (
    <Button
      onPress={onPress}
      padding={padding}
      borderRadius={borderRadius}
      marginBottom={marginBottom}
      background={background}
    >
      Login
    </Button>
  );
};

export default ButtonComponent;
