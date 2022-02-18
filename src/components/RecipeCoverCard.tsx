import { Box, Text, Input, Image, Flex, ScrollView } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native";
const spaghetti = require("../assets/spaghetti.jpg");

const RecipeCoverCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate(
          "FoodPage" as never,
          { foodId: 1, foodName: "Spaghetti" } as never
        )
      }
    >
      <Box marginRight={4}>
        <Image
          source={spaghetti}
          width="72"
          height={"md"}
          alt="Cover Img"
          position={"relative"}
          borderRadius="md"
        />
        <Box
          position={"absolute"}
          top={2}
          left={1}
          backgroundColor="gray.600"
          opacity={75}
          paddingX={3}
          paddingY={1}
          borderRadius="md"
        >
          <Text fontSize={"xs"} color="white" zIndex={2}>
            Pasta
          </Text>
        </Box>
        <Box
          width={"5/6"}
          alignSelf="center"
          height={130}
          position={"absolute"}
          bottom={4}
          background={"black"}
          opacity={75}
          padding={3}
          borderRadius={"md"}
        >
          <Flex direction="row" justifyContent={"space-between"}>
            <Text
              zIndex={2}
              fontWeight={"semibold"}
              color="white"
              fontSize={"xl"}
            >
              Spaghetti with {"\n"}Shrimp Sauce
            </Text>
            {/* <Image
              source={bookmarkUnchecked}
              zIndex={2}
              color={"white"}
              size={"sm"}
              alt="Bookmark"
            /> */}
          </Flex>
          <Flex color={"gray.300"} flexDirection="row" marginTop={2}>
            <Text color={"gray.300"}>30 Mins</Text>
            <Text color={"gray.300"} marginX={2}>
              |
            </Text>
            <Text color={"gray.300"}>1 Serving</Text>
          </Flex>
        </Box>
      </Box>
    </TouchableHighlight>
  );
};

export default RecipeCoverCard;
