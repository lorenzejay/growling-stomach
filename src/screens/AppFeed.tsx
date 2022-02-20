import {
  Box,
  Text,
  Input,
  Image,
  Flex,
  ScrollView,
  Center,
  Button,
} from "native-base";
import React from "react";
import { useState } from "react";
import AppContainer from "../components/AppContainer";
import RecentRecipeCard from "../components/RecentRecipeCard";
import RecipeCard from "../components/RecipeCard";
import RecipeCoverCard from "../components/RecipeCoverCard";
import UserProfile from "../components/UserProfile";
const burgerIcon = require("../assets/hamburger.png");
// const bookmarkUnchecked = require("../assets/bookmark_unchecked.png");
enum Categories {
  SALAD = "SALAD",
  BREAKFAST = "BREAKFAST",
  APPETIZER = "APPETIZER",
  NOODLE = "NOODLE",
  LUNCH = "LUNCH",
}
const AppFeed = () => {
  const [categorySelected, setCategorySelected] = useState(Categories.SALAD);
  return (
    <AppContainer>
      {/* <ScrollView> */}
      <Box paddingY={10}>
        <Box padding={6}>
          <Text color={"gray.800"} fontSize="3xl" fontWeight={"medium"}>
            Hello John,
          </Text>
          <Text color={"gray.700"} fontSize="md">
            What do you want to cook today?
          </Text>
          <Input
            placeholder="Search Recipes"
            padding={4}
            // backgroundColor="#fff"
            marginY={4}
            borderStyle={"solid"}
            borderWidth={2}
            borderRadius={"xl"}
          />
          <Flex
            direction="row"
            position={"relative"}
            background="green.100"
            padding={5}
            //   borderRadius=""
          >
            <Image
              source={burgerIcon}
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
            <Flex direction="row" justifyContent={"space-between"}>
              <Text fontSize={"xl"} marginY="4" fontWeight="semibold">
                Trending Recipes🔥
              </Text>
              <Button backgroundColor={"rgba(52, 52, 52, 0)"}>
                <Text color={"red.600"} fontWeight="semibold">
                  See all
                </Text>
              </Button>
            </Flex>
            <ScrollView horizontal={true}>
              <RecipeCoverCard />
              <RecipeCoverCard />
            </ScrollView>
          </Box>
          <Box marginY={4}>
            <Text fontWeight={"semibold"} fontSize="2xl">
              Popular Category
            </Text>
            {/* category scroll */}
            <ScrollView horizontal={true}>
              <Button
                backgroundColor={`${
                  categorySelected === Categories.SALAD
                    ? "red.600"
                    : "rgba(52,52,52,0)"
                }`}
                width={24}
                borderRadius={"xl"}
                onPress={() => setCategorySelected(Categories.SALAD)}
              >
                <Text
                  fontWeight={"semibold"}
                  color={`${
                    categorySelected === Categories.SALAD ? "white" : "red.600"
                  }`}
                >
                  Salad
                </Text>
              </Button>
              <Button
                backgroundColor={`${
                  categorySelected === Categories.BREAKFAST
                    ? "red.600"
                    : "rgba(52,52,52,0)"
                }`}
                width={24}
                borderRadius={"xl"}
                onPress={() => setCategorySelected(Categories.BREAKFAST)}
              >
                <Text
                  fontWeight={"semibold"}
                  color={`${
                    categorySelected === Categories.BREAKFAST
                      ? "white"
                      : "red.600"
                  }`}
                >
                  Breakfast
                </Text>
              </Button>
              <Button
                backgroundColor={`${
                  categorySelected === Categories.APPETIZER
                    ? "red.600"
                    : "rgba(52,52,52,0)"
                }`}
                width={24}
                borderRadius={"xl"}
                onPress={() => setCategorySelected(Categories.APPETIZER)}
              >
                <Text
                  fontWeight={"semibold"}
                  color={`${
                    categorySelected === Categories.APPETIZER
                      ? "white"
                      : "red.600"
                  }`}
                >
                  Appetizer
                </Text>
              </Button>
              <Button
                backgroundColor={`${
                  categorySelected === Categories.NOODLE
                    ? "red.600"
                    : "rgba(52,52,52,0)"
                }`}
                width={24}
                borderRadius={"xl"}
                onPress={() => setCategorySelected(Categories.NOODLE)}
              >
                <Text
                  fontWeight={"semibold"}
                  color={`${
                    categorySelected === Categories.NOODLE ? "white" : "red.600"
                  }`}
                >
                  Noodle
                </Text>
              </Button>
              <Button
                backgroundColor={`${
                  categorySelected === Categories.LUNCH
                    ? "red.600"
                    : "rgba(52,52,52,0)"
                }`}
                width={24}
                borderRadius={"xl"}
                onPress={() => setCategorySelected(Categories.LUNCH)}
              >
                <Text
                  fontWeight={"semibold"}
                  color={`${
                    categorySelected === Categories.LUNCH ? "white" : "red.600"
                  }`}
                >
                  Lunch
                </Text>
              </Button>
            </ScrollView>

            {/* food based on category selected */}
            <ScrollView horizontal={true}>
              <RecipeCard />
              <RecipeCard />
            </ScrollView>
          </Box>
          {/* recent recipes */}
          <Box marginY={10}>
            <Text fontSize={32} fontWeight={"semibold"}>
              Recent Recipe
            </Text>
            <ScrollView horizontal={true}>
              <RecentRecipeCard />
              <RecentRecipeCard />
            </ScrollView>
          </Box>
          <Box>
            <Flex
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                Popular Creators
              </Text>
              <Button variant={"ghost"}>
                <Text color={"red.600"} fontSize={"md"}>
                  See all
                </Text>
              </Button>
            </Flex>
            <ScrollView horizontal={true}>
              <UserProfile />
              <UserProfile />
            </ScrollView>
          </Box>
        </Box>
      </Box>
      {/* </ScrollView> */}
    </AppContainer>
  );
};

export default AppFeed;
