import { Box, Text, Input, Image, Flex, ScrollView, Center } from "native-base";
import React from "react";
import AppContainer from "../components/AppContainer";
import RecipeCoverCard from "../components/RecipeCoverCard";
const hamburgerImg = require("../assets/hamburger.png");
// const bookmarkChecked = require("../assets/bookmark_checked.png");
// const bookmarkUnchecked = require("../assets/bookmark_unchecked.png");

const AppFeed = () => {
  return (
    <AppContainer>
      {/* <ScrollView> */}
      <Box paddingY={10}>
        <Box padding={6}>
          <Text color={"green.600"} fontSize="3xl" fontWeight={"medium"}>
            Hello John,
          </Text>
          <Text color={"gray.400"} fontSize="md">
            What do you want to cook today?
          </Text>
          <Input
            placeholder="Search Recipes"
            padding={3}
            backgroundColor="#dfdfdf"
            marginY={4}
          />
          <Flex
            direction="row"
            position={"relative"}
            background="green.100"
            padding={5}
            //   borderRadius=""
          >
            <Image
              source={hamburgerImg}
              size="md"
              alt="Hamburger Image"
              marginRight={3}
            />
            <Flex flexDirection="column">
              <Text color={"black"}>
                You have 12 recipes {"\n"}that you haven't tried.
              </Text>
              <Text
                color={"green.800"}
                position="absolute"
                textDecorationLine="underline"
                bottom={0}
              >
                See Recipes
              </Text>
            </Flex>
          </Flex>
          <Box>
            <Text fontSize={"xl"} marginY="4" fontWeight="semibold">
              Trending Recipe
            </Text>
            <ScrollView horizontal={true}>
              <RecipeCoverCard />
              <RecipeCoverCard />
            </ScrollView>
          </Box>
        </Box>
      </Box>
      {/* </ScrollView> */}
    </AppContainer>
  );
};

export default AppFeed;
