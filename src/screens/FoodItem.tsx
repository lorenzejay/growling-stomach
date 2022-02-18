import { Box, Flex, Image, Text } from "native-base";
import React, { useState } from "react";
import AppContainer from "../components/AppContainer";
const spaghetti = require("../assets/spaghetti.jpg");
const profilePic = require("../assets/ljaph-4.jpg");

const FoodItem = ({ route, navigation }: any) => {
  const [foodName, setFoodName] = useState("");
  const [foodId, setFoodId] = useState(0);
  console.log("route", route.params);
  // console.log("navigation", navigation);
  return (
    // todo: write ingredients
    <AppContainer>
      <Box>
        <Image
          source={spaghetti}
          height={"325"}
          alt="Image of the food clicked."
          position={"relative"}
        />
        <Flex
          padding={5}
          background={"rgba(52, 52, 52, 0.8)"}
          borderRadius={"md"}
          position="absolute"
          width={"3/4"}
          height="20"
          alignSelf={"center"}
          bottom={5}
          flexDirection="row"
        >
          <Image
            zIndex={2}
            source={profilePic}
            alt="AuthorPic"
            height={12}
            width={12}
            borderRadius="full"
            resizeMode="cover"
            marginRight={4}
          />
          <Box>
            <Text color={"white"}>Recipe By:</Text>
            <Text color={"white"}>Lorenze Jay</Text>
          </Box>
        </Flex>
      </Box>
    </AppContainer>
  );
};

export default FoodItem;
