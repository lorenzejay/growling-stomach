import { Box, Center, Image, Flex, Text } from "native-base";
import React, { useState } from "react";
const SettingCog = require("../assets/setting.png");
const BookMark = require("../assets/bookmark_unchecked.png");
const MagGlass = require("../assets/mag.png");
const Home = require("../assets/home.png");

const Footer = () => {
  const [currentMode, setCurrentMode] = useState(1);
  const nagivateToScreen = () => {};
  return (
    <Flex
      safeAreaTop
      width={"100%"}
      alignSelf="center"
      backgroundColor={"#ffffff"}
      //   paddingX={0}
      paddingBottom="10"
      flexDirection="row"
      height={"0.5"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      {/* <HStack width={"100%"} alignItems="center"> */}

      <Image source={Home} alt="Footer1" size={"6"} />
      <Box position={"absolute"}></Box>
      <Image source={MagGlass} alt="Footer2" size={"6"} />
      <Image source={BookMark} alt="Footer3" size={"7"} />
      <Image source={SettingCog} alt="Footer4" size={"6"} />
      {/* </HStack> */}
    </Flex>
  );
};

export default Footer;
