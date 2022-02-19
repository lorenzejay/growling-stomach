import { useNavigation } from "@react-navigation/native";
import { Box, Button, Flex, Image, Text } from "native-base";
import React, { useState } from "react";
import AppContainer from "../components/AppContainer";
const spaghetti = require("../assets/spaghetti.jpg");
const profilePic = require("../assets/ljaph-4.jpg");
const BookMark = require("../assets/bookmark_unchecked.png");
const BackBtn = require("../assets/left-arrow.png");
const Option = require("../assets/option.png");

const FoodItem = () => {
  const navigation = useNavigation();

  const [foodName, setFoodName] = useState("");
  const [foodId, setFoodId] = useState(0);
  // console.log("route", route.params);
  // console.log("navigation", navigation);
  return (
    // todo: write ingredients
    <AppContainer>
      <Box
        position={"relative"}
        backgroundColor={"#ffffff"}
        paddingX={4}
        paddingY={10}
        paddingTop={"12"}
      >
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent="space-between"
          alignItems={"center"}
          marginBottom={3}
        >
          <Button
            height={10}
            width={10}
            backgroundColor="rgba(0, 16, 240,0)"
            onPress={() => navigation.goBack()}
          >
            <Image source={BackBtn} height={"full"} alt="Back Button" />
          </Button>
          <Button height={10} width={10} backgroundColor="rgba(0, 16, 240,0)">
            <Image
              source={Option}
              height={"5"}
              alt="Back Button"
              position={"relative"}
            />
          </Button>
        </Box>
        <Text fontSize={24} fontWeight={"bold"} marginBottom={3}>
          How to make Spaghetti with Shrimp Sauce
        </Text>
        <Image
          source={spaghetti}
          height={"250"}
          borderRadius={"xl"}
          alt="Image of the food clicked."
          marginBottom={5}
        />

        <Flex
          // background={"rgba(52, 52, 52, 0.8)"}
          borderRadius={"md"}
          position="relative"
          // height="20"

          justifyContent={"space-between"}
          // bottom={5}
          color="black"
          flexDirection="row"
        >
          <Flex direction="row" marginBottom={5}>
            <Image
              zIndex={2}
              source={profilePic}
              alt="AuthorPic"
              height={12}
              width={12}
              borderRadius="full"
              resizeMode="cover"
              marginRight={4}
              background={"black"}
            />
            <Box>
              <Text>Recipe By:</Text>
              <Text>Lorenze Jay</Text>
            </Box>
          </Flex>

          <Button
            backgroundColor={"red.600"}
            borderRadius={"xl"}
            width={24}
            height={10}
          >
            Follow
          </Button>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          flexDirection={"row"}
          alignItems="center"
        >
          <Text fontSize={24} fontWeight={"semibold"}>
            Ingredients
          </Text>
          <Text color={"#7c7b7b"}>5 Items</Text>
        </Flex>

        <Flex flexDirection={"column"} direction="column" marginBottom={3}>
          <Flex
            borderRadius={"xl"}
            backgroundColor={"#F1F1F1"}
            direction="row"
            alignItems={"center"}
            padding={3}
            marginBottom={3}
          >
            <Box
              backgroundColor={"#ffffff"}
              padding={3}
              borderRadius={"xl"}
              marginRight={3}
            >
              <Text>🍝</Text>
            </Box>
            <Text
              fontWeight={"semibold"}
              fontSize={18}
              flex={1}
              marginRight={3}
            >
              Pasta
            </Text>
            <Text>200g</Text>
          </Flex>

          <Flex
            borderRadius={"xl"}
            backgroundColor={"#F1F1F1"}
            direction="row"
            alignItems={"center"}
            padding={3}
            marginBottom={3}
          >
            <Box
              backgroundColor={"#ffffff"}
              padding={3}
              borderRadius={"xl"}
              marginRight={3}
            >
              <Text>🍅</Text>
            </Box>
            <Text
              fontWeight={"semibold"}
              fontSize={18}
              flex={1}
              marginRight={3}
            >
              Tomatoe Paste
            </Text>
            <Text>3g</Text>
          </Flex>
          <Flex
            borderRadius={"xl"}
            backgroundColor={"#F1F1F1"}
            direction="row"
            alignItems={"center"}
            padding={3}
            marginBottom={3}
          >
            <Box
              backgroundColor={"#ffffff"}
              padding={3}
              borderRadius={"xl"}
              marginRight={3}
            >
              <Text>🥩</Text>
            </Box>
            <Text
              fontWeight={"semibold"}
              fontSize={18}
              flex={1}
              marginRight={3}
            >
              Ground Beef
            </Text>
            <Text>1 lb</Text>
          </Flex>
          <Flex
            borderRadius={"xl"}
            backgroundColor={"#F1F1F1"}
            direction="row"
            alignItems={"center"}
            padding={3}
            marginBottom={3}
          >
            <Box
              backgroundColor={"#ffffff"}
              padding={3}
              borderRadius={"xl"}
              marginRight={3}
            >
              <Text>🧆 </Text>
            </Box>
            <Text
              fontWeight={"semibold"}
              fontSize={18}
              flex={1}
              marginRight={3}
            >
              Meat Balls
            </Text>
            <Text>1 lb</Text>
          </Flex>
        </Flex>
      </Box>
    </AppContainer>
  );
};

export default FoodItem;
