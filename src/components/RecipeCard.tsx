import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Image } from "native-base";
import { TouchableHighlightBase } from "react-native";
const salad = require("../assets/salad.jpg");

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <Button
      marginTop={2}
      borderRadius={"xl"}
      padding={0}
      onPress={() =>
        navigation.navigate(
          "FoodPage" as never,
          { foodId: 1, foodName: "Spaghetti" } as never
        )
      }
      marginRight={4}
      position="relative"
      onHoverIn={() => console.log("hovering")}
    >
      <Box>
        <Image
          source={salad}
          alt="Image"
          width={72}
          height={"md"}
          borderRadius={"xl"}
        />
      </Box>
    </Button>
  );
};

export default RecipeCard;
