import { Box, Image, Button, Text } from "native-base";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppContainer from "../components/AppContainer";
import { useNavigation } from "@react-navigation/native";
const coverImg = require("../assets/recipe-cover.jpg");

const Home = () => {
  const navigation = useNavigation();
  return (
    // <AppContainer>
    <Box height={"full"}>
      <Image
        source={coverImg}
        alt="Alternate Text"
        size={"full"}
        // opacity={80}
        position="relative"
      />
      <LinearGradient
        colors={["transparent", "#000000"]}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          bottom: 10,
        }}
      ></LinearGradient>
      <Box
        height={"2/4"}
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        zIndex={2}
        padding={10}
      >
        <Text fontSize={40} color="white">
          Cooking Delicious {"\n"}Food Easily
        </Text>
        <Text fontSize={18} color="gray.500" marginBottom={5}>
          Discover more than 1200 food recipes in your hands and cooking it
          easily!
        </Text>
        <Button
          background={"green.400"}
          marginBottom="5"
          borderRadius="xl"
          padding={5}
          onPress={() => navigation.navigate("AppFeed" as never)}
        >
          Login
        </Button>
        <Button
          borderRadius="xl"
          backgroundColor={"rgba(52, 52, 52, 0.8)"}
          padding={5}
          onPress={() => navigation.navigate("AppFeed" as never)}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
    // </AppContainer>
  );
};

export default Home;
